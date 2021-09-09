<template>
  <div class="bttn" :class="`bttn--${color}`" :style="style">
    <div class="bttn__text" :class="`bttn__text--${weight}`">
      <div>
        <!-- TODO use slots and override all buttons components -->
        <InlineSvg v-if="icon" :src="require(`@/assets/svg/${icon}.svg`)" class="mr-2" :fill="backgroundColor" :height="iconHeight" />
        <span class="align-middle" :style="{ color: textColor }" v-html="text"></span>
        <InlineSvg v-if="arrow" :src="require('@/assets/svg/arrow-right.svg')" class="ml-4 align-middle" height="14" fill="white" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: ['margin', 'text', 'color', 'weight', 'height', 'icon', 'px', 'py', 'arrow', 'size', 'width', 'radius', 'text-color', 'background-color', 'icon-height'],
  computed: {
    style() {
      return `
        margin: ${this.margin};
        padding: ${this.py || '0'} ${this.px || '1rem'};
        font-size: ${this.size || '0.8rem'};
        height: ${this.height || '80px'};
        width: ${this.width};
        border-radius: ${this.radius};
        background-color: ${this.backgroundColor};
      `
    }
  }
}
</script>

<style scoped>
.bttn {
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
}
.bttn__text {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  font-weight: 500;
  letter-spacing: 1.5px;
}
.bttn__text--bold {
  font-size: 0.8rem;
  font-weight: bold;
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
@media only screen and (max-height: 950px) {
  .bttn {
    max-height: 2.7rem !important;
  }
  .bttn__text--bold {
    font-size: 0.7rem;
  }
}
</style>
