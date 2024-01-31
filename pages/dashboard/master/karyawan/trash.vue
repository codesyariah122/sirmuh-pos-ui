<template>
  <div class="flex flex-wrap mt-4">
    <div :class="`${$nuxt.showSidebar ? 'w-full mb-12 px-6' : 'max-w-full'}`">
      <cards-card-table
        color="light"
        title="KARYAWAN TRASHED"
        :headers="headers"
        :columns="items"
        :loading="loading"
        types="data-karyawan-trash"
        queryType="DATA_KARYAWAN"
        :parentRoute="stringRoute"
        :typeRoute="typeRoute"
        :success="success"
        :messageAlert="message_success"
        @close-alert="closeSuccessAlert"
        @deleted-data="deletedData"
        @restored-data="restoreData"
      />
    </div>
  </div>
</template>

<script>
/**
 * @param {string}
 * @returns {string}
 * @author Puji Ermanto <puuji.ermanto@gmail.com>
 * @vue tolol anjing developer vuejs mah
 */
import { KARYAWAN_DATA_TABLE } from "~/utils/table-data-karyawan";
import { getData, deleteData, totalTrash, restoredData } from "~/hooks/index";

export default {
  name: "karyawan-trash",
  layout: "admin",

  data() {
    return {
      loading: null,
      options: "",
      success: null,
      message_success: "",
      headers: [...KARYAWAN_DATA_TABLE],
      api_url: process.env.NUXT_ENV_API_URL,
      items: [],
      routePath: this.$route.path,
      stringRoute: null,
      typeRoute: null,
      activation_id: null,
      queryParam: this.$route.query.type,
      totals: 0,
    };
  },

  created() {
    this.checkNewData();
  },

  mounted() {
    this.getKaryawanTrash(true);
    this.generatePath();
  },

  methods: {
    generatePath() {
      const pathSegments = this.routePath.split("/");
      const stringRoute = pathSegments[2];
      const typeRoute = pathSegments[3];
      this.stringRoute = stringRoute;
      this.typeRoute = typeRoute;
    },

    getKaryawanTrash(loading) {
      if (this.$_.size(this.$nuxt.notifs) > 0) {
        if (this.$nuxt.notifs[0].user.email === this.$nuxt.userData.email) {
          this.loading = true;
        } else {
          this.loading = false;
        }
      } else {
        this.loading = loading;
      }
      getData({
        api_url: `${this.api_url}/data-trash?type=${this.queryParam}`,
        api_key: process.env.NUXT_ENV_APP_TOKEN,
        token: this.token.token,
      })
        .then((data) => {
          this.totals = data?.data?.data.length;
          let cells = [];
          if (data.success) {
            const results = data?.data?.data;
            results.map((cell) => {
              console.log(cell);
              const prepareCell = {
                id: cell?.id,
                nama: cell?.nama,
                kode: cell?.kode,
                level: cell?.level,
                users: cell?.users,
              };
              cells.push(prepareCell);
            });

            this.items = [...cells];
          }
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false;
          }, 1500);
        })
        .catch((err) => console.log(err));
    },

    deletedData(id) {
      if (this.$_.size(this.$nuxt.notifs) > 0) {
        if (this.$nuxt.notifs[0].user.email === this.$nuxt.userData.email) {
          this.loading = true;
        }
      } else {
        this.loading = true;
      }
      this.options = "delete-karyawan";
      deleteData({
        api_url: `${this.api_url}/data-trash/${id}?type=${this.queryParam}`,
        token: this.token.token,
        api_key: process.env.NUXT_ENV_APP_TOKEN,
      })
        .then((data) => {
          if (data.success) {
            // this.$toast.show("Data barang successfully destroyed !", {
            //   type: "error",
            //   duration: 5000,
            //   position: "top-right",
            //   icon: "dumpster-fire",
            // });
            this.success = true;
            if (this.totals === 1) {
              this.$router.go(-1);
            } else {
              this.message_success = data.message;
              this.scrollToTop();
            }
            setTimeout(() => {
              this.loading = false;
              this.options = "";
            }, 1500);
          }
        })
        .catch((err) => console.log(err));
    },

    restoreData(id) {
      if (this.$_.size(this.$nuxt.notifs) > 0) {
        if (this.$nuxt.notifs[0].user.email === this.$nuxt.userData.email) {
          this.loading = true;
        }
      } else {
        this.loading = true;
      }
      this.options = "restore-karyawan";
      restoredData({
        api_url: `${this.api_url}/data-trash/${id}?type=${this.queryParam}`,
        token: this.token.token,
        api_key: process.env.NUXT_ENV_APP_TOKEN,
      })
        .then((data) => {
          if (data.success) {
            this.message_success = data.message;
            // if (this.$_.size(this.$nuxt.notifs) > 0) {
            //   if (
            //     this.$nuxt.notifs[0].user.email === this.$nuxt.userData.email
            //   ) {
            //     this.$toast.show("Data barang successfully restored !", {
            //       type: "success",
            //       duration: 5000,
            //       position: "top-right",
            //       icon: "check-double",
            //     });
            //   }
            // }
            if (this.totals === 1) {
              this.$router.go(-1);
            } else {
              this.success = true;
              this.scrollToTop();
            }
            setTimeout(() => {
              this.loading = false;
              this.options = "";
            }, 1500);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    closeSuccessAlert() {
      this.success = false;
      this.message = "";
    },
  },

  watch: {
    notifs() {
      if (this.$_.size(this.$nuxt.notifs) > 0) {
        if (this.$nuxt.notifs[0].routes === "karyawan") {
          this.getKaryawanTrash(false);
        }
      }
    },
  },
};
</script>
