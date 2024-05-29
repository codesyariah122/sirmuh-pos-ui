<template>
  <footer class="relative bg-emerald-500 pt-8 pb-6">
    <div
    class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
    style="transform: translateZ(0)"
    >
    <svg
    class="absolute bottom-0 overflow-hidden"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    version="1.1"
    viewBox="0 0 2560 100"
    x="0"
    y="0"
    >
    <polygon
    class="text-emerald-600 fill-current"
    points="2560 0 2560 100 0 100"
    ></polygon>
  </svg>
</div>
<div class="container mx-auto px-4">
  <div class="flex flex-wrap text-center lg:text-left">
    <div class="w-full lg:w-6/12 px-4">
      <h4 class="text-3xl font-semibold text-blueGray-200">
        SIROJUL MUHTADIN
      </h4>
      <h5 class="text-lg mt-0 mb-2 text-blueGray-100">
        {{ $capitalize("Yayasan Sirojul Muhtadin | Bandung") }}
      </h5>

      <address class="text-blueGray-300">
        {{ $capitalize("Kp. Citaliktik Rt 01 Rw 02 Desa Pananjung ") }}
      </address>

      <div class="mt-6 lg:mb-0 mb-6">
        <button
        @click="redirectToMedsos('https://www.tiktok.com/@sirmuhmedia')"
        class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
        type="button"
        >
        <i class="fa-brands fa-tiktok"></i>
      </button>
      <button
      @click="
      redirectToMedsos(
        'https://www.facebook.com/MultimediaSIRMUH/?locale=id_ID'
        )
        "
        class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
        type="button"
        >
        <i class="fab fa-facebook-square"></i>
      </button>
      <button
      @click="
      redirectToMedsos('https://www.youtube.com/@aaahmadsutana')
      "
      class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
      type="button"
      >
      <i class="fa-brands fa-youtube"></i>
    </button>
    <button
    @click="
    redirectToMedsos(
      'https://www.instagram.com/kobas_sirmuh/?hl=id'
      )
      "
      class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
      type="button"
      >
      <i class="fa-brands fa-instagram"></i>
    </button>
  </div>
</div>
</div>
<hr class="my-6 border-blueGray-300" />
<div
class="flex flex-wrap items-center md:justify-between justify-center"
>
<div class="w-full md:w-4/12 px-4 mx-auto text-center">
  <div class="text-sm text-blueGray-200 font-semibold py-1">
    Copyright © {{ date }} {{ $capitalize("sirojul muhtadin") }} <br />
    <a
    href="https://www.creative-tim.com?ref=vn-footer"
    class="text-blueGray-200 hover:text-blueGray-800"
    >
    Digital Kreatif Solusindo
  </a>
  .
</div>
</div>
</div>
</div>
</footer>
</template>
<script>
  export default {
    props: {
      tokos: {
        type: [Array, Object],
      },
    },
    data() {
      return {
        date: new Date().getFullYear(),
      };
    },

    methods: {
      redirectToMedsos(page) {
        window.open(page);
      },
    },
  };
</script>
