import { ITodoRepository, TodoCreateDto, TodoUpdateDto } from "./todo.repository";


export class TodoService {
    constructor(private readonly todoRepository: ITodoRepository) { }

    getRef(): any {
        return this.todoRepository.getRef()
    }

    async fetchAll(): Promise<void> {
        return this.todoRepository.fetchAll()
    }

    async create(dto: TodoCreateDto): Promise<void> {
        return this.todoRepository.create(dto)
    }

    async update(id: number, dto: TodoUpdateDto): Promise<void> {
        return this.todoRepository.update(id, dto)

    }

    async remove(id: number): Promise<void> {
        return this.todoRepository.remove(id)
    }
}