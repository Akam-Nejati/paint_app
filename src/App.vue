<script setup lang="ts">
import { ref } from "vue";
import Main from "./components/Main.vue";
import Error from "./components/Error_page.vue";

var userAgent = window.navigator.userAgent;
const platform = window.navigator.platform;
const iosPlatforms = ["iPhone", "iPad", "iPod"];
const os = ref<string | null>(null);

if (iosPlatforms.indexOf(platform) !== -1) {
  os.value = "iOS";
} else if (/Android/.test(userAgent)) {
  os.value = "Android";
}
</script>

<template>
  <div
    v-if="!os"
    class="w-full h-screen bg-slate-900 flex justify-center items-center"
  >
    <Main />
  </div>
  <div v-else>
    <Error />
  </div>
</template>

<style scoped></style>
