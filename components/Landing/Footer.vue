<template>
  <footer class="relative bg-black pt-8 pb-6">
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
          class="text-blueGray-900 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap text-center lg:text-left">
        <div v-if="tokos && $_.size(tokos) > 0" class="w-full lg:w-6/12 px-4">
          <h4
            v-if="tokos[0]?.name"
            class="text-3xl font-semibold text-blueGray-300"
          >
            {{ tokos[0].name }}
          </h4>
          <h4 v-else class="text-3xl font-semibold text-blueGray-300">
            PD. Barokah
          </h4>
          <h5
            v-if="tokos[0]?.about"
            class="text-lg mt-0 mb-2 text-blueGray-600"
          >
            {{ $capitalize(tokos[0].about) }}
          </h5>
          <h5 v-else class="text-lg mt-0 mb-2 text-blueGray-600">
            {{ $capitalize(" supplier gula aren & hasil bumi ") }}
          </h5>

          <address v-if="tokos[0]?.address" class="text-blueGray-300">
            {{ $capitalize(tokos[0].address) }}
          </address>
          <address v-else class="text-blueGray-300">
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
        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 px-4 ml-auto">
              <span
                class="block uppercase text-blueGray-500 text-sm font-semibold mb-2"
              >
                Useful Links
              </span>
              <ul class="list-unstyled">
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://www.creative-tim.com/presentation?ref=vn-footer"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://blog.creative-tim.com?ref=vn-footer"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://www.github.com/creativetimofficial?ref=vn-footer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://www.creative-tim.com/bootstrap-themes/free?ref=vn-footer"
                  >
                    Free Products
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-4/12 px-4">
              <span
                class="block uppercase text-blueGray-500 text-sm font-semibold mb-2"
              >
                Other Resources
              </span>
              <ul class="list-unstyled">
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://github.com/creativetimofficial/vue-notus/blob/main/LICENSE.md?ref=vn-footer"
                  >
                    MIT License
                  </a>
                </li>
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://creative-tim.com/terms?ref=vn-footer"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://creative-tim.com/privacy?ref=vn-footer"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://creative-tim.com/contact-us?ref=vn-footer"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-blueGray-300" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div
            v-if="tokos && $_.size(tokos) > 0"
            class="text-sm text-blueGray-500 font-semibold py-1"
          >
            Copyright © {{ date }} {{ tokos[0].name }} <br />
            <a
              href="https://www.creative-tim.com?ref=vn-footer"
              class="text-blueGray-500 hover:text-blueGray-800"
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
