<template>
  <div>
    <NavbarIndex />
    <Nuxt />
  </div>
</template>

<script>
import NavbarIndex from "~/components/navbars/IndexNavbar.vue";

export default {
  components: {
    NavbarIndex,
  },
  data() {
    return {};
  },
};
</script>
