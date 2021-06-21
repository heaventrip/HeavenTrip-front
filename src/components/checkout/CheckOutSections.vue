<template>
  <div>
    <main class="checkout-main-container">
      <div class="container-fluid bg-light h-100">
        <div class="row h-100">
          <div class="col-12 col-xl-4 p-0 bg-image h-100 position-relative">
            <div class="d-flex justify-content-between align-items-center trip-list-div text-white px-3">
              <ul class="list-unstyled mb-0 d-flex align-items-center text-uppercase">
                <li><img class="mr-2 ml-4 icons m-icon" fluid :src="require('@/assets/svg/globe.svg')" />france</li>
                <li><img class="mr-2 ml-4 icons m-icon" fluid :src="require('@/assets/svg/timer.svg')" />8 j - 7 nuits</li>
                <li><img class="mr-2 ml-4 icons m-icon" fluid :src="require('@/assets/svg/ring.svg')" />confirmé</li>
              </ul>
              <ul class="list-unstyled mb-0 d-flex align-items-center trip-list">
                <li>
                  <img class="mr-2 icons" fluid :src="require('@/assets/images/head-pin.png')" />
                </li>
                <li>
                  <img class="mr-2 icons" fluid :src="require('@/assets/svg/yoga.svg')" />
                </li>
              </ul>
            </div>
            <img class="img-fluid checkout-info-img" fluid :src="require('@/assets/images/checkout_bg.jpg')" />
            <div class="d-flex align-items-center share-social-icons text-white">
              <h6 class="font-weight-normal mr-3 mb-0">Partage un max !</h6>
              <a href="#" class="rounded-circle d-inline-block">
                <img class="mr-2" fluid :src="require('@/assets/images/insta.png')" />
              </a>
              <a href="#" class="rounded-circle d-inline-block">
                <img class="mr-2" fluid :src="require('@/assets/images/fb.png')" />
              </a>
              <a href="#" class="rounded-circle d-inline-block">
                <img class="mr-2" fluid :src="require('@/assets/images/youtube.png')" />
              </a>
            </div>
          </div>
          <div class="col-12 col-xl-8 p-0 h-100">
            <div class="checkout-body-content bg-light">
              <ul class="nav nav-tabs font-weight-bold checkout-steps text-uppercase border-0 d-none" id="" role="tablist">
                <li class="nav-item d-none" role="presentation">
                  <a class="nav-link text-reset" id="step1-tab" data-toggle="tab" href="#step1" role="tab" aria-controls="step1" aria-selected="false"><span class="number-circle">1</span>Connexion </a>
                  <!-- INSCRIPTION -->
                </li>
                <li class="nav-item d-none" role="presentation">
                  <a class="nav-link text-reset active" id="step2-tab" data-toggle="tab" href="#step2" role="tab" aria-controls="step2" aria-selected="false"><span class="number-circle">2</span> PARTICIPANT(s)</a>
                </li>
                <li class="nav-item d-none" role="presentation">
                  <a class="nav-link text-reset" id="step3-tab" data-toggle="tab" href="#step3" role="tab" aria-controls="step3" aria-selected="false"><span class="number-circle">3</span> OPTIONS</a>
                </li>
                <li class="nav-item d-none" role="presentation">
                  <a class="nav-link text-reset" id="step4-tab" data-toggle="tab" href="#step4" role="tab" aria-controls="step4" aria-selected="false"><span class="number-circle">4</span> ASSURANCE</a>
                </li>
                <li class="nav-item d-none" role="presentation">
                  <a class="nav-link text-reset" id="step5-tab" data-toggle="tab" href="#step5" role="tab" aria-controls="step5" aria-selected="true"><span class="number-circle">5</span> PAIEMENT</a>
                </li>
                <li class="nav-item flex-grow-1" role="presentation">
                  <a class="nav-link text-reset active" id="step6-tab" data-toggle="tab" href="#step6" role="tab" aria-controls="step6" aria-selected="true"><span class="number-circle">2</span> ENVOYER MA DEMANDE</a>
                </li>
              </ul>
              <div class="tab-content" id="">
                <!-- <Step1 /> -->
                <Step2 />
                <Step3 />
                <Step4 />
                <Step5 />
                <Step6 />
                <div class="text-right next-step-div pt-4" data-toggle="buttons" role="tablist">
                  <button class="btn text-uppercase prev-step-btn" data-toggle="tab" role="tab" href="#step2">1</button>
                  <button class="btn text-uppercase prev-step-btn" data-toggle="tab" role="tab" href="#step3">2</button>
                  <button class="btn text-uppercase next-step-btn ml-4" data-toggle="tab" role="tab" href="#step4">3</button>
                  <button class="btn text-uppercase prev-step-btn ml-4" data-toggle="tab" role="tab" href="#step5">4</button>
                  <button class="btn text-uppercase next-step-btn ml-4" data-toggle="tab" role="tab" href="#step6">5</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// import Step1 from './Step1.vue'
import Step2 from './Step2.vue'
import Step3 from './Step3.vue'
import Step4 from './Step4.vue'
import Step5 from './Step5.vue'
import Step6 from './Step6.vue'

export default {
  name: 'CheckOutSections',
  components: {
    // Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6
  },
  data() {
    return {
      extraParticipants: [],
      booker: {
        infos: {
          firstName: '',
          lastName: '',
          birthday: '',
          phone: '',
          email: '',
          gender: '',
          country: '',
          city: '',
          address: '',
          zipCode: ''
        },
        booking: {
          room: [],
          roomMate: '',
          equipmentRental: null,
          noExtraActivities: false,
          extraNotes: '',
          insurance: ''
        }
      }
    }
  },
  methods: {
    submitBookingForm() {
      this.$axios.post('http://localhost:3000/api/v1/reservations', {
        booker: this.booker,
        extraParticipants: this.extraParticipants
      })
    },
    addParticipant() {
      this.extraParticipants.push({
        infos: {
          firstName: '',
          birthday: '',
          email: ''
        },
        booking: {
          room: [],
          roomMate: '',
          equipmentRental: null,
          noExtraActivities: false,
          extraNotes: '',
          insurance: ''
        }
      })
    },
    removeParticipant(index) {
      this.extraParticipants.splice(index, 1)
    }
  },
  mounted() {
    // $(function () {
    //   $('[data-toggle="tooltip"]').tooltip();
    //   $(
    //     ".avalaible-mem,.validate-btn-info,.card-transfer,.bank-transfer"
    //   ).hide();
    //   $(".custom-control.custom-radio").change(function () {
    //     if ($("#customRadio3").is(":checked")) {
    //       $(this).parent().find(".avalaible-mem").show();
    //     } else {
    //       $(this).parent().find(".avalaible-mem").hide();
    //     }
    //   });
    //   $(".custom-control.sameAddrCheck").change(function () {
    //     if ($("#sameAddr").is(":checked")) {
    //       $(".login-tabs").hide();
    //       $(".validate-btn-info").show();
    //     } else {
    //       $(".login-tabs").show();
    //       $(".validate-btn-info").hide();
    //     }
    //   });
    //   $("input[type=radio][name=choicePay]").change(function () {
    //     if ($("#card_transfer").is(":checked")) {
    //       $(".card-transfer").show();
    //       $("#card-number").focus();
    //       $(".bank-transfer").hide();
    //     } else if ($("#bank_transfer").is(":checked")) {
    //       $(".card-transfer").hide();
    //       $(".bank-transfer").show();
    //     }
    //   });
    // });
  }
}
</script>
