export interface Deliverable{
    id: number;
    blob: BinaryData | null;
    task_id: number | null;
    user_id: number | null;
}

export interface Allowed_File_types{
    id: number;
    task_id: number | null;
    file_extension: string | null;
    type_description: string | null;
}