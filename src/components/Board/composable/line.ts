import { ref } from "vue";
import { color } from "../../../stores/tools";

interface coordinates {
  x: number;
  y: number;
}

const default_coordinates: coordinates = {
  x: 0,
  y: 0,
};
const first_coordinates = ref(default_coordinates);
const last_coordinates = ref(default_coordinates);
const prev_first_coordinates = ref(default_coordinates);
const prev_last_coordinates = ref(default_coordinates);
const drawing = ref(false);

export function buildLine(cover: any, ctx: any, ctxc: any) {
  function draw_line(context: any, first: coordinates, last: coordinates) {
    context.strokeStyle = color.value;
    context.beginPath();
    context.moveTo(first.x, first.y);
    context.lineTo(last.x, last.y);
    context.stroke();
  }

  function mousedown(event: MouseEvent) {
    drawing.value = true;
    first_coordinates.value = {
      x: event.offsetX,
      y: event.offsetY,
    };

    prev_first_coordinates.value = {
      x: event.offsetX,
      y: event.offsetY,
    };

    prev_last_coordinates.value = first_coordinates.value;
  }

  function mousemove(event: MouseEvent) {
    if (!drawing.value) {
      return;
    }

    last_coordinates.value = {
      x: event.offsetX,
      y: event.offsetY,
    };

    prev_last_coordinates.value = {
      x: event.offsetX,
      y: event.offsetY,
    };

    ctx.value.clearRect(0, 0, cover.value.width, cover.value.height);
    draw_line(ctx.value, first_coordinates.value, last_coordinates.value);
  }

  function mouseup() {
    drawing.value = false;
    ctx.value.clearRect(0, 0, cover.value.width, cover.value.height);

    draw_line(
      ctxc.value,
      prev_first_coordinates.value,
      prev_last_coordinates.value
    );
  }

  function mouseleave() {
    drawing.value = false;
    ctx.value.clearRect(0, 0, cover.value.width, cover.value.height);

    draw_line(
      ctxc.value,
      prev_first_coordinates.value,
      prev_last_coordinates.value
    );
  }

  return {
    mousedown,
    mousemove,
    mouseup,
    mouseleave,
  };
}
