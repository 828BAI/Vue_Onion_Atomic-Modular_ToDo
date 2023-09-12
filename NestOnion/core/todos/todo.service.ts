import { ITodoRepository, TodoCreateDto, TodoUpdateDto } from "./todo.repository";

export class TodosService {
    constructor(readonly todoRepository: ITodoRepository) { }

    findAll() {
        return this.todoRepository.findAll();
    }

    findOne(id: number) {
        return this.todoRepository.findOne(id);
    }

    create(createDto: TodoCreateDto) {
        return this.todoRepository.create(createDto);
    }

    update(id: number, updateDto: TodoUpdateDto) {
        return this.todoRepository.update(id, updateDto);
    }

    remove(id: number) {
        return this.todoRepository.remove(id);
    }
}
