<template>
  <div class="flex flex-wrap mt-4">
    <div :class="`${$nuxt.showSidebar ? 'w-full mb-12 ml-6' : 'max-w-full'}`">
      <cards-card-table
      color="light"
      title="Barang Trashed"
      :headers="headers"
      :columns="items"
      :loading="loading"
      :trashed="true"
      types="data-barang-trash"
      queryType="DATA_BARANG"
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
 */
  import { BARANG_DATA_TRASH_TABLE } from "~/utils/table-data-barang-trash";
  import { getData, deleteData, totalTrash, restoredData } from "~/hooks/index";

  export default {
    name: "barang-trash",
    layout: "admin",

    data() {
      return {
        loading: null,
        options: "",
        success: null,
        message_success: "",
        headers: [...BARANG_DATA_TRASH_TABLE],
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
      this.$nuxt.checkNewData();
      // this.checkNewData();
    },

    mounted() {
      this.$nuxt.checkNewData();
      this.getBarangTrash(true);
      this.generatePath();
    },

    methods: {
      generatePath() {
        const pathSegments = this.routePath.split("/");
        const stringRoute = pathSegments[2];
        const typeRoute = pathSegments[3];
        console.log(typeRoute);
        this.stringRoute = stringRoute;
        this.typeRoute = typeRoute;
      },

      getBarangTrash(loading) {
        this.loading = loading;
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
              const prepareCell = {
                id: cell?.id,
                kode: cell?.kode,
                nama: cell?.nama,
                photo: cell?.photo,
                kategori: cell?.kategori,
                satuanbeli: cell?.satuanbeli,
                satuan: cell?.satuan,
                hargabeli: cell?.hargabeli,
                isi: cell?.isi,
                stok: cell?.toko,
                stok_akhir: cell?.last_qty,
                hpp: cell?.hpp,
                harga_toko: cell?.harga_toko,
                harga_partai: cell?.harga_partai
              };
              cells.push(prepareCell);
            });

            this.items = [...cells];
            setTimeout(() => {
              this.loading = false;
            }, 1500);
          }
        })
        .catch((err) => console.log(err));
      },

      deletedData(id) {
        this.loading = true;
        this.options = "delete-barang";
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
        this.loading = true;
        this.options = "restore-barang";
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
          if (this.$nuxt.notifs.find(item => item.routes === "data-barang")) {
            this.getBarangTrash(false);
          }
        }
      },
    },
  };
</script>
