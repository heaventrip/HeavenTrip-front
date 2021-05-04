<template>
  <div>
    <main class="checkout-main-container">
      <div class="container-fluid bg-light h-100">
        <div class="row h-100">
          <div class="col-12 col-xl-4 p-0 bg-image h-100 position-relative">
            <div
              class="d-flex justify-content-between align-items-center trip-list-div text-white px-3"
            >
              <ul
                class="list-unstyled mb-0 d-flex align-items-center text-uppercase"
              >
                <li>
                  <img
                    class="mr-2 ml-4 icons m-icon"
                    fluid
                    :src="require('@/assets/images/globe.png')"
                  />france
                </li>
                <li>
                  <img
                    class="mr-2 ml-4 icons m-icon"
                    fluid
                    :src="require('@/assets/images/timer.png')"
                  />8 j - 7 nuits
                </li>
                <li>
                  <img
                    class="mr-2 ml-4 icons m-icon"
                    fluid
                    :src="require('@/assets/images/circle.png')"
                  />confirmé
                </li>
              </ul>
              <ul
                class="list-unstyled mb-0 d-flex align-items-center trip-list"
              >
                <li>
                  <img
                    class="mr-2 icons"
                    fluid
                    :src="require('@/assets/images/head-pin.png')"
                  />
                </li>
                <li>
                  <img
                    class="mr-2 icons"
                    fluid
                    :src="require('@/assets/images/yoga.png')"
                  />
                </li>
              </ul>
            </div>
            <img
              class="img-fluid checkout-info-img"
              fluid
              :src="require('@/assets/images/checkout_bg.jpg')"
            />
            <div
              class="d-flex align-items-center share-social-icons text-white"
            >
              <h6 class="font-weight-normal mr-3 mb-0">Partage un max !</h6>
              <a href="#" class="rounded-circle d-inline-block">
                <img
                  class="mr-2"
                  fluid
                  :src="require('@/assets/images/insta.png')"
                />
              </a>
              <a href="#" class="rounded-circle d-inline-block">
                <img
                  class="mr-2"
                  fluid
                  :src="require('@/assets/images/fb.png')"
                />
              </a>
              <a href="#" class="rounded-circle d-inline-block">
                <img
                  class="mr-2"
                  fluid
                  :src="require('@/assets/images/youtube.png')"
                />
              </a>
            </div>
          </div>
          <div class="col-12 col-xl-8 p-0 h-100">
            <div class="checkout-body-content bg-light">
              <ul
                class="nav nav-tabs font-weight-bold checkout-steps text-uppercase border-0 d-none"
                id=""
                role="tablist"
              >
                <li class="nav-item d-none" role="presentation">
                  <a
                    class="nav-link text-reset active"
                    id="step1-tab"
                    data-toggle="tab"
                    href="#step1"
                    role="tab"
                    aria-controls="step1"
                    aria-selected="false"
                    ><span class="number-circle">1</span>Connexion
                  </a>
                  <!-- INSCRIPTION -->
                </li>
                <li class="nav-item d-none" role="presentation">
                  <a
                    class="nav-link text-reset"
                    id="step2-tab"
                    data-toggle="tab"
                    href="#step2"
                    role="tab"
                    aria-controls="step2"
                    aria-selected="false"
                    ><span class="number-circle">2</span> PARTICIPANT(s)</a
                  >
                </li>
                <li class="nav-item d-none" role="presentation">
                  <a
                    class="nav-link text-reset"
                    id="step3-tab"
                    data-toggle="tab"
                    href="#step3"
                    role="tab"
                    aria-controls="step3"
                    aria-selected="false"
                    ><span class="number-circle">3</span> OPTIONS</a
                  >
                </li>
                <li class="nav-item d-none" role="presentation">
                  <a
                    class="nav-link text-reset"
                    id="step4-tab"
                    data-toggle="tab"
                    href="#step4"
                    role="tab"
                    aria-controls="step4"
                    aria-selected="false"
                    ><span class="number-circle">4</span> ASSURANCE</a
                  >
                </li>
                <li class="nav-item d-none" role="presentation">
                  <a
                    class="nav-link text-reset"
                    id="step5-tab"
                    data-toggle="tab"
                    href="#step5"
                    role="tab"
                    aria-controls="step5"
                    aria-selected="true"
                    ><span class="number-circle">5</span> PAIEMENT</a
                  >
                </li>
                <li class="nav-item flex-grow-1" role="presentation">
                  <a
                    class="nav-link text-reset active"
                    id="step6-tab"
                    data-toggle="tab"
                    href="#step6"
                    role="tab"
                    aria-controls="step6"
                    aria-selected="true"
                    ><span class="number-circle">2</span> ENVOYER MA DEMANDE</a
                  >
                </li>
              </ul>
              <div class="tab-content" id="">
                <div
                  class="tab-pane fade show active login-signup-tab"
                  id="step1"
                  role="tabpanel"
                  aria-labelledby="step1-tab"
                >
                  <div class="card border-0 p-3 mb-0">
                    <div class="card-body">
                      <div class="tab-content" id="">
                        <div
                          class="tab-pane fade show active"
                          id="checkoutaccount"
                          role="tabpanel"
                          aria-labelledby="checkoutaccount-tab"
                        >
                          <div class="row">
                            <div class="col-12 col-lg-4">
                              <div class="participants-div">
                                <h4 class="head font-weight-bold">
                                  PARTICIPANT
                                  <i
                                    class="fa fa-caret-right mx-3 small align-baseline"
                                  ></i
                                  >1
                                </h4>
                                <h6 class="desc font-weight-light">
                                  Déjà client ? Merci de t’identifier pour
                                  continuer ta réservation ou de créer ton
                                  compte Heaven Trip.
                                </h6>
                              </div>
                            </div>
                            <div class="col-12 col-lg-8">
                              <form class="participants-form contact-form">
                                <div class="row">
                                  <div class="col-12 col-lg-6">
                                    <button
                                      class="btn btn-block rounded-0 social-btn fb-btn mb-3 mb-lg-0"
                                    >
                                      <i
                                        class="fab fa-facebook-f mr-3 h5 mb-0 align-text-bottom"
                                      ></i
                                      >Connexion avec Facebook
                                    </button>
                                    <div id="fb-root"></div>
                                  </div>
                                  <div class="col-12 col-lg-6">
                                    <button
                                      class="btn btn-block rounded-0 social-btn"
                                    >
                                      <i
                                        class="fab fa-google mr-3 h5 mb-0 align-text-bottom"
                                      ></i
                                      >Connexion avec Google
                                    </button>
                                  </div>
                                </div>
                                <h6
                                  class="prefer-text text-uppercase font-weight-bold my-5 text-center"
                                >
                                  <span>Ou par adresse mail</span>
                                </h6>
                                <div class="row">
                                  <div class="col-12 col-lg-6">
                                    <div class="form-group has-float-label">
                                      <input
                                        type="email"
                                        class="form-control"
                                        id="mailAddr"
                                        placeholder=" "
                                        required
                                      />
                                      <label for="mailAddr"
                                        >ADRESSE MAIL*</label
                                      >
                                    </div>
                                  </div>
                                  <div class="col-12 col-lg-6">
                                    <div class="form-group has-float-label">
                                      <input
                                        type="password"
                                        class="form-control"
                                        autocomplete="off"
                                        id="mailPass"
                                        placeholder=" "
                                        required
                                      />
                                      <label for="mailPass"
                                        >MOT DE PASSE*</label
                                      >
                                      <a
                                        class="password-link text-right mb-0 d-block mt-2"
                                        href="#"
                                        >Mot de passe oublié</a
                                      >
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div
                          class="tab-pane fade"
                          id="checkoutlogin"
                          role="tabpanel"
                          aria-labelledby="checkoutlogin-tab"
                        >
                          <div class="row">
                            <div class="col-12 col-lg-4">
                              <div class="participants-div align-items-center">
                                <h4 class="head font-weight-bold">
                                  PARTICIPANT
                                  <i
                                    class="fa fa-caret-right mx-3 small align-baseline"
                                  ></i
                                  >1
                                  <span class="d-block mt-2 text-danger"
                                    >J’ai déjà un compte</span
                                  >
                                </h4>
                                <div class="upload-div">
                                  <i
                                    class="align-text-top fa fa-arrow-circle-up"
                                  ></i>
                                </div>
                                <p class="profile-upload mb-0 text-center">
                                  Télécharge ta photo de profil
                                </p>
                                <p class="upload-warning text-center">
                                  Taille maximum 1MB
                                </p>
                              </div>
                            </div>
                            <div class="col-12 col-lg-8">
                              <form class="participants-form contact-form">
                                <div class="row">
                                  <div class="col-12 col-lg-6">
                                    <button
                                      class="btn btn-block rounded-0 social-btn fb-btn mb-3 mb-lg-0"
                                    >
                                      <i
                                        class="fab fa-facebook-f mr-3 h5 mb-0 align-text-bottom"
                                      ></i
                                      >Connexion avec Facebook
                                    </button>
                                  </div>
                                  <div class="col-12 col-lg-6">
                                    <button
                                      class="btn btn-block rounded-0 social-btn"
                                    >
                                      <i
                                        class="fab fa-google mr-3 h5 mb-0 align-text-bottom"
                                      ></i
                                      >Connexion avec Google
                                    </button>
                                  </div>
                                </div>
                                <h6
                                  class="prefer-text text-uppercase font-weight-bold my-5 text-center"
                                >
                                  <span>Ou par adresse mail</span>
                                </h6>
                                <div class="row">
                                  <div class="col-12 col-lg-6">
                                    <div class="form-group has-float-label">
                                      <input
                                        type="text"
                                        name=""
                                        class="form-control"
                                        placeholder=" "
                                        required
                                        id="last_name"
                                      />
                                      <label for="last_name">Nom*</label>
                                    </div>
                                  </div>
                                  <div class="col-12 col-lg-6">
                                    <div class="form-group has-float-label">
                                      <input
                                        type="text"
                                        name=""
                                        class="form-control"
                                        placeholder=" "
                                        required
                                        id="first_name"
                                      />
                                      <label for="first_name">Prénom*</label>
                                    </div>
                                  </div>
                                  <div class="col-12 col-lg-6">
                                    <div class="form-group has-float-label">
                                      <div class="form-row">
                                        <div class="col-3">
                                          <input
                                            id="day"
                                            type="text"
                                            name=""
                                            class="form-control"
                                            placeholder=" "
                                            required
                                          />
                                        </div>
                                        <div class="col-3">
                                          <input
                                            id="month"
                                            type="text"
                                            name=""
                                            class="form-control"
                                            placeholder=" "
                                            required
                                          />
                                        </div>
                                        <div class="col-5">
                                          <input
                                            id="year"
                                            type="text"
                                            name=""
                                            class="form-control"
                                            placeholder=" "
                                            required
                                            datepicker
                                            data-date-format="yyyy"
                                          />
                                        </div>
                                      </div>
                                      <input
                                        type="date"
                                        name=""
                                        class="form-control"
                                        placeholder=" "
                                        required
                                        id="date"
                                      />
                                      <label for="date"
                                        >DATE DE NAISSANCE*</label
                                      >
                                    </div>
                                  </div>
                                  <div class="col-12 col-lg-6">
                                    <div class="form-group">
                                      <div
                                        class="btn-group btn-group-toggle fem-hom-toggle text-capitalize mt-n1"
                                        data-toggle="buttons"
                                      >
                                        <div
                                          class="btn btn-lg px-4 left-btn text-capitalize"
                                        >
                                          <input
                                            type="radio"
                                            name="options"
                                            id="option1"
                                          />
                                          Femme
                                        </div>
                                        <div
                                          class="btn btn-lg px-4 right-btn text-capitalize"
                                        >
                                          <input
                                            type="radio"
                                            name="options"
                                            id="option2"
                                          />
                                          Homme
                                        </div>
                                      </div>
                                      <label class="position-label">*</label>
                                    </div>
                                  </div>
                                  <div class="col-12 col-lg-6">
                                    <div class="form-group has-float-label">
                                      <input
                                        type="text"
                                        name=""
                                        class="form-control"
                                        placeholder=" "
                                        required
                                        id="tele"
                                      />
                                      <label for="tele">Téléphone*</label>
                                    </div>
                                  </div>
                                  <div class="col-12 col-lg-6">
                                    <div class="form-group has-float-label">
                                      <input
                                        class="form-control mail_addr"
                                        type="email"
                                        name=""
                                        value=""
                                        placeholder=" "
                                        required
                                      />
                                      <label for="mail_addr"
                                        >ADRESSE MAIL*</label
                                      >
                                    </div>
                                  </div>
                                  <div class="col-12 col-lg-6">
                                    <div class="form-group has-float-label">
                                      <input
                                        type="text"
                                        name=""
                                        class="form-control"
                                        placeholder=" "
                                        required
                                        id="pays"
                                      />
                                      <label for="pays">Pays*</label>
                                    </div>
                                  </div>
                                  <div class="col-12 col-lg-6">
                                    <div class="form-group has-float-label">
                                      <input
                                        type="text"
                                        name=""
                                        class="form-control"
                                        placeholder=" "
                                        required
                                        id="addr"
                                      />
                                      <label for="addr">Adresse*</label>
                                    </div>
                                  </div>
                                  <div class="col-12 col-lg-6">
                                    <div class="form-group has-float-label">
                                      <input
                                        class="form-control"
                                        type="password"
                                        autocomplete="off"
                                        name=""
                                        value=""
                                        placeholder=" "
                                        required
                                        id="pass"
                                      />
                                      <label for="pass">MOT DE PASSE*</label>
                                    </div>
                                  </div>
                                  <div class="col-12 col-lg-6">
                                    <div class="form-group has-float-label">
                                      <input
                                        class="form-control"
                                        type="password"
                                        autocomplete="off"
                                        name=""
                                        value=""
                                        placeholder=" "
                                        required
                                        id="confirm_pass"
                                      />
                                      <label for="confirm_pass"
                                        >CONFIRMATION MOT DE PASSE*</label
                                      >
                                    </div>
                                  </div>
                                  <div class="col-12 col-lg-6">
                                    <div class="form-group has-float-label">
                                      <input
                                        type="text"
                                        name=""
                                        class="form-control"
                                        placeholder=" "
                                        required
                                        id="ville"
                                      />
                                      <label for="ville">VILLE*</label>
                                    </div>
                                  </div>
                                  <div class="col-12 col-lg-6">
                                    <div class="form-group has-float-label">
                                      <input
                                        type="text"
                                        name=""
                                        class="form-control"
                                        placeholder=" "
                                        required
                                        id="postal_code"
                                      />
                                      <label for="postal_code"
                                        >Code postal*</label
                                      >
                                    </div>
                                  </div>
                                  <div class="col-12">
                                    <div
                                      class="custom-control custom-checkbox mb-0 sameAddrCheck"
                                    >
                                      <input
                                        type="checkbox"
                                        class="custom-control-input"
                                        id="sameAddr"
                                      />
                                      <label
                                        class="custom-control-label mb-0 ml-2"
                                        for="sameAddr"
                                        >Cette adresse est la même que l’adresse
                                        de facturation</label
                                      >
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
                  <div
                    class="nav nav-tabs login-tabs border-0"
                    data-toggle="buttons"
                    role="tablist"
                  >
                    <button
                      class="btn nav-link active border-0 rounded-0"
                      id="checkoutaccount-tab"
                      data-toggle="tab"
                      href="#checkoutaccount"
                      role="tab"
                      aria-controls="checkoutaccount"
                      aria-selected="true"
                    >
                      créer mon compte
                    </button>
                    <button
                      class="btn nav-link border-0 rounded-0"
                      id="checkoutlogin-tab"
                      data-toggle="tab"
                      href="#checkoutlogin"
                      role="tab"
                      aria-controls="checkoutlogin"
                      aria-selected="false"
                    >
                      CONNEXION
                    </button>
                  </div>
                  <div class="validate-btn-info">
                    <button
                      class="btn btn-danger btn-block btn-style border-0 rounded-0 shadow-none inactive-btn text-uppercase"
                    >
                      VALIDER mon inscription
                    </button>
                    <p class="terms-conditions mt-2">
                      En cliquant, tu acceptes nos
                      <span class="text-decoration-underline text-danger"
                        >conditions générales d’utilisation.</span
                      >Ce site est protégé par reCAPTCHA. La
                      <span class="text-decoration-underline"
                        >politique de confidentialité</span
                      >
                      et les
                      <span class="text-decoration-underline"
                        >conditions d’utilisation</span
                      >
                      de Google s’appliquent.
                    </p>
                  </div>
                </div>
                <div
                  class="tab-pane fade login-signup-tab"
                  id="step2"
                  role="tabpanel"
                  aria-labelledby="step2-tab"
                >
                  <div class="card border-0 p-3">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-12 col-lg-4">
                          <div
                            class="participants-div align-items-center d-none"
                          >
                            <h4 class="head font-weight-bold">
                              PARTICIPANT
                              <i
                                class="fa fa-caret-right mx-3 small align-baseline"
                              ></i
                              >1
                              <span class="d-block mt-2 text-danger"
                                >J’ai déjà un compte</span
                              >
                            </h4>
                            <div class="upload-div">
                              <i
                                class="align-text-top fa fa-arrow-circle-up"
                              ></i>
                            </div>
                            <p class="profile-upload mb-0">
                              Télécharge ta photo de profil
                            </p>
                            <p class="upload-warning">Taille maximum 1MB</p>
                          </div>
                          <div class="participants-div align-items-center">
                            <img
                              class="img-fluid rounded-circle uploaded-img"
                              fluid
                              :src="require('@/assets/images/ui_faces/1.jpg')"
                            />
                            <h4 class="head font-weight-bold">
                              PARTICIPANT
                              <i
                                class="fa fa-caret-right mx-3 small align-baseline"
                              ></i
                              >1
                              <span
                                class="d-block mt-2 text-danger text-uppercase"
                                ><i class="fas fa-edit mr-2"></i> Modifier</span
                              >
                            </h4>
                          </div>
                        </div>
                        <div class="col-12 col-lg-8">
                          <form
                            class="participants-form contact-form completed-form pt-5"
                          >
                            <div class="row">
                              <div class="col-12 col-lg-6">
                                <div class="form-group has-float-label">
                                  <label>Nom*</label>
                                  <input
                                    type="text"
                                    name=""
                                    class="form-control"
                                    value="qwertyui"
                                  />
                                </div>
                              </div>
                              <div class="col-12 col-lg-6">
                                <div class="form-group has-float-label">
                                  <label>Prénom*</label>
                                  <input
                                    type="text"
                                    name=""
                                    class="form-control"
                                    value="qwertyui"
                                  />
                                </div>
                              </div>
                              <div class="col-12 col-lg-6">
                                <div class="form-group has-float-label">
                                  <label>DATE DE NAISSANCE*</label>
                                  <div class="form-row">
                                    <div class="col-3">
                                      <input
                                        type="number"
                                        name=""
                                        class="form-control"
                                        value="04"
                                      />
                                    </div>
                                    <div class="col-3">
                                      <input
                                        type="number"
                                        name=""
                                        class="form-control"
                                        value="11"
                                      />
                                    </div>
                                    <div class="col-6">
                                      <input
                                        type="number"
                                        name=""
                                        class="form-control"
                                        value="1982"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-12 col-lg-6">
                                <div class="form-group has-float-label">
                                  <div
                                    class="btn-group btn-group-toggle fem-hom-toggle text-capitalize"
                                    data-toggle="buttons"
                                  >
                                    <div
                                      class="btn btn-lg px-4 left-btn text-capitalize active"
                                    >
                                      <input
                                        type="radio"
                                        name="options"
                                        checked=""
                                      />
                                      Femme
                                    </div>
                                    <div
                                      class="btn btn-lg px-4 right-btn text-capitalize"
                                    >
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
                                  <input
                                    type="number"
                                    name=""
                                    class="form-control"
                                    value="566767565656"
                                  />
                                </div>
                              </div>
                              <div class="col-12 col-lg-6">
                                <div class="form-group has-float-label">
                                  <label>ADRESSE MAIL*</label>
                                  <input
                                    class="form-control"
                                    type="email"
                                    name=""
                                    value="wertyu@dfgh.fgh"
                                  />
                                  <i class="fa fa-check check-sym d-none"></i>
                                </div>
                              </div>
                              <div class="col-12 col-lg-6">
                                <div class="form-group has-float-label">
                                  <label>Pays*</label>
                                  <input
                                    type="text"
                                    name=""
                                    class="form-control"
                                    value="qwertyui"
                                  />
                                </div>
                              </div>
                              <div class="col-12 col-lg-6">
                                <div class="form-group has-float-label">
                                  <label>Adresse*</label>
                                  <input
                                    type="text"
                                    name=""
                                    class="form-control"
                                    value="qwertyui"
                                  />
                                </div>
                              </div>
                              <div class="col-12 col-lg-6">
                                <div class="form-group has-float-label">
                                  <label>VILLE*</label>
                                  <input
                                    type="text"
                                    name=""
                                    class="form-control"
                                    value="qwertyui"
                                  />
                                </div>
                              </div>
                              <div class="col-12 col-lg-6">
                                <div class="form-group has-float-label">
                                  <label>Code postal*</label>
                                  <input
                                    type="text"
                                    name=""
                                    class="form-control"
                                    value="qwertyui"
                                  />
                                </div>
                              </div>
                              <div class="col-12">
                                <div
                                  class="custom-control custom-checkbox other-activity-check mb-0 mb-5 pl-0"
                                >
                                  <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="sameAddress"
                                    checked=""
                                  />
                                  <label
                                    class="custom-control-label mb-0 pl-5 text-transform-none"
                                    for="sameAddress"
                                    >Cette adresse est la même que l’adresse de
                                    facturation</label
                                  >
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card border-0 p-3 d-none">
                    <a
                      href="#"
                      class="d-flex justify-content-center text-center text-uppercase text-reset text-decoration-none add-participant"
                      >ajouter un participant
                      <i class="fa fa-plus-circle ml-3 h4 mb-0"></i
                    ></a>
                  </div>
                  <div class="card border-0 p-3">
                    <div class="card-header border-0">
                      <h6
                        class="mb-0 text-uppercase font-weight-bold d-flex align-items-center"
                      >
                        <img
                          class="participant-img mr-3"
                          fluid
                          :src="require('@/assets/images/ui_faces/1.jpg')"
                        />
                        participants
                        <i
                          class="fa fa-caret-right mx-3 small align-baseline"
                        ></i>
                        2
                        <a href="#" class="remove-parti text-decoration-none"
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
                              <input
                                class="form-control"
                                type="text"
                                name=""
                                value="Rammurthy Nagar"
                                placeholder=" "
                              />
                              <label>Prénom*</label>
                            </div>
                          </div>
                          <div class="col-12 col-lg-4">
                            <div class="form-group has-float-label pr-5">
                              <label>Date de naissance*</label>
                              <div class="form-row">
                                <div class="col-3">
                                  <input
                                    type="number"
                                    name=""
                                    class="form-control"
                                    placeholder=" "
                                    required
                                    value="04"
                                  />
                                </div>
                                <div class="col-3">
                                  <input
                                    type="number"
                                    name=""
                                    class="form-control"
                                    placeholder=" "
                                    required
                                    value="11"
                                  />
                                </div>
                                <div class="col-5">
                                  <input
                                    type="number"
                                    name=""
                                    class="form-control"
                                    placeholder=" "
                                    required
                                    value="1984"
                                  />
                                </div>
                              </div>
                              <i class="fa fa-check check-sym d-none"></i>
                            </div>
                          </div>
                          <div class="col-12 col-lg-4">
                            <div class="form-group has-float-label">
                              <input
                                id="emailAddr"
                                class="form-control"
                                type="email"
                                name=""
                                value=""
                                placeholder=" "
                              />
                              <label for="emailAddr">Email*</label>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="step3"
                  role="tabpanel"
                  aria-labelledby="step3-tab"
                >
                  <div
                    class="preview-card border-0 d-none align-items-center text-uppercase flex-row bg-dark text-white px-5 rounded-lg mb-5"
                  >
                    <span class="font-weight-light mr-5 ml-2"
                      >vous êtes 2 trippers</span
                    >
                    <ul
                      class="list-unstyled mb-0 font-weight-500 name-list d-flex"
                    >
                      <li>marion</li>
                      <li>
                        axel
                        <a href="#"
                          ><i
                            class="fa fa-times-circle ml-2 align-baseline text-white"
                          ></i
                        ></a>
                      </li>
                    </ul>
                    <a href="#" class="ml-auto font-weight-light text-reset"
                      >modifier</a
                    >
                  </div>
                  <div class="card d-none">
                    <div class="card-header border-0 p-0 d-flex">
                      <h6
                        class="mb-0 text-uppercase font-weight-normal d-flex align-items-center check-head px-5 p-4 flex-1"
                      >
                        <div
                          class="participant-img-container position-relative"
                        >
                          <img
                            class="participant-img mr-3"
                            fluid
                            :src="require('@/assets/images/ui_faces/1.jpg')"
                          /><span class="participant-check"></span>
                        </div>
                        <strong
                          class="participant-name h6 mb-0 font-weight-bold"
                          >marion
                          <i
                            class="fa fa-caret-right mx-3 small align-baseline caret-icon"
                          ></i
                        ></strong>
                        <div
                          class="participant-add participant-opacity position-relative d-flex align-items-center"
                        >
                          <i
                            class="far fa-user-circle mx-3 align-baseline participant-icon"
                          ></i>
                          <strong
                            class="participant-name h6 mb-0 font-weight-bold"
                            >AXEL
                          </strong>
                        </div>
                        <div class="ml-auto text-right check-amount-head">
                          SEJOUR MARION<br /><strong
                            class="check-amount d-block mt-1"
                            >2 220 &euro;</strong
                          >
                        </div>
                      </h6>
                    </div>
                    <div class="mx-5">
                      <div class="reservation-text position-relative mt-4">
                        <h6
                          class="font-weight-normal mb-0 d-inline-block bg-white pr-3 position-relative text-uppercase"
                        >
                          COMPLèTE TA RéSERVATION
                        </h6>
                      </div>
                      <div class="card-body p-0 pt-5">
                        <h6 class="font-weight-bold">Quel type de chambre :</h6>
                        <p class="font-weight-500">
                          Dans la limite des stocks disponibles !
                        </p>
                        <div class="custom-radio-container p-4 px-5 mr-5 pb-5">
                          <div class="custom-control">
                            <input
                              type="radio"
                              id="customRadio1"
                              name="room"
                              class="custom-control-input"
                            />
                            <label
                              class="custom-control-label"
                              for="customRadio1"
                              ><div
                                class="d-flex align-items-center pb-2 mb-2 dotted-border"
                              >
                                <span
                                  ><div class="font-weight-bold text-uppercase">
                                    chambre a partager
                                  </div>
                                  <p class="font-weight-500 mb-0">
                                    Entre Trippers !
                                  </p>
                                </span>
                                <div
                                  class="ml-auto font-weight-bold text-uppercase"
                                >
                                  inclus
                                </div>
                              </div></label
                            >
                          </div>
                          <div class="custom-control">
                            <input
                              type="radio"
                              id="customRadio2"
                              name="room"
                              class="custom-control-input"
                            />
                            <label
                              class="custom-control-label"
                              for="customRadio2"
                              ><div
                                class="d-flex align-items-center pb-2 mb-2 dotted-border"
                              >
                                <span
                                  ><div class="font-weight-bold text-uppercase">
                                    chambre double
                                  </div>
                                  <p class="font-weight-500 mb-0">Lit simple</p>
                                </span>
                                <div
                                  class="ml-auto font-weight-bold text-uppercase"
                                >
                                  inclus
                                </div>
                              </div></label
                            >
                          </div>
                          <div class="custom-control">
                            <input
                              type="radio"
                              id="customRadio3"
                              name="room"
                              class="custom-control-input"
                            />
                            <label
                              class="custom-control-label"
                              for="customRadio3"
                            >
                              <div
                                class="d-flex align-items-center pb-2 mb-2 dotted-border"
                              >
                                <span
                                  ><div class="font-weight-bold text-uppercase">
                                    chambre privé
                                  </div>
                                  <p class="font-weight-500 mb-0">Lit double</p>
                                </span>
                                <div
                                  class="avalaible-mem col-6 justify-content-center align-items-center"
                                >
                                  <p class="font-weight-500 mb-0">
                                    A partager avec :
                                  </p>
                                  <select
                                    class="form-control col-5 ml-3 text-capitalize custom-select"
                                  >
                                    <option>Axel</option>
                                    <option>marion</option>
                                  </select>
                                </div>
                                <div
                                  class="ml-auto font-weight-bold text-uppercase"
                                >
                                  + 60 &euro;
                                </div>
                              </div>
                            </label>
                          </div>
                          <div class="custom-control">
                            <input
                              type="radio"
                              id="customRadio4"
                              name="room"
                              class="custom-control-input"
                            />
                            <label
                              class="custom-control-label"
                              for="customRadio4"
                              ><div
                                class="d-flex align-items-center pb-2 mb-2 dotted-border"
                              >
                                <span
                                  ><div class="font-weight-bold text-uppercase">
                                    chambre privé
                                  </div>
                                  <p class="font-weight-500 mb-0">Lit double</p>
                                </span>
                                <div
                                  class="ml-auto font-weight-bold text-uppercase"
                                >
                                  + 60 &euro;
                                </div>
                              </div></label
                            >
                          </div>
                        </div>
                      </div>
                      <div class="card-body border-top p-0 pt-5">
                        <h6 class="font-weight-bold">
                          Avec ou sans location matériel :
                        </h6>
                        <p class="font-weight-500">
                          Matériel correspondant uniquement a tan activité
                          principale
                        </p>
                        <div class="custom-radio-container p-4 px-5 mr-5 pb-5">
                          <div class="custom-control">
                            <input
                              type="radio"
                              id="customRadio5"
                              name="materiel"
                              class="custom-control-input"
                            />
                            <label
                              class="custom-control-label"
                              for="customRadio5"
                              ><div
                                class="d-flex align-items-center pb-2 mb-2 dotted-border"
                              >
                                <span
                                  ><div class="font-weight-bold text-uppercase">
                                    avec materiel
                                  </div>
                                  <p class="font-weight-500 mb-0">
                                    Je voyage lègé
                                  </p>
                                </span>
                                <div
                                  class="ml-auto font-weight-bold text-uppercase"
                                >
                                  inclus
                                </div>
                              </div></label
                            >
                          </div>
                          <div class="custom-control">
                            <input
                              type="radio"
                              id="customRadio6"
                              name="materiel"
                              class="custom-control-input"
                            />
                            <label
                              class="custom-control-label"
                              for="customRadio6"
                              ><div
                                class="d-flex align-items-center pb-2 mb-2 dotted-border"
                              >
                                <span
                                  ><div class="font-weight-bold text-uppercase">
                                    sans materiel
                                  </div>
                                  <p class="font-weight-500 mb-0">
                                    Je préfére venir avec mon matos !
                                  </p>
                                </span>
                                <div
                                  class="ml-auto font-weight-bold text-uppercase"
                                >
                                  reduction de 380 &euro;
                                </div>
                              </div></label
                            >
                          </div>
                        </div>
                      </div>
                      <div class="card-body border-top p-0 pt-5 zero-opacity">
                        <h6 class="font-weight-bold">Activites en +</h6>
                        <p class="font-weight-500">
                          Vous pouvez sélectionner plusieurs activités
                        </p>
                        <div class="custom-radio-container inline-blocks py-3">
                          <div
                            class="custom-control custom-radio bg-light rounded border"
                          >
                            <input
                              type="checkbox"
                              id="customRadio7"
                              class="custom-control-input"
                            />
                            <label
                              class="custom-control-label d-flex align-items-center border-0"
                              for="customRadio7"
                            >
                              <div class="font-weight-bold text-uppercase">
                                sup-paddle<span class="border-left"
                                  >+ 60&euro;<small class="text-lowercase"
                                    >/pers.</small
                                  ></span
                                >
                              </div>
                            </label>
                          </div>
                          <div
                            class="custom-control custom-radio bg-light rounded border"
                          >
                            <input
                              type="checkbox"
                              id="customRadio8"
                              class="custom-control-input"
                            />
                            <label
                              class="custom-control-label d-flex align-items-center border-0"
                              for="customRadio8"
                            >
                              <div class="font-weight-bold text-uppercase">
                                plongee sous-marine<span class="border-left"
                                  >+ 60&euro;<small class="text-lowercase"
                                    >/pers.</small
                                  ></span
                                >
                              </div>
                            </label>
                          </div>
                          <div
                            class="custom-control custom-radio bg-light rounded border"
                          >
                            <input
                              type="checkbox"
                              id="customRadio9"
                              class="custom-control-input"
                            />
                            <label
                              class="custom-control-label d-flex align-items-center border-0"
                              for="customRadio9"
                            >
                              <div class="font-weight-bold text-uppercase">
                                sup-paddle<span class="border-left"
                                  >+ 60&euro;<small class="text-lowercase"
                                    >/pers.</small
                                  ></span
                                >
                              </div>
                            </label>
                          </div>
                          <div
                            class="custom-control custom-radio bg-light rounded border"
                          >
                            <input
                              type="checkbox"
                              id="customRadio10"
                              class="custom-control-input"
                            />
                            <label
                              class="custom-control-label d-flex align-items-center border-0"
                              for="customRadio10"
                            >
                              <div class="font-weight-bold text-uppercase">
                                sup-paddle<span class="border-left"
                                  >+ 60&euro;<small class="text-lowercase"
                                    >/pers.</small
                                  ></span
                                >
                              </div>
                            </label>
                          </div>
                        </div>
                        <div class="col-12 p-0">
                          <div
                            class="custom-control custom-checkbox mb-0 other-activity-check mb-5 pl-3"
                          >
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="exampleCheck3"
                            />
                            <label
                              class="custom-control-label mb-0 ml-3"
                              for="exampleCheck3"
                              >je ne souhaite pas d'autres activites</label
                            >
                          </div>
                        </div>
                      </div>
                      <div class="card-body border-top p-0 pt-5 d-none">
                        <h6 class="font-weight-bold text-uppercase mb-1">
                          infos a savoir
                        </h6>
                        <p class="font-weight-500">
                          Tu peux exprimer une demande specifique ou nous
                          alerter sur tes allergies alimentaires etc...
                        </p>
                        <textarea
                          class="form-control info-textarea bg-light p-4 mb-5"
                          rows="5"
                        >
