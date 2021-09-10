<template>
  <div class="login-signup-tab">
    <div class="card border-0">
      <div class="card-body">
        <div class="row">
          <div class="col-12 col-lg-4">
            <div class="participants-div align-items-center">
              <img
                v-if="avatarKey"
                class="participant-img mr-3"
                fluid
                :src="`https://res.cloudinary.com/heaventrip/image/upload/v1624837376/${avatarKey}.jpg`"
                style="height: 70px; border: 1px solid #292f33; box-shadow: none; outline: none"
              />
              <InlineSvg v-else :src="require('@/assets/svg/avatar-empty.svg')" height="70" style="margin-right: 1rem; margin-bottom: 1rem" fill="#292f33" />
              <h4 class="head font-weight-bold text-uppercase">
                {{ localBooker.infos.firstName || 'Participant' }}
                <span type="button" @click="allowForm = true" class="d-block mt-2 text-danger text-uppercase" :style="[allowForm === true ? 'opacity: 0.4' : '']"
                  ><i class="fas fa-edit mr-2"></i> Modifier</span
                >
              </h4>
            </div>
          </div>
          <div class="col-12 col-lg-8">
            <form class="pt-5" :class="{ 'form--disallowed': !allowForm }">
              <div class="row">
                <div class="col-12 col-lg-5">
                  <div class="form-group has-float-label">
                    <input
                      id="booker-lastname"
                      type="text"
                      name=""
                      placeholder=" "
                      class="form-control"
                      :class="{ 'field-error': v$.localBooker.infos.lastName.$error }"
                      v-model="localBooker.infos.lastName"
                    />
                    <label for="booker-lastname">Nom*</label>
                    <div v-if="v$.localBooker.infos.lastName.$errors.length" class="field-error-message">{{ v$.localBooker.infos.lastName.$errors[0].$message }}</div>
                  </div>
                </div>
                <div class="col-12 col-lg-5 offset-1">
                  <div class="form-group has-float-label">
                    <input
                      id="booker-firstname"
                      type="text"
                      name=""
                      placeholder=" "
                      class="form-control"
                      :class="{ 'field-error': v$.localBooker.infos.firstName.$error }"
                      v-model="localBooker.infos.firstName"
                    />
                    <label for="booker-firstname">Prénom*</label>
                    <div v-if="v$.localBooker.infos.firstName.$errors.length" class="field-error-message">{{ v$.localBooker.infos.firstName.$errors[0].$message }}</div>
                  </div>
                </div>
                <div class="col-12 col-lg-5">
                  <div class="form-group has-float-label">
                    <input
                      id="booker-birthdate"
                      type="date"
                      name=""
                      class="form-control"
                      :class="{ 'field-error': v$.localBooker.infos.birthDate.$error }"
                      placeholder=" "
                      required
                      datepicker
                      v-model="localBooker.infos.birthDate"
                    />
                    <label for="booker-birthdate">DATE DE NAISSANCE*</label>
                    <div v-if="v$.localBooker.infos.birthDate.$errors.length" class="field-error-message">{{ v$.localBooker.infos.birthDate.$errors[0].$message }}</div>
                  </div>
                </div>
                <div class="col-12 col-lg-5 offset-1">
                  <div class="form-group has-float-label">
                    <div class="btn-group btn-group-toggle" data-toggle="buttons">
                      <div
                        @click="localBooker.infos.gender = 'f'"
                        class="btn gender-btn rounded-0 px-4"
                        style="border: 1px solid #292f33"
                        :class="[localBooker.infos.gender === 'f' ? 'bg-grey text-white' : '']"
                      >
                        Femme
                      </div>
                      <div
                        @click="localBooker.infos.gender = 'm'"
                        class="btn gender-btn rounded-0 px-4"
                        style="border: 1px solid #292f33"
                        :class="[localBooker.infos.gender === 'm' ? 'bg-grey text-white' : '']"
                      >
                        Homme
                      </div>
                    </div>
                    <div v-if="v$.localBooker.infos.gender.$errors.length" class="field-error-message">{{ v$.localBooker.infos.gender.$errors[0].$message }}</div>
                  </div>
                </div>
                <div class="col-12 col-lg-5">
                  <div class="form-group has-float-label">
                    <input id="booker-phone" type="text" name="" placeholder=" " class="form-control" :class="{ 'field-error': v$.localBooker.infos.phone.$error }" v-model="localBooker.infos.phone" />
                    <label for="booker-phone">Téléphone*</label>
                    <div v-if="v$.localBooker.infos.phone.$errors.length" class="field-error-message">{{ v$.localBooker.infos.phone.$errors[0].$message }}</div>
                  </div>
                </div>
                <div class="col-12 col-lg-5 offset-1">
                  <div class="form-group has-float-label">
                    <input class="form-control" type="email" disabled name="" v-model="localBooker.infos.email" />
                    <label for="">E-mail*</label>
                    <i class="fa fa-check check-sym d-none"></i>
                  </div>
                </div>
                <div class="col-12 col-lg-5">
                  <div class="form-group has-float-label">
                    <CountrySelect
                      id="booker-country"
                      style="position: relative; right: 3px"
                      v-model="localBooker.infos.country"
                      :country="localBooker.infos.country"
                      :countryName="true"
                      :removePlaceholder="true"
                      topCountry="France"
                      className="form-control"
                    />
                    <label for="booker-country">Pays*</label>
                    <div v-if="v$.localBooker.infos.country.$errors.length" class="field-error-message">{{ v$.localBooker.infos.country.$errors[0].$message }}</div>
                  </div>
                </div>
                <div class="col-12 col-lg-5 offset-1">
                  <div class="form-group has-float-label">
                    <input
                      id="booker-street"
                      type="text"
                      name=""
                      placeholder=" "
                      class="form-control"
                      :class="{ 'field-error': v$.localBooker.infos.street.$error }"
                      v-model="localBooker.infos.street"
                    />
                    <label for="booker-street">Adresse*</label>
                    <div v-if="v$.localBooker.infos.street.$errors.length" class="field-error-message">{{ v$.localBooker.infos.street.$errors[0].$message }}</div>
                  </div>
                </div>
                <div class="col-12 col-lg-5">
                  <div class="form-group has-float-label">
                    <input id="booker-city" type="text" name="" placeholder=" " class="form-control" :class="{ 'field-error': v$.localBooker.infos.city.$error }" v-model="localBooker.infos.city" />
                    <label for="booker-city">VILLE*</label>
                    <div v-if="v$.localBooker.infos.city.$errors.length" class="field-error-message">{{ v$.localBooker.infos.city.$errors[0].$message }}</div>
                  </div>
                </div>
                <div class="col-12 col-lg-5 offset-1">
                  <div class="form-group has-float-label">
                    <input
                      id="booker-postalcode"
                      type="text"
                      name=""
                      placeholder=" "
                      class="form-control"
                      :class="{ 'field-error': v$.localBooker.infos.postalCode.$error }"
                      v-model="localBooker.infos.postalCode"
                    />
                    <label for="booker-postalcode">Code postal*</label>
                    <div v-if="v$.localBooker.infos.postalCode.$errors.length" class="field-error-message">{{ v$.localBooker.infos.postalCode.$errors[0].$message }}</div>
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
import { required, helpers, numeric } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

