import { ref } from "vue";

const image = ref<string>()
export const canvas_E = ref<any>()

export function geter() {
 return image.value
}

export function get_photo() {
    image.value = canvas_E.value.toDataURL("image/jpg");
}