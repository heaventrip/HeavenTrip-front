<template>
  <router-view />
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
  box-shadow: 1px 1px 6px rgba(41, 47, 51, 0.04) !important;
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
  background-color: #d9345a;
}
.bg-grey {
  background-color: #292f33;
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
