<template>
  <nav
  :class="`top-0 fixed z-50 w-full px-2 py-3 navbar-expand-lg ${
    isScrolled
    ? 'bg-emerald-600 transition-colors duration-300 shadow-xl'
    : 'bg-transparent transition-colors duration-300'
  }`"
  >
  <div class="container lg:px-2 mx-auto">
    <!-- Bagian Router Link dan Button dalam satu flex container -->
    <div class="flex justify-between">
      <!-- Bagian Router Link -->
      <img
      :src="require('~/assets/img/logo.png')"
      class="lg:max-width-[90px] transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
      style="max-width: 70px"
      />
      <!-- Bagian Button -->
      <div v-if="token?.token">
        <dropdowns-user-dropdown />
      </div>
        <!-- <button
          v-else
          @click="redirectLogin"
          class="ml-4 lg:ml-4 mt-4 bg-[#dbbb49] text-white active:bg-[#d3ad29] text-md font-bold uppercase px-4 py-0 rounded shadow hover:shadow-lg hover:bg-[#dab842] outline-none focus:outline-none ease-linear transition-all duration-150 w-[200px] h-[30px]"
          type="button"
        >
          <i class="fa-solid fa-arrow-right-to-bracket text-md"></i> Login
        </button> -->
        <button
        v-else
        :class="`ml-4 lg:ml-4 mt-4 ${
          isScrolled ? 'bg-emerald-500' : 'bg-emerald-700'
        }  text-white active:bg-[#d3ad29] text-md font-bold uppercase px-4 py-0 rounded shadow hover:shadow-lg hover:bg-[#dab842] outline-none focus:outline-none ease-linear transition-all duration-150 lg:w-[200px] sm:w-[150px] sm:text-sm h-[30px]`"
        type="button"
        >
        <i class="fa-regular fa-address-card text-md"></i> Daftar Baru
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
        isScrolled: false,
      };
    },

    beforeMount() {
      this.authTokenStorage();
      window.addEventListener("scroll", this.handleScroll);
    },

    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    },

    methods: {
      setNavbarOpen: function () {
        this.navbarOpen = !this.navbarOpen;
      },
      redirectLogin() {
        this.$router.push("/auth/login");
      },
      handleScroll() {
        this.isScrolled = window.scrollY > 0;
      },
    },

    computed: {
      token() {
        return this.$store.getters["auth/getAuthToken"];
      },
    },
  };
</script>
