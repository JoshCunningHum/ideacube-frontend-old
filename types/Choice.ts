export interface Choice{
    id: number;
    text: string | null;
    question_id: number | null;
    is_correct: boolean;
    //TODO: Add a point to each choices, null on this property means it will get distributed based on the question points
}