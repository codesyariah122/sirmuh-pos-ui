<template>
  <div class="flex flex-wrap mt-4">
    <div v-if="loading">
      <molecules-row-loading :loading="loading" :options="options" />
    </div>
    <div v-else :class="`${$nuxt.showSidebar ? 'w-full px-6' : 'max-w-full'}`">
      <cards-card-table
        color="light"
        title="RETURN PEMBELIAN"
        types="return-pembelian"
        pembelianType="pembelian-langsung"
        queryType="RETURN_PEMBELIAN"
        queryMiddle="return-pembelian"
        :parentRoute="stringRoute"
        :typeRoute="typeRoute"
        :headers="headers"
        :columns="items"
        :loading="loading"
        :success="success"
        :paging="paging"
        :messageAlert="message_success"
        @filter-data="handleFilter"
        @close-alert="closeSuccessAlert"
        @deleted-data="deletedReturnPembelian"
      />

      <div class="mt-6 -mb-2">
        <div class="flex justify-center items-center">
          <molecules-pagination
            :links="links"
            :paging="paging"
            @fetch-data="getReturnPembelian"
          />
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
import { RETURN_PEMBELIAN_TABLE } from "~/utils/table-return-pembelian";
import { getData, deleteData } from "~/hooks/index";

export default {
  name: "return-pembelian",
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
      headers: [...RETURN_PEMBELIAN_TABLE],
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
    this.getReturnPembelian(
      this.current ? Number(this.current) : 1,
      {view_all: false},
      true
    );
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

    handleFilter(param, types) {
      if (types === "return-pembelian") {
        this.getReturnPembelian(1, param, true);
      }
    },

    getReturnPembelian(page = 1, param = {}, loading) {
      this.loading = loading;
      this.$nuxt.globalLoadingMessage =
        "Proses menyiapkan data return pembelian ...";

      const endPoint = `${this.api_url}/data-return-pembelian?page=${page}&view_all=${param.view_all}${param.date ? "&date_transaction=" + param.date :""}`

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
                id_pembelian: cell?.id_pembelian,
                tanggal: cell?.tanggal,
                kode: cell?.kode,
                no_faktur: cell?.no_faktur,
                kode_kas: cell?.kode_kas,
                kas_id: cell?.kas_id,
                nama_kas: cell?.nama_kas,
                qty: cell?.qty,
                satuan: cell?.satuan,
                harga: cell?.harga,
                kembali: cell?.kembali,
                jumlah: cell?.jumlah,
                lunas: cell?.lunas,
                operator: cell?.operator,
                alasan: cell?.alasan,
                supplier: cell?.supplier,
                nama_supplier: cell?.nama_supplier,
                return: cell?.return,
                kode_barang: cell?.kode_barang,
                nama_barang: cell?.nama_barang
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
          setTimeout(() => {
            this.loading = false;
          }, 500);
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        });
    },

    deletedReturnPembelian(id) {
      this.loading = true;
      this.options = "pembelian-langsung";
      deleteData({
        api_url: `${this.api_url}/data-pembelian-langsung/${id}`,
        token: this.token.token,
        api_key: process.env.NUXT_ENV_APP_TOKEN,
      })
        .then((data) => {
          if (data.success) {
            this.message_success = data.message;
            this.success = true;

            this.scrollToTop();
            this.getReturnPembelian(1, {}, false)
            setTimeout(() => {
              this.loading = false;
              this.$swal({
                position: "top-end",
                icon: "success",
                title: data.message,
                showConfirmButton: false,
                timer: 1500
              })
              this.options = "";
            }, 500);
          }
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false
            this.$nuxt.globalLoadingMessage = "";
            this.getReturnPembelian(1, {}, false)
          }, 500)
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
        if (this.$nuxt.notifs.find(item => item.routes === "return-pembelian")) {
          this.getReturnPembelian(this.paging.current, {}, false);
        }
      }
    },
  },
};
</script>
