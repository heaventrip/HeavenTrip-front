<template>
  <div class="login-signup-tab">
    <div class="card border-0">
      <div class="card-body">
        <div class="row">
          <div class="col-12 col-lg-4">
            <div class="participants-div align-items-center">
              <img class="img-fluid rounded-circle uploaded-img" fluid :src="require('@/assets/images/ui_faces/1.jpg')" />
              <h4 class="head font-weight-bold text-uppercase">
                {{ localBookerInfos.firstName || 'Participant' }}
                <span type="button" @click="allowForm = true" class="d-block mt-2 text-danger text-uppercase" :style="[allowForm === true ? 'opacity: 0.4' : '']"
                  ><i class="fas fa-edit mr-2"></i> Modifier</span
                >
              </h4>
            </div>
          </div>
          <div class="col-12 col-lg-8">
            <!-- TODO float labels -->
            <form class="participants-form contact-form pt-5" :class="{ 'form--disallowed': !allowForm }">
              <div class="row">
                <div class="col-12 col-lg-5">
                  <div class="form-group has-float-label">
                    <label>Nom*</label>
                    <input type="text" name="" placeholder=" " class="form-control" v-model="localBookerInfos.lastName" />
                  </div>
                </div>
                <div class="col-12 col-lg-5 offset-1">
                  <div class="form-group has-float-label">
                    <label>Prénom*</label>
                    <input type="text" name="" placeholder=" " class="form-control" v-model="localBookerInfos.firstName" />
                  </div>
                </div>
                <div class="col-12 col-lg-5">
                  <div class="form-group has-float-label">
                    <label>DATE DE NAISSANCE*</label>
                    <input type="date" name="" class="form-control" placeholder=" " required datepicker id="date" v-model="localBookerInfos.birthDate" />
                  </div>
                </div>
                <div class="col-12 col-lg-5 offset-1">
                  <div class="form-group">
                    <div class="btn-group btn-group-toggle" data-toggle="buttons">
                      <label
                        @click="localBookerInfos.gender = 'f'"
                        class="btn gender-btn rounded-0 btn-lg px-4"
                        style="border: 1px solid #292f33"
                        :class="[localBookerInfos.gender === 'f' ? 'bg-grey text-white' : '']"
                        >Femme</label
                      >
                      <label
                        @click="localBookerInfos.gender = 'm'"
                        class="btn gender-btn rounded-0 btn-lg px-4"
                        style="border: 1px solid #292f33"
                        :class="[localBookerInfos.gender === 'm' ? 'bg-grey text-white' : '']"
                        >Homme</label
                      >
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-5">
                  <div class="form-group has-float-label">
                    <label>Téléphone*</label>
                    <input type="text" name="" placeholder=" " class="form-control" v-model="localBookerInfos.phone" />
                  </div>
                </div>
                <div class="col-12 col-lg-5 offset-1">
                  <div class="form-group has-float-label">
                    <label>ADRESSE MAIL*</label>
                    <input class="form-control" type="email" disabled name="" v-model="localBookerInfos.email" />
                    <i class="fa fa-check check-sym d-none"></i>
                  </div>
                </div>
                <div class="col-12 col-lg-5">
                  <div class="form-group has-float-label">
                    <label>Pays*</label>
                    <input type="text" name="" class="form-control" v-model="localBookerInfos.country" />
                  </div>
                </div>
                <div class="col-12 col-lg-5 offset-1">
                  <div class="form-group has-float-label">
                    <label>Adresse*</label>
                    <input type="text" name="" class="form-control" v-model="localBookerInfos.street" />
                  </div>
                </div>
                <div class="col-12 col-lg-5">
                  <div class="form-group has-float-label">
                    <label>VILLE*</label>
                    <input type="text" name="" class="form-control" v-model="localBookerInfos.city" />
                  </div>
                </div>
                <div class="col-12 col-lg-5 offset-1">
                  <div class="form-group has-float-label">
                    <label>Code postal*</label>
                    <input type="text" name="" class="form-control" v-model="localBookerInfos.postalCode" />
                  </div>
                </div>
                <!-- <div class="col-12">
                  <div class="custom-control custom-checkbox other-activity-check mb-0 mb-5 pl-0">
                    <input type="checkbox" class="custom-control-input" id="sameAddress" checked="" />
                    <label class="custom-control-label mb-0 pl-5 text-transform-none" for="sameAddress">Cette adresse est la même que l’adresse de facturation</label>
                  </div>
                </div> -->
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, helpers } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
export default {
  name: 'CheckoutWizardBooker',
  props: ['booker'],
  emits: ['updated-booker-infos', 'complete'],
  setup() {
    return { v$: useVuelidate() }
  },
  validationConfig: {
    $autoDirty: true
  },
  data() {
    return {
      allowForm: false,
      localBookerInfos: this.$props.booker.infos
    }
  },
  validations() {
    return {
      localBookerInfos: {
        firstName: {
          required: helpers.withMessage('Ce champ est requis', required)
        },
        lastName: {
          required: helpers.withMessage('Ce champ est requis', required)
        },
        birthDate: {
          required: helpers.withMessage('Ce champ est requis', required)
        },
        phone: {
          required: helpers.withMessage('Ce champ est requis', required)
        },
        gender: {
          required: helpers.withMessage('Ce champ est requis', required)
        },
        country: {
          required: helpers.withMessage('Ce champ est requis', required)
        },
        city: {
          required: helpers.withMessage('Ce champ est requis', required)
        },
        street: {
          required: helpers.withMessage('Ce champ est requis', required)
        },
        postalCode: {
          required: helpers.withMessage('Ce champ est requis', required)
        }
      }
    }
  },
  watch: {
    localBookerInfos: {
      deep: true,
      handler(val) {
        this.v$.$touch()
        this.$emit('updated-booker-infos', val)
      }
    },
    'v$.$error': {
      handler(error) {
        if (!error) this.$emit('complete', true)
        else this.$emit('complete', false)
      }
    }
  }
}
</script>

<style scoped>
.gender-btn:not(.bg-grey):hover {
  background-color: #ebebeb;
  color: #292f33;
}
.card {
  border: none;
  box-shadow: rgb(240, 240, 240) 0px 0px 6px;
  border-radius: 0 !important;
}
.form--disallowed {
  opacity: 0.3;
  pointer-events: none;
}
.has-float-label .form-control:placeholder-shown:not(:focus) + label {
  top: 0.15em;
  font-size: 100%;
  color: #fff;
  opacity: 1;
}
.has-float-label label::after {
  display: none;
}
.has-float-label label {
  left: 0;
}
.form-group {
  margin-bottom: 2rem;
}
.form-control {
  padding-left: 0;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #ffffff33;
  background-color: transparent;
  padding-bottom: 0.1rem;
  color: #fff;
}
.form-control:focus {
  background-color: transparent;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid white;
}
</style>
