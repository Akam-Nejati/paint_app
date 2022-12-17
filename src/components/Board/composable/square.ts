import { ref } from "vue";
import { color } from "../../../stores/colorSelector";

interface coordinates {
  x: number;
  y: number;
}

const default_coordinates: coordinates = {
  x: 0,
  y: 0,
};
const drawing = ref(false);
const first_coordinates = ref(default_coordinates);
const last_coordinates = ref(default_coordinates);
const prev_coordinates = ref(default_coordinates);

export function buildSquare(cover: any, ctx: any, ctxc: any) {
  function draw_line(context: any, first: coordinates, last: coordinates) {
    context.fillStyle = color.value;
    context.fillRect(first.x, first.y, last.x - first.x, last.y - first.y);
  }

  function mousedown(event: MouseEvent) {
    drawing.value = true;

    first_coordinates.value = {
      x: event.offsetX,
      y: event.offsetY,
    };
  }

  function mousemove(event: MouseEvent) {
    if (!drawing.value) {
      return;
    }
    ctx.value.clearRect(0, 0, cover.value.width, cover.value.height);
    last_coordinates.value = {
      x: event.offsetX,
      y: event.offsetY,
    };

    prev_coordinates.value = {
      x: first_coordinates.value.x,
      y: first_coordinates.value.y,
    };

    draw_line(ctx.value, first_coordinates.value, last_coordinates.value);
  }

  function mouseup() {
    drawing.value = false;

    draw_line(ctxc.value, prev_coordinates.value, last_coordinates.value);
    ctx.value.clearRect(0, 0, cover.value.width, cover.value.height);
  }

  function mouseleave() {
    drawing.value = false;

    draw_line(ctxc.value, prev_coordinates.value, last_coordinates.value);
    ctx.value.clearRect(0, 0, cover.value.width, cover.value.height);
  }

  return {
    mousedown,
    mousemove,
    mouseup,
    mouseleave,
  };
}
