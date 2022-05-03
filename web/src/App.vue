<template>
  <div id='app'>
    <Header/>
    <router-view>
      <img src='./assets/img/logo.jpg'>
    </router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/page/General/Header'
import Footer from '@/components/page/General/Footer'
import Contact from '@/components/page/General/Contact'
import Login from '@/components/page/General/Login'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Login,
    Contact
  }
}
</script>

<style>
html,body,h1,h2,h3,h4,h5,h6,p,ul,li{
  margin: 0 !important;
  padding: 0!important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  width: 100%;
  text-align: center;
  color: #2c3e50;
}
#app > img {
  /* width: 700px; */
  height: auto;
}

</style>
