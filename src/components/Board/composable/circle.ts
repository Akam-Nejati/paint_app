import { ref } from "vue";
import { color } from "../../../stores/colorAndSize";
import { size } from "../../../stores/colorAndSize";

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
const prev_first_coordinates = ref(default_coordinates);
const prev_last_coordinates = ref(default_coordinates);

export function buildCircle(cover: any, ctx: any, ctxc: any) {
  function draw_circle(context: any, first: coordinates, last: coordinates) {
    context.strokeStyle = color.value
    context.lineWidth = size.value;
    context.beginPath();
    context.arc(
      first.x,
      first.y,
      Math.abs(first.x - last.x),
      0,
      2 * Math.PI
    );
    context.stroke();
  }

  function mousedown(event: MouseEvent) {
    drawing.value = true;

    first_coordinates.value = {
      x: event.offsetX,
      y: event.offsetY,
    };

    prev_first_coordinates.value = first_coordinates.value
  }

  function mousemove(event: MouseEvent) {
    if (!drawing.value) {
      return;
    }

    last_coordinates.value = {
      x: event.offsetX,
      y: event.offsetY,
    };

    prev_last_coordinates.value = last_coordinates.value

    ctx.value.clearRect(0, 0, cover.value.width, cover.value.height);

    draw_circle(ctx.value, first_coordinates.value, last_coordinates.value)
  }
  
  function mouseup() {
    drawing.value = false;
    ctx.value.clearRect(0, 0, cover.value.width, cover.value.height);

    draw_circle(ctxc.value, prev_first_coordinates.value, prev_last_coordinates.value)
  }
  
  function mouseleave() {
    drawing.value = false;
    ctx.value.clearRect(0, 0, cover.value.width, cover.value.height);

    draw_circle(ctxc.value, prev_first_coordinates.value, prev_last_coordinates.value)
  }

  return {
    mousedown,
    mousemove,
    mouseup,
    mouseleave,
  };
}
