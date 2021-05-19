<template>
  <nav class="narrow-header-div bg-dark text-white d-flex align-items-center text-uppercase sticky-top">
    <a href="/" class="text-reset text-decoration-none font-weight-500 d-flex align-items-center align-self-stretch px-3"><i class="fa fa-home h6 mb-0 d-none d-lg-inline-block"></i><i class="fas fa-chevron-left mx-4 h5 mb-0 d-inline-block d-lg-none"></i></a>
    <a href="#" class="text-reset text-decoration-none font-weight-500 d-none d-lg-flex align-items-center align-self-stretch px-3 bg-danger descriptif-link border-right border-white"><i class="fa fa-chevron-left mr-3 h6 mb-0"></i> Activités</a>
    <div class="mb-0 ml-4 pr-3 border-right border-white font-weight-500 d-none d-lg-inline-block">neige</div>
    <div>
      <h5 class="nav_heading text-uppercase mb-0 ml-2"><strong>ski</strong> freeride <i class="fa fa-caret-right mx-3 d-none d-lg-inline-block"></i><span class="d-block d-lg-inline-block sub-head">serre-chevalier</span></h5>
    </div>
    <!-- <div class="mb-0 ml-4 font-weight-light">ski freeride <i class="fa fa-caret-right mx-3"></i> serre-chevalier</div> -->

    <button class="btn btn_img ml-auto d-block d-lg-none">
      <img class="img_icon" fluid :src="require('@/assets/images/svg/noun_Image.svg')" />
    </button>
    <ul class="list-unstyled text-uppercase d-none d-lg-flex list-info mb-0 align-items-center ml-auto">
      <li><img class="mr-2 img-14" fluid :src="require('@/assets/images/globe.png')" />france</li>
      <li><img class="mr-2 img-14" fluid :src="require('@/assets/images/timer.png')" />7 jours</li>
      <li><img class="mr-2 img-14" fluid :src="require('@/assets/images/circle.png')" />confirmé</li>
      <li><img class="mr-2 img-16" fluid :src="require('@/assets/images/places.png')" />10 places</li>
    </ul>
    <div class="mb-0 text-warning letter-space-1 ml-3 mr-5 d-none d-lg-inline-block">Prochaine session : <strong>28/10/2020</strong></div>
  </nav>
</template>
<script>
export default {
  name: 'ProductNav',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
