<template>
  <ul class="list-unstyled mb-0 ml-auto d-none d-lg-flex text-uppercase profile-menu float-right">
    <li v-if="token">
      <a v-on:click="logout()" class="text-reset px-4 py-3 d-inline-block">se déconnecter</a>
    </li>
    <li v-else>
      <a href="login.html" class="text-reset px-4 py-3 d-inline-block" data-toggle="modal" data-target="#login">se connecter</a>
    </li>
    <li>
      <a href="#" class="px-4 py-3 profile-link font-weight-bold d-inline-block" data-toggle="modal" data-target="#profile">creér son profil</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ConnectionButtons'
}
</script>

<style></style>
