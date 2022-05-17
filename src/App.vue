<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div class="dashboard">
    <div class="dashboard__left">
      <TheSidebar></TheSidebar>
    </div>
    <div class="dashboard__right">
      <div class="dashboard__top">
        <TheHeader></TheHeader>
      </div>

      <div class="dashboard__main">
        <router-view></router-view>
      </div>
    </div>
  </div>

  <!-- <div class="aflex">
    <div class="acol-4 bg-fill">acol-4</div>
    <div class="acol-8 bg-fill">acol-8</div>
    <div>
      <a href="#">abc</a>
    </div>
  </div> -->
</template>

<style>
.dashboard {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
}

.dashboard__left {
  width: 222px;
  box-shadow: 0 0 3px 2px rgb(0 0 0 / 5%);
  z-index: 3;
  display: flex;
  background-color: #fff;
}

.dashboard__right {
  flex: 1;
  width: 222px;
  display: flex;
  flex-direction: column;
  z-index: 2;
}

.dashboard__top {
  box-shadow: 0 0 3px 2px rgb(0 0 0 / 5%);
  height: 55px;
  z-index: 2;
  display: flex;
}

.dashboard__main {
  flex: 1;
  padding: 22px;
  background-color: rgb(54 160 110 / 8%);
  overflow-y: auto;
}
</style>
