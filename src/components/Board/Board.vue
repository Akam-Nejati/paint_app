<script setup lang="ts">
import { ref, onMounted } from "vue";
import { detectTool } from "../../stores/ItemsDashboard";
import { size } from "../../stores/tools";
import { canvas_E, get_photo } from "../../stores/get_photo";

const canvas = ref<any>();
const cover = ref<any>();
const ctx = ref<any>();
const ctxc = ref<any>()


onMounted(() => {
  ctx.value = cover.value.getContext("2d");
  ctxc.value = canvas.value.getContext("2d");
});

function mousedown(event: MouseEvent) {
  detectTool(cover, ctx, ctxc).mousedown(event);
  ctx.value.lineWidth = size.value;
  ctxc.value.lineWidth = size.value;
  ctx.value.lineCap = "round"
  ctxc.value.lineCap = "round"
  ctx.value.setLineDash([]);
  canvas_E.value = canvas.value
  get_photo()
}
function mousemove(event: MouseEvent) {
  detectTool(cover, ctx, ctxc).mousemove(event);
}
function mouseup() {
  detectTool(cover, ctx, ctxc)?.mouseup();
}
function mouseleave() {
  detectTool(cover, ctx, ctxc)?.mouseleave();
}
</script>

<template>
  <div class="bg-gray-300 w-full h-[22.6rem] rounded-lg">
    <canvas
      class="border rounded-lg absolute bg-transparent z-10 cursor-crosshair"
      @mousedown="mousedown($event)"
      @mousemove="mousemove($event)"
      @mouseup="mouseup()"
      @mouseleave="mouseleave()"
      width="766"
      height="360"
      ref="cover"
    ></canvas>
    <canvas
      class="border rounded-lg absolute bg-transparent"
      width="766"
      height="360"
      ref="canvas"
    ></canvas>
  </div>
</template>

<style scoped></style>
