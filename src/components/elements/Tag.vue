<template>
  <div class="tag" :class="pColor">
    <span class="tag__content">{{ pText }}</span>
  </div>
</template>

<script>
export default {
  name: 'InlineAvatars',
  props: ['color', 'text'],
  data() {
    return {
      pText: this.text
    }
  },
  computed: {
    pColor() {
      return `tag--${this.color};`
    }
  }
}
</script>

<style scoped>
.tag {
  filter: opactiy(0.5);
}
.tag--white {
  background-color: #fff;
  border-color: #fff;
  color: #292f33;
}
.tag--grey {
  border-radius: 5px;
  background-color: #292f33;
  border-color: #292f33;
  color: #fff;
}
.tag__content {
  font-family: Oswald, sans-serif;
  font-size: 14px;
}
</style>
