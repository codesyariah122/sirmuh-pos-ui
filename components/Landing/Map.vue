<template>
  <div style="height: 350px; width: 95%" class="mt-12 mb-16 px-24">
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
    coordinates: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      ip: "",
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">DkSindo</a> contributors',
      zoom: 15,
      center: {
        lat: "-6.917620279144596",
        lng: "107.5937513457445",
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
};
</script>
