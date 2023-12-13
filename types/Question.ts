export interface Question{
    id: number;
    text: string | null;
    quiz_id: number | null;
    type: number | null;
    autograded: boolean;
    points: number | null;
}