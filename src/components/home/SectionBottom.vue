<template>
  <section class="bottom-section">
    <div class="container">
      <div class="text-center" style="height: 50vh">LAST POSTS</div>
      <div class="row">
        <div class="col-12 col-md-10 col-lg-5 mx-auto text-center">
          <div class="d-flex justify-content-around text-uppercase font-weight-bold mail-box">
            <a href="tel:0369316618" class="text-reset py-2">
              <InlineSvg :src="require('@/assets/svg/phone.svg')" class="mr-3" />
              03 69 31 66 18
            </a>
            <div class="divider"></div>
            <a href="#" class="text-reset py-2 positioned-tripcol">
              <InlineSvg :src="require('@/assets/svg/chat.svg')" class="mr-3" />
              écrivez-nous
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionBottom'
}
</script>

<style scoped>
.bottom-section {
  padding: 2rem;
  background-color: rgb(240, 169, 169);
}
.divider {
  display: inline-block;
  width: 1px;
  background-color: #292f3359;
}
</style>
