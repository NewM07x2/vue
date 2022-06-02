<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Vue Practice</h2>
    <div id="overlay" @click="modalCloed" v-if="modalFlg">
      <div id="modal" class="modal" @click="stopEvent">
        <h1>modal</h1>
        <div>
          <router-link :to="{ name: 'modal'}" target="_blank" style='width=800, height=600, top=0, left=0'>
            Link Text
          </router-link>
          <button @click="windowOpen">window open</button>
          <button @click="modalCloed">modalCloed</button>
        </div>
      </div>
    </div>
    <ul>
      <li>
        <label for="">Storeについて：</label>
        <router-link to="/store">Go to Store</router-link>
      </li>
      <li>
        <label for="">GoJSについて：</label>
        <router-link to="/gojs">GoJS</router-link>
      </li>
      <li>
        <label for="">Modal画面：</label>
        <button @click='modalOpen'>modalOpen</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Vue',
      modalFlg: false,
      windowSize: {
        x: 0,
        y: 0
      }
    }
  },
  mounted () {
  },
  methods: {
    modalOpen () {
      console.log('modalOpen')
      this.modalFlg = true
    },
    modalCloed () {
      console.log('modalCloed')
      this.modalFlg = false
    },
    stopEvent () {
      event.stopPropagation()
    },
    windowOpen () {
      console.log('windowOpen')
      const url = this.$router.resolve({ name: 'modal' }).href
      window.open(url, '画面', 'width=1000, height=600, top=200, left=500')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
