<template>
  <keep-alive>
    <component :is="'Header'"></component>
  </keep-alive>
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
  }
}
</script>

<style scoped></style>
