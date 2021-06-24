<template>
  <!-- eslint-disable prettier/prettier -->
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
  name: 'Step5Module2',
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
