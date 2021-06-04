<template>
  <div class="wrap">
    <div class="row content-top no-gutters">
      <div class="col-5" style="overflow: hidden">
        <img :src="require('@/assets/images/sea.jpg')" class="big-image" />
      </div>
      <div class="col text-section">
        <div class="row align-items-center text-left ml-5 mb-5">
          <div class="keywords-container" style="position: absolute; left: 0; transform: translateX(-60%)">
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
          <div class="big-letters">01</div>
          <div class="text-title">Le concept<br />c'est vous !</div>
        </div>
        <div class="row" style="margin-bottom: 2rem; padding-bottom: 3rem; border-bottom: 1px dashed #292f33">
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
        <div class="inline-infos d-flex align-items-center">
          <div class="mr-4">
            <span class="inline-infos__initial-element"
              >Heaven trip <br />
              c'est :</span
            >
          </div>
          <div class="inline-infos__item">
            <InlineSvg :src="require('@/assets/svg/globe.svg')" height="40" class="inline-infos__item__picto" />
            <span class="inline-infos__item__text"
              >3 ans de <br />
              préparation</span
            >
          </div>
          <div class="inline-infos__item">
            <InlineSvg :src="require('@/assets/svg/globe.svg')" height="40" class="inline-infos__item__picto" />
            <span class="inline-infos__item__text"
              >263 833 cafés<br />
              intensité "8"</span
            >
          </div>
          <div class="inline-infos__item">
            <InlineSvg :src="require('@/assets/svg/globe.svg')" height="40" class="inline-infos__item__picto" />
            <span class="inline-infos__item__text"
              >Ouverture <br />
              Août 2021</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="row content-bottom no-gutters">
      <div class="slider-buttons d-flex flex-column justify-content-center align-items-center">
        <div @click="slideLeft" style="margin-bottom: 2rem; transform: rotate(90deg)">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" viewBox="0 0 40 40" fill="#fff">
            <g id="Calque_2" data-name="Calque 2">
              <g id="Calque_1-2" data-name="Calque 1">
                <path id="PICTO_ARROW_RIGHT_1" data-name="PICTO ARROW RIGHT 1" d="M23.56,14.74,17,21.27l6.6,6.53-2,2-8.64-8.53,8.64-8.54Z" />
                <path d="M5.52,9.38l.08-.09-.51-.52L5,8.87A18.48,18.48,0,0,0,31.13,35l.1-.08-.52-.52-.09.08A17.75,17.75,0,0,1,5.52,9.38Z" />
                <path d="M24.27.53A20.22,20.22,0,0,0,8.93,3.08a20.77,20.77,0,0,0-3.44,2.7l-.36.35.35.35,2.41,2.4.34.34.34-.33A16.13,16.13,0,0,1,11.25,6.8,16,16,0,0,1,30.93,9a16.6,16.6,0,0,1,2.27,2.86,15.94,15.94,0,0,1-2.09,19.53l-.33.34.34.34,2.4,2.41.35.35.35-.36a20.32,20.32,0,0,0-9.95-34Z" />
              </g>
            </g>
          </svg>
        </div>
        <div @click="slideRight" style="transform: rotate(90deg)">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" viewBox="0 0 40 40" fill="#fff">
            <g id="Calque_2" data-name="Calque 2">
              <g id="Calque_1-2" data-name="Calque 1">
                <path id="PICTO_ARROW_RIGHT_1" data-name="PICTO ARROW RIGHT 1" d="M16.44,25.26,23,18.73l-6.6-6.53,2-2,8.64,8.53-8.64,8.54Z" />
                <path d="M34.48,30.62l-.08.09.51.52.09-.1A18.48,18.48,0,0,0,8.87,5l-.1.08.52.52.09-.08a17.75,17.75,0,0,1,25.1,25.09Z" />
                <path
                  d="M15.73,39.47a20.22,20.22,0,0,0,15.34-2.55,20.77,20.77,0,0,0,3.44-2.7l.36-.35-.35-.35-2.41-2.4-.34-.34-.34.33a16.13,16.13,0,0,1-2.68,2.09A16,16,0,0,1,9.07,31,16.6,16.6,0,0,1,6.8,28.11,15.94,15.94,0,0,1,8.89,8.58l.33-.34L8.88,7.9,6.48,5.49l-.35-.35-.35.36a20.32,20.32,0,0,0,10,34Z"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div class="col-6 d-flex align-items-center justify-content-end step px-3">
        <span class="step-number">02</span>
        <span class="step-descr">Du sur-mesure tout compris</span>
        <div class="step-line"></div>
      </div>
      <div class="col-5" style="overflow: hidden">
        <img fluid :src="require('@/assets/images/sea.jpg')" class="small-image" />
      </div>
      <div class="fg-1 social-networks d-flex flex-column justify-content-center">
        <InlineSvg :src="require('@/assets/svg/facebook-light.svg')" height="40" class="mb-4" />
        <InlineSvg :src="require('@/assets/svg/instagram-light.svg')" height="40" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavConcept'
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
  max-height: 83vh;
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
