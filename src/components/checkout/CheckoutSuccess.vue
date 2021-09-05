<template>
  <div class="wrap">
    <div class="image-container" style="width: 40%; position: relative">
      <img class="big-image" :src="require('@/assets/images/beach.jpg')" />
    </div>
    <div class="d-flex flex-column align-items-center text-white" style="background-color: #292f33; width: 60%">
      <div class="d-flex align-items-center text-uppercase my-auto">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" height="120" viewBox="0 0 100 100">
            <g id="Calque_2" data-name="Calque 2">
              <g id="Calque_1-2" data-name="Calque 1">
                <path fill="#d82558" d="M48.37,0A52.19,52.19,0,0,0,15.62,10.85l7.63,7.61A41.66,41.66,0,0,1,77.14,22.9a41.48,41.48,0,0,1,4.34,53.68l7.61,7.6A52.26,52.26,0,0,0,48.37,0Z" />
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  d="M76.11,88.8a46.3,46.3,0,0,1-61.37-3.52,46,46,0,0,1-3.49-61.22l-.87-.88a47.22,47.22,0,0,0,3.49,63A47.52,47.52,0,0,0,77,89.67Z"
                />
              </g>
            </g>
            <InlineSvg :src="require(`@/assets/svg/check.svg`)" viewBox="-12 -18 50 50" fill="white" />
          </svg>
        </div>
        <div style="margin-left: 2rem">
          <div style="font-weight: 800; font-size: 2.2rem; margin-bottom: 0.5rem">GOOD TRIP !</div>
          <div style="font-weight: 400; letter-spacing: 0.04rem">Votre paiement de {{ $route.query.amount }}€ a été validé</div>
        </div>
      </div>
      <div
        class="d-flex justify-content-center"
        style="position: relative; width: 100%; height: 80px; border-top: 1px dashed rgba(255, 255, 255, 0.15); border-bottom: 1px dashed rgba(255, 255, 255, 0.15)"
      >
        <div class="keywords-container" style="position: absolute; left: 0; transform: translateX(-100%)">
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
        <div type="button" class="center-btn px-4 mr-1">
          <div @click="$router.push({ name: 'Home' })" class="center-btn-text">Retour à l'accueil</div>
        </div>
        <div type="button" class="center-btn px-4 mr-1">
          <div class="center-btn-text">Consulter ma réservation</div>
        </div>
        <div type="button" class="center-btn px-4 mr-1">
          <div @click="$router.push({ name: 'Product', params: { id: $route.query.course_id } })" class="center-btn-text">Discuter avec les participants</div>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-center" style="margin-bottom: 5rem; margin-top: 4rem; font-family: Muli, sans-serif; font-size: 0.8rem">
        <div class="text-right" style="margin-right: 4rem; letter-spacing: 0.04rem; line-height: 1.8; font-size: 0.8rem; width: 45%">
          Un email de confirmation a été envoyé sur ta boite mail. Tu peux retrouver l'état de ta réservation sur ton espace client. Profites-en pour discuter avec les autres participants via le chat
          en ligne. Merci pour ta confiance !
        </div>
        <InlineSvg :src="require('@/assets/svg/instagram-light.svg')" height="60" />
        <div class="ml-4">
          <span style="font-weight: 800">Sportivement,</span>
          <br />
          <span style="font-weight: 100">La team Heaven Trip</span>
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center" style="height: 18vh; width: 100%; background-color: #d82558">
        <span class="text-uppercase text-white mr-4" style="font-family: Oswald, sans-serif">Partage ton stage :</span>
        <InlineSvg :src="require('@/assets/svg/facebook-light.svg')" height="40" class="mr-4" />
        <InlineSvg :src="require('@/assets/svg/instagram-light.svg')" height="40" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckoutSuccess'
}
</script>

<style scoped>
.center-btn,
.center-btn:active {
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.03rem;
  font-size: 0.8125rem;
  background-color: rgba(58, 63, 66, 0.5);
  transition: background-color 0.5s ease;
}
.center-btn:hover {
  background-color: white;
  color: #292f33;
}
.center-btn-text {
  position: relative;
  top: 1.8rem;
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
.wrap {
  display: flex;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  position: fixed;
}
.big-image {
  object-fit: cover;
  /* object-position: 10px 10px; */
  height: 100%;
  width: 100%;
}
.image-container::after {
  content: '';
  position: absolute;
  background-color: hsla(292, 24%, 30%, 0.8);
  left: 0;
  /* opacity: 0.6; */
  width: 100%;
  height: 100vh; /* corresponds height of image */
}
/* .inline-infos__initial-element {
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
} */
/* .step-line {
  background-color: rgba(255, 255, 255, 0.6);
  height: 1px;
  width: 2.5rem;
} */
/* .content-top {
  height: 83vh;
} */
/* .content-bottom {
  position: relative;
  height: 17vh;
} */
/* .text-title {
  position: relative;
  left: -120px;
  color: #292f33;
  font-size: 1.75rem;
  font-weight: 900;
  font-family: Muli, sans-serif;
  max-width: 300px;
  text-transform: uppercase;
  line-height: 1.3;
} */
/* .big-letters {
  font-size: 220px;
  font-weight: 900;
  color: hsla(204, 11%, 18%, 0.051);
  line-height: 1;
  font-family: Oswald, sans-serif;
} */
/* .slider-buttons {
  background-color: #d82558;
  bottom: 0;
  position: absolute;
  height: 28vh;
  width: 28vh;
  z-index: 1;
  border-top-right-radius: 5%;
} */
/* .text-section {
  font-size: 0.85rem;
  color: #292f33;
  font-family: Muli, sans-serif;
  padding: 140px 12vw 4rem 8vw;
  line-height: 1.8;
} */
</style>
