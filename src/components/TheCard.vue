<template>
  <div class="the-card">
    <div class="the-card__header">
      <slot name="header"></slot>
    </div>
    <div class="the-card__content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.the-card {
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.03);
}

.the-card__header {
  padding: 14px 11px 3px 11px;
  border-bottom: 1px solid rgb(245 245 245);
  font-size: 16px;
  font-weight: bold;
  color: var(--brand-color);
}

.the-card__content {
  padding: 8px 15px;
}
</style>
