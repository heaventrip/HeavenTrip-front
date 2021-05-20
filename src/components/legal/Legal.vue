<template>
  <div>
    <Header />
    <MainContentSection />
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import MainContentSection from '@/components/legal/MainContentSection'

export default {
  name: 'Legal',
  components: {
    Header,
    Footer,
    MainContentSection
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
