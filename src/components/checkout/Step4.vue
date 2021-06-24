<template>
  <div class="tab-pane fade" id="step4" role="tabpanel" aria-labelledby="step4-tab">
    <!-- NOTE RECAP BOOKING -->
    <div class="card completed rounded-0 mb-0">
      <div class="card-header rounded-0 border-0 p-0 d-flex">
        <h6 class="mb-0 text-uppercase font-weight-normal d-flex align-items-center check-head px-5 p-4 flex-1">
          <div class="participant-img-container position-relative"><img class="participant-img mr-3" fluid :src="require('@/assets/images/ui_faces/1.jpg')" /><span class="participant-check"></span></div>
          <strong class="participant-name h6 mb-0 font-weight-bold">{{ $parent.booker.firstName }}</strong>
          <div class="completion-details">
            <ul class="completion-details-list mb-0 list-unstyled d-flex">
              <li>
                <h6 class="detail-head mb-0">chambre privé</h6>
                <p class="detail-desc mb-0">à partager avec Axel</p>
              </li>
              <li>
                <h6 class="detail-head mb-0">Matériel</h6>
                <p class="detail-desc mb-0">Avec location</p>
              </li>
              <li data-toggle="tooltip" data-placement="top" title="SUP-PADDLE - PLONGéE SOUS MARINE">
                <h6 class="detail-head mb-0">2 activités en +</h6>
                <p class="detail-desc mb-0">sélectionnées</p>
              </li>
            </ul>
          </div>
          <div class="ml-auto text-right check-amount-head">Mon séjour<br /><strong class="check-amount d-block mt-1">2 220 &euro;</strong></div>
        </h6>
        <div class="d-flex flex-column">
          <button class="btn text-uppercase personalize-btn rounded-0 border-0 px-4 flex-1">MODIFIER</button>
          <button class="btn text-uppercase personalize-btn remove rounded-0 border-0 px-4">RETIRER</button>
        </div>
      </div>
    </div>
    <div class="card completed rounded-0 mb-0" v-for="extraParticipant in $parent.extraParticipants" :key="extraParticipant">
      <div class="card-header rounded-0 border-0 p-0 d-flex">
        <h6 class="mb-0 text-uppercase font-weight-normal d-flex align-items-center check-head px-5 p-4 flex-1">
          <div class="participant-img-container position-relative">
            <img class="participant-img mr-3" fluid :src="require('@/assets/images/ui_faces/1.jpg')" />
          </div>
          <strong class="participant-name h6 mb-0 font-weight-bold">{{ extraParticipant.infos.firstName }}</strong>
          <div class="completion-details">
            <ul class="completion-details-list mb-0 list-unstyled d-flex">
              <li>
                <h6 class="detail-head mb-0">chambre privé</h6>
                <p class="detail-desc mb-0">à partager avec Axel</p>
              </li>
              <li>
                <h6 class="detail-head mb-0">Matériel</h6>
                <p class="detail-desc mb-0">Avec location</p>
              </li>
              <li data-toggle="tooltip" data-placement="top" title="SUP-PADDLE - PLONGéE SOUS MARINE">
                <h6 class="detail-head mb-0">2 activités en +</h6>
                <p class="detail-desc mb-0">sélectionnées</p>
              </li>
            </ul>
          </div>
          <div class="ml-auto text-right check-amount-head">Mon séjour<br /><strong class="check-amount d-block mt-1">2 220 &euro;</strong></div>
        </h6>
        <div class="d-flex flex-column">
          <button class="btn text-uppercase personalize-btn rounded-0 border-0 px-4 flex-1">MODIFIER</button>
          <button class="btn text-uppercase personalize-btn remove rounded-0 border-0 px-4">RETIRER</button>
        </div>
      </div>
    </div>
    <!-- NOTE ASSURANCES -->
    <vue-collapsible-panel-group>
      <vue-collapsible-panel>
        <template #title>Participant 1</template>
        <template #content>
          <div class="card mb-0 rounded-0 border-0">
            <div class="card-header border-0 p-0 d-flex">
              <h6 class="mb-0 text-uppercase font-weight-bold d-flex align-items-center check-head pt-5 px-5 pb-4 flex-1">
                <img class="mr-3" fluid :src="require('@/assets/images/svg/amb_icon.svg')" />
                <strong class="font-weight-bold">ASSURANCE {{ $parent.booker.infos.firstName }} </strong>
                <div class="ml-auto text-right">Tripper 1</div>
              </h6>
            </div>
            <div class="mx-5">
              <div class="card-body border-top p-0 pt-3">
                <p class="font-weight-500">Choisissez votre formule d’assurance :</p>
                <div class="custom-radio-container assurance-radio-container">
                  <div class="row">
                    <div class="col-12 col-lg-5">
                      <div class="custom-control custom-radio dotted-border pb-3 mt-2 mb-4">
                        <input v-model="$parent.booker.booking.insurance" type="radio" id="Radio11" name="insurance_plan" class="custom-control-input" />
                        <label class="custom-control-label" for="Radio11">
                          <div class="d-flex align-items-center mb-2 font-weight-bold">
                            Rapatriment 60&euro;<span>/pers.</span>
                            <div class="ml-auto">
                              <img class="" fluid :src="require('@/assets/images/GEODESK_logo_Color.png')" />
                            </div>
                          </div>
                        </label>
                      </div>
                      <ul class="pl-3 assurance-list font-weight-500">
                        <li>Responsabilite civile</li>
                        <li>Rapatriement</li>
                        <li>Assistance medicale</li>
                        <li>Assurance bagages</li>
                        <li>Assistance voyage</li>
                      </ul>
                    </div>
                    <div class="col-12 col-lg-6 offset-lg-1">
                      <div class="custom-control custom-radio dotted-border pb-3 mt-2 mb-4">
                        <input v-model="$parent.booker.booking.insurance" type="radio" id="Radio12" name="insurance_plan" class="custom-control-input" />
                        <label class="custom-control-label" for="Radio12">
                          <div class="d-flex align-items-center mb-2 font-weight-bold">
                            Rapatriment 60&euro;<span>/pers.</span>
                            <div class="ml-auto">
                              <img class="" fluid :src="require('@/assets/images/GEODESK_logo_Color.png')" />
                            </div>
                          </div>
                        </label>
                      </div>
                      <ul class="pl-3 assurance-list font-weight-500">
                        <li>Responsabilite civile</li>
                        <li>Rapatriement</li>
                        <li>Assistance medicale</li>
                        <li>Assurance bagages</li>
                        <li>Assistance voyage</li>
                      </ul>
                    </div>
                    <div class="col-12">
                      <div class="custom-control custom-radio dotted-border pb-3 mt-2 mb-3">
                        <input v-model="$parent.booker.booking.insurance" type="radio" id="Radio13" name="insurance_plan" class="custom-control-input" />
                        <label class="custom-control-label" for="Radio13">
                          <div class="d-flex align-items-center mb-2 font-weight-bold">
                            Je suis deja assure 0&euro;<span class="d-none">/pers.</span>
                            <div class="ml-auto">
                              <img class="" fluid :src="require('@/assets/images/GEODESK_logo_Color.png')" />
                            </div>
                          </div>
                        </label>
                      </div>
                      <p class="assurance-para font-weight-500">Si vous ne prenez pas d'assurances avec Heaven Trip, il vous sera demande de bien vouloir nous transmettre les informations de votre police d'assurance et les personnes a contacter en cas d'urgence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div></template
        >
      </vue-collapsible-panel>
      <vue-collapsible-panel v-for="(extraParticipant, index) in $parent.extraParticipants" :key="extraParticipant">
        <template #title>Participant {{ index + 2 }}</template>
        <template #content>
          <div class="card mb-0 rounded-0 border-0">
            <div class="card-header border-0 p-0 d-flex">
              <h6 class="mb-0 text-uppercase font-weight-bold d-flex align-items-center check-head pt-5 px-5 pb-4 flex-1">
                <img class="mr-3" fluid :src="require('@/assets/images/svg/amb_icon.svg')" />
                <strong class="font-weight-bold">ASSURANCE {{ extraParticipant.infos.firstName }} </strong>
                <div class="ml-auto text-right">Tripper {{ index + 2 }}</div>
              </h6>
            </div>
            <div class="mx-5">
              <div class="card-body border-top p-0 pt-3">
                <p class="font-weight-500">Choisissez votre formule d’assurance :</p>
                <div class="custom-radio-container assurance-radio-container">
                  <div class="row">
                    <div class="col-12 col-lg-5">
                      <div class="custom-control custom-radio dotted-border pb-3 mt-2 mb-4">
                        <input v-model="extraParticipant.booking.insurance" type="radio" id="Radio11" name="insurance_plan" class="custom-control-input" />
                        <label class="custom-control-label" for="Radio11">
                          <div class="d-flex align-items-center pt-2 mb-2 font-weight-bold">
                            Rapatriment 60&euro;<span>/pers.</span>
                            <div class="ml-auto">
                              <img class="" fluid :src="require('@/assets/images/GEODESK_logo_Color.png')" />
                            </div>
                          </div>
                        </label>
                      </div>
                      <ul class="pl-3 assurance-list font-weight-500">
                        <li>Responsabilite civile</li>
                        <li>Rapatriement</li>
                        <li>Assistance medicale</li>
                        <li>Assurance bagages</li>
                        <li>Assistance voyage</li>
                      </ul>
                    </div>
                    <div class="col-12 col-lg-6 offset-lg-1">
                      <div class="custom-control custom-radio dotted-border pb-3 mt-2 mb-4">
                        <input v-model="extraParticipant.booking.insurance" type="radio" id="Radio12" name="insurance_plan" class="custom-control-input" />
                        <label class="custom-control-label" for="Radio12">
                          <div class="d-flex align-items-center pt-2 mb-2 font-weight-bold">
                            Rapatriment 60&euro;<span>/pers.</span>
                            <div class="ml-auto">
                              <img class="" fluid :src="require('@/assets/images/GEODESK_logo_Color.png')" />
                            </div>
                          </div>
                        </label>
                      </div>
                      <ul class="pl-3 assurance-list font-weight-500">
                        <li>Responsabilite civile</li>
                        <li>Rapatriement</li>
                        <li>Assistance medicale</li>
                        <li>Assurance bagages</li>
                        <li>Assistance voyage</li>
                      </ul>
                    </div>
                    <div class="col-12">
                      <div class="custom-control custom-radio dotted-border pb-3 mt-2 mb-3">
                        <input v-model="extraParticipant.booking.insurance" type="radio" id="Radio13" name="insurance_plan" class="custom-control-input" />
                        <label class="custom-control-label" for="Radio13">
                          <div class="d-flex align-items-center pt-2 mb-2 font-weight-bold">
                            Je suis deja assure 0&euro;<span class="d-none">/pers.</span>
                            <div class="ml-auto">
                              <img class="" fluid :src="require('@/assets/images/GEODESK_logo_Color.png')" />
                            </div>
                          </div>
                        </label>
                      </div>
                      <p class="assurance-para font-weight-500">Si vous ne prenez pas d'assurances avec Heaven Trip, il vous sera demande de bien vouloir nous transmettre les informations de votre police d'assurance et les personnes a contacter en cas d'urgence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </vue-collapsible-panel>
    </vue-collapsible-panel-group>
  </div>
</template>

<script>
import { VueCollapsiblePanelGroup, VueCollapsiblePanel } from '@dafcoe/vue-collapsible-panel'

export default {
  name: 'Step4',
  components: {
    VueCollapsiblePanelGroup,
    VueCollapsiblePanel
  }
}
</script>

<style></style>
