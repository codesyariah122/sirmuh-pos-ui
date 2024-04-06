<template>
  <div class="flex flex-wrap mt-12">
    <div class="w-full mb-12 px-4">
      <cards-card-table
        color="dark"
        :title="`CETAK STRUK PEMBAYARAN HUTANG - ${kode}`"
        types="cetak"
        queryType="CETAK_BAYAR_HUTANG"
        queryMiddle="cetak-bayar-hutang"
      />
    </div>
  </div>
</template>

<script>
/**
 * @param {string}
 * @returns {string}
 * @author Puji Ermanto <puji.ermanto@gmail.com>
 */
import { PEMBELIAN_LANGSUNG_TABLE } from "~/utils/table-pembelian-langsung";

export default {
  name: "cetak-pembelian",
  layout: "admin",

  data() {
    return {
      kode: this.$route.query["kode"],
      showModal: false,
      routePath: this.$route.path,
      stringRoute: null,
      typeRoute: null,
      loading: null,
      options: "",
      success: null,
      message_success: "",
      cetakStorage: localStorage.getItem("cetak_code")
        ? JSON.parse(localStorage.getItem("cetak_code"))
        : null,
      headers: [...PEMBELIAN_LANGSUNG_TABLE],
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
    this.getItemBayarHutang();
  },

  methods: {
    getItemBayarHutang() {
      if (
        this.cetakStorage !== null &&
        this.cetakStorage.ref_code === this.kode
      ) {
        console.log(this.cetakStorage.ref_code);
      } else {
        this.$router.push("/dashboard/transaksi/bayar-hutang");
      }
    },
  },

  watch: {
    notifs() {
      if (this.$_.size(this.$nuxt.notifs) > 0) {
        if (this.$nuxt.notifs[0].routes === "bayar-hutang") {
          this.getItemBayarHutang(
            this.paging.current ? this.paging.current : 1
          );
        }
      }
    },
  },
};
</script>
