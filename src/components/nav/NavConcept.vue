<template>
  <div class="wrap">
    <div class="row no-gutters">
      <div class="col-5 big-image" style="overflow: hidden">
        <img :src="require('@/assets/images/sea.jpg')" />
      </div>
      <div class="col text">
        <div>
          Si tu as besoin de conseils, de renseignements tu peux nous joindre par téléphone, formulaire ou via les réseaux sociauxSi tu as besoin de conseils, de renseignements tu peux nous joindre par téléphone, formulaire ou via les réseaux sociauxSi tu as besoin de conseils, de renseignements tu
          peux nous joindre par téléphone, formulaire ou via les réseaux sociauxSi tu as besoin de conseils, de renseignements tu peux nous joindre par téléphone, formulaire ou via les réseaux sociauxSi tu as besoin de conseils, de renseignements tu peux nous joindre par téléphone, formulaire ou via
          les réseaux sociauxSi tu as besoin de conseils
        </div>
        <br />
        <div>
          Si tu as besoin de conseils, de renseignements tu peux nous joindre par téléphone, formulaire ou via les réseaux sociauxSi tu as besoin de conseils, de renseignements tu peux nous joindre par téléphone, formulaire ou via les réseaux sociauxSi tu as besoin de conseils, de renseignements tu
          peux nous joindre par téléphone, formulaire ou via les réseaux sociauxSi tu as besoin de conseils, de renseignements tu peux nous joindre par téléphone, formulaire ou via les réseaux sociauxSi tu as besoin de conseils, de renseignements tu peux nous joindre par téléphone, formulaire ou via
          les réseaux sociauxSi tu as besoin de conseils
        </div>
      </div>
    </div>
    <div class="row no-gutters">
      <div class="nav">aaaaa</div>
      <div class="col-5 step text-right px-3">
        <span class="step-number">02</span>
        <span class="step-descr">Du sur mesure tout compris</span>
      </div>
      <div class="col-6 small-image" style="overflow: hidden">
        <img fluid :src="require('@/assets/images/sea.jpg')" />
      </div>
      <div class="col social-networks">aaaaaaaaa</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavConcept'
}
</script>

<style scoped>
.nav {
  background-color: #d82558;
  bottom: 0;
  position: absolute;
  height: 25vh;
  width: 25vh;
  z-index: 1;
}
.wrap {
  max-height: calc(100vh - 160px);
  overflow: hidden;
}
.step-number {
  font-size: 3rem;
}
.step-descr {
  text-transform: uppercase;
}
.step span {
  margin-top: auto;
  margin-bottom: auto;
}
.text {
  font-size: 0.8rem;
  color: #292f33;
  font-family: Muli, sans-serif;
  padding: 3vh 6vw;
  line-height: 1.8;
}
.step {
  background-color: #292f33;
  color: rgba(255, 255, 255, 0.6);
}
img {
  object-fit: cover;
  max-height: 60vh;
}
.big-image {
  transform: translate(0, 10px);
}
.social-networks {
  background-color: #292f33;
}
</style>
