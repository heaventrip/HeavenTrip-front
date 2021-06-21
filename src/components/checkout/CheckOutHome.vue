<template>
  <div>
    <CheckOutHeader :course="course" />
    <CheckOutSections :course="course" />
  </div>
</template>
<script>
import CheckOutHeader from '@/components/checkout/CheckOutHeader'
import CheckOutSections from '@/components/checkout/CheckOutSections'

export default {
  name: 'CheckOutHome',
  props: ['productId'],
  components: {
    CheckOutHeader,
    CheckOutSections
  },
  data() {
    return {
      course: ''
    }
  },
  async created() {
    this.$axios.get(`/courses/${this.$props.productId}`).then((res) => (this.course = res.data.course))
  }
}
</script>
