<template>
  <div class="d-flex align-items-center align-items-lg-end w-100 mt-auto" style="padding: 0 111px">
    <div class="content d-flex align-items-end justify-content-between w-100 mt-5 mt-lg-0">
      <div>
        <div class="top-block d-flex align-items-center">
          <img class="head-icon d-inline-block" fluid :src="require('@/assets/svg/picto-ski.svg')" />
          <!-- <img class="head-pin-icon d-none d-lg-inline-block" fluid :src="require('@/assets/images/head-pin.png')" /> -->
          <div>
            <h1 class="heading text-uppercase mb-2"><strong>ski</strong> freeride</h1>
            <h5 class="header-infos__sub-title text-uppercase d-block"><i class="fas fa-caret-right mr-1"></i> serre-chevalier</h5>
          </div>
        </div>
        <!-- TODO tags multiactivités ici -->
        <div class="abc text-center text-lg-left mt-5 mt-lg-0 pt-md-4 pt-lg-0">
          <InlineProductInfos :infos="['test1', 'test2', 'test3', 'test4']" :divider="true" :border="true" />
          <br />
          <div class="d-inline-flex d-lg-flex align-items-center p-3 px-lg-0 trippers-div">
            <span class="bottom-left-text text-uppercase mb-0 d-none d-lg-inline-block">
              <span>Ca te titille? Rejoint</span>
              <br />
              les <span>12 intéressés</span>
            </span>
            <ul class="img-list list-unstyled d-none d-md-inline-flex align-items-center mx-4 mb-0">
              <li>
                <a href="#"><img class="img-fluid user_icon positioned-img rounded-circle" fluid width="40px" :src="require('@/assets/images/t2.png')" /> </a>
              </li>
              <li>
                <a href="#"><img class="img-fluid user_icon positioned-img rounded-circle" fluid width="40px" :src="require('@/assets/images/t1.png')" /> </a>
              </li>
              <li>
                <a href="#"><img class="img-fluid user_icon positioned-img rounded-circle" fluid width="40px" :src="require('@/assets/images/t2.png')" /> </a>
              </li>
              <li>
                <a href="#"><img class="img-fluid user_icon positioned-img rounded-circle" fluid width="40px" :src="require('@/assets/images/t3.png')" /> </a>
              </li>
              <li>
                <a href="#"><img class="img-fluid user_icon positioned-img rounded-circle" fluid width="40px" :src="require('@/assets/images/t4.png')" /> </a>
              </li>
              <li class="d-none d-lg-inline-block">
                <a href="#"><img class="img-fluid user_icon" fluid :src="require('@/assets/images/th.png')" /> </a>
              </li>
              <li class="d-inline-block d-lg-none">
                <span>+1.5k</span>
              </li>
            </ul>
            <span class="divider d-none d-md-inline-block d-lg-none mx-2"></span>
            <a class="details-link text-uppercase text-white font-weight-bold d-inline-block d-lg-none pl-3" href="#">Détails <img class="img-fluid mt-n1" fluid :src="require('@/assets/images/arr-r.png')" /></a>
          </div>
        </div>
      </div>
      <div class="row no-gutters" style="margin-bottom: 5vh">
        <div class="col-4">
          <Button text="voir les dates" color="transparent" weight="bold" px="1rem" />
        </div>
        <div class="col-8 bg block--white">
          <div class="block__content">
            <div class="px-2">
              <span class="euro">1 990€</span>
              <span class="euro-pers">/pers.</span>
              <br />
              <span class="text--smaller">Tout inclus (sans transports)</span>
            </div>
          </div>
        </div>
        <div class="col-6 ml-auto">
          <div class="bttn bttn--pink">
            <div class="bttn__text bttn__text--bold">Détails<i class="fa fa-chevron-right ml-3"></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/elements/Button.vue'
import InlineProductInfos from '@/components/elements/InlineProductInfos.vue'
export default {
  name: 'HeaderText',
  components: {
    Button,
    InlineProductInfos
  }
}
</script>

<style scoped>
.header-infos__sub-title {
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.6px;
}

/* TEXT */
.text--smaller {
  font-size: 0.85rem;
}
/* BLOCK */
.block--white {
  background-color: #fff;
  color: #292f33;
}
.block__content {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: fit-content;
  margin: auto;
  line-height: 1.3;
}
/* BTTN */
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
  letter-spacing: 1.5px;
  font-size: 0.8rem;
}
.bttn__text--white {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.bttn--transparent {
  background-color: transparent;
  border: 1px solid #fff;
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

.euro {
  font-size: 1.375rem;
  font-weight: bold;
  padding-right: 0.2rem;
}
.dates-link {
  background-color: transparent;
  border: 1px solid #fff;
}
.list-info li span {
  display: inline-block;
  vertical-align: middle;
}
/* FIXME check rules in style.css that take precedence  */
.divider {
  /* height: 1.3rem; */
  /* background-color: rgba(250, 250, 250, 0.35); */
  margin: 0 1rem;
}
.head-icon {
  max-width: 90px;
}
.top-block {
  margin-bottom: 1.8rem;
}
.list-info {
  border-top: 1px solid rgba(250, 250, 250, 0.35);
  border-bottom: 1px solid rgba(250, 250, 250, 0.35);
}
/* FIXME must be 50% width (maybe elements must be blocks instead of inline) */
/* .list-info:after {
  content: '';
  display: block;
  margin: 0 auto;
  width: 50%;
  border-bottom: 1px solid rgba(250, 250, 250, 0.35);
} */
.trippers-div {
  border: none;
  margin-top: 1.2em;
}
.icons {
  margin-right: 0.6rem;
}
.sub-heading {
  font-size: 0.8rem;
}
.bottom-left-text {
  font-size: 0.75rem;
  line-height: 1.6;
  letter-spacing: 0.4px;
}
.bottom-left-text span:last-child {
  font-weight: bold;
}
</style>
