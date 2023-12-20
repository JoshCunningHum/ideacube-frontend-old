import { defineStore } from 'pinia'
import type { Quiz } from '~/types/Quiz';
import { get, set } from '@vueuse/core';
import { CUDResponseStatus, type CUDResponse } from '~/types/Generics';
import type { Question } from '~/types/Question';
import type { Choice } from '~/types/Choice';

  // Monitors changes in order to show/hide the Save Change button
  // And to prevent user to exit builder without saving changes confirmation

export enum GetQuestionResponseStatus{
  FAILED,
  SUCCESS
}

export interface GetQuestionResponse{
  status: GetQuestionResponseStatus,
  questions: Question[]
}

export enum GetChoicesResponseStatus{
  FAILED,
  SUCCESS
}

export interface GetChoicesResponse{
  status: GetChoicesResponseStatus,
  choices: Choice[]
}

export const useQuizBuilderStore = defineStore('QuizBuilder', () => {
  const quizStore = useQuizStore();

  const ogQuiz = ref<Quiz | undefined>();
  const copyQuiz = ref<Quiz | undefined>();

  const ogQuestions = ref<Question[]>([]);
  const copyQuestions = ref<Question[]>([]);

  const ogChoiceMap = ref<{quizID: number, choices: Choice[]}[]>([]);
  const copyChoiceMap = ref<{quizID: number, choices: Choice[]}[]>([]);

  // Helper Functions for getting differences
  const isQuestionEqual = (a: Question, b: Question) : boolean => {
    return a.text === b.text && 
    a.type === b.type && 
    a.autograded === b.autograded && 
    a.points === b.points;
  }

  const isChoiceEqual = (a: Choice, b: Choice) : boolean => {
    return a.is_correct === b.is_correct &&
    a.point === b.point &&
    a.text === b.text;
  }

  const choicesFrom = (q: Question, chs: Choice[]) : Choice[] => {
    return chs.filter(c => c.question_id === q.id);
  }

  // Change in questions
  const deletedQuestions = useArrayFilter(ogQuestions, q => 
    !useArraySome(copyQuestions, oq => oq.id === q.id).value)

  const addedQuestions = useArrayFilter(copyQuestions, q => 
    !useArraySome(ogQuestions, oq => oq.id === q.id).value)

  const changedQuestions = useArrayFilter(copyQuestions, q => {
    const cq = useArrayFind(ogQuestions, o => o.id === q.id);
    if(!cq.value) return false;
    return !isQuestionEqual(q, cq.value);
  })

  // Changes in question that affects the choice map
  watch(addedQuestions, v => {
    v.forEach(q => {
      // If the current question is not found in the copy choice map
      if(get(copyChoiceMap).every(cm => cm.quizID !== q.id)){
        get(copyChoiceMap).push({ quizID: q.id, choices: Array<Choice>()});
      }
    })
  })
  // It is important to delete these choice maps to avoid setting them in the DB and causing error since they don't exist
  watch(deletedQuestions, v => {
    v.forEach(q => {
      const targetcmindex = get(copyChoiceMap).findIndex(cm => cm.quizID === q.id);
      if(targetcmindex === -1) return;
      get(copyChoiceMap).splice(targetcmindex, 1);
    })
  })



  // Change in choices

  const changedChoiceMap = useArrayFilter(copyChoiceMap, cm => {
    const ocm = useArrayFind(ogChoiceMap, o => o.quizID === cm.quizID);
    if(!ocm.value) return true; // If map is not found, then its probably a newly added question
    // Unequal lengths
    if(ocm.value.choices.length !== cm.choices.length) return true;
    // Equal lengths but not in order / equal amount of subtraction & addition
    if(!ocm.value.choices.every((c, i) => 
      c.id === cm.choices[i].id && isChoiceEqual(c, cm.choices[i]))) return true;

    return false;
  })

  const hasChanges = computed(() => {

    const copy = get(copyQuiz), og = get(ogQuiz);

    // Quiz Name
    if(copy?.name !== og?.name) return true;

    // Question Changes
    if(get(addedQuestions).length) return true;
    if(get(deletedQuestions).length) return true;
    if(get(changedQuestions).length) return true;

    // Choice Changes
    if(get(changedChoiceMap).length) return true;

    return false;
  })

  const acquire = async (id: Number) => {
    await quizStore.sync();

    const quizRef = quizStore.quizzes.find(q => q.id === id);
    const quizDup = quizRef ? JSON.parse(JSON.stringify(quizRef)) as Quiz : undefined;

    if(!quizRef) return false;

    // Clear all data
    set(copyQuiz, quizDup);
    set(ogQuiz, quizRef);
    get(ogQuestions).splice(0);
    get(copyQuestions).splice(0);
    get(ogChoiceMap).splice(0);
    get(copyChoiceMap).splice(0);

    // Questions
    const { data: qdata } = await useFetch<GetQuestionResponse>('/api/quiz/questions', {
      method: 'POST',
      body: { quizID: id }
    });

    if(qdata.value?.questions){
      get(ogQuestions).push(...qdata.value.questions);
      get(copyQuestions).push(...qdata.value.questions.map(q => JSON.parse(JSON.stringify(q))));
    }

    // Choices
    const { data: cdata } = await useFetch<GetChoicesResponse>('/api/quiz/questions/choices', {
      method: 'POST',
      body: { quizID: id }
    })

    if(!!cdata.value?.choices){
      const copy = JSON.parse(JSON.stringify(cdata.value.choices)) as Choice[];

      get(ogChoiceMap).push(...get(copyQuestions).map(q => {
        const choices = !cdata.value || !cdata.value.choices ? [] : choicesFrom(q, cdata.value.choices);

        return {
          quizID: q.id,
          choices
        }
      }));

      get(copyChoiceMap).push(...get(copyQuestions).map(q => {
        const choices = choicesFrom(q, copy);

        return {
          quizID: q.id,
          choices
        }
      }));
    }

    return true;
  }


  // Ends the building process
  const end = () => {
    set(copyQuiz, undefined);
    set(ogQuiz, undefined);
    get(ogQuestions).splice(0);
    get(copyQuestions).splice(0);
    get(ogChoiceMap).splice(0);
    get(copyChoiceMap).splice(0);
  }


  // Applies changes
  const apply = async () => {
    const quizID = copyQuiz.value?.id;

    if(!quizID) return false;

    // Checks for update on quiz name
    if(copyQuiz.value?.name !== ogQuiz.value?.name){
      await useFetch('/api/quiz/rename', {
        method: 'POST',
        body: { id: quizID, name: copyQuiz.value?.name }
      });
    }

    // Checks for updates in the questions. Will do the necessary fetch calls for different kind of change
    //#region Questions
    await Promise.all(get(deletedQuestions).map(async (q) => {
      await useFetch('/api/quiz/questions/delete', {
        method: 'POST',
        body: { id: q.id }
      })
    }));
    await Promise.all(get(addedQuestions).map(async (q) => {
      await useFetch('/api/quiz/questions/create', {
        method: 'POST',
        body: { 
          text: q.text,
          quizID: q.quiz_id,
          type: q.type,
          autograded: q.autograded,
          points: q.points
         }
      })
    }));
    await Promise.all(get(changedQuestions).map(async (q) => {
      await useFetch('/api/quiz/questions/update', {
        method: 'POST',
        body: { 
          id: q.id,
          text: q.text,
          type: q.type,
          autograded: q.autograded,
          points: q.points
         }
      })
    }));
    //#endregion

    //#region Choices
    await Promise.all(get(changedChoiceMap).map(async (cm) => {
      await useFetch('/api/quiz/questions/choices/set', {
        method: 'POST',
        body: {
          id: cm.quizID,
          choices: cm.choices
        }
      })
    }))
    //#endregion

    // Sync
    acquire(quizID);
  }

  return {
    acquire,
    end,
    apply,

    copyQuiz,
    copyQuestions,
    copyChoiceMap,
    hasChanges
  }
})
