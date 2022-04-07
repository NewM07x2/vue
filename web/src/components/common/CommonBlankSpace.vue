<!-- Copyright (C) 2018 SOFTBANK Corp. All rights reserved. -->
<template>
  <div class="not-select" :style="setPaddingTop">
    <i class="mdi mdi-information-outline mdi-36px"><br>{{ text }}</i>
  </div>
</template>
<script>

export default {
  props: ['text', 'paddingTop'],
  data () {
    return {
      paddingTopDefault: 'padding-top: 20%'
    }
  },
  computed: {
    // 高さ調整
    setPaddingTop () {
      return this.paddingTop === undefined ? this.paddingTopDefault : 'padding-top: ' + this.paddingTop
    }
  }
}
</script>

<style scoped>
.not-select {
  display: table;
  width: 100%;
  text-align: center;
  font-size: 24px;
}
</style>
