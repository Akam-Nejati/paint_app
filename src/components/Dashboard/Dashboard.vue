<script setup lang="ts">
import { seleted_tool } from "../../stores/ItemsDashboard";
import { color } from "../../stores/colorSelector";
function change_color(event: any) {
  color.value = event.target.value;
}

const items = [
  "highlight_alt",
  "mode",
  "horizontal_rule",
  "crop_7_5",
  "radio_button_unchecked",
];

function change_tool_of_selected(item: string) {
  seleted_tool.value = item;
}
</script>

<template>
  <div
    class="border-[1px] border-gray-200 w-[4rem] h-[calc(30rem-2rem)] rounded-xl flex flex-col items-center justify-between overflow-hidden"
    draggable="true"
  >
    <span
      v-for="item in items"
      class="material-icons-sharp !text-3xl text-gray-300 cursor-pointer p-4"
      :class="{ 'bg-blue-300 text-white': seleted_tool == item }"
      @click="change_tool_of_selected(item)"
      >{{ item }}</span
    >

    <input
      @change="change_color($event)"
      type="color"
      class="!outline-none bg-transparent border-none w-7 h-8 m-4"
    />
  </div>
</template>

<style scoped></style>