Fais-toi plaisir !</textarea
                        >
                        <button
                          class="btn btn-danger text-uppercase shadow p-3 px-4 continue-btn"
                        >
                          continuer
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="card completed rounded-0 mb-3">
                    <!-- completed -->
                    <div class="card-header rounded-0 border-0 p-0 d-flex">
                      <h6
                        class="mb-0 text-uppercase font-weight-normal d-flex align-items-center check-head px-5 p-4 flex-1"
                      >
                        <div
                          class="participant-img-container position-relative"
                        >
                          <img
                            class="participant-img mr-3"
                            fluid
                            :src="require('@/assets/images/ui_faces/1.jpg')"
                          /><span class="participant-check"></span>
                        </div>
                        <strong
                          class="participant-name h6 mb-0 font-weight-bold"
                          >marion</strong
                        >
                        <div class="completion-details">
                          <ul
                            class="completion-details-list mb-0 list-unstyled d-flex"
                          >
                            <li>
                              <h6 class="detail-head mb-0">chambre privé</h6>
                              <p class="detail-desc mb-0">
                                à partager avec Axel
                              </p>
                            </li>
                            <li>
                              <h6 class="detail-head mb-0">Matériel</h6>
                              <p class="detail-desc mb-0">Avec location</p>
                            </li>
                            <li
                              data-toggle="tooltip"
                              data-placement="top"
                              title="SUP-PADDLE - PLONGéE SOUS MARINE"
                            >
                              <h6 class="detail-head mb-0">2 activités en +</h6>
                              <p class="detail-desc mb-0">sélectionnées</p>
                            </li>
                          </ul>
                        </div>
                        <div class="ml-auto text-right check-amount-head">
                          Mon séjour<br /><strong
                            class="check-amount d-block mt-1"
                            >2 220 &euro;</strong
                          >
                        </div>
                      </h6>
                      <div class="d-flex flex-column">
                        <button
                          class="btn text-uppercase personalize-btn rounded-0 border-0 px-4 flex-1"
                        >
                          MODIFIER
                        </button>
                        <button
                          class="btn text-uppercase personalize-btn remove rounded-0 border-0 px-4"
                        >
                          RETIRER
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header border-0 p-0 d-flex">
                      <h6
                        class="mb-0 text-uppercase font-weight-normal d-flex align-items-center check-head px-5 p-4 flex-1"
                      >
                        <div
                          class="participant-img-container position-relative participant-opacity"
                        >
                          <img
                            class="participant-img mr-3"
                            fluid
                            :src="require('@/assets/images/ui_faces/1.jpg')"
                          /><span class="participant-check"></span>
                        </div>
                        <strong
                          class="participant-name h6 mb-0 font-weight-bold participant-opacity"
                          >marion
                          <i
                            class="fa fa-caret-right mx-3 small align-baseline caret-icon"
                          ></i
                        ></strong>
                        <!-- marion -->
                        <div
                          class="participant-add position-relative d-flex align-items-center"
                        >
                          <i
                            class="far fa-user-circle mx-3 align-baseline participant-icon"
                          ></i>
                          <strong
                            class="participant-name h6 mb-0 font-weight-bold"
                            >AXEL
                          </strong>
                        </div>
                        <div class="ml-auto text-right check-amount-head">
                          SEJOUR AXEL<br /><strong
                            class="check-amount d-block mt-1"
                            >2 220 &euro;</strong
                          >
                        </div>
                      </h6>
                    </div>
                    <div class="mx-5">
                      <div class="reservation-text position-relative mt-4">
                        <h6
                          class="font-weight-normal mb-0 d-inline-block bg-white pr-3 position-relative text-uppercase"
                        >
                          COMPLèTE TA RéSERVATION
                        </h6>
                      </div>
                      <div class="card-body p-0 pt-5">
                        <h6 class="font-weight-bold">Quel type de chambre :</h6>
                        <p class="font-weight-500">
                          Dans la limite des stocks disponibles !
                        </p>
                        <div class="custom-radio-container p-4 px-5 mr-5 pb-5">
                          <div class="custom-control">
                            <input
                              type="radio"
                              id="Radio1"
                              name="room1"
                              class="custom-control-input"
                              disabled
                            />
                            <label class="custom-control-label" for="Radio1"
                              ><div
                                class="d-flex align-items-center pb-2 mb-2 dotted-border"
                              >
                                <span
                                  ><div class="font-weight-bold text-uppercase">
                                    chambre a partager
                                  </div>
                                  <p class="font-weight-500 mb-0">
                                    Entre Trippers !
                                  </p>
                                </span>
                                <div
                                  class="ml-auto font-weight-bold text-uppercase"
                                >
                                  inclus
                                </div>
                              </div></label
                            >
                          </div>
                          <div class="custom-control">
                            <input
                              type="radio"
                              id="Radio2"
                              name="room1"
                              class="custom-control-input"
                              disabled
                            />
                            <label class="custom-control-label" for="Radio2"
                              ><div
                                class="d-flex align-items-center pb-2 mb-2 dotted-border"
                              >
                                <span
                                  ><div class="font-weight-bold text-uppercase">
                                    chambre double
                                  </div>
                                  <p class="font-weight-500 mb-0">Lit simple</p>
                                </span>
                                <div
                                  class="ml-auto font-weight-bold text-uppercase"
                                >
                                  inclus
                                </div>
                              </div></label
                            >
                          </div>
                          <div class="custom-control">
                            <input
                              type="radio"
                              id="Radio3"
                              name="room1"
                              class="custom-control-input"
                              checked=""
                            />
                            <label class="custom-control-label" for="Radio3">
                              <div
                                class="d-flex align-items-center pb-2 mb-2 dotted-border"
                              >
                                <span
                                  ><div class="font-weight-bold text-uppercase">
                                    chambre privé
                                  </div>
                                  <p class="font-weight-500 mb-0">Lit double</p>
                                </span>
                                <div
                                  class="ml-auto font-weight-bold text-uppercase"
                                >
                                  réservée par marion
                                </div>
                              </div>
                            </label>
                          </div>
                          <div class="custom-control">
                            <input
                              type="radio"
                              id="Radio4"
                              name="room1"
                              class="custom-control-input"
                              disabled
                            />
                            <label class="custom-control-label" for="Radio4"
                              ><div
                                class="d-flex align-items-center pb-2 mb-2 dotted-border"
                              >
                                <span
                                  ><div class="font-weight-bold text-uppercase">
                                    chambre privé
                                  </div>
                                  <p class="font-weight-500 mb-0">Lit double</p>
                                </span>
                                <div
                                  class="ml-auto font-weight-bold text-uppercase"
                                >
                                  + 60 &euro;
                                </div>
                              </div></label
                            >
                          </div>
                        </div>
                      </div>
                      <div class="card-body border-top p-0 pt-5">
                        <h6 class="font-weight-bold">
                          Avec ou sans location matériel :
                        </h6>
                        <p class="font-weight-500">
                          Matériel correspondant uniquement a tan activité
                          principale
                        </p>
                        <div class="custom-radio-container p-4 px-5 mr-5 pb-5">
                          <div class="custom-control">
                            <input
                              type="radio"
                              id="Radio5"
                              name="materiel1"
                              class="custom-control-input"
                            />
                            <label class="custom-control-label" for="Radio5"
                              ><div
                                class="d-flex align-items-center pb-2 mb-2 dotted-border"
                              >
                                <span
                                  ><div class="font-weight-bold text-uppercase">
                                    avec materiel
                                  </div>
                                  <p class="font-weight-500 mb-0">
                                    Je voyage lègé
                                  </p>
                                </span>
                                <div
                                  class="ml-auto font-weight-bold text-uppercase"
                                >
                                  inclus
                                </div>
                              </div></label
                            >
                          </div>
                          <div class="custom-control">
                            <input
                              type="radio"
                              id="Radio6"
                              name="materiel1"
                              class="custom-control-input"
                            />
                            <label class="custom-control-label" for="Radio6"
                              ><div
                                class="d-flex align-items-center pb-2 mb-2 dotted-border"
                              >
                                <span
                                  ><div class="font-weight-bold text-uppercase">
                                    sans materiel
                                  </div>
                                  <p class="font-weight-500 mb-0">
                                    Je préfére venir avec mon matos !
                                  </p>
                                </span>
                                <div
                                  class="ml-auto font-weight-bold text-uppercase"
                                >
                                  reduction de 380 &euro;
                                </div>
                              </div></label
                            >
                          </div>
                        </div>
                      </div>
                      <div class="card-body border-top p-0 pt-5">
                        <h6 class="font-weight-bold">Activites en +</h6>
                        <p class="font-weight-500">
                          Vous pouvez sélectionner plusieurs activités
                        </p>
                        <div class="custom-radio-container inline-blocks py-3">
                          <div
                            class="custom-control custom-radio bg-light rounded border"
                          >
                            <input
                              type="checkbox"
                              id="Radio7"
                              class="custom-control-input"
                            />
                            <label
                              class="custom-control-label d-flex align-items-center border-0"
                              for="Radio7"
                            >
                              <div class="font-weight-bold text-uppercase">
                                sup-paddle<span class="border-left"
                                  >+ 60&euro;<small class="text-lowercase"
                                    >/pers.</small
                                  ></span
                                >
                              </div>
                            </label>
                          </div>
                          <div
                            class="custom-control custom-radio bg-light rounded border"
                          >
                            <input
                              type="checkbox"
                              id="Radio8"
                              class="custom-control-input"
                            />
                            <label
                              class="custom-control-label d-flex align-items-center border-0"
                              for="Radio8"
                            >
                              <div class="font-weight-bold text-uppercase">
                                plongee sous-marine<span class="border-left"
                                  >+ 60&euro;<small class="text-lowercase"
                                    >/pers.</small
                                  ></span
                                >
                              </div>
                            </label>
                          </div>
                          <div
                            class="custom-control custom-radio bg-light rounded border"
                          >
                            <input
                              type="checkbox"
                              id="Radio9"
                              class="custom-control-input"
                            />
                            <label
                              class="custom-control-label d-flex align-items-center border-0"
                              for="Radio9"
                            >
                              <div class="font-weight-bold text-uppercase">
                                sup-paddle<span class="border-left"
                                  >+ 60&euro;<small class="text-lowercase"
                                    >/pers.</small
                                  ></span
                                >
                              </div>
                            </label>
                          </div>
                          <div
                            class="custom-control custom-radio bg-light rounded border"
                          >
                            <input
                              type="checkbox"
                              id="Radio10"
                              class="custom-control-input"
                            />
                            <label
                              class="custom-control-label d-flex align-items-center border-0"
                              for="Radio10"
                            >
                              <div class="font-weight-bold text-uppercase">
                                sup-paddle<span class="border-left"
                                  >+ 60&euro;<small class="text-lowercase"
                                    >/pers.</small
                                  ></span
                                >
                              </div>
                            </label>
                          </div>
                        </div>
                        <div class="col-12 p-0">
                          <div
                            class="custom-control custom-checkbox mb-0 other-activity-check mb-5 pl-0"
                          >
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="exampleCheck4"
                            />
                            <label
                              class="custom-control-label mb-0 pl-4"
                              for="exampleCheck4"
                              >je ne souhaite pas d'autres activites</label
                            >
                          </div>
                        </div>
                      </div>
                      <div class="card-body border-top p-0 pt-5">
                        <h6 class="font-weight-bold text-uppercase mb-1">
                          infos a savoir
                        </h6>
                        <p class="font-weight-500">
                          Tu peux exprimer une demande specifique ou nous
                          alerter sur tes allergies alimentaires etc...
                        </p>
                        <textarea
                          class="form-control info-textarea bg-light p-4 mb-5"
                          rows="5"
                        >
