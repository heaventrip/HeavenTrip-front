<template>
  <div class="pre-booking-footer d-flex sticky-bottom flex-column" style="position: sticky; bottom: 0; width: 100%">
    <div class="booking-session align-items-center" :class="[showSessions ? 'd-flex' : 'd-none']">
      <h2 @click="createRequest" class="session-head border-right text-uppercase border-white px-4">Je privatise</h2>
      <div class="text-uppercase d-flex h-100">
        <div @click="activeYear = 2020" class="date-btn px-3 h-100" :class="{ 'date-btn--active': activeYear === 2020 }">2020</div>
        <div @click="activeYear = 2021" class="date-btn px-3 h-100" :class="{ 'date-btn--active': activeYear === 2021 }">2021</div>
      </div>
      <!-- <ul class="text-uppercase list-unstyled year-list border-right border-white px-3">
        <li><a href="#" class="text-reset active">2020</a></li>
        <li><a href="#" class="text-reset">2021</a></li>
      </ul> -->
      <!-- <ul class="text-uppercase list-unstyled mb-0 booking-session-list border-left border-white">
      <li class="">
        <a href="#" class="" id="jan-tab">JANVIER</a>
      </li>
      <li class="">
        <a href="#" class="inactive" id="feb-tab">FéVRIER</a>
      </li>
      <li class="">
        <a href="#" class=" inactive" id="mar-tab">MARS</a>
      </li>
      <li class="">
        <a href="#" class=" active" id="center">AVRIL</a>
      </li>
      <li class="">
        <a href="#" class="" id="may-tab">Mai</a>
      </li>
      <li class="">
        <a href="#" class=" inactive" id="jun-tab">juin</a>
      </li>
      <li class="">
        <a href="#" class="" id="jul-tab">juillet</a>
      </li>
      <li class="">
        <a href="#" class="" id="aug-tab">AOÛT</a>
      </li>
      <li class="">
        <a href="#" class=" " id="sep-tab">septembre</a>
      </li>
      <li class="">
        <a href="#" class="" id="oct-tab">octobre</a>
      </li>
      <li class="">
        <a href="#" class="" id="nov-tab">novembre</a>
      </li>
      <li class="">
        <a href="#" class="" id="dec-tab">décembre</a>
      </li>
    </ul> -->
      <ul class="nav nav-pills text-uppercase list-unstyled mb-0 booking-session-list border-left border-white" role="tablist">
        <li v-for="(month, index) in months" :key="month" class="nav-item" role="presentation">
          <a class="nav-link" :class="[filterSessions(index + 1).length === 0 ? 'empty-sessions' : '']" :id="`${month}-tab`" data-toggle="pill" :href="`#${month}`" role="tab" :aria-controls="month" aria-selected="true"> {{ namedMonths[index] }} </a>
        </li>
      </ul>
    </div>
    <div v-show="showSessions" class="tab-content">
      <div v-for="(month, index) in months" :key="month" class="tab-pane fade" :id="month" role="tabpanel" :aria-labelledby="`${month}-tab`">
        <div class="container" style="padding: 0 3rem">
          <ul class="list-unstyled order-tab-list">
            <li v-for="(session, sessionIndex) in filterSessions(index + 1)" :key="session">
              <div class="info-div w-100">
                <div class="info-div-left d-flex align-items-center justify-content-between">
                  <h6 v-if="$windowWidth <= 1440" class="month-count mb-0">
                    {{ new Date(session.dateStart).toLocaleString('fr-FR', { day: 'numeric', month: 'short' }) }}
                    <i class="fa fa-chevron-right mx-2 small align-baseline"></i>
                    {{ new Date(session.dateEnd).toLocaleString('fr-FR', { day: 'numeric', month: 'short' }) }}
                  </h6>
                  <h6 v-else class="month-count mb-0">
                    {{ new Date(session.dateStart).toLocaleString('fr-FR', { day: 'numeric', month: 'long' }) }}
                    <i class="fa fa-chevron-right mx-2 small align-baseline"></i>
                    {{ new Date(session.dateEnd).toLocaleString('fr-FR', { day: 'numeric', month: 'long' }) }}
                  </h6>
                  <a href="#" @click.prevent class="register-count date-confirmed mb-0" style="margin: 0 3rem 0 2rem; cursor: default">
                    <strong>{{ session.max - session.nbOfParticipants }} place{{ session.max - session.nbOfParticipants > 1 ? 's' : '' }}</strong>
                    restante{{ session.max - session.nbOfParticipants > 1 ? 's' : '' }}
                  </a>
                  <div class="ml-auto text-right mr-4">
                    <h6 class="text-uppercase mb-0 font-weight-normal tripper-text">
                      <strong>{{ session.nbOfParticipants }} TRIPPER{{ session.nbOfParticipants > 1 ? 'S' : '' }}</strong> inscrit{{ session.nbOfParticipants > 1 ? 's' : '' }}
                    </h6>
                    <h6 class="text-uppercase text-danger mb-0 tripper-count">
                      <span style="font-weight: 700"> {{ session.min - session.nbOfParticipants }} tripper{{ session.min - session.nbOfParticipants > 1 ? 's' : '' }} </span>
                      <span> pour confirmer le départ </span>
                    </h6>
                    <!-- TODO rajouter champ de date limite dans le back -->
                    <span class="cancel-info-text">il te reste JOURS pour réserver</span>
                  </div>
                </div>
                <div class="registrants fg-1" style="width: 20%">
                  <h6 v-if="sessionIndex === 0" class="premier-text mb-0 font-weight-bold text-uppercase"><img class="mic_icon" fluid :src="require('@/assets/images/mic.png')" />Sois le premier !</h6>
                  <InlineAvatars
                    v-else
                    :avatars="['wb1pauez3a4chagrpyth', 'j7pyvrb9k40igjtuniwb', 'k4jpldbzp2cq6m6pjgip', 'yow5loelun43c3xbdbiw', 'ers53we5kg0ffyv6csoq', 'wb1pauez3a4chagrpyth', 'wb1pauez3a4chagrpyth', 'wb1pauez3a4chagrpyth', 'wb1pauez3a4chagrpyth', 'wb1pauez3a4chagrpyth']"
                    :heart="false"
                    outline-color="white"
                    height="40px"
                    spacing="-8px"
                    mt="0rem"
                    mb="0rem"
                  />
                </div>
                <div class="d-flex align-items-center ml-auto justify-content-between fg-1">
                  <h6 class="hours-count mb-0 fg-1 ml-5">
                    <InlineSvg class="d-inline-block mr-2" :src="require('@/assets/svg/timer.svg')" height="20" />
                    <div v-if="$windowWidth <= 1440" class="d-inline-block align-middle">{{ session.duration }} jour{{ session.duration > 1 ? 's' : '' }}</div>
                    <div v-else class="d-inline-block align-middle">{{ session.duration }} jours - {{ session.duration - 1 }} nuits</div>
                  </h6>
                  <h6 class="amount-per mb-0 fg-3">
                    <strong>{{ course?.price.toString()[0] }}&thinsp;{{ course?.price.toString().slice(1) }}&thinsp;&euro;</strong>/pers.
                  </h6>
                  <!-- <button @click="clickedChoseBtn(session)" class="btn choose-btn ml-3">CHOISIR</button> -->
                  <button @click="clickedChoseBtn(session)" class="btn choose-btn disable ml-3">OUPS !</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div @click="openBooking = !openBooking" class="booking-bottom d-flex text-uppercase w-100" style="box-shadow: 0px -1px 2px #ebebeb; background-color: #fff; position: relative; z-index: 10">
      <!-- <div class="d-flex align-items-center justify-content-around flex-1 text-white"> -->
      <div class="d-flex justify-content-between flex-1 mx-0 text-center" :style="[showSessions ? 'color: #fff; background-color: #292f33' : '']">
        <div class="left-avatar-block border-right center-col" :style="[showSessions ? '' : 'background-color: #fafafa']">
          <div class="d-inline-block text-left">
            <ul class="int-list list-unstyled d-inline-flex align-items-center mx-3 mb-0">
              <span style="font-family: Oswald, sans-serif; font-size: 0.75rem">
                <span color="#292f33">Ca te titille?</span> <span style="font-weight: bold">Rejoint les {{ course.wishlistUsers?.length }} intéressé{{ course.wishlistUsers?.length > 1 ? 's' : '' }} :</span><br />
                <InlineAvatars :course-id="course?.id" :avatars="avatarKeys" :heart="true" heartheight="40px" heartwidth="40px" spacing="-6px" :heart-color="showSessions ? 'white' : 'grey'" :outline="true" :outline-color="showSessions ? 'grey' : 'light-white'" :count="false" mt="0.3rem" mb="0rem" />
              </span>
            </ul>
          </div>
          <h6 class="premier-text mb-0 font-weight-bold d-none"><img class="mic_icon" fluid :src="require('@/assets/images/mic-w.png')" />Sois le premier !</h6>
        </div>
        <div @click="showSessions = !showSessions" class="fg-1 border-right center-col datepicker-col" id="depart_datepick" style="padding: 0 3rem" type="button">
          <div class="d-flex justify-content-around align-items-center btn-block rounded-0" role="group" aria-label="Basic example">
            <div id="" class="text-uppercase date-buttons d-flex align-items-end Zebra_DatePicker_Icon_Wrapper start">
              <div class="text-right" :class="{ 'text--grey': !showSessions }">
                <div class="d-inline-block pb-0">Sélectionne une session :</div>
                <div class="text-uppercase pt-2" style="font-weight: 400; letter-spacing: 0px">
                  <span class="text--pink" style="font-weight: bold">{{ sessions.length }} session{{ sessions.length > 1 ? 's' : '' }}</span
                  >&nbsp;&nbsp;disponible{{ sessions.length > 1 ? 's' : '' }}
                </div>
              </div>
            </div>
            <InlineSvg class="ml-4" :src="require('@/assets/svg/arrow-right.svg')" :transform="[showSessions ? 'rotate(90)' : 'rotate(270)']" height="24" :fill="showSessions ? '#fff' : '#292f33'" />
          </div>
          <div class="d-none">
            <div class="d-none text-right">
              <h5 class="premier-text font-weight-bold mb-2 pb-2 letter-space-1 btm-border d-flex align-items-end">
                <img class="mr-2 img-16" fluid :src="require('@/assets/images/cal_light.png')" />DATE :
                <span class="d-inline-block align-top ml-1 text-right">25 avril au 2 mai </span>
              </h5>
              <h5 class="premier-text d-block font-weight-normal mb-0"><strong class="text-warning">Dernière place</strong> restante</h5>
            </div>
            <div class="d-inline-block text-right">
              <h5 class="premier-text font-weight-bold mb-2 pb-2 letter-space-1 btm-border d-flex align-items-end"><img class="mr-2 img-16" fluid :src="require('@/assets/images/cal_light.png')" /><span class="d-inline-block align-top ml-1 text-right">Sélectionne une session</span></h5>
              <h5 class="premier-text d-block font-weight-normal mb-0"><strong class="text-warning">4 sessions </strong> disponibles</h5>
            </div>
            <i class="fa fa-chevron-down ml-5"></i>
          </div>
        </div>
        <div class="center-col flex-column px-5" :class="{ inactive: !choseBtn }" style="position: relative; top: 35%; height: min-content; border-left: 1px dashed #b4b4b4; border-right: 1px dashed #b4b4b4">
          <div class="d-inline-block text-center w-100">
            <h5 class="premier-text mb-0 letter-space-1">
              <!-- <img class="mr-2 icons" fluid :src="require('@/assets/images/places.png')" /> -->
              Participants :
              <form class="d-inline-flex align-items-center align-bottom ml-3">
                <div class="value-button decrease" style="user-select: none" @click="decrementCounter">-</div>
                <span class="px-3 text--bold text--16">{{ participantsNb }}</span>
                <div class="value-button increase" style="user-select: none" @click="participantsNb++">+</div>
              </form>
            </h5>
          </div>
        </div>
        <div class="center-col px-5" :class="{ inactive: !choseBtn }">
          <span class="tot-amount text-left"
            >PRIX total : <strong class="d-block">{{ (course.price * participantsNb).toString()[0] }}&thinsp;{{ (course.price * participantsNb).toString().slice(1) }}&thinsp;&euro;</strong></span
          >
        </div>
      </div>
      <button @click="$router.push({ name: 'CheckOutHome', params: { productId: course.id, participantsNb: participantsNb, choice: choice.id } })" class="btn border-0 pr-4 rounded-0 reserve-btn btn-pink">Réserver</button>
    </div>
  </div>
