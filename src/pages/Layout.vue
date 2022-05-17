<script setup>
import { allResponsive, columnPerRow } from "../code/layout.js";
import ScreenSizeVariant from "../components/ScreenSizeVariant.vue"
</script>
<template>
  <TheCard>
    <template #header>Columns</template>

    <template #content>
      <p>
        Vue (pronounced /vjuː/, like view) is a progressive framework for
        building user interfaces. Unlike other monolithic frameworks, Vue is
        designed from the ground up to be incrementally adoptable. The core
        library is focused on the view layer only, and is easy to pick up and
        integrate with other libraries or existing projects. On the other hand,
        Vue is also perfectly capable of powering sophisticated Single-Page
        Applications when used in combination with modern tooling and supporting
        libraries.
      </p>
      <ScreenSizeVariant />
      <div v-html="allResponsive" class="mt-3"></div>
      <AyoPrism :code="allResponsive"></AyoPrism>
    </template>
  </TheCard>

  <TheCard>
    <template #header>Columns per row</template>

    <template #content>
      <p>
        Vue (pronounced /vjuː/, like view) is a progressive framework for
        building user interfaces. Unlike other monolithic frameworks, Vue is
        designed from the ground up to be incrementally adoptable. The core
        library is focused on the view layer only, and is easy to pick up and
        integrate with other libraries or existing projects. On the other hand,
        Vue is also perfectly capable of powering sophisticated Single-Page
        Applications when used in combination with modern tooling and supporting
        libraries.
      </p>
      <ScreenSizeVariant />
      <div v-html="columnPerRow" class="mt-3">
      </div>
      <AyoPrism :code="columnPerRow"></AyoPrism>
    </template>
  </TheCard>

  <!-- <TheCard>
    <template #header>Columns</template>

    <template #content>
      <div class="d-flex">
        <div class="col-4 bg-fill">col-4</div>
        <div class="col-8 bg-fill">col-8</div>
      </div>
    </template>
  </TheCard> -->
</template>