Fais-toi plaisir !</textarea
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="step4"
                  role="tabpanel"
                  aria-labelledby="step4-tab"
                >
                  <div class="card completed rounded-0 mb-0">
                    <div class="card-header rounded-0 border-0 p-0 d-flex">
                      <h6
                        class="mb-0 text-uppercase font-weight-normal d-flex align-items-center check-head px-5 p-4 flex-1"
                      >
                        <div
                          class="participant-img-container position-relative"
                        >
                          <img
                            class="participant-img mr-3"
                            fluid
                            :src="require('@/assets/images/ui_faces/1.jpg')"
                          /><span class="participant-check"></span>
                        </div>
                        <strong
                          class="participant-name h6 mb-0 font-weight-bold"
                          >marion</strong
                        >
                        <div class="completion-details">
                          <ul
                            class="completion-details-list mb-0 list-unstyled d-flex"
                          >
                            <li>
                              <h6 class="detail-head mb-0">chambre privé</h6>
                              <p class="detail-desc mb-0">
                                à partager avec Axel
                              </p>
                            </li>
                            <li>
                              <h6 class="detail-head mb-0">Matériel</h6>
                              <p class="detail-desc mb-0">Avec location</p>
                            </li>
                            <li
                              data-toggle="tooltip"
                              data-placement="top"
                              title="SUP-PADDLE - PLONGéE SOUS MARINE"
                            >
                              <h6 class="detail-head mb-0">2 activités en +</h6>
                              <p class="detail-desc mb-0">sélectionnées</p>
                            </li>
                          </ul>
                        </div>
                        <div class="ml-auto text-right check-amount-head">
                          Mon séjour<br /><strong
                            class="check-amount d-block mt-1"
                            >2 220 &euro;</strong
                          >
                        </div>
                      </h6>
                      <div class="d-flex flex-column">
                        <button
                          class="btn text-uppercase personalize-btn rounded-0 border-0 px-4 flex-1"
                        >
                          MODIFIER
                        </button>
                        <button
                          class="btn text-uppercase personalize-btn remove rounded-0 border-0 px-4"
                        >
                          RETIRER
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="card completed rounded-0">
                    <div class="card-header rounded-0 border-0 p-0 d-flex">
                      <h6
                        class="mb-0 text-uppercase font-weight-normal d-flex align-items-center check-head px-5 p-4 flex-1"
                      >
                        <div
                          class="participant-img-container position-relative"
                        >
                          <img
                            class="participant-img mr-3"
                            fluid
                            :src="require('@/assets/images/ui_faces/1.jpg')"
                          />
                        </div>
                        <strong
                          class="participant-name h6 mb-0 font-weight-bold"
                          >AXEL</strong
                        >
                        <div class="completion-details">
                          <ul
                            class="completion-details-list mb-0 list-unstyled d-flex"
                          >
                            <li>
                              <h6 class="detail-head mb-0">chambre privé</h6>
                              <p class="detail-desc mb-0">
                                à partager avec Axel
                              </p>
                            </li>
                            <li>
                              <h6 class="detail-head mb-0">Matériel</h6>
                              <p class="detail-desc mb-0">Avec location</p>
                            </li>
                            <li
                              data-toggle="tooltip"
                              data-placement="top"
                              title="SUP-PADDLE - PLONGéE SOUS MARINE"
                            >
                              <h6 class="detail-head mb-0">2 activités en +</h6>
                              <p class="detail-desc mb-0">sélectionnées</p>
                            </li>
                          </ul>
                        </div>
                        <div class="ml-auto text-right check-amount-head">
                          Mon séjour<br /><strong
                            class="check-amount d-block mt-1"
                            >2 220 &euro;</strong
                          >
                        </div>
                      </h6>
                      <div class="d-flex flex-column">
                        <button
                          class="btn text-uppercase personalize-btn rounded-0 border-0 px-4 flex-1"
                        >
                          MODIFIER
                        </button>
                        <button
                          class="btn text-uppercase personalize-btn remove rounded-0 border-0 px-4"
                        >
                          RETIRER
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="card mt-4 mb-0 rounded-0">
                    <div class="card-header border-0 p-0 d-flex">
                      <h6
                        class="mb-0 text-uppercase font-weight-bold d-flex align-items-center check-head pt-5 px-5 pb-4 flex-1"
                      >
                        <img
                          class="mr-3"
                          fluid
                          :src="require('@/assets/images/svg/amb_icon.svg')"
                        />
                        <strong class="font-weight-bold"
                          >ASSURANCE Marion
                        </strong>

                        <div class="ml-auto text-right">Tripper 1</div>
                      </h6>
                    </div>
                    <div class="mx-5">
                      <div class="card-body border-top p-0 pt-3">
                        <p class="font-weight-500">
                          Choisissez votre formule d’assurance :
                        </p>
                        <div
                          class="custom-radio-container assurance-radio-container"
                        >
                          <div class="row">
                            <div class="col-12 col-lg-5">
                              <div
                                class="custom-control custom-radio dotted-border pb-3 mt-2 mb-4"
                              >
                                <input
                                  type="radio"
                                  id="Radio11"
                                  name="insurance_plan"
                                  class="custom-control-input"
                                />
                                <label
                                  class="custom-control-label"
                                  for="Radio11"
                                >
                                  <div
                                    class="d-flex align-items-center mb-2 font-weight-bold"
                                  >
                                    Rapatriment 60&euro;<span>/pers.</span>
                                    <div class="ml-auto">
                                      <img
                                        class=""
                                        fluid
                                        :src="
                                          require('@/assets/images/GEODESK_logo_Color.png')
                                        "
                                      />
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
                              <div
                                class="custom-control custom-radio dotted-border pb-3 mt-2 mb-4"
                              >
                                <input
                                  type="radio"
                                  id="Radio12"
                                  name="insurance_plan"
                                  class="custom-control-input"
                                />
                                <label
                                  class="custom-control-label"
                                  for="Radio12"
                                  ><div
                                    class="d-flex align-items-center mb-2 font-weight-bold"
                                  >
                                    Rapatriment 60&euro;<span>/pers.</span>
                                    <div class="ml-auto">
                                      <img
                                        class=""
                                        fluid
                                        :src="
                                          require('@/assets/images/GEODESK_logo_Color.png')
                                        "
                                      />
                                    </div></div
                                ></label>
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
                              <div
                                class="custom-control custom-radio dotted-border pb-3 mt-2 mb-3"
                              >
                                <input
                                  type="radio"
                                  id="Radio13"
                                  name="insurance_plan"
                                  class="custom-control-input"
                                />
                                <label
                                  class="custom-control-label"
                                  for="Radio13"
                                  ><div
                                    class="d-flex align-items-center mb-2 font-weight-bold"
                                  >
                                    Je suis deja assure 0&euro;<span
                                      class="d-none"
                                      >/pers.</span
                                    >
                                    <div class="ml-auto">
                                      <img
                                        class=""
                                        fluid
                                        :src="
                                          require('@/assets/images/GEODESK_logo_Color.png')
                                        "
                                      />
                                    </div></div
                                ></label>
                              </div>
                              <p class="assurance-para font-weight-500">
                                Si vous ne prenez pas d'assurances avec Heaven
                                Trip, il vous sera demande de bien vouloir nous
                                transmettre les informations de votre police
                                d'assurance et les personnes a contacter en cas
                                d'urgence
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card border-top-0 rounded-0">
                    <div
                      class="card-header border-0 p-0 d-flex participant-opacity"
                    >
                      <h6
                        class="mb-0 text-uppercase font-weight-bold d-flex align-items-center check-head pt-5 px-5 pb-4 flex-1"
                      >
                        <img
                          class="mr-3"
                          fluid
                          :src="require('@/assets/images/svg/amb_icon.svg')"
                        />
                        <strong class="font-weight-bold"
                          >ASSURANCE AXEL
                        </strong>

                        <div class="ml-auto text-right">Tripper 2</div>
                      </h6>
                    </div>
                    <div class="mx-5 participant-opacity">
                      <div class="card-body border-top p-0 pt-3">
                        <p class="font-weight-500">
                          Choisissez votre formule d’assurance :
                        </p>
                        <div
                          class="custom-radio-container assurance-radio-container d-none"
                        >
                          <div class="row">
                            <div class="col-12 col-lg-5">
                              <div
                                class="custom-control custom-radio dotted-border pb-3 mt-2 mb-4"
                              >
                                <input
                                  type="radio"
                                  id="Radio11"
                                  name="insurance_plan"
                                  class="custom-control-input"
                                />
                                <label
                                  class="custom-control-label"
                                  for="Radio11"
                                >
                                  <div
                                    class="d-flex align-items-center pt-2 mb-2 font-weight-bold"
                                  >
                                    Rapatriment 60&euro;<span>/pers.</span>
                                    <div class="ml-auto">
                                      <img
                                        class=""
                                        fluid
                                        :src="
                                          require('@/assets/images/GEODESK_logo_Color.png')
                                        "
                                      />
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
                              <div
                                class="custom-control custom-radio dotted-border pb-3 mt-2 mb-4"
                              >
                                <input
                                  type="radio"
                                  id="Radio12"
                                  name="insurance_plan"
                                  class="custom-control-input"
                                />
                                <label
                                  class="custom-control-label"
                                  for="Radio12"
                                  ><div
                                    class="d-flex align-items-center pt-2 mb-2 font-weight-bold"
                                  >
                                    Rapatriment 60&euro;<span>/pers.</span>
                                    <div class="ml-auto">
                                      <img
                                        class=""
                                        fluid
                                        :src="
                                          require('@/assets/images/GEODESK_logo_Color.png')
                                        "
                                      />
                                    </div></div
                                ></label>
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
                              <div
                                class="custom-control custom-radio dotted-border pb-3 mt-2 mb-3"
                              >
                                <input
                                  type="radio"
                                  id="Radio13"
                                  name="insurance_plan"
                                  class="custom-control-input"
                                />
                                <label
                                  class="custom-control-label"
                                  for="Radio13"
                                  ><div
                                    class="d-flex align-items-center pt-2 mb-2 font-weight-bold"
                                  >
                                    Je suis deja assure 0&euro;<span
                                      class="d-none"
                                      >/pers.</span
                                    >
                                    <div class="ml-auto">
                                      <img
                                        class=""
                                        fluid
                                        :src="
                                          require('@/assets/images/GEODESK_logo_Color.png')
                                        "
                                      />
                                    </div></div
                                ></label>
                              </div>
                              <p class="assurance-para font-weight-500">
                                Si vous ne prenez pas d'assurances avec Heaven
                                Trip, il vous sera demande de bien vouloir nous
                                transmettre les informations de votre police
                                d'assurance et les personnes a contacter en cas
                                d'urgence
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade login-signup-tab"
                  id="step5"
                  role="tabpanel"
                  aria-labelledby="step5-tab"
                >
                  <div class="row">
                    <div class="col-12 col-lg-7">
                      <div class="card pay-card">
                        <div class="card-body">
                          <h6 class="font-weight-bold text-uppercase pay-head">
                            Quel montant souhaitez vous payer :
                          </h6>
                          <div
                            class="custom-radio-container assurance-radio-container text-uppercase"
                          >
                            <div class="row">
                              <div class="col-12 col-lg-7 pr-0">
                                <div class="custom-control custom-radio pt-3">
                                  <input
                                    type="radio"
                                    id="Radio14"
                                    name="pay"
                                    class="custom-control-input"
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="Radio14"
                                  >
                                    <div
                                      class="d-flex align-items-center font-weight-normal"
                                    >
                                      Verser un acompte de 30% :
                                      <strong
                                        class="h6 mb-0 ml-2 font-weight-bold"
                                        >3108 &euro;</strong
                                      >
                                    </div>
                                  </label>
                                </div>
                                <p
                                  class="font-weight-500 left-pad-pars text-transform-none"
                                >
                                  Solde est à payer avant le 28/09/2020
                                </p>
                              </div>
                              <div class="col-12 col-lg-5">
                                <div class="custom-control custom-radio pt-3">
                                  <input
                                    type="radio"
                                    id="Radio15"
                                    name="pay"
                                    class="custom-control-input"
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="Radio15"
                                  >
                                    <div
                                      class="d-flex align-items-center font-weight-normal"
                                    >
                                      Payer la totalité
                                    </div>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h6
                            class="font-weight-bold text-uppercase pay-head mt-3"
                          >
                            Coupon ou points de fédlité
                          </h6>
                          <form class="contact-form pt-3">
                            <div class="row">
                              <div class="col-12 col-lg-6">
                                <div class="form-group mb-0">
                                  <!-- error -->
                                  <input
                                    class="form-control"
                                    type="text"
                                    name=""
                                    placeholder="Au pif !"
                                    value="Terminator"
                                  />
                                  <i class="fa fa-check check-sym"></i>
                                  <i class="fa fa-times check-sym error"></i>
                                  <span class="error-text"
                                    >Loupé ! Coupon invalide</span
                                  >
                                </div>
                              </div>
                              <div class="col-12 col-lg-6">
                                <button
                                  class="btn coupon-btn contact-form-btn border-0"
                                >
                                  APPLIQUER
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div class="card pay-card rounded-0 mb-0">
                        <div class="card-body">
                          <h6 class="font-weight-bold text-uppercase pay-head">
                            Choisissez votre moyen de paiement :
                          </h6>
                          <div
                            class="custom-radio-container assurance-radio-container text-uppercase my-4 py-3"
                          >
                            <div class="row">
                              <div class="col-12 col-lg-7">
                                <div class="custom-control custom-radio">
                                  <input
                                    type="radio"
                                    id="card_transfer"
                                    name="choicePay"
                                    class="custom-control-input"
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="card_transfer"
                                  >
                                    <div
                                      class="d-flex align-items-center font-weight-normal"
                                    >
                                      Carte bancaire
                                    </div>
                                  </label>
                                </div>
                              </div>
                              <div class="col-12 col-lg-5">
                                <div class="custom-control custom-radio">
                                  <input
                                    type="radio"
                                    id="bank_transfer"
                                    name="choicePay"
                                    class="custom-control-input"
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="bank_transfer"
                                  >
                                    <div
                                      class="d-flex align-items-center font-weight-normal"
                                    >
                                      Virement bancaire
                                    </div>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <form class="contact-form participants-form">
                            <div class="card-transfer">
                              <div class="row">
                                <div class="col-12 col-lg-9">
                                  <div class="form-group has-float-label">
                                    <!-- error -->
                                    <input
                                      id="checkout_card_number"
                                      class="input-text form-control"
                                      type="text"
                                      size="19"
                                      maxlength="19"
                                      data-stripe="number"
                                      placeholder="1234 5678 9012 3456"
                                      autofocus
                                    />
                                    <!-- form-error -->
                                    <span id="checkout_card_number_logo"></span>
                                    <span
                                      class="payment-errors required"
                                    ></span>
                                    <label>Numero de la carte</label>
                                    <i class="fa fa-times check-sym error"></i>
                                    <span class="error-text"
                                      >Les numéros renseignés sont
                                      invalides</span
                                    >
                                  </div>
                                </div>
                                <div class="col-12 col-lg-5">
                                  <div class="form-group has-float-label">
                                    <input
                                      class="form-control pr-4 expire_date"
                                      id="expire_date"
                                      placeholder=" "
                                    />
                                    <label for="expire_date"
                                      >Date expiration</label
                                    >
                                    <img
                                      class="acc-icon"
                                      fluid
                                      :src="require('@/assets/images/cal.png')"
                                    />
                                  </div>
                                </div>
                                <div class="col-12 col-lg-4">
                                  <div class="form-group has-float-label">
                                    <input
                                      id="cvc"
                                      onKeyPress="if(this.value.length==4) return false;"
                                      class="form-control pr-4"
                                      type="number"
                                      name=""
                                      value=""
                                      placeholder=" "
                                    />
                                    <!-- form-error -->
                                    <label for="cvc">Code CVC</label>
                                    <img
                                      class="acc-icon"
                                      fluid
                                      :src="
                                        require('@/assets/images/svg/lock.svg')
                                      "
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="bank-transfer">
                              <h6
                                class="font-weight-bold text-uppercase pay-head mb-3"
                              >
                                Coordonnées bancaires de Heaven Trip
                              </h6>
                              <div class="dashed-border">
                                <div class="row">
                                  <div class="col-12 col-lg-7">
                                    <div
                                      class="form-group has-float-label mt-3 mb-0"
                                    >
                                      <input
                                        id="international_acc"
                                        class="form-control"
                                        type="text"
                                        name=""
                                        value="FR 76 102780100400021658203 08"
                                        placeholder=" "
                                      />
                                      <label for="international_acc"
                                        >IBAN
                                        <span class="bank-type"
                                          >(International Bank Account
                                          Number)</span
                                        >
                                      </label>
                                    </div>
                                  </div>
                                  <div class="col-12 col-lg-5">
                                    <div
                                      class="form-group has-float-label mt-3 mb-0"
                                    >
                                      <input
                                        id="bank_code"
                                        class="form-control"
                                        type="text"
                                        name=""
                                        value="CMCI FR 2A"
                                        placeholder=" "
                                      />
                                      <label for="bank_code"
                                        >BIC
                                        <span class="bank-type"
                                          >(Bank Identifier Code)</span
                                        >
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p class="font-weight-normal">
                                Merci de valider la demande. Renseigne bien ton
                                numéro de réservation dans l’objet du virement.
                                Un email te sera envoyé pour confirmer la bonne
                                réception du paiement.
                              </p>
                            </div>
                            <div
                              class="custom-control custom-checkbox mt-5 mb-n2 pl-0 general-condition"
                            >
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="generalCondition"
                              />
                              <label
                                class="custom-control-label mb-0 pl-4"
                                for="generalCondition"
                                >Valider les conditions
                                <span
                                  class="text-danger text-decoration-underline"
                                  >générales de vente
                                </span>
                                et
                                <span
                                  class="text-danger text-decoration-underline"
                                  >conditions générales d’utilisation</span
                                ></label
                              >
                            </div>
                          </form>
                        </div>
                      </div>
                      <button
                        class="btn contact-form-btn border-0 rounded-0 btn-block h6 mb-0 disable"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Veuillez d’abord renseigner un moyen de paiement"
                      >
                        Valider la demande
                      </button>
                      <!-- disable -->
                      <!-- contact-form-btn-error -->
                      <div class="good-trip-div d-none">
                        <div class="success-msg">
                          <div
                            class="success-check rounded-circle d-block mx-auto my-4"
                          >
                            <i class="fas fa-check"></i>
                          </div>
                          <h6
                            class="text-uppercase text-dark font-weight-bold mb-3"
                          >
                            Votre paiement de 3108 € à été validé
                          </h6>
                          <p class="success-msg-content mb-0">
                            Un email de confirmation à été envoyé sur ta boite
                            mail.
                          </p>
                        </div>
                        <div class="success-trip-info bg-dark text-white">
                          <h6 class="prefer-text text-center">
                            <img
                              class="d-inline-block mx-auto px-3 bg-dark position-relative zindex-1"
                              fluid
                              :src="require('@/assets/images/mic_light.png')"
                            />
                          </h6>
                          <p class="h6 mb-3 font-weight-800">
                            Et un Tripper de + !
                          </p>
                          <p class="f-14 font-weight-normal">
                            Tu peux retrouver ta réservation sur ton
                            <span class="text-decoration-underline"
                              >espace client</span
                            >
                            Heaven Trip. Profites en pour discuter avec les
                            autres participants via le chat en ligne.
                          </p>
                          <p class="f-14 font-weight-normal">
                            Sportivement, la team Heaven Trip
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-lg-5 ml-auto">
                      <div class="number-of-tripper-div">
                        <h6 class="tripper-head text-uppercase mb-0">
                          NOMBRE DE TRIPPERS : 2
                        </h6>
                        <div class="accordion" id="tripperaccordion">
                          <div class="card border-0">
                            <div
                              class="card-header border-0 mb-0 text-uppercase font-weight-bold d-flex align-items-center collapsed"
                              id="tripOne"
                              type="button"
                              data-toggle="collapse"
                              data-target="#tripperOne"
                              aria-expanded="false"
                              aria-controls="tripperOne"
                            >
                              <div
                                class="participant-img-container position-relative"
                              >
                                <img
                                  class="participant-img mr-3"
                                  fluid
                                  :src="
                                    require('@/assets/images/ui_faces/1.jpg')
                                  "
                                /><span class="participant-check"></span>
                              </div>
                              <strong
                                class="participant-name h6 mb-0 font-weight-bold"
                                >marion</strong
                              >
                              <div class="ml-auto text-right check-amount-head">
                                <span class="close-detail"
                                  >Fermer Détails<i
                                    class="fas fa-chevron-up ml-2"
                                  ></i
                                ></span>
                                <span class="view-detail"
                                  >Voir Détails<i
                                    class="fas fa-chevron-down ml-2"
                                  ></i
                                ></span>
                                <strong class="check-amount text-dark d-block"
                                  >2 220 &euro;</strong
                                >
                              </div>
                            </div>
                            <div
                              id="tripperOne"
                              class="collapse"
                              aria-labelledby="tripOne"
                              data-parent="#tripperaccordion"
                            >
                              <div class="card-body">
                                <ul class="list-unstyled mb-0 tripper-list">
                                  <li>
                                    <div
                                      class="trippers-list-div d-flex align-items-center"
                                    >
                                      <span>
                                        <h6
                                          class="text-uppercase mb-0 tripper-list-head font-weight-bold"
                                        >
                                          Chambre PRIvé
                                        </h6>
                                        <p class="tripper-list-para mb-0">
                                          à partager avec Axel
                                        </p>
                                      </span>
                                      <h6 class="tripper-amount ml-auto mb-0">
                                        <strong>+ 60€</strong>/pers.
                                      </h6>
                                    </div>
                                  </li>
                                  <li>
                                    <div
                                      class="trippers-list-div d-flex align-items-center"
                                    >
                                      <span>
                                        <h6
                                          class="text-uppercase mb-0 tripper-list-head font-weight-bold"
                                        >
                                          Matériel
                                        </h6>
                                        <p class="tripper-list-para mb-0">
                                          Avec location
                                        </p>
                                      </span>
                                      <h6 class="tripper-amount ml-auto mb-0">
                                        <strong>Inclus</strong>
                                      </h6>
                                    </div>
                                  </li>
                                  <li>
                                    <div
                                      class="trippers-list-div d-flex align-items-center"
                                    >
                                      <span>
                                        <h6
                                          class="text-uppercase mb-0 tripper-list-head font-weight-bold"
                                        >
                                          Plongée sous-marine
                                        </h6>
                                      </span>
                                      <h6 class="tripper-amount ml-auto mb-0">
                                        <strong>+ 60€</strong>/pers.
                                      </h6>
                                    </div>
                                    <div
                                      class="trippers-list-div d-flex align-items-center"
                                    >
                                      <span>
                                        <h6
                                          class="text-uppercase mb-0 tripper-list-head font-weight-bold"
                                        >
                                          SUP-PADDLE
                                        </h6>
                                      </span>
                                      <h6 class="tripper-amount ml-auto mb-0">
                                        <strong>+ 60€</strong>/pers.
                                      </h6>
                                    </div>
                                  </li>
                                  <li>
                                    <div
                                      class="trippers-list-div d-flex align-items-center"
                                    >
                                      <span>
                                        <h6
                                          class="text-uppercase mb-0 tripper-list-head font-weight-bold"
                                        >
                                          Assurance multirisque
                                        </h6>
                                      </span>
                                      <h6 class="tripper-amount ml-auto mb-0">
                                        <strong>+ 60€</strong>/pers.
                                      </h6>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="card border-0">
                            <div
                              class="card-header border-0 mb-0 text-uppercase font-weight-bold d-flex align-items-center collapsed"
                              id="triptwo"
                              type="button"
                              data-toggle="collapse"
                              data-target="#tripperTwo"
                              aria-expanded="false"
                              aria-controls="tripperTwo"
                            >
                              <div
                                class="participant-img-container position-relative"
                              >
                                <img
                                  class="participant-img mr-3"
                                  fluid
                                  :src="
                                    require('@/assets/images/ui_faces/1.jpg')
                                  "
                                />
                              </div>
                              <strong
                                class="participant-name h6 mb-0 font-weight-bold"
                                >axel</strong
                              >
                              <div class="ml-auto text-right check-amount-head">
                                <span class="close-detail"
                                  >Fermer Détails<i
                                    class="fas fa-chevron-up ml-2"
                                  ></i
                                ></span>
                                <span class="view-detail"
                                  >Voir Détails<i
                                    class="fas fa-chevron-down ml-2"
                                  ></i
                                ></span>
                                <strong class="check-amount text-dark d-block"
                                  >2 220 &euro;</strong
                                >
                              </div>
                            </div>
                            <div
                              id="tripperTwo"
                              class="collapse"
                              aria-labelledby="triptwo"
                              data-parent="#tripperaccordion"
                            >
                              <div class="card-body">
                                <ul class="list-unstyled mb-0 tripper-list">
                                  <li>
                                    <div
                                      class="trippers-list-div d-flex align-items-center"
                                    >
                                      <span>
                                        <h6
                                          class="text-uppercase mb-0 tripper-list-head font-weight-bold"
                                        >
                                          Chambre PRIvé
                                        </h6>
                                        <p class="tripper-list-para mb-0">
                                          à partager avec Axel
                                        </p>
                                      </span>
                                      <h6 class="tripper-amount ml-auto mb-0">
                                        <strong>+ 60€</strong>/pers.
                                      </h6>
                                    </div>
                                  </li>
                                  <li>
                                    <div
                                      class="trippers-list-div d-flex align-items-center"
                                    >
                                      <span>
                                        <h6
                                          class="text-uppercase mb-0 tripper-list-head font-weight-bold"
                                        >
                                          Matériel
                                        </h6>
                                        <p class="tripper-list-para mb-0">
                                          Avec location
                                        </p>
                                      </span>
                                      <h6 class="tripper-amount ml-auto mb-0">
                                        <strong>Inclus</strong>
                                      </h6>
                                    </div>
                                  </li>
                                  <li>
                                    <div
                                      class="trippers-list-div d-flex align-items-center"
                                    >
                                      <span>
                                        <h6
                                          class="text-uppercase mb-0 tripper-list-head font-weight-bold"
                                        >
                                          Plongée sous-marine
                                        </h6>
                                      </span>
                                      <h6 class="tripper-amount ml-auto mb-0">
                                        <strong>+ 60€</strong>/pers.
                                      </h6>
                                    </div>
                                    <div
                                      class="trippers-list-div d-flex align-items-center"
                                    >
                                      <span>
                                        <h6
                                          class="text-uppercase mb-0 tripper-list-head font-weight-bold"
                                        >
                                          SUP-PADDLE
                                        </h6>
                                      </span>
                                      <h6 class="tripper-amount ml-auto mb-0">
                                        <strong>+ 60€</strong>/pers.
                                      </h6>
                                    </div>
                                  </li>
                                  <li>
                                    <div
                                      class="trippers-list-div d-flex align-items-center"
                                    >
                                      <span>
                                        <h6
                                          class="text-uppercase mb-0 tripper-list-head font-weight-bold"
                                        >
                                          Assurance multirisque
                                        </h6>
                                      </span>
                                      <h6 class="tripper-amount ml-auto mb-0">
                                        <strong>+ 60€</strong>/pers.
                                      </h6>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade login-signup-tab"
                  id="step6"
                  role="tabpanel"
                  aria-labelledby="step6-tab"
                >
                  <div class="row">
                    <div class="col-12 col-lg-7">
                      <div class="card pay-card rounded-0 mb-0 d-none">
                        <div class="card-body">
                          <h6 class="font-weight-bold text-uppercase pay-head">
                            COMMENT Tu pars ?
                          </h6>
                          <form>
                            <div class="form-group">
                              <div
                                class="btn-group type-of-trip btn-group-toggle"
                                data-toggle="buttons"
                              >
                                <label
                                  class="btn text-white border-0 btn-lg px-4"
                                >
                                  <input
                                    type="radio"
                                    name="options"
                                    id="solo"
                                  />
                                  Solo
                                </label>
                                <label
                                  class="btn text-white border-0 btn-lg px-4"
                                >
                                  <input
                                    type="radio"
                                    name="options"
                                    id="couple"
                                  />
                                  En couple
                                </label>
                                <label
                                  class="btn text-white border-0 btn-lg px-4"
                                >
                                  <input
                                    type="radio"
                                    name="options"
                                    id="family"
                                  />
                                  Famille
                                </label>
                                <label
                                  class="btn text-white border-0 btn-lg px-4 active"
                                >
                                  <input
                                    type="radio"
                                    name="options"
                                    id="potes"
                                    checked=""
                                  />
                                  Entre potes
                                </label>
                              </div>
                            </div>
                          </form>
                          <h6 class="font-weight-bold text-uppercase pay-head">
                            TES ENVIES ?
                          </h6>
                          <p class="font-weight-normal">
                            Tu peux apporter des précisions et/ou modifications
                            :
                          </p>
                          <textarea
                            class="form-control info-textarea bg-light p-3 mb-5"
                            placeholder="Plus d’heures de cours ? Des extras ? Nos formules sont personnalisables alors lâche toi !"
                            rows="7"
                          ></textarea>
                          <h6 class="prefer-text text-center">
                            <img
                              class="d-inline-block mx-auto px-3 bg-white position-relative zindex-1"
                              fluid
                              :src="require('@/assets/images/mic.png')"
                            />
                          </h6>
                          <p class="font-weight-normal mb-0 text-center">
                            En validant ta demande, tu pourras suivre son
                            évolution dans ton espace client Heaven Trip.
                            Surveille ta boite mail, la team s’active pour
                            confirmer ton séjour.
                          </p>
                        </div>
                      </div>
                      <button
                        class="btn contact-form-btn border-0 rounded-0 btn-block h6 mb-0 d-none"
                      >
                        FAIRE MA DEMANDE
                      </button>
                      <!-- disable -->
                      <!-- contact-form-btn-error -->
                      <div class="good-trip-div rounded-0">
                        <div class="success-msg">
                          <div
                            class="success-check rounded-circle d-block mx-auto my-4"
                          >
                            <i class="fas fa-check"></i>
                          </div>
                          <h6
                            class="text-uppercase text-dark font-weight-bold mb-0"
                          >
                            Votre DEMANDE a bien été envoyée
                          </h6>
                        </div>
                        <div class="success-trip-info bg-dark text-white">
                          <h6 class="prefer-text text-center">
                            <img
                              class="d-inline-block mx-auto px-3 bg-dark position-relative zindex-1"
                              fluid
                              :src="require('@/assets/images/mic_light.png')"
                            />
                          </h6>
                          <p class="h6 mb-3 font-weight-800">Reçu 5 sur 5 !</p>
                          <p class="f-14 font-weight-normal">
                            On s’active pour traiter ta demande dans les plus
                            bref délais. Tu peux suivre son évolution dans ton
                            espace client Heaven Trip.
                          </p>
                          <p class="f-14 font-weight-normal">
                            Sportivement, la team Heaven Trip
                          </p>
                        </div>
                        <button
                          class="btn contact-form-btn border-0 btn-block rounded-0 btn-danger"
                        >
                          <a href="/" class="text-link"
                            >RETOURNER à l’accueil</a
                          >
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-right next-step-div pt-4 d-none">
                  <button class="btn text-uppercase prev-step-btn">
                    précédent
                  </button>
                  <button
                    class="btn text-uppercase next-step-btn ml-4 disabled"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Veuillez terminer de renseigner les << activités en + >>"
                  >
                    etape suivante
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  name: "CheckOutSections",
  mounted() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
      $(".expire_date").datepicker();
      $(
        ".avalaible-mem,.validate-btn-info,.card-transfer,.bank-transfer"
      ).hide();
      $(".custom-control.custom-radio").change(function () {
        if ($("#customRadio3").is(":checked")) {
          $(this).parent().find(".avalaible-mem").show();
        } else {
          $(this).parent().find(".avalaible-mem").hide();
        }
      });
      $(".custom-control.sameAddrCheck").change(function () {
        if ($("#sameAddr").is(":checked")) {
          $(".login-tabs").hide();
          $(".validate-btn-info").show();
        } else {
          $(".login-tabs").show();
          $(".validate-btn-info").hide();
        }
      });
      $("input[type=radio][name=choicePay]").change(function () {
        if ($("#card_transfer").is(":checked")) {
          $(".card-transfer").show();
          $("#checkout_card_number").focus();
          $(".bank-transfer").hide();
        } else if ($("#bank_transfer").is(":checked")) {
          $(".card-transfer").hide();
          $(".bank-transfer").show();
        }
      });
    });

    var $cardinput = $("#checkout_card_number_logo");
    $("#checkout_card_number").validateCreditCard(function (result) {
      // console.log(result);
      if (result.card_type != null) {
        switch (result.card_type.name) {
          case "visa":
            $cardinput.css("background-position", "right -35px top 0px");
            $cardinput.addClass("card_visa");
            break;

          case "visa_electron":
            $cardinput.css("background-position", "right -35px top 0px");
            $cardinput.addClass("card_visa_electron");
            break;

          case "mastercard":
            $cardinput.css("background-position", "right 9px top 0px");
            $cardinput.addClass("card_mastercard");
            break;

          case "maestro":
            $cardinput.css("background-position", "right 9px top 0px");
            $cardinput.addClass("card_maestro");
            break;

          case "discover":
            $cardinput.css("background-position", "right -81px top 0px");
            $cardinput.addClass("card_discover");
            break;

          case "amex":
            $cardinput.css("background-position", "right -81px top 0px");
            $cardinput.addClass("card_amex");
            break;

          default:
            $cardinput.css("background-position", "right 50px top 0px");
            break;
        }
      } else {
        $cardinput.css("background-position", "right 50px top 0px");
      }

      // Check for valid card numbere - only show validation checks for invalid Luhn when length is correct so as not to confuse user as they type.
      if (result.length_valid || $cardinput.val().length > 16) {
        if (result.luhn_valid) {
          $cardinput.parent().removeClass("has-error").addClass("has-success");
        } else {
          $cardinput.parent().removeClass("has-success").addClass("has-error");
        }
      } else {
        $cardinput.parent().removeClass("has-success").removeClass("has-error");
      }
    });
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>
