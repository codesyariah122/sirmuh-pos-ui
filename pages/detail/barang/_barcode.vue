<template>
  <div>
    <div class="flex flex-wrap pt-48">
      <div class="w-full">
        <cards-card-profile :item="item" :title="nama" />
      </div>
    </div>
  </div>
</template>

<script>
import { DETAIL_BARANG_TABLE } from "~/utils/tables-organizations";
import { getData } from "~/hooks/index";

export default {
  data() {
    return {
      barcode: this.$route.params.barcode,
      columns: DETAIL_BARANG_TABLE,
      item: {}, // Menggunakan properti 'item' yang sesuai dengan CardProfile
      nama: "",
    };
  },

  created() {
    this.getDetailBarang();
  },

  methods: {
    getDetailBarang() {
      getData({
        api_url: `${this.api_url}/detail?type=barang${
          this.barcode ? "&query=" + this.barcode : ""
        }`,
        api_key: process.env.NUXT_ENV_APP_TOKEN,
      })
        .then(({ data }) => {
          this.nama = data[0]?.nama;
          this.item = { ...data[0] }; // Menggunakan 'item' sebagai properti
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
