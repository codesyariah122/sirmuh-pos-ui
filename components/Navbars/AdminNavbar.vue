<template>
  <!-- Navbar -->
  <nav
  class="absolute top-0 left-0 w-full z-10 mb-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4"
  >
  <div
  class="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4"
  >
  <!-- Brand -->
      <!-- <span
        class="countdown-login text-xs font-semibold inline-block py-2 px-2 rounded text-emerald-600 bg-emerald-200 capitalize last:mr-0 mr-1 ml-6"
      >
        Sesi login: {{ countdown }}
      </span> -->

      <!-- User -->
      <div v-if="!$nuxt.isMobile" class="inline-block mt-4">
        <button
        class="cursor-pointer ml-6 px-6 py-0 mb-10 bg-transparent z-3"
        v-on:click="toggleHideSidebar"
        >
        <span v-if="$nuxt.showSidebar">
          <i class="fa-solid fa-xmark text-blueGray-300 text-4xl"></i>
        </span>
        <span v-else>
          <i class="fas fa-bars text-blueGray-300 text-4xl"></i>
        </span>
      </button>
    </div>
  </div>
  <ul class="flex-col md:flex-row list-none items-center hidden md:flex">
    <li class="mr-12">
      <dropdowns-notification-dropdown />
    </li>
    <li class="inline-block relative">
      <dropdowns-user-dropdown />
    </li>
  </ul>
</nav>
<!-- End Navbar -->
</template>

<script>
  export default {
    data() {
      return {
        countdown: "",
      };
    },

    beforeMount() {
      this.authTokenStorage();
    },

    created() {
      this.$nuxt.checkUserLogin();
    },

    mounted() {
      this.expiredCountDown();
    },

    methods: {
      toggleHideSidebar() {
        this.$nuxt.showSidebar = !this.$nuxt.showSidebar;
      },

      authTokenStorage() {
        this.$store.dispatch("auth/storeAuthToken", "auth");
      },
      expiredCountDown() {
        setInterval(() => {
        // Waktu saat ini
          const endTime = new Date(this.$nuxt.userData.expires_at);
          let currentTime = new Date().getTime();

        // Selisih antara waktu akhir dan waktu saat ini
          let timeLeft = endTime - currentTime;

        // Konversi selisih waktu menjadi detik, menit, dan jam
          let seconds = Math.floor((timeLeft / 1000) % 60);
          let minutes = Math.floor((timeLeft / 1000 / 60) % 60);
          let hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
          let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

        // Format waktu mundur
          this.countdown = `${days > 0 ? days + " hari, " : ""} ${
            hours > 0 ? hours + " jam, " : ""
          } ${minutes > 0 ? minutes + " menit, " : ""} ${
            seconds > 0 ? seconds + " detik" : ""
          }`;

        // Hentikan penghitungan waktu mundur jika waktu telah habis
          if (timeLeft < 0) {
          // clearInterval();
            this.countdown = "Waktu telah habis!";
            this.forceLogout(this.token.token);
          }
        }, 1000);
      },
    },
    computed: {
      token() {
        return this.$store.getters["auth/getAuthToken"];
      },
    },
    watch: {
      notifs() {
        if (this.$_.size(this.notifs) > 0) {
          if (this.$nuxt.notifs[0].routes === "profile") {
            this.$nuxt.checkUserLogin();
          }
        }
      },
    },
  };
</script>
