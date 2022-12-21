import { ref } from "vue";
import { buildSquare } from "../components/Board/composable/square";
import { buildLine } from "../components/Board/composable/line";
import { pen } from "../components/Board/composable/pen";
import { buildCircle } from "../components/Board/composable/circle";

export const seleted_tool = ref("mode");

export function detectTool(cover: any, ctx: any, ctxc: any) {
  if (seleted_tool.value === "mode") return pen(ctxc);
  else if (seleted_tool.value === "horizontal_rule")
    return buildLine(cover, ctx, ctxc);
  else if (seleted_tool.value === "radio_button_unchecked")
    return buildCircle(cover, ctx, ctxc);

  return buildSquare(cover, ctx, ctxc);
}
