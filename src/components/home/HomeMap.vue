<template>
  <section class="map-section bg-dark text-white pb-5 p-lg-5">
    <div class="container-fluid" style="margin: 6rem 0">
      <div class="row d-none">
        <div class="col-12 col-lg-4 mx-auto pb-lg-5 mt-5 mb-5 mb-lg-0 text-center text-lg-left border-lg-bottom px-0">
          <h6 class="text-warning sub-heading mb-1">Nos activites selon</h6>
          <h2 class="text-uppercase font-weight-normal heading">les <strong>destinations</strong></h2>
        </div>
      </div>
      <div class="row d-none">
        <div class="col-12 col-md-10 mx-md-auto offset-lg-7 col-lg-5 mr-lg-0 selective-div">
          <div class="d-flex py-3 py-md-4 py-lg-3 absolute-border position-relative">
            <ul class="list-unstyled flex-div mb-0">
              <li>
                <h6 class="text-uppercase country-head d-flex mb-0">
                  pays :
                  <div class="btn-group select-dropdown px-3 align-items-center">
                    <a class="select-toggle tous text-white text-decoration-none" data-toggle="dropdown" href="#" aria-expanded="false">tous <i class="fa fa-chevron-down ml-2 chevron"></i></a
                    ><i role="button" class="fa fa-times text-warning ml-2 cancel"></i>
                    <ul class="dropdown-menu menu-items">
                      <li>
                        <a class="text-capitalize text-reset dropdown-item" href="javascript:void(0);"><i class="fa fa-chevron-right small ml-2"></i> France</a>
                      </li>
                      <li>
                        <a class="text-capitalize text-reset dropdown-item" href="javascript:void(0);"><i class="fa fa-chevron-right small ml-2"></i> Espagne</a>
                      </li>
                      <li>
                        <a class="text-capitalize text-reset dropdown-item" href="javascript:void(0);"><i class="fa fa-chevron-right small ml-2"></i> Grèce</a>
                      </li>
                      <li>
                        <a class="text-capitalize text-reset dropdown-item" href="javascript:void(0);"><i class="fa fa-chevron-right small ml-2"></i> Marac</a>
                      </li>
                      <li>
                        <a class="text-capitalize text-reset dropdown-item" href="javascript:void(0);"><i class="fa fa-chevron-right small ml-2"></i> Portugal</a>
                      </li>
                      <li>
                        <a class="text-capitalize text-reset dropdown-item" href="javascript:void(0);"><i class="fa fa-chevron-right small ml-2"></i> Sri Lanka</a>
                      </li>
                    </ul>
                  </div>
                </h6>
              </li>
              <li class="divider mr-3 d-none d-lg-inline-block"></li>
              <li class="d-none d-lg-inline-block">
                <h6 class="text-uppercase city-head d-flex mb-0 zero-opacity">
                  ville :
                  <div class="btn-group select-dropdown px-3 align-items-center">
                    <a href="javaScript:void(0);" id="dropdownMenuLink" class="select-toggle toutes text-white text-decoration-none" data-toggle="dropdown" aria-expanded="false"
                      >toutes <i class="fa fa-chevron-down ml-2 chevron"></i></a
                    ><i role="button" class="fa fa-times text-warning ml-2 cancel"></i>
                    <ul class="dropdown-menu menu-items" aria-labelledby="dropdownMenuLink">
                      <li>
                        <a class="text-capitalize text-reset dropdown-item" href="javascript:void(0);"><i class="fa fa-chevron-right small ml-2"></i> serre-chevaliver</a>
                      </li>
                      <li>
                        <a class="text-capitalize text-reset dropdown-item" href="javascript:void(0);"><i class="fa fa-chevron-right small ml-2"></i> asdfgh</a>
                      </li>
                      <li>
                        <a class="text-capitalize text-reset dropdown-item" href="javascript:void(0);"><i class="fa fa-chevron-right small ml-2"></i> serre</a>
                      </li>
                      <li>
                        <a class="text-capitalize text-reset dropdown-item" href="javascript:void(0);"><i class="fa fa-chevron-right small ml-2"></i> lkjhgf</a>
                      </li>
                      <li>
                        <a class="text-capitalize text-reset dropdown-item" href="javascript:void(0);"><i class="fa fa-chevron-right small ml-2"></i> qwerty</a>
                      </li>
                      <li>
                        <a class="text-capitalize text-reset dropdown-item" href="javascript:void(0);"><i class="fa fa-chevron-right small ml-2"></i> poiuyt</a>
                      </li>
                    </ul>
                  </div>
                </h6>
              </li>
              <li class="divider mr-3 d-none d-lg-inline-block"></li>
              <li class="ml-auto ml-lg-0">
                <p class="mb-0 activity-count zero-opacity">11 activites</p>
              </li>
            </ul>
            <a href="#" class="text-uppercase text-white view-link ml-auto">tout voir <img class="ml-3" fluid :src="require('@/assets/images/arr-r.png')" /></a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-7 d-none d-lg-block map-img-div">
          <img class="img-fluid img-fill" fluid :src="require('@/assets/images/MAPS.png')" />
          <img class="img-fluid centered-img" fluid :src="require('@/assets/images/fr2.png')" />
        </div>
        <div class="col-12 col-md-10 mx-md-auto col-lg-5 map-content-div d-none">
          <div class="map-content border-top">
            <div class="zone-div col-12 col-lg-4 mx-auto h-100 flex-column justify-content-center align-items-center text-center">
              <p>Sélectionnez une zone de la map ou dans la liste un pays pour afficher le détails</p>
              <img class="d-block mx-auto" fluid :src="require('@/assets/images/map-icon.png')" />
            </div>
            <ul class="list-unstyled mb-0 grid-list pt-5">
              <li>
                <a href="#" class="text-reset">
                  <div class="content-grid">
                    <img fluid :src="require('@/assets/images/c2.png')" />
                    <div class="contents">
                      <h6 class="mb-0">Multi-activites</h6>
                      <p class="mb-0 text-warning">VTT Descente</p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" class="text-reset">
                  <div class="content-grid">
                    <img fluid :src="require('@/assets/images/m2.png')" />
                    <div class="contents">
                      <h6 class="mb-0">Multi-activites</h6>
                      <p class="mb-0 text-warning">Via Ferrata</p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" class="text-reset">
                  <div class="content-grid">
                    <img fluid :src="require('@/assets/images/c2.png')" />
                    <div class="contents">
                      <h6 class="mb-0">stage</h6>
                      <p class="mb-0 text-warning">Windsurf</p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" class="text-reset">
                  <div class="content-grid">
                    <img fluid :src="require('@/assets/images/m2.png')" />
                    <div class="contents">
                      <h6 class="mb-0">stage</h6>
                      <p class="mb-0 text-warning">Kitesurf</p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" class="text-reset">
                  <div class="content-grid">
                    <img fluid :src="require('@/assets/images/c2.png')" />
                    <div class="contents">
                      <h6 class="mb-0">Multi-activites</h6>
                      <p class="mb-0 text-warning">VTT Descente</p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" class="text-reset">
                  <div class="content-grid">
                    <img fluid :src="require('@/assets/images/m2.png')" />
                    <div class="contents">
                      <h6 class="mb-0">Multi-activites</h6>
                      <p class="mb-0 text-warning">Via Ferrata</p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" class="text-reset">
                  <div class="content-grid">
                    <img fluid :src="require('@/assets/images/c2.png')" />
                    <div class="contents">
                      <h6 class="mb-0">stage</h6>
                      <p class="mb-0 text-warning">Windsurf</p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" class="text-reset">
                  <div class="content-grid">
                    <img fluid :src="require('@/assets/images/m2.png')" />
                    <div class="contents">
                      <h6 class="mb-0">stage</h6>
                      <p class="mb-0 text-warning">Kitesurf</p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" class="text-reset">
                  <div class="content-grid">
                    <img fluid :src="require('@/assets/images/c2.png')" />
                    <div class="contents">
                      <h6 class="mb-0">Multi-activites</h6>
                      <p class="mb-0 text-warning">VTT Descente</p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-5 soon-avail-icon align-self-center text-center">
          <svg class="" xmlns="http://www.w3.org/2000/svg" height="160" viewBox="0 0 100 100">
            <g id="Calque_2" data-name="Calque 2">
              <g id="Calque_1-2" data-name="Calque 1">
                <path fill="white" d="M48.37,0A52.19,52.19,0,0,0,15.62,10.85l7.63,7.61A41.66,41.66,0,0,1,77.14,22.9a41.48,41.48,0,0,1,4.34,53.68l7.61,7.6A52.26,52.26,0,0,0,48.37,0Z" />
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  d="M76.11,88.8a46.3,46.3,0,0,1-61.37-3.52,46,46,0,0,1-3.49-61.22l-.87-.88a47.22,47.22,0,0,0,3.49,63A47.52,47.52,0,0,0,77,89.67Z"
                />
              </g>
            </g>
            <svg viewBox="-13 -22 30 30" fill="white">
              <text font-family="Muli" font-weight="500">!</text>
            </svg>
          </svg>
          <div class="mt-3" style="font-weight: 500; font-family: Muli, sans-serif; text-transform: uppercase">Bientôt disponible !</div>
        </div>

        <!-- <div class="col-12">
            <div class="d-block d-lg-none py-4 py-sm-5 overflow-hidden">
              <img class="img-responsive img-fill tablet-map-img" fluid :src="require('@/assets/images/tablet-map.png')" alt="" />
            </div>
          </div> -->
      </div>
    </div>
    <div class="d-block d-lg-none">
      <div id="mapCarousel" class="owl-carousel py-5">
        <div class="item">
          <img class="img-responsive img-fill" fluid :src="require('@/assets/images/MAP_ESPAGNE.png')" alt="" />
        </div>
        <div class="item">
          <img class="img-responsive img-fill" fluid :src="require('@/assets/images/MAP_FRANCE.png')" alt="" />
        </div>
        <div class="item">
          <img class="img-responsive img-fill" fluid :src="require('@/assets/images/MAP_MAROC.png')" alt="" />
        </div>
        <div class="item">
          <img class="img-responsive img-fill" fluid :src="require('@/assets/images/MAP_ESPAGNE.png')" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeMap',
  mounted() {
    $('.select-dropdown .cancel,.grid-list,.hoverable-div,.view-link,.centered-img').hide()
    $('.map-section .city-head .select-toggle').removeAttr('data-toggle')
    $('.select-dropdown').on('show.bs.dropdown', function () {
      $('.map-content').css('margin-top', '7rem')
      $('.zone-div').hide()
    })
    $('.select-dropdown').on('hide.bs.dropdown', function () {
      $('.map-content').css('margin-top', '0')
    })
    $('.dropdown-menu li a').click(function () {
      var selText = $(this).text()
      $(this).parents('.btn-group').find('.select-toggle').addClass('text-warning').html(selText)
      $(this).parents('.btn-group').find('.cancel').show()
      $(this).parents('.btn-group').find('.chevron').hide()
      $('.grid-list,.view-link,.centered-img').show()
      $('.map-section .img-fill').addClass('blurred-img')
      $('.map-section .city-head .select-toggle').attr('data-toggle', 'dropdown')
      $('.map-section .city-head,.map-section .flex-div .activity-count').removeClass('zero-opacity')
    })
    $('.select-dropdown .cancel').click(function () {
      $(this)
        .parents('.btn-group')
        .find('.select-toggle.tous')
        .removeClass('text-warning')
        .html('tous' + '<i class="fa fa-chevron-down ml-2 chevron"></i>')
      $(this)
        .parents('.btn-group')
        .find('.select-toggle.toutes')
        .removeClass('text-warning')
        .html('toutes' + '<i class="fa fa-chevron-down ml-2 chevron"></i>')
      $(this).parents('.btn-group').find('.cancel').hide()
      $(this).parents('.btn-group').find('.chevron').show()
      if ($(this).parents().hasClass('country-head')) {
        $('.zone-div').show()
        $('.grid-list,.view-link,.centered-img,.map-section .city-head .cancel').hide()
        $('.map-section .img-fill').removeClass('blurred-img')
        $('.map-section .city-head .select-toggle').removeAttr('data-toggle')
        $('.map-section .city-head,.map-section .flex-div .activity-count').addClass('zero-opacity')
        $('.select-toggle.toutes')
          .removeClass('text-warning')
          .html('toutes' + '<i class="fa fa-chevron-down ml-2 chevron"></i>')
      }
      // if ($(this).parents().hasClass('city-head') ) {
      // }
      $('#mapCarousel').owlCarousel({
        loop: false,
        center: true,
        items: 3,
        margin: 0,
        autoplay: false,
        dots: true,
        nav: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 2
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
      })
      $('.owl-carousel').find('.owl-nav,.owl-dots').removeClass('disabled')
      $('.owl-carousel').on('changed.owl.carousel', function (event) {
        $(this).find('.owl-nav,.owl-dots').removeClass('disabled')
      })
      $('select.select-place').change(function () {
        var selectedCountry = $(this).children('option:selected').val()
        $('.nav-pills a[href="' + selectedCountry + '"]').tab('show')
      })
    })
  }
}
</script>

<style scoped>
.map-section {
  pointer-events: none;
  cursor: not-allowed;
}
</style>
