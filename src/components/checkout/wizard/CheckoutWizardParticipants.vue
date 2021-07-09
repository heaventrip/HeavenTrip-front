<template>
  <div class="login-signup-tab">
    <div v-for="(extraParticipant, index) in extraParticipants" :key="index">
      <div class="card border-0 p-3">
        <div class="card-header border-0">
          <h6 class="mb-0 text-uppercase font-weight-bold d-flex align-items-center">
            <img class="participant-img mr-3" fluid :src="require('@/assets/images/ui_faces/1.jpg')" />
            Participant
            <i class="fa fa-caret-right mx-3 small align-baseline"></i>
            {{ index + 2 }}
            <a @click.prevent="removeParticipant(index, $event)" href="#" class="remove-parti text-decoration-none"
              ><i class="fa fa-times-circle ml-4 mr-2 h6 mb-0"></i>
              retirer ce participant
            </a>
          </h6>
        </div>
        <div class="card-body">
          <form class="participants-form contact-form pt-4">
            <div class="row">
              <div class="col-12 col-lg-4">
                <div class="form-group has-float-label pr-5">
                  <input v-model="extraParticipant.infos.firstName" class="form-control" type="text" />
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
                  <label for="emailAddr">Email*</label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div @click="addParticipant" class="btn-add-participant" type="button">
      <span> Ajouter un participant <InlineSvg class="ml-2" style="vertical-align: bottom" :src="require('@/assets/svg/plus.svg')" height="20" fill="#292f33" /></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckoutWizardParticipants',
  data() {
    return {
      allowForm: false,
      extraParticipants: []
    }
  },
  computed: {
    participantsFilled() {
      return this.extraParticipants.every((part) => {
        return part.infos.firstName && part.infos.birthDate && part.infos.email
      })
    }
  },
  watch: {
    extraParticipants: {
      deep: true,
      handler(val) {
        this.$emit('updated-participants', val)

        if (this.participantsFilled) this.$emit('complete')
        else this.$emit('incomplete')
      }
    }
  },
  methods: {
    addParticipant() {
      this.extraParticipants.push({
        infos: {
          firstName: '',
          birthDate: '',
          email: ''
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
      })
    },
    removeParticipant(index) {
      this.extraParticipants.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.form--disallowed {
  opacity: 0.6;
  pointer-events: none;
}
.btn-add-participant {
  border: 1px solid #ebebeb;
  padding: 1.5rem;
  text-align: center;
  background-color: #fff;
  font-family: Oswald, sans-serif;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 500;
}
</style>
