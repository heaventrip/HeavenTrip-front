<template>
  <div class="block d-flex align-items-center justify-content-between text-uppercase" :class="pClass" :style="[borderStyle, paddingStyle, widthStyle]">
    <div class="d-flex align-items-center" v-for="info in pInfos" :key="info">
      <InlineSvg v-if="pIcon" :src="require(`@/assets/svg/${pIcon}.svg`)" :fill="pColor" />
      <span class="block__text-content">{{ info }}</span>
    </div>
  </div>
  <div v-if="pBorder" class="half-border"></div>
</template>

<script>
export default {
  name: 'InlineProductInfos',
  props: ['infos', 'borderTop', 'borderBottom', 'px', 'py', 'extra-class', 'color', 'icon', 'width'],
  data() {
    return {
      pIcon: this.icon,
      pColor: this.color,
      pClass: this.extraClass
    }
  },
  computed: {
    pInfos() {
      return this.infos.filter((val) => val) // remove undefined values
    },
    display() {
      return this.divider === true ? 'background-color: rgba(250, 250, 250, 0.35);' : 'display: none;'
    },
    borderTopStyle() {
      return this.pBorderTop === true ? 'border-top: 1px solid rgba(250, 250, 250, 0.35);' : 'border: none;'
    },
    borderBottomStyle() {
      return this.pBorderBottom === true ? 'border-bottom: 1px solid rgba(250, 250, 250, 0.35);' : 'border: none;'
    },
    paddingStyle() {
      return `padding: ${this.py || '1.5rem'} ${this.px || '0'};`
    },
    widthStyle() {
      return `width: ${this.width};`
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
  line-height: 2;
  width: 100%;
  height: min-content;
}
.block__text-content {
  margin-left: 0.6rem;
  display: inline-block;
  vertical-align: middle;
  font-size: 0.8rem;
  letter-spacing: 0.13rem;
}
</style>
