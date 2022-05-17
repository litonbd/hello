<script setup>
import {
  marginAllSide,
  marginIndividual,
  marginLeftRight,
  marginTopBottom,
  horizontalCentering
} from "../code/margin.js";
</script>
<template>
  <TheCard>
    <template #header>Margin on all sides</template>

    <template #content>
      <p>
        The prefix `m` is used to add margins on all sides (top, right, bottom
        and left). See the example below with all responsive modifiers. Tip:
        Resize your window to see the differences in different screen sizes.
      </p>
      <div v-html="marginAllSide" class="mt-3"></div>
      <AyoPrism :code="marginAllSide"></AyoPrism>
    </template>
  </TheCard>

  <TheCard class="mt-4">
    <template #header>Margin left and right</template>

    <template #content>
      <p>
        You can set same margin on both left and right sides with the `mx` class
        as follows:
      </p>
      <div v-html="marginLeftRight" class="mt-3"></div>
      <AyoPrism :code="marginLeftRight"></AyoPrism>
    </template>
  </TheCard>

  <TheCard class="mt-4">
    <template #header>Horizontal Centering</template>

    <template #content>
      <p>
        The class `mx-auto` is used to make a div centered horizontally. See the
        example below for details
      </p>
      <div v-html="horizontalCentering" class="mt-3"></div>
      <AyoPrism :code="horizontalCentering"></AyoPrism>
    </template>
  </TheCard>

  <TheCard class="mt-4">
    <template #header>Margin top and bottom</template>

    <template #content>
      <p>
        You can set same margin on both top and bottom side with the `my` class
        as follows:
      </p>
      <div v-html="marginTopBottom" class="mt-3"></div>
      <AyoPrism :code="marginTopBottom"></AyoPrism>
    </template>
  </TheCard>

  <TheCard class="mt-4">
    <template #header>Different margins on different sides</template>

    <template #content>
      <p>
        Use `mt`, `me`, `mb`, `ms` classes to set margins on top, end, bottom
        and start respectively.
      </p>
      <div v-html="marginIndividual" class="mt-3"></div>
      <AyoPrism :code="marginIndividual"></AyoPrism>
    </template>
  </TheCard>
</template>
