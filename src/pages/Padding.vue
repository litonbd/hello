<script setup>
import {
  paddingAllSide,
  paddingAllSideFixed,
  paddingIndividual,
  paddingLeftRight,
  paddingTopBottom,
  paddingStartEnd
} from "../code/padding.js";
</script>
<template>
  <TheCard>
    <template #header>Padding on all sides</template>

    <template #content>
      <p>
        The prefix `p` is used to add padding on all sides (top, right, bottom
        and left). See the example below with all responsive modifiers. 
        Tip: Resize your window to see the differences in different screen sizes.<br><br>
      </p>
      <b>Responsive:</b>
      <div v-html="paddingAllSide" class="mt-1"></div>
      <AyoPrism :code="paddingAllSide"></AyoPrism>
      <br>
      <b>Fixed:</b>
      <div v-html="paddingAllSideFixed" class="mt-1"></div>
      <AyoPrism :code="paddingAllSideFixed"></AyoPrism>
    </template>
  </TheCard>

  <TheCard class="mt-4">
    <template #header>Padding left and right</template>

    <template #content>
      <p>
        You can set same padding on both left and right sides with the `px` class
        as follows:
      </p>
      <div v-html="paddingLeftRight" class="mt-2"></div>
      <AyoPrism :code="paddingLeftRight"></AyoPrism>
    </template>
  </TheCard>


  <TheCard class="mt-4">
    <template #header>Padding top and bottom</template>

    <template #content>
      <p>
        You can set same padding on both top and bottom side with the `py` class
        as follows:
      </p>
      <div v-html="paddingTopBottom" class="mt-2"></div>
      <AyoPrism :code="paddingTopBottom"></AyoPrism>
    </template>
  </TheCard>

  <TheCard class="mt-4">
    <template #header>Padding Start & End</template>

    <template #content>
      <p>
        By using the prefix `ps` & `pe` you can define the start and end padding. 
      </p>
      <div v-html="paddingStartEnd" class="mt-2"></div>
      <AyoPrism :code="paddingStartEnd"></AyoPrism>
    </template>
  </TheCard>

  <TheCard class="mt-4">
    <template #header>Different padding on different sides</template>

    <template #content>
      <p>
        Use `pt`, `pe`, `pb`, `ps` classes to set margins on top, end, bottom
        and start respectively.
      </p>
      <div v-html="paddingIndividual" class="mt-2"></div>
      <AyoPrism :code="paddingIndividual"></AyoPrism>
    </template>
  </TheCard>
</template>
