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
import { getData } from "~/hooks/index";

export default {
  data() {
    return {
      barcode: this.$route.params.barcode,
      item: {},
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
          this.item = { ...data[0] };
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
