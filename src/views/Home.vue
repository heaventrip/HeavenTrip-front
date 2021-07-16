<template>
  <div class="loader" v-if="loading"></div>
  <Header />
  <MainSection />
  <Footer />
  <!-- <Profile /> -->
  <SelectADate />
</template>

<script>
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import MainSection from '@/components/home/MainSection'
import SelectADate from '@/components/SelectADate'
export default {
  name: 'HomePage',
  components: {
    Header,
    MainSection,
    Footer,
    SelectADate
  },
  data() {
    return {
      loading: false
    }
  }
}
</script>

<style scoped>
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
