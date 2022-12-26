<script setup lang="ts">
import { selected_shape } from "../../stores/ItemsDashboard";
import { color, stroke_or_fill, size } from "../../stores/tools";

function change_color(event: any) {
  color.value = event.target.value;
}

const shapes: string[] = [
  "highlight_alt",
  "mode",
  "horizontal_rule",
  "crop_7_5",
  "radio_button_unchecked",
];

function change_fill_strke() {
  stroke_or_fill.value === "stroke"
    ? (stroke_or_fill.value = "fill")
    : (stroke_or_fill.value = "stroke");
}

function change_tool_of_selected(item: string) {
  selected_shape.value = item;
}
</script>

<template>
  <div class="md:flex md:flex-row-reverse flex-col items-center justify-between">
    <div
      class="w-[19.5rem] border-[1px] border-gray-200 rounded-xl overflow-hidden"
    >
      <span
        v-for="item in shapes"
        class="material-icons-sharp !text-3xl text-gray-300 cursor-pointer p-4"
        :class="{ 'bg-blue-300 text-white': selected_shape == item }"
        @click="change_tool_of_selected(item)"
        >{{ item }}</span
      >
    </div>
    <div
      class=" border-[1px] border-gray-200 rounded-xl overflow-hidden flex items-center"
    >
      <div @click="change_fill_strke()" class="cursor-pointer select-none">
        <button
          v-if="stroke_or_fill === 'stroke'"
          class="material-icons-sharp text-gray-300 !text-3xl p-4"
        >
          crop_din
        </button>
        <button v-else class="material-icons-sharp text-gray-300 !text-3xl p-4">
          rectangle
        </button>
      </div>
      <div>
        <input
          @change="change_color($event)"
          type="color"
          class="!outline-none bg-transparent border-none w-7 h-8 m-4 cursor-pointer"
        />
      </div>
      <div>
        <label for="size" class="absolute pt-5 px-6 text-gray-300"
          >size:
        </label>
        <input
          v-model="size"
          type="number"
          id="size"
          class="w-[4.5rem] border-[1px] border-gray-300 bg-transparent outline-none m-4 rounded-lg pr-2 pl-10 py-1 placeholder-gray-300 text-gray-300"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
