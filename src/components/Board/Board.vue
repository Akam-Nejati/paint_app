<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  detectTool
} from "../../stores/ItemsDashboard";

const canvas = ref<any>();
const cover = ref<any>();
const ctx = ref<any>();
const ctxc = ref<any>();

onMounted(() => {
  ctx.value = cover.value.getContext("2d");
  ctxc.value = canvas.value.getContext("2d");
});


function mousedown(event: MouseEvent) {
  detectTool(cover, ctx, ctxc).mousedown(event)
}
function mousemove(event: MouseEvent) {
  detectTool(cover, ctx, ctxc).mousemove(event)
}
function mouseup() {
  detectTool(cover, ctx, ctxc)?.mouseup()
}
function mouseleave() {
  detectTool(cover, ctx, ctxc)?.mouseleave()
}
</script>

<template>
  <div class="bg-gray-200 w-full h-[23.85rem] rounded-lg">
    <canvas
      class="border rounded-lg absolute bg-transparent z-10 cursor-crosshair"
      @mousedown="mousedown($event)"
      @mousemove="mousemove($event)"
      @mouseup="mouseup()"
      @mouseleave="mouseleave()"
      width="686"
      height="380"
      ref="cover"
    ></canvas>
    <canvas
      class="border rounded-lg absolute bg-transparent"
      width="686"
      height="380"
      ref="canvas"
    ></canvas>
  </div>
</template>

<style scoped></style>
