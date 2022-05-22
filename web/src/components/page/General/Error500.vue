<template>
  <div id="error404">
    <div class="wrapper">
      <div class="page-header header-filter">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-100 text-center">
              <h1 class="title">500</h1>
              <h2 class="description">Server Error</h2>
              <button type="button" class="btn bg-gradient-dark btn-original">Go to Homepage</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import _ from 'lodash'
export default {
  name: 'App',
  components: {},
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
  methods: {},
  watch: {
    msg () {
      console.log('変化あり')
    }
  }
}
</script>

<style scoped>
#error404{
  background-image: url(../../../assets/img/marin2.jpg);
  transform: translate3d(0px, 0px, 0px);
  width : 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin: 0;
  padding: 0;
  border: 0;
  align-items: center;
  font-size: 100px;
}
.title {
  font-size: 100px;
}
.row-original{
  display: flex;
  justify-content: center;
}
.mt50{
  margin-top: 10rem;
  margin-bottom: 10rem;
}
.btn-original{
  background-color: transparent;
  border: 1px gray solid;
  border-radius: 10px;
}

</style>
