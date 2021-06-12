<template>
  <div class="team-slider-container d-flex">
    <div class="team-slide d-flex">
      <div class="team-card__picture-block">
        <img :src="require('@/assets/images/svg/background_team.svg')" class="team-card__picture-bg" alt="..." />
        <img :src="require('@/assets/images/svg/team.png')" alt="..." class="team-card__picture" />
      </div>
      <div class="team-card__person-infos d-flex flex-column justify-content-center ml-5">
        <div class="team-card__person-infos__descr">
          Toujours la tête dans les nuages celui-là, Toujours la tête dans les nuages celui-là… Toujours la tête dans les nuages celui-là, Toujours la tête dans les nuages celui-là… Toujours la tête dans les nuages celui-là, Toujours la tête dans les nuages celui-là… Toujours la tête dans les nuages
          celui-là, Toujours la tête dans les nuages celui-là… celui-là… Toujours la tête dans les nuages celui-là, Toujours la tête dans les nuages celui-là… Toujours la …
        </div>
        <div class="">Toujours la tête dans les nuages celui-là, Toujours la tête dans les nuages celui-là…</div>
      </div>
    </div>
    <div class="team-slide d-flex">
      <div class="team-card__picture-block">
        <img :src="require('@/assets/images/svg/background_team.svg')" class="team-card__picture-bg" alt="..." />
        <img :src="require('@/assets/images/svg/team.png')" alt="..." class="team-card__picture" />
      </div>
      <div class="team-card__person-infos d-flex flex-column justify-content-center ml-5">
        <div class="team-card__person-infos__descr">
          Toujours la tête dans les nuages celui-là, Toujours la tête dans les nuages celui-là… Toujours la tête dans les nuages celui-là, Toujours la tête dans les nuages celui-là… Toujours la tête dans les nuages celui-là, Toujours la tête dans les nuages celui-là… Toujours la tête dans les nuages
          celui-là, Toujours la tête dans les nuages celui-là… celui-là… Toujours la tête dans les nuages celui-là, Toujours la tête dans les nuages celui-là… Toujours la …
        </div>
        <div class="">Toujours la tête dans les nuages celui-là, Toujours la tête dans les nuages celui-là…</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavTeam',
  mounted() {
    //  #pills-team-tab doesn't exist anywhere
    //
    // $('#pills-team-tab').on('click', function (e) {
    //   $('.team-slider').slick({
    //     dots: true,
    //     arrows: false,
    //     infinite: false,
    //     speed: 300,
    //     slidesToShow: 4,
    //     centerMode: false,
    //     draggable: true,
    //     centerPadding: '80px',
    //     responsive: [
    //       {
    //         breakpoint: 2561,
    //         settings: {
    //           initialSlide: 1,
    //           centerMode: false,
    //           centerPadding: '80px',
    //           slidesToShow: 4
    //         }
    //       },
    //       {
    //         breakpoint: 1441,
    //         settings: {
    //           initialSlide: 1,
    //           centerMode: false,
    //           centerPadding: '80px',
    //           slidesToShow: 4
    //         }
    //       },
    //       {
    //         breakpoint: 1025,
    //         settings: {
    //           centerMode: false,
    //           centerPadding: '100px',
    //           slidesToShow: 3
    //         }
    //       },
    //       {
    //         breakpoint: 991,
    //         settings: {
    //           centerMode: true,
    //           centerPadding: '100px',
    //           slidesToShow: 1
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           dots: true,
    //           centerMode: true,
    //           centerPadding: '70px',
    //           slidesToShow: 1
    //         }
    //       }
    //     ]
    //   })
    //   $('.slick-dots li:nth-child(2)').triggerHandler('click')
    //   e.preventDefault()
    // })
  }
}
</script>

<style scoped>
.team-slider-container {
  display: flex;
  height: 75%;
}
.team-slide {
  margin: auto;
  width: 50%;
}
@media only screen and (max-width: 1400px) {
  .team-slide {
    width: 80%;
  }
}
.team-card__picture-block {
  position: relative;
  transform: translateY(-40%);
  /* display: flex;
  flex-direction: column; */
}
.team-card__picture-bg {
  position: relative;
  top: 40%;
}
.team-card__picture {
  position: absolute;
  top: 0;
  left: 0;
}
.team-card__person-infos__descr {
  font-family: Muli, sans-serif;
  font-size: 0.85rem;
  color: #292f33;
}
</style>
