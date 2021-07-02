<template>
  <!-- eslint-disable prettier/prettier -->
  <div class="card pay-card">
    <div class="card-body">
      <h6 class="font-weight-bold text-uppercase pay-head">Quel montant souhaitez vous payer :</h6>
      <div class="custom-radio-container assurance-radio-container text-uppercase">
        <div class="row">
          <div class="col-12 col-lg-7 pr-0">
            <div class="custom-control custom-radio pt-3">
              <input type="radio" id="Radio14" name="pay" class="custom-control-input" v-model="deposit" />
              <label class="custom-control-label" for="Radio14">
                <div class="d-flex align-items-center font-weight-normal">
                  Verser un acompte de 30% :
                  <strong class="h6 mb-0 ml-2 font-weight-bold">{{ parseInt(course?.price * 0.3) }} &euro;</strong>
                </div>
              </label>
            </div>
            <p class="font-weight-500 left-pad-pars text-transform-none">Solde est à payer avant le 28/09/2020</p>
          </div>
          <div class="col-12 col-lg-5">
            <div class="custom-control custom-radio pt-3">
              <input type="radio" id="Radio15" name="pay" class="custom-control-input" />
              <label class="custom-control-label" for="Radio15">
                <div class="d-flex align-items-center font-weight-normal">Payer la totalité</div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <h6 class="font-weight-bold text-uppercase pay-head mt-3">Coupon ou points de fédlité</h6>
      <form class="contact-form pt-3">
        <div class="row">
          <div class="col-12 col-lg-6">
            <div class="form-group mb-0">
              <!-- error -->
              <input class="form-control" type="text" name="" placeholder="Au pif !" value="Terminator" />
              <i class="fa fa-check check-sym"></i>
              <i class="fa fa-times check-sym error"></i>
              <span class="error-text">Loupé ! Coupon invalide</span>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <button class="btn coupon-btn contact-form-btn border-0">APPLIQUER</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  <div class="card pay-card rounded-0 mb-0">
    <div class="card-body">
      <!-- <h6 class="font-weight-bold text-uppercase pay-head">
        Choisissez votre moyen de paiement :
      </h6>
      <div class="custom-radio-container assurance-radio-container text-uppercase my-4 py-3">
        <div class="row">
          <div class="col-12 col-lg-7">
            <div class="custom-control custom-radio">
              <input type="radio" id="card_transfer" name="choicePay" class="custom-control-input" />
              <label class="custom-control-label" for="card_transfer">
                <div class="d-flex align-items-center font-weight-normal">
                  Carte bancaire
                </div>
              </label>
            </div>
          </div>
          <div class="col-12 col-lg-5">
            <div class="custom-control custom-radio">
              <input type="radio" id="bank_transfer" name="choicePay" class="custom-control-input" />
              <label class="custom-control-label" for="bank_transfer">
                <div class="d-flex align-items-center font-weight-normal">
                  Virement bancaire
                </div>
              </label>
            </div>
          </div>
        </div>
      </div> -->
      <div class="cell example example2" id="example-2">
        <button type="button" @click="processPayment" id="checkout-button">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js'

export default {
  name: 'CheckoutWizardPayment',
  methods: {
    async processPayment() {
      const stripe = await loadStripe('pk_test_51IoZH6LutaKCaG86wTiuai8cPCobCxO4YsIfs0bQOSTLhxMiiKY9dLStcM1DldXATLp9nUh5MkIJlSekLzPJeWp0003rbJhwWa')
      fetch('http://localhost:3000/api/v1/stripe-session', {
        method: 'POST'
      })
        .then(function (response) {
          return response.json()
        })

        .then(function (session) {
          return stripe.redirectToCheckout({ sessionId: session.session.id })
        })

        .then(function (result) {
          // If redirectToCheckout fails due to a browser or network

          // error, you should display the localized error message to your

          // customer using error.message.

          if (result.error) {
            alert(result.error.message)
          }
        })

        .catch(function (error) {
          console.error('Error:', error)
        })
    }
  }
}
</script>

<style></style>
