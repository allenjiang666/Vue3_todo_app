<template>
  <div class="flex justify-center h-screen">
    <div class="mt-8">
      <h1 class="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          My To Do </span>App
      </h1>
      <p class="text-lg font-normal text-gray-500 lg:text-xl w-">Today's Date: {{ formattedDate }}.</p>

      <div class="mt-8">
        <input type="text" v-model="new_todo" @keypress.enter="addTodo"
          class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="What is your task?">
      </div>



      <div class="mt-8 text-lg">
        <ul>
          <VueDraggableNext class="dragArea list-group w-full" :list="list">

            <li class="bg-gray-100 text-gray-600 rounded-lg p-5 m-5 drop-shadow-md text-center
                  hover:transform hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out"
              v-for="todo in todo_list" :key="todo.id">
              <div class="flex justify-between">
                <div :class="{ 'line-through': todo.isDone }" class="decoration-6">{{ todo.content }}</div>
                <div>
                  <i class="fa-solid fa-check ml-4 text-xl text-green-400 cursor-pointer"
                    @click="todo.isDone = !todo.isDone"></i>
                  <i class="fa-regular fa-trash-can text-xl text-red-400 ml-4 cursor-pointer"
                    @click="removeTask(todo.id)"></i>
                </div>
              </div>
            </li>
          </VueDraggableNext>
        </ul>

      </div>
      <!-- <div class="mt-8 text-lg">
        <VueDraggableNext class="dragArea list-group w-full" :list="todo_list" @change="log">
          <transition-group>
            <li v-for="todo in todo_list" :key="todo.id" class="list-group-item bg-gray-100 text-gray-600 rounded-lg p-5 m-5 drop-shadow-md text-center
                hover:transform hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out">
              <div class="flex justify-between">
                <div :class="{ 'line-through': todo.isDone }" class="decoration-6">{{ todo.content }}</div>
                <div>
                  <i class="fa-solid fa-check ml-4 text-xl text-green-400 cursor-pointer"
                    @click="todo.isDone = !todo.isDone"></i>
                  <i class="fa-regular fa-trash-can text-xl text-red-400 ml-4 cursor-pointer"
                    @click="removeTask(todo.id)"></i>
                </div>
              </div>
            </li>
          </transition-group>
        </VueDraggableNext>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref, computed, useTransitionState } from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';

let id = 0;

const new_todo = ref('');
const todo_list = ref([]);
const currentDate = ref(new Date());

const formattedDate = computed(() => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return currentDate.value.toLocaleDateString('en-US', options);
});

function addTodo() {
  todo_list.value.push({ id: id++, content: new_todo.value, isDone: false });
  new_todo.value = '';
}

function removeTask(id) {
  todo_list.value = todo_list.value.filter((t) => t.id !== id);
}

</script>

<style>
.todo-list {
  list-style-type: none;
  /* Removes the default bullet points */
  padding: 0;
  margin: 0;
}

.list-group-item {
  list-style-type: none;
  /* Ensure individual list items do not have bullets */
}
</style>