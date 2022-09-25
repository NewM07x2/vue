<template>
  <div>
    <div id="header">
      <h1>Store</h1>
    </div>
    <div id="store" class="store">
      <ul>
        <li>{{ message }}</li>
        <li>{{ message2 }}</li>
        <li>
          「{{ count }}」
          「{{ getCount }}」
          <button @click="increment"> +1 </button>
          <button @click="decrement_"> -1 </button>
          <button @click="increment10"> +10 </button>
          <button @click="decrement10"> -10 </button>
        </li>
      </ul>
    </div>
    <div id="footer">
      <router-link to="/">Go to home</router-link>
    </div>
  </div>
</template>

<script>
import {
  mapState
  , mapGetters
  , mapMutations
  , mapActions
} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      // stateCount: null,
      // gettersCount: null
    }
  },
  computed: {
    ...mapState([ 'count' ]),
    ...mapGetters([ 'getMessage', 'getCount' ]),
    message () {
      // stateに直接見にいく
      return this.$store.state.message_state
    },
    message2 () {
      // getter経由でstateの情報を見にいく
      return this.$store.getters.getMessage
    }
  },
  methods: {
    ...mapMutations([
      'decrement'
    ]),
    ...mapActions(['increment']),
    increment () {
      console.log(this.count)
      this.$store.commit('increment')
    },
    decrement_ () {
      // this.$store.commit('decrement')
      console.log(this.count)
      this.decrement()
    },
    increment10 () {
      var i = 1
      for (i = 1; i <= 10; i++) {
        // this.$store.commit('increment')
        this.$store.dispatch('increment')
      }
    },
    decrement10 () {
      var i = 1
      var count = this.$store.getters.count
      for (i = 1; i <= 10; i++) {
        if (count > 0) {
          this.$store.dispatch('decrement')
        }
        // this.$store.commit('decrement')
      }
    }
  },
  created () {

  },
  watch: {
    msg () {
      console.log('変化あり')
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
</style>
