export interface Answer{
    id: number;
    questions: number | null; // A reference to the question entity
    quiz: number | null; // A reference to a quiz entity
    student_id: number | null; // A reference to the student
    points_gained: number | null;
    answer_string: string | null;
    is_graded: boolean;
}