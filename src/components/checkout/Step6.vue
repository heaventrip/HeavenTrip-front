<template>
  <div class="tab-pane fade login-signup-tab" id="step6" role="tabpanel" aria-labelledby="step6-tab">
    <div class="row">
      <div class="col-12 col-lg-7">
        <div class="card pay-card rounded-0 mb-0 d-none">
          <div class="card-body">
            <h6 class="font-weight-bold text-uppercase pay-head">COMMENT Tu pars ?</h6>
            <form>
              <div class="form-group">
                <div class="btn-group type-of-trip btn-group-toggle" data-toggle="buttons">
                  <label class="btn text-white border-0 btn-lg px-4">
                    <input type="radio" name="options" id="solo" />
                    Solo
                  </label>
                  <label class="btn text-white border-0 btn-lg px-4">
                    <input type="radio" name="options" id="couple" />
                    En couple
                  </label>
                  <label class="btn text-white border-0 btn-lg px-4">
                    <input type="radio" name="options" id="family" />
                    Famille
                  </label>
                  <label class="btn text-white border-0 btn-lg px-4 active">
                    <input type="radio" name="options" id="potes" checked="" />
                    Entre potes
                  </label>
                </div>
              </div>
            </form>
            <h6 class="font-weight-bold text-uppercase pay-head">TES ENVIES ?</h6>
            <p class="font-weight-normal">Tu peux apporter des précisions et/ou modifications :</p>
            <textarea class="form-control info-textarea bg-light p-3 mb-5" placeholder="Plus d’heures de cours ? Des extras ? Nos formules sont personnalisables alors lâche toi !" rows="7"></textarea>
            <h6 class="prefer-text text-center">
              <img class="d-inline-block mx-auto px-3 bg-white position-relative zindex-1" fluid :src="require('@/assets/images/mic.png')" />
            </h6>
            <p class="font-weight-normal mb-0 text-center">En validant ta demande, tu pourras suivre son évolution dans ton espace client Heaven Trip. Surveille ta boite mail, la team s’active pour confirmer ton séjour.</p>
          </div>
        </div>
        <button class="btn contact-form-btn border-0 rounded-0 btn-block h6 mb-0 d-none">FAIRE MA DEMANDE</button>
        <!-- disable -->
        <!-- contact-form-btn-error -->
        <div class="good-trip-div rounded-0">
          <div class="success-msg">
            <div class="success-check rounded-circle d-block mx-auto my-4">
              <i class="fas fa-check"></i>
            </div>
            <h6 class="text-uppercase text-dark font-weight-bold mb-0">Votre DEMANDE a bien été envoyée</h6>
          </div>
          <div class="success-trip-info bg-dark text-white">
            <h6 class="prefer-text text-center">
              <img class="d-inline-block mx-auto px-3 bg-dark position-relative zindex-1" fluid :src="require('@/assets/images/mic_light.png')" />
            </h6>
            <p class="h6 mb-3 font-weight-800">Reçu 5 sur 5 !</p>
            <p class="f-14 font-weight-normal">On s’active pour traiter ta demande dans les plus bref délais. Tu peux suivre son évolution dans ton espace client Heaven Trip.</p>
            <p class="f-14 font-weight-normal">Sportivement, la team Heaven Trip</p>
          </div>
          <button class="btn contact-form-btn border-0 btn-block rounded-0 btn-danger">
            <a href="/" class="text-link">RETOURNER à l’accueil</a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step6'
}
</script>

<style></style>
