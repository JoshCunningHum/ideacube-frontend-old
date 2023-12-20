export enum QuestionType{
    Choice,
    Identification,
}

export interface Question{
    id: number;
    text?: string;
    quiz_id?: number;
    type?: QuestionType;
    autograded: boolean;
    points?: number;
}