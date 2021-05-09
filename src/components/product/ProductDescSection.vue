<template>
  <div>
    <div class="custom-datepicker-container d-none sticky-picker">
      <h5 class="date-head bg-danger text-white mb-0 text-uppercase d-flex align-items-center py-3 px-4 font-weight-bold">CHOIX DES DATES <i class="fa fa-times ml-auto"></i></h5>
      <div id="show-datepicker"></div>
    </div>
    <div class="session-date-container d-none">
      <h5 class="date-head bg-danger text-white mb-0 text-uppercase d-flex align-items-center py-3 px-4 font-weight-bold">CHOIX DE LA SESSION <i class="fa fa-times ml-auto"></i></h5>
      <div class="session-content-container">
        <ul class="list-unstyled session-content-list">
          <li>
            <h5 class="d-flex align-items-center session-head pb-1 font-weight-bold">
              25 avril <i class="fa fa-chevron-right mx-3 pl-1 arrow"></i> 2 mai
              <span class="ml-auto border-left border-dark pl-3">1160 €</span>
            </h5>
            <h6 class="session-sub-head mb-0">
              <img class="place_img mr-1" fluid :src="require('@/assets/images/places_d.png')" />
              3 inscrits validés
              <span class="light-badge ml-4">7 places restantes</span>
            </h6>
            <div class="text-center">
              <div class="d-inline-flex section-update mx-auto mt-3 mb-2 session-img-list">
                <a href="#" class=""><img fluid :src="require('@/assets/images/ui_faces/1.jpg')" /></a>
                <a href="#" class=""><img fluid :src="require('@/assets/images/ui_faces/2.jpg')" /></a>
                <a href="#" class=""><img fluid :src="require('@/assets/images/ui_faces/3.jpg')" /></a>
              </div>
              <h6 class="text-danger"><strong>2 Trippers</strong> pour confirmer le départ</h6>
            </div>
            <button class="btn btn-block btn-danger font-weight-bold letter-space">CHOISIR</button>
          </li>
          <li>
            <h5 class="d-flex align-items-center update-section session-head pb-1 font-weight-bold">
              25 avril <i class="fa fa-chevron-right mx-3 pl-1 arrow"></i> 2 mai
              <span class="ml-auto border-left border-dark pl-3">1160 €</span>
            </h5>
            <h6 class="session-sub-head mb-0">
              <img class="place_img mr-1" fluid :src="require('@/assets/images/places_d.png')" />
              3 inscrits validés
              <span class="light-badge ml-4">7 places restantes</span>
            </h6>
            <div class="text-center">
              <div class="d-inline-flex mx-auto mt-3 mb-2 session-img-list">
                <a href="#" class=""><img fluid :src="require('@/assets/images/ui_faces/1.jpg')" /></a>
                <a href="#" class=""><img fluid :src="require('@/assets/images/ui_faces/2.jpg')" /></a>
                <a href="#" class=""><img fluid :src="require('@/assets/images/ui_faces/3.jpg')" /></a>
              </div>
              <h6 class="text-danger"><strong>2 Trippers</strong> pour confirmer le départ</h6>
            </div>
            <button class="btn btn-block btn-danger font-weight-bold letter-space">CHOISIR</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="participants-container d-none">
      <div class="top-div">
        <div class="pl-3 pb-4">
          <img class="head-pin-icon d-inline-block" fluid :src="require('@/assets/images/head-pin-dark.png')" />
          <h5 class="head text-uppercase mb-0 d-inline-block">
            <strong>ski</strong> freeride
            <span class="d-block sub-head"><i class="fas fa-caret-right mr-1"></i>serre-chevalier</span>
          </h5>
        </div>
        <div class="d-flex align-items-center session-head py-3 px-4 text-white font-weight-bold bg-dark">
          25 avril <i class="fa fa-chevron-right mx-3 pl-1 arrow"></i> 2 mai
          <span class="ml-auto">1160 €</span>
        </div>
      </div>
      <div class="participants-count-block py-5 text-center">
        <h5 class="count-head text-uppercase">Participants</h5>
        <h6 class="place-count text-uppercase"><strong>2 places</strong> restantes</h6>
        <form class="d-inline-flex align-items-center">
          <div class="value-button decrease" id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
          <input class="count-number" type="number" id="number" value="1" max="3" />
          <div class="value-button increase" id="increase" onclick="increaseValue()" value="Increase Value">+</div>
        </form>
      </div>
      <button class="participants-block btn btn-danger btn-block p-4 font-weight-bold letter-space rounded-0 text-uppercase">RéSERVER</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDescSection',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
