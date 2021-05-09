<template>
  <div class="card pay-card">
    <div class="card-body">
      <h6 class="font-weight-bold text-uppercase pay-head">
        Quel montant souhaitez vous payer :
      </h6>
      <div
        class="custom-radio-container assurance-radio-container text-uppercase"
      >
        <div class="row">
          <div class="col-12 col-lg-7 pr-0">
            <div class="custom-control custom-radio pt-3">
              <input
                type="radio"
                id="Radio14"
                name="pay"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="Radio14">
                <div class="d-flex align-items-center font-weight-normal">
                  Verser un acompte de 30% :
                  <strong class="h6 mb-0 ml-2 font-weight-bold"
                    >3108 &euro;</strong
                  >
                </div>
              </label>
            </div>
            <p class="font-weight-500 left-pad-pars text-transform-none">
              Solde est à payer avant le 28/09/2020
            </p>
          </div>
          <div class="col-12 col-lg-5">
            <div class="custom-control custom-radio pt-3">
              <input
                type="radio"
                id="Radio15"
                name="pay"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="Radio15">
                <div class="d-flex align-items-center font-weight-normal">
                  Payer la totalité
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <h6 class="font-weight-bold text-uppercase pay-head mt-3">
        Coupon ou points de fédlité
      </h6>
      <form class="contact-form pt-3">
        <div class="row">
          <div class="col-12 col-lg-6">
            <div class="form-group mb-0">
              <!-- error -->
              <input
                class="form-control"
                type="text"
                name=""
                placeholder="Au pif !"
                value="Terminator"
              />
              <i class="fa fa-check check-sym"></i>
              <i class="fa fa-times check-sym error"></i>
              <span class="error-text">Loupé ! Coupon invalide</span>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <button class="btn coupon-btn contact-form-btn border-0">
              APPLIQUER
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Step5Module1",
};
</script>

<style></style>
