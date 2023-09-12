import { defineStore } from 'pinia'
import { ref } from 'vue'

import { todosApiCreate, todosApiFetchAll, todosApiRemove, todosApiUpdate } from './todo.api'
import { Todo } from '@/core/todos/todo.model'
import { TodoCreateDto, TodoUpdateDto } from '@/core/todos/todo.repository'

export const useTodoStore = defineStore('todo', () => {
    const todos = ref<Todo[]>([])

    async function fetchAll() {
        const data = await todosApiFetchAll()
        todos.value.push(...data)
    }

    async function create(DTO: TodoCreateDto) {
        const data = await todosApiCreate(DTO)
        todos.value.push(data)
    }

    async function update(ID: number, DTO: TodoUpdateDto) {
        const data = await todosApiUpdate(ID, DTO)
        const index = todos.value.findIndex((t) => t.id === ID);
        if (index !== -1) {
            todos.value[index] = data;
        }
    }

    async function remove(ID: number) {
        todos.value = todos.value.filter((ii: Todo) => ii.id !== ID)
        await todosApiRemove(ID)

    }

    return { todos, fetchAll, create, update, remove }
})