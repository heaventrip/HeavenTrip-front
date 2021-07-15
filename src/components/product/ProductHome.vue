<template>
  <div class="main-product-content">
    <!-- <Header v-if="loaded" @nav-is-active="$refs.productContent.navIsActive = true" :course="course" /> -->
    <transition name="fade" @after-enter="afterEnter" @before-enter="beforeEnter">
      <ProductHeader ref="header" v-if="header" :course="course" @clicked-tab="handleClickedTab" />
      <div v-else>
        <!-- <ProductNav /> -->
        <!-- <ProductContent :course="course" ref="productContent" @slide-is-up="$refs.productFooter.slideIsUp = true" @slide-is-down="$refs.productFooter.slideIsUp = false" /> -->
        <ProductContent :showed-sessions="showSessions" :course="course" ref="productContent" />
        <ProductFooter :course="course" @show-sessions="showSessions = true" @hide-sessions="showSessions = false" ref="productFooter" />
      </div>
    </transition>
  </div>
  <!-- <ProductSection /> -->
  <!-- <ProductModal /> -->
</template>

<script>
import ProductHeader from '@/components/header/ProductHeader.vue'
import ProductContent from '@/components/product/ProductContent.vue'
import ProductFooter from '@/components/product/ProductFooter.vue'
import ProductNav from '@/components/product/ProductNav.vue'
// import ProductSection from '@/components/product/ProductSection.vue'
// import ProductModal from '@/components/product/ProductModal.vue'

export default {
  name: 'ProductHome',
  components: {
    ProductHeader,
    ProductContent,
    // ProductNav,
    ProductFooter
    // ProductSection,
    // ProductModal
  },
  props: ['id'],
  data() {
    return {
      clickedFromHeader: false,
      showSessions: false,
      course: {},
      header: true,
      showLoginModal: false
    }
  },
  methods: {
    handleClickedTab(tab) {
      this.clickedTab = tab
      this.header = false // go to content
    },
    scrollToTab(tab) {},
    setShowSessions(status) {
      this.showSessions = status
    },
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
        // this.$refs.productContent.initGsap()
        // this.$refs.productContent.initTabsGsap()

        if (this.$route.params.showDateBtn) {
          // tell productfooter to open at specific date
        }

        if (this.clickedTab) {
          this.$refs.productContent.scrollToSection(`product-tab-${this.clickedTab}`)
          this.clickedTab = ''
        }
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
      document.querySelector('.header--product').addEventListener('wheel', (e) => {
        if (e.deltaY > 0) {
          that.header = false
        }
      })
    }
  },
  watch: {
    $route(to, from) {
      if (from.name !== 'Home') return

      if (this.$route.$params.showDateBtn) {
        this.header = false
      }
    },
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

<style scoped></style>
