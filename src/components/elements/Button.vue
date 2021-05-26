<template>
  <div class="bttn" :class="pColor" :style="pStyle">
    <div class="bttn__text" :class="pWeight">
      <div>
        <InlineSvg v-if="pIcon" :src="require(`@/assets/svg/${pIcon}.svg`)" class="mr-2" :fill="pBackgroundColor == 'white' ? 'red' : 'white'" />
        <span class="align-middle" v-html="pText"></span>
        <InlineSvg v-if="pArrow" :src="require('@/assets/svg/arrow-right.svg')" class="ml-4 align-middle" height="14" fill="white" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: ['text', 'color', 'weight', 'height', 'icon', 'px', 'py', 'arrow', 'size'],
  data() {
    return {
      pBackgroundColor: this.color,
      pText: this.text,
      pArrow: this.arrow,
      pIcon: this.icon
    }
  },
  computed: {
    pStyle() {
      return `padding: ${this.py || '0'} ${this.px || '0'}; font-size: ${this.size || '0.8rem'}; height: ${this.height};`
    },
    pColor() {
      return `bttn--${this.pBackgroundColor}`
    },
    pWeight() {
      return `bttn__text--${this.weight};`
    }
  }
}
</script>

<style scoped>
.bttn {
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
}
.bttn__text {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  font-weight: 500;
  letter-spacing: 1.5px;
}
.bttn__text--bold {
  font-weight: bold;
  font-size: 0.8rem;
}
.bttn--transparent {
  background-color: transparent;
  border-color: #fff;
}
.bttn--transparent:hover {
  background-color: #292f33;
  border-color: #292f33;
}
.bttn--transparent:active {
  background-color: #202020;
  border-color: #202020;
}
.bttn--pink {
  background-color: #d82558;
  border-color: #d82558;
  color: #fff;
}
.bttn--pink:hover {
  background-color: #292f33;
  border-color: #292f33;
}
.bttn--pink:active {
  background-color: #d82558;
  border-color: #d82558;
}
.bttn--grey {
  background-color: #292f33;
  border-color: #292f33;
  color: #fff;
}
.bttn--grey:hover {
  background-color: #d82558;
  border-color: #d82558;
}
.bttn--grey:active {
  background-color: #292f33;
  border-color: #292f33;
}
.bttn--white {
  background-color: #fff;
  border-color: #fff;
  color: #292f33;
}
.bttn--white:hover {
  background-color: #292f33;
  border-color: #292f33;
  color: #fff;
}
.bttn--white:active {
  background-color: #fff;
  border-color: #fff;
  color: #292f33;
}
</style>
