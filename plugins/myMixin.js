/**
 * @author: pujiermanto@gmail.com
 * @globals: method reusable for any component and any source
 */
import Vue from "vue";

const myMixin = {
  data() {
    return {
      successCopy: false,
      copyId: null,
      soundUrl: `${process.env.NUXT_ENV_ASSET_PUBLIC_URL}/assets/sound`,
      playSound: false,
      logoutSound: false,
      loginSound: false,
      viewAll: false,
      viewAllPembelianLangsung: false,
      viewAllPembelianPO: false,
      viewAllPenjualanToko: false,
      viewAllPenjualanPO: false,
      viewAllPenjualanPartai: false,
      viewAllHutang: true,
      viewAllPiutang: true,
      viewAllLabaRugi: true,
      viewAllPemasukan: false,
      viewAllMutasi: false,
      viewAllReturnPenjualan: false,
      viewAllReturnPembelian: false,
      viewAllKoreksiStok: false,
      color: "light",
      showSidebar: false,
      showNotif: false,
      collapseActiveGlobal: false,
      globalLoading: null,
      globalLoadingMessage: null,
      globalOptions: "",
      globalMessage: "",
      expires_at: null,
      api_url: process.env.NUXT_ENV_API_URL,
      app_token: process.env.NUXT_ENV_APP_TOKEN,
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
      logoutNotifs: [],
      loginNotifs: [],
      listNotifs: [],
      showInputPassword: null,
      changeUserPassword: null,
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
    // this.pingConnection();
  },


  methods: {
    authTokenStorage() {
      this.$store.dispatch("auth/storeAuthToken", "auth");
    },

    copyClipboard(val, id) {
      const textToCopy = val.trim();
      if(textToCopy) {
        this.successCopy = !this.successCopy
        this.copyId = id;
        this.$copyText(textToCopy);
      }
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


    pingConnection() {
      setInterval(() => {
        const endPoint = `/ping-test`;
        const config = {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${this?.token?.token}`,
          },
        };

        this.$api.defaults.headers.common["Sirmuh-Key"] = process.env.NUXT_ENV_APP_TOKEN;

        this.$api.get(endPoint, config)
        .then(({ data }) => {
          if (data.success) {
            this.internet = data;
            if (data.speed < 256) {
              console.log(`Speed : ${data.speed}`)
              // this.$router.push('/dashboard/errors');
            }
          }
        })
        .catch((err) => {
          console.log("Error Access " + err.message);
        });
      }, 5000);
    },


    checkNewData() {
      window.Echo.channel(process.env.NUXT_ENV_PUSHER_CHANNEL).listen(
        "EventNotification",
        (e) => {
         this.showNotif = true
         this.notifs.push(e[0]);
         this.messageNotifs = e[0].notif;
         this.alertType = e[0].alert;
         this.listNotifs.push(e[0])
       }
       );
    },

    forbidenLoginEvent() {
      window.Echo.channel(process.env.NUXT_ENV_PUSHER_CHANNEL).listen(
        "ForbidenLoginEvent",
        (e) => {
         this.showNotif = true          
         this.forbidenNotifs.push(e[0]);
         this.listNotifs.push(e[0])
       }
       );
    },

    logoutEvent() {
      window.Echo.channel(process.env.NUXT_ENV_PUSHER_CHANNEL).listen(
        "LogoutEvent",
        (e) => {
          this.logoutSound = true;
          this.showNotif = true       
          this.logoutNotifs.push(e[0]);
          this.listNotifs.push(e[0])
        }
        );
    },

    loginEvent() {
      window.Echo.channel(process.env.NUXT_ENV_PUSHER_CHANNEL).listen(
        "LoginEvent",
        (e) => {
          this.loginSound = true;
          this.showNotif = true;
          this.loginNotifs.push(e[0]);
          this.listNotifs.push(e[0]);
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

    logoutWithoutToken() {
      const endPoint = `/logout-without-token`;
      this.$api.defaults.headers.common["Accept"] = "application/json";
      this.$api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      this.$api.defaults.headers.common["Sirmuh-Key"] =
      process.env.NUXT_ENV_APP_TOKEN;
      this.$api
      .post(endPoint)
      .then(({ data }) => {
        if (data.success) {
          setTimeout(() => {
            this.$nuxt.showSidebar = false;
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
                this.$nuxt.showSidebar = false;
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
      this.logoutSound = true;
      this.globalLoading = true;
      const endPoint = `/force-logout`;
      this.$api.defaults.headers.common["Accept"] = "application/json";
      this.$api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      this.$api.defaults.headers.common["Sirmuh-Key"] =
      process.env.NUXT_ENV_APP_TOKEN;
      const data = {
        token: token
      }
      this.$api
      .post(endPoint, data)
      .then(({ data }) => {
        if(data.error) {
          setTimeout(() => {
            this.$nuxt.showSidebar = false;
            this.$swal(`${data.message}!`, "", "info");
            this.globalMessage = "Silahkan login kembali !";
            this.removeAuth();
            this.$router.replace("/auth/login");
          }, 1000);
        }

        if (data.success) {
          setTimeout(() => {
            this.$nuxt.showSidebar = false;
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
      .catch((err) => {
        console.log(err)
      });
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
              this.$nuxt.showSidebar = false;
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
        this.loading = true
        this.globalLoading = true;
        this.globalOptions = "logout";
        this.$nuxt.globalLoadingMessage = "Proses memeriksa keamanan ...";
        this.listNotifs = [];
        this.$swal({
          title: `kamu akan segera keluar dari Dashboard  ?`,
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
             this.$swal(`Logout Berhasil!`, "", "success");
             this.removeAuth();
             this.$router.replace("/");
           })
            .catch((err) => console.log(err))
            .finally(() => {
              this.$nuxt.globalLoadingMessage =
              "Proses pengecekan data user ...";
              this.loading = false
              this.globalLoading = false;
              this.globalOptions = "";
            });
          } else if (result.isDenied) {
            this.loading = false
            this.globalLoading = false;
            this.$swal("Changes are not saved", "", "info");
          }
        });
      } catch (err) {
        console.log(err);
      }
    },

    logoutFromLanding() {
      try {
        this.loading = true
        this.globalLoading = true;
        this.globalOptions = "logout";
        this.$nuxt.globalLoadingMessage = "Proses memeriksa keamanan ...";
        this.listNotifs = [];
        this.$swal({
          title: `kamu akan segera keluar dari Dashboard  ?`,
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
             this.$swal(`Logout Berhasil!`, "", "success");
             this.removeAuth();
             this.$router.replace("/");
           })
            .catch((err) => console.log(err))
            .finally(() => {
              this.$nuxt.globalLoadingMessage =
              "Proses pengecekan data user ...";
              this.loading = false
              this.globalLoading = false;
              this.globalOptions = "";
              setTimeout(() => {
                location.reload();
              }, 1000)
            });
          } else if (result.isDenied) {
            this.loading = false
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
        token: this.token
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
