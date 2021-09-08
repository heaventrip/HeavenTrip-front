<template>
  <div class="login-signup-tab">
    <div class="card card-booker d-flex flex-row align-items-center" style="padding: 1.25rem 2.25rem">
      <div class="d-inline-block" style="position: relative" data-v-9215de46="">
        <img
          v-if="avatarKey"
          class="participant-img mr-3"
          fluid
          :src="`https://res.cloudinary.com/heaventrip/image/upload/v1624837376/${avatarKey}.jpg`"
          style="height: 70px; border: 1px solid #292f33; box-shadow: none; outline: none"
        />
        <InlineSvg v-else :src="require('@/assets/svg/avatar-empty.svg')" height="70" style="margin-right: 1rem" fill="#292f33" />
        <span class="participant-check" data-v-9215de46=""></span>
      </div>
      <InlineSvg :src="require('@/assets/svg/triangle-right.svg')" height="8" style="margin-left: 1rem; margin-right: 1rem" />
      <div class="text-uppercase participant-name h6 mb-0 font-weight-bold">{{ booker?.infos.firstName }}</div>
      <div class="ml-auto">
        <span type="button" @click="$emit('clicked-my-infos')" class="d-block text-danger text-uppercase" style="font-size: 0.8rem; font-weight: 400"><i class="fas fa-edit mr-2"></i> Mes infos</span>
      </div>
    </div>
    <transition-group name="participant-fade" @enter="test">
      <div v-for="(extraParticipant, index) in localExtraParticipants" :key="extraParticipant">
        <div class="card border-0 px-3 pt-3">
          <div class="card-header border-0">
            <div class="d-flex flex-row align-items-center">
              <div class="d-inline-block" style="position: relative" data-v-9215de46="">
                <InlineSvg :src="require('@/assets/svg/avatar-empty.svg')" height="40" fill="#292f33" />
                <!-- <span class="participant-check" data-v-9215de46=""></span> -->
              </div>
              <InlineSvg :src="require('@/assets/svg/triangle-right.svg')" height="8" style="margin-left: 1rem; margin-right: 1rem" />
              <div class="text-uppercase participant-name h6 mb-0 font-weight-bold">{{ extraParticipant.infos.firstName || 'Participant 2' }}</div>
              <div class="ml-auto">
                <span type="button" @click.prevent="removeParticipant(index)" class="d-block text-danger text-uppercase" style="font-size: 0.8rem; font-weight: 400">
                  <i class="fa fa-times-circle ml-4 mr-2 h6 mb-0"></i>
                  Retirer ce participant
                </span>
              </div>
            </div>
          </div>
          <div class="card-body pb-0">
            <form class="participants-form contact-form pt-4">
              <div class="row">
                <div class="col-12 col-lg-4">
                  <div class="form-group has-float-label pr-5">
                    <input v-model="extraParticipant.infos.firstName" class="form-control" type="text" name="" placeholder=" " />
                    <label>Prénom*</label>
                  </div>
                </div>
                <div class="col-12 col-lg-4">
                  <div class="form-group has-float-label pr-5">
                    <input v-model="extraParticipant.infos.birthDate" type="date" name="" class="form-control" placeholder=" " required datepicker id="date" />
                    <label for="date">Date de naissance*</label>
                  </div>
                </div>
                <div class="col-12 col-lg-4">
                  <div class="form-group has-float-label">
                    <input v-model="extraParticipant.infos.email" id="emailAddr" class="form-control" type="email" name="" placeholder=" " />
                    <label for="emailAddr">E-mail*</label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </transition-group>
    <div @click="addParticipant" class="btn-add-participant" type="button">
      <span>Ajouter un participant <InlineSvg class="plus-icon ml-2" style="vertical-align: bottom" :src="require('@/assets/svg/plus.svg')" height="20" /></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckoutWizardParticipants',
  props: ['booker', 'avatar-key', 'extra-participants'],
  data() {
    return {
      allowForm: false,
      localExtraParticipants: this.$props.extraParticipants
    }
  },
  computed: {
    filled() {
      let arr = new Array()
      this.localExtraParticipants.forEach((part) => arr.push(part.infos.firstName, part.infos.birthDay))
      return arr.every((el) => {
        el && el.length
      })
    }
  },
  watch: {
    localExtraParticipants: {
      deep: true,
      handler(val) {
        this.$emit('updated-participants', val)
      }
    }
  },
  methods: {
    isEmailValid(email) {
      const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      return email.match(validRegex) ? true : false
    },
    addParticipant() {
      this.localExtraParticipants.push({
        infos: {
          firstName: '',
          birthDate: '',
          email: ''
        },
        booking: {
          room: 0,
          roomMate: '',
          equipmentRental: null,
          noExtraActivities: false,
          extraActivities: [],
          comment: '',
          insurance: ''
        }
      })
    },
    test() {
      document.querySelector('.btn-add-participant').scrollIntoView({ behavior: 'smooth' })
    },
    removeParticipant(index) {
      this.localExtraParticipants.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.form--disallowed {
  opacity: 0.6;
  pointer-events: none;
}
.card {
  border: none;
  box-shadow: rgb(240, 240, 240) 0px 0px 6px;
  max-width: 1200px;
  padding: 1.25rem 2.25rem;
  border-radius: 0 !important;
}
.card-booker {
  background-color: #ebebeb38;
}
.btn-add-participant,
.btn-add-participant:active {
  border: 1px solid #ebebeb;
  padding: 1.5rem;
  text-align: center;
  background-color: #fff;
  font-family: Oswald, sans-serif;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.3s ease;
}
.btn-add-participant:hover {
  background-color: #292f33;
  color: white;
}
.btn-add-participant:hover .plus-icon {
  fill: white;
  transition: fill 0.3s ease;
}
.plus-icon {
  fill: #292f33;
  transition: fill 0.3s ease;
}
</style>
