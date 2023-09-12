import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { TodosServiceNest } from './todos.service';
import { TodoCreateDto, TodoUpdateDto } from 'core/todos/todo.repository';
import { FastifyReply } from 'fastify';

@Controller('todos')
export class TodosController {
    constructor(private readonly TodosServiceNest: TodosServiceNest) { }

    @Post()
    create(@Body() createTodoDto: TodoCreateDto) {
        return this.TodosServiceNest.create(createTodoDto);
    }

    @Get()
    findAll() {
        return this.TodosServiceNest.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.TodosServiceNest.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateTodoDto: TodoUpdateDto) {
        return this.TodosServiceNest.update(+id, updateTodoDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string, @Res() reply: FastifyReply) {
        this.TodosServiceNest.remove(+id);
        return reply.status(200).send();
    }
}
