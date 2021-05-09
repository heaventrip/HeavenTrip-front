<template>
  <section class="middle-section">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-10 col-lg-12 col-xl-11 mx-auto desk-width">
          <div class="rounded-lg shadow overflow-hidden d-lg-flex">
            <div class="col-12 col-lg-6 col-xl-7 p-0 desk-width-left">
              <div class="position-relative w-100 h-100">
                <img class="img-fluid img-fill asset-img" fluid :src="require('@/assets/images/asset-1.png')" />
                <img class="img-fluid position-pink d-none d-md-block" fluid :src="require('@/assets/images/pink.png')" />
                <img class="img-fluid position-pink d-block d-md-none" fluid :src="require('@/assets/images/surf-2.png')" />
              </div>
            </div>
            <div class="col-12 col-lg-6 col-xl-5 text-white p-0 desk-width-right">
              <div class="pad bg-dark">
                <h5 class="small-head mb-5">Votre coup de coeur</h5>
                <h1 class="text-uppercase heading font-weight-bold mb-4 d-flex align-items-center">
                  yoggi & surf
                  <span class="font-weight-normal"><i class="fas fa-caret-right mx-3"></i>îles canaries</span>
                </h1>
                <p class="para">
                  Votre emprunte est unique, nos sejours sportifs aussi ! Découvrez notre concept d'evasion melant sport, culture et bien-etre. Heaven Trip vous propose des stages sportifs pour tous et a travers le monde. Découvrez notre concept d'evasion melant sport, culture et bien-etre. Si tu
                  veux sauver un arbre mange un castor.
                </p>
                <div class="d-flex justify-content-center py-3 tooltip-div my-4">
                  <a href="" class="mr-3" data-toggle="tooltip" data-placement="top" title="Pilates"><img class="" fluid :src="require('@/assets/images/surf.png')" /></a>
                  <a href="" class="mr-3" data-toggle="tooltip" data-placement="top" title="Pilates"><img class="" fluid :src="require('@/assets/images/yoga.png')" /></a>
                  <a href="" class="mr-3" data-toggle="tooltip" data-placement="top" title="Pilates"><img class="" fluid :src="require('@/assets/images/mat.png')" /></a>
                  <span class="ml-auto euro"><strong>750&euro;</strong>/pers. </span>
                </div>
                <div class="d-flex align-items-center social-info">
                  <ul class="list-unstyled mb-0 profile-list mx-3">
                    <li class="d-none d-md-inline-block d-lg-none">
                      <a href="#"><img class="user_icon" fluid :src="require('@/assets/images/v1.png')" /></a>
                    </li>
                    <li>
                      <a href="#"><img class="user_icon" fluid :src="require('@/assets/images/v2.png')" /></a>
                    </li>
                    <li>
                      <a href="#"><img class="user_icon" fluid :src="require('@/assets/images/v1.png')" /></a>
                    </li>
                    <li>
                      <a href="#"><img class="user_icon" fluid :src="require('@/assets/images/v2.png')" /></a>
                    </li>
                    <li>
                      <a href="#"><img class="user_icon" fluid :src="require('@/assets/images/v3.png')" /></a>
                    </li>
                    <li>+0.5k</li>
                  </ul>
                  <ul class="list-unstyled mb-0 mx-auto ml-sm-auto mr-sm-0 content-list d-flex text-uppercase">
                    <li>
                      <span class="gold">54 avis : 9,6 <img class="mt-n1" fluid :src="require('@/assets/images/star.png')" /></span>
                    </li>
                    <li class="d-none d-md-inline-block pr-0">
                      <a href="#" class="text-reset d-flex align-items-center">tous les avis <img class="ml-1" fluid :src="require('@/assets/images/arr-r.png')" /></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="pad bg-danger text-uppercase">
                <ul class="list-unstyled mb-0 ml-auto contents-list d-flex justify-content-between align-items-center">
                  <li><img class="mr-2 icons" fluid :src="require('@/assets/images/globe.png')" />espagne</li>
                  <li><img class="mr-2 icons" fluid :src="require('@/assets/images/timer.png')" />8 jours</li>
                  <li><img class="mr-2 icons" fluid :src="require('@/assets/images/circle.png')" />tous niveaux</li>
                  <li class="d-none d-md-inline-block"><img class="mr-2 icons" fluid :src="require('@/assets/images/places.png')" />10 places</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionMiddle'
}
</script>

<style></style>
