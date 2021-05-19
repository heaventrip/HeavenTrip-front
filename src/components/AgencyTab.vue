<template>
  <div id="agence_pills" class="col-12 p-0 tab-header">
    <h4 class="nav-head my-0">
      <a href="#header_nav" class="text-reset pr-3"><i class="fas fa-chevron-left"></i></a>
      . L’agence
    </h4>
    <ul class="nav nav-pills header-pills mb-0 justify-content-start justify-content-lg-between flex-column flex-lg-row border-0 mobile-navs" id="agence_pills_tab" role="tablist">
      <li class="nav-item text-lg-center flex-1" role="presentation">
        <a class="nav-link" id="pills-concept-tab" data-toggle="pill" href="#pills-concept" role="tab" aria-controls="pills-concept" aria-selected="false">LE CONCEPT <i class="fas fa-arrow-right float-right mt-1 chevron-left"></i></a>
      </li>
      <li class="nav-item text-lg-center flex-1" role="presentation">
        <a class="nav-link" id="pills-team-tab" data-toggle="pill" href="#pills-team" role="tab" aria-controls="pills-team" aria-selected="false">LA TEAM <i class="fas fa-arrow-right float-right mt-1 chevron-left"></i></a>
      </li>
      <li class="nav-item text-lg-center flex-1" role="presentation">
        <a class="nav-link" id="pills-contacter-tab" data-toggle="pill" href="#pills-contacter" role="tab" aria-controls="pills-contacter" aria-selected="false">NOUS CONTACTER <i class="fas fa-arrow-right float-right mt-1 chevron-left"></i></a>
      </li>
    </ul>
  </div>
  <div class="col-12 tab-content tab-header-content order-lg-3" id="">
    <div class="tab-pane fade concept-pane" id="pills-concept" role="tabpanel" aria-labelledby="pills-concept-tab">
      <h4 class="nav-head m-0 px-4">
        <a href="#agence_pills" class="text-reset pr-3"><i class="fas fa-chevron-left"></i></a>
        . LE CONCEPT
      </h4>
      <div class="container">
        <div class="row w-100 m-0">
          <div class="col-12 col-lg-8">
            <div class="col-12 col-lg-8 ml-auto px-0 px-lg-3">
              <div class="fprint-div">
                <img class="user_icon" fluid :src="require('@/assets/images/fprint.png')" />
                <div class="ml-2">
                  <p class="concept-small-head">Heaven Trip</p>
                  <h2 class="concept-head">
                    NOTRE
                    <span class="font-weight-bold">CONCEPT</span>
                  </h2>
                </div>
              </div>
            </div>
            <div class="inner-tab-pills">
              <ul class="nav nav-pills header-pills justify-content-center justify-content-lg-between d-none d-lg-flex" id="" role="tablist">
                <li class="nav-item text-center" role="presentation">
                  <a class="nav-link active" id="pills-stay-tab" data-toggle="pill" href="#pills-stay" role="tab" aria-controls="pills-stay" aria-selected="false"
                    ><span class="number font-weight-bold">01<span class="dot">.</span> </span>Séjours</a
                  >
                </li>
                <li class="nav-item text-center" role="presentation">
                  <a class="nav-link" id="pills-turnkey-tab" data-toggle="pill" href="#pills-turnkey" role="tab" aria-controls="pills-turnkey" aria-selected="false"
                    ><span class="number font-weight-bold">02<span class="dot">.</span> </span>Clé en main</a
                  >
                </li>
                <li class="nav-item text-center" role="presentation">
                  <a class="nav-link" id="pills-made-tab" data-toggle="pill" href="#pills-made" role="tab" aria-controls="pills-made" aria-selected="false"
                    ><span class="number font-weight-bold">03<span class="dot">.</span> </span>Sur-mesure</a
                  >
                </li>
                <li class="nav-item text-center" role="presentation">
                  <a class="nav-link" id="pills-share-tab" data-toggle="pill" href="#pills-share" role="tab" aria-controls="pills-share" aria-selected="false"
                    ><span class="number font-weight-bold">04<span class="dot">.</span> </span>Partage</a
                  >
                </li>
              </ul>
              <form class="d-block d-lg-none">
                <div class="form-group mb-5">
                  <select class="form-control select-place">
                    <option selected="" disabled="" hidden="">Séjours</option>
                    <option value="#pills-stay">Séjours</option>
                    <option value="#pills-turnkey">Clé en main</option>
                    <option value="#pills-made">Sur-mesure</option>
                    <option value="#pills-share">Partage</option>
                  </select>
                </div>
              </form>
              <div class="col-12 tab-content inner-tab-content" id="">
                <div class="tab-pane fade show active" id="pills-stay" role="tabpanel" aria-labelledby="pills-stay-tab">
                  <p>
                    Et si on se concentrait sur nous ?
                    <span class="font-weight-bold">Un “Nous” en petit collectif</span>
                    et
                    <span class="font-weight-bold">authentique</span>
                    loin du tourisme de masse. Un concept d’<span class="font-weight-bold">évasion mêlant sport, culture et bien-être</span>
                    pensé par des amoureux pour des passionnés tels que vous. Parce que votre emprunte est unique, nos séjours sportifs aussi ! Cohésion, fun, rencontres et progression assurées !
                  </p>
                </div>
                <div class="tab-pane fade" id="pills-turnkey" role="tabpanel" aria-labelledby="pills-turnkey-tab">
                  <p>
                    Et si on se concentrait sur nous ?
                    <span class="font-weight-bold">Un “Nous” en petit collectif</span>
                    et
                    <span class="font-weight-bold">authentique</span>
                    loin du tourisme de masse. Un concept d’<span class="font-weight-bold">évasion mêlant sport, culture et bien-être</span>
                    pensé par des amoureux pour des passionnés tels que vous. Parce que votre emprunte est unique, nos séjours sportifs aussi ! Cohésion, fun, rencontres et progression assurées !
                  </p>
                </div>
                <div class="tab-pane fade" id="pills-made" role="tabpanel" aria-labelledby="pills-made-tab">
                  <p>
                    Et si on se concentrait sur nous ?
                    <span class="font-weight-bold">Un “Nous” en petit collectif</span>
                    et
                    <span class="font-weight-bold">authentique</span>
                    loin du tourisme de masse. Un concept d’<span class="font-weight-bold">évasion mêlant sport, culture et bien-être</span>
                    pensé par des amoureux pour des passionnés tels que vous. Parce que votre emprunte est unique, nos séjours sportifs aussi ! Cohésion, fun, rencontres et progression assurées !
                  </p>
                </div>
                <div class="tab-pane fade" id="pills-share" role="tabpanel" aria-labelledby="pills-share-tab">
                  <p>
                    Et si on se concentrait sur nous ?
                    <span class="font-weight-bold">Un “Nous” en petit collectif</span>
                    et
                    <span class="font-weight-bold">authentique</span>
                    loin du tourisme de masse. Un concept d’<span class="font-weight-bold">évasion mêlant sport, culture et bien-être</span>
                    pensé par des amoureux pour des passionnés tels que vous. Parce que votre emprunte est unique, nos séjours sportifs aussi ! Cohésion, fun, rencontres et progression assurées !
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4 pr-lg-0 mt-4 d-none d-lg-block">
            <img fluid :src="require('@/assets/images/unsplashx.png')" class="img-fluid concept-fill-img" alt="..." />
          </div>
        </div>
      </div>
    </div>
    <div class="tab-pane fade team-pane w-100" id="pills-team" role="tabpanel" aria-labelledby="pills-team-tab">
      <h4 class="nav-head m-0 px-4">
        <a href="#agence_pills" class="text-reset pr-3"><i class="fas fa-chevron-left"></i></a>
        . LA TEAM
      </h4>
      <div class="container p-0 px-lg-3">
        <div class="row justify-content-around w-100 d-none">
          <!-- d-lg-flex -->
          <div class="col-12 col-lg-2">
            <div class="position-relative">
              <img fluid :src="require('@/assets/images/svg/background_team.svg')" class="img-fluid bubble-bg" alt="..." />
              <img fluid :src="require('@/assets/images/svg/team.png')" class="img-fluid" alt="..." />
            </div>
            <div class="d-flex align-items-end team-div">
              <h2 class="team-head">
                <span>Axel</span><br />
                <span>Sonderer</span>
              </h2>
              <p class="para">Co-founder & CEO</p>
            </div>
            <p class="para">Toujours la tête dans les nuages celui-là, Toujours la tête dans les nuages celui-là…</p>
          </div>
          <div class="col-12 col-lg-2">
            <div class="position-relative">
              <img fluid :src="require('@/assets/images/svg/background_team.svg')" class="img-fluid bubble-bg" alt="..." />
              <img fluid :src="require('@/assets/images/svg/team.png')" class="img-fluid" alt="..." />
            </div>
            <div class="d-flex align-items-end team-div">
              <h2 class="team-head">
                <span>Axel</span><br />
                <span>Sonderer</span>
              </h2>
              <p class="para">Co-founder & CEO</p>
            </div>
            <p class="para">Toujours la tête dans les nuages celui-là, Toujours la tête dans les nuages celui-là…</p>
          </div>
          <div class="col-12 col-lg-2">
            <div class="position-relative">
              <img fluid :src="require('@/assets/images/svg/background_team.svg')" class="img-fluid bubble-bg" alt="..." />
              <img fluid :src="require('@/assets/images/svg/team.png')" class="img-fluid" alt="..." />
            </div>
            <div class="d-flex align-items-end team-div">
              <h2 class="team-head">
                <span>Axel</span><br />
                <span>Sonderer</span>
              </h2>
              <p class="para">Co-founder & CEO</p>
            </div>
            <p class="para">Toujours la tête dans les nuages celui-là, Toujours la tête dans les nuages celui-là…</p>
          </div>
          <div class="col-12 col-lg-2">
            <div class="position-relative">
              <img fluid :src="require('@/assets/images/svg/background_team.svg')" class="img-fluid bubble-bg" alt="..." />
              <img fluid :src="require('@/assets/images/svg/team.png')" class="img-fluid" alt="..." />
            </div>
            <div class="d-flex align-items-end team-div">
              <h2 class="team-head">
                <span>Axel</span><br />
                <span>Sonderer</span>
              </h2>
              <p class="para">Co-founder & CEO</p>
            </div>
            <p class="para">Toujours la tête dans les nuages celui-là, Toujours la tête dans les nuages celui-là…</p>
          </div>
        </div>
        <div class="main w-100">
          <div class="team-slider text-dark">
            <div>
              <div class="position-relative">
                <img fluid :src="require('@/assets/images/svg/background_team.svg')" class="img-fluid bubble-bg" alt="..." />
                <img fluid :src="require('@/assets/images/svg/team.png')" class="img-fluid" alt="..." />
              </div>
              <div class="d-flex align-items-end team-div">
                <h2 class="team-head">
                  <span>Axel</span><br />
                  <span>Sonderer</span>
                </h2>
                <p class="para">Co-founder & CEO</p>
              </div>
              <p class="para">Toujours la tête dans les nuages celui-là, Toujours la tête dans les nuages celui-là…</p>
            </div>
            <div>
              <div class="position-relative">
                <img fluid :src="require('@/assets/images/svg/background_team.svg')" class="img-fluid bubble-bg" alt="..." />
                <img fluid :src="require('@/assets/images/svg/team.png')" class="img-fluid" alt="..." />
              </div>
              <div class="d-flex align-items-end team-div">
                <h2 class="team-head">
                  <span>Axel</span><br />
                  <span>Sonderer</span>
                </h2>
                <p class="para">Co-founder & CEO</p>
              </div>
              <p class="para">Toujours la tête dans les nuages celui-là, Toujours la tête dans les nuages celui-là…</p>
            </div>
            <div>
              <div class="position-relative">
                <img fluid :src="require('@/assets/images/svg/background_team.svg')" class="img-fluid bubble-bg" alt="..." />
                <img fluid :src="require('@/assets/images/svg/team.png')" class="img-fluid" alt="..." />
              </div>
              <div class="d-flex align-items-end team-div">
                <h2 class="team-head">
                  <span>Axel</span><br />
                  <span>Sonderer</span>
                </h2>
                <p class="para">Co-founder & CEO</p>
              </div>
              <p class="para">Toujours la tête dans les nuages celui-là, Toujours la tête dans les nuages celui-là…</p>
            </div>
            <div>
              <div class="position-relative">
                <img fluid :src="require('@/assets/images/svg/background_team.svg')" class="img-fluid bubble-bg" alt="..." />
                <img fluid :src="require('@/assets/images/svg/team.png')" class="img-fluid" alt="..." />
              </div>
              <div class="d-flex align-items-end team-div">
                <h2 class="team-head">
                  <span>Axel</span><br />
                  <span>Sonderer</span>
                </h2>
                <p class="para">Co-founder & CEO</p>
              </div>
              <p class="para">Toujours la tête dans les nuages celui-là, Toujours la tête dans les nuages celui-là…</p>
            </div>
            <div>
              <div class="position-relative">
                <img fluid :src="require('@/assets/images/svg/background_team.svg')" class="img-fluid bubble-bg" alt="..." />
                <img fluid :src="require('@/assets/images/svg/team.png')" class="img-fluid" alt="..." />
              </div>
              <div class="d-flex align-items-end team-div">
                <h2 class="team-head">
                  <span>Axel</span><br />
                  <span>Sonderer</span>
                </h2>
                <p class="para">Co-founder & CEO</p>
              </div>
              <p class="para">Toujours la tête dans les nuages celui-là, Toujours la tête dans les nuages celui-là…</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-pane fade contact-pane" id="pills-contacter" role="tabpanel" aria-labelledby="pills-contacter-tab">
      <h4 class="nav-head m-0 px-4">
        <a href="#agence_pills" class="text-reset pr-3"><i class="fas fa-chevron-left"></i></a>
        . NOUS CONTACTER
      </h4>
      <div class="container">
        <div class="col-12 col-lg-5 d-flex flex-column justify-content-between mb-lg-5">
          <div>
            <h4 class="contacter-head mb-1">Faut pas hésiter !</h4>
            <p class="contacter-para mb-4 mb-lg-0">Si tu as besoin de conseils, de renseignements, tu peux nous joindre par téléphone ou par le formulaire ci-dessous.</p>
          </div>
          <div class="tel-box text-center col-lg-4">
            <a class="mob-number text-dark" href="tel:0954277519"><img class="mr-2 align-baseline" fluid :src="require('@/assets/images/tel_dark.png')" /> 09 54 27 75 19</a>
            <p class="contacter-para mb-0">Lundi - samedi : 8h30 à 19h00</p>
          </div>
        </div>
        <div class="col-12 col-lg-5 mx-auto">
          <form class="contact-form">
            <h4 class="contacter-head mb-5">PAR FORMULAIRE :</h4>
            <div class="row">
              <div class="col-12 col-lg-5">
                <div class="form-group valid">
                  <label>Nom & Prénom</label>
                  <input class="form-control" type="text" name="" value="Nagar Steve" />
                  <i class="fa fa-check check-sym"></i>
                </div>
              </div>
              <div class="col-12 col-lg-6 ml-auto">
                <div class="form-group valid">
                  <label>Adresse Email</label>
                  <input class="form-control" type="email" name="" value="hello@yourheaventrip.com" />
                  <i class="fa fa-check check-sym"></i>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 text-center">
                <div class="form-group">
                  <input class="form-control" type="text" rows="5" name="" placeholder="Tu peux taper ton message ici…" />
                </div>
                <button class="btn btn-dark border-0 rounded-0 w-100">ENVOYER MON MESSAGE</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AgencyTab'
}
</script>

<style scoped>
.contacter-para {
  font-size: 0.875rem;
}
</style>
