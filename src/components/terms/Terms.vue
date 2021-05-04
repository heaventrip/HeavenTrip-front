<template>
  <div>
    <Header />
    <pre></pre>
    <MainContentSection />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainContentSection from "@/components/terms/MainContentSection";

export default {
  name: "Terms",
  components: {
    Header,
    Footer,
    MainContentSection,
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
