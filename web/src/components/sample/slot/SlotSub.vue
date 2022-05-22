<template>
  <div id='main'>
    <p>{{text}}(変化なし系)</p>
    <p><slot>{{text}}</slot>(変化あり系)</p>
    <p><slot :slotScope="slotScope">{{slotScope}}</slot>(変化あり系:名前指定)</p>
  </div>
</template>
<style>
</style>
<script>
export default {
  // name: 'SubSub',
  data () {
    return {
      text: 'SlotTextSub.vueを読み込んでいます。'
    }
  }
}
</script>
<style scoped>
#main {
  padding: 25px;
  border: 2px dashed grey;
  margin-bottom: 25px;
  background-color: beige;
}

</style>
