<template>
  <nav
    class="top-0 fixed z-50 w-full px-2 py-3 navbar-expand-lg bg-blueGray-700"
  >
    <div class="container px-2 mx-auto">
      <!-- Bagian Router Link dan Button dalam satu flex container -->
      <div class="flex justify-between">
        <!-- Bagian Router Link -->
        <img :src="require('~/assets/img/logo.png')" style="max-width: 50px" />
        <!-- Bagian Button -->
        <div v-if="token?.token">
          <dropdowns-user-dropdown />
        </div>
        <button
          v-else
          @click="redirectLogin"
          class="ml-4 lg:ml-4 bg-emerald-500 text-white active:bg-emerald-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
          type="button"
        >
          <i class="fa-solid fa-arrow-right-to-bracket"></i> Login
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import IndexDropdown from "@/components/Dropdowns/IndexDropdown.vue";

export default {
  data() {
    return {
      navbarOpen: false,
      showLogin: true,
    };
  },

  beforeMount() {
    this.authTokenStorage();
  },

  methods: {
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen;
    },
    redirectLogin() {
      this.$router.push("/auth/login");
    },
  },
  components: {
    IndexDropdown,
  },

  computed: {
    token() {
      return this.$store.getters["auth/getAuthToken"];
    },
  },
  watch: {
    notifs() {
      console.log(this.$_.size(this.notifs));
      if (this.$_.size(this.notifs) > 0) {
        window.location.reload();
      }
    },
  },
};
</script>
