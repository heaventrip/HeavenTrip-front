<template>
  <div class="container flex-column align-items-center h-100" v-if="loaded">
    <div v-for="category in sportCategories" :key="category" class="sports-block" v-show="category.name === activeCategory">
      <div class="row no-gutters align-items-center justify-content-start py-3 my-xl-3">
        <div v-for="(sport, index) in category.sports.slice(0, 3)" :key="sport" class="col-3" :class="[category.sports.length === 1 && index === 0 ? 'offset-3' : '', category.sports.length === 2 && index === 0 ? 'offset-1' : '']">
          <InlineSvg :src="require('@/assets/svg/main-circle.svg')" height="100" />
          <span class="sport-name">{{ sport.name }}</span>
        </div>
      </div>
      <div class="row no-gutters align-items-center justify-content-start py-3 my-xl-3" v-if="category.sports.length > 3">
        <div v-for="sport in category.sports.slice(3, 6)" :key="sport" class="col-3">
          <InlineSvg :src="require('@/assets/svg/main-circle.svg')" height="100" />
          <span class="sport-name">{{ sport.name }}</span>
        </div>
      </div>
      <div class="row no-gutters align-items-center justify-content-start py-3" v-if="category.sports.length > 6">
        <div v-for="sport in category.sports.slice(6)" :key="sport" class="col-3">
          <InlineSvg :src="require('@/assets/svg/main-circle.svg')" height="100" />
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
