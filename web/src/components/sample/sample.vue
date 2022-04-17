<template>
  <div id="main">
    <h1>sample</h1>
    msg:「{{ msg }}」
    <button @click='clear()'>clear</button>
    <input type='text' name='text' id='text' v-model='msg'>
    <div>
      <input type='number' v-model='result' /> × 2 = {{ double }}
    </div>
    <div>
      <button @click='copy'>copy</button>
      <button @click='push'>push</button>
    </div>
    <PropEmit
      ref="child"
      :PropFromSample='PropToPropEmitON'
      @printLog1='printLog'
    />
    <button @click='printLog("AAA")'>AAA</button>
    <Sync/>
    <SlotMain/>
  </div>
</template>
<script>
import _ from 'lodash'
import PropEmit from '@/components/sample/PropEmitON/PropEmit.vue'
import Sync from '@/components/sample/sync/Sync'
import SlotMain from '@/components/sample/slot/SlotMain'

export default {
  name: 'App',
  components: {
    PropEmit,
    Sync,
    SlotMain
  },
  data () {
    return {
      msg: 'Hello World!',
      result: 1,
      list: [],
      text: 'sample.vueを読み込んでいます。',
      PropToPropEmitON: 'PropToPropEmitON',
      NoPropToPropEmitON: 'NoPropToPropEmitON'

    }
  },
  computed: {
    // 変数によって動的に変化させたい時に使用。返却値がある。
    double () {
      return this.result * 2
    }
  },
  created () {
  },
  methods: {
    printLog (text) {
      // this.$refs.child.testLog()
      console.log(text + 'を押下しました。')
    },
    addCount () {
      return this.msg + '★'
    },
    clear () {
      this.msg = ''
    },
    copy () {
      const externalObject = {
        color: 'red'
      }
      const original = {
        a: new Date(),
        c: externalObject
      }
      // シャローコピー
      const cloned = _.clone(original)

      // 1階層したのオブジェクトの値を変える
      // ※オリジナルのほうだけのつもり
      externalObject.color = 'blue'
      // iの中身が変わってしまう
      console.log('***original ----------------- shallow copy')
      console.log(original)
      console.log('***cloned ------------------- shallow copy')
      // 両方blueになる。。。
      console.log(cloned)

      // ディープコピー
      const deepcloned = _.cloneDeep(original)
      externalObject.color = 'yellow'

      // iの中身が変わらない！！！
      console.log('\n***original ------------------ deep copy')
      // オリジナルだけyellowになってる
      console.log(original)
      console.log('***deepcloned ---------------- deep copy')
      // blueのまま！
      console.log(deepcloned)
    },
    push () {
      this.list.push('push')
    }
  },
  watch: {
    // ある文字列を監視して、変化が生じた場合に処理を行う。返却値がなし。
    // データが変わるのに応じて非同期やコストの高い処理を実行したいときに最も便利
    msg () {
      // msg変数に変化が生じた場合に処理を行う。
      console.log('変化あり')
    },
    double () {
      this.copy()
    },
    list () {
      console.log(this.list)
    }
  }
}
</script>

<style>
</style>
