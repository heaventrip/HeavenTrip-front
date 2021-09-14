<template>
  <div class="wrap">
    <div class="wrapper">
      <div class="left-panel">
        <div class="top-bar">
          <InlineSvg class="top-bar__close-btn" @click="handlePageClose" type="button" :src="require('@/assets/images/svg/PICTO_CLOSE_PLEIN.svg')" height="60" />
          <div class="top-bar__page-title">
            <div class="top-bar__page-title__text">Mes informations</div>
          </div>
        </div>
        <div class="left-panel__content p-4">
          <div class="d-flex justify-content-center align-items-center my-auto">
            <div style="position: relative; width: 20%" class="mr-3">
              <img class="avatar-img" :src="`https://res.cloudinary.com/heaventrip/image/upload/avatars/${currUser?.avatarKey}.jpg`" />
              <!-- TODO install component to update avatar -->
              <div
                v-if="false"
                style="position: absolute; display: flex; border-radius: 50%; box-shadow: rgb(235, 235, 235) 0px 0px 6px; background-color: white; bottom: 0; right: 0; width: 3rem; height: 3rem"
              >
                <InlineSvg class="m-auto" :src="require('@/assets/svg/camera.svg')" height="30" />
              </div>
            </div>
            <div class="text-left">
              <div style="font-size: 1.2rem; font-weight: 200; text-transform: uppercase">{{ currUser?.firstName }}</div>
              <div style="font-size: 1.2rem; font-weight: 500; text-transform: uppercase">{{ currUser?.lastName }}</div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="currUser" class="cards-container">
        <div class="cards-container__reservation-row">
          <div class="card border-0 w-100">
            <div class="card-body">
              <div class="card__title align-items-center justify-content-between" style="margin-bottom: 2rem">
                <div>Mes réservations</div>
              </div>
              <div class="d-flex w-100 align-items-center justify-content-between" style="padding-bottom: 0.5rem; margin-bottom: 0.75rem; border-bottom: 1px solid #b4b4b4; font-weight: 400">
                <div style="width: 20%">Numéro de réservation</div>
                <div style="width: 20%">Date</div>
                <div style="width: 20%">Produit</div>
                <div style="width: 20%">Statut</div>
                <div style="width: 20%">Prix total</div>
              </div>
              <div
                v-for="(reservation, index) in currUser?.reservations"
                :key="reservation"
                class="d-flex w-100 align-items-center justify-content-between"
                style="padding-bottom: 0.5rem; margin-bottom: 0.5rem; font-family: Muli, sans-serif; font-size: 0.875rem"
                :style="index !== currUser?.reservations.length - 1 ? 'border-bottom: 1px dashed #7c7c7c' : 'padding-bottom: 0rem; margin-bottom: 0rem'"
              >
                <div style="width: 20%">{{ reservation.id }}</div>
                <div style="width: 20%">{{ new Date(reservation.updatedAt).toLocaleString('fr-FR', { day: 'numeric', month: 'numeric', year: 'numeric' }) }}</div>
                <div style="width: 20%">{{ reservation.session?.courseId }}</div>
                <div style="width: 20%">{{ reservation.stripePayment?.status }}</div>
                <div style="width: 20%">{{ parseFloat(reservation.stripePayment?.paid).toFixed(2) || 0 }}&thinsp;€</div>
              </div>
            </div>
          </div>
        </div>
        <div class="cards-container__first-row">
          <div class="card border-0">
            <div class="card-body">
              <div class="card__title align-items-center justify-content-between mb-5">
                <div>Qui suis-je ?</div>
                <div type="button" @click="allowForm1 = !allowForm1" style="font-weight: 400; font-size: 0.8rem" class="d-block text-danger text-uppercase">
                  <i class="fas fa-edit"></i> {{ allowForm1 ? 'Valider' : 'Modifier' }}
                </div>
              </div>
              <form :class="{ 'form--disallowed': !allowForm1 }">
                <div class="row mb-3">
                  <div class="col-12 col-lg-6">
                    <div class="form-group has-float-label">
                      <input id="infos-firstName" type="text" name="" placeholder=" " class="form-control" v-model="currUser.firstName" />
                      <label for="infos-firstName">Prénom</label>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6">
                    <div class="form-group has-float-label">
                      <input id="infos-lastName" type="text" name="" placeholder=" " class="form-control" v-model="currUser.lastName" />
                      <label for="infos-lastName">Nom</label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-lg-6">
                    <div class="form-group has-float-label">
                      <input type="date" name="" class="form-control" placeholder=" " required datepicker id="date" v-model="currUser.birthDate" />
                      <label for="date">DATE DE NAISSANCE</label>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6">
                    <div class="form-group">
                      <div class="btn-group btn-group-toggle" data-toggle="buttons">
                        <label
                          @click="currUser.gender = 'f'"
                          class="btn gender-btn rounded-0 btn-lg px-4"
                          style="border: 1px solid #292f33"
                          :class="[currUser.gender === 'f' ? 'bg-grey text-white' : '']"
                          >Femme</label
                        >
                        <label
                          @click="currUser.gender = 'm'"
                          class="btn gender-btn rounded-0 btn-lg px-4"
                          style="border: 1px solid #292f33"
                          :class="[currUser.gender === 'm' ? 'bg-grey text-white' : '']"
                          >Homme</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="card border-0">
            <div class="card-body">
              <div class="card__title align-items-center justify-content-between" style="margin-bottom: 2rem">
                <div>Ma bio</div>
                <div type="button" @click="allowForm2 = !allowForm2" style="font-weight: 400; font-size: 0.8rem" class="d-block text-danger text-uppercase">
                  <i class="fas fa-edit"></i> {{ allowForm2 ? 'Valider' : 'Modifier' }}
                </div>
              </div>
              <form :class="{ 'form--disallowed': !allowForm2 }">
                <label>Infos à partager</label>
                <div style="font-family: Muli, sans-serif; font-size: 0.8rem">Présentation légère qui apparaitra bientôt sur ta page publique.</div>
                <textarea name="" placeholder="Décris-toi en quelques lignes !" class="form-control" rows="2" v-model="currUser.bio"></textarea>
              </form>
            </div>
          </div>
        </div>
        <div class="cards-container__second-row">
          <div class="card border-0">
            <div class="card-body">
              <div class="card__title align-items-center justify-content-between mb-5">
                <div>Comment te joindre ?</div>
                <div type="button" @click="allowForm3 = !allowForm3" style="font-weight: 400; font-size: 0.8rem" class="d-block text-danger text-uppercase">
                  <i class="fas fa-edit"></i> {{ allowForm3 ? 'Valider' : 'Modifier' }}
                </div>
              </div>
              <form :class="{ 'form--disallowed': !allowForm3 }">
                <div class="row mb-3">
                  <div class="col-12 col-lg-4">
                    <div class="form-group has-float-label">
                      <input id="infos-phone" type="text" name="" placeholder=" " class="form-control" v-model="currUser.phone" />
                      <label for="infos-phone">Téléphone</label>
                    </div>
                  </div>
                  <div class="col-12 col-lg-8">
                    <div class="form-group has-float-label">
                      <input id="infos-street" type="text" name="" placeholder=" " class="form-control" v-model="currUser.street" />
                      <label for="infos-street">Adresse</label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-lg-3">
                    <div class="form-group has-float-label">
                      <input id="infos-postalCode" type="text" name="" class="form-control" placeholder=" " v-model="currUser.postalCode" />
                      <label for="infos-postalCode">Code postal</label>
                    </div>
                  </div>
                  <div class="col-12 col-lg-5">
                    <div class="form-group has-float-label">
                      <input id="infos-city" type="text" name="" class="form-control" placeholder=" " v-model="currUser.city" />
                      <label for="infos-city">Ville</label>
                    </div>
                  </div>
                  <div class="col-12 col-lg-4">
                    <div class="form-group has-float-label">
                      <CountrySelect
                        id="infos-country"
                        style="position: relative; right: 3px"
                        v-model="currUser.country"
                        :country="currUser.country"
                        :countryName="true"
                        :removePlaceholder="true"
                        topCountry="France"
                        className="form-control"
                      />
                      <label for="infos-country">Pays</label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="card border-0">
            <div class="card-body">
              <div class="card__title align-items-center justify-content-between mb-5">
                <div>Réglages de mon compte</div>
              </div>
              <form>
                <div class="row">
                  <div class="col-12 col-lg-12">
                    <div class="form-group has-float-label">
                      <input id="infos-email" type="email" disabled name="" placeholder=" " class="form-control" v-model="currUser.email" />
                      <label for="infos-email">E-mail</label>
                    </div>
                  </div>
                  <div class="col-12 col-lg-12">
                    <label>Réinitialiser le mot de passe</label>
                    <div class="mb-3" style="font-family: Muli, sans-serif; font-size: 0.8rem">
                      Clique sur ce lien pour recevoir un email contenant les informations nécessaires pour pouvoir modifier ton mot de passe.
                    </div>
                    <Button text="M'envoyer un email" color="grey" height="2rem" width="100%" weight="bold" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="cards-container__third-row">
          <div class="card border-0 w-100">
            <div class="card-body">
              <div class="card__title align-items-center justify-content-between" style="margin-bottom: 2rem">
                <div>Supprimer mon compte</div>
              </div>
              <form>
                <div class="row">
                  <div class="col-12 col-lg-7">
                    <div style="font-family: Muli, sans-serif; font-size: 0.8rem">
                      Attention, cette action est irréversible ! Si tu décides de supprimer ton compte tu perdras toutes tes données et tes bonus.
                    </div>
                  </div>
                  <div class="col-12 col-lg-2 offset-3">
                    <Button style="transform: translateY(-50%)" text="Supprimer" px="1rem" color="grey" height="3rem" weight="bold" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/elements/Button.vue'
