<template>
  <div class="wrap">
    <div class="row content-top no-gutters">
      <div class="col-5" style="overflow: hidden">
        <img :src="require('@/assets/images/sea.jpg')" class="big-image" />
      </div>
      <div class="col text">
        <div class="row align-items-center text-left ml-5">
          <div class="big-letters">01</div>
          <div class="text-title">Le concept<br />c'est vous !</div>
        </div>
        <div class="row">
          <span class="mb-2"
            >C’est très simple, on te prend toi ! Lui, elle, elle, lui et encore d’ autres et vous partez ici ou là tous dans une villa, un chalet ou petite résidence ou
            <span class="text--bold">vous partagerez tous ensemble le logement, de bons repas, les activités sportives, parfois culturelles et bien- être</span>. Tu feras parti (on l’espère !) d’un de ces groupes composé de 4 personnes minimum jusqu’à 10 max ! Un “Nous” en petit collectif et
            authentique, histoire de.</span
          >
          <span
            >Nos séjours sportifs sont des <span class="text--bold">créations By Heaven Trip</span>, nous sélectionnons nos partenaires par domaine de compétences, réduisons les intermédiaires et favorisons l’emploi local. Cela nous permet de concevoir des expériences différentes et de permettre sur
            les pratiques sportives une réelle pédagogie avec des
          </span>
        </div>
      </div>
    </div>
    <div class="row content-bottom no-gutters">
      <div class="nav">aaaaa</div>
      <div class="col-6 d-flex align-items-center justify-content-end step px-3">
        <span class="step-number">02</span>
        <span class="step-descr">Du sur-mesure tout compris</span>
        <div class="step-line"></div>
      </div>
      <div class="col-5" style="overflow: hidden">
        <img fluid :src="require('@/assets/images/sea.jpg')" class="small-image" />
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
.step-line {
  background-color: rgba(255, 255, 255, 0.6);
  height: 1px;
  width: 2.5rem;
}
.content-top {
  height: 80vh;
}
.content-bottom {
  position: relative;
  height: 20vh;
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
  font-weight: 700;
  color: hsla(204, 11%, 18%, 0.051);
  line-height: 1;
}
.nav {
  background-color: #d82558;
  bottom: 0;
  position: absolute;
  height: 28vh;
  width: 28vh;
  z-index: 1;
  border-top-right-radius: 5%;
}
.wrap {
  max-height: 100vh;
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
.text {
  font-size: 0.85rem;
  color: #292f33;
  font-family: Muli, sans-serif;
  padding: 140px 6vw 4rem 6vw;
  line-height: 1.8;
}
.step {
  background-color: #292f33;
  color: rgba(255, 255, 255, 0.6);
}
.big-image {
  object-fit: cover;
  /* object-position: 10px 10px; */
  max-height: 80vh;
}
.small-image {
  object-fit: cover;
  /* object-position: 10px 10px; */
  max-height: 20vh;
  min-width: 100%;
}
.social-networks {
  background-color: #292f33;
}
</style>
