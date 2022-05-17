<script setup>
import {
  display,
  flexdirectionrow,
  flexdirectioncolumn,
  justify,
  alignitemsstart,
  alignitemsend,
  alignself
} from "../code/flexbox.js";
</script>
<template>
  <div class="mb-3 c-green"><strong>Parent Element [flex container]</strong></div>
  <TheCard>
    <template #header>Display Flex</template>
    <template #content>      
      <p>To create flexbox container use <span class="hl">d-flex</span> class 
      or <span class="hl">d-inline-flex</span> to create inline flex container.</p>
      <div v-html="display" class="mt-3"></div>
      <AyoPrism :code="display"></AyoPrism>
    </template>
  </TheCard>

  <TheCard class="mt-4">
    <template #header>Direction</template>        
    <template #content>
      <p class="pb-2">The available classes to set the direction of flex items are <span class="hl">flex-row</span>, 
      <span class="hl">flex-row-reverse</span>, <span class="hl">flex-column</span>, <span class="hl">flex-column-reverse</span>
      </p>
      <b>Flex Direction (Row):</b>
      <div v-html="flexdirectionrow" class="mt-1"></div>
      <AyoPrism :code="flexdirectionrow"></AyoPrism>

      <br><b>Flex Direction (Column):</b>
      <div v-html="flexdirectioncolumn" class="mt-1"></div>
      <AyoPrism :code="flexdirectioncolumn"></AyoPrism>
    </template>  
  </TheCard>

  <TheCard class="mt-4">
    <template #header>Justify Content</template>
    <template #content>
      <div v-html="justify" class="mt-1"></div>
      <AyoPrism :code="justify"></AyoPrism>
    </template>  
  </TheCard>

  <TheCard class="mt-4">
    <template #header>Align Items</template>
    <template #content>
      <div v-html="alignitemsstart" class="mt-1"></div>
      <AyoPrism :code="alignitemsstart"></AyoPrism>

      <div v-html="alignitemsend" class="mt-3"></div>
      <AyoPrism :code="alignitemsend"></AyoPrism>      
    </template>  
  </TheCard>

  <TheCard class="mt-4">
    <template #header>Align Self</template>
    <template #content>
      <div v-html="alignself" class="mt-1"></div>
      <AyoPrism :code="alignself"></AyoPrism>      
    </template>  
  </TheCard>
    
      

      

      

      

  

  
</template>
