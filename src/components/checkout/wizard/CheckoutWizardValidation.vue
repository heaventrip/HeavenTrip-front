<template>
  <div class="d-flex w-100">
    <div class="col-12 col-lg-6 offset-1" style="padding-top: 8rem padding-bottom: 4rem; top: 10vh">
      <button @click.prevent="$emit('complete')">VALIDER LA RESERVATION</button>
      <CheckoutWizardValidationPayment :course="course" :booker="booker" :extra-participants="extraParticipants" />
    </div>
    <div class="col-12 col-lg-4 ml-auto p-0" style="box-shadow: rgba(235, 235, 235, 0.4) -1px 0px 8px">
      <CheckoutWizardValidationRecap :course="course" :booker="booker" :extra-participants="extraParticipants" />
    </div>
  </div>
</template>

<script>
// import { loadStripe } from '@stripe/stripe-js'
import CheckoutWizardValidationPayment from './CheckoutWizardValidationPayment.vue'
import CheckoutWizardValidationRecap from './CheckoutWizardValidationRecap.vue'
export default {
  name: 'CheckoutWizardValidation',
  components: {
    CheckoutWizardValidationPayment,
    CheckoutWizardValidationRecap
  },
  props: ['course', 'booker', 'extra-participants'],
  methods: {
    // async processPayment() {
    //   const stripe = await loadStripe('pk_test_51IoZH6LutaKCaG86wTiuai8cPCobCxO4YsIfs0bQOSTLhxMiiKY9dLStcM1DldXATLp9nUh5MkIJlSekLzPJeWp0003rbJhwWa')
    //   // const response = await fetch("http://localhost:3000/api/v1/secret");
    //   // const { client_secret: clientSecret } = await response.json();
    //   // // Render the form to collect payment details, then
    //   // // call stripe.confirmCardPayment() with the client secret.
    //   const clientSecret = 'pi_1IpIgVLutaKCaG86LgQ30D84_secret_LwjUFfypRB3wz4SexQNv7NgrT'
    //   ;(function () {
    //     'use strict'
    //     const elements = stripe.elements()
    //     var cardNumber = elements.create('cardNumber', {
    //       style: elementStyles,
    //       classes: elementClasses
    //     })
    //     cardNumber.mount('#example2-card-number')
    //     var cardExpiry = elements.create('cardExpiry', {
    //       style: elementStyles,
    //       classes: elementClasses
    //     })
    //     cardExpiry.mount('#example2-card-expiry')
    //     var cardCvc = elements.create('cardCvc', {
    //       style: elementStyles,
    //       classes: elementClasses
    //     })
    //     cardCvc.mount('#example2-card-cvc')
    //     var form = document.getElementById('payment-form')
    //     var errors = document.getElementById('card-errors')
    //     form.addEventListener('submit', function (ev) {
    //       ev.preventDefault()
    //       // If the client secret was rendered server-side as a data-secret attribute
    //       // on the <form> element, you can retrieve it here by calling `form.dataset.secret`
    //       // eslint-disable-next-line prettier/prettier
    //       stripe.confirmCardPayment(clientSecret, {
    //           payment_method: {
    //             card: cardNumber
    //           }
    //         })
    //         .then(function (result) {
    //           // eslint-disable-next-line prettier/prettier
    //           document.querySelector(".example2").classList.remove("submitting");
    //           if (result.error) {
    //             // Show error to your customer (e.g., insufficient funds)
    //             // eslint-disable-next-line prettier/prettier
    //             errors.textContent = result.error.message;
    //           } else {
    //             // The payment has been processed!
    //             if (result.paymentIntent.status === 'succeeded') {
    //               // eslint-disable-next-line prettier/prettier
    //               console.log(result.paymentIntent);
    //               // Show a success message to your customer
    //               // There's a risk of the customer closing the window before callback
    //               // execution. Set up a webhook or plugin to listen for the
    //               // payment_intent.succeeded event that handles any business critical
    //               // post-payment actions.
    //             }
    //           }
    //         })
    //     })
    //     var elementStyles = {
    //       base: {
    //         color: '#fff',
    //         fontWeight: 600,
    //         fontFamily: 'Quicksand, Open Sans, Segoe UI, sans-serif',
    //         fontSize: '16px',
    //         fontSmoothing: 'antialiased',
    //         ':focus': {
    //           color: '#424770'
    //         },
    //         '::placeholder': {
    //           color: '#9BACC8'
    //         },
    //         ':focus::placeholder': {
    //           color: '#CFD7DF'
    //         }
    //       },
    //       invalid: {
    //         color: '#fff',
    //         ':focus': {
    //           color: '#FA755A'
    //         },
    //         '::placeholder': {
    //           color: '#FFCCA5'
    //         }
    //       }
    //     }
    //     var elementClasses = {
    //       focus: 'focus',
    //       empty: 'empty',
    //       invalid: 'invalid'
    //     }
    //   })()
    // }
  },
  mounted() {
    // this.processPayment()
  }
}
</script>

