<template>
  <div class="flex flex-wrap mt-4">
    <div :class="`${$nuxt.showSidebar ? 'w-full mb-12 px-12' : 'max-w-full'}`">
      <cards-card-table
        color="light"
        title="DATA LAPORAN HUTANG"
        types="data-laporan-hutang"
        queryType="DATA_LAPORAN_HUTANG"
        queryMiddle="data-laporan-hutang"
        :headers="headers"
        :columns="items"
        :loading="loading"
        :success="success"
        :paging="paging"
        :messageAlert="message_success"
        :orderBy="orderBy"
        @filter-data="handleFilterBarang"
        @close-alert="closeSuccessAlert"
        @deleted-data="deleteBarang"
        @sort-data="handleSortData"
      />

      <div class="mt-6 -mb-2">
        <div class="flex justify-center items-center">
          <molecules-pagination
            :links="links"
            :paging="paging"
            @fetch-data="getLaporanHutang"
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
import { HUTANG_DATA_TABLE } from "~/utils/table-hutang";
import { getData, deleteData } from "~/hooks/index";

export default {
  name: "data-laporan-hutang",
  layout: "admin",

  data() {
    return {
      current: this.$route.query["current"],
      loading: null,
      options: "",
      success: null,
      message_success: "",
      headers: [...HUTANG_DATA_TABLE],
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
        field: "tanggal",
        name: "tanggal",
        type: "ASC",
      },
    };
  },

  created() {
    this.checkNewData();
  },

  mounted() {
    this.getLaporanHutang(this.current ? Number(this.current) : 1, {});
  },

  methods: {
    handleFilterBarang(param, types) {
      if (types === "data-laporan-hutang") {
        this.getLaporanHutang(1, param, true);
      }
    },

    handleSortData(param, types) {
      if (types === "data-laporan-hutang") {
        this.getLaporanHutang(1, param, false);
      }
    },

    getLaporanHutang(page = 1, param = {}, loading) {
      if (this.$_.size(this.$nuxt.notifs) > 0) {
        // console.log(this.$nuxt.notifs[0].user.email);
        // console.log(this.$nuxt.userData.email);

        if (this.$nuxt.notifs[0].user.email === this.$nuxt.userData.email) {
          console.log("Kesini loading bro");
          this.loading = true;
        } else {
          this.loading = false;
        }
      } else {
        this.loading = loading;
      }
      getData({
        api_url: `${this.api_url}/data-hutang?page=${page}${
          param.nama
            ? "&keywords=" + param.keywords
            : param.method
            ? "&sort_name=" + param.name + "&sort_type=" + param.type
            : ""
        }`,
        token: this.token.token,
        api_key: process.env.NUXT_ENV_APP_TOKEN,
      })
        .then((data) => {
          console.log(data.data);
          let cells = [];
          if (data?.success) {
            data?.data?.map((cell) => {
              const prepareCell = {
                id: cell?.id,
                kode: cell?.kode,
                tanggal: cell?.tanggal,
                supplier: cell?.supplier,
                jumlah: cell?.jumlah,
                kode_kas: cell?.kode_kas,
                operator: cell?.operator,
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
        .catch((err) => console.log(err));
    },

    deleteBarang(id) {
      this.loading = true;
      this.options = "delete-data-laporan-hutang";
      deleteData({
        api_url: `${this.api_url}/data-data-laporan-hutang/${id}`,
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
        this.getLaporanHutang(this.paging.current);
      }
    },
  },
};
</script>
