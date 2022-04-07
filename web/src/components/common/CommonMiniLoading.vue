<!-- Copyright (C) 2018 SOFTBANK Corp. All rights reserved. -->
<template>
  <transition name="fade-anime">
    <div>
      <i class="mdi mdi-spin mdi-loading"></i>
    </div>
  </transition>
</template>

<script>
export default {

}
</script>

<style scoped>
div {
  display: table;
  text-align: center;
  height: 100%;
  width: 100%;
}

i {
  display: table-cell;
  vertical-align: middle;
  font-size: 50px;
}

.fade-anime-enter {
  opacity: 0;
}

.fade-anime-enter-active,
.fade-anime-leave-active {
  transition: all 0.4s;
}

.fade-anime-leave-to {
  opacity: 0;
}
</style>
