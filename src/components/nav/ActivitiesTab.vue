<template>
  <div class="container flex-column align-items-center h-100" v-if="loaded">
    <div v-for="category in sportCategories" :key="category" class="sports-block" v-show="category.name === activeCategory">
      <div class="row no-gutters align-items-center justify-content-start py-4 my-xl-3">
        <div v-for="(sport, index) in category.sports.slice(0, 3)" :key="sport" class="col-3" :class="[category.sports.length === 1 && index === 0 ? 'offset-3' : '', category.sports.length === 2 && index === 0 ? 'offset-1' : '']">
          <svg @mouseenter="animateSvg('enter', $event)" @mouseleave="animateSvg('leave', $event)" xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 0 100 100">
            <g id="Calque_2" data-name="Calque 2">
              <g id="Calque_1-2" data-name="Calque 1">
                <path fill="#d82558" d="M48.37,0A52.19,52.19,0,0,0,15.62,10.85l7.63,7.61A41.66,41.66,0,0,1,77.14,22.9a41.48,41.48,0,0,1,4.34,53.68l7.61,7.6A52.26,52.26,0,0,0,48.37,0Z" />
                <path xmlns="http://www.w3.org/2000/svg" fill="white" d="M76.11,88.8a46.3,46.3,0,0,1-61.37-3.52,46,46,0,0,1-3.49-61.22l-.87-.88a47.22,47.22,0,0,0,3.49,63A47.52,47.52,0,0,0,77,89.67Z" />
              </g>
            </g>
            <InlineSvg v-if="sport.picto !== null" :src="require(`@/assets/svg/${sport.picto}.svg`)" viewBox="-12 -14 50 50" fill="white" />
          </svg>
          <div class="d-inline-block sport-name ml-2">{{ sport.name }}</div>
        </div>
      </div>
      <div class="row no-gutters align-items-center justify-content-start py-4 my-xl-3" v-if="category.sports.length > 3">
        <div v-for="sport in category.sports.slice(3, 6)" :key="sport" class="col-3">
          <svg @mouseenter="animateSvg('enter', $event)" @mouseleave="animateSvg('leave', $event)" xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 0 100 100">
            <g id="Calque_2" data-name="Calque 2">
              <g id="Calque_1-2" data-name="Calque 1">
                <path fill="#d82558" d="M48.37,0A52.19,52.19,0,0,0,15.62,10.85l7.63,7.61A41.66,41.66,0,0,1,77.14,22.9a41.48,41.48,0,0,1,4.34,53.68l7.61,7.6A52.26,52.26,0,0,0,48.37,0Z" />
                <path xmlns="http://www.w3.org/2000/svg" fill="white" d="M76.11,88.8a46.3,46.3,0,0,1-61.37-3.52,46,46,0,0,1-3.49-61.22l-.87-.88a47.22,47.22,0,0,0,3.49,63A47.52,47.52,0,0,0,77,89.67Z" />
              </g>
            </g>
            <InlineSvg v-if="sport.picto !== null" :src="require(`@/assets/svg/${sport.picto}.svg`)" viewBox="-12 -14 50 50" fill="white" />
          </svg>
          <div class="d-inline-block sport-name ml-2">{{ sport.name }}</div>
        </div>
      </div>
      <div class="row no-gutters align-items-center justify-content-start py-4" v-if="category.sports.length > 6">
        <div v-for="sport in category.sports.slice(6)" :key="sport" class="col-3">
          <svg @mouseenter="animateSvg('enter', $event)" @mouseleave="animateSvg('leave', $event)" xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 0 100 100">
            <g id="Calque_2" data-name="Calque 2">
              <g id="Calque_1-2" data-name="Calque 1">
                <path fill="#d82558" d="M48.37,0A52.19,52.19,0,0,0,15.62,10.85l7.63,7.61A41.66,41.66,0,0,1,77.14,22.9a41.48,41.48,0,0,1,4.34,53.68l7.61,7.6A52.26,52.26,0,0,0,48.37,0Z" />
                <path xmlns="http://www.w3.org/2000/svg" fill="white" d="M76.11,88.8a46.3,46.3,0,0,1-61.37-3.52,46,46,0,0,1-3.49-61.22l-.87-.88a47.22,47.22,0,0,0,3.49,63A47.52,47.52,0,0,0,77,89.67Z" />
              </g>
            </g>
            <InlineSvg v-if="sport.picto !== null" :src="require(`@/assets/svg/${sport.picto}.svg`)" viewBox="-12 -14 50 50" fill="white" />
          </svg>
          <div class="d-inline-block sport-name ml-2">{{ sport.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'ActivitiesTab',
  data() {
    return {
      imgSrc: '',
      loaded: false,
      clickedMultiActivity: false,
      sportCategories: [],
      activeCategory: 'Vent & mer',
      svgAnim: null
      // windAndWater: '',
      // mountain: '',
      // walk: '',
      // multiActivities: '',
      // wellNess: '',
      // snow: ''
    }
  },
  methods: {
    addSportPicto(svg) {},
    animateSvg(type, event) {
      let picto = event.target
      let sportName = picto.parentElement.querySelector('.sport-name')

      if (type === 'enter') {
        gsap
          .timeline({ defaults: { duration: 0.3 } })
          .to(picto, { scale: '1.2' })
          .to(sportName, { autoAlpha: 0 }, '<')
      }
      if (type === 'leave') {
        gsap
          .timeline({ defaults: { duration: 0.3 } })
          .to(picto, { scale: '1' })
          .to(sportName, { autoAlpha: 1 }, '<')
      }
    }
  },
  created() {
    this.$axios.get('/sport-categories').then((res) => {
      this.sportCategories = res.data.sportCategories
      this.$emit('fetched-categ', res.data.sportCategories)
      this.loaded = true
      console.log(res.data.sportCategories)
    })

    // // working contentful auth
    // const client = this.$contentfulManagement.createClient({
    //   accessToken: 'QJST-plHn1kmliJnkzNZebXG0wecPQwtxH1hg9YDYek'
    // })
    // // client.getAssets().then((res) => (this.imgSrc = `https:${res.items[0].fields.file.url}?q=80`))

    // client
    //   .getSpace('4nx5joo7rzn4')
    //   .then((space) =>
    //     space.createAssetFromFiles({
    //       fields: {
    //         title: {
    //           'fr-FR': 'Avatar titre'
    //         },
    //         description: {
    //           'fr-FR': 'Avatar description'
    //         },
    //         file: {
    //           'fr-FR': {
    //             contentType: 'image/jpeg',
    //             fileName: 'monavatar.jpg',
    //             file: '<svg><path fill="red" d="M50 50h150v50H50z"/></svg>'
    //           }
    //         }
    //       }
    //     })
    //   )
    //   .then((asset) => asset.processForAllLocales())
    //   .then((asset) => asset.publish())
    //   .catch(console.error)
  }
}
</script>

<style scoped>
@media (max-width: 2000px) {
  .container {
    max-width: 75vw;
  }
}
@media (max-width: 1800px) {
  .container {
    max-width: 90vw;
  }
}
@media (max-width: 1500px) {
  .container {
    max-width: 100vw;
  }
}

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
