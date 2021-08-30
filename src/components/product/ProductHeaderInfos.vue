<template>
  <div class="d-flex align-items-center align-items-lg-end w-100 h-100">
    <div class="content w-100 mb-lg-5">
      <div class="d-flex align-items-center justify-content-md-center top-div">
        <img class="head-icon d-inline-block" fluid :src="require('@/assets/images/pink.png')" />
        <div>
          <h1 class="heading text-uppercase mb-0"><strong>ski</strong> freeride</h1>
          <h5 class="sub-heading text-uppercase d-block mt-2"><i class="fas fa-caret-right mr-1"></i> serre-chevalier</h5>
        </div>
      </div>
      <div class="text-center mt-5 mt-lg-0 pt-md-4 pt-lg-0">
        <div class="d-flex d-md-inline-flex align-items-center justify-content-center positioned-border-bottom px-5 px-md-0">
          <ul class="list-unstyled py-4 py-lg-4 text-uppercase list-info mb-0 align-items-center">
            <li class="country"><img class="mr-2 icons" fluid :src="require('@/assets/images/globe.png')" />france</li>
            <li class="time"><img class="mr-2 icons" fluid :src="require('@/assets/images/timer.png')" />8 j - 7 nuits</li>
            <li class="status"><img class="mr-2 icons" fluid :src="require('@/assets/images/circle.png')" />confirmé</li>
            <li class="place"><img class="mr-2 icons" fluid :src="require('@/assets/images/places.png')" />10 places</li>
          </ul>
          <span class="divider d-none d-lg-inline-flex"></span>
          <div class="d-lg-inline-flex align-items-center font-weight-normal mr-0 text-uppercase text-warning session-date">
            <!-- <span>Prix basé sur 8 j - 7 nuits</span> -->
            Session sélectionnée :
            <button type="button" class="custom-datepicker px-0 pl-1 border-0 font-weight-bold" data-toggle="modal" data-target="#exampleModal">28/10/2020</button>
          </div>
        </div>
        <br />
        <div class="d-inline-flex align-items-center p-3 py-4 px-lg-0">
          <h5 class="interested-members text-uppercase mb-0 d-none d-lg-inline-block text-right"><strong class="d-block">1400 trippers</strong> intéressés</h5>
          <ul class="img-list list-unstyled d-inline-flex align-items-center mx-3 mb-0">
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
              <a href="#"><img class="img-fluid user_icon positioned-img rounded-circle mt-n1" fluid :src="require('@/assets/images/th.png')" /> </a>
            </li>
            <li class="d-inline-block d-lg-none">
              <span class="interested-members-count ml-2">+1.5k</span>
            </li>
          </ul>
          <span class="divider d-none d-md-inline-block mx-2"></span>
          <a class="galary-link text-uppercase text-white font-weight-bold d-none d-md-inline-block pl-3" href="#"
            ><img class="img-fluid mr-3" fluid :src="require('@/assets/images/svg/noun_Image.svg')" />GALERIE PHOTOS
          </a>
        </div>
      </div>
    </div>
    <div class="text-center booking-link d-none d-md-block">
      <a href="#" class="text-reset text-uppercase"><i class="fas fa-arrow-alt-circle-down mr-1"></i>Détails & booking</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductHeaderInfos'
}
</script>

<style></style>
