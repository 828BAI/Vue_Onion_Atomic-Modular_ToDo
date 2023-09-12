<script setup lang="ts">
import { TodoService } from '@/core/todos/todo.service';
import { inject, onBeforeMount, ref } from 'vue';
import TodoCard from '../modules/TodoCard.vue';


const TodoServiceInj = inject('TodoServiceInj') as TodoService



onBeforeMount(() => TodoServiceInj.fetchAll())

const newTodo = ref({
    task: '',
    done: false,
})

</script>

<template>
    <div class="max-w-2xl m-auto">
        <h1 class="w-full text-center mt-10 text-7xl font-bold">Todos</h1>

        <TodoCard v-for="todo of TodoServiceInj.getRef().todos" :key="'todo' + todo.id" :todo="todo" :is-new="false" />

        <TodoCard :todo="newTodo" :is-new="true" />
    </div>
</template>