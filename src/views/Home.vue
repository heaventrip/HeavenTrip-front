<template>
  <Header />
  <HomeCarousel />
  <HomeMap />
  <HomeReviews />
  <HomeHighlight />
  <HomeArticles />
  <Footer />
</template>

<script>
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'
import HomeCarousel from '@/components/home/HomeCarousel.vue'
import HomeMap from '@/components/home/HomeMap.vue'
import HomeHighlight from '@/components/home/HomeHighlight.vue'
import HomeReviews from '@/components/home/HomeReviews.vue'
import HomeArticles from '@/components/home/HomeArticles.vue'

export default {
  name: 'HomePage',
  components: {
    Header,
    HomeCarousel,
    HomeMap,
    HomeHighlight,
    HomeReviews,
    HomeArticles,
    Footer
  }
}
</script>

<style scoped></style>
