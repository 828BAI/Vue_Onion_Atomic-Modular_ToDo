<script setup lang="ts">
import { Todo } from "@/core/todos/todo.model"
import { TodoCreateDto, TodoUpdateDto } from "@/core/todos/todo.repository";
import { TodoService } from "@/core/todos/todo.service";
import { inject } from "vue";


const props = defineProps<{
    todo: Todo;
    isNew: boolean;
}>()


const TodoServiceInj = inject('TodoServiceInj') as TodoService

async function createTodo(todo: TodoCreateDto) {
    await TodoServiceInj.create(todo);
    props.todo.task = '';
    props.todo.done = false;
}

function updateTodo(ID: number, DTO: TodoUpdateDto) {
    TodoServiceInj.update(ID, DTO)
}

function removeTodo(ID: number) {
    TodoServiceInj.remove(ID)
}



</script>

<template>
    <form class="card max-w-96 bg-base-100 shadow-xl">
        <div class="card-body">
            <div class="grid grid-cols-[3rem,auto] gap-4">

                <input v-model="props.todo.done" name="status" type="checkbox"
                    class="checkbox h-10 w-10 border-primary mt-3 " />

                <textarea v-model="props.todo.task" type="text" class="card-title text-4xl w-full p-2 bg-transparent"
                    placeholder="Type task ..." />


            </div>


            <div class="grid place-content-between grid-flow-col mt-4">
                <div v-if="props.todo.id" class="badge badge-primary font-extrabold">{{ props.todo.id }}</div>
                <div v-if="props.todo.timestamp" class="badge badge-primary badge-outline">
                    {{ new Date(props.todo.timestamp).toLocaleTimeString('ru-RU') }}
                    {{ new Date(props.todo.timestamp).toLocaleDateString('ru-RU') }}
                </div>
            </div>

            <div class="w-full text-center text-error text-xl mt-3">
                <!-- {{ errorMessage }} -->
            </div>

            <div class="card-actions  grid grid-flow-col">
                <button v-if="!props.isNew" @click.prevent="removeTodo(props.todo.id!)" class="btn w-full">Delete</button>

                <button v-if="!props.isNew" @click.prevent="updateTodo(props.todo.id!, props.todo)" class="btn w-full"
                    type="submit">Update</button>

                <button v-if="props.isNew" @click.prevent="createTodo(props.todo)" class="btn w-full"
                    type="submit">Create</button>
            </div>

        </div>
    </form>
</template>