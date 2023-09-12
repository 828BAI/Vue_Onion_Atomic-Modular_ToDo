import { Module } from '@nestjs/common';
import { TodosServiceNest } from './todos.service';
import { TodosController } from './todos.controller';
import { DatabaseModule } from 'src/database/database.module';
import { TodoRepositoryImplementation } from './repositories/todo.repository.implementation';


@Module({
    imports: [DatabaseModule],
    controllers: [TodosController],
    providers: [TodosServiceNest, {
        provide: TodosServiceNest,
        useClass: TodoRepositoryImplementation,
    }],
})
export class TodosModule { }