import { isLoggedIn } from '@/utils/auth'

export default {
  name: 'Profile',
  components: {
    Button
  },
  data() {
    return {
      fromRoute: '',
      currUser: null,
      allowForm1: false,
      allowForm2: false,
      allowForm3: false,
      form1Modified: false,
      form2Modified: false,
      form3Modified: false
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        this.fromRoute = from
      }
    },
    allowForm1(val) {
      // clicked "valider"
      if (val === false && this.form1Modified) {
        this.updateUser()
      }
    },
    allowForm2(val) {
      // clicked "valider"
      if (val === false && this.form2Modified) {
        this.updateUser()
      }
    },
    allowForm3(val) {
      // clicked "valider"
      if (val === false && this.form3Modified) {
        this.updateUser()
      }
    },
    'currUser.firstName': {
      handler() {
        this.form1Modified = true
      }
    },
    'currUser.lastName': {
      handler() {
        this.form1Modified = true
      }
    },
    'currUser.birthDate': {
      handler() {
        this.form1Modified = true
      }
    },
    'currUser.gender': {
      handler() {
        this.form1Modified = true
      }
    },
    'currUser.bio': {
      handler() {
        this.form2Modified = true
      }
    },
    'currUser.phone': {
      handler() {
        this.form3Modified = true
      }
    },
    'currUser.street': {
      handler() {
        this.form3Modified = true
      }
    },
    'currUser.postalCode': {
      handler() {
        this.form3Modified = true
      }
    },
    'currUser.city': {
      handler() {
        this.form3Modified = true
      }
    },
    'currUser.country': {
      handler() {
        this.form3Modified = true
      }
    }
  },
  methods: {
    updateUser() {
      this.$axios
        .put('/users/current', { user: this.currUser })
        .then((res) => {
          this.$notify({ group: 'app', type: 'success', text: 'Mis à jour avec succès' })
          this.currUser = res.data.user
          this.form1Modified = false
          this.form2Modified = false
          this.form3Modified = false
        })
        .catch((err) => this.$notify({ group: 'app', type: 'error', text: err.response.data.message }))
    },
    isLoggedIn() {
      return isLoggedIn()
    },
    handlePageClose() {
      if (this.fromRoute) this.$router.back()
      else this.$router.push({ name: 'Home' })
    }
  },
  created() {
    if (!isLoggedIn()) return

    const AUTH_TOKEN_KEY = 'authToken'
    const token = localStorage.getItem(AUTH_TOKEN_KEY)
    this.$axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    // this.currUser = await this.getUserInfo()

    this.$axios
      .get('/users/current')
      .then((res) => {
        console.log(res.data.user)
        this.currUser = res.data.user
        this.$root.initialLoading = false
        console.log(res.data.user)
      })
      .catch((err) => {
        this.$notify({ type: 'error', text: err.message })
        this.$root.initialLoading = false
      })
  }
}
</script>

