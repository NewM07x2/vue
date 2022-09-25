<template>
  <div id="sample">
    <h1>sample</h1>
  </div>
</template>

<script>
export default {
  name: 'Bootstrap',
  data () {
    return {
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
  },
  beforeCreate () {
    // データの監視とイベント/ウォッチャのセットアップより前の、インスタンスが初期化されるときに同期的に呼ばれます。
    console.log('beforeCreate')
  },
  created () {
  //  インスタンスが作成された後に同期的に呼ばれます。
  //  この段階では、インスタンスは、データ監視、算出プロパティ、メソッド、watch/event コールバックらの
  //  オプションのセットアップ処理が完了したことを意味します。
  //  しかしながら、マウンティングの段階は未開始で、`$el` プロパティはまだ利用できません。
    console.log('created')
  },
  beforeMount () {
    // `render` 関数が初めて呼び出されようと、マウンティングが開始される直前に呼ばれます。
    console.log('beforeMount')
  },
  mounted () {
  //  新たに作成される `vm.$el` によって置き換えられる `el` に対して、インスタンスがマウントされたちょうど後に呼ばれます。
  //  ルートインスタンスがドキュメントの中の要素にマウントされる場合、`vm.$el` も `mounted` が呼び出されるときにドキュメントの中に入ります。
  //  `mounted` は 全ての子コンポーネントもマウントされていることを保証**しない**ことに注意してください。
  //  ビュー全体がレンダリングされるまで待つ場合は、 `mounted` の代わりに
  //  [vm.$nextTick](https://jp.vuejs.org/v2/api/index.html#vm-nextTick) を使うことができます。
    console.log('mounted')
  },
  beforeUpdate () {
  //  データが変更されるとき、DOM が適用される前に呼ばれます。
  //  これは、更新前に既存の DOM にアクセスするのに適しています。
  //  例: 手動で追加されたイベントリスナを削除する
  //  このフックはサーバサイドレンダリングでは呼ばれません。
  //  サーバサイドでは初期描画のみ実行されるためです。
    console.log('beforeCreate')
  },
  updated () {
  // データが変更後、仮想 DOM が再描画そしてパッチを適用によって呼ばれます。
  // このフックが呼び出されるとき、コンポーネントの DOM は更新した状態になり、このフックで DOM に依存する操作を行うことができます。
  // しかしがながら、ほとんどの場合、無限更新ループに陥る可能性があるため、このフックでは状態を変更するのを回避すべきです。
  // `updated` は 全ての子コンポーネントも再レンダリングされていることを保証**しない**ことに注意してください。
  // ビュー全体が再レンダリングされるまで待つ場合は、 `updated` の代わりに
  // [vm.$nextTick](https://jp.vuejs.org/v2/api/index.html#vm-nextTick) を使うことができます。
  // このフックはサーバサイドレンダリングでは呼ばれません。
  // beforeUpdate と updated で同じ変数に対してデータを更新かけると無限ループに陥る
    console.log('created')
  },
  beforeDestroy () {
  //  Vue インスタンスが破棄される直前に呼ばれます。
    console.log('beforeDestroy')
  },
  destroyed () {
    // Vue インスタンスが破棄された後に呼ばれます。
    console.log('destroyed')
  }
}
</script>
<style scoped>
</style>
