<template>
  <div class="stay-dropdown d-block d-lg-none">
    <select class="form-control select-place">
      <option selected="" value="#pills-info">INFOS SéJOUR</option>
      <option value="#pills-activityspot">ACTIVITéS & spot</option>
      <option value="#pills-place">VIE SUR PLACE</option>
      <option value="#pills-programe">PROGRAMME</option>
      <option value="#pills-tips">TIPS & ASTUCES</option>
      <option value="#pills-opinion">VOS AVIS</option>
    </select>
  </div>
  <ul class="bg-white nav nav-pills nav-justified mb-3 text-uppercase font-weight-bold narrow-header-pills d-none d-lg-flex" id="pills-tab " role="tablist">
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="pills-info-tab" data-toggle="pill" href="#pills-info" role="tab" aria-controls="pills-info" aria-selected="false">INFOS SéJOUR</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link active" id="pills-activityspot-tab" data-toggle="pill" href="#pills-activityspot" role="tab" aria-controls="pills-activityspot" aria-selected="true">Activités & spot</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="pills-place-tab" data-toggle="pill" href="#pills-place" role="tab" aria-controls="pills-place" aria-selected="false">VIE SUR PLACE</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="pills-programe-tab" data-toggle="pill" href="#pills-programe" role="tab" aria-controls="pills-programe" aria-selected="false">PROGRAMME</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="pills-tips-tab" data-toggle="pill" href="#pills-tips" role="tab" aria-controls="pills-tips" aria-selected="false">TIPS & ASTUCES</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="pills-opinion-tab" data-toggle="pill" href="#pills-opinion" role="tab" aria-controls="pills-opinion" aria-selected="false">VOS AVIS</a>
    </li>
  </ul>
  <div class="tab-content main-tab d-flex justify-content-around" id="pills-tabContent" style="padding: 2.5rem 6rem 3.5rem 6rem">
    <div class="tab-pane fade w-50" id="pills-info" role="tabpanel" aria-labelledby="pills-info-tab">
      <ProductTabInfos />
    </div>
    <div class="tab-pane fade w-50" id="pills-activityspot" role="tabpanel" aria-labelledby="pills-activityspot-tab">
      <ProductTabActivities />
    </div>
    <div class="tab-pane fade w-50" id="pills-place" role="tabpanel" aria-labelledby="pills-place-tab">
      <ProductTabLiving />
    </div>
    <div class="tab-pane fade w-50" id="pills-programe" role="tabpanel" aria-labelledby="pills-programe-tab">
      <ProductTabProgram />
    </div>
    <div class="tab-pane fade w-50" id="pills-tips" role="tabpanel" aria-labelledby="pills-tips-tab">
      <ProductTabTips />
    </div>
    <div class="tab-pane fade w-50" id="pills-opinion" role="tabpanel" aria-labelledby="pills-opinion-tab">
      <ProductTabReviews />
    </div>
    <div class="w-25">
      <div class="">
        <h6 class="galary-head font-weight-bold mb-0 d-flex">
          GALERIE PHOTOS
          <span class="galary-count ml-auto font-weight-normal">24 médias</span>
        </h6>
        <div class="form-row galary-grid mt-3 mb-5">
          <div class="col-8 img-container">
            <img class="img-fill" fluid :src="require('@/assets/images/unsplashx.png')" />
          </div>
          <div class="col-4 img-container">
            <img class="img-fill" fluid :src="require('@/assets/images/unsplashx.png')" />
          </div>
          <div class="col-4 img-container">
            <img class="img-fill" fluid :src="require('@/assets/images/unsplashx.png')" />
          </div>
          <div class="col-8 img-container">
            <img class="img-fill" fluid :src="require('@/assets/images/unsplashx.png')" />
          </div>
        </div>
        <h6 class="galary-head font-weight-bold mb-4 d-flex">
          DISCUSSIONS
          <span class="count-circle ml-auto font-weight-normal"><i class="fas fa-ellipsis-h"></i></span>
        </h6>
        <ul class="list-unstyled mb-0 discuss-list mt-3">
          <li>
            <div class="form-row mt-3 mb-5">
              <div class="col-2">
                <div class="profile-container">
                  <img class="img-fill" fluid :src="require('@/assets/images/ui_faces/4.jpg')" />
                </div>
              </div>
              <div class="col-10">
                <h6 class="discuss-head">Helena Brauer <span>Jeudi à 12:37</span></h6>
                <p class="content-desc">During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes</p>
                <a href="#" class="reply-text text-reset">LUI REPONDRE</a>
              </div>
            </div>
          </li>
          <li>
            <div class="form-row mt-3 mb-5">
              <div class="col-2">
                <div class="profile-container">
                  <img class="img-fill" fluid :src="require('@/assets/images/ui_faces/1.jpg')" />
                </div>
              </div>
              <div class="col-10">
                <h6 class="discuss-head">Helena Brauer <span>Jeudi à 12:37</span></h6>
                <p class="content-desc">During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes</p>
                <a href="#" class="reply-text text-reset">LUI REPONDRE</a>
              </div>
            </div>
          </li>
          <li>
            <div class="form-row mt-3 mb-5">
              <div class="col-2">
                <div class="profile-container">
                  <img class="img-fill" fluid :src="require('@/assets/images/ui_faces/2.jpg')" />
                </div>
              </div>
              <div class="col-10">
                <h6 class="discuss-head">Helena Brauer <span>Jeudi à 12:37</span></h6>
                <p class="content-desc">During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes</p>
                <a href="#" class="reply-text text-reset">LUI REPONDRE</a>
              </div>
            </div>
          </li>
        </ul>
        <div class="reply-block position-relative pr-4 mb-5">
          <div class="profile-container float-right">
            <img class="img-fill" fluid :src="require('@/assets/images/ui_faces/2.jpg')" />
          </div>
          <textarea class="reply-container form-control pr-5" rows="1">Répondre…</textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductTabInfos from '@/components/product/tabs/ProductTabInfos.vue'
import ProductTabActivities from '@/components/product/tabs/ProductTabActivities.vue'
import ProductTabLiving from '@/components/product/tabs/ProductTabLiving.vue'
import ProductTabProgram from '@/components/product/tabs/ProductTabProgram.vue'
import ProductTabReviews from '@/components/product/tabs/ProductTabReviews.vue'
import ProductTabTips from '@/components/product/tabs/ProductTabTips.vue'

export default {
  name: 'ProductContent',
  components: {
    ProductTabInfos,
    ProductTabActivities,
    ProductTabLiving,
    ProductTabProgram,
    ProductTabReviews,
    ProductTabTips
  },
  data() {
    return {
      clickedInfos: false,
      clickedActivities: false,
      clickedLiving: false,
      clickedProgram: false,
      clickedTips: false,
      clickedReviews: false
    }
  }
}
</script>

<style scoped></style>
