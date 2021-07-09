<template>
  <div class="wrap">
    <div style="width: 40%; position: relative">
      <img class="big-image" :src="require('@/assets/images/beach.jpg')" />
      <div class="keywords-container" style="position: absolute; right: 0; top: 50%">
        <div class="d-flex">
          <span class="keyword keyword--first-line">Résilience</span>
          <span class="keyword keyword--first-line">Partage</span>
          <span class="keyword keyword--first-line">Dépassement</span>
        </div>
        <div class="d-flex">
          <div class="d-flex flex-column">
            <span class="d-inline-block"><span class="keyword d-inline-block">Fun</span> <span class="keyword d-inline-block">Rencontres</span></span>
            <span class="d-inline-block"><span class="keyword d-inline-block">Mental</span> <span class="keyword d-inline-block">Volonté</span></span>
          </div>
          <div class="keyword keyword--big text-center"><span style="display: inline-block; position: relative; top: 50%; transform: translateY(-50%)">Sports</span></div>
        </div>
      </div>
    </div>
    <div class="d-flex flex-column justify-content-around align-items-center text-white" style="background-color: #292f33; width: 60%">
      <div class="d-flex align-items-center text-uppercase mt-auto">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" height="120" viewBox="0 0 100 100">
            <g id="Calque_2" data-name="Calque 2">
              <g id="Calque_1-2" data-name="Calque 1">
                <path fill="#d82558" d="M48.37,0A52.19,52.19,0,0,0,15.62,10.85l7.63,7.61A41.66,41.66,0,0,1,77.14,22.9a41.48,41.48,0,0,1,4.34,53.68l7.61,7.6A52.26,52.26,0,0,0,48.37,0Z" />
                <path xmlns="http://www.w3.org/2000/svg" fill="white" d="M76.11,88.8a46.3,46.3,0,0,1-61.37-3.52,46,46,0,0,1-3.49-61.22l-.87-.88a47.22,47.22,0,0,0,3.49,63A47.52,47.52,0,0,0,77,89.67Z" />
              </g>
            </g>
            <InlineSvg :src="require(`@/assets/svg/check.svg`)" viewBox="-12 -18 50 50" fill="white" />
          </svg>
        </div>
        <div class="ml-5">
          <span style="font-weight: 800; font-size: 2.2rem">GOOD TRIP !</span>
          <br />
          <span style="font-weight: 400">Votre paiement de 1000 € a été validé</span>
        </div>
      </div>
      <div class="d-flex mt-auto justify-content-center">
        <div class="py-3 px-4 mr-1" style="background-color: rgba(58, 63, 66, 0.5)">link</div>
        <div class="py-3 px-4 mr-1" style="background-color: rgba(58, 63, 66, 0.5)">link</div>
        <div class="py-3 px-4 mr-1" style="background-color: rgba(58, 63, 66, 0.5)">link</div>
      </div>
      <div class="d-flex align-items-center justify-content-center mt-auto" style="font-family: Muli, sans-serif; font-size: 0.8rem">
        <div class="text-right mr-5" style="line-height: 1.8; font-size: 0.8rem; width: 40%">
          Un email de confirmation a été envoyé sur ta boite mail. Tu peux retrouver l'état de ta réservation sur ton espace client. Profites-en pour discuter avec les autres participants via le chat en ligne. Merci pour ta confiance !
        </div>
        <InlineSvg :src="require('@/assets/svg/instagram-light.svg')" height="60" />
        <div class="ml-4">
          <span style="font-weight: 500">Sportivement,</span>
          <br />
          <span>La team Heaven Trip</span>
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center mt-auto" style="height: 20vh; width: 100%; background-color: #d9345a">
        <span class="text-uppercase text-white mr-4" style="font-family: Oswald, sans-serif">Partage ton stage :</span>
        <InlineSvg :src="require('@/assets/svg/facebook-light.svg')" height="40" class="mr-4" />
        <InlineSvg :src="require('@/assets/svg/instagram-light.svg')" height="40" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step6'
}
</script>

<style scoped>
.inline-infos__initial-element {
  text-align: right;
}
.inline-infos {
  text-transform: uppercase;
  font-family: Muli, sans-serif;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 1.8;
  letter-spacing: 0.4px;
}
.inline-infos__item__picto {
  margin-right: 1rem;
}
.inline-infos__item__picto,
.inline-infos__item__text {
  display: inline-block;
  vertical-align: middle;
}
.inline-infos__item {
  padding: 0 1.5rem;
}
.inline-infos__item:not(:last-of-type) {
  border-right: 1px dashed #292f33;
}
.keyword {
  color: #fff;
  letter-spacing: 0.16px;
  text-transform: uppercase;
  font-family: Muli, sans-serif;
  font-weight: 900;
  background-color: #292f33;
  margin: 0.1rem 0.2rem;
  padding: 0 0.2rem;
}
.keyword--big {
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px dashed #292f33;
  color: #292f33;
  flex-grow: 1;
  font-size: 1.4rem;
  padding-right: 1.4rem;
  padding-left: 1.4rem;
}
.keyword--first-line {
  flex-grow: 1;
  text-align: center;
}
.step-line {
  background-color: rgba(255, 255, 255, 0.6);
  height: 1px;
  width: 2.5rem;
}
.content-top {
  height: 83vh;
}
.content-bottom {
  position: relative;
  height: 17vh;
}
.text-title {
  position: relative;
  left: -120px;
  color: #292f33;
  font-size: 1.75rem;
  font-weight: 900;
  font-family: Muli, sans-serif;
  max-width: 300px;
  text-transform: uppercase;
  line-height: 1.3;
}
.big-letters {
  font-size: 220px;
  font-weight: 900;
  color: hsla(204, 11%, 18%, 0.051);
  line-height: 1;
  font-family: Oswald, sans-serif;
}
.slider-buttons {
  background-color: #d82558;
  bottom: 0;
  position: absolute;
  height: 28vh;
  width: 28vh;
  z-index: 1;
  border-top-right-radius: 5%;
}
.wrap {
  display: flex;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  position: fixed;
}
.step-number {
  font-size: 3rem;
  font-weight: bold;
}
.step-descr {
  font-size: 0.85rem;
  font-family: Muli, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0 1.2rem;
}
.text-section {
  font-size: 0.85rem;
  color: #292f33;
  font-family: Muli, sans-serif;
  padding: 140px 12vw 4rem 8vw;
  line-height: 1.8;
}
.step {
  background-color: #292f33;
  color: rgba(255, 255, 255, 0.6);
}
.big-image {
  object-fit: cover;
  /* object-position: 10px 10px; */
  height: 100%;
  width: 100%;
}
.small-image {
  object-fit: cover;
  /* object-position: 10px 10px; */
  max-height: 17vh;
  min-width: 100%;
}
.social-networks {
  background-color: #292f33;
}
</style>
