<template>
  <div class="d-flex align-items-center tag" :class="`tag--${color}`">
    <div class="tag__content">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'Tag',
  props: ['color', 'text']
}
</script>

<style scoped>
.tag {
  height: 28px;
  /* height: 2rem; */
  border-radius: 50px;
  /* width: max-content; */
}
.tag--white {
  background-color: rgba(255, 255, 255, 0.6);
  border-color: rgba(255, 255, 255, 0.6);
  color: #292f33;
}
.tag--departcard {
  background-color: #5a3a5f;
  color: #ffffff;
  opacity: 100%;
  font-size: 0.8rem;
  font-weight: 300;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
}
.tag--departheadproduct {
  background-color: rgba(255, 255, 255, 0.726);
  color: #5a3a5f;
  opacity: 100%;
  font-size: 0.8rem;
  font-weight: 500;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.tag--sooncourse {
  background-color: #d82558;
  color: #ffffff;
  opacity: 100%;
  font-size: 0.9rem;
  font-weight: 400;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  padding-top: 0.9rem;
  padding-bottom: 0.9rem;
}
.tag--grey-product-header {
  background-color: #292f335d;
  color: white;
  opacity: 80%;
}
.tag--cardstylecourse {
  background-color: #ffffffbd;
  color: #292f33;
  opacity: 100%;
  font-size: 0.8rem;
  font-weight: 300;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
}
.tag--violet {
  background-color: #5a3a5f;
  color: #fff;
  border-radius: 15%;
}
.tag--fullscreen {
  background-color: #ffffffa9;
  color: #292f33;
  margin-right: 2rem;
  font-size: 0.95rem;
  font-weight: 600;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  padding-top: 0.1rem;
  padding-bottom: 0.2rem;
}
.tag__content {
  width: max-content;

  font-family: Oswald, sans-serif;

  letter-spacing: 0.2px;
  /* font-size: 11px;
  font-size: 13px;
  text-transform: uppercase;
  /* position: relative;
  top: 50%;
  transform: translateY(-50%); */
}
@media (max-width: 1441px) {
  .tag__content {
    font-size: 0.73rem;
    font-weight: 600;
  }
}
</style>
