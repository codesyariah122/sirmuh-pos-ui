<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <cards-card-table
        color="dark"
        title="KATEGORI BARANG"
        types="data-kategori"
        queryType="KATEGORI BARANG"
        queryMiddle="kategori-barang"
        :headers="headers"
        :columns="items"
        :loading="loading"
        :success="success"
        :messageAlert="message_success"
        @filter-data="handleFilterKategoriBarang"
        @close-alert="closeSuccessAlert"
        @deleted-data="deletedBank"
      />

      <div class="mt-6 -mb-2">
        <div class="flex justify-center items-center">
          <molecules-pagination
            :links="links"
            :paging="paging"
            @fetch-data="getKategoriBarang"
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
import { KATEGORI_BARANG_TABLE } from "~/utils/tables-organizations";
import { getData, deleteData } from "~/hooks/index";

export default {
  name: "data-kategori",
  layout: "admin",

  data() {
    return {
      current: this.$route.query["current"],
      loading: null,
      options: "",
      success: null,
      message_success: "",
      headers: [...KATEGORI_BARANG_TABLE],
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
    this.getKategoriBarang(this.current ? Number(this.current) : 1, {});
    this.checkUserLogin();
  },

  methods: {
    handleFilterKategoriBarang(param, types) {
      if (types === "data-kategori") {
        this.getKategoriBarang(1, param);
      }
    },
    getKategoriBarang(page = 1, param = {}) {
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
        api_url: `${this.api_url}/data-kategori?page=${page}${
          param.kode ? "&keywords=" + param.kode : ""
        }`,
        token: this.token.token,
        api_key: process.env.NUXT_ENV_APP_TOKEN,
      })
        .then((data) => {
          if (data.success) {
            this.loading = false;
          }

          let cells = [];
          data?.data?.map((cell) => {
            const prepareCell = {
              kode: cell?.kode,
              description: cell?.description,
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
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false;
          }, 1500);
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        });
    },

    deletedBank(id) {
      this.loading = true;
      this.options = "delete-bank";
      deleteData({
        api_url: `${this.api_url}/fitur/bank-management/${id}`,
        token: this.token.token,
        api_key: process.env.NUXT_ENV_APP_TOKEN,
      })
        .then((data) => {
          if (data.success) {
            // console.log(data.message)
            this.$toast.show("Bank data successfully move to trash !", {
              type: "info",
              duration: 5000,
              position: "top-right",
              icon: "circle-exclamation",
            });
            this.success = true;
            this.scrollToTop();
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

    closeSuccessAlert() {
      this.success = false;
      this.message = "";
    },
  },

  watch: {
    notifs() {
      if (this.$_.size(this.notifs) > 0) {
        this.getKategoriBarang(this.paging.current);
      }
    },
    dataNotifs() {
      if (this.$_.size(this.notifs) > 0) {
        if (this.token.token === this.tokenLogins) {
          // this.$toast.show(this.messageNotif, {
          //   type: "info",
          //   duration: 5000,
          //   position: "top-right",
          // });
          this.message_success = this.messageNotif;
        }
        this.getKategoriBarang();
      }
    },
  },
};
</script>
