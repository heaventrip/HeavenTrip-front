<template>
  <header class="header bg-dark text-white p-0 element-header">
    <div class="container-fluid p-0 position-relative">
      <div class="header-part">
        <div class="dropdown login-dropdown">
          <button class="btn btn-block rounded-0 border-0 pt-3" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            MARION <span class="l-name"> .K</span>
            <img class="login-img" fluid :src="require('@/assets/images/ui_faces/1.jpg')" />
            <img class="menu-icon" fluid :src="require('@/assets/images/menu.png')" />
          </button>
          <div class="dropdown-menu text-uppercase" aria-labelledby="dropdownMenu2">
            <button class="dropdown-item" type="button">
              Mes ENVIES
              <span class="font-weight-bold text-danger ml-1">(2)</span>
            </button>
            <button class="dropdown-item" type="button">
              Mes séjours
              <div class="position-relative ml-auto">
                <img class="picto-icon" fluid :src="require('@/assets/images/svg/PICTO_CHAT.svg')" />
                <div class="notify-number">1</div>
              </div>
            </button>
            <button class="dropdown-item trip-page-link" type="button">Ma page Tripper</button>
            <button class="dropdown-item account-page-link" type="button">Mon compte</button>
            <button class="dropdown-item logout-page-link" type="button">se déconnecter</button>
          </div>
        </div>
        <!-- <ul class="list-unstyled mb-0 ml-auto d-none d-lg-flex text-uppercase profile-menu float-right">
			    	<li>
			    		<a href="#" class="text-reset pr-4">se connecter</a>
			    	</li>
			    	<li>
			    		<a href="#" class="text-reset pl-3 profile-link font-weight-bold">creér son profil</a>
			    	</li>
			    </ul> -->
        <div class="clearfix"></div>
        <nav class="navbar navbar-expand-lg navbar-dark p-0 border-lg-0 native-navbar">
          <a class="navbar-brand pl-sm-5 pl-lg-0" href="index.html"><img class="logo" fluid :src="require('@/assets/images/logo.png')" /></a>
          <a href="#" class="text-white ml-auto d-inline-block d-lg-none mail-btn">
            <img class="mail-icon" fluid :src="require('@/assets/images/svg/PICTO_CONTACT_MOBILE.svg')" />
          </a>
          <!-- <a href="#" class="text-white user-circle">
				  		<i class="fa fa-user-circle mx-auto"></i>
				  	</a> -->
          <button class="navbar-toggler rounded-0 collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <!-- <span class="navbar-toggler-icon"></span> -->
            <img class="menu-icon mx-auto" fluid :src="require('@/assets/images/menu.png')" />
            <i class="fa fa-times cross-sym mx-auto"></i>
          </button>

          <div class="collapse navbar-collapse text-white bg-white" id="navbarSupportedContent">
            <ul class="navbar-nav mx-md-5 text-uppercase">
              <li class="nav-item">
                <a class="nav-link" href="#"><span>01</span> activites <i class="fas fa-chevron-right float-right nav-arrow d-block d-lg-none"></i></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><span>02</span> destination <i class="fas fa-chevron-right float-right nav-arrow d-block d-lg-none"></i></a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="product.html"><span>03</span> l'agence <i class="fas fa-chevron-right float-right nav-arrow d-block d-lg-none"></i><span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><span>04</span> actualités <i class="fas fa-chevron-right float-right nav-arrow d-block d-lg-none"></i></a>
              </li>
            </ul>
            <button class="btn nav-btn btn-lg btn-outline-light text-uppercase d-none d-lg-inline-block">creer ton séjour</button>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'LoginHeader',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