export default {
  name: 'CheckoutWizardBooker',
  props: ['booker', 'avatar-key'],
  emits: ['updated-booker-infos', 'complete'],
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      currUser: null,
      allowForm: '',
      localBooker: this.$props.booker
    }
  },
  validations() {
    return {
      localBooker: {
        infos: {
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
            required: helpers.withMessage('Ce champ est requis', required),
            numeric: helpers.withMessage('Numéro invalide', numeric)
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
    }
  },
  watch: {
    localBooker: {
      deep: true,
      handler(val) {
        this.v$.localBooker.infos.$touch()
        this.$emit('updated-booker-infos', val)
      }
    },
    'v$.localBooker.infos.$error': {
      handler(error) {
        if (!error) this.$emit('complete', true)
        else this.$emit('complete', false)

        this.allowForm ||= error
      }
    }
  },
  methods: {}
}
</script>

<style scoped>
.gender-btn:not(.bg-grey):hover {
  background-color: #f1f1f1;
  color: #292f33;
}
.card {
  border: none;
  box-shadow: rgb(240, 240, 240) 0px 0px 6px;
  border-radius: 0 !important;
}
.form-group > label {
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 500;
  color: #292f33;
}
.form--disallowed {
  opacity: 0.3;
  pointer-events: none;
}
.has-float-label .form-control:placeholder-shown:not(:focus) + label {
  top: 0.8em;
  font-size: 90%;
  color: #292f33;
  opacity: 1;
}
.has-float-label label::after {
  display: none;
}
.has-float-label label {
  left: 0;
}
.form-group {
  margin-bottom: 2.5rem;
}
.form-control {
  padding-left: 0;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #292f3357;
  background-color: transparent;
  padding-bottom: 0.1rem;
  color: #292f33;
  font-weight: 200;
}
.form-control:focus {
  background-color: transparent;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #292f33;
}
.field-error {
  border-bottom: 1px solid tomato !important;
}
.field-error-message {
  position: absolute;
  font-family: Muli, sans-serif;
  color: tomato;
  font-size: 0.6rem;
}
</style>
