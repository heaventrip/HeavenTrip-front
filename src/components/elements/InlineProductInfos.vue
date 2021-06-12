<template>
  <div class="block d-flex align-items-center text-uppercase" :class="[pJustifyContent || 'justify-content-between', pClass]" :style="[borderTopStyle, borderBottomStyle, paddingYStyle, widthStyle]">
    <div class="block__item" v-for="(info, index) in pInfos" :key="info" :style="[index === 0 ? '' : dividerStyle, index === 0 ? '' : paddingLeftStyle, index === pInfos.length - 1 ? '' : paddingRightStyle]">
      <InlineSvg v-if="pIcon" :src="require(`@/assets/svg/${pIcon}.svg`)" :fill="pColor" />
      <span class="block__text-content" :style="[iconMarginStyle, letterSpacingStyle, { color: pColor }, fontWeightStyle]">{{ info }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InlineProductInfos',
  props: ['font-weight', 'infos', 'border-top', 'border-bottom', 'pt', 'pb', 'pr', 'pl', 'extra-class', 'color', 'icon', 'icon-margin', 'width', 'divider', 'justify-content', 'letter-spacing'],
  data() {
    return {
      pIcon: this.icon,
      pColor: this.color,
      pJustifyContent: this.justifyContent,
      pClass: this.extraClass
    }
  },
  computed: {
    pInfos() {
      return this.infos.filter((val) => val) // remove undefined values
    },
    dividerStyle() {
      return this.divider === true ? 'border-left: 1px solid rgba(250, 250, 250, 0.35);' : 'border: none;'
    },
    borderTopStyle() {
      return this.borderTop === true ? 'border-top: 1px solid rgba(250, 250, 250, 0.35);' : 'border: none;'
    },
    borderBottomStyle() {
      return this.borderBottom === true ? 'border-bottom: 1px solid rgba(250, 250, 250, 0.35);' : 'border: none;'
    },
    iconMarginStyle() {
      return `margin-left: ${this.iconMargin};`
    },
    paddingYStyle() {
      return `padding-top: ${this.pt || '1.5rem'}; padding-bottom: ${this.pb || '1.5rem'};`
    },
    paddingLeftStyle() {
      return `padding-left: ${this.pl};`
    },
    paddingRightStyle() {
      return `padding-right: ${this.pr};`
    },
    letterSpacingStyle() {
      return `letter-spacing: ${this.letterSpacing};`
    },
    fontWeightStyle() {
      return `font-weight: ${this.fontWeight};`
    },
    widthStyle() {
      return `width: ${this.width};`
    }
  }
}
</script>

<style scoped>
.block__item:not(:first-of-type) {
  padding-left: 1rem;
}
.block__item:not(:last-of-type) {
  padding-right: 1rem;
}
.half-border {
  width: 50%;
  height: 1px;
  background: rgba(250, 250, 250, 0.35);
}
.block {
  border-top: 1px solid rgba(250, 250, 250, 0.35);
  line-height: 2;
  width: 100%;
  height: max-content;
}
.block__text-content {
  margin-left: 0.6rem;
  display: inline-block;
  vertical-align: middle;
  font-size: 0.8rem;
  letter-spacing: 0.13rem;
}
</style>
