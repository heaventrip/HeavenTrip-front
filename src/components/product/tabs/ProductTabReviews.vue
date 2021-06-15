<template>
  <div class="linear-block mb-0">
    <div class="card border-0 rounded-0">
      <div class="card-header p-0 border-0 rounded-0" id="headingNine">
        <div class="head-block px-4 px-lg-0 d-flex justify-content-between align-items-center collapsed" data-toggle="collapse" data-target="#collapseNine" aria-expanded="true" aria-controls="collapseNine">
          <div class="ml-3 ml-lg-0">
            <p class="sub-heading mb-2">Vos avis</p>
            <h4 class="heading mb-0">Les témoignages</h4>
          </div>
          <i class="fa fa-chevron-down h4 mb-0 arrow text-white"></i>
        </div>
      </div>
      <div id="collapseTen" class="collapse show" aria-labelledby="headingTen"></div>
    </div>
  </div>
  <div class="linear-block mt-2">
    <div class="card-body">
      <div class="review__block d-flex align-items-center">
        <div class="review__block-left d-flex flex-column align-items-center mr-5">
          <img class="review__block-left__avatar" :src="require('@/assets/images/ui_faces/1.jpg')" height="100" />
          <div class="review__block-left__date">25 Avril 2020</div>
        </div>
        <div class="review__block-right">
          <div class="review__block-right__top-infos d-flex justify-content-between">
            <div class="review__block-right__user-name">Remi Flemming</div>
            <div class="review__block-right__user-infos">
              <InlineSvg :src="require('@/assets/svg/spot.svg')" class="reviews__user-infos__spot-svg" />
              Nice
            </div>
            <div class="review__block__stars"><i class="fas fa-star mr-1"></i><i class="fas fa-star mr-1"></i><i class="fas fa-star mr-1"></i><i class="fas fa-star mr-1"></i><i class="far fa-star mr-1"></i></div>
            <div class="review__block__user-profile-link"><span>Voir profil</span></div>
          </div>
          <div class="review__block-right__text-content">aaaaaaaaaaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaaa aaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaaa aaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaaa aaaaaaa aaaaaaaa</div>
        </div>
      </div>
      <!-- <div class="linear-block mb-0">
                      <div class="avatar">
                        <div class="row">
                          <div class="col-12 col-lg-10 ml-auto">
                            <h5 class="star-head mb-2 pb-2 d-flex d-lg-block flex-1">
                              <img class="user-icon d-inline-block mx-auto" fluid :src="require('@/assets/images/ui_faces/1.jpg')" />
                              <div class="d-flex align-items-lg-center flex-column flex-lg-row ml-2 ml-lg-0">
                                <strong>Remi Flemming</strong>
                                <span class="d-block d-lg-inline-block"><span class="mx-3 d-none d-lg-inline-block">|</span> <i class="fas fa-map-marker-alt mr-2"></i>Nice <span class="mx-3">|</span> 2 séjours</span>
                                <div class="text-warning text-right small star-container"><i class="fas fa-star mr-1"></i><i class="fas fa-star mr-1"></i><i class="fas fa-star mr-1"></i><i class="fas fa-star mr-1"></i><i class="far fa-star mr-1"></i></div>
                                <a class="ml-auto user-profile-link text-reset d-none d-lg-inline-block" href="#">VOIR PROFIL <img class="align-baseline ml-2" fluid :src="require('@/assets/images/ARROW_EXIT.png')" /></a>
                              </div>
                            </h5>
                            <p class="content mb-0">C'est en vivant des émotions puissantes ensemble, que chacun de nous se sent vraiment vivant. Toussa toussa toussa c’est trop cooooool Et hop encore une ligne pour la marmotte ! Toussa toussa toussa Toussa toussa toussa c’est Charlie qui.</p>
                            <div class="text-right date">25 avril 2020</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 col-lg-10 mx-auto">
                        <div class="linear-block plain-block my-5">
                          <img class="align-text-bottom ml-n4" fluid :src="require('@/assets/images/svg/noun_Reply.svg')" />
                          <div class="row">
                            <div class="col-12 col-lg-9 ml-auto">
                              <h5 class="star-head mb-2 pb-2 d-flex d-lg-block flex-1 mt-4">
                                <img class="user-icon d-inline-block" fluid :src="require('@/assets/images/ui_faces/1.jpg')" />
                                <div class="d-flex align-items-lg-center flex-column flex-lg-row ml-2 ml-lg-0">
                                  <strong>Réponse de Marion :</strong>
                                  <div class="text-right date-text ml-auto">25 avril 2020</div>
                                </div>
                              </h5>
                              <p class="content mb-0">C'est en vivant des émotions puissantes ensemble, que chacun de nous se sent vraiment vivant. Toussa toussa toussa c’est</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a class="view-more-btn full_width mt-4" data-toggle="collapse" href="#viewMoreBlog" role="button" aria-expanded="false" aria-controls="viewMoreBlog">AFFICHER ENCORE PLUS D’AVIS (24) <i class="fas fa-chevron-down ml-2"></i></a> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductTabReviews',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.review__block {
  margin-top: 2rem;
  color: #7c7c7c;
}
.review__block-right__text-content {
  font-size: 0.875rem;
  font-family: Muli, sans-serif;
}
.review__block-right__top-infos {
  font-size: 0.875rem;
  font-family: Oswald, sans-serif;
  font-weight: 600;
  width: 65%;
  margin-bottom: 0.5rem;
}
.review__block__user-profile-link {
  height: min-content;
  padding-left: 1.5rem;
  border-left: 1px solid #7c7c7c;
  font-weight: bold;
  text-transform: uppercase;
}
.review__block-left__avatar {
  margin-bottom: 0.2rem;
  object-fit: cover;
  border-radius: 50%;
}
.review__block-left__date {
  font-family: Oswald, sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
}
.review__block__stars {
  margin-right: 1.5rem;
  color: #ffc300;
}
.product__nav__section-number {
  position: relative;
  width: 3rem;
  height: 3rem;
  border-radius: 10px;
  background: #292f33;
  font-size: 1.8rem;
  font-weight: 900;
  text-align: center;
  color: #fff;
}
</style>
