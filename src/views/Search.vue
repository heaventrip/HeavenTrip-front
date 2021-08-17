<template>
  <div>
    <Header />
    <SearchResultSection />
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/header/Header.vue'
import SearchResultSection from '@/components/search/SearchResultSection.vue'
import Footer from '@/components/footer/Footer.vue'

export default {
  name: 'Search',
  components: {
    Header,
    SearchResultSection,
    Footer
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
