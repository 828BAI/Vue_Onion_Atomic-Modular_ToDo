import { Injectable } from '@nestjs/common';
import { TodosService } from 'core/todos/todo.service';

@Injectable()
export class TodosServiceNest extends TodosService { }
