<template>
  <div>
    <main>
      <section class="carousel-section">
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-10 col-lg-9 mx-auto">
              <div class="rounded bg-white d-flex mb-5 centered-div">
                <div
                  class="d-flex align-items-center p-3 flex-1 search-input-container"
                >
                  <img
                    class="mx-3 img-20 d-none d-lg-inline-block"
                    fluid
                    :src="require('@/assets/images/search.png')"
                  />
                  <input
                    class="form-control p-0 search-input ml-2 ml-sm-3 ml-lg-0 mr-xl-4"
                    type="text"
                    name=""
                    placeholder="Ma recherche manuelle"
                  />
                </div>
                <ul
                  class="list-unstyled mb-0 search-list d-none d-lg-inline-flex ml-auto flex-2"
                >
                  <li>
                    <div class="position-relative multi-select-filter">
                      <select
                        id="pays"
                        name="pays"
                        class="multi-select-option pays-dropdown"
                      >
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Antigua">Antigua</option>
                        and Barbuda
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bosnia and Herzegovina">
                          Bosnia and Herzegovina
                        </option>
                        <option value="Botswana">Botswana</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Brunei">Brunei</option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cabo Verde">Cabo Verde</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Central African Republic">
                          Central African Republic
                        </option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo, Democratic Republic of the">
                          Congo, Democratic Republic of the
                        </option>
                        <option value="Congo, Republic of the">
                          Congo, Republic of the
                        </option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Côte d’Ivoire">Côte d’Ivoire</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">
                          Dominican Republic
                        </option>
                        <option value="East Timor (Timor-Leste)">
                          East Timor (Timor-Leste)
                        </option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">
                          Equatorial Guinea
                        </option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Eswatini">Eswatini</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="Gabon">Gabon</option>
                        <option value="The Gambia">The Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Greece">Greece</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran">Iran</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Korea, North">Korea, North</option>
                        <option value="Korea, South">Korea, South</option>
                        <option value="Kosovo">Kosovo</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Laos">Laos</option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libya">Libya</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">
                          Marshall Islands
                        </option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Micronesia, Federated States of">
                          Micronesia, Federated States of
                        </option>
                        <option value="Moldova">Moldova</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montenegro">Montenegro</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar (Burma)">Myanmar (Burma)</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="North Macedonia">North Macedonia</option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau">Palau</option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">
                          Papua New Guinea
                        </option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Qatar  ">Qatar</option>
                        <option value="Romania">Romania</option>
                        <option value="Russia">Russia</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Saint Kitts and Nevis">
                          Saint Kitts and Nevis
                        </option>
                        <option value="Saint Lucia">Saint Lucia</option>
                        <option value="Saint Vincent and the Grenadines">
                          Saint Vincent and the Grenadines
                        </option>
                        <option value="Samoa">Samoa</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome and Principe">
                          Sao Tome and Principe
                        </option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Sudan, South">Sudan, South</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syria">Syria</option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Togo">Togo</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad and Tobago">
                          Trinidad and Tobago
                        </option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">
                          United Arab Emirates
                        </option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Vatican City">Vatican City</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Vietnam">Vietnam</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <div class="position-relative multi-select-filter">
                      <select
                        id="departure_month"
                        name="depart"
                        multiple="multiple"
                        class="multi-select-option depart-dropdown text-capitalize"
                      >
                        <option value="janvier">janvier</option>
                        <option value="février">février</option>
                        <option value="mars">mars</option>
                        <option value="avril">avril</option>
                        <option value="mai">mai</option>
                        <option value="juin">juin</option>
                        <option value="juillet">juillet</option>
                        <option value="août">août</option>
                        <option value="septembre">septembre</option>
                        <option value="octobre">octobre</option>
                        <option value="novembre">novembre</option>
                        <option value="décembre">décembre</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <div class="position-relative multi-select-filter">
                      <select
                        id="my-activity"
                        name="activity"
                        class="multi-select-option activity-dropdown"
                      >
                        <option value="VTT Descente">VTT Descente</option>
                        <option value="Via Ferrata">Via Ferrata</option>
                        <option value="Windsurf">Windsurf</option>
                        <option value="Kitesurf">Kitesurf</option>
                        <option value="VTT Descente">VTT Descente</option>
                        <option value="Via Ferrata">Via Ferrata</option>
                        <option value="Windsurf">Windsurf</option>
                        <option value="Kitesurf">Kitesurf</option>
                        <option value="VTT Descente">VTT Descente</option>
                      </select>
                    </div>
                  </li>
                </ul>
                <button
                  class="btn btn-light bg-white text-uppercase search-btn filter-btn px-3 px-sm-4 rounded-right ml-auto border-left d-inline-block d-lg-none"
                >
                  <img
                    class="mx-2"
                    fluid
                    :src="require('@/assets/images/mob-1.png')"
                  />
                </button>
                <button
                  class="btn btn-dark text-uppercase search-btn px-3 px-sm-4 rounded-right border-0"
                >
                  <span class="d-none d-lg-inline-block"
                    ><a href="/search" class="text-link">rechercher</a></span
                  ><img
                    class="mx-2 d-inline-block d-lg-none"
                    fluid
                    :src="require('@/assets/images/search-white.png')"
                  />
                </button>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-11 col-lg-9 mx-auto my-lg-4">
              <div class="grid-box my-5">
                <div class="text-center text-md-right">
                  <h5 class="red-head text-danger mt-1 font-weight-500">
                    Découvre
                  </h5>
                  <h2 class="text-uppercase heading mb-0">
                    nos <strong>activités</strong>
                  </h2>
                </div>
                <div class="d-none d-md-inline-block">
                  <span class="separator"></span>
                </div>
                <p class="mb-0 d-none d-md-inline-block">
                  <span class="font-weight-bold d-none d-lg-inline-block"
                    >(Prénom),</span
                  >
                  sélectionné une vignette pour connaitre les dates de departs
                  et les places restantes. Tu pourras y voir les autres Trippers
                  interesses ou inscrits et chater avec eux !
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="row">
                <div class="col-12 mx-auto text-center d-block d-md-none">
                  <form>
                    <div class="form-group">
                      <select class="form-control select-place">
                        <option selected="" disabled="" hidden="">
                          Nos inspirations
                        </option>
                        <option value="#pills-home">Nos inspirations</option>
                        <option value="#pills-profile">Dernières places</option>
                        <option value="#pills-contact">Multi-activités</option>
                      </select>
                    </div>
                  </form>
                </div>
                <div
                  class="col-12 col-sm-10 col-lg-4 order-lg-2 d-none d-md-block ml-auto"
                >
                  <ul
                    class="nav nav-pills mb-0 justify-content-center"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li class="nav-item" role="presentation">
                      <a
                        class="nav-link"
                        id="pills-home-tab"
                        data-toggle="pill"
                        href="#pills-home"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                        >Nos inspirations</a
                      >
                    </li>
                    <li class="nav-item" role="presentation">
                      <a
                        class="nav-link active"
                        id="pills-profile-tab"
                        data-toggle="pill"
                        href="#pills-profile"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                        >Dernières places</a
                      >
                    </li>
                    <li class="nav-item" role="presentation">
                      <a
                        class="nav-link"
                        id="pills-contact-tab"
                        data-toggle="pill"
                        href="#pills-contact"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                        >Multi-activités</a
                      >
                    </li>
                  </ul>
                </div>
                <div
                  class="offset-lg-2 col-lg-6 align-self-center order-lg-1 d-none d-lg-block"
                >
                  <div
                    class="text-uppercase font-weight-bold activites-link d-block text-right text-decoration-none"
                  >
                    <span class="bg-white position-relative pl-4"
                      ><a class="text-dark" href="">toutes les activites</a>
                      <img
                        class="ml-1 align-baseline"
                        fluid
                        :src="require('@/assets/images/ARROW_EXIT.png')"
                    /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 tab-content mt-4 order-lg-3"
              id="pills-tabContent"
            >
              <div
                class="tab-pane fade"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                asdfghj
              </div>
              <div
                class="tab-pane fade show active"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <section class="testimonials">
                  <div class="col-12 col-lg-11 ml-auto p-0">
                    <div class="main">
                      <div class="slider1 text-dark customers-testimonials">
                        <div class="">
                          <div
                            class="shadow-effect overflow-hidden position-relative"
                          >
                            <a href="/product"
                              ><img
                                class="img-responsive img-fill"
                                fluid
                                :src="require('@/assets/images/s1.png')"
                                alt=""
                            /></a>
                            <div class="item-details">
                              <div class="content">
                                <div class="text-uppercase">
                                  <div class="d-flex align-items-center">
                                    <img
                                      class="slider-icon d-none d-lg-inline-block"
                                      fluid
                                      :src="require('@/assets/images/pink.png')"
                                    />
                                    <img
                                      class="slider-icon d-none d-md-inline-block d-lg-none"
                                      fluid
                                      :src="
                                        require('@/assets/images/pink2.png')
                                      "
                                    />
                                    <img
                                      class="slider-icon d-inline-block d-md-none"
                                      fluid
                                      :src="
                                        require('@/assets/images/surf-1.png')
                                      "
                                    />
                                    <div>
                                      <h2 class="heading mb-0">
                                        <strong
                                          class="text-dark d-block d-md-inline-block mb-2 mb-md-0"
                                          >ski freeride</strong
                                        ><span
                                          ><i
                                            class="fas fa-caret-right mx-md-2 mr-2"
                                          ></i
                                          >serre-chevalier</span
                                        >
                                      </h2>
                                      <h5
                                        class="sub-heading mb-0 d-none d-md-inline-block"
                                      >
                                        <strong>inclus :</strong> yoga - rando -
                                        vtt neige
                                      </h5>
                                    </div>
                                  </div>
                                  <h5
                                    class="sub-heading mb-0 p-3 d-block d-md-none"
                                  >
                                    <strong>inclus :</strong> yoga - rando - vtt
                                    neige
                                  </h5>
                                </div>
                                <div
                                  class="text-right d-none d-lg-inline-block align-self-center euro-border"
                                >
                                  <h6 class="euro-per mb-0">par pers.</h6>
                                  <h1 class="euro mb-0 euro">1 390&euro;</h1>
                                </div>
                                <ul
                                  class="img-list list-unstyled d-none d-md-inline-flex d-lg-none align-items-center justify-content-center mx-4 mb-0"
                                >
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t1.png')"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t2.png')"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t3.png')"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t4.png')"
                                      />
                                    </a>
                                  </li>
                                  <li><small>+1.5k</small></li>
                                </ul>
                              </div>
                              <div class="hoverable-div">
                                <ul
                                  class="list-unstyled text-uppercase list-info mb-0 d-flex justify-content-around align-items-center border-0"
                                >
                                  <li>
                                    <img
                                      class="icons"
                                      fluid
                                      :src="
                                        require('@/assets/images/globe_d.png')
                                      "
                                    />france
                                  </li>
                                  <li>
                                    <img
                                      class="icons"
                                      fluid
                                      :src="
                                        require('@/assets/images/timer_d.png')
                                      "
                                    />8 jours
                                  </li>
                                  <li>
                                    <img
                                      class="icons"
                                      fluid
                                      :src="
                                        require('@/assets/images/circle_d.png')
                                      "
                                    />TOUS NIVEAUX
                                  </li>
                                  <li>
                                    <img
                                      class="icons"
                                      fluid
                                      :src="
                                        require('@/assets/images/places_d.png')
                                      "
                                    />10 places
                                  </li>
                                </ul>
                                <ul
                                  class="img-list list-unstyled d-inline-flex align-items-center ml-auto mb-0"
                                >
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t1.png')"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t2.png')"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t3.png')"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t4.png')"
                                      />
                                    </a>
                                  </li>
                                  <li><small>+1.5k</small></li>
                                </ul>
                              </div>
                              <div
                                class="d-flex d-lg-none justify-content-between mt-1 mt-md-3"
                              >
                                <ul
                                  class="list-unstyled py-3 text-uppercase list-info mb-0 d-none d-md-inline-flex d-lg-none ml-md-3"
                                >
                                  <li>
                                    <img
                                      class="icons mr-2"
                                      fluid
                                      :src="
                                        require('@/assets/images/globe_d.png')
                                      "
                                    />espagne
                                  </li>
                                  <li>
                                    <img
                                      class="icons mr-2"
                                      fluid
                                      :src="
                                        require('@/assets/images/timer_d.png')
                                      "
                                    />8 jours
                                  </li>
                                  <li>
                                    <img
                                      class="icons mr-2"
                                      fluid
                                      :src="
                                        require('@/assets/images/circle_d.png')
                                      "
                                    />tous niveaux
                                  </li>
                                  <li>
                                    <img
                                      class="icons mr-2"
                                      fluid
                                      :src="
                                        require('@/assets/images/places_d.png')
                                      "
                                    />10 places
                                  </li>
                                </ul>

                                <ul
                                  class="img-list list-unstyled d-inline-flex d-md-none align-items-center mx-3 mb-0"
                                >
                                  <li class="mr-4 grid-col">
                                    <img
                                      class="icons"
                                      fluid
                                      :src="
                                        require('@/assets/images/timer_d.png')
                                      "
                                    /><span>8 jours</span>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t2.png')"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t3.png')"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t4.png')"
                                      />
                                    </a>
                                  </li>
                                  <li><small>+1.5k</small></li>
                                </ul>
                                <a
                                  href="#"
                                  class="btn bg-dark text-white small font-weight-bold rounded-pill d-inline-flex align-items-center d-lg-none border-radius-style euro"
                                  >1 990&euro;</a
                                >
                              </div>
                            </div>
                            <a
                              href="#"
                              class="btn text-uppercase text-dark font-weight-bold new-link border-0"
                              >nouveau</a
                            >
                          </div>
                        </div>
                        <div class="">
                          <div
                            class="shadow-effect overflow-hidden position-relative"
                          >
                            <a href="/product"
                              ><img
                                class="img-responsive img-fill"
                                fluid
                                :src="require('@/assets/images/s2.png')"
                                alt=""
                            /></a>
                            <div class="item-details">
                              <div class="content">
                                <div class="text-uppercase">
                                  <div class="d-flex align-items-center">
                                    <img
                                      class="slider-icon d-none d-lg-inline-block"
                                      fluid
                                      :src="require('@/assets/images/pink.png')"
                                    />
                                    <img
                                      class="slider-icon d-none d-md-inline-block d-lg-none"
                                      fluid
                                      :src="
                                        require('@/assets/images/pink2.png')
                                      "
                                    />
                                    <img
                                      class="slider-icon d-inline-block d-md-none"
                                      fluid
                                      :src="
                                        require('@/assets/images/surf-1.png')
                                      "
                                    />
                                    <div>
                                      <h2 class="heading mb-0">
                                        <strong
                                          class="text-dark d-block d-md-inline-block mb-2 mb-md-0"
                                          >yogi & surf</strong
                                        ><span
                                          ><i
                                            class="fas fa-caret-right mx-md-2 mr-2"
                                          ></i
                                          >las palmas</span
                                        >
                                      </h2>
                                      <h5
                                        class="sub-heading mb-0 d-none d-md-inline-block"
                                      >
                                        <strong>inclus :</strong> yoga - rando -
                                        vtt neige
                                      </h5>
                                    </div>
                                  </div>
                                  <h5
                                    class="sub-heading mb-0 p-3 d-block d-md-none"
                                  >
                                    <strong>inclus :</strong> yoga - rando - vtt
                                    neige
                                  </h5>
                                </div>
                                <div
                                  class="text-right d-none d-lg-inline-block align-self-center euro-border"
                                >
                                  <h6 class="euro-per mb-0">a partir de :</h6>
                                  <h1 class="euro mb-0 euro">1 390&euro;</h1>
                                </div>
                                <ul
                                  class="img-list list-unstyled d-none d-md-inline-flex d-lg-none align-items-center justify-content-center mx-4 mb-0"
                                >
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t1.png')"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t2.png')"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t3.png')"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t4.png')"
                                      />
                                    </a>
                                  </li>
                                  <li><small>+1.5k</small></li>
                                </ul>
                              </div>
                              <div class="hoverable-div">
                                <ul
                                  class="list-unstyled text-uppercase list-info mb-0 d-flex justify-content-around align-items-center border-0"
                                >
                                  <li>
                                    <img
                                      class="icons"
                                      fluid
                                      :src="
                                        require('@/assets/images/globe_d.png')
                                      "
                                    />france
                                  </li>
                                  <li>
                                    <img
                                      class="icons"
                                      fluid
                                      :src="
                                        require('@/assets/images/timer_d.png')
                                      "
                                    />8 jours
                                  </li>
                                  <li>
                                    <img
                                      class="icons"
                                      fluid
                                      :src="
                                        require('@/assets/images/circle_d.png')
                                      "
                                    />TOUS NIVEAUX
                                  </li>
                                  <li>
                                    <img
                                      class="icons"
                                      fluid
                                      :src="
                                        require('@/assets/images/places_d.png')
                                      "
                                    />10 places
                                  </li>
                                </ul>
                                <ul
                                  class="img-list list-unstyled d-inline-flex align-items-center ml-auto mb-0"
                                >
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t1.png')"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t2.png')"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t3.png')"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t4.png')"
                                      />
                                    </a>
                                  </li>
                                  <li><small>+1.5k</small></li>
                                </ul>
                              </div>
                              <div
                                class="d-flex d-lg-none justify-content-between mt-1 mt-md-3"
                              >
                                <ul
                                  class="list-unstyled py-3 text-uppercase list-info mb-0 d-none d-md-inline-flex d-lg-none ml-md-3"
                                >
                                  <li>
                                    <img
                                      class="icons mr-2"
                                      fluid
                                      :src="
                                        require('@/assets/images/globe_d.png')
                                      "
                                    />espagne
                                  </li>
                                  <li>
                                    <img
                                      class="icons mr-2"
                                      fluid
                                      :src="
                                        require('@/assets/images/timer_d.png')
                                      "
                                    />8 jours
                                  </li>
                                  <li>
                                    <img
                                      class="icons mr-2"
                                      fluid
                                      :src="
                                        require('@/assets/images/circle_d.png')
                                      "
                                    />tous niveaux
                                  </li>
                                  <li>
                                    <img
                                      class="icons mr-2"
                                      fluid
                                      :src="
                                        require('@/assets/images/places_d.png')
                                      "
                                    />10 places
                                  </li>
                                </ul>

                                <ul
                                  class="img-list list-unstyled d-inline-flex d-md-none align-items-center mx-3 mb-0"
                                >
                                  <li class="mr-4 grid-col">
                                    <img
                                      class="icons"
                                      fluid
                                      :src="
                                        require('@/assets/images/timer_d.png')
                                      "
                                    /><span>8 jours</span>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t2.png')"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t3.png')"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t4.png')"
                                      />
                                    </a>
                                  </li>
                                  <li><small>+1.5k</small></li>
                                </ul>
                                <a
                                  href="#"
                                  class="btn bg-dark text-white small font-weight-bold rounded-pill d-inline-flex align-items-center d-lg-none border-radius-style euro"
                                  >1 990&euro;</a
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="">
                          <div
                            class="shadow-effect overflow-hidden position-relative"
                          >
                            <a href="/product"
                              ><img
                                class="img-responsive img-fill"
                                fluid
                                :src="require('@/assets/images/s3.png')"
                                alt=""
                            /></a>
                            <div class="item-details">
                              <div class="content">
                                <div class="text-uppercase">
                                  <div class="d-flex align-items-center">
                                    <img
                                      class="slider-icon d-none d-lg-inline-block"
                                      fluid
                                      :src="require('@/assets/images/pink.png')"
                                    />
                                    <img
                                      class="slider-icon d-none d-md-inline-block d-lg-none"
                                      fluid
                                      :src="
                                        require('@/assets/images/pink2.png')
                                      "
                                    />
                                    <img
                                      class="slider-icon d-inline-block d-md-none"
                                      fluid
                                      :src="
                                        require('@/assets/images/surf-1.png')
                                      "
                                    />
                                    <div>
                                      <h2 class="heading mb-0">
                                        <strong
                                          class="text-dark d-block d-md-inline-block mb-2 mb-md-0"
                                          >kitesurf</strong
                                        ><span
                                          ><i
                                            class="fas fa-caret-right mx-md-2 mr-2"
                                          ></i
                                          >el gouna</span
                                        >
                                      </h2>
                                      <h5
                                        class="sub-heading mb-0 d-none d-md-inline-block"
                                      >
                                        <strong>inclus :</strong> yoga - rando -
                                        vtt neige
                                      </h5>
                                    </div>
                                  </div>
                                  <h5
                                    class="sub-heading mb-0 p-3 d-block d-md-none"
                                  >
                                    <strong>inclus :</strong> yoga - rando - vtt
                                    neige
                                  </h5>
                                </div>
                                <div
                                  class="text-right d-none d-lg-inline-block align-self-center euro-border"
                                >
                                  <h6 class="euro-per mb-0">a partir de :</h6>
                                  <h1 class="euro mb-0 euro">1 390&euro;</h1>
                                </div>
                                <ul
                                  class="img-list list-unstyled d-none d-md-inline-flex d-lg-none align-items-center justify-content-center mx-4 mb-0"
                                >
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t1.png')"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t2.png')"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t3.png')"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t4.png')"
                                      />
                                    </a>
                                  </li>
                                  <li><small>+1.5k</small></li>
                                </ul>
                              </div>
                              <div class="hoverable-div">
                                <ul
                                  class="list-unstyled text-uppercase list-info mb-0 d-flex justify-content-around align-items-center border-0"
                                >
                                  <li>
                                    <img
                                      class="icons"
                                      fluid
                                      :src="
                                        require('@/assets/images/globe_d.png')
                                      "
                                    />france
                                  </li>
                                  <li>
                                    <img
                                      class="icons"
                                      fluid
                                      :src="
                                        require('@/assets/images/timer_d.png')
                                      "
                                    />8 jours
                                  </li>
                                  <li>
                                    <img
                                      class="icons"
                                      fluid
                                      :src="
                                        require('@/assets/images/circle_d.png')
                                      "
                                    />TOUS NIVEAUX
                                  </li>
                                  <li>
                                    <img
                                      class="icons"
                                      fluid
                                      :src="
                                        require('@/assets/images/places_d.png')
                                      "
                                    />10 places
                                  </li>
                                </ul>
                                <ul
                                  class="img-list list-unstyled d-inline-flex align-items-center ml-auto mb-0"
                                >
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t1.png')"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t2.png')"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t3.png')"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t4.png')"
                                      />
                                    </a>
                                  </li>
                                  <li><small>+1.5k</small></li>
                                </ul>
                              </div>
                              <div
                                class="d-flex d-lg-none justify-content-between mt-1 mt-md-3"
                              >
                                <ul
                                  class="list-unstyled py-3 text-uppercase list-info mb-0 d-none d-md-inline-flex d-lg-none ml-md-3"
                                >
                                  <li>
                                    <img
                                      class="icons mr-2"
                                      fluid
                                      :src="
                                        require('@/assets/images/globe_d.png')
                                      "
                                    />espagne
                                  </li>
                                  <li>
                                    <img
                                      class="icons mr-2"
                                      fluid
                                      :src="
                                        require('@/assets/images/timer_d.png')
                                      "
                                    />8 jours
                                  </li>
                                  <li>
                                    <img
                                      class="icons mr-2"
                                      fluid
                                      :src="
                                        require('@/assets/images/circle_d.png')
                                      "
                                    />tous niveaux
                                  </li>
                                  <li>
                                    <img
                                      class="icons mr-2"
                                      fluid
                                      :src="
                                        require('@/assets/images/places_d.png')
                                      "
                                    />10 places
                                  </li>
                                </ul>

                                <ul
                                  class="img-list list-unstyled d-inline-flex d-md-none align-items-center mx-3 mb-0"
                                >
                                  <li class="mr-4 grid-col">
                                    <img
                                      class="icons"
                                      fluid
                                      :src="
                                        require('@/assets/images/timer_d.png')
                                      "
                                    /><span>8 jours</span>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t2.png')"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t3.png')"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t4.png')"
                                      />
                                    </a>
                                  </li>
                                  <li><small>+1.5k</small></li>
                                </ul>
                                <a
                                  href="#"
                                  class="btn bg-dark text-white small font-weight-bold rounded-pill d-inline-flex align-items-center d-lg-none border-radius-style euro"
                                  >1 990&euro;</a
                                >
                              </div>
                            </div>
                            <a
                              href="#"
                              class="btn bg-dark text-white border-0 trip-link rounded-0"
                              ><i class="fas fa-plane-departure mr-2"></i>24 au
                              2 mai</a
                            >
                          </div>
                        </div>
                        <div class="">
                          <div
                            class="shadow-effect overflow-hidden position-relative"
                          >
                            <a href="/product"
                              ><img
                                class="img-responsive img-fill"
                                fluid
                                :src="require('@/assets/images/s1.png')"
                                alt=""
                            /></a>
                            <div class="item-details">
                              <div class="content">
                                <div class="text-uppercase">
                                  <div class="d-flex align-items-center">
                                    <img
                                      class="slider-icon d-none d-lg-inline-block"
                                      fluid
                                      :src="require('@/assets/images/pink.png')"
                                    />
                                    <img
                                      class="slider-icon d-none d-md-inline-block d-lg-none"
                                      fluid
                                      :src="
                                        require('@/assets/images/pink2.png')
                                      "
                                    />
                                    <img
                                      class="slider-icon d-inline-block d-md-none"
                                      fluid
                                      :src="
                                        require('@/assets/images/surf-1.png')
                                      "
                                    />
                                    <div>
                                      <h2 class="heading mb-0">
                                        <strong
                                          class="text-dark d-block d-md-inline-block mb-2 mb-md-0"
                                          >ski freeride</strong
                                        ><span
                                          ><i
                                            class="fas fa-caret-right mx-md-2 mr-2"
                                          ></i
                                          >serre-chevalier</span
                                        >
                                      </h2>
                                      <h5
                                        class="sub-heading mb-0 d-none d-md-inline-block"
                                      >
                                        <strong>inclus :</strong> yoga - rando -
                                        vtt neige
                                      </h5>
                                    </div>
                                  </div>
                                  <h5
                                    class="sub-heading mb-0 p-3 d-block d-md-none"
                                  >
                                    <strong>inclus :</strong> yoga - rando - vtt
                                    neige
                                  </h5>
                                </div>
                                <div
                                  class="text-right d-none d-lg-inline-block align-self-center euro-border"
                                >
                                  <h6 class="euro-per mb-0">par pers.</h6>
                                  <h1 class="euro mb-0 euro">1 390&euro;</h1>
                                </div>
                                <ul
                                  class="img-list list-unstyled d-none d-md-inline-flex d-lg-none align-items-center justify-content-center mx-4 mb-0"
                                >
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t1.png')"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t2.png')"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t3.png')"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t4.png')"
                                      />
                                    </a>
                                  </li>
                                  <li><small>+1.5k</small></li>
                                </ul>
                              </div>
                              <div class="hoverable-div">
                                <ul
                                  class="list-unstyled text-uppercase list-info mb-0 d-flex justify-content-around align-items-center border-0"
                                >
                                  <li>
                                    <img
                                      class="icons"
                                      fluid
                                      :src="
                                        require('@/assets/images/globe_d.png')
                                      "
                                    />france
                                  </li>
                                  <li>
                                    <img
                                      class="icons"
                                      fluid
                                      :src="
                                        require('@/assets/images/timer_d.png')
                                      "
                                    />8 jours
                                  </li>
                                  <li>
                                    <img
                                      class="icons"
                                      fluid
                                      :src="
                                        require('@/assets/images/circle_d.png')
                                      "
                                    />TOUS NIVEAUX
                                  </li>
                                  <li>
                                    <img
                                      class="icons"
                                      fluid
                                      :src="
                                        require('@/assets/images/places_d.png')
                                      "
                                    />10 places
                                  </li>
                                </ul>
                                <ul
                                  class="img-list list-unstyled d-inline-flex align-items-center ml-auto mb-0"
                                >
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t1.png')"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t2.png')"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t3.png')"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t4.png')"
                                      />
                                    </a>
                                  </li>
                                  <li><small>+1.5k</small></li>
                                </ul>
                              </div>
                              <div
                                class="d-flex d-lg-none justify-content-between mt-1 mt-md-3"
                              >
                                <ul
                                  class="list-unstyled py-3 text-uppercase list-info mb-0 d-none d-md-inline-flex d-lg-none ml-md-3"
                                >
                                  <li>
                                    <img
                                      class="icons mr-2"
                                      fluid
                                      :src="
                                        require('@/assets/images/globe_d.png')
                                      "
                                    />espagne
                                  </li>
                                  <li>
                                    <img
                                      class="icons mr-2"
                                      fluid
                                      :src="
                                        require('@/assets/images/timer_d.png')
                                      "
                                    />8 jours
                                  </li>
                                  <li>
                                    <img
                                      class="icons mr-2"
                                      fluid
                                      :src="
                                        require('@/assets/images/circle_d.png')
                                      "
                                    />tous niveaux
                                  </li>
                                  <li>
                                    <img
                                      class="icons mr-2"
                                      fluid
                                      :src="
                                        require('@/assets/images/places_d.png')
                                      "
                                    />10 places
                                  </li>
                                </ul>

                                <ul
                                  class="img-list list-unstyled d-inline-flex d-md-none align-items-center mx-3 mb-0"
                                >
                                  <li class="mr-4 grid-col">
                                    <img
                                      class="icons"
                                      fluid
                                      :src="
                                        require('@/assets/images/timer_d.png')
                                      "
                                    /><span>8 jours</span>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t2.png')"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t3.png')"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      ><img
                                        class="img-fluid user_icon rounded-circle"
                                        fluid
                                        :src="require('@/assets/images/t4.png')"
                                      />
                                    </a>
                                  </li>
                                  <li><small>+1.5k</small></li>
                                </ul>
                                <a
                                  href="#"
                                  class="btn bg-dark text-white small font-weight-bold rounded-pill d-inline-flex align-items-center d-lg-none border-radius-style euro"
                                  >1 990&euro;</a
                                >
                              </div>
                            </div>
                            <a
                              href="#"
                              class="btn text-uppercase text-dark font-weight-bold new-link border-0"
                              >nouveau</a
                            >
                          </div>
                        </div>
                        <div class="d-none"></div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div
                class="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                123456
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div
              class="col-9 ml-auto align-self-center order-lg-1 d-none d-md-block d-lg-none"
            >
              <a
                href="#"
                class="text-uppercase font-weight-bold text-dark activites-link d-block text-right"
                ><span class="bg-white position-relative pl-4"
                  >toutes les activites
                  <img
                    class="ml-1 align-baseline"
                    fluid
                    :src="require('@/assets/images/ARROW_EXIT.png')" /></span
              ></a>
            </div>
          </div>
        </div>
      </section>
      <section class="map-section bg-dark text-white pb-5 p-lg-5">
        <div class="container-fluid">
          <div class="row">
            <div
              class="col-12 col-lg-4 mx-auto pb-lg-5 mt-5 mb-5 mb-lg-0 text-center text-lg-left border-lg-bottom px-0"
            >
              <h6 class="text-warning sub-heading mb-1">Nos activites selon</h6>
              <h2 class="text-uppercase font-weight-normal heading">
                les <strong>destinations</strong>
              </h2>
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-10 mx-md-auto offset-lg-7 col-lg-5 mr-lg-0 selective-div"
            >
              <div
                class="d-flex py-3 py-md-4 py-lg-3 absolute-border position-relative"
              >
                <ul class="list-unstyled flex-div mb-0">
                  <li>
                    <h6 class="text-uppercase country-head d-flex mb-0">
                      pays :
                      <div
                        class="btn-group select-dropdown px-3 align-items-center"
                      >
                        <a
                          class="select-toggle tous text-white text-decoration-none"
                          data-toggle="dropdown"
                          href="#"
                          aria-expanded="false"
                          >tous
                          <i class="fa fa-chevron-down ml-2 chevron"></i></a
                        ><i
                          role="button"
                          class="fa fa-times text-warning ml-2 cancel"
                        ></i>
                        <ul class="dropdown-menu menu-items">
                          <li>
                            <a
                              class="text-capitalize text-reset dropdown-item"
                              href="javascript:void(0);"
                              ><i class="fa fa-chevron-right small ml-2"></i>
                              France</a
                            >
                          </li>
                          <li>
                            <a
                              class="text-capitalize text-reset dropdown-item"
                              href="javascript:void(0);"
                              ><i class="fa fa-chevron-right small ml-2"></i>
                              Espagne</a
                            >
                          </li>
                          <li>
                            <a
                              class="text-capitalize text-reset dropdown-item"
                              href="javascript:void(0);"
                              ><i class="fa fa-chevron-right small ml-2"></i>
                              Grèce</a
                            >
                          </li>
                          <li>
                            <a
                              class="text-capitalize text-reset dropdown-item"
                              href="javascript:void(0);"
                              ><i class="fa fa-chevron-right small ml-2"></i>
                              Marac</a
                            >
                          </li>
                          <li>
                            <a
                              class="text-capitalize text-reset dropdown-item"
                              href="javascript:void(0);"
                              ><i class="fa fa-chevron-right small ml-2"></i>
                              Portugal</a
                            >
                          </li>
                          <li>
                            <a
                              class="text-capitalize text-reset dropdown-item"
                              href="javascript:void(0);"
                              ><i class="fa fa-chevron-right small ml-2"></i>
                              Sri Lanka</a
                            >
                          </li>
                        </ul>
                      </div>
                    </h6>
                  </li>
                  <li class="divider mr-3 d-none d-lg-inline-block"></li>
                  <li class="d-none d-lg-inline-block">
                    <h6
                      class="text-uppercase city-head d-flex mb-0 zero-opacity"
                    >
                      ville :
                      <div
                        class="btn-group select-dropdown px-3 align-items-center"
                      >
                        <a
                          href="javaScript:void(0);"
                          id="dropdownMenuLink"
                          class="select-toggle toutes text-white text-decoration-none"
                          data-toggle="dropdown"
                          aria-expanded="false"
                          >toutes
                          <i class="fa fa-chevron-down ml-2 chevron"></i></a
                        ><i
                          role="button"
                          class="fa fa-times text-warning ml-2 cancel"
                        ></i>
                        <ul
                          class="dropdown-menu menu-items"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <li>
                            <a
                              class="text-capitalize text-reset dropdown-item"
                              href="javascript:void(0);"
                              ><i class="fa fa-chevron-right small ml-2"></i>
                              serre-chevaliver</a
                            >
                          </li>
                          <li>
                            <a
                              class="text-capitalize text-reset dropdown-item"
                              href="javascript:void(0);"
                              ><i class="fa fa-chevron-right small ml-2"></i>
                              asdfgh</a
                            >
                          </li>
                          <li>
                            <a
                              class="text-capitalize text-reset dropdown-item"
                              href="javascript:void(0);"
                              ><i class="fa fa-chevron-right small ml-2"></i>
                              serre</a
                            >
                          </li>
                          <li>
                            <a
                              class="text-capitalize text-reset dropdown-item"
                              href="javascript:void(0);"
                              ><i class="fa fa-chevron-right small ml-2"></i>
                              lkjhgf</a
                            >
                          </li>
                          <li>
                            <a
                              class="text-capitalize text-reset dropdown-item"
                              href="javascript:void(0);"
                              ><i class="fa fa-chevron-right small ml-2"></i>
                              qwerty</a
                            >
                          </li>
                          <li>
                            <a
                              class="text-capitalize text-reset dropdown-item"
                              href="javascript:void(0);"
                              ><i class="fa fa-chevron-right small ml-2"></i>
                              poiuyt</a
                            >
                          </li>
                        </ul>
                      </div>
                    </h6>
                  </li>
                  <li class="divider mr-3 d-none d-lg-inline-block"></li>
                  <li class="ml-auto ml-lg-0">
                    <p class="mb-0 activity-count zero-opacity">11 activites</p>
                  </li>
                </ul>
                <a href="#" class="text-uppercase text-white view-link ml-auto"
                  >tout voir
                  <img
                    class="ml-3"
                    fluid
                    :src="require('@/assets/images/arr-r.png')"
                /></a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-7 d-none d-lg-block map-img-div">
              <img
                class="img-fluid img-fill"
                fluid
                :src="require('@/assets/images/MAPS.png')"
              />
              <img
                class="img-fluid centered-img"
                fluid
                :src="require('@/assets/images/fr2.png')"
              />
            </div>
            <div class="col-12 col-md-10 mx-md-auto col-lg-5 map-content-div">
              <div class="map-content border-top">
                <div
                  class="zone-div col-12 col-lg-4 mx-auto h-100 flex-column justify-content-center align-items-center text-center"
                >
                  <p>
                    Sélectionnez une zone de la map ou dans la liste un pays
                    pour afficher le détails
                  </p>
                  <img
                    class="d-block mx-auto"
                    fluid
                    :src="require('@/assets/images/map-icon.png')"
                  />
                </div>
                <ul class="list-unstyled mb-0 grid-list pt-5">
                  <li>
                    <a href="#" class="text-reset">
                      <div class="content-grid">
                        <img fluid :src="require('@/assets/images/c2.png')" />
                        <div class="contents">
                          <h6 class="mb-0">Multi-activites</h6>
                          <p class="mb-0 text-warning">VTT Descente</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-reset">
                      <div class="content-grid">
                        <img fluid :src="require('@/assets/images/m2.png')" />
                        <div class="contents">
                          <h6 class="mb-0">Multi-activites</h6>
                          <p class="mb-0 text-warning">Via Ferrata</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-reset">
                      <div class="content-grid">
                        <img fluid :src="require('@/assets/images/c2.png')" />
                        <div class="contents">
                          <h6 class="mb-0">stage</h6>
                          <p class="mb-0 text-warning">Windsurf</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-reset">
                      <div class="content-grid">
                        <img fluid :src="require('@/assets/images/m2.png')" />
                        <div class="contents">
                          <h6 class="mb-0">stage</h6>
                          <p class="mb-0 text-warning">Kitesurf</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-reset">
                      <div class="content-grid">
                        <img fluid :src="require('@/assets/images/c2.png')" />
                        <div class="contents">
                          <h6 class="mb-0">Multi-activites</h6>
                          <p class="mb-0 text-warning">VTT Descente</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-reset">
                      <div class="content-grid">
                        <img fluid :src="require('@/assets/images/m2.png')" />
                        <div class="contents">
                          <h6 class="mb-0">Multi-activites</h6>
                          <p class="mb-0 text-warning">Via Ferrata</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-reset">
                      <div class="content-grid">
                        <img fluid :src="require('@/assets/images/c2.png')" />
                        <div class="contents">
                          <h6 class="mb-0">stage</h6>
                          <p class="mb-0 text-warning">Windsurf</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-reset">
                      <div class="content-grid">
                        <img fluid :src="require('@/assets/images/m2.png')" />
                        <div class="contents">
                          <h6 class="mb-0">stage</h6>
                          <p class="mb-0 text-warning">Kitesurf</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-reset">
                      <div class="content-grid">
                        <img fluid :src="require('@/assets/images/c2.png')" />
                        <div class="contents">
                          <h6 class="mb-0">Multi-activites</h6>
                          <p class="mb-0 text-warning">VTT Descente</p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <!-- <div class="col-12">
            <div class="d-block d-lg-none py-4 py-sm-5 overflow-hidden">
              <img class="img-responsive img-fill tablet-map-img" fluid :src="require('@/assets/images/tablet-map.png')" alt="" />
            </div>
          </div> -->
          </div>
        </div>
        <div class="d-block d-lg-none">
          <div id="mapCarousel" class="owl-carousel py-5">
            <div class="item">
              <img
                class="img-responsive img-fill"
                fluid
                :src="require('@/assets/images/MAP_ESPAGNE.png')"
                alt=""
              />
            </div>
            <div class="item">
              <img
                class="img-responsive img-fill"
                fluid
                :src="require('@/assets/images/MAP_FRANCE.png')"
                alt=""
              />
            </div>
            <div class="item">
              <img
                class="img-responsive img-fill"
                fluid
                :src="require('@/assets/images/MAP_MAROC.png')"
                alt=""
              />
            </div>
            <div class="item">
              <img
                class="img-responsive img-fill"
                fluid
                :src="require('@/assets/images/MAP_ESPAGNE.png')"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section class="middle-section">
        <div class="container">
          <div class="row">
            <div
              class="col-12 col-md-10 col-lg-12 col-xl-11 mx-auto desk-width"
            >
              <div class="rounded-lg shadow overflow-hidden d-lg-flex">
                <div class="col-12 col-lg-6 col-xl-7 p-0 desk-width-left">
                  <div class="position-relative w-100 h-100">
                    <img
                      class="img-fluid img-fill asset-img"
                      fluid
                      :src="require('@/assets/images/asset-1.png')"
                    />
                    <img
                      class="img-fluid position-pink d-none d-md-block"
                      fluid
                      :src="require('@/assets/images/pink.png')"
                    />
                    <img
                      class="img-fluid position-pink d-block d-md-none"
                      fluid
                      :src="require('@/assets/images/surf-2.png')"
                    />
                  </div>
                </div>
                <div
                  class="col-12 col-lg-6 col-xl-5 text-white p-0 desk-width-right"
                >
                  <div class="pad bg-dark">
                    <h5 class="small-head mb-5">Votre coup de coeur</h5>
                    <h1
                      class="text-uppercase heading font-weight-bold mb-4 d-flex align-items-center"
                    >
                      yoggi & surf
                      <span class="font-weight-normal"
                        ><i class="fas fa-caret-right mx-3"></i>îles
                        canaries</span
                      >
                    </h1>
                    <p class="para">
                      Votre emprunte est unique, nos sejours sportifs aussi !
                      Découvrez notre concept d'evasion melant sport, culture et
                      bien-etre. Heaven Trip vous propose des stages sportifs
                      pour tous et a travers le monde. Découvrez notre concept
                      d'evasion melant sport, culture et bien-etre. Si tu veux
                      sauver un arbre mange un castor.
                    </p>
                    <div
                      class="d-flex justify-content-center py-3 tooltip-div my-4"
                    >
                      <a
                        href=""
                        class="mr-3"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Pilates"
                        ><img
                          class=""
                          fluid
                          :src="require('@/assets/images/surf.png')"
                      /></a>
                      <a
                        href=""
                        class="mr-3"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Pilates"
                        ><img
                          class=""
                          fluid
                          :src="require('@/assets/images/yoga.png')"
                      /></a>
                      <a
                        href=""
                        class="mr-3"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Pilates"
                        ><img
                          class=""
                          fluid
                          :src="require('@/assets/images/mat.png')"
                      /></a>
                      <span class="ml-auto euro"
                        ><strong>750&euro;</strong>/pers.
                      </span>
                    </div>
                    <div class="d-flex align-items-center social-info">
                      <ul class="list-unstyled mb-0 profile-list mx-3">
                        <li class="d-none d-md-inline-block d-lg-none">
                          <a href="#"
                            ><img
                              class="user_icon"
                              fluid
                              :src="require('@/assets/images/v1.png')"
                          /></a>
                        </li>
                        <li>
                          <a href="#"
                            ><img
                              class="user_icon"
                              fluid
                              :src="require('@/assets/images/v2.png')"
                          /></a>
                        </li>
                        <li>
                          <a href="#"
                            ><img
                              class="user_icon"
                              fluid
                              :src="require('@/assets/images/v1.png')"
                          /></a>
                        </li>
                        <li>
                          <a href="#"
                            ><img
                              class="user_icon"
                              fluid
                              :src="require('@/assets/images/v2.png')"
                          /></a>
                        </li>
                        <li>
                          <a href="#"
                            ><img
                              class="user_icon"
                              fluid
                              :src="require('@/assets/images/v3.png')"
                          /></a>
                        </li>
                        <li>+0.5k</li>
                      </ul>
                      <ul
                        class="list-unstyled mb-0 mx-auto ml-sm-auto mr-sm-0 content-list d-flex text-uppercase"
                      >
                        <li>
                          <span class="gold"
                            >54 avis : 9,6
                            <img
                              class="mt-n1"
                              fluid
                              :src="require('@/assets/images/star.png')"
                          /></span>
                        </li>
                        <li class="d-none d-md-inline-block pr-0">
                          <a
                            href="#"
                            class="text-reset d-flex align-items-center"
                            >tous les avis
                            <img
                              class="ml-1"
                              fluid
                              :src="require('@/assets/images/arr-r.png')"
                          /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="pad bg-danger text-uppercase">
                    <ul
                      class="list-unstyled mb-0 ml-auto contents-list d-flex justify-content-between align-items-center"
                    >
                      <li>
                        <img
                          class="mr-2 icons"
                          fluid
                          :src="require('@/assets/images/globe.png')"
                        />espagne
                      </li>
                      <li>
                        <img
                          class="mr-2 icons"
                          fluid
                          :src="require('@/assets/images/timer.png')"
                        />8 jours
                      </li>
                      <li>
                        <img
                          class="mr-2 icons"
                          fluid
                          :src="require('@/assets/images/circle.png')"
                        />tous niveaux
                      </li>
                      <li class="d-none d-md-inline-block">
                        <img
                          class="mr-2 icons"
                          fluid
                          :src="require('@/assets/images/places.png')"
                        />10 places
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="bottom-section">
        <div class="container">
          <div class="row mt-lg-4 mb-5 mb-lg-0">
            <div
              class="col-12 col-md-10 mx-md-auto col-lg-3 mx-lg-0 ml-lg-auto text-center text-lg-right mb-4 mb-lg-0"
            >
              <p class="mb-0 mt-lg-4 sub-head">Pour vous</p>
              <h2 class="text-uppercase heading">
                ils <strong>temoignent</strong>
              </h2>
              <a
                class="carousel-control-prev"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true"
                  ><i class="fas fa-chevron-left text-dark align-baseline"></i
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true"
                  ><i class="fas fa-chevron-right text-dark align-baseline"></i
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
            <div class="col-12 col-md-10 mx-md-auto col-lg-8 mr-lg-0">
              <div
                id="carouselExampleCaptions"
                class="carousel slide pb-4 pb-lg-5"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="row">
                      <div
                        class="col-12 col-lg-10 d-flex flex-column flex-lg-row"
                      >
                        <img
                          fluid
                          :src="require('@/assets/images/avatar.png')"
                          class="d-block user_img rounded-circle mt-0"
                          alt="..."
                        />
                        <div class="mt-4 ml-lg-5">
                          <h5 class="user-info d-flex align-items-center">
                            <i
                              class="fas fa-quote-left mr-4 quote d-none d-lg-inline-block"
                            ></i
                            ><i class="fas fa-map-marker-alt mr-2"></i>Nice
                            <span class="font-weight-light mx-3 small">
                              |
                            </span>
                            2 sejours
                            <a
                              href="#"
                              class="text-reset text-uppercase user-profile-link ml-auto mt-1"
                              >voir profil
                              <img
                                class="ml-1 align-baseline"
                                fluid
                                :src="
                                  require('@/assets/images/ARROW_EXIT.png')
                                "
                            /></a>
                          </h5>
                          <p class="user_comment">
                            <i
                              class="fas fa-quote-left mr-3 quote d-inline-block d-lg-none"
                            ></i>
                            C'est en vivant des emotions puissantes ensemble,
                            que chacun de nous se sent vraiment vivant. Toussa
                            toussa toussa c'est trop coooool! Et hop encore une
                            ligne pour la manmotte ! Toussa toussa toussa Toussa
                            toussa toussa c'est Charlie qui dit ! Enfin j'ai
                            peut-etre pas totalement termine...
                          </p>
                          <h6 class="user_name font-weight-bold">
                            Remi Flemming
                            <i
                              class="fas fa-quote-right quote ml-4 align-middle"
                            ></i>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="row">
                      <div
                        class="col-12 col-lg-10 d-flex flex-column flex-lg-row"
                      >
                        <img
                          fluid
                          :src="require('@/assets/images/avatar.png')"
                          class="d-block user_img rounded-circle mt-0"
                          alt="..."
                        />
                        <div class="mt-4 ml-lg-5">
                          <h5 class="user-info d-flex align-items-center">
                            <i
                              class="fas fa-quote-left mr-4 quote d-none d-lg-inline-block"
                            ></i
                            ><i class="fas fa-map-marker-alt mr-2"></i>Nice
                            <span class="font-weight-light mx-3 small">
                              |
                            </span>
                            2 sejours
                            <a
                              href="#"
                              class="text-reset text-uppercase user-profile-link ml-auto mt-1"
                              >voir profil
                              <img
                                class="ml-1 align-baseline"
                                fluid
                                :src="
                                  require('@/assets/images/ARROW_EXIT.png')
                                "
                            /></a>
                          </h5>
                          <p class="user_comment">
                            <i
                              class="fas fa-quote-left mr-3 quote d-inline-block d-lg-none"
                            ></i>
                            C'est en vivant des emotions puissantes ensemble,
                            que chacun de nous se sent vraiment vivant. Toussa
                            toussa toussa c'est trop coooool! Et hop encore une
                            ligne pour la manmotte ! Toussa toussa toussa Toussa
                            toussa toussa c'est Charlie qui dit ! Enfin j'ai
                            peut-etre pas totalement termine...
                          </p>
                          <h6 class="user_name font-weight-bold">
                            Remi Flemming
                            <i
                              class="fas fa-quote-right quote ml-4 align-middle"
                            ></i>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="row">
                      <div
                        class="col-12 col-lg-10 d-flex flex-column flex-lg-row"
                      >
                        <img
                          fluid
                          :src="require('@/assets/images/avatar.png')"
                          class="d-block user_img rounded-circle mt-0"
                          alt="..."
                        />
                        <div class="mt-4 ml-lg-5">
                          <h5 class="user-info d-flex align-items-center">
                            <i
                              class="fas fa-quote-left mr-4 quote d-none d-lg-inline-block"
                            ></i
                            ><i class="fas fa-map-marker-alt mr-2"></i>Nice
                            <span class="font-weight-light mx-3 small">
                              |
                            </span>
                            2 sejours
                            <a
                              href="#"
                              class="text-reset text-uppercase user-profile-link ml-auto mt-1"
                              >voir profil
                              <img
                                class="ml-1 align-baseline"
                                fluid
                                :src="
                                  require('@/assets/images/ARROW_EXIT.png')
                                "
                            /></a>
                          </h5>
                          <p class="user_comment">
                            <i
                              class="fas fa-quote-left mr-3 quote d-inline-block d-lg-none"
                            ></i>
                            C'est en vivant des emotions puissantes ensemble,
                            que chacun de nous se sent vraiment vivant. Toussa
                            toussa toussa c'est trop coooool! Et hop encore une
                            ligne pour la manmotte ! Toussa toussa toussa Toussa
                            toussa toussa c'est Charlie qui dit ! Enfin j'ai
                            peut-etre pas totalement termine...
                          </p>
                          <h6 class="user_name font-weight-bold">
                            Remi Flemming
                            <i
                              class="fas fa-quote-right quote ml-4 align-middle"
                            ></i>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="row">
                      <div
                        class="col-12 col-lg-10 d-flex flex-column flex-lg-row"
                      >
                        <img
                          fluid
                          :src="require('@/assets/images/avatar.png')"
                          class="d-block user_img rounded-circle mt-0"
                          alt="..."
                        />
                        <div class="mt-4 ml-lg-5">
                          <h5 class="user-info d-flex align-items-center">
                            <i
                              class="fas fa-quote-left mr-4 quote d-none d-lg-inline-block"
                            ></i
                            ><i class="fas fa-map-marker-alt mr-2"></i>Nice
                            <span class="font-weight-light mx-3 small">
                              |
                            </span>
                            2 sejours
                            <a
                              href="#"
                              class="text-reset text-uppercase user-profile-link ml-auto mt-1"
                              >voir profil
                              <img
                                class="ml-1 align-baseline"
                                fluid
                                :src="
                                  require('@/assets/images/ARROW_EXIT.png')
                                "
                            /></a>
                          </h5>
                          <p class="user_comment">
                            <i
                              class="fas fa-quote-left mr-3 quote d-inline-block d-lg-none"
                            ></i>
                            C'est en vivant des emotions puissantes ensemble,
                            que chacun de nous se sent vraiment vivant. Toussa
                            toussa toussa c'est trop coooool! Et hop encore une
                            ligne pour la manmotte ! Toussa toussa toussa Toussa
                            toussa toussa c'est Charlie qui dit ! Enfin j'ai
                            peut-etre pas totalement termine...
                          </p>
                          <h6 class="user_name font-weight-bold">
                            Remi Flemming
                            <i
                              class="fas fa-quote-right quote ml-4 align-middle"
                            ></i>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ol class="carousel-indicators">
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="2"
                  ></li>
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="3"
                  ></li>
                </ol>
              </div>
            </div>
          </div>
          <div class="row my-5 pt-5 text-center text-uppercase">
            <div class="col-12">
              <p class="mb-0 text-capitalize sub-head">Tripper</p>
              <h2 class="heading"><strong>rappel</strong> toi</h2>
            </div>
          </div>
          <div class="row text-center text-uppercase pt-md-5 pt-lg-0">
            <div class="col-12 col-md-10 mx-auto">
              <div class="row">
                <div class="col-12 col-sm-6 col-lg-3">
                  <img
                    class="user_icon"
                    fluid
                    :src="require('@/assets/images/fprint.png')"
                  />
                  <h6 class="sub-heading my-1 font-weight-bold">
                    conseils & suivi
                  </h6>
                  <p class="para-points">avant et pendant ton sejour</p>
                </div>
                <div class="col-12 col-sm-6 col-lg-3">
                  <img
                    class="user_icon"
                    fluid
                    :src="require('@/assets/images/lab.png')"
                  />
                  <h6 class="sub-heading my-1 font-weight-bold">
                    creer et personnalise
                  </h6>
                  <p class="para-points">ton propre stage</p>
                </div>
                <div class="col-12 col-sm-6 col-lg-3">
                  <img
                    class="user_icon"
                    fluid
                    :src="require('@/assets/images/chef-hat.png')"
                  />
                  <h6 class="sub-heading my-1 font-weight-bold">
                    organisation
                  </h6>
                  <p class="para-points">made in heaven trip</p>
                </div>
                <div class="col-12 col-sm-6 col-lg-3">
                  <img
                    class="user_icon"
                    fluid
                    :src="require('@/assets/images/mic.png')"
                  />
                  <h6 class="sub-heading my-1 font-weight-bold">
                    discute avant le depart
                  </h6>
                  <p class="para-points">avec les autres participants</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
