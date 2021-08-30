<template>
  <div>
    <HeaderTab />
  </div>
</template>
<script>
import HeaderTab from '@/components/headertabs/HeaderTab'

export default {
  name: 'HeaderTabs',
  components: {
    HeaderTab
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
