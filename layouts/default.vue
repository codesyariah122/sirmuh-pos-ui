<template>
  <div>
    <NavbarsIndexNavbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from "@/components/Navbars/IndexNavbar.vue";

export default {
  name: 'default',
  data() {
    return {};
  },
  components: {
    Navbar,
  },
};
</script>
