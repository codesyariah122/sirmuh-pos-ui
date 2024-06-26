<template>
  <div>
    <div v-if="loading">
      <molecules-row-loading :loading="loading" :options="options" />
    </div>

    <div class="relative">
      <admin-navbar ref="layoutRef" />
      <header-stats />

      <div class="w-full py-0 -mt-20 bg-blueGray-500">
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
  name: "cashier-layout",
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
      loading: this.globalLoading,
      options: this.globalOptions,
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
  },


  methods: {
    checkExpires() {
      if (this.$_.isObject(this.token)) {
        this.loading = false;
        const endPoint = `/user-data`;
        const config = {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${this?.token?.token}`,
            "Sirmuh-Key": process.env.NUXT_ENV_APP_TOKEN,
          },
        };
        this.$api
          .get(endPoint, config)
          .then(({ data }) => {
            const roles = this.$role(data?.data?.roles[0]?.name);
            const now = this.$moment().format("LLLL");
            const expires_at = this.$moment(data.data.expires_at).format("LLL");

            this.roles = roles;

            this.userRoles = roles;

            this.userEmail = data.data.email;

            if (now > expires_at && data.data.remember_token === null) {
              this.$toast.show("Sesi login telah habis", {
                type: "info",
                duration: 2000,
                position: "top-right",
              });

              this.sesiLogout(roles);
              this.$store.dispatch("auth/removeAuthToken", "auth");
              this.$store.dispatch("auth/removeExpiredLogin", "expired_at");
            }
          })
          .finally(() => {
            setTimeout(() => {
              this.loading = false;
            }, 1500);
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
              setTimeout(() => {
                this.$router.replace("/");
              }, 500);
            }
          });
      } else {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Error Access!",
        });
        this.$router.replace("/");
      }
    },
  },

  computed: {
    token() {
      return this.$store.getters["auth/getAuthToken"];
    },
  },

  watch: {
    forbidenNotifs() {
      if (this.$nuxt.forbidenNotifs[0].token == this.token.token) {
        this.$toast.show(this.forbidenNotifs[0].notif, {
          type: this.forbidenNotifs[0].alert,
          duration: 2500,
          position: "top-right",
          icon: "circle-exclamation",
        });
        this.checkExpires();
      }
    },

    logoutNotifs() {
      if (this.$nuxt.logoutNotifs[0].email !== this.$nuxt.userData.email) {
        this.$toast.show(this.$nuxt.logoutNotifs[0].notif, {
          type: this.logoutNotifs[0].alert,
          duration: 2000,
          position: "top-right",
          icon: "circle-exclamation",
        });
      }
    },

    loginNotifs() {
      if (this.$nuxt.loginNotifs[0].email !== this.$nuxt.userData.email) {
        this.$toast.show(this.$nuxt.loginNotifs[0].notif, {
          type: this.loginNotifs[0].alert,
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
          this.$nuxt.notifs[0].user.email === this.$nuxt.userData.email
        ) {
          this.$toast.show(this.$nuxt.messageNotifs, {
            type: this.$nuxt.alertType,
            duration: 2000,
            position: "top-right",
            icon: "circle-exclamation",
          });
          this.checkExpires();
        }
      }
    },
  },
};
</script>
