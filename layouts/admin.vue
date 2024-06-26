<style scoped>
  .sidebar-transition-enter-active,
  .sidebar-transition-leave-active {
    transition: margin-left 0.5s;
  }

  .sidebar-transition-enter, .sidebar-transition-leave-to {
    margin-left: -300px; 
  }
</style>

<template>
  <div>
    <div v-if="loading">
      <molecules-row-loading :loading="loading" :options="options" />
    </div>

    <transition name="sidebar-transition">
      <sidebar v-show="$nuxt.showSidebar" />
    </transition>
    <div :class="`${$nuxt.showSidebar ? 'relative md:ml-64 bg-blueGray-100' : ''}`">
      <admin-navbar ref="layoutRef" />

      <header-stats />        
      
      <!-- <molecules-internet-connection /> -->

      <div class="px-4 md:px-10 mx-auto md:w-full w-screen -m-24">
        <Nuxt />
        <footer-admin />
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from "vue";
  import autoLogoutMixin from "~/plugins/autoLogoutMixin.js";
  import AdminNavbar from "@/components/Navbars/AdminNavbar.vue";
  import Sidebar from "@/components/Sidebar/Sidebar.vue";
  import HeaderStats from "@/components/Headers/HeaderStats.vue";
  import FooterAdmin from "@/components/Footers/FooterAdmin.vue";
  import globalMixin from "~/mixins/global";

  Vue.mixin(globalMixin);
  Vue.mixin(autoLogoutMixin);

  export default {
    mixins: [autoLogoutMixin, globalMixin],
    name: "admin-layout",
    components: {
      AdminNavbar,
      Sidebar,
      HeaderStats,
      FooterAdmin,
    },

    data() {
      return {
        api_url: process.env.NUXT_ENV_API_URL,
        expires_at: "",
        roles: "",
        userEmail: "",
        userName: "",
        userRoles: "",
        emailForbaiden: "",
        loading: this.globalLoading
        ? this.globalLoading
        : this.$nuxt.globalLoading,
        options: this.globalOptions
        ? this.globalOptions
        : this.$nuxt.globalOptions,
      };
    },

    beforeMount() {
      this.authTokenStorage();
    },

    created() {
      this.$nuxt.checkUserLogin();
    },

    mounted() {
      this.checkExpires();
      this.resetLogoutTimer();
      window.addEventListener('popstate', this.handleBackButton);
    },

    beforeDestroy() {
      window.removeEventListener('popstate', this.handleBackButton);
    },

    methods: {
      handleBackButton(event) {
        localStorage.removeItem('ref_code')
      },

      checkExpires() {
        this.loading = true;
        this.$nuxt.globalLoadingMessage = "Proses memeriksa data user ...";
        const endPoint = `/user-data`;
        const config = {
          headers: {
            Authorization: `Bearer ${this?.token?.token}`,
          },
        };
        this.$api
        .get(endPoint, config)
        .then(({ data }) => {
          const roles = this.$role(data?.data?.roles[0]?.name);
          const now = this.$moment().format("LLLL");
          const expires_at = data?.data?.expires_at && this.$moment(data?.data?.expires_at).format("LLL") || null;

          this.roles = roles;

          this.userRoles = roles;

          this.userEmail = data?.data && data?.data?.email;

          if (now > expires_at && data.data.remember_token === null) {
            this.$toast.show("Sesi login telah habis", {
              type: "info",
              duration: 1000,
              position: "top-right",
            });

            this.sesiLogout(roles);
            this.$store.dispatch("auth/removeAuthToken", "auth");
            this.$store.dispatch("auth/removeExpiredLogin", "expired_at");
          }
        })
        .finally(() => {
          this.loading = false;
        })
        .catch((err) => {
          if (err) {
              // this.$swal({
              //   icon: "error",
              //   title: "Oops...",
              //   text: "Forbaiden Access!",
              // });
              // this.roleUserExit();
              // this.$store.dispatch("auth/removeAuthToken", "auth");
              // this.$store.dispatch("auth/removeExpiredLogin", "expired_at");
           this.loading = false
           this.$router.replace("/");
         }
       });
      },
    },

    computed: {
      token() {
        return this.$store.getters["auth/getAuthToken"];
      },
    },

    watch: {
      forbidenNotifs() {
        if (this.$_.size(this.$nuxt.forbidenNotifs) > 0 && this.$nuxt.forbidenNotifs.find(user => user.token === this.token.token)) {
          this.$toast.show(this.$nuxt.forbidenNotifs.find(user => user.token === this.token.token).notif, {
            type: this.$nuxt.forbidenNotifs.find(user => user.token === this.token.token).alert,
            duration: 2500,
            position: "top-right",
            icon: "circle-exclamation",
          });
          this.checkExpires();
        }
      },

      logoutNotifs() {
        console.log(this.$nuxt.logoutNotifs)
        if (this.$_.size(this.$nuxt.logoutNotifs) > 0 && this.$nuxt.logoutNotifs.find(user => user.email !== this.$nuxt.userData.email)) {
          this.$toast.show(this.$nuxt.logoutNotifs[this.$nuxt.logoutNotifs.length - 1].notif, {
            type: this.$nuxt.logoutNotifs[this.$nuxt.logoutNotifs.length - 1].alert,
            duration: 2000,
            position: "top-right",
            icon: "circle-exclamation",
          });
        }
      },

      loginNotifs() {
        if (this.$_.size(this.$nuxt.loginNotifs) > 0 && this.$nuxt.loginNotifs.find(user => user.email !== this.$nuxt.userData.email)) {
          this.$toast.show(this.$nuxt.loginNotifs[this.$nuxt.loginNotifs.length - 1].notif, {
            type: this.$nuxt.loginNotifs[this.$nuxt.loginNotifs.length - 1].alert,
            duration: 2000,
            position: "top-right",
            icon: "circle-exclamation",
          });
        }
      },

      notifs() {
        if (this.$_.size(this.$nuxt.notifs) > 0) {
          if (
            this.$nuxt.notifs[0].user &&
            this.$nuxt.loginNotifs.find(user => user.email === this.$nuxt.userData.email)
            ) {
            this.checkExpires();
        }
      }
    },
  },
};
</script>
