<template>
  <div id='main'>
    <p><slot>{{text}}</slot></p>
  </div>
</template>
<style>
</style>

  </div>
</template>
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
