export interface User{
    id: number;
    first_name: string | null;
    last_name: string | null;
    is_approved: number;
    class_id: number;

    // Not found in django but necessary in here
    is_admin: boolean;
}