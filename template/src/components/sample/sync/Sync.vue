<template>
  <div id='main'>
    親："{{SyncText}}"
    <SyncSub :SyncTextSub.sync='SyncText' />
  </div>
</template>
<script>
import SyncSub from '@/components/sample/sync/SyncSub'
export default {
  // name: 'SubSub',
  components: {
    SyncSub
  },
  data () {
    return {
      onlyPropEmitText: 'Syncテキストです。',
      text: 'Sync.vueを読み込んでいます。',
      SyncText: ''
    }
  },
  methods: {
    SyncLog () {
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
