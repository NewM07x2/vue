<template>
  <div>
    <h1>sample</h1>
    <Sub1></Sub1>
    <Sub2></Sub2>
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

  </div>
</template>
<script>
import _ from 'lodash'
import Sub1 from '@/components/sample/common/Sub1.vue'
import Sub2 from '@/components/sample/common/Sub2.vue'

export default {
  name: 'App',
  components: {
    Sub1,
    Sub2
  },
  data () {
    return {
      msg: 'Hello World!',
      result: 1,
      list: []
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
