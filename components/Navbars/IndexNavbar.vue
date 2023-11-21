<template>
  <nav
    class="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow"
  >
    <div
      class="container px-8 mx-auto flex flex-wrap items-center justify-between"
    >
      <div>
        <router-link to="/" class="flex-1">
          <a
            class="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            href="#pablo"
          >
            Sirojul Muhtadin
          </a>
        </router-link>
      </div>
      <div>
        <button
          @click="redirectLogin"
          class="bg-emerald-500 text-white active:bg-emerald-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
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
    };
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
};
</script>
