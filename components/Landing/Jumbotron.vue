<template>
  <div
    class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75"
  >
    <div
      class="absolute top-0 w-full h-full bg-center bg-cover"
      :style="`background-image: url(${
        banner ? bannerImg : '~/assets/img/thumbnail-bg.jpg'
      })`"
    >
      <span
        id="blackOverlay"
        class="w-full h-full absolute opacity-75 bg-black"
      ></span>
    </div>
    <div class="container relative mx-auto">
      <div class="items-center flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div class="pr-12">
            <h1 class="text-white font-semibold text-5xl">
              SIROJUL MUHTADIN OFFICIAL WEBSITE
            </h1>
            <p class="mt-4 text-lg text-blueGray-200">
              Keindahan Kebersamaan Dalam menuntut Ilmu <br />
              <span class="font-bold">Aa Ahmad Sutana</span>
              <a
                href="https://www.youtube.com/channel/UC05rQzcIZJoEW9q9LgmjCMQ"
              >
                <span class="text-blue-600">#ponpessirojulmuhtadin</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
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
          class="text-blueGray-200 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    banner: {
      type: [String, Number],
    },
  },

  data() {
    return {
      image_url: process.env.NUXT_ENV_STORAGE_URL,
      bannerImg: null,
    };
  },

  mounted() {
    this.generateBanner();
  },

  methods: {
    generateBanner() {
      this.bannerImg = `${this.image_url}/tokos/${this.banner}`;
    },
  },
};
</script>
