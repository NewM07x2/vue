<template>
  <div id='main'>
    "{{text}}"
    <SlotSub>
      Slot実験
    </SlotSub>
  </div>
</template>
<script>
import SlotSub from '@/components/sample/slot/SlotSub'
export default {
  // name: 'SubSub',
  components: {
    SlotSub
  },
  data () {
    return {
      text: 'Slot.vueを読み込んでいます。',
    }
  },
  methods: {
    SlotLog () {
    }
  }
}
</script>
<style scoped>
#sub1 {
  font-size: 24px;
  color:blue
}

#main {
  padding: 25px;
  border: 2px dashed grey;
  margin-bottom: 25px;
  background-color: beige;
}

</style>
