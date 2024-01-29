<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <cards-card-table color="dark" title="TABUNGAN PELANGGAN" types="tabungan-pelanggan" queryType="TABUNGAN PELANGGAN"
        queryMiddle="tabungan-pelanggan" :parentRoute="stringRoute" :typeRoute="typeRoute" :headers="headers"
        :columns="items" :loading="loading" :success="success" :paging="paging" :messageAlert="message_success"
        @filter-data="handleFilterBarang" @close-alert="closeSuccessAlert" @deleted-data="deleteBarang" />

      <div class="mt-6 -mb-2">
        <div class="flex justify-center items-center">
          <molecules-pagination :links="links" :paging="paging" @fetch-data="getBarangData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * @param {string}
 * @returns {string}
 * @author Puji Ermanto <puuji.ermanto@gmail.com>
 */
import { BARANG_DATA_TABLE } from "~/utils/table-data-barang";
import { getData, deleteData } from "~/hooks/index";

export default {
  name: "tabungan-pelanggan",
  layout: "admin",

  data() {
    return {
      current: this.$route.query["current"],
      routePath: this.$route.path,
      stringRoute: null,
      typeRoute: null,
      loading: null,
      options: "",
      success: null,
      message_success: "",
      headers: [...BARANG_DATA_TABLE],
      api_url: process.env.NUXT_ENV_API_URL,
      items: [],
      links: [],
      paging: {
        current: null,
        from: null,
        last: null,
        per_page: null,
        total: null,
      },
    };
  },

  created() {
    this.checkNewData();
  },

  mounted() {
    this.getBarangData(this.current ? Number(this.current) : 1, {});
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

    handleFilterBarang(param, types) {
      if (types === "tabungan-pelanggan") {
        this.getBarangData(1, param);
      }
    },

    getBarangData(page = 1, param = {}) {
      if (this.$_.size(this.$nuxt.notifs) > 0) {
        if (this.$nuxt.notifs[0]?.user?.email === this.$nuxt.userData.email) {
          this.loading = true;
        } else {
          if (this.current) {
            this.loading = true;
          } else {
            this.loading = false;
          }
        }
      } else {
        this.loading = true;
      }
      getData({
        api_url: `${this.api_url}/data-barang?page=${page}${param.nama
          ? "&keywords=" + param.nama
          : param.kategori
            ? "&kategori=" + param.kategori
            : param.tgl_terakhir
              ? "&tgl_terakhir=" + param.tgl_terakhir
              : ""
          }`,
        token: this.token.token,
        api_key: process.env.NUXT_ENV_APP_TOKEN,
      })
        .then((data) => {
          let cells = [];
          if (data?.success) {
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
                suppliers: cell?.suppliers && cell?.suppliers,
              };
              cells.push(prepareCell);
            });
            this.items = [...cells];

            this.links = data?.meta?.links;
            this.paging.current = data?.meta?.current_page;
            this.paging.from = data?.meta?.from;
            this.paging.last = data?.meta?.last_page;
            this.paging.per_page = data?.meta?.per_page;
            this.paging.total = data?.meta?.total;

            setTimeout(() => {
              this.loading = false;
            }, 1500);
          }
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        });
    },

    deleteBarang(id) {
      this.loading = true;
      this.options = "delete-tabungan-pelanggan";
      deleteData({
        api_url: `${this.api_url}/tabungan-pelanggan/${id}`,
        token: this.token.token,
        api_key: process.env.NUXT_ENV_APP_TOKEN,
      })
        .then((data) => {
          console.log(data);
          if (data.success) {
            this.message_success = data.message;
            // if (this.$_.size(this.$nuxt.notifs) > 0) {
            //   if (
            //     this.$nuxt.notifs[0].user.email === this.$nuxt.userData.email
            //   ) {
            //     this.$toast.show("Data barang successfully move to trash !", {
            //       type: "info",
            //       duration: 5000,
            //       position: "top-right",
            //       icon: "circle-exclamation",
            //     });
            //   }
            // }
            this.success = true;
            this.scrollToTop();
            setTimeout(() => {
              this.loading = false;
              this.options = "";
            }, 1500);
          }
        })
        .catch((err) => console.log(err));
    },

    closeSuccessAlert() {
      this.success = false;
      this.message = "";
    },
  },

  watch: {
    notifs() {
      if (this.$_.size(this.$nuxt.notifs) > 0) {
        console.log(this.$nuxt.notifs[0].routes);
        if (this.$nuxt.notifs[0].routes === "tabungan-pelanggan") {
          this.getBarangData(this.paging.current);
        }
      }
    },
  },
};
</script>
