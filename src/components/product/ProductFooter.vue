<template>
  <div class="pre-booking-footer sticky-bottom w-100 flex-column" :class="[slideIsUp ? 'd-flex' : 'd-none']" style="position: sticky; bottom: 0">
    <div :class="[openBooking ? 'd-flex' : 'd-none']" class="booking-session align-items-center">
      <h2 class="session-head border-right border-white">CRÉER UNE SESSION</h2>
      <ul class="text-uppercase list-unstyled year-list border-right border-white px-3">
        <li><a href="#" class="text-reset active">2020</a></li>
        <li><a href="#" class="text-reset">2021</a></li>
      </ul>
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
        <a href="#" class="" id="july-tab">juillet</a>
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
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="jan-tab" data-toggle="pill" href="#jan" role="tab" aria-controls="jan" aria-selected="true">JANVIER</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link inactive disabled" aria-disabled="true" id="feb-tab" data-toggle="pill" href="#feb" role="tab" aria-controls="feb" aria-selected="false">FéVRIER</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link inactive disabled" aria-disabled="true" id="mar-tab" data-toggle="pill" href="#mar" role="tab" aria-controls="mar" aria-selected="false">MARS</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="apr-tab" data-toggle="pill" href="#apr" role="tab" aria-controls="apr" aria-selected="false">AVRIL</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="may-tab" data-toggle="pill" href="#may" role="tab" aria-controls="may" aria-selected="false">Mai</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link inactive disabled" aria-disabled="true" id="jun-tab" data-toggle="pill" href="#jun" role="tab" aria-controls="jun" aria-selected="false">juin</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="july-tab" data-toggle="pill" href="#july" role="tab" aria-controls="july" aria-selected="true">juillet</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="aug-tab" data-toggle="pill" href="#aug" role="tab" aria-controls="aug" aria-selected="false">AOÛT</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link inactive disabled" aria-disabled="true" id="sep-tab" data-toggle="pill" href="#sep" role="tab" aria-controls="sep" aria-selected="false">septembre</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link inactive disabled" aria-disabled="true" id="oct-tab" data-toggle="pill" href="#oct" role="tab" aria-controls="oct" aria-selected="true">octobre</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link inactive disabled" aria-disabled="true" id="nov-tab" data-toggle="pill" href="#nov" role="tab" aria-controls="nov" aria-selected="false">novembre</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link inactive disabled" aria-disabled="true" id="dec-tab" data-toggle="pill" href="#dec" role="tab" aria-controls="dec" aria-selected="false">décembre</a>
        </li>
      </ul>
    </div>
    <div class="tab-content">
      <div class="tab-pane fade" id="jan" role="tabpanel" aria-labelledby="jan-tab">qwerty</div>
      <div class="tab-pane fade" id="feb" role="tabpanel" aria-labelledby="feb-tab">asdfgh</div>
      <div class="tab-pane fade" id="mar" role="tabpanel" aria-labelledby="mar-tab">zxcvbn</div>
      <div class="tab-pane fade" id="apr" role="tabpanel" aria-labelledby="apr-tab">
        <div class="container">
          <ul class="list-unstyled order-tab-list">
            <li>
              <div class="info-div">
                <h6 class="month-count mb-0">
                  25 avril
                  <i class="fa fa-chevron-right mx-2 small align-baseline"></i>
                  2 mai
                </h6>
                <a href="#" class="register-count mb-0"> <strong>10 places</strong> restantes</a>
                <div class="text-right mr-4">
                  <h6 class="text-uppercase mb-0 font-weight-normal tripper-text"><strong>TRIPPER</strong> inscrit</h6>
                  <h6 class="text-uppercase text-danger mb-0 tripper-count">2 tripper pour confirmer LE départ</h6>
                </div>
                <div class="registrants">
                  <h6 class="premier-text mb-0 font-weight-bold text-uppercase"><img class="mic_icon" fluid :src="require('@/assets/images/mic.png')" />Sois le premier !</h6>
                </div>
                <h6 class="hours-count mb-0">
                  <img fluid :src="require('@/assets/images/timer_d.png')" />
                  8 jours - 7 nuits
                </h6>
                <h6 class="amount-per mb-0"><strong>1 990€</strong>/pers.</h6>
                <button class="btn choose-btn">CHOISIR</button>
              </div>
            </li>
            <li>
              <div class="info-div">
                <h6 class="month-count mb-0">
                  25 avril
                  <i class="fa fa-chevron-right mx-2 small align-baseline"></i>
                  2 mai
                </h6>
                <a href="#" class="register-count mb-0"> <strong>7 places</strong> restantes</a>
                <div class="text-right mr-4">
                  <h6 class="text-uppercase mb-0 font-weight-normal tripper-text"><strong>TRIPPERS</strong> inscrits</h6>
                  <h6 class="text-uppercase text-danger mb-0 tripper-count">1 tripper pour confirmer LE départ</h6>
                </div>
                <div class="registrants">
                  <ul class="list-unstyled registrants-list mb-0 d-flex">
                    <li>
                      <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/1.jpg')" /></a>
                    </li>
                    <li>
                      <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/2.jpg')" /></a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="Nicolas | Grand-Est"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/4.jpg')" /></a>
                    </li>
                  </ul>
                </div>
                <h6 class="hours-count mb-0">
                  <img fluid :src="require('@/assets/images/timer_d.png')" />
                  8 jours - 7 nuits
                </h6>
                <h6 class="amount-per mb-0"><strong>1 990€</strong>/pers.</h6>
                <button class="btn choose-btn">CHOISIR</button>
              </div>
            </li>
            <li>
              <div class="info-div">
                <h6 class="month-count mb-0">
                  25 avril
                  <i class="fa fa-chevron-right mx-2 small align-baseline"></i>
                  2 mai
                </h6>
                <a href="#" class="register-count mb-0"> <strong>4 places</strong> restantes</a>
                <div class="text-right mr-4">
                  <h6 class="text-uppercase mb-0 font-weight-normal tripper-text"><strong>TRIPPERS</strong> inscrits</h6>
                  <h6 class="text-uppercase text-danger mb-0 tripper-count">Départ confirmé</h6>
                </div>
                <div class="registrants">
                  <ul class="list-unstyled registrants-list mb-0 d-flex">
                    <li>
                      <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/1.jpg')" /></a>
                    </li>
                    <li>
                      <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/2.jpg')" /></a>
                    </li>
                    <li>
                      <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/3.jpg')" /></a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="Nicolas | Grand-Est"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/4.jpg')" /></a>
                    </li>
                    <li>
                      <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/1.jpg')" /></a>
                    </li>
                    <li>
                      <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/2.jpg')" /></a>
                    </li>
                    <li>
                      <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/3.jpg')" /></a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="Nicolas | Grand-Est"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/4.jpg')" /></a>
                    </li>
                    <li>
                      <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/3.jpg')" /></a>
                    </li>
                  </ul>
                </div>
                <h6 class="hours-count mb-0">
                  <img fluid :src="require('@/assets/images/timer_d.png')" />
                  8 jours - 7 nuits
                </h6>
                <h6 class="amount-per mb-0"><strong>1 990€</strong>/pers.</h6>
                <button class="btn choose-btn">CHOISIR</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="tab-pane fade" id="may" role="tabpanel" aria-labelledby="may-tab">asdfgh</div>
      <div class="tab-pane fade" id="jun" role="tabpanel" aria-labelledby="jun-tab">zxcvbn</div>
      <div class="tab-pane fade" id="july" role="tabpanel" aria-labelledby="july-tab">qwerty</div>
      <div class="tab-pane fade" id="aug" role="tabpanel" aria-labelledby="aug-tab">asdfgh</div>
      <div class="tab-pane fade" id="sep" role="tabpanel" aria-labelledby="sep-tab">zxcvbn</div>
      <div class="tab-pane fade" id="oct" role="tabpanel" aria-labelledby="oct-tab">qwerty</div>
      <div class="tab-pane fade" id="nov" role="tabpanel" aria-labelledby="nov-tab">asdfgh</div>
      <div class="tab-pane fade" id="dec" role="tabpanel" aria-labelledby="dec-tab">zxcvbn</div>
    </div>
    <div @click="openBooking = !openBooking" class="booking-bottom d-flex text-uppercase w-100" style="box-shadow: 0px -1px 2px #ebebeb; background-color: #fff">
      <!-- <div class="d-flex align-items-center justify-content-around flex-1 text-white"> -->
      <div class="row flex-1 mx-0 text-center">
        <div class="col-3 border-right center-col inactive" style="background-color: #ebebeb">
          <div class="d-inline-block text-left">
            <h6 class="int-count"><strong class="">1800 TRIPPERS</strong> Intéressés</h6>
            <ul class="int-list list-unstyled d-inline-flex align-items-center mx-3 mb-0">
              <li>
                <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/2.jpg')" /> </a>
              </li>
              <li>
                <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/1.jpg')" /> </a>
              </li>
              <li>
                <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/2.jpg')" /> </a>
              </li>
              <li>
                <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/3.jpg')" /> </a>
              </li>
              <li>
                <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/2.jpg')" /> </a>
              </li>
              <li class="">
                <a href="#" class="d-flex align-items-center justify-content-center" data-toggle="tooltip" data-placement="top" title="Intéresse toi et retrouve moi dans tes envies !"><i class="fas fa-heart"></i></a>
              </li>
            </ul>
          </div>
          <h6 class="premier-text mb-0 font-weight-bold d-none"><img class="mic_icon" fluid :src="require('@/assets/images/mic-w.png')" />Sois le premier !</h6>
        </div>
        <div class="col-4 border-right center-col datepicker-col" id="depart_datepick">
          <div class="d-flex justify-content-around align-items-center btn-block rounded-0" role="group" aria-label="Basic example">
            <div id="" class="text-uppercase date-buttons d-flex align-items-end Zebra_DatePicker_Icon_Wrapper start">
              <div class="text-right text--grey">
                <div class="d-inline-block pb-2" style="border-bottom: 1px dashed rgba(41, 47, 51, 0.35)">
                  <InlineSvg :src="require('@/assets/svg/date-search.svg')" height="24" style="vertical-align: text-bottom" class="mr-2" />
                  Sélectionne une session
                </div>
                <div class="text-uppercase pt-2"><span class="text--pink">4 sessions</span>&nbsp;disponibles</div>
              </div>
              <i class="fa fa-chevron-down ml-3 mb-1 arrow"></i>
            </div>
            <InlineSvg :src="require('@/assets/svg/arrow-right.svg')" transform="rotate(90)" height="24" fill="#292f33" />
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
        <div class="col-3 border-right center-col flex-column inactive">
          <div class="d-inline-block text-center w-100" style="border-left: 1px dashed #b4b4b4; border-right: 1px dashed #b4b4b4">
            <h5 class="premier-text mb-0 letter-space-1">
              <img class="mr-2 icons" fluid :src="require('@/assets/images/places.png')" />Participants
              <form class="d-inline-flex align-items-center align-bottom ml-3">
                <div class="value-button decrease inactive" id="countDecrease" onclick="decreaseValue()" value="Decrease Value">-</div>
                <input class="count-number" type="number" id="countNumber" value="1" max="3" />
                <div class="value-button increase" id="countIncrease" onclick="increaseValue()" value="Increase Value">+</div>
                <i class="fa fa-times text-danger h4 mb-0 count-cross"></i>
              </form>
            </h5>
            <p class="text-danger font-weight-bold text-transform-none mb-0 capacity-msg">Capacité max du groupe atteint</p>
          </div>
        </div>
        <div class="col-2 center-col inactive">
          <h6 class="tot-amount text-left">PRIX total : <strong class="d-block">1990 &euro;</strong></h6>
        </div>
      </div>
      <button class="btn border-0 rounded-0 reserve-btn ml-auto inactive btn-dark">Réserver</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductFooter',
  data() {
    return {
      openBooking: false,
      slideIsUp: false
    }
  },
  methods: {
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
.reserve-btn {
  min-width: 200px !important;
}
</style>