<style scoped>
.avatar-img {
  border-radius: 50%;
  width: 100%;
  border: 1px solid #292f33;
}
label {
  font-size: 0.85rem !important;
  font-weight: 500;
  text-transform: uppercase;
}
.has-float-label .form-control:placeholder-shown:not(:focus) + label {
  top: 0.15em;
  font-size: 130%;
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
  margin-bottom: 2rem;
}
.form-control {
  padding-left: 0;
  border-radius: 0;
  border: none;
  color: #292f33cc;
  font-weight: 100;
  border-bottom: 1px solid #7c7c7c;
  background-color: transparent;
  padding-bottom: 0.1rem;
}
.form-control:focus {
  background-color: transparent;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #292f33;
}
.card__title {
  display: flex;
  font-family: Oswald, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.03rem;
  font-weight: 500;
}
.wrap {
  display: flex;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 100;
  background-color: white;
  overflow-x: hidden;
  overflow-y: scroll;
}
.left-panel {
  width: 25%;
  z-index: 1;
}
.left-panel__content {
  width: inherit;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  box-shadow: rgb(240, 240, 240) 0px 0px 6px;
}
.top-bar {
  position: fixed;
  top: 0;
  display: flex;
  width: 100vw;
  align-items: center;
  height: 70px;
  box-shadow: 0 0 6px #292f337c;
  padding: 0 2rem;
  background-color: #292f33;
  color: #fff;
  z-index: 1;
}
.top-bar__close-btn {
  margin-right: 2rem;
}
.top-bar__page-title {
  display: inline-flex;
  font-family: Oswald, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.03rem;
  padding-left: 6vw;
  height: 100%;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
}
.top-bar__page-title__text {
  margin: auto;
}
.cards-container {
  padding-top: 70px;
  padding-bottom: 2rem;
  width: 70%;
  margin: auto;
}
.cards-container__first-row,
.cards-container__second-row,
.cards-container__third-row {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.card {
  border: none;
  box-shadow: rgb(240, 240, 240) 0px 0px 2px;
  border-radius: 0 !important;
  width: 48%;
  padding: 1rem 2rem;
  margin-top: 2rem;
}
.form--disallowed {
  opacity: 0.3;
  pointer-events: none;
}
.wrapper {
  display: flex;
  margin: auto;
  height: 100%;
  width: 100%;
}
</style>
