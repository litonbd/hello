<script setup>
import {
  textLeft,
  textRight,
  textStart,
  textEnd,
  textCenter,
  textJustify,
  textResponsive
} from "../code/alignment.js";
</script>
<template>
  <TheCard>
    <template #header>Text Alignment</template>

    <template #content>
      <p>
        To set the alignment of text or image of an element use the text-*(alignment) class
        like as text-left, text-right, text-center etc.<br>
        Tip: Resize your window to see the differences in different screen sizes.
      </p><br>
      <b>Left:</b>
      <div v-html="textLeft" class="mt-1"></div>
      <AyoPrism :code="textLeft"></AyoPrism>
      <br>
      <b>Right:</b>
      <div v-html="textRight" class="mt-1"></div>
      <AyoPrism :code="textRight"></AyoPrism>
      <b>Start:</b>
      <div v-html="textStart" class="mt-1"></div>
      <AyoPrism :code="textStart"></AyoPrism>
      <br>
      <b>End:</b>
      <div v-html="textEnd" class="mt-1"></div>
      <AyoPrism :code="textEnd"></AyoPrism>
      <b>Center:</b>
      <div v-html="textCenter" class="mt-1"></div>
      <AyoPrism :code="textCenter"></AyoPrism>
      <br>
      <b>Justify:</b>
      <div v-html="textJustify" class="mt-1"></div>
      <AyoPrism :code="textJustify"></AyoPrism>
      <b>Responsive:</b>
      <div v-html="textResponsive" class="mt-1"></div>
      <AyoPrism :code="textResponsive"></AyoPrism>
    </template>
  </TheCard>

  
</template>
