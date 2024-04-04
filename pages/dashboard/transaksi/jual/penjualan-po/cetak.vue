<template>
  <div class="flex flex-wrap mt-24">
    <div class="w-full mb-12 px-4">
      <cards-card-table
        color="dark"
        :title="`CETAK PENJUALAN P.O - ${kode}`"
        types="cetak"
        queryType="CETAK_PUNJUALAN_PO"
        queryMiddle="cetak-penjualan-po"
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
import { PEMBELIAN_LANGSUNG_TABLE } from "~/utils/table-pembelian-langsung";
import { getData, deleteData } from "~/hooks/index";

export default {
  name: "cetak-purchase-order",
  layout: "admin",

  data() {
    return {
      showModal: false,
      kode: this.$route.query["kode"],
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
    this.getItemPembelianLangsung();
  },

  methods: {
    getItemPembelianLangsung() {
      if (
        this.cetakStorage !== null ||
        this.cetakStorage.ref_code === this.kode
      ) {
        console.log(this.cetakStorage.ref_code);
      } else {
        this.$router.push("/dashboard/transaksi/jual/penjualan-po");
      }
    },
  },
};
</script>
