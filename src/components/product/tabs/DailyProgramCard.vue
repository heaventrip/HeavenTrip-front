<template>
  <div class="daily-program-card">
    <div class="header">
      <h5 class="title shadow-style" :class="[!(transports && transports.length > 0) ? 'without-transports' : '']">{{ title }}</h5>
      <div v-if="transports && transports.length > 0" class="transports shadow-style">
        <ul>
          <li v-for="transport in transports" :key="transport">
            <img fluid :src="require('@/assets/images/svg/PICTO_PLANE_ARRIVAL.svg')" />
            {{ transport.text }} <strong>{{ transport.strongText }}</strong>

            <!--<li>
            <img fluid :src="require('@/assets/images/svg/PICTO_PLANE_ARRIVAL.svg')" />
            VOL pour <strong>HURGHADA</strong>
          </li>
          <li>
            <img fluid :src="require('@/assets/images/svg/Picto_transfert_navette.svg')" />Transferts VERS EL GOUNA :
            <strong>18H 19H 20H</strong>
          </li>-->
          </li>
        </ul>
      </div>
    </div>
    <div class="content shadow-style">
      <div class="principal-content">
        <h6>{{ principalTitle }}</h6>
        <p>{{ principalContent }}</p>
      </div>
      <div v-if="activeHiddenContent" class="hidden-content">
        <h6>{{ hiddenTitle }}</h6>
        <p>{{ hiddenContent }}</p>
      </div>
      <a v-if="hiddenContent && hiddenTitle" @click="toggleHiddenContent()">{{ !activeHiddenContent ? 'Afficher le reste de la journée…' : 'Réduire' }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DailyProgramCard',
  props: ['title', 'transports', 'principalContent', 'hiddenContent', 'principalTitle', 'hiddenTitle'],
  data() {
    return {
      activeHiddenContent: false
    }
  },
  methods: {
    toggleHiddenContent() {
      this.activeHiddenContent = !this.activeHiddenContent
    }
  }
}
</script>

<style>
.daily-program-card {
  letter-spacing: 0.03rem;
  font-size: 0.844rem;
  color: black;
}
.daily-program-card .header {
  display: flex;
  margin-bottom: 7px;
}
.daily-program-card .header .title {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.875rem;
  margin: initial;
  padding: 20px;
  background-color: rgb(255, 255, 255);
}
.daily-program-card .header .transports {
  margin-left: 7px;
  display: flex;
  flex-grow: 1;
  background-color: rgb(255, 255, 255);
}
.daily-program-card .header .transports ul {
  margin: auto;
  margin-right: 40px;
  align-self: center;
  padding: initial;
  display: flex;
}
.daily-program-card .header .transports li {
  text-transform: uppercase;
  font-weight: 400;
  font-size: 0.844rem;
  list-style: none;
  margin-left: 60px;
}
.daily-program-card .header .transports li img {
  margin-right: 10px;
  margin-bottom: 4px;
}
.daily-program-card .content {
  padding: 30px 40px 25px;
  background-color: rgb(255, 255, 255);
}
.daily-program-card .content .principal-content {
  margin-bottom: 35px;
}
.daily-program-card .content h6 {
  text-transform: uppercase;
  font-size: 0.844rem;
}
.daily-program-card .content p {
  font-size: 0.844rem;
}
.daily-program-card .content a {
  -moz-user-select: none; /* Firefox */
  -webkit-user-select: none; /* Chrome, Safari, Opéra depuis la version 15 */
  -ms-user-select: none; /* Internet explorer depuis la version 10 et Edge */
  user-select: none; /* Propriété standard */
  cursor: pointer;
  color: #d9345a;
}

.without-transports {
  width: 100%;
  text-align: center;
}
.shadow-style {
  box-shadow: 0 0 2px #ebebeb;
}
</style>
