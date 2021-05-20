<template>
  <div>
    <main>
      <SectionCarousel />
      <SectionMap />
      <SectionMiddle />
      <SectionBottom />
    </main>
  </div>
</template>
<script>
import SectionCarousel from './SectionCarousel.vue'
import SectionMap from './SectionMap.vue'
import SectionMiddle from './SectionMiddle.vue'
import SectionBottom from './SectionBottom.vue'
export default {
  name: 'MainSection',
  components: {
    SectionCarousel,
    SectionMap,
    SectionMiddle,
    SectionBottom
  },
  methods: {
    jquery() {
      var backButton =
        '<span class="slick-prev"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAwCAMAAABUpcipAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAOpQTFRFAAAAe3t7enp6d3d3e3t7fHx8e3t7eXl5fHx8fHx8e3t7enp6fHx8cXFxfHx8gICAfHx8e3t7fHx8fHx8ZmZme3t7eXl5eHh4e3t7fHx8fHx8dnZ2e3t7e3t7e3t7gICAfHx8e3t7fHx8fHx8e3t7e3t7fHx8fHx8e3t7e3t7e3t7fHx8e3t7e3t7e3t7eHh4fHx8fHx8e3t7e3t7e3t7e3t7e3t7gICAdHR0fHx8e3t7gICAfHx8e3t7fHx8enp6AAAAgICAe3t7e3t7e3t7e3t7e3t7enp6e3t7e3t7fHx8fHx8fHx8e3t7SJvSHgAAAE50Uk5TAI9gHs//7BNA76Aw0gmcEPVNgMwF+Cggh5DrDd9f8ganV1DQx59vwODwsGd8/u4Rd+UfcJebpAQL/ZMSY/ShQQECW9vigTQybqztyL/VnvtSXwAAAWpJREFUeJyNlddaxCAQhdk1KAkqGktcuxvdFLurrr338v6vY4bEhBTCnDvg/+YwDAOEFOp0CUZjFh2fQHDMppQ6Zo5T0OSUkYN4dNrICeBmELlYEG/WzLnAdcycNJ6bN4NOwi0smjkPjJfMHOkl3PIKAlxNwDUEBzVZ30A6byI46bzVvNSnSrEEOGtSEb5CsgTc1rmpJJRvR7svhXTbT7sgIemButSlVXE5H1STZkFJIY08OR8n4K7emtsRL/a4h+Das1Y4uXdLw3kKJ+/EvmgGmc+VUaSvdVlxa2kUwSYPDhGgAO8jTEhowmPjY0KyLhyYuTSkfYINiXkpyBDIU4x5jH0sRAjkGYJMX+bzkZlMGyC+MJMMCkQvr67rS6Ob0qXhkqS3d/cPJezx6bnyAYkg67qX17f/ufePzy9a/4D6Yd6i3z+JfvNh1omF3KjW1aBevQVEN65S4bAaLmcdP7cMXN5M5WfAQIrjH3uPHRYBYnIgAAAAAElFTkSuQmCC"/></span>'
      var nextButton =
        '<span class="slick-next"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAwCAMAAABUpcipAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAPZQTFRFAAAAfX19enp6gICAe3t7e3t7fHx8fHx8e3t7fHx8e3t7e3t7fHx8cHBwe3t7e3t7e3t7e3t7fHx8fHx8e3t7fHx8e3t7fHx8e3t7gICAfX19e3t7fHx8eXl5e3t7fX19enp6fHx8enp6fHx8fX19e3t7fHx8fHx8e3t7gICAe3t7e3t7fHx8fHx8fHx8eHh4d3d3fHx8fHx8enp6e3t7e3t7e3t7fX19fHx8fHx8fHx8fHx8fX19fHx8enp6fHx8enp6e3t7fHx8fHx8fHx8e3t7fHx8e3t7fHx8e3t7e3t7e3t7e3t7e3t7fHx8fHx8gICAd3d3WaJ1zQAAAFJ0Uk5TAD8wEE+Pv//ff59f7xDP9tHL5UCg87Z7Phg1bK0T7DdL92C5Mx+xTOIMnXyEgLsgD+GvSc2wcCvtUKl3WMBH0EVTcZ7OHXWb0oFVPPBX9ZAEHq06TacAAAFZSURBVHicjdXZVsIwEADQkZSmiAaRqiioUHBfUNzXooIriv7/z5ikHpNA08y8tb2dZE4mCYAeUzlwBPHyPk0i8AtW7k1TM4K8l8KKAU2JmeIYm2XqY2muPK+lrZgylG8XFpeqy/J5pVYv/VGf6HB1jdL6uvlzI2wm4xtlRa325MQ3NlNkemxtSxq55U5LSkRO2JWjEzeEPVk7AsK+kAcYeShkBwGPjjnsYlKeiJQVtwM45fAMAxvYWcqU5xhY45Bh4IUYW1se0rXVdmnUTRi9ssBrfXW4szbUDYchwsEth3cIB/cKxpQVjDDqqv7DzsSuDnXYUxkjyjL6+EHBbPmoD5Eln4wuz5B9syMjW4sMxtYacpaMz9zFtmnpUUb24wDb4S/IkdvIkwpekQnfkNv6neJ29YdwQ3fJn18C2raSihHubP5O7jzE4SgvoJHbiQto6J6fiCj+UQ+/I/0ehXptCecAAAAASUVORK5CYII="/></span>'
      $('.slider1').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        draggable: true,
        centerPadding: '60px',
        prevArrow: backButton,
        nextArrow: nextButton,
        responsive: [
          {
            breakpoint: 2561,
            settings: {
              initialSlide: 1,
              arrows: true,
              centerMode: true,
              centerPadding: '60px',
              slidesToShow: 3,
              draggable: false
            }
          },
          {
            breakpoint: 1441,
            settings: {
              initialSlide: 1,
              arrows: true,
              centerMode: true,
              centerPadding: '80px',
              slidesToShow: 2,
              draggable: false
            }
          },
          {
            breakpoint: 1025,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '80px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 991,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '90px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: false,
              // centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      })
      var width = $(window).width()
      if (width >= 1100) {
        $('.customers-testimonials')
          .on('mouseenter', '.shadow-effect', function () {
            $(this).parent().animate({ width: '+=50px' })
            $(this).parent().find('.content').addClass('hover')
            $(this).parent().find('.hoverable-div').slideDown()
            $(this).parent().find('.trip-link').animate({ bottom: '+=45px' })
          })
          .on('mouseleave', '.shadow-effect', function () {
            $(this).parent().animate({ width: '-=50px' })
            $(this).parent().find('.content').removeClass('hover')
            $(this).parent().find('.hoverable-div').slideUp()
            $(this).parent().find('.trip-link').animate({ bottom: '-=45px' })
          })
      }
      if (width >= 792) {
        $('#header_nav.navbar-nav .nav-link').on('click', function (e) {
          e.preventDefault()
          $('.home-wrapper').removeClass('active')
          var wrapper_id = $(this).attr('href').split('=')
          $('.home-wrapper' + wrapper_id + '').addClass('active')
        })
      }
      // NOTE MOBILE
      //
      // if (width < 692) {
      //   $('#header_nav.navbar-nav.mobile-navs .nav-link').on('click', function (e) {
      //     e.preventDefault()
      //     $('#header_nav').hide()
      //     $('#activites_pills').show()
      //     var forward_id = $(this).attr('href').split('=')
      //     $('.main-wrapper .tab-pane').removeClass('active')
      //     $('.main-wrapper .tab-pane' + forward_id + '').addClass('active')
      //   })
      //   $('#activites_pills_tab.navbar-nav.mobile-navs .nav-link').on('click', function (e) {
      //     e.preventDefault()
      //     var in_forward_id = $(this).attr('href').split('=')
      //     $('.main-wrapper .tab-pane' + in_forward_id + '').addClass('active')
      //     $('#activites_pills').hide()
      //   })
      //   $('#agence_pills_tab.nav-pills.mobile-navs .nav-link').on('click', function (e) {
      //     e.preventDefault()
      //     var ag_forward_id = $(this).attr('href').split('=')
      //     $('.main-wrapper .tab-pane' + ag_forward_id + '').addClass('active')
      //     $('#agence_pills').hide()

      //     if ($('.inner-tab-content.tab-content>.tab-pane').hasClass('show')) {
      //       $('.inner-tab-content.tab-content>.tab-pane.show').addClass('active')
      //     }
      //   })
      //   $('#pills-activity-tab').on('click', function (e) {
      //     $('.navbar-toggler').trigger('click')
      //     $('#header_nav').show()
      //     e.preventDefault()
      //   })
      //   $('.nav-head a').click(function () {
      //     var back_id = $(this).attr('href').split('=')
      //     $('' + back_id + '').show()
      //     $(this).parent().parent().removeClass('active')
      //     if (back_id == '#header_nav') {
      //       $('.main-wrapper .tab-pane').removeClass('active')
      //     }
      //     return false
      //   })
      // }
    }
  },
  mounted() {
    this.jquery()
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
