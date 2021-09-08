<template>
  <div class="header">
    <TheNavSticky />
  </div>
  <div class="legal__tabs-container">
    <div
      class="legal__tab-button"
      :class="{ 'legal__tab-button--active': hoveredTab === 'sales' || activeTab === 'sales' }"
      @mouseleave="hoveredTab = ''"
      @mouseenter="hoveredTab = 'sales'"
      @click="activeTab = 'sales'"
    >
      Conditions générales de vente
    </div>
    <div
      class="legal__tab-button"
      :class="{ 'legal__tab-button--active': hoveredTab === 'use' || activeTab === 'use' }"
      @mouseleave="hoveredTab = ''"
      @mouseenter="hoveredTab = 'use'"
      @click="activeTab = 'use'"
    >
      Conditions générales d'utilisation
    </div>
    <div class="legal__tab-button">Infos Covid-19</div>
    <div class="legal__tab-button">Faq</div>
  </div>
  <div class="legal__tabs-content">
    <transition name="fade" mode="out-in">
      <LegalUse v-if="activeTab === 'use'" />
      <LegalSales v-else-if="activeTab === 'sales'" />
    </transition>
  </div>
  <Footer />
</template>
<script>
import TheNavSticky from '@/components/nav/TheNavSticky'
import LegalUse from '@/components/legal/LegalUse.vue'
import LegalSales from '@/components/legal/LegalSales.vue'
import Footer from '@/components/footer/Footer'

export default {
  name: 'Legal',
  components: {
    TheNavSticky,
    LegalUse,
    LegalSales,
    Footer
  },
  data() {
    return {
      activeTab: 'sales',
      hoveredTab: ''
    }
  }
}
</script>

<style scoped>
.border {
  border-bottom: 1px solid #292f33;
}
.header {
  height: 70px;
}
.legal__tabs-container {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100vw;
  height: 120px;
  box-shadow: 0px 1px 2px #f1f1f1;
}
.legal__tabs-content {
  margin: 5vh 25vw;
}
.legal__tab-button {
  padding-top: 1rem;
  height: 70%;
  cursor: pointer;
  margin: 0 3rem;
  color: #b4b4b4;
  font-size: 0.875rem;
  font-family: Oswald, sans-serif;
  font-weight: 600;
  text-transform: uppercase;
}
.legal__tab-button--active {
  color: #292f33;
  border-bottom: 1px solid #292f33;
}
</style>
