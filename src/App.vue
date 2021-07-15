<template>
  <router-view :key="$route.fullPath" />
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  width: 100vw;
  overflow-x: hidden;
}
body.modal-open::after {
  content: '';
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(41, 47, 51, 0.2);
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  color: #2c3e50;
}
.modal__backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(41, 47, 51, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.vertical-slide-up-enter-active,
.vertical-slide-up-leave-active {
  transition: all 0.3s ease;
}
.vertical-slide-up-enter-from {
  transform: translateY(20px);
  opacity: 0;
}
.vertical-slide-up-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.vertical-slide-down-enter-active,
.vertical-slide-down-leave-active {
  transition: all 0.3s ease;
}
.vertical-slide-down-enter-from {
  transform: translateY(-20px);
  opacity: 0;
}
.vertical-slide-down-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.participant-fade-enter-active {
  transition: opacity 0.8s;
}
.participant-fade-leave-active {
  transition: opacity 0.3s;
}
.participant-fade-enter-from,
.participant-fade-leave-to {
  opacity: 0;
}

.fade-fast-enter-active,
.fade-fast-leave-active {
  transition: opacity 0.2s;
}
.fade-fast-enter-from,
.fade-fast-leave-to {
  opacity: 0;
}

.fade-slow-leave-active,
.fade-slow-enter-active {
  transition: opacity 0.5s ease-in-out;
  transition: opacity 0.2s ease-in-out;
}

.fade-slow-enter-from,
.fade-slow-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.muli {
  font-family: Muli, sans-serif;
}
.oswald {
  font-family: Oswald, sans-serif;
}
.shadow {
  box-shadow: 0px 0px 4px #292f331a !important;
}
.shadow--right {
  box-shadow: 1px 3px 6px rgba(41, 47, 51, 0.04) !important;
}
.shadow--top {
  box-shadow: 0px -1px 3px rgba(41, 47, 51, 0.03) !important;
}
.shadow--bottom {
  box-shadow: 0px 3px 6px rgba(41, 47, 51, 0.15) !important;
}
.bg-white {
  background-color: #fff;
}
.bg-pink {
  background-color: #d82558;
}
.bg-grey {
  background-color: #292f33;
}
.text--pink {
  color: #d82558;
}
.text--grey {
  color: #292f33;
}
.text--white {
  color: #fff;
}
.text--light {
  font-weight: 200;
}
.text--bold {
  font-weight: bold;
}
.text--bolder {
  font-weight: 800;
}
.text--12 {
  font-size: 0.75rem;
}
.text--13 {
  font-size: 0.8125rem;
}
.text--14 {
  font-size: 0.875rem;
}
.text--16 {
  font-size: 1rem;
}
.text--18 {
  font-size: 1.125rem;
}
.text--20 {
  font-size: 1.25rem;
}
.text--22 {
  font-size: 1.375rem;
}
.text--24 {
  font-size: 1.5rem;
}
.fg-0 {
  flex-grow: 0;
}
.fg-1 {
  flex-grow: 1;
}
.fg-2 {
  flex-grow: 2;
}
.fg-3 {
  flex-grow: 3;
}
.fg-4 {
  flex-grow: 4;
}
.fg-5 {
  flex-grow: 5;
}
.fs-0 {
  flex-shrink: 0;
}
.fs-1 {
  flex-shrink: 1;
}
.fs-2 {
  flex-shrink: 2;
}
.fs-3 {
  flex-shrink: 3;
}
.fs-4 {
  flex-shrink: 4;
}
.fs-5 {
  flex-shrink: 5;
}
</style>
