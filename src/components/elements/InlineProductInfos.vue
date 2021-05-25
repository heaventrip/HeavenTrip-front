<template>
  <div class="block d-flex align-items-center justify-content-start py-4 text-uppercase">
    <div v-for="(info, key) in pInfos" :key="info">
      <InlineSvg :src="require('@/assets/svg/globe.svg')" fill="white" />
      <span class="block__text-content">{{ info }}</span>
      <span v-if="key != pInfos.length - 1" class="block__divider"></span>
    </div>
  </div>
  <div class="half-border"></div>
</template>

<script>
export default {
  name: 'InlineProductInfos',
  props: ['infos'],
  computed: {
    pInfos() {
      return this.infos.filter((val) => val) // remove undefined values
    }
  }
}
</script>

<style scoped>
.half-border {
  width: 50%;
  height: 1px;
  background: rgba(250, 250, 250, 0.35);
}
.block {
  border-top: 1px solid rgba(250, 250, 250, 0.35);
}
.block__divider {
  display: inline-block;
  vertical-align: middle;
  height: 1rem;
  width: 1px;
  background-color: #292f33;
  margin: 0 1rem;
}
.block__text-content {
  margin-left: 1rem;
  display: inline-block;
  vertical-align: middle;
}
</style>
