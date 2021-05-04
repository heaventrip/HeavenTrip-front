<template>
  <div>
    <LoginHeader />
  </div>
</template>
<script>
import LoginHeader from "@/components/login/LoginHeader";

export default {
  name: "LoginPage",
  components: {
    LoginHeader,
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>