export default {
  name: "MainSection",
  mounted() {
    $(function () {
      $(".selection").select2({
        minimumResultsForSearch: Infinity,
      });
      $("#departure_month").searchableOptionList({
        showSelectAll: false,
        allowNullSelection: true,
        maxHeight: "190px",
        texts: {
          searchplaceholder: "Mois de départ",
        },
      });
      $("#my-activity").searchableOptionList({
        showSelectAll: false,
        allowNullSelection: true,
        maxHeight: "190px",
        texts: {
          searchplaceholder: "Activités",
        },
      });
      $("#pays").searchableOptionList({
        showSelectAll: false,
        allowNullSelection: true,
        maxHeight: "190px",
        texts: {
          searchplaceholder: "Pays",
        },
      });
      var backButton =
        '<span class="slick-prev"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAwCAMAAABUpcipAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAOpQTFRFAAAAe3t7enp6d3d3e3t7fHx8e3t7eXl5fHx8fHx8e3t7enp6fHx8cXFxfHx8gICAfHx8e3t7fHx8fHx8ZmZme3t7eXl5eHh4e3t7fHx8fHx8dnZ2e3t7e3t7e3t7gICAfHx8e3t7fHx8fHx8e3t7e3t7fHx8fHx8e3t7e3t7e3t7fHx8e3t7e3t7e3t7eHh4fHx8fHx8e3t7e3t7e3t7e3t7e3t7gICAdHR0fHx8e3t7gICAfHx8e3t7fHx8enp6AAAAgICAe3t7e3t7e3t7e3t7e3t7enp6e3t7e3t7fHx8fHx8fHx8e3t7SJvSHgAAAE50Uk5TAI9gHs//7BNA76Aw0gmcEPVNgMwF+Cggh5DrDd9f8ganV1DQx59vwODwsGd8/u4Rd+UfcJebpAQL/ZMSY/ShQQECW9vigTQybqztyL/VnvtSXwAAAWpJREFUeJyNlddaxCAQhdk1KAkqGktcuxvdFLurrr338v6vY4bEhBTCnDvg/+YwDAOEFOp0CUZjFh2fQHDMppQ6Zo5T0OSUkYN4dNrICeBmELlYEG/WzLnAdcycNJ6bN4NOwi0smjkPjJfMHOkl3PIKAlxNwDUEBzVZ30A6byI46bzVvNSnSrEEOGtSEb5CsgTc1rmpJJRvR7svhXTbT7sgIemButSlVXE5H1STZkFJIY08OR8n4K7emtsRL/a4h+Das1Y4uXdLw3kKJ+/EvmgGmc+VUaSvdVlxa2kUwSYPDhGgAO8jTEhowmPjY0KyLhyYuTSkfYINiXkpyBDIU4x5jH0sRAjkGYJMX+bzkZlMGyC+MJMMCkQvr67rS6Ob0qXhkqS3d/cPJezx6bnyAYkg67qX17f/ufePzy9a/4D6Yd6i3z+JfvNh1omF3KjW1aBevQVEN65S4bAaLmcdP7cMXN5M5WfAQIrjH3uPHRYBYnIgAAAAAElFTkSuQmCC"/></span>';
      var nextButton =
        '<span class="slick-next"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAwCAMAAABUpcipAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAPZQTFRFAAAAfX19enp6gICAe3t7e3t7fHx8fHx8e3t7fHx8e3t7e3t7fHx8cHBwe3t7e3t7e3t7e3t7fHx8fHx8e3t7fHx8e3t7fHx8e3t7gICAfX19e3t7fHx8eXl5e3t7fX19enp6fHx8enp6fHx8fX19e3t7fHx8fHx8e3t7gICAe3t7e3t7fHx8fHx8fHx8eHh4d3d3fHx8fHx8enp6e3t7e3t7e3t7fX19fHx8fHx8fHx8fHx8fX19fHx8enp6fHx8enp6e3t7fHx8fHx8fHx8e3t7fHx8e3t7fHx8e3t7e3t7e3t7e3t7e3t7fHx8fHx8gICAd3d3WaJ1zQAAAFJ0Uk5TAD8wEE+Pv//ff59f7xDP9tHL5UCg87Z7Phg1bK0T7DdL92C5Mx+xTOIMnXyEgLsgD+GvSc2wcCvtUKl3WMBH0EVTcZ7OHXWb0oFVPPBX9ZAEHq06TacAAAFZSURBVHicjdXZVsIwEADQkZSmiAaRqiioUHBfUNzXooIriv7/z5ikHpNA08y8tb2dZE4mCYAeUzlwBPHyPk0i8AtW7k1TM4K8l8KKAU2JmeIYm2XqY2muPK+lrZgylG8XFpeqy/J5pVYv/VGf6HB1jdL6uvlzI2wm4xtlRa325MQ3NlNkemxtSxq55U5LSkRO2JWjEzeEPVk7AsK+kAcYeShkBwGPjjnsYlKeiJQVtwM45fAMAxvYWcqU5xhY45Bh4IUYW1se0rXVdmnUTRi9ssBrfXW4szbUDYchwsEth3cIB/cKxpQVjDDqqv7DzsSuDnXYUxkjyjL6+EHBbPmoD5Eln4wuz5B9syMjW4sMxtYacpaMz9zFtmnpUUb24wDb4S/IkdvIkwpekQnfkNv6neJ29YdwQ3fJn18C2raSihHubP5O7jzE4SgvoJHbiQto6J6fiCj+UQ+/I/0ehXptCecAAAAASUVORK5CYII="/></span>';
      $(".slider1").slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        draggable: true,
        centerPadding: "60px",
        prevArrow: backButton,
        nextArrow: nextButton,
        responsive: [
          {
            breakpoint: 2561,
            settings: {
              initialSlide: 1,
              arrows: true,
              centerMode: true,
              centerPadding: "60px",
              slidesToShow: 3,
              draggable: false,
            },
          },
          {
            breakpoint: 1441,
            settings: {
              initialSlide: 1,
              arrows: true,
              centerMode: true,
              centerPadding: "80px",
              slidesToShow: 2,
              draggable: false,
            },
          },
          {
            breakpoint: 1025,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "80px",
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 991,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "90px",
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: false,
              // centerPadding: '40px',
              slidesToShow: 1,
            },
          },
        ],
      });

      $('[data-toggle="tooltip"]').tooltip();
      $(".user-circle").hide();
      $("#navbarSupportedContent").on("shown.bs.collapse", function () {
        $(".navbar").css({
          "border-bottom": "none",
          "background-color": "#292F33",
        });
        $(".user-circle").show();
        $(".header .navbar-dark .navbar-brand .logo").css("max-width", "100px");
        $("body").css("overflow", "hidden");
      });
      $("#navbarSupportedContent").on("hidden.bs.collapse", function () {
        $(".navbar").css({
          "border-bottom": "1px solid hsla(0,0%,98%,.5)",
          "background-color": "transparent",
        });
        $(".user-circle").hide();
        $(".header .navbar-dark .navbar-brand .logo").css("max-width", "130px");
        $("body").css("overflow", "visible");
      });

      $(
        ".select-dropdown .cancel,.grid-list,.hoverable-div,.view-link,.centered-img"
      ).hide();
      $(".map-section .city-head .select-toggle").removeAttr("data-toggle");
      $(".select-dropdown").on("show.bs.dropdown", function () {
        $(".map-content").css("margin-top", "7rem");
        $(".zone-div").hide();
      });
      $(".select-dropdown").on("hide.bs.dropdown", function () {
        $(".map-content").css("margin-top", "0");
      });
      $(".dropdown-menu li a").click(function () {
        var selText = $(this).text();
        $(this)
          .parents(".btn-group")
          .find(".select-toggle")
          .addClass("text-warning")
          .html(selText);
        $(this).parents(".btn-group").find(".cancel").show();
        $(this).parents(".btn-group").find(".chevron").hide();
        $(".grid-list,.view-link,.centered-img").show();
        $(".map-section .img-fill").addClass("blurred-img");
        $(".map-section .city-head .select-toggle").attr(
          "data-toggle",
          "dropdown"
        );
        $(
          ".map-section .city-head,.map-section .flex-div .activity-count"
        ).removeClass("zero-opacity");
      });
      $(".select-dropdown .cancel").click(function () {
        $(this)
          .parents(".btn-group")
          .find(".select-toggle.tous")
          .removeClass("text-warning")
          .html("tous" + '<i class="fa fa-chevron-down ml-2 chevron"></i>');
        $(this)
          .parents(".btn-group")
          .find(".select-toggle.toutes")
          .removeClass("text-warning")
          .html("toutes" + '<i class="fa fa-chevron-down ml-2 chevron"></i>');
        $(this).parents(".btn-group").find(".cancel").hide();
        $(this).parents(".btn-group").find(".chevron").show();
        if ($(this).parents().hasClass("country-head")) {
          $(".zone-div").show();
          $(
            ".grid-list,.view-link,.centered-img,.map-section .city-head .cancel"
          ).hide();
          $(".map-section .img-fill").removeClass("blurred-img");
          $(".map-section .city-head .select-toggle").removeAttr("data-toggle");
          $(
            ".map-section .city-head,.map-section .flex-div .activity-count"
          ).addClass("zero-opacity");
          $(".select-toggle.toutes")
            .removeClass("text-warning")
            .html("toutes" + '<i class="fa fa-chevron-down ml-2 chevron"></i>');
        }
        // if ($(this).parents().hasClass('city-head') ) {
        // }
      });
      $("#mapCarousel").owlCarousel({
        loop: false,
        center: true,
        items: 3,
        margin: 0,
        autoplay: false,
        dots: true,
        nav: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 2,
          },
          768: {
            items: 2,
          },
          1170: {
            items: 3,
          },
        },
      });
      $(".owl-carousel").find(".owl-nav,.owl-dots").removeClass("disabled");
      $(".owl-carousel").on("changed.owl.carousel", function (event) {
        $(this).find(".owl-nav,.owl-dots").removeClass("disabled");
      });
      $("select.select-place").change(function () {
        var selectedCountry = $(this).children("option:selected").val();
        $('.nav-pills a[href="' + selectedCountry + '"]').tab("show");
      });
    });
    var width = $(window).width();
    if (width >= 1100) {
      $(".customers-testimonials")
        .on("mouseenter", ".shadow-effect", function () {
          $(this).parent().animate({ width: "+=50px" });
          $(this).parent().find(".content").addClass("hover");
          $(this).parent().find(".hoverable-div").slideDown();
          $(this).parent().find(".trip-link").animate({ bottom: "+=45px" });
        })
        .on("mouseleave", ".shadow-effect", function () {
          $(this).parent().animate({ width: "-=50px" });
          $(this).parent().find(".content").removeClass("hover");
          $(this).parent().find(".hoverable-div").slideUp();
          $(this).parent().find(".trip-link").animate({ bottom: "-=45px" });
        });
    }
    if (width >= 792) {
      $("#header_nav.navbar-nav .nav-link").on("click", function (e) {
        e.preventDefault();
        $(".home-wrapper").removeClass("active");
        var wrapper_id = $(this).attr("href").split("=");
        $(".home-wrapper" + wrapper_id + "").addClass("active");
      });
    }
    if (width < 692) {
      $("#header_nav.navbar-nav.mobile-navs .nav-link").on(
        "click",
        function (e) {
          e.preventDefault();
          $("#header_nav").hide();
          $("#activites_pills").show();
          var forward_id = $(this).attr("href").split("=");
          $(".main-wrapper .tab-pane").removeClass("active");
          $(".main-wrapper .tab-pane" + forward_id + "").addClass("active");
        }
      );
      $("#activites_pills_tab.navbar-nav.mobile-navs .nav-link").on(
        "click",
        function (e) {
          e.preventDefault();
          var in_forward_id = $(this).attr("href").split("=");
          $(".main-wrapper .tab-pane" + in_forward_id + "").addClass("active");
          $("#activites_pills").hide();
        }
      );
      $("#agence_pills_tab.nav-pills.mobile-navs .nav-link").on(
        "click",
        function (e) {
          e.preventDefault();
          var ag_forward_id = $(this).attr("href").split("=");
          $(".main-wrapper .tab-pane" + ag_forward_id + "").addClass("active");
          $("#agence_pills").hide();

          if ($(".inner-tab-content.tab-content>.tab-pane").hasClass("show")) {
            $(".inner-tab-content.tab-content>.tab-pane.show").addClass(
              "active"
            );
          }
        }
      );
      $("#pills-activity-tab").on("click", function (e) {
        $(".navbar-toggler").trigger("click");
        $("#header_nav").show();
        e.preventDefault();
      });
      $(".nav-head a").click(function () {
        var back_id = $(this).attr("href").split("=");
        $("" + back_id + "").show();
        $(this).parent().parent().removeClass("active");
        if (back_id == "#header_nav") {
          $(".main-wrapper .tab-pane").removeClass("active");
        }
        return false;
      });
    }
    $("#pills-team-tab").on("click", function (e) {
      $(".team-slider").slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        centerMode: false,
        draggable: true,
        centerPadding: "80px",
        responsive: [
          {
            breakpoint: 2561,
            settings: {
              initialSlide: 1,
              centerMode: false,
              centerPadding: "80px",
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1441,
            settings: {
              initialSlide: 1,
              centerMode: false,
              centerPadding: "80px",
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1025,
            settings: {
              centerMode: false,
              centerPadding: "100px",
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 991,
            settings: {
              centerMode: true,
              centerPadding: "100px",
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              dots: true,
              centerMode: true,
              centerPadding: "70px",
              slidesToShow: 1,
            },
          },
        ],
      });
      $(".slick-dots li:nth-child(2)").triggerHandler("click");
      e.preventDefault();
    });
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>
