<template>
  <div class="container">
    <h4 class="nav-head m-0">
      <a href="#header_nav" class="text-reset pr-3"><i class="fas fa-chevron-left"></i></a>
      . destination
    </h4>
    <ul class="list-unstyled wrapper-list d-flex flex-wrap" v-if="continents && franceCountry">
      <li v-for="continent in continents" :key="continent">
        <h4 class="wrapper-list-head">{{ continent.name }}</h4>
        <div v-for="country in continent.countries" :key="country" :class="[country.name === 'France' ? 'd-none' : '']">
          <h5 class="wrapper-list-subhead">{{ country.name }}</h5>
          <ul class="list-unstyled wrapper-innerlist pb-5">
            <li v-for="spot in country.spots" :key="spot">
              <router-link :to="{ name: 'Search', query: { spot: spot.id } }"> <i class="fa fa-chevron-right arrow-left"></i>{{ spot.name }} </router-link>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <h4 class="wrapper-list-head">{{ franceCountry.name }}</h4>
        <div v-for="region in franceCountry.regions" :key="region">
          <h5 class="wrapper-list-subhead">{{ region.name }}</h5>
          <ul class="list-unstyled wrapper-innerlist pb-5">
            <li v-for="spot in region.spots" :key="spot">
              <router-link :to="{ name: 'Search', query: { spot: spot.id } }"> <i class="fa fa-chevron-right arrow-left"></i>{{ spot.name }} </router-link>
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
      continents: [],
      franceCountry: null
    }
  },
  created() {
    this.$axios.get('/continents').then((res) => (this.continents = res.data.continents))
    this.$axios.get('/countries', { params: { name: 'France' } }).then((res) => (this.franceCountry = res.data.country))
  }
}
</script>

<style scoped>
.destination-column {
  margin-right: 0 !important;
}
.container {
  justify-content: center;
  height: 70%;
}
.wrapper-innerlist {
  line-height: 1.1;
}
.wrapper-list-head {
  padding-bottom: 1rem !important;
  margin-bottom: 3rem !important;
  font-size: 1rem !important;
  opacity: 50%;
}
</style>
