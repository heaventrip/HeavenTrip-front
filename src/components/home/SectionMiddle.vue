<template>
  <section class="middle-section">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 col-xl-5 rounded text-white p-0 desk-width-right">
          <div class="pad pad__header text-uppercase rounded-top d-flex justify-content-between align-items-center">
            <h5 class="small-head">Votre coup de coeur</h5>
            <div style="width: min-content">
              <span class="text-uppercase mb-0 d-none d-lg-inline-block"> Ca te titille? Rejoint les 12 intéressés </span>
              <ul class="int-list list-unstyled d-inline-flex align-items-center mx-3 mb-0">
                <li>
                  <a href="#"><img class="img-fill" fluid="" src="/img/2.7995d3c0.jpg" /></a>
                </li>
                <li>
                  <a href="#"><img class="img-fill" fluid="" src="/img/1.4d5bbf3e.jpg" /></a>
                </li>
                <li>
                  <a href="#"><img class="img-fill" fluid="" src="/img/2.7995d3c0.jpg" /></a>
                </li>
                <li>
                  <a href="#"><img class="img-fill" fluid="" src="/img/3.5f324f7d.jpg" /></a>
                </li>
                <li>
                  <a href="#"><img class="img-fill" fluid="" src="/img/2.7995d3c0.jpg" /></a>
                </li>
                <li class="">
                  <a href="#" class="d-flex align-items-center justify-content-center" data-toggle="tooltip" data-placement="top" title="Intéresse toi et retrouve moi dans tes envies !"
                    ><svg class="svg-inline--fa fa-heart fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                      <path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg
                    ><!-- <i class="fas fa-heart"></i> --></a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="pad pad__content">
            <h1 class="text-uppercase heading font-weight-bold mb-4 d-flex align-items-center">
              yoggi & surf
              <span class="font-weight-normal"><i class="fas fa-caret-right mx-3"></i>îles canaries</span>
            </h1>
            <div class="d-flex justify-content-center py-3 tooltip-div my-4">
              <a href="" class="mr-3" data-toggle="tooltip" data-placement="top" title="Pilates"><img class="" fluid :src="require('@/assets/svg/surf.svg')" /></a>
              <a href="" class="mr-3" data-toggle="tooltip" data-placement="top" title="Pilates"><img class="" fluid :src="require('@/assets/svg/yoga.svg')" /></a>
              <a href="" class="mr-3" data-toggle="tooltip" data-placement="top" title="Pilates"><img class="" fluid :src="require('@/assets/svg/mat.svg')" /></a>
              <span class="ml-auto euro"><strong>750&euro;</strong>/pers. </span>
            </div>
            <div class="d-flex align-items-center social-info">
              <ul class="list-unstyled mb-0 ml-auto contents-list d-flex justify-content-between align-items-center">
                <li><img class="mr-2 icons" src="assets/svg/globe.svg" />espagne</li>
                <li><img class="mr-2 icons" src="assets/svg/timer.svg" />8 jours</li>
                <li><img class="mr-2 icons" src="assets/svg/ring.svg" />tous niveaux</li>
                <li class="d-none d-md-inline-block"><img class="mr-2 icons" src="assets/images/places.png" />10 places</li>
              </ul>
            </div>
          </div>
          <div class="pad pad__footer bttn bttn--pink">
            <div class="bttn__text--bold bttn__text--white">
              VOIR LE DETAIL DU SEJOUR
              <img class="align-baseline ml-3" src="@/assets/svg/arrow-right.svg" style="max-height: 15px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionMiddle'
}
</script>

<style scoped>
.tooltip-div {
  border-top: 1px dashed #292f33;
  border-bottom: 1px dashed #292f33;
}
.bttn {
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  height: 80px;
}
.bttn__text {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  font-weight: 500;
  letter-spacing: 1.5px;
}
.bttn__text--bold {
  font-weight: bold;
  letter-spacing: 1.5px;
  font-size: 0.8rem;
}
.bttn__text--white {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.bttn--transparent {
  background-color: transparent;
  border: 1px solid #fff;
}
.bttn--pink {
  background-color: #d82558;
  border-color: #d82558;
}
.bttn--pink:hover {
  background-color: #292f33;
  border-color: #292f33;
}
.bttn--pink:active {
  background-color: #d82558;
  border-color: #d82558;
}
.pad__header {
  background-color: #292f33;
  margin-bottom: 0.5rem;
}
.pad__content {
  background-color: #ffffff80;
  color: #292f33;
}
.middle-section {
  background: url('../../assets/images/asset-1.png') no-repeat center center / cover;
}
</style>
