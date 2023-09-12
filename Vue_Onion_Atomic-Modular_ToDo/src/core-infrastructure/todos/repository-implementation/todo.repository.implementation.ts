import { ITodoRepository, TodoCreateDto, TodoUpdateDto } from "@/core/todos/todo.repository";
import { useTodoStore } from "./todo.pinia";

export class TodoRepositoryImplementation implements ITodoRepository {
    getRef(): any {
        return useTodoStore()
    }

    fetchAll(): Promise<void> {
        return useTodoStore().fetchAll()
    };

    // fetchOne(id: number): Promise<void>;

    create(dto: TodoCreateDto): Promise<void> {
        return useTodoStore().create(dto)
    };

    update(id: number, dto: TodoUpdateDto): Promise<void> {
        return useTodoStore().update(id, dto)
    };

    remove(id: number): Promise<void> {
        return useTodoStore().remove(id)
    };
}