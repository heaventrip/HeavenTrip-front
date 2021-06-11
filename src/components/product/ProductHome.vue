<template>
  <div class="main-product-content">
    <Header />
    <ProductContent @slide-is-up="$refs.productFooter.slideIsUp = true" @slide-is-down="$refs.productFooter.slideIsUp = false" />
    <ProductFooter ref="productFooter" />
  </div>
  <!-- <ProductSection /> -->
  <!-- <ProductModal /> -->
</template>

<script>
import Header from '@/components/header/Header.vue'
import ProductContent from '@/components/product/ProductContent.vue'
import ProductFooter from '@/components/product/ProductFooter.vue'
// import ProductSection from '@/components/product/ProductSection.vue'
// import ProductModal from '@/components/product/ProductModal.vue'

export default {
  name: 'ProductHome',
  components: {
    Header,
    ProductContent,
    ProductFooter
    // ProductSection,
    // ProductModal
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    jquery() {
      // var x = document.getElementById('center')
      // x.scrollIntoView({ inline: 'center' })
      $('#viewMore')
        .on('show.bs.collapse', function () {
          $('.view-more-btn').html('Voir moins <i class="fas fa-chevron-up ml-2"></i>')
        })
        .on('hide.bs.collapse', function () {
          $('.view-more-btn').html('Voir plus <i class="fas fa-chevron-down ml-2"></i>')
        })
      $('#viewMoreday1,#viewMoreday2')
        .on('show.bs.collapse', function () {
          $(this).parent().find('.view-more-btn.active_hidden').hide()
        })
        .on('hide.bs.collapse', function () {
          $(this).parent().find('.view-more-btn.active_hidden').show()
        })
      $('.booking-session .booking-session-list li a')
        .on('shown.bs.tab', function (e) {
          e.preventDefault()
          $('.backdrop').show()
          $('body').css('overflow', 'hidden')
        })
        .on('hidden.bs.tab', function (e) {
          e.preventDefault()
          $('.backdrop').hide()
          $('body').css('overflow', 'visible')
        })
    }
  },
  mounted() {
    this.jquery()
  }
}
</script>
