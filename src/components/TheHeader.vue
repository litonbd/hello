<template>
  <div class="the-header">
    <div>
      <input type="text" placeholder="Search..." />
    </div>
    <div></div>
    <div>
      <!-- <div class="avatar"></div> -->
    </div>
  </div>
</template>

<style scoped>
.the-header {
  /* background-color: rgb(117, 20, 129); */
  padding: 9px 22px;
  /* color: rgb(221, 221, 221); */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
}

.the-header a {
  color: rgb(233, 168, 27);
}

.avatar {
  width: 33px;
  height: 33px;
  background-color: rgb(147 66 130);
  border-radius: 33px;
}
</style>