</template>
<script>
import InlineAvatars from '@/components/elements/InlineAvatars.vue'

export default {
  name: 'ProductFooter',
  props: ['course'],
  components: {
    InlineAvatars
  },
  data() {
    return {
      activeYear: 2021,
      avatarKeys: [],
      choice: null,
      choseBtn: false,
      participantsNb: 1,
      showSessions: false,
      openBooking: false,
      slideIsUp: false,
      sessions: this.$props.course.sessions,
      months: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
      namedMonths: ['JANVIER', 'FÉVRIER', 'MARS', 'AVRIL', 'MAI', 'JUIN', 'JUILLET', 'AOÛT', 'SEPTEMBRE', 'OCTOBRE', 'NOVEMBRE', 'DÉCEMBRE']
    }
  },
  watch: {
    showSessions(val) {
      if (val === true) this.$emit('show-sessions')
      if (val === false) this.$emit('hide-sessions')
    },
    course: {
      immediate: true,
      handler(val) {
        if (val.wishlistUsers) {
          val.wishlistUsers.forEach((user) => {
            this.avatarKeys.push(user.avatarKey)
          })
        }
      }
    }
  },
  methods: {
    createRequest() {
      this.$axios.post('/requests', { courseId: this.$props.course.id })
    },
    clickedChoseBtn(session) {
      this.choseBtn = true
      this.choice = session
    },
    filterSessions(month) {
      return this.sessions.filter((session) => session.monthOfDeparture === month)
    },
    decrementCounter() {
      if (this.participantsNb <= 1) return
      this.participantsNb--
    },
    showDays() {
      // get date
      var start = $('#datepicker-range-start').val()
      var end = $('#datepicker-range-end').val()
      if (!start || !end) return

      // parse date
      var startArr = start.split(' ')
      var endArr = end.split(' ')
      if (endArr[1] == 'FÉVRIER') {
        endArr[1] = 'feb'
      }
      if (endArr[1] == 'AOÛT') {
        endArr[1] = 'aug'
      }
      if (endArr[1] == 'DÉCEMBRE') {
        endArr[1] = 'dec'
      }
      if (startArr[1] == 'FÉVRIER') {
        startArr[1] = 'feb'
      }
      if (startArr[1] == 'AOÛT') {
        startArr[1] = 'aug'
      }
      if (startArr[1] == 'DÉCEMBRE') {
        startArr[1] = 'dec'
      }
      var startDate = new Date(startArr)
      var endDate = new Date(endArr)

      // var startDate = new Date(startArr[2], startArr[0] - 1, startArr[1]);
      // var endDate = new Date(endArr[2], endArr[0] - 1, endArr[1]);

      // calculate days
      var milliseconds = endDate.getTime() - startDate.getTime()
      var days = milliseconds / (1000 * 60 * 60 * 24)
      // var days = Math.round((endDate-startDate)/(1000*60*60*24));
      $('#days').text(days)
      $('#nights').text(days - 1)
      $('.premier-text').show()
    }
  },
  mounted() {
    console.log(this.$props.course)
    $('#datepicker-range-start').Zebra_DatePicker({
      onChange: function () {
        // var dval = $(this).val();
        // alert(dval);
        $('.date-buttons').removeClass('active')
        $(this).parents('.date-buttons').addClass('active')
      },
      onClose: function (el) {
        this.showDays(el)
      },
      direction: true,
      container: $('.datepicker-col'),
      pair: $('#datepicker-range-end'),
      // always_visible: $('#show-datepicker'),
      days: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
      months: ['JANVIER', 'FÉVRIER', 'MARS', 'AVRIL', 'MAI', 'JUIN', 'JUILLET', 'AOÛT', 'SEPTEMBRE', 'OCTOBRE', 'NOVEMBRE', 'DÉCEMBRE'],
      // months_abbr: ['JANVIER','FÉVRIER','MARS','AVRIL','MAI','JUIN','JUILLET','AOÛT','SEPTEMBRE','OCTOBRE','NOVEMBRE','DÉCEMBRE'],
      // months_abbr:true,
      // current_date: true,
      // eslint-disable-next-line no-dupe-keys
      onClose: null,
      disabled_dates: false,
      show_select_today: false,
      show_clear_date: false,
      select_other_months: true,
      format: 'd F Y',
      open_on_focus: true
    })

    $('#datepicker-range-end').Zebra_DatePicker({
      onChange: function () {
        $('.date-buttons').removeClass('active')
        $(this).parents('.date-buttons').addClass('active')
      },
      onClose: function (el) {
        this.showDays(el)
      },
      direction: 1,
      container: $('.datepicker-col'),
      days: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
      months: ['JANVIER', 'FÉVRIER', 'MARS', 'AVRIL', 'MAI', 'JUIN', 'JUILLET', 'AOÛT', 'SEPTEMBRE', 'OCTOBRE', 'NOVEMBRE', 'DÉCEMBRE'],
      //months_abbr: ['JANVIER','FÉVRIER','MARS','AVRIL','MAI','JUIN','JUILLET','AOÛT','SEPTEMBRE','OCTOBRE','NOVEMBRE','DÉCEMBRE'],
      // months_abbr:['jan','frb','MARS','AVRIL','MAI','JUIN','JUILLET','ss','SEPTEMBRE','OCTOBRE','NOVEMBRE','dssd'],
      // always_visible: $('#show-datepicker'),
      show_select_today: false,
      show_clear_date: false,
      select_other_months: true,
      format: 'd F Y'
    })

    $('#datepickbtn').on('click', function (e) {
      $('#depart_datepick').find('.Zebra_DatePicker:first').addClass('after_date')
      $('#datepicker-range-start').triggerHandler('click')
      e.preventDefault()
    })

    $('#retourpickbtn').on('click', function (e) {
      $('#depart_datepick').find('.Zebra_DatePicker:last').addClass('before_date')
      $('#datepicker-range-end').triggerHandler('click')
      e.preventDefault()
    })
  }
}
</script>

