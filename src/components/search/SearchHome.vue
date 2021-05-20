<template>
  <div>
    <SearchResultSection />
  </div>
</template>
<script>
import SearchResultSection from '@/components/search/SearchResultSection'

export default {
  name: 'SearchHome',
  components: {
    SearchResultSection
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
