/**
 * @author: pujiermanto@gmail.com
 * @globals: method reusable for any component and any source
 */

export default {
  data() {
    return {
      globalLoading: null,
      globalOptions: "",
      globalMessage: "",
      expires_at: null,
      api_url: process.env.NUXT_ENV_API_URL,
      notifs: [],
      newViewersNotifs: [],
      dataNotifs: [],
      updateProfileNotifs: [],
      userDontaionLoginNotifs: [],
      messageNotifs: null,
      messageNotif: "",
      userDonationLoginMessage: "",
      userEmail: "",
      emailForbaiden: "",
      cells: [],
      userData: [],
      userName: "",
      tokenLogins: "",
    };
  },

  beforeMount() {
    this.authTokenStorage();
  },
  created() {
    this.checkNewData();
  },

  methods: {
    authTokenStorage() {
      this.$store.dispatch("auth/storeAuthToken", "auth");
    },

    checkNewData() {
      window.Echo.channel(process.env.NUXT_ENV_PUSHER_CHANNEL).listen(
        "EventNotification",
        (e) => {
          this.notifs.push(e[0]);
          this.messageNotifs = e[0].notif;
          // if(e[0].type !== 'logout') {
          // }
        }
      );
    },

    checkUpdateEvent() {
      window.Echo.channel(process.env.NUXT_ENV_PUSHER_CHANNEL).listen(
        "UpdateProfileEvent",
        (e) => {
          this.updateProfileNotifs.push(e[0]);
        }
      );
    },

    removeAuth() {
      this.$store.dispatch("auth/removeAuthToken", "auth");
      this.$store.dispatch("auth/removeExpiredLogin", "expired_at");
    },

    roleUserExit() {
      try {
        const endPoint = `/logout`;
        this.$api.defaults.headers.common["Accept"] = "application/json";
        this.$api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${this.token.token}`;
        this.$api.defaults.headers.common["Sirmuh-Key"] =
          process.env.NUXT_ENV_APP_TOKEN;

        this.$api
          .post(endPoint)
          .then(({ data }) => {
            if (data.success) {
              this.$swal({
                icon: "error",
                title: "Oops...",
                text: "you are not allowed to access this page!",
              });
              this.removeAuth();
              setTimeout(() => {
                if (this.path === "/") {
                  location.reload();
                } else {
                  this.$router.replace("/");
                }
              }, 500);
            }
          })
          .catch((err) => console.log(err));
      } catch (err) {
        console.log(err);
      }
    },

    forceLogout(token) {
      this.globalLoading = true;
      const endPoint = `/logout`;
      this.$api.defaults.headers.common["Accept"] = "application/json";
      this.$api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      this.$api.defaults.headers.common["Sirmuh-Key"] =
        process.env.NUXT_ENV_APP_TOKEN;
      this.$api
        .post(endPoint)
        .then(({ data }) => {
          if (data.success) {
            setTimeout(() => {
              this.$swal(`Silahkan login kembali!`, "", "info");
              this.globalMessage = "Silahkan login kembali !";
              this.removeAuth();
              this.$router.replace("/");
            }, 1000);
          }
        })
        .finally(() => {
          setTimeout(() => {
            this.globalLoading = false;
          }, 500);
        })
        .catch((err) => console.log(err.message));
    },

    sesiLogout(roles) {
      const endPoint = `/logout`;
      this.$api.defaults.headers.common["Accept"] = "application/json";
      this.$api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${this.token.token}`;
      this.$api.defaults.headers.common["Sirmuh-Key"] =
        process.env.NUXT_ENV_APP_TOKEN;
      this.$api
        .post(endPoint)
        .then(({ data }) => {
          if (data.success) {
            this.$swal(`Sesi login habis!`, "", "success");
            this.removeAuth();
            setTimeout(() => {
              if (this.path === "/") {
                location.reload();
              } else {
                this.$router.replace("/");
              }
            }, 500);
          }
        })
        .catch((err) => console.log(err));
    },

    logout() {
      try {
        this.globalLoading = true;
        this.globalOptions = "logout";
        this.$swal({
          title: `kamu akan segera keluar dari Dashboard ${this.roles} ?`,
          showDenyButton: false,
          showCancelButton: true,
          confirmButtonText: "Keluar",
          denyButtonText: `Batal`,
        }).then((result) => {
          if (result.isConfirmed) {
            const endPoint = `/logout`;
            this.$api.defaults.headers.common["Accept"] = "application/json";
            this.$api.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${this.token.token}`;
            this.$api.defaults.headers.common["Sirmuh-Key"] =
              process.env.NUXT_ENV_APP_TOKEN;
            this.$api
              .post(endPoint)
              .then(({ data }) => {
                if (data.success) {
                  setTimeout(() => {
                    this.$swal(`Logout Berhasil!`, "", "success");
                    this.removeAuth();
                    this.$router.replace("/");
                  }, 1000);
                }
              })
              .catch((err) => console.log(err))
              .finally(() => {
                setTimeout(() => {
                  this.globalLoading = false;
                  this.globalOptions = "";
                }, 500);
              });
          } else if (result.isDenied) {
            this.globalLoading = false;
            this.$swal("Changes are not saved", "", "info");
          }
        });
      } catch (err) {
        console.log(err);
      }
    },

    checkUserLogin() {
      try {
        if (_.isObject(this.token)) {
          const endPoint = `/user-data`;
          const config = {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${this?.token?.token}`,
            },
          };
          this.$api.defaults.headers.common["Sirmuh-Key"] =
            process.env.NUXT_ENV_APP_TOKEN;
          this.$api
            .get(endPoint, config)
            .then(({ data }) => {
              this.userData = { ...data.data };
              data.data.logins.map((login) => {
                this.tokenLogins = login.user_token_login;
              });
            })
            .catch((err) => {
              console.log("Error Access " + err.message);
            });
        } else {
          // this.$swal({
          //   icon: "error",
          //   title: "Oops...",
          //   text: "Error Access!",
          // });
          // this.$router.replace("/");
          console.log("loading ....");
        }
      } catch (err) {
        console.log(err);
      }
    },

    getTotalUser() {
      this.$store.dispatch("totals/totalDataQuery", {
        api_url: this.api_url,
        type: "TOTAL_USER",
        token: this.token,
      });
    },

    getTotalBarang() {
      this.$store.dispatch("totals/totalDataQuery", {
        api_url: this.api_url,
        type: "TOTAL_BARANG",
        token: this.token,
      });
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },

    scrollToBottom() {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
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
        console.log(":CREATED");
      }
    },
  },
};
