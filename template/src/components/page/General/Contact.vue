<template>
  <div id='contact'>
    <div id='header-img' class='page-header header-filter header-small'>
      <div class='container'>
        <div class='row'>
          <div class='col-md-8 ml-auto mr-auto text-center'>
          </div>
        </div>
      </div>
    </div>
    <div class="main main-raised">
      <div class="contact-content pt40 pb40">
        <div class="container container-original">
          <h2 class="title title-original pb10">Send us a message</h2>
          <div class="row">
            <div class="col-md-6 ta-left">
              <p class="description">You can contact us with anything related to our Products. We'll get in touch with you as soon as possible.
                <br>
                <br>
              </p>
              <form role="form" id="contact-form" method="post">
                <div class="form-group bmd-form-group ta-left">
                  <input type="text" class="form-control" id="name" placeholder="Your name">
                </div>
                <div class="form-group bmd-form-group ta-left">
                  <input type="email" class="form-control" id="exampleInputEmails" placeholder="Email address">
                  <span class="bmd-help">We'll never share your email with anyone else.</span>
                </div>
                <div class="form-group bmd-form-group ta-left">
                  <input type="text" class="form-control" id="phone" placeholder="Phone">
                </div>
                <div class="form-group label-floating bmd-form-group">
                  <textarea class="form-control" rows="6" id="message" placeholder="Your message">
                  </textarea>
                </div>
                <div class="submit text-center">
                  <input type="submit" class="btn btn-primary btn-raised btn-round" value="Contact Us">
                </div>
              </form>
            </div>
            <div class="col-md-4 ml-auto">
              <div class="info info-horizontal">
                <div class="icon icon-primary">
                </div>
                <div class="description">
                  <h4 class="info-title ta-left">Find us at the office</h4>
                  <p class="ta-left">Bld Mihail Kogalniceanu, nr. 8,
                    <br>7652 Bucharest,
                    <br>Romania</p>
                </div>
              </div>
              <div class="info info-horizontal">
                <div class="icon icon-primary">
                </div>
                <div class="description">
                  <h4 class="info-title ta-left">Give us a ring</h4>
                  <p class="ta-left">Michael Jordan
                    <br>+40 762 321 762
                    <br>Mon - Fri, 8:00-22:00</p>
                </div>
              </div>
              <div class="info info-horizontal">
                <div class="icon icon-primary">
                </div>
                <div class="description">
                  <h4 class="info-title ta-left">Legal Information</h4>
                  <p class="ta-left">Creative Tim Ltd.
                    <br>VAT · EN2341241
                    <br>IBAN · EN8732ENGB2300099123
                    <br>Bank · Great Britain Bank</p>
                </div>
              </div>
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
#header-img{
  background-image: url(../../../assets/img/book.jpg);
  transform: translate3d(0px, 0px, 0px);
  width : 100%;
  height: 65vh;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin: 0;
  padding: 0;
  border: 0;
  align-items: center;
}
</style>
