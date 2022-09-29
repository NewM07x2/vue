<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Vue Practice</h2>
    <ul>
      <li>
        <label for="">時計について：</label>
        <router-link to="/time">Go to Times</router-link>
      </li>
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
      <li>
        <label for="">bootstrapについて：</label>
        <router-link to="/bootstrap">bootstrap</router-link>
      </li>
      <li>
        <label for="">Apiについて：</label>
        <router-link to="/api">api</router-link>
      </li>
      <Modal @modalCloed='modalCloed' v-if="modalFlg"/>
      <div>
        <b-form-select
          v-model="selected"
          :options="options"
          value-field="item"
          text-field="name"
          disabled-field="notEnabled"
        ></b-form-select>
        <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
      </div>
      <b-button @click='selectBtn' variant="secondary">表示/非表示</b-button>
      <b-button variant="danger" @click='selectChange' v-if="selectFlg">reset</b-button>
      </ul>

  </div>
</template>

<script>
import {
  mapState,
  mapGetters
} from 'vuex'
import Modal from '@/components/pages/Modal'
export default {
  name: 'Main',
  components: {
    Modal
  },
  data () {
    return {
      msg: 'Vue',
      modalFlg: false,
      selectFlg: true,
      windowSize: {
        x: 0,
        y: 0
      },
      selectedValue: '',
      options: [
        { item: 'A', name: 'Option A' },
        { item: 'B', name: 'Option B' },
        { item: 'D', name: 'Option C', notEnabled: true },
        { item: { d: 1 }, name: 'Option D' }
      ]
    }
  },
  computed: {
    ...mapState([ 'count' ]),
    ...mapGetters([ 'getMessage', 'getCount' ]),
    selected: {
      get () {
        return this.selectedValue
      },
      set (value) {
        this.selectFlg = !this.selectFlg
        this.selectedValue = value
      }
    }
  },
  methods: {
    modalOpen () {
      console.log('modalOpen')
      this.modalFlg = true
    },
    modalCloed () {
      this.modalFlg = false
    },
    selectBtn () {
      this.selectFlg = !this.selectFlg
      console.log(this.selectFlg)
    },
    selectChange () {
      console.log('selectChange')
      this.selected = 'A'
    }
  },
  created () {
  },
  beforeMount () {
    this.selected = 'A'
  },
  mounted () {
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
