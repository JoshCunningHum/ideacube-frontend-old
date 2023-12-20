
// Create, Update, Delete
export enum CUDResponseStatus{
    FAILED,
    SUCCESS
}

export interface CUDResponse {
    status: CUDResponseStatus
}