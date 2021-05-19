<template>
  <div class="d-flex align-items-center align-items-lg-end w-100 h-100">
    <div class="content w-100 mt-5 mt-lg-0">
      <div class="d-flex align-items-center mb-1 justify-content-md-center justify-content-lg-start">
        <img class="head-icon d-inline-block d-lg-none" fluid :src="require('@/assets/images/pink.png')" />
        <img class="head-pin-icon d-none d-lg-inline-block" fluid :src="require('@/assets/images/head-pin.png')" />
        <img class="d-none d-lg-inline-block mr-4" fluid :src="require('@/assets/images/ARROW.png')" />
        <div>
          <h1 class="heading text-uppercase mb-0"><strong>ski</strong> freeride</h1>
          <h5 class="sub-heading text-uppercase d-block d-lg-none"><i class="fas fa-caret-right mr-1"></i> serre-chevalier</h5>
        </div>
      </div>
      <p class="para d-none d-lg-block">Avec notre moniteur, vivez les plaisirs du ski hors piste, mais aussi <br />apprendre a mieux connaitre la montagne et ses dangers.</p>
      <h5 class="sub-heading text-uppercase d-none d-lg-block mb-3"><strong>inclus :</strong> yoga - rando - vtt neige</h5>
      <div class="text-center text-lg-left mt-5 mt-lg-0 pt-md-4 pt-lg-0">
        <ul class="list-unstyled py-4 py-lg-3 text-uppercase list-info mb-0 align-items-center">
          <li><img class="mr-2 icons" fluid :src="require('@/assets/images/globe.png')" />france</li>
          <li class="d-none d-md-inline-block"><img class="mr-2 icons" fluid :src="require('@/assets/images/timer.png')" />7 jours</li>
          <li class="d-none d-md-inline-block"><img class="mr-2 icons" fluid :src="require('@/assets/images/circle.png')" />confirmé</li>
          <li class="d-none d-md-inline-block"><img class="mr-2 icons" fluid :src="require('@/assets/images/places.png')" />10 places</li>
          <li><span class="divider"></span></li>
          <li class="d-none d-lg-inline-flex align-items-center font-weight-500 pl-3 mr-0">
            sessions :
            <button @click="toggleSessions = !toggleSessions" class="text-uppercase custom-datepicker pl-3 pr-0 border-0 font-weight-500">choisir une date<img class="arrow ml-2" fluid :src="require('@/assets/images/down.png')" /></button>
          </li>
          <li class="d-inline-block d-lg-none text-lowercase">
            <h3 class="euro-count mb-0 euro"><strong>990&euro;</strong> /pers.</h3>
          </li>
        </ul>
        <div class="float-right d-none d-lg-flex floaded-div position-relative mt-3">
          <div class="p-3 bg-white text-dark rounded-left">
            <h3 class="euro-count mb-0 euro"><strong>1 990&euro;</strong> /pers.</h3>
            <p class="mb-0 small-text">
              <span class="condensed-text">Tout inclus (sans transports)</span>
            </p>
          </div>
          <button class="btn details-btn btn-danger text-uppercase rounded-right px-4">détails</button>
        </div>
        <br />
        <div class="d-inline-flex d-lg-flex align-items-center p-3 py-4 px-lg-0 trippers-div">
          <h5 class="sub-heading text-uppercase mb-0 d-none d-lg-inline-block"><strong>12 trippers</strong> intéressés</h5>
          <ul class="img-list list-unstyled d-none d-md-inline-flex align-items-center mx-4 mb-0">
            <li>
              <a href="#"><img class="img-fluid user_icon positioned-img rounded-circle" fluid :src="require('@/assets/images/t2.png')" /> </a>
            </li>
            <li>
              <a href="#"><img class="img-fluid user_icon positioned-img rounded-circle" fluid :src="require('@/assets/images/t1.png')" /> </a>
            </li>
            <li>
              <a href="#"><img class="img-fluid user_icon positioned-img rounded-circle" fluid :src="require('@/assets/images/t2.png')" /> </a>
            </li>
            <li>
              <a href="#"><img class="img-fluid user_icon positioned-img rounded-circle" fluid :src="require('@/assets/images/t3.png')" /> </a>
            </li>
            <li>
              <a href="#"><img class="img-fluid user_icon positioned-img rounded-circle" fluid :src="require('@/assets/images/t4.png')" /> </a>
            </li>
            <li class="d-none d-lg-inline-block">
              <a href="#"><img class="img-fluid user_icon" fluid :src="require('@/assets/images/th.png')" /> </a>
            </li>
            <li class="d-inline-block d-lg-none">
              <span>+1.5k</span>
            </li>
          </ul>
          <span class="divider d-none d-md-inline-block d-lg-none mx-2"></span>
          <a class="details-link text-uppercase text-white font-weight-bold d-inline-block d-lg-none pl-3" href="#">Détails <img class="img-fluid mt-n1" fluid :src="require('@/assets/images/arr-r.png')" /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderText'
}
</script>

<style scoped>
.content {
  margin-bottom: 6rem;
}
</style>
