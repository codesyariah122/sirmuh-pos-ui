/**
 *
 * @param  props
 * @returns Inject
 * @author Puji Ermanto <puji.ermanto@gmail.com>
 */

export default {
  data() {
    return {
      idleTime: 900000, // Waktu idle dalam milidetik (15 menit)
      logoutTimer: null,
    };
  },

  beforeMount() {
    this.authTokenStorage();
  },

  mounted() {
    this.resetLogoutTimer();
    window.addEventListener("mousemove", this.resetLogoutTimer);
    window.addEventListener("keydown", this.resetLogoutTimer);
    window.addEventListener("resize", this.resetLogoutTimer);
  },
  methods: {
    authTokenStorage() {
      this.$store.dispatch("auth/storeAuthToken", "auth");
    },

    resetLogoutTimer() {
      clearTimeout(this.logoutTimer);
      this.logoutTimer = setTimeout(() => {
        // Panggil metode logout atau logika logout
        console.log("Tidak ada aktivitas, silahkan login ulang");
        this.logoutSession();
      }, this.idleTime);
    },

    removeAuth() {
      this.$store.dispatch("auth/removeAuthToken", "auth");
      this.$store.dispatch("auth/removeExpiredLogin", "expired_at");
    },

    logoutSession() {
      this.globalLoading = true;
      const endPoint = `/logout`;
      this.$api.defaults.headers.common["Accept"] = "application/json";
      this.$api.defaults.headers.common[
        "Authorization"
        ] = `Bearer ${this.token.token}`;

      this.$api
      .post(endPoint)
      .then(({ data }) => {
        if (data.success) {
          this.$swal({
            title: "Bye ...",
            text: "Tidak ada aktifitas , silahkan login ulang 🔌",
            imageUrl: "https://cdn.dribbble.com/users/99875/screenshots/6577029/2019-06-03_paddle-ball.gif",
            imageHeight: 600,
            imageAlt: "A tall image"
          });
          console.log("Logout Tanpa aktivitas 🔌");
          this.removeAuth();
          setTimeout(() => {
            this.$router.replace("/");
          }, 500);
        }
      })
      .catch((err) => console.log(err));
    },
  },
  beforeDestroy() {
    clearTimeout(this.logoutTimer);
    window.removeEventListener("mousemove", this.resetLogoutTimer);
    window.removeEventListener("keydown", this.resetLogoutTimer);
    window.removeEventListener("resize", this.resetLogoutTimer);
  },

  computed: {
    token() {
      return this.$store.getters["auth/getAuthToken"];
    },
  },
};
