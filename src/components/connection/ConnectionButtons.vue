<template>
  <ul v-if="$parent.agencyIsActive" class="list-unstyled mb-0 ml-auto d-none d-lg-flex text-uppercase profile-menu float-right">
    <li v-if="token">
      <a v-on:click="logout()" class="text-reset px-4 py-4 d-inline-block" style="color: #292f33 !important">se déconnecter</a>
    </li>
    <li v-else>
      <a @click="openModal('login')" class="text-reset px-4 py-4 d-inline-block" style="color: #292f33 !important">se connecter</a>
    </li>
    <li>
      <a @click="openModal('signup')" href="#" class="px-4 py-4 profile-link font-weight-bold d-inline-block" style="color: #fff; background-color: #292f33">creér son profil</a>
    </li>
  </ul>
  <ul v-else class="list-unstyled mb-0 ml-auto d-none d-lg-flex text-uppercase profile-menu float-right">
    <li v-if="token">
      <a v-on:click="logout()" class="text-reset px-4 py-3 d-inline-block">se déconnecter</a>
    </li>
    <li v-else>
      <a @click="openModal('login')" class="text-reset px-4 py-4 d-inline-block">se connecter</a>
    </li>
    <li>
      <a @click="openModal('signup')" class="px-4 py-4 profile-link font-weight-bold d-inline-block">creér son profil</a>
    </li>
  </ul>
  <!-- modal -->
  <teleport to="#modal">
    <ConnectionModal v-if="showModal" :whichForm="form" />
  </teleport>
</template>

<script>
import ConnectionModal from '@/components/connection/ConnectionModal.vue'

export default {
  name: 'ConnectionButtons',
  components: {
    ConnectionModal
  },
  data() {
    return {
      agencyIsActive: false,
      showModal: false,
      form: ''
    }
  },
  methods: {
    openModal(form) {
      this.showModal = true
      this.form = form
    }
  }
}
</script>
