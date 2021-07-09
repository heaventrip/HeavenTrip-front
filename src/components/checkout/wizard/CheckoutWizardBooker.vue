<template>
  <div class="login-signup-tab">
    <div class="card border-0 p-3" style="box-shadow: 0 0 2px #ebebeb">
      <div class="card-body">
        <div class="row">
          <div class="col-12 col-lg-4">
            <div class="participants-div align-items-center">
              <img class="img-fluid rounded-circle uploaded-img" fluid :src="require('@/assets/images/ui_faces/1.jpg')" />
              <h4 class="head font-weight-bold">
                PARTICIPANT
                <i class="fa fa-caret-right mx-3 small align-baseline"></i>1
                <span type="button" @click="allowForm = true" class="d-block mt-2 text-danger text-uppercase" :style="[allowForm === true ? 'visibility: hidden;' : '']"><i class="fas fa-edit mr-2"></i> Modifier</span>
              </h4>
            </div>
          </div>
          <div class="col-12 col-lg-8">
            <form class="participants-form contact-form pt-5" :class="{ 'form--disallowed': !allowForm }">
              <div class="row">
                <div class="col-12 col-lg-6">
                  <div class="form-group has-float-label">
                    <label>Nom*</label>
                    <input type="text" name="" class="form-control" v-model="booker.infos.lastName" />
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="form-group has-float-label">
                    <label>Prénom*</label>
                    <input type="text" name="" class="form-control" v-model="booker.infos.firstName" />
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="form-group has-float-label">
                    <label>DATE DE NAISSANCE*</label>
                    <input type="date" name="" class="form-control" placeholder=" " required datepicker id="date" v-model="booker.infos.birthDate" />
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="form-group">
                    <input type="radio" value="femme" v-model="booker.infos.gender" />
                    <label>Femme</label>
                    <input type="radio" value="homme" v-model="booker.infos.gender" />
                    <label>Homme</label>
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="form-group has-float-label">
                    <label>Téléphone*</label>
                    <input type="text" name="" class="form-control" v-model="booker.infos.phone" />
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="form-group has-float-label">
                    <label>ADRESSE MAIL*</label>
                    <input class="form-control" type="email" name="" v-model="booker.infos.email" />
                    <i class="fa fa-check check-sym d-none"></i>
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="form-group has-float-label">
                    <label>Pays*</label>
                    <input type="text" name="" class="form-control" v-model="booker.infos.country" />
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="form-group has-float-label">
                    <label>Adresse*</label>
                    <input type="text" name="" class="form-control" v-model="booker.infos.street" />
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="form-group has-float-label">
                    <label>VILLE*</label>
                    <input type="text" name="" class="form-control" v-model="booker.infos.city" />
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="form-group has-float-label">
                    <label>Code postal*</label>
                    <input type="text" name="" class="form-control" v-model="booker.infos.postalCode" />
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
export default {
  name: 'CheckoutWizardBooker',
  data() {
    return {
      allowForm: false,
      booker: {
        infos: {
          firstName: '',
          lastName: '',
          birthDate: '',
          phone: '',
          email: '',
          gender: '',
          country: '',
          city: '',
          street: '',
          postalCode: ''
        },
        booking: {
          room: [],
          roomMate: '',
          equipmentRental: null,
          noExtraActivities: false,
          extraActivities: [],
          extraNotes: '',
          insurance: ''
        }
      }
    }
  },
  computed: {
    bookerInfosFilled() {
      let obj = this.booker.infos
      return !!obj.firstName && !!obj.lastName && !!obj.birthDate && !!obj.phone && !!obj.email && !!obj.gender && !!obj.country && !!obj.city && !!obj.street && !!obj.postalCode
    }
  },
  watch: {
    booker: {
      deep: true,
      handler(val) {
        this.$emit('updated-booker', val)

        if (this.bookerInfosFilled) this.$emit('complete')
        else this.$emit('incomplete')
      }
    }
  }
}
</script>

<style scoped>
.form--disallowed {
  opacity: 0.6;
  pointer-events: none;
}
</style>
