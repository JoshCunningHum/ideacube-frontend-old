export interface Task{
    id: number;
    title: string | null;
    description: string | null;
    max_size: number;
    max_points: number;
}