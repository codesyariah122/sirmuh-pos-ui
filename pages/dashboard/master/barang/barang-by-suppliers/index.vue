<template>
  <div class="flex flex-wrap mt-2">
    <div :class="`${$nuxt.showSidebar ? 'w-full mb-12 px-6' : 'max-w-full'}`">
      <cards-card-table
      color="light"
      title="BARANG BY SUPPLIERS"
      types="barang-by-suppliers"
      queryType="DATA_BARANG"
      queryMiddle="barang-by-suppliers"
      :orderBy="orderBy"
      :parentRoute="stringRoute"
      :typeRoute="typeRoute"
      :headers="headers"
      :columns="items"
      :loading="loading"
      :success="success"
      :paging="paging"
      :messageAlert="message_success"
      @filter-data="handleFilterBarang"
      @close-alert="closeSuccessAlert"
      @deleted-data="deleteBarang"
      @download-data="downloadData"
      @sort-data="handleSortData"
      />

      <div class="mt-6 -mb-2">
        <div class="flex justify-center items-center">
          <molecules-pagination
          :links="links"
          :paging="paging"
          @fetch-data="getBarangData"
          />
          <!-- <pagination :data="items" @pagination-change-page="getBarangData"/> -->
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
    name: "data-barang",
    layout: "admin",

    data() {
      return {
        showNotif: false,
        notifs: [],
        listNotifs: [],
        messageNotifs: null,
        messageNotif: "",
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
        orderBy: {
          field: "nama",
          name: "barang.nama",
          type: "ASC",
        },
      };
    },

    created() {
      this.checkNewEvent();
    },

    mounted() {
      this.getBarangData(this.current ? Number(this.current) : 1, {}, true);
      this.generatePath();
      this.checkNewEvent();
    },

    methods: {
      checkNewEvent() {
        window.Echo.channel(process.env.NUXT_ENV_PUSHER_CHANNEL).listen(
          "EventNotification",
          (e) => {
           console.log("Event received", e);
           console.log("This context:", this); 
           this.showNotif = true
           this.notifs.push(e[0]);
           this.messageNotifs = e[0].notif;
           this.alertType = e[0].alert;
           this.listNotifs.push(e[0])
         }
         );
      },

      generatePath() {
        const pathSegments = this.routePath.split("/");
        const stringRoute = pathSegments[2];
        const typeRoute = pathSegments[3];
        this.stringRoute = stringRoute;
        this.typeRoute = typeRoute;
      },

      handleFilterBarang(param, types) {
        if (types === "barang-by-suppliers") {
          if(param.keywords) {
            this.$router.push({
              path: '/dashboard/master/barang/barang-by-suppliers',
              query: {
                keywords: param.keywords
              }
            })
          } else {
           this.$router.push('/dashboard/master/barang/barang-by-suppliers')
         }
         this.getBarangData(1, param, false);
       }
     },

     handleSortData(param, types) {
      if (types === "barang-by-suppliers") {
        this.getBarangData(1, param, false);
      }
    },

    getBarangData(page = 1, param = {}, loading) {
      this.loading = loading;
      this.$nuxt.globalLoadingMessage = "Proses menyiapkan data barang ...";

      const keywords = this.$route.query["keywords"];

      const endPoint = `${this.api_url}/data-barang?page=${page}&keywords=${param.keywords ? param.keywords : keywords ? keywords : ""}${
        param.supplier
        ? "&supplier=" + param.supplier
        : param.start_date && param.end_date
        ? "&tgl_terakhir=" + param.start_date + param.end_date
        : param.start_date
        ? "&tgl_terakhir=" + param.start_date
        : param.end_date
        ? "&tgl_terakhir=" + param.end_date
        : param.method
        ? "&sort_name=" + param.name + "&sort_type=" + param.type
        : ""
      }`

      getData({
        api_url: endPoint,
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
              stok_akhir: cell?.last_qty,
              hpp: cell?.hpp,
              harga_toko: cell?.harga_toko,
              harga_partai: cell?.harga_partai,
              diskon: cell?.diskon,
              supplier: cell?.supplier,
              supplier_nama: cell?.supplier_nama,
              kode_supplier: cell?.kode_supplier,
              barcode: cell?.kode_barcode,
              tgl_terakhir: cell?.tgl_terakhir,
              expired:
              cell?.ada_expired_date !== "False" ? cell?.expired : null,
              suppliers: cell?.suppliers && cell?.suppliers,
              hutang: cell?.hutang,
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
        }
      })
      .finally(() => {
        this.loading = false;
      })
      .catch((err) => {
        this.loading = false;
        console.log(err);
      });
    },

    deleteBarang(id) {
      this.loading = true;
      this.options = "delete-barang";
      deleteData({
        api_url: `${this.api_url}/data-barang/${id}`,
        token: this.token.token,
        api_key: process.env.NUXT_ENV_APP_TOKEN,
      })
      .then((data) => {
        if (data.success) {
          this.message_success = data.message;
          this.success = true;
          this.scrollToTop();
          setTimeout(() => {
            this.loading = false;
            this.options = "";
          }, 500);
        }

        if (data.error) {
          this.$swal({
            icon: "error",
            title: "Oops...",
            text: data.message,
          });
          this.loading = false;
        }
      })
      .catch((err) => console.log(err));
    },

    downloadData(download) {
      if (download) {
      }
    },

    closeSuccessAlert() {
      this.success = false;
      this.message = "";
    },
  },

  watch: {
    notifs() {
      if (this.$_.size(this.$nuxt.notifs) > 0) {
        console.log(this.$nuxt.notifs)
        const relevantNotif = this.$nuxt.notifs.find((notif) => 
          ["data-barang", "pembelian-langsung", "purchase-order", "penjualan-toko", "penjualan-partai", "penjualan-po", "return-pembelian"].includes(notif.routes)
          );
        if (relevantNotif) {
          this.getBarangData(this.paging.current, {}, false);
        }
      }
    },
  },
};
</script>