<style>
.date-btn {
  color: #b4b4b480;
  background-color: #ebebeb80;
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}
.date-btn--active {
  background-color: #ebebeb;
  color: #7c7c7c;
}
.date-btn:hover {
  color: #7c7c7c;
}
.date-confirmed {
  color: #7ec754;
  font-weight: 400;
}
.register-count.date-confirmed {
  background-color: #b4b4b4 !important;
}
.cancel-info-text {
  font-family: Oswald, sans-serif;
  font-size: 0.8rem;
  color: #b4b4b4;
}
.value-button:hover {
  box-shadow: 0px 0px 5px rgba(41, 47, 51, 0.8);
}
.reserve-btn {
  min-width: 200px !important;
  height: 90px !important;
}
.booking-session {
  box-shadow: 0px -1px 2px #ebebeb;
  background-color: white;
  z-index: 5;
}
.booking-session .session-head {
  background-color: #5a3a5f;
  letter-spacing: 0.03rem;
  transition: all 0.3s ease;
  cursor: pointer;
}
.booking-session .session-head:hover {
  background-color: #292f33;
  color: white;
}
.nav {
  flex-wrap: nowrap;
}
.nav-link {
  padding: 0.5rem;
}
.nav-link:hover {
  background-color: #b4b4b4;
}
.nav-link.empty-sessions {
  opacity: 0.3;
  cursor: pointer;
  transition: all 0.3s ease;
}
.nav-link.empty-sessions.active {
  opacity: 1;
}
.btn {
  border-radius: 0;
}
.choose-btn {
  border-radius: 0 !important;
  background-color: white;
  color: #292f33;
  border: 1px solid #292f33;
}
.choose-btn:hover {
  background-color: #292f33;
  color: white;
}
.choose-btn.disable {
  color: #b4b4b4 !important;
  border: 1px solid #b4b4b4 !important;
}
.choose-btn.disable:hover {
  background-color: white !important;
  color: #b4b4b4 !important;
}
@media only screen and (max-width: 1440px) {
  .info-div-left {
    min-width: 560px;
  }
  .register-count {
    min-width: 130px;
    text-align: center;
  }
}
</style>
