<template>
  <div style="height: 350px; width: 100%" class="mt-12 mb-16">
    <client-only>
      <l-map ref="myMap" :zoom="zoom" :center="center">
        <!-- <l-circle
			:lat-lng="center"
			:radius="circle.radius"
			:color="circle.color"
			/> -->
        <l-marker :lat-lng="coordinates">
          <l-icon
            :icon-size="iconSize"
            :icon-anchor="staticAnchor"
            :icon-url="icons[1]"
            :shadow-url="icons[1]"
          />
          <l-popup>
            <center class="container">
              <span class="font-weight-bold bd-highlight"> {{ name }} </span
              ><br />
              <small class="text-success"> {{ kota }} {{ provinsi }} </small>
              <br />

              <img :src="icons[1]" width="155" />
              <br /><br />
            </center>
          </l-popup>
        </l-marker>
        <!-- <l-polyline :lat-lngs="polyline.latlngs" :color="polyline.color"/> -->
        <l-tile-layer :url="url" :attribution="attribution"> </l-tile-layer>
      </l-map>
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    tokos: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      ip: "",
      coordinates: {
        lat: "",
        lng: "",
      },
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">DkSindo</a> contributors',
      zoom: 15,
      center: {
        lat: "-6.200000",
        lng: "106.816666",
      },
      bounds: null,
      regionCenter: [],
      address: {
        long: "",
        display: "",
      },
      polyline: {
        latlngs: [],
        color: "green",
      },
      circle: {
        center: "",
        radius: 2500,
        color: "red",
      },
      icons: {
        1: require("assets/icons/markers/office_icon.png"),
      },
      staticAnchor: [10, 15],
      iconSize: [70, 80],
      name: "",
      address: "",
      moto: "",
      kota: "",
      provinsi: "",
    };
  },

  mounted() {
    this.generateMapData();
  },

  methods: {
    generateMapData() {
      // Pastikan tokos[0] dan koordinat sudah tersedia
      if (this.tokos.length > 0 && this.tokos[0]?.koordinat) {
        this.name = this.tokos[0].name;
        this.address = this.tokos[0].address;
        this.moto = this.tokos[0].about;
        this.kota = this.tokos[0].kota;
        this.provinsi = this.tokos[0].provinsi;
        const koordinatString = this.tokos[0].koordinat;

        // Proses nilai koordinat
        const regex = /POINT\(([-\d.]+) ([-\d.]+)\)/; // Regex untuk mengekstrak nilai latitude dan longitude
        const match = koordinatString.match(regex);

        console.log(match);

        if (match) {
          const latitude = parseFloat(match[2]);
          const longitude = parseFloat(match[1]);
          this.center.lat = latitude;
          this.center.lng = longitude;
          this.coordinates.lat = latitude;
          this.coordinates.lng = longitude;
        } else {
          console.error("Format koordinat tidak sesuai");
        }
      }
    },
  },
};
</script>
