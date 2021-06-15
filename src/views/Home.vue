<template>
  <div id="axiosForm">
    <div class="loader" v-if="loading"></div>
    <Header />
    <MainSection />
    <Footer />
    <Login />
    <Profile />
    <SelectADate />
  </div>
</template>
<style scoped>
#axiosForm {
  /* Components Root Element ID */
  position: relative;
}
.loader {
  /* Loader Div Class */
  position: absolute;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  background-color: #eceaea;
  /* background-image: url('../assets/images/loader.gif') no-repeat center center / cover; */
  background-size: 50px;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 10000000;
  opacity: 0.4;
  filter: alpha(opacity=40);
}
</style>
<script>
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import MainSection from '@/components/home/MainSection'
import Login from '@/components/connection/Login'
import Profile from '@/components/connection/Profile'
import SelectADate from '@/components/SelectADate'
export default {
  name: 'HomePage',
  components: {
    Header,
    MainSection,
    Footer,
    Login,
    Profile,
    SelectADate
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      loading: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
