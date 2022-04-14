<template>
  <div>
    <p>count：{{ count }}</p>
    -------------------------------------------------------------------------------
    <!-- 値を数字型に変換させたいときは 「.number」を付与する。-->
    <div><input v-model='count'>：「.number」なし</div>
    <div><input v-model.number='count'>：「.number」あり</div>
    <div><button @click='countFunction'> +1 </button></div>
    -------------------------------------------------------------------------------
    <!-- ユーザの入力から空白を自動的に取り除きたいとき「trim」を使用する。-->
    <div :class='trim' >{{ trim }}</div>
    <div><input :value='trim'>：「.trim」</div>
    <div><input v-model.trim='trim'>：「.trim」</div>
    -------------------------------------------------------------------------------
    <!-- 両端の空白を削除するなら「trim」を使用する。-->
    <div :class='trim' >{{ trim }}</div>
    <div><input :value='trim'>：「.trim」</div>
    <div><input v-model.lazy='trim'>：「.trim」</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0,
      trim: ' trim '
    }
  },
  methods: {
    countFunction () {
      this.count += 1
    }
  }
}
</script>

<style scoped>
</style>
