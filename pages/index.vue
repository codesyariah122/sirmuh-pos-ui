<template>
  <div>
    <main>
      <landing-jumbotron :banner="banner" />
      <landing-cardPanel :tokos="tokos" />

      <landing-map :tokos="tokos" />
    </main>
    <footer-component :tokos="tokos" />
  </div>
</template>
<script>
import FooterComponent from "@/components/Landing/Footer.vue";
import { getData } from "~/hooks/index";

export default {
  components: {
    FooterComponent,
  },
  data() {
    return {
      api_url: process.env.NUXT_ENV_API_URL,
      tokos: [],
      koordinat: {},
      banner: "",
    };
  },

  mounted() {
    this.getDataToko();
  },

  methods: {
    getDataToko() {
      getData({
        api_url: `${this.api_url}/data-toko`,
        api_key: process.env.NUXT_ENV_APP_TOKEN,
      })
        .then(({ data }) => {
          this.tokos = data;
        })

        .catch((err) => console.log(err));
    },

    transformKoordinat() {
      return this.tokos.forEach((toko) => {
        this.banner = toko.banner;
        const [longitude, latitude] = toko.koordinat
          .replace("POINT(", "")
          .replace(")", "")
          .split(" ")
          .map((coord) => parseFloat(coord));
        toko.koordinat = { longitude, latitude };
      });
    },
  },
};
</script>
