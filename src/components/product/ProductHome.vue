<template>
  <div class="main-product-content">
    <!-- <Header v-if="loaded" @nav-is-active="$refs.productContent.navIsActive = true" :course="course" /> -->
    <transition name="fade" @after-enter="afterEnter" @before-enter="beforeEnter">
      <Header ref="header" v-if="header" :course="course" />
      <div v-else>
        <!-- <ProductContent :course="course" ref="productContent" @slide-is-up="$refs.productFooter.slideIsUp = true" @slide-is-down="$refs.productFooter.slideIsUp = false" /> -->
        <ProductContent :course="course" ref="productContent" />
        <ProductFooter ref="productFooter" />
      </div>
    </transition>
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
  props: ['id'],
  data() {
    return {
      course: {},
      header: true,
      showLoginModal: false
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
    },
    afterEnter() {
      if (this.header === true) {
        this.listenScrollDown()
      }

      //entered product content
      if (this.header === false) {
        document.body.removeAttribute('style')
      }
    },
    beforeEnter() {
      if (this.header === true) {
        document.body.style.position = 'fixed'
        document.body.style.overflow = 'hidden'
      }
    },
    listenScrollUp() {
      let that = this
      document.querySelector('.main-product-content').addEventListener('wheel', (e) => {
        if (window.scrollY === 0 && e.deltaY < 0) {
          that.header = true
        }
      })
    },
    listenScrollDown() {
      let that = this
      document.querySelector('.header').addEventListener('wheel', (e) => {
        if (e.deltaY > 0) {
          that.header = false
        }
      })
    }
  },
  watch: {
    header(newVal) {
      if (newVal === true) {
        this.listenScrollUp()
      }
      if (newVal === false) {
        this.listenScrollUp()
      }
    }
  },
  async created() {
    await this.$axios.get(`/courses/${this.id}`).then((res) => {
      this.course = res.data.course
      this.loaded = true
    })
  },
  mounted() {
    this.jquery()
    document.body.style.position = 'fixed'
    document.body.style.overflow = 'hidden'
    this.listenScrollDown()
  }
}
</script>
