<template>
  <div class="container text-dark align-items-start justify-content-center">
    <div class="d-flex flex-column justify-content-between col-6" style="padding-right: 20vh; border-right: 1px dashed #b4b4b4">
      <div class="mb-4">
        <h4 class="contacter-head mb-1">Faut pas hésiter !</h4>
        <p class="contacter-para mb-4 mb-lg-0">Si tu as besoin de conseils, de renseignements, tu peux nous joindre par téléphone ou par le formulaire ci-dessous.</p>
      </div>
      <div class="tel-box col-lg-4 mb-0">
        <a class="mob-number text-dark" href="tel:0954277519"><img class="mr-2 align-baseline" fluid :src="require('@/assets/images/tel_dark.png')" /> 09 54 27 75 19</a>
      </div>
      <p class="contacter-para" style="margin-bottom: 2rem">Lundi - samedi : 8h30 à 19h00</p>
      <div class="social-networks" style="margin-bottom: 2rem">
        <a href="#" class="rounded-circle d-inline-block mr-2 text-dark"><img class="mr-2" fluid="" src="@/assets/images/fb.svg" /></a>
        <a href="#" class="rounded-circle d-inline-block mr-2 text-dark"><img class="mr-2" fluid="" src="@/assets/images/insta.svg" /></a>
        <span>#yourheaventrip</span>
      </div>
      <div class="">
        <h4 class="contacter-head text-uppercase mb-3">Je veux pas louper les nouveautés</h4>
        <form class="d-flex newsletter-form">
          <input class="form-control mail-input rounded-0" type="text" name="" placeholder="Mon adresse email..." />
          <button class="btn btn-white font-weight-bold text-uppercase mail_btn rounded-0">s'abonner</button>
        </form>
      </div>
    </div>
    <div class="d-flex flex-column justify-content-between" style="padding-left: 20vh">
      <form class="contact-form">
        <h4 class="contacter-head mb-5">PAR FORMULAIRE :</h4>
        <div class="row mb-4">
          <div class="col-12 col-lg-5">
            <div class="form-group valid">
              <label>Prénom</label>
              <input class="form-control" type="text" name="" value="Nagar Steve" />
              <i class="fa fa-check check-sym"></i>
            </div>
          </div>
          <div class="col-12 col-lg-6 ml-auto">
            <div class="form-group valid">
              <label for="input-email">Adresse Email</label>
              <input id="input-email" class="form-control" type="email" name="" value="hello@yourheaventrip.com" />
              <!-- <i class="fa fa-check check-sym"></i> -->
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="form-group valid">
              <label>Ton message</label>
              <input class="form-control" type="text" rows="5" name="" placeholder="Tu peux taper ton message ici…" />
            </div>
            <button class="btn btn-dark font-weight-bold border-0 rounded-0 w-100">ENVOYER MON MESSAGE</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavContact'
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
.newsletter-form {
  border: 1px solid #292f33;
}
.newsletter-form .form-control {
  border-right: 1px solid #292f33;
  height: 50px;
  font-size: 0.8rem;
}
.newsletter-form button {
  padding: 0 1.5rem;
  font-size: 0.875rem;
}
.mail-input {
  background-color: transparent;
  font-family: Muli, sans-serif;
}
.mail-input:focus {
  background-color: transparent;
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
input {
  font-size: 0.8rem;
}
</style>
