<template>
  <div id='profile'>
    <div id='profile-img' class='page-header header-filter header-small'>
      <div class='container'>
        <div class='row'>
          <div class='col-md-8 ml-auto mr-auto text-center'>
            <h2 class='title'>Profile Me</h2>
          </div>
        </div>
      </div>
    </div>
    <div class='main main-raised'>
      <div class='profile-content'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-6 ml-auto mr-auto'>
              <div class='profile'>
                <div class='avatar height100'>
                  <img src='../../../assets/img/mnitta.jpg' alt='Circle Image' class='profile-img img-raised rounded-circle img-fluid'>
                </div>
                <div class='name'>
                  <h2 class='title'>Masato Nitta</h2>
                  <h4>Web Engineer</h4>
                  <a href='#pablo' class='btn btn-just-icon btn-link btn-google'>
                    <v-icon icon='fab fa-google'/>
                  </a>
                  <a href='#pablo' class='btn btn-just-icon btn-link btn-dribbble'>
                    <v-icon icon='fab fa-facebook-square'/>
                  </a>
                  <a href='#pablo' class='btn btn-just-icon btn-link btn-twitter'>
                    <v-icon icon='fab fa-twitter'/>
                  </a>
                  <a href='#pablo' class='btn btn-just-icon btn-link btn-pinterest'>
                    <v-icon icon='fab fa-instagram'/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class='description text-center mt10 mb15 '>
            <p class="ta-left">EC系SE⇒PM,PMO⇒業務系SE(現職：東証一部上場企業) 副業でWeb制作(WordPress案件やEC関連など)と月収3桁のブログやってます！</p>
            <p class="ta-left">AWS Azure Java Pythen Vue.js 等を発信中！ Web制作のお仕事の依頼はDMからお気軽にどうぞ！</p>
          </div>
          <div class='row'>
            <div class='col-md-6 ml-auto mr-auto'>
              <div class='profile-tabs'>
                <ul class='nav nav-pills nav-pills-icons tab-original' role='tablist'>
                  <li class='nav-item width150'>
                    <a class='nav-link active' href='#work' role='tab' data-toggle='tab'>
                      <v-icon icon='fas fa-editWork'/>Skills
                    </a>
                  </li>
                  <li class='nav-item width150'>
                    <a class='nav-link active' href='#work' role='tab' data-toggle='tab'>
                      <v-icon icon='fas fa-editWork'/>Service & Price
                    </a>
                  </li>
                  <li class='nav-item width150'>
                    <a class='nav-link active' href='#work' role='tab' data-toggle='tab'>
                      <v-icon icon='fas fa-editWork'/>Work
                    </a>
                  </li>
                  <li class='nav-item width150'>
                    <a class='nav-link active' href='#work' role='tab' data-toggle='tab'>
                      <v-icon icon='fas fa-editWork'/>Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class='tab-content tab-space'>
            <div class='tab-pane active work' id='work'>
              <div class='row'>
                <div class='col-md-7 ml-auto mr-auto'>
                  <h4 class='title'>Skills</h4>
                  <div class='row collections'>
                    <div class='col-md-4'>
                      <div class='card card-background img-mnitta'>
                        <a href='#pablo'></a>
                        <div class='card-body'>
                          <label class='badge badge-warning'>Spring 2016</label>
                          <a href='#pablo'>
                            <h2 class='card-title'>Stilleto</h2>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class='col-md-4'>
                      <div class='card card-background img-mnitta'>
                        <a href='#pablo'></a>
                        <div class='card-body'>
                          <label class='badge badge-info'>Spring 2016</label>
                          <a href='#pablo'>
                            <h2 class='card-title'>High Heels</h2>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class='col-md-4'>
                      <div class='card card-background img-mnitta'>
                        <a href='#pablo'></a>
                        <div class='card-body'>
                          <label class='badge badge-info'>Spring 2016</label>
                          <a href='#pablo'>
                            <h2 class='card-title'>High Heels</h2>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class='col-md-6'>
                      <div class='card card-background img-mnitta'>
                        <a href='#pablo'></a>
                        <div class='card-body'>
                          <label class='badge badge-danger'>Summer 2016</label>
                          <a href='#pablo'>
                            <h2 class='card-title'>Flats</h2>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class='col-md-6'>
                      <div class='card card-background img-mnitta'>
                        <a href='#pablo'></a>
                        <div class='card-body'>
                          <label class='badge badge-success'>Winter 2015</label>
                          <a href='#pablo'>
                            <h2 class='card-title'>Men's Sneakers</h2>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class='tab-pane connections' id='connections'>
              <div class='row'>
                <div class='col-md-5 ml-auto mr-auto'>
                  <div class='card card-profile card-plain'>
                    <div class='row'>
                      <div class='col-md-5'>
                        <div class='card-header card-header-image'>
                          <a href='#pablo'>
                            <img class='img' src="../../../assets/img/mnitta.jpg">
                          </a>
                          <div class='colored-shadow' style='background-image: url("#"); opacity: 1;'>
                          </div>
                        </div>
                      </div>
                      <div class='col-md-7'>
                        <div class='card-body'>
                          <h4 class='card-title'>Gigi Hadid</h4>
                          <h6 class='card-category text-muted'>Model</h6>
                          <p class='card-description'>Don't be scared of the truth because we need to restart the human foundation in truth...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='col-md-5 mr-auto ml-auto'>
                  <div class='card card-profile card-plain'>
                    <div class='row'>
                      <div class='col-md-5'>
                        <div class='card-header card-header-image'>
                          <a href='#pablo'>
                            <img class='img' src="#">
                          </a>
                          <div class='colored-shadow' style='background-image: url("#"); opacity: 1;'>
                          </div>
                        </div>
                      </div>
                      <div class='col-md-7'>
                        <div class='card-body'>
                          <h4 class='card-title'>Marc Jacobs</h4>
                          <h6 class='card-category text-muted'>Designer</h6>
                          <p class='card-description'>Don't be scared of the truth because we need to restart the human foundation in truth...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='row'>
                <div class='col-md-5 ml-auto mr-auto'>
                  <div class='card card-profile card-plain'>
                    <div class='row'>
                      <div class='col-md-5'>
                        <div class='card-header card-header-image'>
                          <a href='#pablo'>
                            <img class='img' src="#">
                          </a>
                          <div class='colored-shadow' style='background-image: url("#"); opacity: 1;'>
                          </div>
                        </div>
                      </div>
                      <div class='col-md-7'>
                        <div class='card-body'>
                          <h4 class='card-title'>Kendall Jenner</h4>
                          <h6 class='card-category text-muted'>Model</h6>
                          <p class='card-description'>I love you like Kanye loves Kanye. Don't be scared of the truth.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='col-md-5 ml-auto mr-auto'>
                  <div class='card card-profile card-plain'>
                    <div class='row'>
                      <div class='col-md-5'>
                        <div class='card-header card-header-image'>
                          <a href='#pablo'>
                            <img class='img' src="#">
                          </a>
                          <div class='colored-shadow' style='background-image: url("#"); opacity: 1;'>
                          </div>
                        </div>
                      </div>
                      <div class='col-md-7'>
                        <div class='card-body'>
                          <h4 class='card-title'>George West</h4>
                          <h6 class='card-category text-muted'>Model/DJ</h6>
                          <p class='card-description'>I love you like Kanye loves Kanye.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class='tab-pane text-center gallery' id='media'>
              <div class='row'>
                <div class='col-md-3 ml-auto'>
                  <img src='../../../assets/img/mnitta.jpg' class='rounded'>
                  <img src='../../../assets/img/mnitta.jpg' class='rounded'>
                </div>
                <div class='col-md-3 mr-auto'>
                  <img src='../../../assets/img/mnitta.jpg' class='rounded'>
                  <img src='../../../assets/img/mnitta.jpg' class='rounded'>
                  <img src='../../../assets/img/mnitta.jpg' class='rounded'>
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
#profile-img{
  background-image: url(../../../assets/img/marin3.jpg);
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
.img-mnitta{
  background-image: url(../../../assets/img/marin3.jpg);
  transform: translate3d(0px, 0px, 0px);
}
.profile-img {
  max-width: 160px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  top: -75px;
}

.text-center > p{
  text-align: center;
}
</style>
