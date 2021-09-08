<template>
  <!-- eslint-disable prettier/prettier -->
  <div class="card pay-card">
    <div class="card-body">
      <h6 class="font-weight-bold text-uppercase pay-head">Coupon ou points de fidélité</h6>
      <form @submit.prevent class="contact-form pt-2">
        <div class="row">
          <div class="col-12 col-lg-6">
            <div class="form-group mb-0">
              <input class="form-control" type="text" name="" placeholder="Au pif !" value="Terminator" />
              <i class="fa fa-check check-sym"></i>
              <i class="fa fa-times check-sym error"></i>
              <span class="error-text">Loupé ! Coupon invalide</span>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <button @click.prevent class="btn coupon-btn contact-form-btn border-0 disable" style="border-radius: 0">APPLIQUER</button>
          </div>
        </div>
      </form> 
    </div>
  </div>

  <div class="card pay-card">
    <div class="card-body">
      <h6 class="font-weight-bold text-uppercase pay-head pb-1">Choisissez votre moyen de paiement : </h6>
      <div class="custom-radio-container assurance-radio-container text-uppercase">
        <div class="row">
          <div class="col-12 col-lg-4 pr-0">
            <div class="custom-control custom-radio pt-3">
              <input type="radio" id="Radio16" value="card" name="payment-type" class="custom-control-input" v-model="paymentType" />
              <label class="custom-control-label" for="Radio16">
                <div class="d-flex align-items-center" style="font-size: 0.8rem">Carte bancaire</div>
              </label>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="custom-control custom-radio pt-3">
              <input type="radio" id="Radio17" value="transfer" name="payment-type" class="custom-control-input" v-model="paymentType" />
              <label class="custom-control-label" for="Radio17">
                <div class="d-flex align-items-center" style="font-size: 0.8rem">Virement bancaire</div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body" :style="paymentType ? '' : 'pointer-events: none; filter: opacity(0.2)'">
      <h6 class="font-weight-bold text-uppercase pay-head mt-5 pb-1">Quel montant souhaitez vous payer :</h6>
      <div class="custom-radio-container assurance-radio-container text-uppercase">
        <div class="row">
          <div class="col-12 col-lg-4 pr-0">
            <div class="custom-control custom-radio pt-3 pb-1">
              <input type="radio" id="Radio14" value="deposit" name="payment-amount" :disabled="paymentType === 'transfer'" class="custom-control-input" v-model="deposit" />
              <label class="custom-control-label" for="Radio14">
                <div class="d-flex align-items-center" style="font-size: 0.8rem">
                  Verser un acompte de 30% :
                  <strong class="h6 mb-0 ml-3 font-weight-bold">{{ parseInt(totalPrice * 0.3) >= 1000 ? `${parseInt(totalPrice * 0.3).toString()[0]} ${parseInt(totalPrice * 0.3).toString().slice(-3)}` : parseInt(totalPrice * 0.3) }}&hairsp;&euro;</strong>
                </div>
              </label>
            </div>
            <p class="left-pad-pars text-transform-none" style="font-size: 0.7rem; color: #7c7c7c">Solde à payer avant le 28/09/2020</p>
          </div>
          <div class="col-12 col-lg-4">
            <div class="custom-control custom-radio pt-3">
              <input type="radio" id="Radio15" value="full" name="payment-amount" :checked="paymentType === 'transfer'" class="custom-control-input" v-model="deposit" />
              <label class="custom-control-label" for="Radio15">
                <div class="d-flex align-items-center" style="font-size: 0.8rem">Payer la totalité</div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

<transition name="fade" mode="out-in">



  <div v-if="paymentType === 'card' && deposit" class="card pay-card rounded-0 mb-0 p-0" >
    <button class="stripe-redirect-button" type="button" @click="$emit('complete')" id="checkout-button">
      <transition name="fade-fast" mode="out-in">
        <span v-if="paymentType === 'transfer'">Je veux procéder au paiement</span>
        <span v-else-if="deposit === 'deposit'">Je veux procéder au paiement de {{ parseInt(totalPrice * 0.3) >= 1000 ? `${parseInt(totalPrice * 0.3).toString()[0]} ${parseInt(totalPrice * 0.3).toString().slice(-3)}` : parseInt(totalPrice * 0.3) }}&hairsp;&euro; </span>
        <span v-else>Je veux procéder au paiement de {{ totalPrice >= 1000 ? `${totalPrice.toString()[0]} ${totalPrice.toString().slice(-3)}` : totalPrice }}&hairsp;&euro; </span>
      </transition>
    </button>
  </div>
  <div v-else-if="paymentType === 'transfer'" class="card pay-card">
    <div class="card-body" >
      <h6 class="font-weight-bold text-uppercase pay-head pb-1">Coordonnées bancaires de Heaven Trip :</h6>
      <div class="custom-radio-container assurance-radio-container text-uppercase">
        <div class="row">
          <div class="col-12 col-lg-4 pr-0">
            <div>IBAN</div>
            <div>111111111111111</div>
          </div>
          <div class="col-12 col-lg-4">
            <div>BIC</div>
            <div>11111111</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'CheckoutWizardValidationPayment',
  props: ['course', 'total-price'],
  emits: ['complete'],
  data() {
    return {
      deposit: '',
      paymentType: ''
    }
  }
}
</script>

<style scoped>
.stripe-redirect-button {
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  text-transform: uppercase;
  background-color: #292f33;
  font-size: 0.85rem;
  letter-spacing: 0.1rem;
  color: white;
  border: 0;
  transition: all 0.3s ease;
}
.stripe-redirect-button:hover {
  background-color: #d82558;
}
.stripe-redirect-button:active {
  background-color: #292f33;
}
.card {
  border: none;
  box-shadow: rgb(240, 240, 240) 0px 0px 6px;
  border-radius: 0 !important;
}
</style>
