<template>
  <div class="tab-pane fade login-signup-tab" id="step2" role="tabpanel" aria-labelledby="step2-tab">
    <div class="card border-0 p-3">
      <div class="card-body">
        <div class="row">
          <div class="col-12 col-lg-4">
            <div class="participants-div align-items-center d-none">
              <h4 class="head font-weight-bold">
                PARTICIPANT
                <i class="fa fa-caret-right mx-3 small align-baseline"></i>1
                <span class="d-block mt-2 text-danger">J’ai déjà un compte</span>
              </h4>
              <div class="upload-div">
                <i class="align-text-top fa fa-arrow-circle-up"></i>
              </div>
              <p class="profile-upload mb-0">Télécharge ta photo de profil</p>
              <p class="upload-warning">Taille maximum 1MB</p>
            </div>
            <div class="participants-div align-items-center">
              <img class="img-fluid rounded-circle uploaded-img" fluid :src="require('@/assets/images/ui_faces/1.jpg')" />
              <h4 class="head font-weight-bold">
                PARTICIPANT
                <i class="fa fa-caret-right mx-3 small align-baseline"></i>1
                <span class="d-block mt-2 text-danger text-uppercase"><i class="fas fa-edit mr-2"></i> Modifier</span>
              </h4>
            </div>
          </div>
          <div class="col-12 col-lg-8">
            <form class="participants-form contact-form completed-form pt-5">
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
    <div class="card border-0 p-3">
      <div class="card-header border-0">
        <h6 class="mb-0 text-uppercase font-weight-bold d-flex align-items-center">
          <img class="participant-img mr-3" fluid :src="require('@/assets/images/ui_faces/1.jpg')" />
          participants
          <i class="fa fa-caret-right mx-3 small align-baseline"></i>
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
                <input class="form-control" type="text" name="" value="Rammurthy Nagar" placeholder=" " />
                <label>Prénom*</label>
              </div>
            </div>
            <div class="col-12 col-lg-4">
              <div class="form-group has-float-label pr-5">
                <label>Date de naissance*</label>
                <div class="form-row">
                  <div class="col-3">
                    <input type="number" name="" class="form-control" placeholder=" " required value="04" />
                  </div>
                  <div class="col-3">
                    <input type="number" name="" class="form-control" placeholder=" " required value="11" />
                  </div>
                  <div class="col-5">
                    <input type="number" name="" class="form-control" placeholder=" " required value="1984" />
                  </div>
                </div>
                <i class="fa fa-check check-sym d-none"></i>
              </div>
            </div>
            <div class="col-12 col-lg-4">
              <div class="form-group has-float-label">
                <input id="emailAddr" class="form-control" type="email" name="" value="" placeholder=" " />
                <label for="emailAddr">Email*</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step2'
}
</script>

<style></style>
