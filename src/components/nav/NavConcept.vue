<template>
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
</template>

<script>
export default {
  name: 'NavConcept'
}
</script>

<style></style>
