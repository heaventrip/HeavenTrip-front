<template>
  <div class="modal fade" id="login" tabindex="-1" aria-labelledby="loginLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl login-modal">
      <div class="modal-content border-0 rounded-0">
        <div class="modal-body p-0 border-0">
          <div class="d-flex flex-column flex-lg-row">
            <div class="left-part">
              <div class="modal-content-head">
                <h6 class="modal-heading mb-0"><span>CONNEXION</span></h6>
                <h6 class="modal-heading mb-0 d-none">
                  <span>INSCRIPITON</span>
                </h6>
                <div class="border-left border-white text-white cancel-block d-lg-none" data-dismiss="modal" aria-label="Close">
                  <i class="fa fa-times h5 mb-0"></i>
                </div>
              </div>
              <ul class="d-none list-unstyled mb-0 text-left registor-mobile-list text-uppercase">
                <li class="row">
                  <div class="col-3 text-center">
                    <img class="img-fluid" fluid :src="require('@/assets/images/fprint_white.png')" />
                  </div>
                  <div class="col-9 align-self-center">
                    <p class="mb-0 registor-points">
                      <strong class="h6 mb-1 Oswald-font d-block font-weight-bold">CONSEILS & SUIVI</strong>
                      AVANT ET PENDANT TON Séjour
                    </p>
                  </div>
                </li>
                <li class="row">
                  <div class="col-3 text-center">
                    <img class="img-fluid" fluid :src="require('@/assets/images/lab_white.png')" />
                  </div>
                  <div class="col-9 align-self-center">
                    <p class="mb-0 registor-points">
                      <strong class="h6 mb-1 Oswald-font d-block font-weight-bold">ORGANISATION</strong>
                      MADE IN HEAVEN TRIP
                    </p>
                  </div>
                </li>
                <li class="row">
                  <div class="col-3 text-center">
                    <img class="img-fluid" fluid :src="require('@/assets/images/mic_light.png')" />
                  </div>
                  <div class="col-9 align-self-center">
                    <p class="mb-0 registor-points">
                      <strong class="h6 mb-1 Oswald-font d-block font-weight-bold">DISCUTE AVANT LE DéPART</strong>
                      AVEC TOUS LES TRIPPERS
                    </p>
                  </div>
                </li>
              </ul>
              <div class="modal-content-body bg-white">
                <div class="login_form">
                  <div class="row">
                    <div class="col-12 col-lg-6">
                      <button class="btn btn-block rounded-0 social-btn fb-btn mb-3 mb-lg-0"><i class="fab fa-facebook-f mr-3 h5 mb-0 align-text-bottom"></i>Connexion avec Facebook</button>
                    </div>
                    <div class="col-12 col-lg-6">
                      <button class="btn btn-block rounded-0 social-btn"><i class="fab fa-google mr-3 h5 mb-0 align-text-bottom"></i>Connexion avec Google</button>
                    </div>
                  </div>
                  <h6 class="prefer-text text-uppercase font-weight-bold my-5 text-center">
                    <span>Ou par adresse mail</span>
                  </h6>
                  <div class="row">
                    <div class="col-12 col-lg-10 mx-auto">
                      <form id="login_form" v-on:submit.prevent="checkLoginForm" method="post">
                        <!-- <p v-if="errors.length" class="errors">
                            <b>Veuillez corriger la ou les erreurs suivantes :</b>
                            <ul>
                              <li v-for="error in errors">{{ error }}</li>
                            </ul>
                          </p> -->
                        <div class="row">
                          <div class="col-12">
                            <div class="form-group">
                              <input class="form-control modal-input" type="mail" name="email" value="" placeholder="Adresse mail" />
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="form-group">
                              <input class="form-control modal-input mb-2" type="password" autocomplete="off" name="password" value="" placeholder="Mot de passe" />
                              <a class="password-link text-right mb-4 d-block" href="#">Mot de passe oublié</a>
                            </div>
                          </div>
                        </div>
                        <button class="btn btn-dark btn-block text-uppercase border-0 rounded-0 modal-btn mb-5 mt-0">SE CONNECTER</button>
                      </form>
                    </div>
                  </div>
                  <div class="bottom-block">
                    <h6 class="profile-text text-center">De l’évasion sportive pour tous !</h6>
                    <ul class="list-unstyled modal-profile-list mb-4 d-flex justify-content-center align-items-center ml-4">
                      <li>
                        <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/1.jpg')" /></a>
                      </li>
                      <li>
                        <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/2.jpg')" /></a>
                      </li>
                      <li>
                        <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/3.jpg')" /></a>
                      </li>
                      <li>
                        <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/4.jpg')" /></a>
                      </li>
                      <li>
                        <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/2.jpg')" /></a>
                      </li>
                      <li><span>+1.5k</span></li>
                    </ul>
                  </div>
                  <h6 class="prefer-text text-center">
                    <span>Pas encore de compte ?</span>
                  </h6>
                  <button class="d-none btn btn-danger btn-block text-uppercase border-0 rounded-0 modal-btn mb-0 mt-0">s’INSCRIRE</button>
                  <button class="btn btn-danger btn-block text-uppercase border-0 rounded-0 modal-btn mb-0 mt-0" v-on:click="registerForm">INSCRIPTION</button>
                </div>
                <div class="register_form d-none">
                  <p class="content-head">Merci de remplir tous les champs pour valider votre inscription :</p>
                  <form id="register_submit_form" v-on:submit.prevent="checkRegisterForm" method="post">
                    <!-- <p v-if="register_errors.length" class="errors">
                            <b>Veuillez corriger la ou les erreurs suivantes :</b>
                            <ul>
                              <li v-for="error in register_errors">{{ error }}</li>
                            </ul>
                          </p> -->
                    <div class="row">
                      <!-- <div class="col-12 col-lg-5">
                          <div class="form-group position-relative">
                            <input class="form-control modal-input" type="text" name="" value="Axel">
                            <i class="fa fa-check check-sym"></i>
                          </div>
                        </div> -->
                      <!-- <div class="col-12 col-lg-7">
                          <div class="form-group">
                            <input class="form-control modal-input" type="text" name="" value="" placeholder="Nom">
                          </div>
                        </div> -->
                      <div class="col-12">
                        <div class="form-group">
                          <input class="form-control modal-input" type="mail" name="register_email" value="" placeholder="Adresse mail" />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <input class="form-control modal-input" type="password" autocomplete="off" name="register_password" value="" placeholder="Mot de passe" />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <input class="form-control modal-input" type="password" name="register_password_confirmation" value="" placeholder="Confirmation du mot de passe" />
                        </div>
                      </div>
                    </div>
                    <button class="btn btn-dark btn-block text-uppercase border-0 rounded-0 modal-btn incomplete mb-2 mt-0 d-none">S ‘inscrire</button>
                    <button class="btn btn-danger btn-block text-uppercase border-0 rounded-0 modal-btn mb-2 mt-0">S ‘inscrire</button>
                  </form>
                  <div class="d-flex regist">
                    <a class="password-link text-center mx-auto" href="#">En cliquant, tu acceptes nos <span class="text-danger text-decoration-underline">conditions générales d’utilisation</span></a>
                    <a class="ml-auto acc-text d-none d-lg-block" v-on:click="loginForm">J’ai déjà un compte</a>
                  </div>

                  <h6 class="prefer-text text-center">
                    <span>Ou si tu préfères…</span>
                  </h6>
                  <div class="form-row">
                    <div class="col-12 col-lg-6">
                      <button class="btn btn-block rounded-0 social-btn fb-btn mb-3 mb-lg-0"><i class="fab fa-facebook-f mr-3 h5 mb-0 align-text-bottom"></i>S’inscrire avec Facebook</button>
                    </div>
                    <div class="col-12 col-lg-6">
                      <button class="btn btn-block rounded-0 social-btn"><i class="fab fa-google mr-3 h5 mb-0 align-text-bottom"></i>S’inscrire avec Google</button>
                    </div>
                  </div>
                  <div class="form-row d-none">
                    <div class="col-12 col-lg-6">
                      <button class="btn btn-block rounded-0 social-btn fb-btn mb-3 mb-lg-0"><i class="fab fa-facebook-f mr-3 h5 mb-0 align-text-bottom"></i>Connexion avec Facebook</button>
                    </div>
                    <div class="col-12 col-lg-6">
                      <button class="btn btn-block rounded-0 social-btn"><i class="fab fa-google mr-3 h5 mb-0 align-text-bottom"></i>Connexion avec Google</button>
                    </div>
                  </div>
                  <p class="recaptcha text-center mb-0">
                    Ce site est protégé par reCAPTCHA.
                    <span class="highlights">La politique de confidentialité</span>
                    et les
                    <span class="highlights">conditions d’utilisation</span> de Google s’appliquent.
                  </p>
                </div>
              </div>
            </div>
            <div class="right-part dark-content-body d-none d-lg-block">
              <div class="top-block">
                <img class="cancel-icon d-none d-lg-block" fluid :src="require('@/assets/images/svg/PICTO_CLOSE_PLEIN.svg')" type="button" data-dismiss="modal" aria-label="Close" />
                <img class="logo mx-auto mb-3" fluid :src="require('@/assets/images/LOGO_FULL_WHITE.png')" />
                <ul class="list-unstyled mb-0 text-left registor-list mt-3">
                  <li class="row">
                    <div class="col-2 text-center">
                      <img class="img-fluid" fluid :src="require('@/assets/images/fprint_white.png')" />
                    </div>
                    <div class="col-10">
                      <p class="mb-0 registor-points">Une agence en ligne oui, mais bien humaine je te rassure. Nous avons à cœur d’accompagner et conseiller nos Trippers. Fun, rencontres et convivialité assurés !</p>
                    </div>
                  </li>
                  <li class="row">
                    <div class="col-2 text-center">
                      <img class="img-fluid" fluid :src="require('@/assets/images/lab_white.png')" />
                    </div>
                    <div class="col-10">
                      <p class="mb-0 registor-points">Nous accordons beaucoup de temps et d’énergie dans la création de nos séjours qui se veulent authentiques et personnalisables. Gagnez en liberté !</p>
                    </div>
                  </li>
                  <li class="row">
                    <div class="col-2 text-center">
                      <img class="img-fluid" fluid :src="require('@/assets/images/mic_light.png')" />
                    </div>
                    <div class="col-10">
                      <p class="mb-0 registor-points">Ce sont les individus avec qui on partage une expérience unique qui vont la rendre inoubliable. Rejoins toi aussi la communauté Heaven Trip !</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="bottom-block">
                <div class="separator-line"></div>
                <h6 class="profile-text">De l’évasion sportive pour tous !</h6>
                <ul class="list-unstyled modal-profile-list mb-0 d-flex justify-content-center align-items-center ml-4">
                  <li>
                    <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/1.jpg')" /></a>
                  </li>
                  <li>
                    <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/2.jpg')" /></a>
                  </li>
                  <li>
                    <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/3.jpg')" /></a>
                  </li>
                  <li>
                    <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/4.jpg')" /></a>
                  </li>
                  <li>
                    <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/2.jpg')" /></a>
                  </li>
                  <li><span>+1.5k</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.errors {
  color: red;
}
</style>
<script>
import axios from 'axios'
import config from '@/components/config'
export default {
  name: 'Login',
  props: ['loading'],
  model: {
    prop: 'loading',
    event: 'loadingchange'
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      errors: [],
      email: '',
      password: '',
      register_errors: [],
      register_email: '',
      register_password: '',
      register_password_confirmation: ''
    }
  }
  // methods:{
  //   checkLoginForm: function (e) {
  //     this.$emit('loadingchange', true);
  //     e.preventDefault();
  //     this.errors = [];
  //     if (!this.validEmail(this.email)) {
  //       this.errors.push('Veuillez saisir une adresse e-mail valide.');
  //     }else if (this.password === '') {
  //       this.errors.push('Veuillez saisir votre mot de passe.');
  //     }else {
  //       NProgress.start()
  //       axios.post(config.API_URL+`/login`, {
  //         "user":{
  //             email:this.email,
  //             password:this.password
  //           }
  //         }, {
  //           headers: {
  //             // Overwrite Axios's automatically set Content-Type
  //             'Content-Type': 'application/json'
  //           }
  //         })
  //       .then(response => {
  //         NProgress.done()
  //         console.log(response);
  //         console.log(response);
  //         alert("Connexion réussie");
  //         localStorage.setItem('user-token', response.data.auth_token);
  //         localStorage.setItem('email', this.email);
  //         window.location.reload();
  //       })
  //       .catch(e => {
  //         NProgress.done()
  //         localStorage.removeItem('user-token')
  //         console.log(e.response.data);
  //         if(e.response.data.error){
  //           this.errors.push(e.response.data.error)
  //         }else{
  //           console.log(e.response.data.message);
  //           this.errors.push(e.response.data.message)
  //         }
  //       })
  //       // this.$router.push('/');
  //     }
  //   },
  //   registerForm:function (e) {
  //     e.preventDefault();
  //     $(".login_form").addClass("d-none");
  //     $(".register_form").removeClass("d-none");
  //   },
  //   loginForm:function (e) {
  //     e.preventDefault();
  //     $(".register_form").addClass("d-none");
  //     $(".login_form").removeClass("d-none");
  //   },
  //   checkRegisterForm: function (e) {
  //     e.preventDefault();
  //     this.register_errors = [];
  //     if (!this.validEmail(this.register_email)) {
  //       this.register_errors.push('Veuillez saisir une adresse e-mail valide.');
  //     }else if (this.register_password === '') {
  //       this.register_errors.push('Veuillez saisir votre mot de passe.');
  //     }else if (this.register_password !== this.register_password_confirmation) {
  //       this.register_errors.push('Veuillez saisir le mot de passe et confirmer le même mot de passe.');
  //     }else {
  //       axios.post(config.API_URL+`/registration`, {
  //         "user":{
  //             email:this.register_email,
  //             password:this.register_password,
  //             password_confirmation:this.register_password_confirmation
  //           }
  //         }, {
  //           headers: {
  //             // Overwrite Axios's automatically set Content-Type
  //             'Content-Type': 'application/json'
  //           }
  //         })
  //       .then(response => {
  //         console.log(response);
  //         console.log(response);
  //         alert("Inscription réussie. Veuillez vérifier l’email "+this.register_email+" et confirmer l’inscription puis connectez-vous.")
  //         this.register_email = "";
  //         this.register_password = "";
  //         this.register_password_confirmation = "";
  //        $(".register_form").addClass("d-none");
  //         $(".login_form").removeClass("d-none");
  //       })
  //       .catch(e => {
  //         console.log(e.response.data);
  //         if(e.response.data.error){
  //           this.register_errors.push(e.response.data.error)
  //         }else{
  //           console.log(e.response.data.message);
  //           this.register_errors.push(e.response.data.message)
  //         }
  //       })
  //       // this.$router.push('/');
  //     }
  //   },
  //   validEmail: function (email) {
  //     var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //     return re.test(email);
  //   }
  // }
}
</script>
