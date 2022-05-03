<template>
  <div>
    <b-container fluid class='container'>
      <b-row>
        <b-col sm='12' md='2' lg='4' class='box box-coler-red'></b-col>
        <b-col sm='12' md='8' lg='4' class='box box-coler-beige'></b-col>
        <b-col sm='12' md='2' lg='4' class='box box-coler-pink'></b-col>
        </b-row>
      <b-row>
        <b-col>col</b-col>
        <b-col>col</b-col>
        <b-col>col</b-col>
        <b-col>col</b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
// import _ from 'lodash'
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  computed: {
    // 変数によって動的に変化させたい時に使用。返却値がある。
    double () {
      return this.result * 2
    }
  },
  created () {},
  methods: {
  },
  watch: {
    msg () {
      console.log('変化あり')
    }
  }
}
</script>

<style scoped>
/* 基本CSS記載 */
html,body,h1,h2,h3,h4,h5,h6,p,ul,li, .container, .row{
  margin: 0 !important;
  padding: 0!important;
}

/*
  画面幅に合わせた処理
  Grid幅はタグにて指定
*/
@media screen and (min-width:1500px) {
  .container {
    display: inline!important;
    max-width: 1500px!important;
  }
}
@media screen and (min-width:768px) and (max-width:1499px) {
  .box-coler-pink{
    background-color:magenta!important;
  }
}

@media screen and (max-width:767px){
  .box-coler-pink,
  .box-coler-beige{
    display: none!important;
  }
}

@media screen and (max-width:1499px) {
  .container {
    display: inline!important;
  }
}

.container {
  background-color: 0d6efd;
  padding: 0;
  margin: 0;
  /* width: 100%; */
}
.row{
/* width: 100% !important; */
  background-color: black;
}
.box{
  display: inline-block;
  height: 100px;
  /* width: 100%; */
}
.box-coler-red{
  background-color: red;
}
.box-coler-pink{
  background-color: pink;
}
.box-coler-beige{
  background-color: beige;
}

</style>
