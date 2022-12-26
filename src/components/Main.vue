<script setup lang="ts">
import Board from "./Board/Board.vue";
import Dashboard from "./Dashboard/Dashboard.vue";
import { get_photo, geter } from "../stores/get_photo"
</script>

<template>
  <div class="w-[50rem] bg-slate-600 rounded-xl shadow-xl">
    <div class="p-4 flex flex-col">
      <div class="mb-4">
        <Dashboard />
      </div>
      <div class="w-full">
        <Board/>
      </div>
    </div>
    <div class="p-4">
      <a class="p-4 bg-gray-300 rounded-lg shadow-lg block w-fit" :class="{'cursor-not-allowed bg-gray-500 text-gray-300': !geter()}" @click="get_photo()" :href="geter()" download>
        download photo
      </a>
    </div>
  </div>
</template>

<style scoped></style>
