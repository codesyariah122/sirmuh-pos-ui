<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <cards-card-table
        color="dark"
        title="Barang Trashed"
        :headers="headers"
        :columns="items"
        :loading="loading"
        types="data-barang-trash"
        queryType="DATA_BARANG"
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
import { BARANG_DATA_TABLE } from "~/utils/tables-organizations";
import { getData, deleteData, totalTrash, restoredData } from "~/hooks/index";

export default {
  name: "barang",
  layout: "admin",

  data() {
    return {
      loading: null,
      options: "",
      success: null,
      message_success: "",
      headers: [...BARANG_DATA_TABLE],
      api_url: process.env.NUXT_ENV_API_URL,
      items: [],
      notifs: [],
      activation_id: null,
      queryParam: this.$route.query.type,
      totals: 0,
    };
  },

  created() {
    this.checkNewData();
  },

  mounted() {
    this.getBarangTrash();
  },

  methods: {
    checkNewData() {
      window.Echo.channel(process.env.NUXT_ENV_PUSHER_CHANNEL).listen(
        "EventNotification",
        (e) => {
          // console.log(e[0].notif)
          this.notifs.push(e);
          this.messageNotifs = e[0].notif;
        }
      );
    },

    getBarangTrash() {
      getData({
        api_url: `${this.api_url}/data-trash?type=${this.queryParam}`,
        api_key: process.env.NUXT_ENV_APP_TOKEN,
        token: this.token.token,
      })
        .then(({ data }) => {
          this.totals = this.$_.size(data.data);
          let cells = [];
          data?.data?.map((cell) => {
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
              hpp: cell?.hpp,
              harga_toko: cell?.harga_toko,
              diskon: cell?.diskon,
              supplier: cell?.supplier,
              barcode: cell?.kode_barcode,
              tgl_terakhir: cell?.tgl_terakhir,
              expired:
                cell?.ada_expired_date !== "False" ? cell?.expired : null,
            };
            cells.push(prepareCell);
          });
          this.items = [...cells];
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
            if (this.totals > 1) {
              this.message_success = data.message;
              this.scrollToTop();
            } else {
              this.$router.go(-1);
            }
          }
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false;
            this.options = "";
          }, 1000);
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
          if (data.deleted_at === null) {
            this.$toast.show("Data barang successfully restored !", {
              type: "success",
              duration: 5000,
              position: "top-right",
              icon: "check-double",
            });
            if (this.totals > 1) {
              this.success = true;
              this.scrollToTop();
            } else {
              this.$router.go(-1);
            }
          }
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false;
            this.options = "";
          }, 1000);
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
      if (this.$_.size(this.notifs) > 0) {
        this.getBarangTrash();
      }
    },
  },
};
</script>
