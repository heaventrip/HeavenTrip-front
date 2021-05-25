<template>
  <section class="carousel-section">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-10 col-lg-9 mx-auto">
          <div class="rounded bg-white d-flex mb-5 centered-div">
            <div class="d-flex align-items-center p-3 flex-1 search-input-container">
              <img class="mx-3 img-20 d-none d-lg-inline-block" fluid :src="require('@/assets/images/search.png')" />
              <input class="form-control p-0 search-input ml-2 ml-sm-3 ml-lg-0 mr-xl-4" type="text" name="" placeholder="Ma recherche manuelle" />
            </div>
            <ul class="list-unstyled mb-0 search-list d-none d-lg-inline-flex ml-auto flex-2">
              <li>
                <div class="position-relative multi-select-filter"></div>
              </li>
              <li>
                <div class="position-relative multi-select-filter">
                  <select id="departure_month" name="depart" multiple="multiple" class="multi-select-option depart-dropdown text-capitalize">
                    <option value="janvier">janvier</option>
                    <option value="février">février</option>
                    <option value="mars">mars</option>
                    <option value="avril">avril</option>
                    <option value="mai">mai</option>
                    <option value="juin">juin</option>
                    <option value="juillet">juillet</option>
                    <option value="août">août</option>
                    <option value="septembre">septembre</option>
                    <option value="octobre">octobre</option>
                    <option value="novembre">novembre</option>
                    <option value="décembre">décembre</option>
                  </select>
                </div>
              </li>
              <li>
                <div class="position-relative multi-select-filter">
                  <select id="my-activity" name="activity" class="multi-select-option activity-dropdown">
                    <option value="VTT Descente">VTT Descente</option>
                    <option value="Via Ferrata">Via Ferrata</option>
                    <option value="Windsurf">Windsurf</option>
                    <option value="Kitesurf">Kitesurf</option>
                    <option value="VTT Descente">VTT Descente</option>
                    <option value="Via Ferrata">Via Ferrata</option>
                    <option value="Windsurf">Windsurf</option>
                    <option value="Kitesurf">Kitesurf</option>
                    <option value="VTT Descente">VTT Descente</option>
                  </select>
                </div>
              </li>
            </ul>
            <button class="btn btn-light bg-white text-uppercase search-btn filter-btn px-3 px-sm-4 rounded-right ml-auto border-left d-inline-block d-lg-none">
              <img class="mx-2" fluid :src="require('@/assets/images/mob-1.png')" />
            </button>
            <button class="btn btn-dark text-uppercase search-btn px-3 px-sm-4 rounded-right border-0">
              <span class="d-none d-lg-inline-block"><a href="/search" class="text-link">rechercher</a></span
              ><img class="mx-2 d-inline-block d-lg-none" fluid :src="require('@/assets/images/search-white.png')" />
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-11 col-lg-9 mx-auto my-lg-4">
          <div class="grid-box my-5">
            <div class="text-center text-md-right">
              <h5 class="red-head text-danger mt-1 font-weight-500">Découvre</h5>
              <h2 class="text-uppercase heading mb-0">nos <strong>activités</strong></h2>
            </div>
            <div class="d-none d-md-inline-block">
              <span class="separator"></span>
            </div>
            <p class="mb-0 d-none d-md-inline-block">
              <span class="font-weight-bold d-none d-lg-inline-block">(Prénom),</span>
              sélectionné une vignette pour connaitre les dates de departs et les places restantes. Tu pourras y voir les autres Trippers interesses ou inscrits et chater avec eux !
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col-12 mx-auto text-center d-block d-md-none">
              <form>
                <div class="form-group">
                  <select class="form-control select-place">
                    <option selected="" disabled="" hidden="">Nos inspirations</option>
                    <option value="#pills-home">Nos inspirations</option>
                    <option value="#pills-profile">Dernières places</option>
                    <option value="#pills-contact">Multi-activités</option>
                  </select>
                </div>
              </form>
            </div>
            <div class="col-12 col-sm-10 col-lg-4 order-lg-2 d-none d-md-block ml-auto">
              <ul class="nav nav-pills mb-0 justify-content-center" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <a class="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Nos inspirations</a>
                </li>
                <li class="nav-item" role="presentation">
                  <a class="nav-link active" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Dernières places</a>
                </li>
                <li class="nav-item" role="presentation">
                  <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Multi-activités</a>
                </li>
              </ul>
            </div>
            <div class="offset-lg-2 col-lg-6 align-self-center order-lg-1 d-none d-lg-block">
              <div class="text-uppercase font-weight-bold activites-link d-block text-right text-decoration-none">
                <span class="bg-white position-relative pl-4"><a class="text-dark" href="">toutes les activites</a> <img class="ml-1 align-baseline" fluid :src="require('@/assets/images/ARROW_EXIT.png')" /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 tab-content mt-4 order-lg-3" id="pills-tabContent">
          <div class="tab-pane fade" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">asdfghj</div>
          <div class="tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            <section class="testimonials">
              <div class="col-12 col-lg-11 ml-auto p-0">
                <div class="main">
                  <div class="slider1 text-dark customers-testimonials">
                    <div class="">
                      <div class="shadow-effect overflow-hidden position-relative">
                        <a href="/product"><img class="img-responsive img-fill" fluid :src="require('@/assets/images/s1.png')" alt="" /></a>
                        <div class="item-details">
                          <div class="content">
                            <div class="text-uppercase">
                              <div class="d-flex align-items-center">
                                <img class="slider-icon d-none d-lg-inline-block" fluid :src="require('@/assets/images/pink.png')" />
                                <img class="slider-icon d-none d-md-inline-block d-lg-none" fluid :src="require('@/assets/images/pink2.png')" />
                                <img class="slider-icon d-inline-block d-md-none" fluid :src="require('@/assets/images/surf-1.png')" />
                                <div>
                                  <h2 class="heading mb-0">
                                    <strong class="text-dark d-block d-md-inline-block mb-2 mb-md-0">ski freeride</strong><span><i class="fas fa-caret-right mx-md-2 mr-2"></i>serre-chevalier</span>
                                  </h2>
                                  <h5 class="sub-heading mb-0 d-none d-md-inline-block"><strong>inclus :</strong> yoga - rando - vtt neige</h5>
                                </div>
                              </div>
                              <h5 class="sub-heading mb-0 p-3 d-block d-md-none"><strong>inclus :</strong> yoga - rando - vtt neige</h5>
                            </div>
                            <div class="text-right d-none d-lg-inline-block align-self-center euro-border">
                              <h6 class="euro-per mb-0">par pers.</h6>
                              <h1 class="euro mb-0 euro">1 390&euro;</h1>
                            </div>
                            <ul class="img-list list-unstyled d-none d-md-inline-flex d-lg-none align-items-center justify-content-center mx-4 mb-0">
                              <li>
                                <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t1.png')" /> </a>
                              </li>
                              <li>
                                <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t2.png')" /> </a>
                              </li>
                              <li>
                                <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t3.png')" /> </a>
                              </li>
                              <li>
                                <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t4.png')" /> </a>
                              </li>
                              <li><small>+1.5k</small></li>
                            </ul>
                          </div>
                          <div class="hoverable-div">
                            <ul class="list-unstyled text-uppercase list-info mb-0 d-flex justify-content-around align-items-center border-0">
                              <li><img class="icons" fluid :src="require('@/assets/images/globe_d.png')" />france</li>
                              <li><img class="icons" fluid :src="require('@/assets/images/timer_d.png')" />8 jours</li>
                              <li><img class="icons" fluid :src="require('@/assets/images/circle_d.png')" />TOUS NIVEAUX</li>
                              <li><img class="icons" fluid :src="require('@/assets/images/places_d.png')" />10 places</li>
                            </ul>
                            <ul class="img-list list-unstyled d-inline-flex align-items-center ml-auto mb-0">
                              <li>
                                <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t1.png')" /> </a>
                              </li>
                              <li>
                                <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t2.png')" /> </a>
                              </li>
                              <li>
                                <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t3.png')" /> </a>
                              </li>
                              <li>
                                <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t4.png')" /> </a>
                              </li>
                              <li><small>+1.5k</small></li>
                            </ul>
                          </div>
                          <div class="d-flex d-lg-none justify-content-between mt-1 mt-md-3">
                            <ul class="list-unstyled py-3 text-uppercase list-info mb-0 d-none d-md-inline-flex d-lg-none ml-md-3">
                              <li><img class="icons mr-2" fluid :src="require('@/assets/images/globe_d.png')" />espagne</li>
                              <li><img class="icons mr-2" fluid :src="require('@/assets/images/timer_d.png')" />8 jours</li>
                              <li><img class="icons mr-2" fluid :src="require('@/assets/images/circle_d.png')" />tous niveaux</li>
                              <li><img class="icons mr-2" fluid :src="require('@/assets/images/places_d.png')" />10 places</li>
                            </ul>

                            <ul class="img-list list-unstyled d-inline-flex d-md-none align-items-center mx-3 mb-0">
                              <li class="mr-4 grid-col"><img class="icons" fluid :src="require('@/assets/images/timer_d.png')" /><span>8 jours</span></li>
                              <li>
                                <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t2.png')" /> </a>
                              </li>
                              <li>
                                <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t3.png')" /> </a>
                              </li>
                              <li>
                                <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t4.png')" /> </a>
                              </li>
                              <li><small>+1.5k</small></li>
                            </ul>
                            <a href="#" class="btn bg-dark text-white small font-weight-bold rounded-pill d-inline-flex align-items-center d-lg-none border-radius-style euro">1 990&euro;</a>
                          </div>
                        </div>
                        <a href="#" class="btn text-uppercase text-dark font-weight-bold new-link border-0">nouveau</a>
                      </div>
                    </div>
                    <div class="d-none"></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">123456</div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-9 ml-auto align-self-center order-lg-1 d-none d-md-block d-lg-none">
          <a href="#" class="text-uppercase font-weight-bold text-dark activites-link d-block text-right"
            ><span class="bg-white position-relative pl-4">toutes les activites <img class="ml-1 align-baseline" fluid :src="require('@/assets/images/ARROW_EXIT.png')" /></span
          ></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionCarousel',
  methods: {
    // TODO mettre un composant Vuejs à la place
    jquery() {
      $('.slider1').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        draggable: true,
        centerPadding: '60px',
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-prev">Previous</button>',
        responsive: [
          {
            breakpoint: 2561,
            settings: {
              initialSlide: 1,
              arrows: true,
              centerMode: true,
              centerPadding: '60px',
              slidesToShow: 3,
              draggable: false
            }
          },
          {
            breakpoint: 1441,
            settings: {
              initialSlide: 1,
              arrows: true,
              centerMode: true,
              centerPadding: '80px',
              slidesToShow: 2,
              draggable: false
            }
          },
          {
            breakpoint: 1025,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '80px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 991,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '90px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: false,
              // centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      })
      $('.customers-testimonials')
        .on('mouseenter', '.shadow-effect', function (e) {
          e.preventDefault()
          $(this).parent().animate({ width: '+=50px' })
          $(this).parent().find('.content').addClass('hover')
          $(this).parent().find('.hoverable-div').slideDown()
          $(this).parent().find('.trip-link').animate({ bottom: '+=45px' })
        })
        .on('mouseleave', '.shadow-effect', function () {
          $(this).parent().animate({ width: '-=50px' })
          $(this).parent().find('.content').removeClass('hover')
          $(this).parent().find('.hoverable-div').slideUp()
          $(this).parent().find('.trip-link').animate({ bottom: '-=45px' })
        })
    }
  },
  mounted() {
    this.jquery()
  }
}
</script>

<style></style>
