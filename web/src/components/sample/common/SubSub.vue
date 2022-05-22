<template>
  <div>
    <h1 id="SubSub">SubSubを読み込みました。</h1>
    <!-- propされた値：{{ textPropSub }}
    propしないで取得値：{{ subMsg }}
    <button @click='addCount'>親へ</button> -->
  </div>
</template>
<script>
export default {
  name: 'SubSub',
  // props: {
  //   textPropSub: {
  //     type: String,
  //     defalut: '',
  //     required: false
  //   }
  // },
  data () {
    return {
      sub_msg: 'subSub',
      subMsg: this.$parent.msg
    }
  }
}
</script>
<style scoped>
#SubSub {
  font-size: 24px;
  color:brown
}
</style>
