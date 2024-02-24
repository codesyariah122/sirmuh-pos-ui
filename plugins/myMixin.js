/**
 * @author: pujiermanto@gmail.com
 * @globals: method reusable for any component and any source
 */
import Vue from "vue";

const myMixin = {
  data() {
    return {
      color: "light",
      showSidebar: false,
      isMobile: "",
      isChrome: "",
      globalCollapseShow: "hidden",
      startDownload: false,
      collapseActiveGlobal: false,
      globalLoading: null,
      globalOptions: "",
      globalMessage: "",
      globalLoadingMessage: "Proses mempersiapkan data ...",
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
      alertType: null,
      forbidenNotifs: [],
      loginNotifs: [],
      logoutNotifs: [],
      showInputPassword: null,
      changeUserPassword: null,
      roleId: null,
    };
  },

  beforeMount() {
    this.authTokenStorage();
  },
  created() {
    this.checkNewData();
    this.forbidenLoginEvent();
    this.logoutEvent();
    this.loginEvent();
  },

  mounted() {
    this.checkDevice();
    this.checkNewData();
    this.pingConnection();
  },

  methods: {
    pingConnection() {
      const endPoint = `/ping-test`;
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
        console.log(data)
      })
      .catch((err) => {
        console.log("Error Access " + err.message);
      });
    },

    authTokenStorage() {
      this.$store.dispatch("auth/storeAuthToken", "auth");
    },

    checkDevice() {
      const userAgent = navigator.userAgent;

      const isMobile = /Mobi|Android/i.test(userAgent);

      const isChrome = /Chrome/i.test(userAgent);
      const isFirefox = /Firefox/i.test(userAgent);
      const isSafari = /Safari/i.test(userAgent);
      const isEdge = /Edg/i.test(userAgent);
      const isIE = /Trident/i.test(userAgent);

      this.isMobile = isMobile;
      this.isChrome = isChrome;
    },

    checkUpdatePasswordUserKaryawan() {
      try {
        if (_.isObject(this.token)) {
          const endPoint = `/check-password-access`;
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
              if (data.success) {
                this.showInputPassword = !this.showInputPassword;
                this.changeUserPassword = !this.changeUserPassword;
              }

              if (data.error) {
                this.$swal({
                  icon: "error",
                  title: "Oops...",
                  text: data.message,
                });
              }
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

    checkRolesAccess() {
      try {
        if (_.isObject(this.token)) {
          const endPoint = `/check-roles-access`;
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
              if (data.error) {
                this.$swal({
                  icon: "error",
                  title: "Oops...",
                  text: data.message,
                });
                this.$router.go(-1);
              }
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

    checkNewData() {
      window.Echo.channel(process.env.NUXT_ENV_PUSHER_CHANNEL).listen(
        "EventNotification",
        (e) => {
          this.notifs.push(e[0]);
          this.messageNotifs = e[0].notif;
          this.alertType = e[0].alert;
        }
      );
    },

    forbidenLoginEvent() {
      window.Echo.channel(process.env.NUXT_ENV_PUSHER_CHANNEL).listen(
        "ForbidenLoginEvent",
        (e) => {
          if (e.length > 0) {
            this.forbidenNotifs.push(e[0]);
          } else {
            this.forbidenNotifs = [];
          }
        }
      );
    },

    loginEvent() {
      window.Echo.channel(process.env.NUXT_ENV_PUSHER_CHANNEL).listen(
        "LoginEvent",
        (e) => {
          this.loginNotifs = [];
          if (e.length > 0) {
            this.loginNotifs.push(e[0]);
          }
        }
      );
    },

    logoutEvent() {
      window.Echo.channel(process.env.NUXT_ENV_PUSHER_CHANNEL).listen(
        "LogoutEvent",
        (e) => {
          this.logoutNotifs = [];
          if (e.length > 0) {
            this.logoutNotifs.push(e[0]);
          }
        }
      );
    },

    hasType(array) {
      return this.$_.every(array, (item) => this.$_.has(item, "type"));
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
      this.roleUserExit();
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
                  this.showSidebar = false;
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
            this.showSidebar = false;
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
                this.showSidebar = false;
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
                    this.showSidebar = false;
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
          this.roleId = data?.data?.role;
          data.data.logins.map((login) => {
            this.tokenLogins = login.user_token_login;
          });
        })
        .catch((err) => {
          console.log("Error Access " + err.message);
        });
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

    topSellingProducts() {
      this.$store.dispatch("performances/topSellingProducts", {
        api_url: this.api_url,
        token: this.token,
      });
    },

    accountsPayableReport() {
      this.$store.dispatch("reports/accountsPayableReport", {
        api_url: this.api_url,
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
        return this.notifs;
      }
    },
    forbidenNotifs() {
      if (this.$_.size(this.forbidenNotifs) > 0) {
        console.log(":FORBIDEN__CREATED");
        return this.forbidenNotifs;
      }
    },
    loginNotifs() {
      if (this.$_.size(this.loginNotifs) > 0) {
        console.log(":LOGIN_CREATED");
        return this.loginNotifs;
      }
    },
    logoutNotifs() {
      if (this.$_.size(this.logoutNotifs) > 0) {
        console.log(":LOGOUT_CREATED");
        return this.logoutNotifs;
      }
    },
  },
};

Vue.mixin(myMixin);
