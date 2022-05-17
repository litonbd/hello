<template>
  <div class="sidebar">
    <div class="sidebar__top">
      <h2>AyoFlex</h2>
    </div>
    <div class="sidebar__bottom">
      <div class="sidebar__nav">
        <router-link to="/layout">Layout</router-link>
        <router-link to="/margin">Margin</router-link>
        <router-link to="/padding">Padding</router-link>
        <router-link to="/alignment">Alignment</router-link>
        <router-link to="/flexbox">Flexbox</router-link>
        <router-link to="/color">Color</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.sidebar {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.sidebar__top {
  padding: 11px 22px;
  color: var(--brand-color);
}

.sidebar__bottom {
  flex: 1;
  overflow-y: auto;
}

.sidebar__nav a {
  display: block;
  padding: 9px 22px;
  text-decoration: none;
  border-bottom: 1px solid #fff;
}

.sidebar__nav a:hover,
.sidebar__nav a.router-link-active {
  font-weight: bold;
  color: var(--brand-color);
  background-color: #f0faf5;
}
</style>
