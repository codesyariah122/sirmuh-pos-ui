<template>
  <div>
    <div class="flex flex-wrap pt-48">
      <div class="w-full">
        <cards-card-profile
          :item="item"
          :title="nama"
          :current="current"
          parentRoute="master/barang"
          :stringRoute="stringRoute"
          :typeRoute="typeRoute"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getData } from "~/hooks/index";

export default {
  data() {
    return {
      current: this.$route.query["current"],
      barcode: this.$route.params.barcode,
      item: {},
      nama: "",
      routePath: this.$route.path,
      stringRoute: null,
      typeRoute: null,
    };
  },

  created() {
    this.getDetailBarang();
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
