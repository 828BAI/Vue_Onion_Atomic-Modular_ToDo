import { Inject, Injectable } from "@nestjs/common";
import { Todo } from "core/todos/todo.model";
import { TodoCreateDto, ITodoRepository, TodoUpdateDto } from "core/todos/todo.repository";
import { Sql } from "postgres";


@Injectable()
export class TodoRepositoryImplementation implements ITodoRepository {

    constructor(@Inject('DATABASE_CONNECTION') private sql: Sql) {
    }

    findAll(): Promise<Todo[]> {
        return this.sql`
            select * from todos
            order by id
        `
    };

    async findOne(id: number): Promise<Todo> {
        const [result]: [Todo] = await this.sql`
            select * from todos
            where id = ${id}
            limit 1
        `
        return result
    };

    async create(dto: TodoCreateDto): Promise<Todo> {
        console.log(this.sql(dto))
        const [result]: [Todo] = await this.sql`
            insert into todos ${this.sql(dto)}
            returning *
        `
        return result
    };

    async update(id: number, dto: TodoUpdateDto): Promise<Todo> {
        const [result]: [Todo] = await this.sql`
            update todos
            set ${this.sql(dto)}
            where id = ${id}
            returning *
        `
        return result
    };

    async remove(id: number): Promise<void> {
        await this.sql`
            delete from todos
            where id = ${id}
        `
    };
}