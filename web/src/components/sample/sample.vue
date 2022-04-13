<template>
  <div>
    <h1>sample</h1>
    <Sub1></Sub1>
    <Sub2></Sub2>
  </div>
</template>
<script>
import Sub1 from '@/components/sample/common/Sub1.vue'
import Sub2 from '@/components/sample/common/Sub2.vue'

export default {
  name: 'App',
  components: {
    Sub1,
    Sub2

  }
}
</script>

<style>

</style>
