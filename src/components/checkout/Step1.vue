/* eslint-disable vue/comment-directive */
<template>
  <div class="tab-pane fade show active login-signup-tab" id="step1" role="tabpanel" aria-labelledby="step1-tab">
    <div class="card border-0 p-3 mb-0">
      <div class="card-body">
        <div class="tab-content" id="">
          <div class="tab-pane fade show active" id="checkoutlogin" role="tabpanel" aria-labelledby="checkoutlogin-tab">
            <div class="row">
              <div class="col-12 col-lg-4">
                <div class="participants-div">
                  <h4 class="head font-weight-bold">
                    PARTICIPANT
                    <i class="fa fa-caret-right mx-3 small align-baseline"></i>1
                  </h4>
                  <h6 class="desc font-weight-light">Déjà client ? Merci de t’identifier pour continuer ta réservation ou de créer ton compte Heaven Trip.</h6>
                </div>
              </div>
              <div class="col-12 col-lg-8">
                <form class="participants-form contact-form">
                  <div class="row">
                    <div class="col-12 col-lg-6">
                      <button class="btn btn-block rounded-0 social-btn fb-btn mb-3 mb-lg-0"><i class="fab fa-facebook-f mr-3 h5 mb-0 align-text-bottom"></i>Connexion avec Facebook</button>
                      <div id="fb-root"></div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <button class="btn btn-block rounded-0 social-btn"><i class="fab fa-google mr-3 h5 mb-0 align-text-bottom"></i>Connexion avec Google</button>
                    </div>
                  </div>
                  <h6 class="prefer-text text-uppercase font-weight-bold my-5 text-center">
                    <span>Ou par adresse mail</span>
                  </h6>
                  <div class="row">
                    <div class="col-12 col-lg-6">
                      <div class="form-group has-float-label">
                        <input type="email" class="form-control" id="mailAddr" placeholder=" " required />
                        <label for="mailAddr">ADRESSE MAIL*</label>
                      </div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <div class="form-group has-float-label">
                        <input type="password" class="form-control" autocomplete="off" id="mailPass" placeholder=" " required />
                        <label for="mailPass">MOT DE PASSE*</label>
                        <a class="password-link text-right mb-0 d-block mt-2" href="#">Mot de passe oublié</a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="checkoutaccount" role="tabpanel" aria-labelledby="checkoutaccount-tab">
            <div class="row">
              <div class="col-12 col-lg-4">
                <div class="participants-div align-items-center">
                  <h4 class="head font-weight-bold">
                    PARTICIPANT
                    <i class="fa fa-caret-right mx-3 small align-baseline"></i>1
                    <span class="d-block mt-2 text-danger">J’ai déjà un compte</span>
                  </h4>
                  <div class="upload-div">
                    <i class="align-text-top fa fa-arrow-circle-up"></i>
                  </div>
                  <p class="profile-upload mb-0 text-center">Télécharge ta photo de profil</p>
                  <p class="upload-warning text-center">Taille maximum 1MB</p>
                </div>
              </div>
              <div class="col-12 col-lg-8">
                <form class="participants-form contact-form">
                  <div class="row">
                    <div class="col-12 col-lg-6">
                      <button class="btn btn-block rounded-0 social-btn fb-btn mb-3 mb-lg-0">
                        <i class="fab fa-facebook-f mr-3 h5 mb-0 align-text-bottom"></i>
                        Connexion avec Facebook
                      </button>
                    </div>
                    <div class="col-12 col-lg-6">
                      <button class="btn btn-block rounded-0 social-btn"><i class="fab fa-google mr-3 h5 mb-0 align-text-bottom"></i>Connexion avec Google</button>
                    </div>
                  </div>
                  <h6 class="prefer-text text-uppercase font-weight-bold my-5 text-center">
                    <span>Ou par adresse mail</span>
                  </h6>
                  <div class="row">
                    <div class="col-12 col-lg-6">
                      <div class="form-group has-float-label">
                        <input type="text" name="" class="form-control" placeholder=" " required id="last_name" />
                        <label for="last_name">Nom*</label>
                      </div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <div class="form-group has-float-label">
                        <input type="text" name="" class="form-control" placeholder=" " required id="first_name" />
                        <label for="first_name">Prénom*</label>
                      </div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <div class="form-group has-float-label">
                        <input type="date" name="" class="form-control" placeholder=" " required datepicker id="date" />
                        <label for="date">DATE DE NAISSANCE*</label>
                      </div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <div class="form-group">
                        <div class="btn-group btn-group-toggle fem-hom-toggle text-capitalize mt-n1" data-toggle="buttons">
                          <div class="btn btn-lg px-4 left-btn text-capitalize">
                            <input type="radio" name="options" id="option1" />
                            Femme
                          </div>
                          <div class="btn btn-lg px-4 right-btn text-capitalize">
                            <input type="radio" name="options" id="option2" />
                            Homme
                          </div>
                        </div>
                        <label class="position-label">*</label>
                      </div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <div class="form-group has-float-label">
                        <input type="text" name="" class="form-control" placeholder=" " required id="tele" />
                        <label for="tele">Téléphone*</label>
                      </div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <div class="form-group has-float-label">
                        <input class="form-control mail_addr" type="email" name="" value="" placeholder=" " required />
                        <label for="mail_addr">ADRESSE MAIL*</label>
                      </div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <div class="form-group has-float-label">
                        <input type="text" name="" class="form-control" placeholder=" " required id="pays" />
                        <label for="pays">Pays*</label>
                      </div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <div class="form-group has-float-label">
                        <input type="text" name="" class="form-control" placeholder=" " required id="addr" />
                        <label for="addr">Adresse*</label>
                      </div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <div class="form-group has-float-label">
                        <input class="form-control" type="password" autocomplete="off" name="" value="" placeholder=" " required id="pass" />
                        <label for="pass">MOT DE PASSE*</label>
                      </div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <div class="form-group has-float-label">
                        <input class="form-control" type="password" autocomplete="off" name="" value="" placeholder=" " required id="confirm_pass" />
                        <label for="confirm_pass">CONFIRMATION MOT DE PASSE*</label>
                      </div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <div class="form-group has-float-label">
                        <input type="text" name="" class="form-control" placeholder=" " required id="ville" />
                        <label for="ville">VILLE*</label>
                      </div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <div class="form-group has-float-label">
                        <input type="text" name="" class="form-control" placeholder=" " required id="postal_code" />
                        <label for="postal_code">Code postal*</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="custom-control custom-checkbox mb-0 sameAddrCheck">
                        <input type="checkbox" class="custom-control-input" id="sameAddr" />
                        <label class="custom-control-label mb-0 ml-2" for="sameAddr">Cette adresse est la même que l’adresse de facturation</label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav nav-tabs login-tabs border-0" data-toggle="buttons" role="tablist">
      <button class="btn nav-link border-0 rounded-0" id="checkoutaccount-tab" data-toggle="tab" href="#checkoutaccount" role="tab" aria-controls="checkoutaccount" aria-selected="false">créer mon compte</button>
      <button class="btn nav-link border-0 rounded-0" id="checkoutlogin-tab" data-toggle="tab" href="#checkoutlogin" role="tab" aria-controls="checkoutlogin" aria-selected="false">CONNEXION</button>
    </div>
    <div class="validate-btn-info">
      <button class="btn btn-danger btn-block btn-style border-0 rounded-0 shadow-none text-uppercase" data-toggle="tab" role="tab" href="#step2">VALIDER mon inscription</button>
      <p class="terms-conditions mt-2">
        En cliquant, tu acceptes nos
        <span class="text-decoration-underline text-danger">conditions générales d’utilisation.</span>Ce site est protégé par reCAPTCHA. La
        <span class="text-decoration-underline">politique de confidentialité</span>
        et les
        <span class="text-decoration-underline">conditions d’utilisation</span>
        de Google s’appliquent.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step1'
}
</script>

<style></style>
