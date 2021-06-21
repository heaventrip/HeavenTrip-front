<template>
  <div>
    <header class="checkout-header sticky-header">
      <div class="checkout-header-div m-flex bg-dark text-white d-flex align-items-center text-uppercase">
        <a href="/" class="back-to-home-link text-reset text-decoration-none font-weight-500 d-flex align-items-center align-self-stretch px-3"><i class="fa fa-home h6 mb-0"></i><span class="back-to-home ml-3 mr-4 text-lowercase">retour accueil</span></a>
        <a href="#" class="descriptif-link text-reset text-decoration-none font-weight-bold d-flex align-items-center align-self-stretch px-3 bg-danger ml-5"><i class="fa fa-chevron-left mr-3 h6 mb-0"></i> descriptif</a>
        <div class="mb-0 ml-4 pr-3 border-right font-weight-bold">neige</div>
        <div class="mb-0 ml-4 font-weight-light">{{ course.sports[0]?.name }}<i class="fa fa-caret-right mx-3"></i> {{ course.spot?.name }}</div>
        <p class="ml-auto mb-0 cap-letter font-weight-light mb-0 mr-5">Besoin d'un conseil ou d'un renseignement ?</p>
        <div class="d-flex justify-content-around text-white text-uppercase font-weight-500 mail-box mr-5">
          <a href="tel:0369316618" class="text-reset text-decoration-none border-right px-4"><img class="mr-3" fluid :src="require('@/assets/images/tel.png')" /><img class="mr-3 hover-img" fluid :src="require('@/assets/images/tel_h.png')" />03 69 31 66 18</a>
          <a href="#" class="text-reset text-decoration-none px-4"><img class="mr-3" fluid :src="require('@/assets/images/chat.png')" /><img class="mr-3 hover-img" fluid :src="require('@/assets/images/chat_h.png')" />écrivez-nous</a>
        </div>
      </div>
      <div class="checkout-header-block d-flex shadow-sm block-header position-relative">
        <div class="d-flex align-items-center checkout-header-block-container flex-1">
          <img class="head-icon ml-0" fluid :src="require('@/assets/images/pink.png')" />
          <div class="mr-5">
            <h2 class="heading text-uppercase mb-2 font-weight-normal">{{ course.sports[0]?.name }}</h2>
            <h6 class="text-uppercase spacing-word"><i class="fas fa-caret-right mr-1"></i> {{ course.spot?.name }}</h6>
          </div>
          <div class="checkout-header-divider h-200 h-100 mr-5 d-none">
            <span class="line"></span>
          </div>
          <div class="text-uppercase text-dark font-weight-500 calender-dates mr-5">
            <a href="#" class="text-reset text-decoration-none"><img fluid :src="require('@/assets/images/cal.png')" class="mr-2" />départ : <strong>28/10/2020</strong></a>
            <a href="#" class="text-reset text-decoration-none"><img fluid :src="require('@/assets/images/cal.png')" class="mr-2" />retour : <strong>06/10/2020</strong></a>
          </div>
          <div class="checkout-header-divider header-divider-custom h-100 mr-5">
            <span class="line"></span>
          </div>
          <ul class="nav nav-tabs font-weight-bold checkout-steps text-uppercase border-0 mb-0" id="" role="tablist">
            <li class="nav-item d-none" role="presentation">
              <a class="nav-link text-reset active" id="step5-tab" data-toggle="tab" href="#step5" role="tab" aria-controls="step5" aria-selected="true"><span class="number-circle">5</span> Paiement</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link text-reset active" id="step6-tab" data-toggle="tab" href="#step6" role="tab" aria-controls="step6" aria-selected="true"><span class="number-circle">2</span> GOOD TRIP</a>
            </li>
          </ul>
          <div class="recap-div div-nav-link ml-auto d-none">
            <h6 class="font-weight-bold text-uppercase recap-head mt-0">recap séjour :</h6>
            <ul class="list-unstyled font-weight-500 recap-list mt-3 mb-0">
              <li>
                <span class="bg-white pr-3">Trippers</span>
                <span class="bg-white pl-3">2 x 1990 &euro;</span>
              </li>
              <li class="flag">
                <span class="bg-white pr-3">Options séjour</span>
                <span class="bg-white pl-3">120 &euro;</span>
              </li>
              <li class="flag">
                <span class="bg-white pr-3">Remise spéciale</span>
                <span class="bg-white pl-3">5 %</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="ml-auto bg-light activity-total d-flex align-items-center total-amount-block">
          <h6 class="total-amount text-uppercase mb-0">
            A PARTIR DE :<br /><span class="amount font-weight-bold">{{ course.price }} &euro;</span>
          </h6>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: 'CheckOutHeader',
  props: ['course'],
  data() {
    return {}
  }
}
</script>
