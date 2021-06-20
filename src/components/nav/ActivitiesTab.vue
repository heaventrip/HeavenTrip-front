<template>
  <div class="container flex-column align-items-center h-100" v-if="loaded">
    <div v-for="category in sportCategories" :key="category" class="sports-block" v-show="category.name === activeCategory">
      <div class="row no-gutters align-items-center justify-content-start py-3 my-xl-3">
        <div v-for="(sport, index) in category.sports.slice(0, 3)" :key="sport" class="col-3" :class="[category.sports.length === 1 && index === 0 ? 'offset-3' : '', category.sports.length === 2 && index === 0 ? 'offset-1' : '']">
          <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 0 100 100">
            <g id="Calque_2" data-name="Calque 2">
              <g id="Calque_1-2" data-name="Calque 1">
                <path fill="#d82558" d="M48.37,0A52.19,52.19,0,0,0,15.62,10.85l7.63,7.61A41.66,41.66,0,0,1,77.14,22.9a41.48,41.48,0,0,1,4.34,53.68l7.61,7.6A52.26,52.26,0,0,0,48.37,0Z" />
                <path xmlns="http://www.w3.org/2000/svg" fill="white" d="M76.11,88.8a46.3,46.3,0,0,1-61.37-3.52,46,46,0,0,1-3.49-61.22l-.87-.88a47.22,47.22,0,0,0,3.49,63A47.52,47.52,0,0,0,77,89.67Z" />
              </g>
            </g>
            <InlineSvg v-if="sport.picto !== null" :src="require(`@/assets/svg/${sport.picto}.svg`)" viewBox="-12 -14 50 50" fill="white" />
          </svg>
          <span class="sport-name">{{ sport.name }}</span>
        </div>
      </div>
      <div class="row no-gutters align-items-center justify-content-start py-3 my-xl-3" v-if="category.sports.length > 3">
        <div v-for="sport in category.sports.slice(3, 6)" :key="sport" class="col-3">
          <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 0 100 100">
            <g id="Calque_2" data-name="Calque 2">
              <g id="Calque_1-2" data-name="Calque 1">
                <path fill="#d82558" d="M48.37,0A52.19,52.19,0,0,0,15.62,10.85l7.63,7.61A41.66,41.66,0,0,1,77.14,22.9a41.48,41.48,0,0,1,4.34,53.68l7.61,7.6A52.26,52.26,0,0,0,48.37,0Z" />
                <path xmlns="http://www.w3.org/2000/svg" fill="white" d="M76.11,88.8a46.3,46.3,0,0,1-61.37-3.52,46,46,0,0,1-3.49-61.22l-.87-.88a47.22,47.22,0,0,0,3.49,63A47.52,47.52,0,0,0,77,89.67Z" />
              </g>
            </g>
            <InlineSvg v-if="sport.picto !== null" :src="require(`@/assets/svg/${sport.picto}.svg`)" viewBox="-12 -14 50 50" fill="white" />
          </svg>
          <span class="sport-name">{{ sport.name }}</span>
        </div>
      </div>
      <div class="row no-gutters align-items-center justify-content-start py-3" v-if="category.sports.length > 6">
        <div v-for="sport in category.sports.slice(6)" :key="sport" class="col-3">
          <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 0 100 100">
            <g id="Calque_2" data-name="Calque 2">
              <g id="Calque_1-2" data-name="Calque 1">
                <path fill="#d82558" d="M48.37,0A52.19,52.19,0,0,0,15.62,10.85l7.63,7.61A41.66,41.66,0,0,1,77.14,22.9a41.48,41.48,0,0,1,4.34,53.68l7.61,7.6A52.26,52.26,0,0,0,48.37,0Z" />
                <path xmlns="http://www.w3.org/2000/svg" fill="white" d="M76.11,88.8a46.3,46.3,0,0,1-61.37-3.52,46,46,0,0,1-3.49-61.22l-.87-.88a47.22,47.22,0,0,0,3.49,63A47.52,47.52,0,0,0,77,89.67Z" />
              </g>
            </g>
            <InlineSvg v-if="sport.picto !== null" :src="require(`@/assets/svg/${sport.picto}.svg`)" viewBox="-12 -14 50 50" fill="white" />
          </svg>
          <span class="sport-name">{{ sport.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActivitiesTab',
  data() {
    return {
      loaded: false,
      clickedMultiActivity: false,
      sportCategories: [],
      activeCategory: 'Vent & mer'
      // windAndWater: '',
      // mountain: '',
      // walk: '',
      // multiActivities: '',
      // wellNess: '',
      // snow: ''
    }
  },
  methods: {
    addSportPicto(svg) {}
  },
  created() {
    this.$axios.get('/sport-categories').then((res) => {
      this.sportCategories = res.data.sportCategories
      this.$parent.sportCategories = res.data.sportCategories
      this.loaded = true
    })
  }
}
</script>

<style scoped>
.sports-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  flex-grow: 1;
  padding-left: calc(100% / 4);
  position: relative;
  bottom: 10%;
}

.container {
  flex-wrap: nowrap !important;
  padding-bottom: 12vh;
}
.sport-name {
  padding-left: 1rem;
}
/* md breakpoint */
@media (max-width: 1600px) {
  .nav-item {
    padding-top: 4px !important;
    padding-bottom: 4px !important;
  }
}
</style>
