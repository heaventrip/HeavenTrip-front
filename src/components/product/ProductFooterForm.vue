<template>
  <div style="text-transform: uppercase; font-weight: bold; font-size: 1.3rem; margin-bottom: 3rem">Demande personnalisée</div>
  <div class="d-flex justify-content-between">
    <div class="d-flex flex-column justify-content-between" style="width: 40%">
      <div class="mb-4">
        <h3 class="contacter-head mb-1">Demander l'ouverture d'une date</h3>
        <p class="contacter-para mb-4 mb-lg-0">Tu peux nous appeler directement pour demander l'ouverture d'une date ou faire la demande par le formulaire de droite.</p>
      </div>
      <div class="tel-box mb-0 p-0">
        <a class="mob-number text-dark" href="tel:0954277519"><img class="mr-2 align-baseline" fluid :src="require('@/assets/images/tel_dark.png')" /> 09 54 27 75 19</a>
        <p class="contacter-para mb-0">Lundi - samedi : 8h30 à 19h00</p>
      </div>
    </div>
    <div class="d-flex flex-column justify-content-between" style="padding-left: 4rem; border-left: 1px dashed #b4b4b4">
      <form class="contact-form">
        <div class="row no-gutters">
          <div class="col-12 col-lg-5 mb-4">
            <div class="form-group has-float-label">
              <input id="contact-firstname" class="form-control" type="text" name="" placeholder=" " />
              <label for="contact-firstname">Prénom</label>
            </div>
          </div>
          <div class="col-12 col-lg-6 ml-auto">
            <div class="form-group has-float-label">
              <input id="contact-lastname" class="form-control" type="text" name="" placeholder=" " />
              <label for="contact-lastname">Nom</label>
            </div>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col-12 col-lg-5">
            <div class="form-group has-float-label">
              <input id="contact-phone" class="form-control" type="text" name="" placeholder=" " />
              <label for="contact-phone">Téléphone</label>
            </div>
          </div>
          <div class="col-12 col-lg-6 ml-auto">
            <div class="form-group has-float-label">
              <input id="contact-date" class="form-control" type="date" datepicker required name="" placeholder=" " />
              <label for="contact-date">Dates souhaitées</label>
            </div>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col-12">
            <button class="btn btn-dark font-weight-bold border-0 rounded-0 w-100">ENVOYER MON MESSAGE</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProdutFooterForm'
}
</script>

<style scoped>
.container {
  height: auto;
}
.container div {
  height: 100%;
}
.contacter-para {
  font-size: 0.8rem;
}
.social-networks span {
  font-weight: bolder;
}
.tel-box {
  margin-left: 0;
  border: none;
  padding-left: 0;
}
.btn-dark {
  font-size: 0.875rem;
  padding: 0.6rem;
}
.has-float-label .form-control:placeholder-shown:not(:focus) + label {
  top: 0.15em;
  font-size: 100%;
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
  border-bottom: 1px solid #292f3357;
  background-color: transparent;
  padding-bottom: 0.1rem;
  color: #292f33;
}
.form-control:focus {
  background-color: transparent;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #292f33;
}
.contact-form label {
  font-weight: 600;
}
</style>
