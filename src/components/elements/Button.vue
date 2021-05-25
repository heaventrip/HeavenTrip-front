<template>
  <div class="bttn" :class="pColor">
    <div class="bttn__text" :class="pWeight" :style="pPadding">
      <span>
        {{ pText }}
        <InlineSvg :src="require('@/assets/svg/arrow-right.svg')" v-if="pArrow" class="ml-3" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: ['text', 'color', 'weight', 'icon', 'px', 'py', 'arrow'],
  data() {
    return {
      pText: this.text,
      pArrow: this.arrow
    }
  },
  computed: {
    pPadding() {
      return `padding: ${this.py || '0'} ${this.px || '0'};`
    },
    pColor() {
      return `bttn--${this.color}`
    },
    pWeight() {
      return `bttn__text--${this.weight}`
    }
  }
}
</script>

<style scoped>
.bttn {
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  height: 80px;
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
}
.bttn--grey:hover {
  background-color: #d82558;
  border-color: #d82558;
}
.bttn--grey:active {
  background-color: #292f33;
  border-color: #292f33;
}
</style>
