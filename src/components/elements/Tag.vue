<template>
  <div class="d-flex align-items-center tag" :class="pColor">
    <div class="tag__content">{{ pText }}</div>
  </div>
</template>

<script>
export default {
  name: 'Tag',
  props: ['color', 'text'],
  data() {
    return {
      pText: this.text
    }
  },
  computed: {
    pColor() {
      return `tag--${this.color}`
    }
  }
}
</script>

<style scoped>
.tag {
  height: 25px;
  /* height: 2rem; */
  border-radius: 50px;
  /* width: max-content; */
}
.tag--white {
  background-color: rgba(255, 255, 255, 0.6);
  border-color: rgba(255, 255, 255, 0.6);
  color: #292f33;
}
.tag--grey {
  background-color: #292f33;
  color: white;
  opacity: 60%;
}
.tag--grey-product-header {
  background-color: #292f335d;
  color: white;
  opacity: 80%;
}
.tag--pink {
  background-color: #d82558;
  color: #fff;
  opacity: 90%;
}
.tag--violet {
  background-color: #5a3a5f;
  color: #fff;
  border-radius: 15%;
}
.tag__content {
  width: max-content;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  font-family: Oswald, sans-serif;
  font-weight: 500;
  letter-spacing: 0.2px;
  /* font-size: 11px; FIXME add props */
  font-size: 13px;
  text-transform: uppercase;
  /* position: relative;
  top: 50%;
  transform: translateY(-50%); */
}
</style>
