<script setup>
import { reactive, ref } from 'vue';
const color = ref("#fff")
const bgGray = ref(false)
const fgGray = ref(false)
</script>
<template>
  <div>
    <br />BG Gray:
    <input type="checkbox" v-model="bgGray" />
    <br />FG Gray:
    <input type="checkbox" v-model="fgGray" />
    <br />
    <div :class="{ 'bgblue': true, 'gs': bgGray }">
      <div :class="{ 'fgbox': true, 'gs': fgGray }" :style="{ background: color }">&nbsp;</div>
    </div>
    <input type="color" v-model="color" />
  </div>
</template>
<style>
.bgblue {
  background: #06f;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fgbox {
  height: 100px;
  width: 100px;
  filter: none;
}
.gs {
  filter: grayscale(1);
}
</style>