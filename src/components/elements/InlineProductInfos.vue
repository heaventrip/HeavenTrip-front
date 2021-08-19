<template>
  <div class="block d-flex align-items-center text-uppercase" :class="[justifyContent || 'justify-content-between', extraClass]" :style="[borderTopStyle, borderBottomStyle, widthStyle]">
    <div class="block__item" v-for="(info, index) in filteredInfos" :key="info" :style="[index === 0 ? '' : dividerStyle, index === 0 ? '' : paddingLeftStyle, index === filteredInfos.length - 1 ? '' : paddingRightStyle]">
      <InlineSvg v-if="icons" :src="require(`@/assets/svg/${icons[index]}.svg`)" :fill="color" />
      <span class="block__text-content" :style="[iconMarginStyle, letterSpacingStyle, fontWeightStyle, { color: color }]">{{ info }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InlineProductInfos',
  props: ['font-weight', 'infos', 'border-top', 'border-bottom', 'pt', 'pb', 'pr', 'pl', 'extra-class', 'color', 'icons', 'icon-margin', 'width', 'divider', 'justify-content', 'letter-spacing'],
  computed: {
    filteredInfos() {
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
  padding-bottom: 1.5rem;
}
.block__text-content {
  margin-left: 0.6rem;
  display: inline-block;
  vertical-align: middle;
  font-size: 0.8rem;
  letter-spacing: 0.08rem;
}
@media (max-width: 1441px) {
  .block {
    width: 72%;
    padding-bottom: 1.1rem;
  }
  .block__text-content {
    margin-left: 0.7rem;
    font-size: 0.73rem;
    letter-spacing: 0.03rem;
  }
}
</style>
