<template>
  <div class="tab-pane fade" id="step3" role="tabpanel" aria-labelledby="step3-tab">
    <div class="preview-card border-0 d-none align-items-center text-uppercase flex-row bg-dark text-white px-5 rounded-lg mb-5">
      <span class="font-weight-light mr-5 ml-2">vous êtes {{ $parent.partipantsNb }} trippers</span>
      <ul class="list-unstyled mb-0 font-weight-500 name-list d-flex">
        <li>marion</li>
        <li>
          axel
          <a href="#"><i class="fa fa-times-circle ml-2 align-baseline text-white"></i></a>
        </li>
      </ul>
      <a href="#" class="ml-auto font-weight-light text-reset">modifier</a>
    </div>
    <!-- NOTE booker -->
    <div class="card d-block">
      <div class="card-header border-0 p-0 d-flex">
        <h6 class="mb-0 text-uppercase font-weight-normal d-flex align-items-center check-head px-5 p-4 flex-1">
          <div class="participant-img-container position-relative">
            <div class="d-inline-block" style="position: relative">
              <img class="participant-img mr-3" fluid :src="require('@/assets/images/ui_faces/1.jpg')" />
              <span class="participant-check"></span>
            </div>
            <strong class="participant-name h6 mb-0 font-weight-bold" style="display: inline; vertical-align: middle">{{ $parent.booker.infos.firstName || 'Participant 1' }}</strong>
          </div>
          <div class="participant-add participant-opacity position-relative d-flex align-items-center" v-for="(extraParticipant, index) in $parent.extraParticipants" :key="extraParticipant">
            <i class="fa fa-caret-right mx-3 small align-baseline caret-icon"></i>
            <i class="far fa-user-circle mx-3 align-baseline participant-icon"></i>
            <strong class="participant-name h6 mb-0 font-weight-bold">{{ extraParticipant.infos.firstName || `Participant ${index + 2}` }}</strong>
          </div>
          <div class="ml-auto text-right check-amount-head">
            SEJOUR {{ $parent.booker.infos.firstName || 'Participant 1' }}<br /><strong class="check-amount d-block mt-1">{{ $parent.course.price }} &euro;</strong>
          </div>
        </h6>
      </div>
      <div class="mx-5">
        <div class="reservation-text position-relative mt-4">
          <h6 class="font-weight-normal mb-0 d-inline-block bg-white pr-3 position-relative text-uppercase">Complète ta réservation</h6>
        </div>
        <div class="card-body p-0 pt-5">
          <h6 class="font-weight-bold">Quel type de chambre :</h6>
          <p class="font-weight-500">Dans la limite des stocks disponibles !</p>
          <div class="custom-radio-container p-4 px-5 mr-5 pb-5">
            <div class="custom-control" v-for="(room, index) in $parent.course.rooms" :key="room">
              <input v-model="$parent.booker.booking.room" :value="index" type="radio" :id="`bookerRoom${index}`" :name="`bookerRoom${index}`" class="custom-control-input" />
              <label class="custom-control-label" :for="`bookerRoom${index}`">
                <div class="d-flex align-items-center pb-2 mb-2 dotted-border">
                  <span>
                    <div class="font-weight-bold text-uppercase">{{ room.title }}</div>
                    <p class="font-weight-500 mb-0">{{ room.subtitle }}</p>
                  </span>
                  <div class="avalaible-mem col-6 justify-content-center align-items-center" v-if="room.is_sharable && $parent.extraParticipants.length > 0">
                    <p class="font-weight-500 mb-0">A partager avec :</p>
                    <select v-model="$parent.booker.booking.roomMate" class="form-control col-5 ml-3 text-capitalize custom-select">
                      <option v-for="extraParticipant in $parent.extraParticipants" :key="extraParticipant">{{ extraParticipant.infos.firstName }}</option>
                    </select>
                  </div>
                  <div class="ml-auto font-weight-bold text-uppercase">+ {{ room.price }} &euro;</div>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div class="card-body border-top p-0 pt-5">
          <h6 class="font-weight-bold">Avec ou sans location matériel :</h6>
          <p class="font-weight-500">Matériel correspondant uniquement a tan activité principale</p>
          <div class="custom-radio-container p-4 px-5 mr-5 pb-5">
            <div class="custom-control">
              <input v-model="$parent.booker.booking.equipmentRental" :value="true" type="radio" id="customRadio5" name="materielBooker" class="custom-control-input" />
              <label class="custom-control-label" for="customRadio5">
                <div class="d-flex align-items-center pb-2 mb-2 dotted-border">
                  <span>
                    <div class="font-weight-bold text-uppercase">avec materiel</div>
                    <p class="font-weight-500 mb-0">Je voyage lègé</p>
                  </span>
                  <div class="ml-auto font-weight-bold text-uppercase">inclus</div>
                </div>
              </label>
            </div>
            <div class="custom-control">
              <input v-model="$parent.booker.booking.equipmentRental" :value="false" type="radio" id="customRadio6" name="materielBooker" class="custom-control-input" />
              <label class="custom-control-label" for="customRadio6">
                <div class="d-flex align-items-center pb-2 mb-2 dotted-border">
                  <span>
                    <div class="font-weight-bold text-uppercase">sans materiel</div>
                    <p class="font-weight-500 mb-0">Je préfére venir avec mon matos !</p>
                  </span>
                  <div class="ml-auto font-weight-bold text-uppercase">reduction de 380 &euro;</div>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div class="card-body border-top p-0 pt-5">
          <h6 class="font-weight-bold">Activites en +</h6>
          <p class="font-weight-500">Vous pouvez sélectionner plusieurs activités</p>
          <div class="custom-radio-container inline-blocks py-3">
            <div class="custom-control custom-radio bg-light rounded border">
              <input v-model="$parent.booker.booking.extraActivities" value="1" type="checkbox" id="customRadio7" class="custom-control-input" :disabled="noExtraActivities" />
              <label class="custom-control-label d-flex align-items-center border-0" for="customRadio7">
                <div class="font-weight-bold text-uppercase">
                  sup-paddle<span class="border-left">+ 60&euro;<small class="text-lowercase">/pers.</small></span>
                </div>
              </label>
            </div>
          </div>
          <div class="col-12 p-0">
            <div class="custom-control custom-checkbox mb-0 other-activity-check mb-5 pl-3">
              <input v-model="$parent.booker.booking.noExtraActivities" type="checkbox" class="custom-control-input" id="exampleCheck3" />
              <label class="custom-control-label mb-0 ml-3" for="exampleCheck3">je ne souhaite pas d'autres activites</label>
            </div>
          </div>
        </div>
        <div class="card-body border-top p-0 pt-5 d-none">
          <h6 class="font-weight-bold text-uppercase mb-1">infos a savoir</h6>
          <p class="font-weight-500">Tu peux exprimer une demande specifique ou nous alerter sur tes allergies alimentaires etc...</p>
          <textarea class="form-control info-textarea bg-light p-4 mb-5" rows="5">Fais-toi plaisir !</textarea>
          <button class="btn btn-danger text-uppercase shadow p-3 px-4 continue-btn">continuer</button>
        </div>
        <div class="card-body border-top p-0 pt-5">
          <h6 class="font-weight-bold text-uppercase mb-1">infos a savoir</h6>
          <p class="font-weight-500">Tu peux exprimer une demande specifique ou nous alerter sur tes allergies alimentaires etc...</p>
          <textarea v-model="$parent.booker.booking.extraNotes" class="form-control info-textarea bg-light p-4 mb-5" rows="5">Fais-toi plaisir !</textarea>
        </div>
      </div>
    </div>
    <!-- NOTE extras -->
    <div class="card d-block" v-for="(extraParticipant, mainLoopIndex) in $parent.extraParticipants" :key="extraParticipant">
      <div class="card-header border-0 p-0 d-flex">
        <h6 class="mb-0 text-uppercase font-weight-normal d-flex align-items-center check-head px-5 p-4 flex-1">
          <div class="participant-img-container participant-opacity position-relative">
            <div class="d-inline-block" style="position: relative">
              <img class="participant-img mr-3" fluid :src="require('@/assets/images/ui_faces/1.jpg')" />
              <span class="participant-check"></span>
            </div>
            <strong class="participant-name h6 mb-0 font-weight-bold" style="display: inline; vertical-align: middle">{{ $parent.booker.infos.firstName || 'Participant 1' }}</strong>
          </div>
          <div class="participant-add position-relative d-flex align-items-center" :class="[extraParticipantForHeader === extraParticipant ? '' : 'participant-opacity']" v-for="(extraParticipantForHeader, index) in $parent.extraParticipants" :key="extraParticipantForHeader">
            <i class="fa fa-caret-right mx-3 small align-baseline caret-icon"></i>
            <i class="far fa-user-circle mx-3 align-baseline participant-icon"></i>
            <strong class="participant-name h6 mb-0 font-weight-bold">{{ extraParticipantForHeader.infos.firstName || `Participant ${index + 2}` }}</strong>
          </div>
          <div class="ml-auto text-right check-amount-head">
            SEJOUR {{ $parent.booker.infos.firstName || 'Participant 1' }}<br /><strong class="check-amount d-block mt-1">{{ $parent.course.price }} &euro;</strong>
          </div>
        </h6>
      </div>
      <div class="mx-5">
        <div class="reservation-text position-relative mt-4">
          <h6 class="font-weight-normal mb-0 d-inline-block bg-white pr-3 position-relative text-uppercase">Complète ta réservation</h6>
        </div>
        <div class="card-body p-0 pt-5">
          <h6 class="font-weight-bold">Quel type de chambre :</h6>
          <p class="font-weight-500">Dans la limite des stocks disponibles !</p>
          <div class="custom-radio-container p-4 px-5 mr-5 pb-5">
            <div class="custom-control" v-for="(room, index) in $parent.course.rooms" :key="room">
              <input v-model="extraParticipant.booking.room" :value="index" type="radio" :id="`extraPart${mainLoopIndex}-${index}`" :name="`extraPartRoom${mainLoopIndex}-${index}`" class="custom-control-input" />
              <label class="custom-control-label" :for="`extraPart${mainLoopIndex}-${index}`">
                <div class="d-flex align-items-center pb-2 mb-2 dotted-border">
                  <span>
                    <div class="font-weight-bold text-uppercase">{{ room.title }}</div>
                    <p class="font-weight-500 mb-0">{{ room.subtitle }}</p>
                  </span>
                  <div class="avalaible-mem col-6 justify-content-center align-items-center" v-if="room.is_sharable">
                    <p class="font-weight-500 mb-0">A partager avec :</p>
                    <select v-model="extraParticipant.booking.roomMate" class="form-control col-5 ml-3 text-capitalize custom-select">
                      <option>{{ $parent.booker.infos.firstName }}</option>
                      <option :disabled="extraParticipantForName === extraParticipant ? true : false" v-for="extraParticipantForName in $parent.extraParticipants" :key="extraParticipantForName">{{ extraParticipantForName.infos.firstName }}</option>
                    </select>
                  </div>
                  <div class="ml-auto font-weight-bold text-uppercase">+ {{ room.price }} &euro;</div>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div class="card-body border-top p-0 pt-5">
          <h6 class="font-weight-bold">Avec ou sans location matériel :</h6>
          <p class="font-weight-500">Matériel correspondant uniquement a tan activité principale</p>
          <div class="custom-radio-container p-4 px-5 mr-5 pb-5">
            <div class="custom-control">
              <input v-model="extraParticipant.booking.equipmentRental" :value="true" type="radio" :id="`extraPart${mainLoopIndex}-with`" :name="`material-extraPart${mainLoopIndex}`" class="custom-control-input" />
              <label class="custom-control-label" :for="`extraPart${mainLoopIndex}-with`">
                <div class="d-flex align-items-center pb-2 mb-2 dotted-border">
                  <span>
                    <div class="font-weight-bold text-uppercase">avec materiel</div>
                    <p class="font-weight-500 mb-0">Je voyage lègé</p>
                  </span>
                  <div class="ml-auto font-weight-bold text-uppercase">inclus</div>
                </div>
              </label>
            </div>
            <div class="custom-control">
              <input v-model="extraParticipant.booking.equipmentRental" :value="false" type="radio" :id="`extraPart${mainLoopIndex}-without`" :name="`material-extraPart${mainLoopIndex}`" class="custom-control-input" />
              <label class="custom-control-label" :for="`extraPart${mainLoopIndex}-without`">
                <div class="d-flex align-items-center pb-2 mb-2 dotted-border">
                  <span>
                    <div class="font-weight-bold text-uppercase">sans materiel</div>
                    <p class="font-weight-500 mb-0">Je préfére venir avec mon matos !</p>
                  </span>
                  <div class="ml-auto font-weight-bold text-uppercase">reduction de 380 &euro;</div>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div class="card-body border-top p-0 pt-5">
          <h6 class="font-weight-bold">Activites en +</h6>
          <p class="font-weight-500">Vous pouvez sélectionner plusieurs activités</p>
          <div class="custom-radio-container inline-blocks py-3">
            <div class="custom-control custom-radio bg-light rounded border">
              <input v-model="extraParticipant.booking.extraActivities" value="1" type="checkbox" id="customRadio7" class="custom-control-input" :disabled="noExtraActivities" />
              <label class="custom-control-label d-flex align-items-center border-0" for="customRadio7">
                <div class="font-weight-bold text-uppercase">
                  sup-paddle<span class="border-left">+ 60&euro;<small class="text-lowercase">/pers.</small></span>
                </div>
              </label>
            </div>
          </div>
          <div class="col-12 p-0">
            <div class="custom-control custom-checkbox mb-0 other-activity-check mb-5 pl-3">
              <input v-model="extraParticipant.booking.noExtraActivities" type="checkbox" class="custom-control-input" id="exampleCheck3" />
              <label class="custom-control-label mb-0 ml-3" for="exampleCheck3">je ne souhaite pas d'autres activites</label>
            </div>
          </div>
        </div>
        <div class="card-body border-top p-0 pt-5 d-none">
          <h6 class="font-weight-bold text-uppercase mb-1">infos a savoir</h6>
          <p class="font-weight-500">Tu peux exprimer une demande specifique ou nous alerter sur tes allergies alimentaires etc...</p>
          <textarea class="form-control info-textarea bg-light p-4 mb-5" rows="5">Fais-toi plaisir !</textarea>
          <button class="btn btn-danger text-uppercase shadow p-3 px-4 continue-btn">continuer</button>
        </div>
        <div class="card-body border-top p-0 pt-5">
          <h6 class="font-weight-bold text-uppercase mb-1">infos a savoir</h6>
          <p class="font-weight-500">Tu peux exprimer une demande specifique ou nous alerter sur tes allergies alimentaires etc...</p>
          <textarea v-model="extraParticipant.booking.extraNotes" class="form-control info-textarea bg-light p-4 mb-5" rows="5">Fais-toi plaisir !</textarea>
        </div>
      </div>
    </div>
    <!-- <div class="card completed rounded-0 mb-3">
      <div class="card-header rounded-0 border-0 p-0 d-flex">
        <h6 class="mb-0 text-uppercase font-weight-normal d-flex align-items-center check-head px-5 p-4 flex-1">
          <div class="participant-img-container position-relative"><img class="participant-img mr-3" fluid :src="require('@/assets/images/ui_faces/1.jpg')" /><span class="participant-check"></span></div>
          <strong class="participant-name h6 mb-0 font-weight-bold">marion</strong>
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
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Step3'
}
</script>

<style></style>
