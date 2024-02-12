<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <cards-card-table
        color="dark"
        :title="`CETAK STRUK PEMBELIAN LANGSUNG - ${kode}`"
        types="cetak"
        queryType="CETAK_PEMBELIAN"
        queryMiddle="cetak-pembelian"
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
        console.log("di direct bro");
        this.$router.push("/dashboard/transaksi/beli/pembelian-langsung");
      }
    },
  },

  watch: {
    notifs() {
      if (this.$_.size(this.$nuxt.notifs) > 0) {
        if (this.$nuxt.notifs[0].routes === "pembelian-langsung") {
          this.getPembelianLangsung(
            this.paging.current ? this.paging.current : 1
          );
        }
      }
    },
  },
};
</script>
