import './main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './framework/router'
import { TodoService } from './core/todos/todo.service'
import { TodoRepositoryImplementation } from './core-infrastructure/todos/repository-implementation/todo.repository.implementation'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.provide('TodoServiceInj', new TodoService(new TodoRepositoryImplementation))

app.mount('#app')
