<template>
  <transition name="fade-fast">
    <div class="container flex-column align-items-center h-100" :key="activeCategory" v-if="loaded">
      <div v-for="category in sportCategories" :key="category" class="sports-block" v-show="category.name === activeCategory">
        <div class="row no-gutters align-items-center justify-content-start my-xl-3" :class="[$windowWidth > 1440 ? 'py-4' : 'py-1']">
          <div v-for="(sport, index) in category.sports.slice(0, 3)" :key="sport" class="col-3" :class="[category.sports.length === 1 && index === 0 ? 'offset-3' : '', category.sports.length === 2 && index === 0 ? 'offset-1' : '']">
            <svg @mouseenter="animateSvg('enter', $event)" @mouseleave="animateSvg('leave', $event)" xmlns="http://www.w3.org/2000/svg" :height="$windowWidth > 1440 ? '150' : '120'" viewBox="0 0 100 100">
              <g xmlns="http://www.w3.org/2000/svg" id="Calque_1-2" data-name="Calque 1">
                <path d="M60.10836,71.68724A37.4294,37.4294,0,0,1,7.91746,19.49633l-.72386-.72385A38.44534,38.44534,0,0,0,38.41718,79.61064a38.14142,38.14142,0,0,0,22.41533-7.19925Z" fill="#fff" />
                <path d="M67.56626,12.01851a41.08521,41.08521,0,0,0-56.34375-1.62988l-.49415.44043,4.42725,4.42675.43994-.38574A34.80862,34.80862,0,0,1,64.71518,63.99019l-.38623.44043,4.42676,4.42578.43994-.49414A41.08277,41.08277,0,0,0,67.56626,12.01851Z" fill="#d82558" />
              </g>
            </svg>
            <InlineSvg v-if="sport.picto !== null" :src="require(`@/assets/svg/${sport.picto}.svg`)" class="svg-activity" height="80" :viewBox="$windowWidth > 1440 ? '70 -26 47 50' : '58 -19 47 50'" fill="white" />
            <div class="d-inline-block sport-name">{{ sport.name }}</div>
          </div>
        </div>
        <div class="row no-gutters align-items-center justify-content-start my-xl-3" :class="[$windowWidth > 1440 ? 'py-4' : 'py-1']" v-if="category.sports.length > 3">
          <div v-for="sport in category.sports.slice(3, 6)" :key="sport" class="col-3">
            <svg @mouseenter="animateSvg('enter', $event)" @mouseleave="animateSvg('leave', $event)" xmlns="http://www.w3.org/2000/svg" :height="$windowWidth > 1440 ? '150' : '120'" viewBox="0 0 100 100">
              <g xmlns="http://www.w3.org/2000/svg" id="Calque_1-2" data-name="Calque 1">
                <path d="M60.10836,71.68724A37.4294,37.4294,0,0,1,7.91746,19.49633l-.72386-.72385A38.44534,38.44534,0,0,0,38.41718,79.61064a38.14142,38.14142,0,0,0,22.41533-7.19925Z" fill="#fff" />
                <path d="M67.56626,12.01851a41.08521,41.08521,0,0,0-56.34375-1.62988l-.49415.44043,4.42725,4.42675.43994-.38574A34.80862,34.80862,0,0,1,64.71518,63.99019l-.38623.44043,4.42676,4.42578.43994-.49414A41.08277,41.08277,0,0,0,67.56626,12.01851Z" fill="#d82558" />
              </g>
            </svg>
            <InlineSvg v-if="sport.picto !== null" :src="require(`@/assets/svg/${sport.picto}.svg`)" class="svg-activity" height="80" :viewBox="$windowWidth > 1440 ? '70 -26 47 50' : '58 -19 47 50'" fill="white" />
            <div class="d-inline-block sport-name">{{ sport.name }}</div>
          </div>
        </div>
        <div class="row no-gutters align-items-center justify-content-start my-xl-3" :class="[$windowWidth > 1440 ? 'py-4' : 'py-1']" v-if="category.sports.length > 6">
          <div v-for="sport in category.sports.slice(6)" :key="sport" class="col-3">
            <svg @mouseenter="animateSvg('enter', $event)" @mouseleave="animateSvg('leave', $event)" xmlns="http://www.w3.org/2000/svg" :height="$windowWidth > 1440 ? '150' : '120'" viewBox="0 0 100 100">
              <g xmlns="http://www.w3.org/2000/svg" id="Calque_1-2" data-name="Calque 1">
                <path d="M60.10836,71.68724A37.4294,37.4294,0,0,1,7.91746,19.49633l-.72386-.72385A38.44534,38.44534,0,0,0,38.41718,79.61064a38.14142,38.14142,0,0,0,22.41533-7.19925Z" fill="#fff" />
                <path d="M67.56626,12.01851a41.08521,41.08521,0,0,0-56.34375-1.62988l-.49415.44043,4.42725,4.42675.43994-.38574A34.80862,34.80862,0,0,1,64.71518,63.99019l-.38623.44043,4.42676,4.42578.43994-.49414A41.08277,41.08277,0,0,0,67.56626,12.01851Z" fill="#d82558" />
              </g>
            </svg>
            <InlineSvg v-if="sport.picto !== null" :src="require(`@/assets/svg/${sport.picto}.svg`)" class="svg-activity" height="80" :viewBox="$windowWidth > 1440 ? '70 -26 47 50' : '58 -19 47 50'" fill="white" />
            <div class="d-inline-block sport-name">{{ sport.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
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
          .to(picto, { scale: '1.1' })
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
    max-width: 100vw;
  }
}
@media (max-width: 1800px) {
  .container {
    max-width: 100vw;
  }
}
@media (max-width: 1500px) {
  .container {
    max-width: 100vw;
  }
}
.svg-activity {
  overflow: unset;
  position: absolute;
}

.sports-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  flex-grow: 1;
  padding-left: calc(100% / 4);
  position: relative;
  bottom: 5%;
}

.container {
  flex-wrap: nowrap !important;
}
.sport-name {
  font-size: 1.2rem;
  letter-spacing: 0.04rem;
  padding-bottom: 0.6rem;
  vertical-align: text-bottom;
}
/* md breakpoint */
@media (max-width: 1600px) {
  .nav-item {
    padding-top: 4px !important;
    padding-bottom: 4px !important;
  }
}
</style>
