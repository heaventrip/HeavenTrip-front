<template>
  <div class="search row">
    <div class="search-bar col-12 col-sm-10 col-lg-9 mx-auto rounded p-0" style="position: relative; bottom: 50px; border-radius: 10px; box-shadow: 0 0 0px 6px rgba(0, 0, 0, 0.09); background-color: rgba(0, 0, 0, 0.09); max-width: 1200px">
      <div class="bg-white d-flex centered-div">
        <div class="d-flex align-items-center flex-1 search-input-container" style="padding: 1.4rem 2rem 1.6rem 2rem">
          <InlineSvg class="search-bar__filter__svg" :src="require('@/assets/svg/lens.svg')" height="22" />
          <input v-model="freeSearch" class="form-control p-0 search-input ml-3" type="text" name="" placeholder="Ma recherche manuelle" />
        </div>
        <ul class="list-unstyled mb-0 search-list d-none d-lg-inline-flex ml-auto flex-2 w-100">
          <li class="main-filter activity-filter" style="flex-grow: 0.9">
            <div class="position-relative multi-select-filter">
              <div style="position: absolute; top: 50%; transform: translateY(-50%); text-align: center; width: 100%">
                <InlineSvg class="search-bar__filter__svg" :src="require('@/assets/svg/activity-search.svg')" height="22" />
                <span class="search-bar__filter__name">Activités</span>
              </div>
              <Multiselect class="activity-multiselect" ref="activityMultiselect" @open="setMultiSelect('activity')" @close="setBgWhite('activity')" v-model="activitySelection.value" v-bind="activitySelection" style="width: 100%">
                <template v-slot:clear><div></div></template>
              </Multiselect>
            </div>
          </li>
          <li class="main-filter country-filter" style="flex-grow: 0.8">
            <div class="position-relative multi-select-filter">
              <div style="position: absolute; top: 50%; transform: translateY(-50%); text-align: center; width: 100%">
                <InlineSvg class="search-bar__filter__svg" :src="require('@/assets/svg/country-search.svg')" height="22" />
                <span v-if="countrySelection.value" class="search-bar__filter__name">{{ countrySelection.value }}</span>
                <span v-else class="search-bar__filter__name">Pays</span>
              </div>
              <Multiselect class="country-multiselect" ref="countryMultiselect" @open="setMultiSelect('country')" @close="setBgWhite('country')" v-model="countrySelection.value" v-bind="countrySelection" style="width: 100%">
                <template v-slot:clear><div></div></template>
              </Multiselect>
            </div>
          </li>
          <li class="main-filter month-filter" style="flex-grow: 1">
            <div class="position-relative multi-select-filter">
              <div style="position: absolute; top: 50%; transform: translateY(-50%); text-align: center; width: 100%; padding-right: 1rem">
                <InlineSvg class="search-bar__filter__svg pl-3" :src="require('@/assets/svg/date-search.svg')" height="22" />
                <span class="search-bar__filter__name">Mois de départ</span>
              </div>
              <Multiselect class="month-multiselect" ref="monthMultiselect" @open="setMultiSelect('month')" @close="setBgWhite('month')" v-model="monthSelection.value" v-bind="monthSelection" style="width: 100%">
                <template v-slot:clear><div></div></template>
              </Multiselect>
            </div>
          </li>
        </ul>
        <button class="btn btn-light bg-white text-uppercase search-btn filter-btn px-3 px-sm-4 rounded-right ml-auto border-left d-inline-block d-lg-none">
          <img class="mx-2" fluid :src="require('@/assets/images/mob-1.png')" />
        </button>
        <button @click.prevent="submitSearchForm" class="btn btn-dark text-uppercase search-btn px-3 px-sm-5 rounded-right border-0" style="border-left: 1px solid rgba(255, 255, 255, 0.1) !important">
          <div class="d-none d-lg-inline-block mb-1">rechercher</div>
          <!-- <div style="font-size: 0.8rem; font-weight: 300; text-transform: none">12 résultats</div> -->
        </button>
      </div>
      <div class="tags-container d-flex justify-content-center">
        <Button @click="clearFilters" text="<span style='text-transform: lowercase;'>supprimer tous les filtres</span>" background-color="#7c7c7c" text-color="#fff" style="transform: translateY(3px)" v-if="!!monthSelection.value.length || !!activitySelection.value.length" height="38px" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/elements/Button.vue'
import Multiselect from '@vueform/multiselect'
import { gsap } from 'gsap'

