export interface Todo {
        id?: number;
        userId?: number;
        title?: string;
        isCompleted?: number|boolean;
        date?: string;
}

export interface TodoResponse{
        todo: [Todo]
}
