<template>
  <div id="login">
    <div id="login-img" class="page-header header-filter">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
            <form class="form" method="" action="">
              <div class="card card-login card-hidden">
                <div class="card-header card-header-primary text-center">
                  <h3 class="card-title">Login</h3>
                  <!-- <div class="social-line">
                    <a href="#pablo" class="btn btn-just-icon btn-link btn-white">
                      <i class="fab fa-facebook-square"></i>
                    </a>
                    <a href="#pablo" class="btn btn-just-icon btn-link btn-white">
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a href="#pablo" class="btn btn-just-icon btn-link btn-white">
                      <i class="fa fa-google-plus"></i>
                    </a>
                  </div> -->
                </div>
                <div class="card-body ">
                  <p class="card-description text-center">Classical</p>
                  <span class="bmd-form-group">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="material-icons">name</i>
                        </span>
                      </div>
                      <input type="text" class="form-control" placeholder="First Name...">
                    </div>
                  </span>
                  <span class="bmd-form-group">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="material-icons">email</i>
                        </span>
                      </div>
                      <input type="email" class="form-control" placeholder="Email...">
                    </div>
                  </span>
                  <span class="bmd-form-group">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="material-icons">password</i>
                        </span>
                      </div>
                      <input type="password" class="form-control" placeholder="Password...">
                    </div>
                  </span>
                </div>
                <div class="card-footer justify-content-center">
                  <a href="#pablo" class="btn btn-rose btn-link btn-lg">Lets Go</a>
                </div>
              </div>
            </form>
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
#login-img{
  background-image: url('../../../assets/img/mountain.jpg');
  background-size: cover;
  background-position: top center;
}

</style>
