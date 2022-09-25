<template>
  <div id="overlay">
      <div id="modal" class="modal" @click="stopEvent">
        <h1>modal</h1>
        <div>
          <!-- <router-link :to="{ name: 'modal'}" target="_blank" style='width=800, height=600, top=0, left=0'>
            Link Text
          </router-link> -->
          <button @click="windowOpen">window open</button>
          <button @click="modalCloed">modalCloed</button>
          <button @click="rmObj">rmObj</button>
          <button @click="watchObj">watchObj</button>
          <button @click="setSession">set</button>
          <button @click="getSession">get</button>
        </div>
        <p>count: {{count}}</p>
        <p>sessionData: {{sessionData}}</p>
      </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  props: {
    modalData: {
      type: Array
    }
  },
  components: {
  },
  data () {
    return {
      msg: 'window'
    }
  },
  computed: {
    ...mapState([ 'count' ]),
    ...mapGetters([ 'getMessage', 'getCount', 'windowObject' ]),
    sessionData () {
      return window.sessionStorage.getItem('cnt')
    }
  },
  methods: {
    ...mapMutations([
      'decrement'
    ]),
    ...mapActions([
      'increment'
    ]),
    increment () {
      this.$store.commit('increment')
    },
    stopEvent () {
      event.stopPropagation()
    },
    windowClose () {
      window.close()
    },
    modalCloed () {
      // this.modalFlg = false
      this.$emit('modalCloed')
    },
    rmObj () {
      this.$store.commit('removeWindowObject')
      window.sessionStorage.clear()
    },
    watchObj () {
      console.log(this.$store.state.windowObject)
    },
    getSession () {
      console.log('session ' + sessionStorage.getItem('cnt'))
    },
    setSession () {
      sessionStorage.setItem('cnt', sessionStorage.getItem('cnt') + 1)
    },
    windowOpen () {
      if (!this.windowObject) {
        console.log('open')
        const url = this.$router.resolve({
          name: 'modalWindow'
          // params: {
          //   store: this.$store
          // }
        }).href
        const windowObject = window.open(
          url,
          null,
          'width=1000, height=600, top=200, left=500'
        )
        sessionStorage.setItem('windowObject', windowObject)
        // this.$store.commit('createWindowObject', { windowObject: windowObject })
      } else {
        console.log('opened')
      }
    }
  },
  mounted () {
    this.$store.watch(
      (state, getters) => getters.getCount,
      (newValue, oldValue) => {
        this.$set(this.msg, newValue)
        console.log('変更検知')
      }
    )
  },
  watch: {
    deep: true,
    windowObject () {
      console.log('変更検知')
      console.log(this.$store.state.windowObject)
      // this.$setでdataを変更。
      // this.$store.commit('createWindowObject', { windowObject: this.windowObject })
    },
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
.text-center{
  text-align: center;
}
ul, li {
  padding: 0;
  margin: 0;
}
li {
  list-style:none
}

#overlay{
  z-index:1;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);

  display: flex;
  align-items: center;
  justify-content: center;

}

#modal {
  z-index:2;
  width:50%;
  height:70%;
  background-color: white;
}
</style>
