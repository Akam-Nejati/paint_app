import { ref } from "vue";
import { buildSquare } from "../components/Board/composable/square";
import { buildLine } from "../components/Board/composable/line";
import { pen } from "../components/Board/composable/pen";

export const seleted_tool = ref("horizontal_rule");

export function detectTool(cover: any, ctx: any, ctxc: any) {
  if (seleted_tool.value === "mode") return pen(cover, ctx, ctxc);
  else if (seleted_tool.value === "horizontal_rule")
    return buildLine(cover, ctx, ctxc);
  // if (tool === "crop_7_5") buildLine(canvas, cover, ctx, ctxc);
  // if (tool === "radio_button_unchecked")
  return buildSquare(cover, ctx, ctxc);
}
