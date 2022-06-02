<template>
  <div>
    <h2>{{ title | upperCase }}</h2>
    <h4>{{ subTitle | lowerCase }}</h4>
    <p>{{ number }}</p>
    <button type="button" class="btn btn-primary" @click="number++">+1</button>
  </div>
</template>
<script>
import { tokyoNumber } from '@/components/sample/mixin/tokyoNumber'
export default {
  name: 'mixin',
  mixins: [tokyoNumber]
}
</script>
<style scoped>
</style>
