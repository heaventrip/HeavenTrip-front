<template>
  <div>
    <SearchHeader />
    <SearchResultSection />
    <SearchFooter />
  </div>
</template>
<script>
import SearchHeader from "@/components/search/SearchHeader";
import SearchResultSection from "@/components/search/SearchResultSection";
import SearchFooter from "@/components/search/SearchFooter";

export default {
  name: "SearchHome",
  components: {
    SearchHeader,
    SearchResultSection,
    SearchFooter,
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>
