<template>
  <section class="middle-section">
    <div class="container">
      <div class="row">
        <div class="pad-block col-12 col-lg-6 col-xl-5 rounded text-white p-0 desk-width-right">
          <div class="pad__header text-uppercase rounded-top d-flex justify-content-between align-items-center">
            <h5 class="small-head">Votre coup de coeur</h5>
            <div style="width: min-content">
              <InlineAvatars :avatars="[1, 2, 3, 4]" :heart="true" />
            </div>
          </div>
          <div class="d-flex">
            <div class="d-inline-block" style="width: 90%">
              <div class="pad__content">
                <h1 class="text-uppercase heading font-weight-bold mb-4 d-flex align-items-center">
                  yoggi & surf
                  <span class="font-weight-normal"><i class="fas fa-caret-right mx-3"></i>îles canaries</span>
                </h1>
                <div class="d-flex justify-content-center py-3 tooltip-div my-4">
                  <a href="" class="mr-3" data-toggle="tooltip" data-placement="top" title="Pilates"><img class="" fluid :src="require('@/assets/svg/surf.svg')" /></a>
                  <a href="" class="mr-3" data-toggle="tooltip" data-placement="top" title="Pilates"><img class="" fluid :src="require('@/assets/svg/yoga.svg')" /></a>
                  <a href="" class="mr-3" data-toggle="tooltip" data-placement="top" title="Pilates"><img class="" fluid :src="require('@/assets/svg/mat.svg')" /></a>
                  <span class="ml-auto euro"><strong>750&euro;</strong>/pers. </span>
                </div>
                <div class="d-flex align-items-center social-info">
                  <InlineProductInfos :infos="['text1', 'text', 'text1', 'text222']" :divider="false" :extra-class="'w-100 justify-content-between'" />
                </div>
              </div>
              <div class="d-flex pad__footer">
                <div class="pad__footer__review-counter">
                  <Button text="54 avis" icon="star" color="white" weight="bold" />
                </div>
                <div class="bttn bttn--pink w-100">
                  <div class="bttn__text bttn__text--bold">
                    VOIR LE DETAIL DU SEJOUR
                    <img class="align-baseline ml-3" src="@/assets/svg/arrow-right.svg" style="max-height: 15px" />
                  </div>
                </div>
              </div>
            </div>
            <div class="d-inline-block pad__content" style="width: 10%; height: min-content">
              <div class="pad__content__month-block"><span>Mai</span></div>
              <div class="pad__content__month-block"><span>Juil</span></div>
              <div class="pad__content__month-block"><span>Août</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import InlineAvatars from '@/components/elements/InlineAvatars.vue'
import InlineProductInfos from '@/components/elements/InlineProductInfos.vue'
import Button from '@/components/elements/Button.vue'

export default {
  name: 'SectionMiddle',
  components: {
    InlineAvatars,
    Button,
    InlineProductInfos
  }
}
</script>

<style scoped>
.pad__footer__review-counter {
  background-color: #fff;
  color: #292f33;
  width: 40%;
}
.pad-block {
  margin-left: auto;
  margin-right: 15%;
}
.pad__header {
  padding: 2rem;
}
.pad__content {
  padding: 2rem 2rem 0rem 2rem;
}
.pad__content__month-block span {
  display: inline;
  vertical-align: middle;
}
.pad__content__month-block {
  text-align: center;
  border-bottom: 1px dashed #b4b4b4;
  padding: 0.5rem 0;
}
.tooltip-div {
  border-top: 1px dashed #292f33;
  border-bottom: 1px dashed #292f33;
}
.bttn {
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  height: 80px;
}
.bttn__text {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  font-weight: 500;
  letter-spacing: 1.5px;
  text-align: center;
}
.bttn__text--bold {
  font-weight: bold;
  letter-spacing: 1.5px;
  font-size: 0.8rem;
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
.pad__header {
  background-color: #292f33;
  margin-bottom: 0.5rem;
}
.pad__content {
  background-color: #ffffff80;
  color: #292f33;
}
.middle-section {
  background: url('../../assets/images/asset-1.png') no-repeat center center / cover;
}
</style>
