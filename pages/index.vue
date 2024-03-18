<template>
  <div>
    <main>
      <landing-jumbotron :banner="banner" />
      <landing-cardPanel :tokos="tokos" />
    </main>
    <footer-component :tokos="tokos" />
  </div>
</template>
<script>
import FooterComponent from "@/components/Landing/Footer.vue";
import { getData } from "~/hooks/index";

export default {
  name: 'index',
  components: {
    FooterComponent,
  },
  data() {
    return {
      api_url: process.env.NUXT_ENV_API_URL,
      tokos: [],
      coordinates: {
        lat: "",
        lng: "",
      },
      center: [],
      koordinat: {},
      banner: "",
    };
  },

  mounted() {
    this.getDataToko();
  },

  methods: {
    getDataToko() {
      this.loading = true;
      getData({
        api_url: `${this.api_url}/data-toko`,
        api_key: process.env.NUXT_ENV_APP_TOKEN,
      })
        .then(({ data }) => {
          this.tokos = data;
          const koordinatString = this.tokos[0].koordinat;

          // Proses nilai koordinat
          const regex = /POINT\(([-\d.]+) ([-\d.]+)\)/;
          const match = koordinatString.match(regex);

          if (match) {
            const latitude = parseFloat(match[2]);
            const longitude = parseFloat(match[1]);
            this.coordinates.lat = latitude;
            this.coordinates.lng = longitude;
          } else {
            console.error("Format koordinat tidak sesuai");
          }
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false;
          }, 1500);
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
