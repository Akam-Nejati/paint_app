import { ref } from "vue";
import { buildSquare } from "../components/Board/composable/square";
import { buildLine } from "../components/Board/composable/line";
import { pen } from "../components/Board/composable/pen";
import { buildCircle } from "../components/Board/composable/circle";
import { cleareArea } from "../components/Board/composable/cleare_area";

export const selected_shape = ref("mode");

export function detectTool(cover: any, ctx: any, ctxc: any) {
  if (selected_shape.value === "mode") return pen(ctxc);
  else if (selected_shape.value === "horizontal_rule")
    return buildLine(cover, ctx, ctxc);
  else if (selected_shape.value === "radio_button_unchecked")
    return buildCircle(cover, ctx, ctxc);
  else if (selected_shape.value === "highlight_alt")
    return cleareArea(cover, ctx, ctxc);
  return buildSquare(cover, ctx, ctxc);
}
