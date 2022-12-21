import { ref } from "vue"
import { color } from "../../../stores/colorAndSize";
import { size } from "../../../stores/colorAndSize";

const drawing = ref(false);

export function pen(ctxc: any) {
  ctxc.value.lineCap = "rounded"
  ctxc.value.strokeStyle = color.value
  ctxc.lineWidth = size.value;
  
  function mousedown(event: MouseEvent) {
    drawing.value = true;
    ctxc.value.beginPath()
  }
  
  function mousemove(event: MouseEvent) {
    if (!drawing.value) {
      return;
    }
    
    ctxc.value.lineTo(event.offsetX, event.offsetY)
    ctxc.value.stroke()
    ctxc.value.beginPath()
    ctxc.value.moveTo(event.offsetX, event.offsetY)
  }
  
  function mouseup() {
    drawing.value = false;
  }

  function mouseleave() {
    drawing.value = false;
  }

  return {
    mousedown,
    mousemove,
    mouseup,
    mouseleave,
  };
}
