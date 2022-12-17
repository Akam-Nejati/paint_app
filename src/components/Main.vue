<script setup lang="ts">
import Board from "./Board/Board.vue";
import Dashboard from "./Dashboard/Dashboard.vue";
</script>

<template>
  <div class="w-[50rem] h-[30rem] bg-white rounded-xl shadow-lg">
    <div class="h-[calc(100%-10rem)] p-4 flex">
        <div class="mr-4">
            <Dashboard />
        </div>
        <div class="w-full">
            <Board/>
        </div>
    </div>
    <div></div>
  </div>
</template>

<style scoped></style>
