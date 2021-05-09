<template>
  <div class="good-trip-div d-none">
    <div class="success-msg">
      <div class="success-check rounded-circle d-block mx-auto my-4">
        <i class="fas fa-check"></i>
      </div>
      <h6 class="text-uppercase text-dark font-weight-bold mb-3">Votre paiement de 3108 € à été validé</h6>
      <p class="success-msg-content mb-0">Un email de confirmation à été envoyé sur ta boite mail.</p>
    </div>
    <div class="success-trip-info bg-dark text-white">
      <h6 class="prefer-text text-center">
        <img class="d-inline-block mx-auto px-3 bg-dark position-relative zindex-1" fluid :src="require('@/assets/images/mic_light.png')" />
      </h6>
      <p class="h6 mb-3 font-weight-800">Et un Tripper de + !</p>
      <p class="f-14 font-weight-normal">
        Tu peux retrouver ta réservation sur ton
        <span class="text-decoration-underline">espace client</span>
        Heaven Trip. Profites en pour discuter avec les autres participants via le chat en ligne.
      </p>
      <p class="f-14 font-weight-normal">Sportivement, la team Heaven Trip</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step5Module3'
}
</script>

<style></style>
