<template>
  <div class="container">
    <!-- <h4 class="nav-head m-0">
      <a href="#header_nav" class="text-reset pr-3"><i class="fas fa-chevron-left"></i></a>
      . destination
    </h4> -->
    <ul class="list-unstyled wrapper-list d-flex flex-wrap">
      <li v-for="continent in continents" :key="continent">
        <h4 class="wrapper-list-head">{{ continent.name }}</h4>
        <div v-for="country in continent.countries" :key="country">
          <h5 class="wrapper-list-subhead">{{ country.name }}</h5>
          <ul class="list-unstyled wrapper-innerlist pb-4">
            <li v-for="spot in country.spots" :key="spot">
              <a href="#"><i class="fa fa-chevron-right arrow-left"></i>{{ spot.name }}</a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DestinationsTab',
  data() {
    return {
      continents: []
    }
  },
  created() {
    // this.$axios.get('/continents').then((res) => (this.continents = res.data.continents))
    this.$axios.get('/continents').then((res) => (this.continents = res.data.continents))
  }
}
</script>

<style scoped>
.container {
  justify-content: center;
  height: 60%;
}
</style>
