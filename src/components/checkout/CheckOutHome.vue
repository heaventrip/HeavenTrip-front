<template>
  <div>
    <CheckOutHeader />
    <CheckOutSections />
  </div>
</template>
<script>
import CheckOutHeader from "@/components/checkout/CheckOutHeader";
import CheckOutSections from "@/components/checkout/CheckOutSections";

export default {
  name: "CheckOutHome",
  components: {
    CheckOutHeader,
    CheckOutSections,
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>
