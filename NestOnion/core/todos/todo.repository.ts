import { IGenericRepository } from "core/generic.repository";
import { Todo } from "./todo.model";

export class TodoCreateDto {
    constructor(
        readonly task: string,
        readonly done: boolean,
    ) { }
}

export class TodoUpdateDto extends TodoCreateDto { }



export interface ITodoRepository extends IGenericRepository<Todo, TodoCreateDto, TodoUpdateDto> { }