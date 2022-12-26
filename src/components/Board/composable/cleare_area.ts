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
const drawing = ref(false);

export function cleareArea(cover: any, ctx: any, ctxc: any) {
  function cleare(ctxc: any, first: coordinates, last: coordinates) {
    if (first.x < last.x && first.y < last.y) {
      ctxc.clearRect(first.x, first.y, last.x - first.x, last.y - first.y);
      console.log("if");
      
    } else {
      console.log("else");
      
      ctxc.clearRect(last.x, last.y, first.x - last.x, first.y - last.y);
    }
  }
  function Preview(ctx: any, first: coordinates, last: coordinates) {
    ctx.setLineDash([5, 15]);
    ctx.lineWidth = 2;
    ctx.strokeRect(first.x, first.y, last.x - first.x, last.y - first.y);
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

    last_coordinates.value = {
      x: event.offsetX,
      y: event.offsetY,
    };

    ctx.value.clearRect(0, 0, cover.value.width, cover.value.height);
    Preview(ctx.value, first_coordinates.value, last_coordinates.value);
  }

  function mouseup() {
    drawing.value = false;
    ctx.value.clearRect(0, 0, cover.value.width, cover.value.height);

    cleare(ctxc.value, first_coordinates.value, last_coordinates.value);
  }

  function mouseleave() {
    drawing.value = false;
    ctx.value.clearRect(0, 0, cover.value.width, cover.value.height);

    cleare(ctxc.value, first_coordinates.value, last_coordinates.value);
  }

  return {
    mousedown,
    mousemove,
    mouseup,
    mouseleave,
  };
}