<style>
.example.example2 {
  background-color: #fff;
}

.example.example2 * {
  font-family: Source Code Pro, Consolas, Menlo, monospace;
  font-size: 16px;
  font-weight: 500;
}

.example.example2 .row {
  display: -ms-flexbox;
  display: flex;
  margin: 0 5px 10px;
}

.example.example2 .field {
  position: relative;
  width: 100%;
  height: 50px;
  margin: 0 10px;
}

.example.example2 .field.half-width {
  width: 50%;
}

.example.example2 .field.quarter-width {
  width: calc(25% - 10px);
}

.example.example2 .baseline {
  position: absolute;
  width: 100%;
  height: 1px;
  left: 0;
  bottom: 0;
  background-color: #cfd7df;
  transition: background-color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.example.example2 label {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 8px;
  color: #cfd7df;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transform-origin: 0 50%;
  cursor: text;
  pointer-events: none;
  transition-property: color, transform;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
}

.example.example2 .input {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  padding-bottom: 7px;
  color: #32325d;
  background-color: transparent;
}

.example.example2 .input::-webkit-input-placeholder {
  color: transparent;
  transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.example.example2 .input::-moz-placeholder {
  color: transparent;
  transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.example.example2 .input:-ms-input-placeholder {
  color: transparent;
  transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.example.example2 .input.StripeElement {
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  will-change: opacity;
}

.example.example2 .input.focused,
.example.example2 .input:not(.empty) {
  opacity: 1;
}

.example.example2 .input.focused::-webkit-input-placeholder,
.example.example2 .input:not(.empty)::-webkit-input-placeholder {
  color: #cfd7df;
}

.example.example2 .input.focused::-moz-placeholder,
.example.example2 .input:not(.empty)::-moz-placeholder {
  color: #cfd7df;
}

.example.example2 .input.focused:-ms-input-placeholder,
.example.example2 .input:not(.empty):-ms-input-placeholder {
  color: #cfd7df;
}

.example.example2 .input.focused + label,
.example.example2 .input:not(.empty) + label {
  color: #aab7c4;
  transform: scale(0.85) translateY(-25px);
  cursor: default;
}

.example.example2 .input.focused + label {
  color: #24b47e;
}

.example.example2 .input.invalid + label {
  color: #ffa27b;
}

.example.example2 .input.focused + label + .baseline {
  background-color: #24b47e;
}

.example.example2 .input.focused.invalid + label + .baseline {
  background-color: #e25950;
}

.example.example2 input,
.example.example2 button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  border-style: none;
}

.example.example2 input:-webkit-autofill {
  -webkit-text-fill-color: #e39f48;
  transition: background-color 100000000s;
  -webkit-animation: 1ms void-animation-out;
}

.example.example2 .StripeElement--webkit-autofill {
  background: transparent !important;
}

.example.example2 input,
.example.example2 button {
  -webkit-animation: 1ms void-animation-out;
}

.example.example2 button {
  display: block;
  width: calc(100% - 30px);
  height: 40px;
  margin: 40px 15px 0;
  background-color: #24b47e;
  border-radius: 4px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
}

.example.example2 .error svg {
  margin-top: 0 !important;
}

.example.example2 .error svg .base {
  fill: #e25950;
}

.example.example2 .error svg .glyph {
  fill: #fff;
}

.example.example2 .error .message {
  color: #e25950;
}

.example.example2 .success .icon .border {
  stroke: #abe9d2;
}

.example.example2 .success .icon .checkmark {
  stroke: #24b47e;
}

.example.example2 .success .title {
  color: #32325d;
  font-size: 16px !important;
}

.example.example2 .success .message {
  color: #8898aa;
  font-size: 13px !important;
}

.example.example2 .success .reset path {
  fill: #24b47e;
}
</style>
