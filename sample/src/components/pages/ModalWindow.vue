<template>
  <div>
    <h1>Modal</h1>
    <p>{{msg}}</p>
    <p>count: {{count}}</p>
    <p><button @click='windowClose'> close </button></p>
    <p><button @click='watchObj'> watchObj </button></p>
    <p><button @click='increment'> +1 </button></p>
  </div>
</template>

<script>
import {
  mapState,
  mapGetters
  // mapMutations,
  // mapActions
} from 'vuex'
export default {
  components: {
  },
  data () {
    return {
      msg: 'window'
    }
  },
  computed: {
    ...mapState([ 'count' ]),
    ...mapGetters([ 'getMessage', 'getCount' ])
  },
  methods: {
    windowClose () {
      console.log('windowClose')
      this.$store.commit('removeWindowObject')
      console.log(this.$store.state.windowObject)
      // window.close()
    },
    watchObj () {
      console.log(this.$store.state.windowObject)
    },
    increment () {
      console.log(this.count)
      this.$store.commit('increment')
    }
  },
  mounted () {
    this.$store.watch(
      (state, getters) => getters.getCount,
      (newValue, oldValue) => {
        this.$set(this, 'msg', newValue + 'へ変更しました。')
        console.log('変更検知2')
      }
    )
    this.$nextTick(() => {
      // nextTickを使用してコンソールにログを出力します。
      console.log('変更検知3')
    })
  },
  watch: {
    deep: true,
    count () {
      console.log('変更検知')
      // this.$setでdataを変更。
      // this.$store.commit('createWindowObject', { windowObject: this.windowObject })
    }
  }
}
</script>
<style scoped>
#store{
  margin: 10px 0;
  height: 100px;
  border-bottom: 1px lightgray dashed;
  border-top: 1px lightgray dashed;
}
li {
  list-style: none;
}
.map {
  width: 100vw;
  height: 100vh;
}
</style>
