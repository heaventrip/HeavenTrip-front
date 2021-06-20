<template>
  <div class="tab-pane fade login-signup-tab" id="step2" role="tabpanel" aria-labelledby="step2-tab">
    <div class="card border-0 p-3">
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
                    <input type="text" name="" class="form-control" value="qwertyui" />
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="form-group has-float-label">
                    <label>Prénom*</label>
                    <input type="text" name="" class="form-control" value="qwertyui" />
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="form-group has-float-label">
                    <label>DATE DE NAISSANCE*</label>
                    <div class="form-row">
                      <div class="col-3">
                        <input type="number" name="" class="form-control" value="04" />
                      </div>
                      <div class="col-3">
                        <input type="number" name="" class="form-control" value="11" />
                      </div>
                      <div class="col-6">
                        <input type="number" name="" class="form-control" value="1982" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="form-group has-float-label">
                    <div class="btn-group btn-group-toggle fem-hom-toggle text-capitalize" data-toggle="buttons">
                      <div class="btn btn-lg px-4 left-btn text-capitalize active">
                        <input type="radio" name="options" checked="" />
                        Femme
                      </div>
                      <div class="btn btn-lg px-4 right-btn text-capitalize">
                        <input type="radio" name="options" />
                        Homme
                      </div>
                    </div>
                    <label class="position-label">*</label>
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="form-group has-float-label">
                    <label>Téléphone*</label>
                    <input type="number" name="" class="form-control" value="566767565656" />
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="form-group has-float-label">
                    <label>ADRESSE MAIL*</label>
                    <input class="form-control" type="email" name="" value="wertyu@dfgh.fgh" />
                    <i class="fa fa-check check-sym d-none"></i>
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="form-group has-float-label">
                    <label>Pays*</label>
                    <input type="text" name="" class="form-control" value="qwertyui" />
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="form-group has-float-label">
                    <label>Adresse*</label>
                    <input type="text" name="" class="form-control" value="qwertyui" />
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="form-group has-float-label">
                    <label>VILLE*</label>
                    <input type="text" name="" class="form-control" value="qwertyui" />
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="form-group has-float-label">
                    <label>Code postal*</label>
                    <input type="text" name="" class="form-control" value="qwertyui" />
                  </div>
                </div>
                <div class="col-12">
                  <div class="custom-control custom-checkbox other-activity-check mb-0 mb-5 pl-0">
                    <input type="checkbox" class="custom-control-input" id="sameAddress" checked="" />
                    <label class="custom-control-label mb-0 pl-5 text-transform-none" for="sameAddress">Cette adresse est la même que l’adresse de facturation</label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="card border-0 p-3 d-none">
      <a href="#" class="d-flex justify-content-center text-center text-uppercase text-reset text-decoration-none add-participant">ajouter un participant <i class="fa fa-plus-circle ml-3 h4 mb-0"></i></a>
    </div>
    <div class="card border-0 p-3" v-for="i in participants.length" :key="i">
      <div class="card-header border-0">
        <h6 class="mb-0 text-uppercase font-weight-bold d-flex align-items-center">
          <img class="participant-img mr-3" fluid :src="require('@/assets/images/ui_faces/1.jpg')" />
          participants
          <i class="fa fa-caret-right mx-3 small align-baseline"></i>
          2
          <a @click.prevent="hideParticipant($event)" href="#" class="remove-parti text-decoration-none"
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
                <input v-model="extraParticipantsFirstName[i]" class="form-control" type="text" />
                <label>Prénom*</label>
              </div>
            </div>
            <div class="col-12 col-lg-4">
              <div class="form-group has-float-label pr-5">
                <input v-model="extraParticipantsBirthday[i]" type="date" name="" class="form-control" placeholder=" " required datepicker id="date" />
                <label for="date">DATE DE NAISSANCE*</label>
              </div>
            </div>
            <div class="col-12 col-lg-4">
              <div class="form-group has-float-label">
                <input v-model="extraParticipantsEmail[i]" id="emailAddr" class="form-control" type="email" name="" placeholder=" " />
                <label for="emailAddr">Email*</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div @click="addParticipant" class="btn-add-participant" type="button">
      <span> Ajouter un participant <InlineSvg class="ml-2" style="vertical-align: bottom" :src="require('@/assets/svg/plus.svg')" height="20" fill="#292f33" /></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step2',
  data() {
    return {
      extraParticipantsFirstName: [],
      extraParticipantsBirthday: [],
      extraParticipantsEmail: [],
      allowForm: false,
      participants: ['']
    }
  },
  methods: {
    addParticipant() {
      this.participants.push('')
    },
    hideParticipant(e) {
      e.target.closest('.card').classList.add('d-none')
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
