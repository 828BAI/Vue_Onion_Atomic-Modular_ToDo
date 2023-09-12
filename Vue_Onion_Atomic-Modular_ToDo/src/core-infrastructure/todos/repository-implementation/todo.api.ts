import { fetchResource } from "@/core-infrastructure/shared/fetchResource"
import { Todo } from "@/core/todos/todo.model"
import { TodoCreateDto } from "@/core/todos/todo.repository"



const url_todos = '/todos'

export async function todosApiFetchAll() {
    return fetchResource<Todo[]>(url_todos)
}

export async function todosApiCreate(DTO: TodoCreateDto) {
    return fetchResource<Todo>(
        url_todos,
        {
            method: 'POST',
            body: JSON.stringify(DTO),
            headers: {
                'Content-Type': 'application/json'
            }
        })
}

export async function todosApiUpdate(ID: number, DTO: TodoCreateDto) {
    return fetchResource<Todo>(
        url_todos + '/' + ID,
        {
            method: 'PATCH',
            body: JSON.stringify(DTO),
            headers: {
                'Content-Type': 'application/json'
            }
        })
}

export async function todosApiRemove(ID: number) {
    return fetchResource<Todo>(
        url_todos + '/' + ID,
        {
            method: 'DELETE',
        })
}