export default {
  name: 'HomeSearch',
  components: {
    Button,
    Multiselect
  },
  data() {
    return {
      freeSearch: '',
      slideUpSearchBar: null,
      monthSelection: {
        hideSelected: false,
        noOptionsText: 'La liste est vide',
        mode: 'tags',
        value: [],
        openDirection: 'top',
        caret: false,
        options: [
          { value: '1', label: 'Janvier' },
          { value: '2', label: 'Février' },
          { value: '3', label: 'Mars' },
          { value: '4', label: 'Avril' },
          { value: '5', label: 'Mai' },
          { value: '6', label: 'Juin' },
          { value: '7', label: 'Juillet' },
          { value: '8', label: 'Août' },
          { value: '9', label: 'Septembre' },
          { value: '10', label: 'Octobre' },
          { value: '11', label: 'Novembre' },
          { value: '12', label: 'Décembre' }
        ],
        createTag: true
      },
      activitySelection: {
        hideSelected: false,
        noOptionsText: 'La liste est vide',
        mode: 'tags',
        value: [],
        openDirection: 'top',
        caret: false,
        options: [],
        createTag: true
      },
      countrySelection: {
        hideSelected: false,
        noOptionsText: 'La liste est vide',
        value: 0,
        openDirection: 'top',
        caret: false,
        options: []
      }
    }
  },
  props: [],
  computed: {
    totalSelectedNb() {
      return this.activitySelection.value.length + this.monthSelection.value.length
    }
  },
  watch: {
    firstName(newVal) {
      this.firstName = newVal
    },
    'activitySelection.value': {
      deep: true,
      handler(val) {
        if (window.scrollY > 25) return

        if (val.length) this.slideUpSearchBar.play()
        else if (!this.monthSelection.value.length) this.slideUpSearchBar.reverse()
      }
    },
    'monthSelection.value': {
      deep: true,
      handler(val) {
        if (window.scrollY > 25) return

        if (val.length) this.slideUpSearchBar.play()
        else if (!this.activitySelection.value.length) this.slideUpSearchBar.reverse()
      }
    }
  },
  methods: {
    submitSearchForm() {
      this.$router.push({ name: 'Search', query: { country: this.countrySelection.value, month: this.monthSelection.value, activity: this.activitySelection.value } })
      // this.$axios
      //   .post('/courses/search', {
      //     q: {
      //       free_search: this.freeSearch,
      //       spot_country_id_eq: this.countrySelection.value,
      //       sports_id_in: this.activitySelection.value,
      //       sessions_month_of_departure_eq: this.monthSelection.value
      //     }
      //   })
      //   .then((res) => console.log(res))
    },
    setMultiSelect(which) {
      this.setBgGrey(which)
      let filterDropdown = document.querySelector(`.${which}-multiselect .multiselect-options`)
      this.$nextTick(function () {
        filterDropdown.scrollTo({ top: filterDropdown.scrollHeight * -1 })
      })
    },
    clearFilters() {
      this.$refs.countryMultiselect.clear()
      this.$refs.monthMultiselect.clear()
      this.$refs.activityMultiselect.clear()
    },
    setBgGrey(filterEl) {
      let element = document.querySelector(`.${filterEl}-filter`)
      element.style.backgroundColor = '#292f33'
      element.style.color = '#fff'
      element.querySelector('.search-bar__filter__svg').style.fill = '#fff'
    },
    setBgWhite(filterEl) {
      let element = document.querySelector(`.${filterEl}-filter`)
      element.style.backgroundColor = '#fff'
      element.style.color = '#292f33'
      element.querySelector('.search-bar__filter__svg').style.fill = '#fff'
    },
    turnBgGrey(el) {
      if (!el.querySelector('.multiselect-options').style.display === 'none') return
      el.style.backgroundColor = '#292f33'
      el.style.borderColor = '#292f33'
      el.style.color = '#fff'
      el.querySelector('.search-bar__filter__svg').style.fill = '#fff'
    },
    turnBgWhite(el) {
      if (!el.querySelector('.multiselect-options').style.display === 'none') return
      el.style.backgroundColor = '#fff'
      el.style.borderColor = '#fff'
      el.style.color = '#292f33'
      el.querySelector('.search-bar__filter__svg').style.fill = '#292f33'
    }
  },
  mounted() {
    this.slideUpSearchBar = gsap.timeline({ paused: true }).to('.search-bar', { y: '-=25', ease: 'power4.inOut' })

    document.querySelectorAll('.multiselect-tags').forEach((tagContainer) => {
      document.querySelector('.tags-container').prepend(tagContainer)
    })
    document.querySelectorAll('.multi-select-filter').forEach((el) => {
      el.addEventListener('mouseenter', (e) => this.turnBgGrey(e.target))
      el.addEventListener('mouseleave', (e) => this.turnBgWhite(e.target))
    })
    this.$axios.get('/countries').then((res) => {
      res.data.countries.forEach((country) => {
        this.countrySelection.options.push({ value: country.id, label: country.name })
      })
    })
    this.$axios.get('/sports').then((res) => {
      res.data.sports.forEach((sport) => {
        this.activitySelection.options.push({ value: sport.id, label: sport.name })
      })
    })
  }
}
</script>

<style scoped>
.multi-select-filter {
  transition: all 0.3s ease;
}
.search-input::placeholder {
  color: #b4b4b4;
  letter-spacing: 0.02rem;
}
.search-bar__filter__name {
  margin-left: 1rem;
  vertical-align: middle;
  font-size: 0.875rem;
}
</style>
