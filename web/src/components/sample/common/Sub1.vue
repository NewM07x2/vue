<template>
  <div>
    <h1 id="sub1">Sub1を読み込んでいます。</h1>
    propされた値：{{ textPropSub }}
    propしないで取得値：{{ subMsg }}
    <!-- <button @click='addCount'>親へ</button> -->
    <SubSub></SubSub>
  </div>
</template>
<script>
import SubSub from '@/components/sample/common/SubSub'
export default {
  name: 'SubSub',
  components: {
    SubSub
  },
  props: {
    textPropSub: {
      type: String,
      defalut: '',
      required: false
    }
  },
  data () {
    return {
      sub_msg: 'sub2の値!',
      subMsg: this.$parent.msg
    }
  },
  method: {
    addCount () {
      this.textPropSub = '変更'
      this.$emit('addCount')
    }
  }
}
</script>
<style scoped>
#sub1 {
  font-size: 24px;
  color:brown
}
</style>
