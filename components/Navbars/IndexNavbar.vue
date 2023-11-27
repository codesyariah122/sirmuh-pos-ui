<template>
  <nav
    class="top-0 fixed z-50 w-full px-2 py-3 navbar-expand-lg bg-blueGray-700"
  >
    <div class="container px-2 mx-auto">
      <!-- Bagian Router Link dan Button dalam satu flex container -->
      <div class="flex justify-between">
        <!-- Bagian Router Link -->
        <img :src="require('~/assets/img/logo.png')" style="max-width: 60px" />
        <!-- Bagian Button -->
        <div v-if="token?.token">
          <dropdowns-user-dropdown />
        </div>
        <button
          v-else
          @click="redirectLogin"
          class="ml-4 lg:ml-4 mt-4 bg-[#dbbb49] text-white active:bg-[#d3ad29] text-md font-bold uppercase px-4 py-0 rounded shadow hover:shadow-lg hover:bg-[#dab842] outline-none focus:outline-none ease-linear transition-all duration-150 w-[200px] h-[30px]"
          type="button"
        >
          <i class="fa-solid fa-arrow-right-to-bracket text-md"></i> Login
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
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

  computed: {
    token() {
      return this.$store.getters["auth/getAuthToken"];
    },
  },
};
</script>
