<template>
  <section class="pb-20 bg-blueGray-200 -mt-24">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
          >
            <div v-if="tokos && $_.size(tokos) > 0" class="px-4 py-5 flex-auto">
              <div
                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
              >
                <img
                  :src="`${image_url}/tokos/${tokos[0].logo}`"
                  :alt="tokos[0].name"
                  class="max-w-[150px]"
                />
              </div>
              <h6 class="text-xl font-semibold">{{ tokos[0]?.name }}</h6>
              <p class="mt-2 mb-4 text-blueGray-500">
                {{ $capitalize(tokos[0].about) }}
              </p>

              <div v-if="token?.token"></div>
              <button
                v-else
                @click="redirectLogin"
                class="ml-4 lg:ml-4 mt-4 bg-[#dbbb49] text-white active:bg-[#d3ad29] text-md font-bold uppercase px-4 py-0 rounded shadow hover:shadow-lg hover:bg-[#dab842] outline-none focus:outline-none ease-linear transition-all duration-150 w-[200px] h-[30px]"
                type="button"
              >
                <i class="fa-solid fa-arrow-right-to-bracket text-md"></i> Login
              </button>
            </div>

            <div v-else class="px-4 py-5 flex-auto">
              <div
                class="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200"
              >
                loading...
              </div>
            </div>
          </div>
        </div>

        <div class="w-full md:w-4/12 px-4 text-center">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
          >
            <div class="px-4 py-5 flex-auto">
              <div
                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400"
              >
                <i class="fas fa-retweet"></i>
              </div>
              <h6 class="text-xl font-semibold">Free Revisions</h6>
              <p class="mt-2 mb-4 text-blueGray-500">
                Keep you user engaged by providing meaningful information.
                Remember that by this time, the user is curious.
              </p>
            </div>
          </div>
        </div>

        <div class="pt-6 w-full md:w-4/12 px-4 text-center">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
          >
            <div class="px-4 py-5 flex-auto">
              <div
                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400"
              >
                <i class="fas fa-fingerprint"></i>
              </div>
              <h6 class="text-xl font-semibold">Verified Company</h6>
              <p class="mt-2 mb-4 text-blueGray-500">
                Write a few lines about each one. A paragraph describing a
                feature will be enough. Keep you user engaged!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap items-center mt-32">
        <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <div
            class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
          >
            <i class="fas fa-user-friends text-xl"></i>
          </div>
          <h3 class="text-3xl mb-2 font-semibold leading-normal">
            Working with us is a pleasure
          </h3>
          <p
            class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600"
          >
            Don't let your uses guess by attaching tooltips and popoves to any
            element. Just make sure you enable them first via JavaScript.
          </p>
          <p
            class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600"
          >
            The kit comes with three pre-built pages to help you get started
            faster. You can change the text and images and you're good to go.
            Just make sure you enable them first via JavaScript.
          </p>
          <router-link to="/" class="font-bold text-blueGray-700 mt-8">
            Check Vue Notus!
          </router-link>
        </div>

        <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
          <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-emerald-500"
          >
            <iframe
              width="384"
              height="315"
              src="https://www.youtube.com/embed/uarkh14DWKM?si=-fqPQG7gx-wvg3xA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <blockquote class="relative p-8 mb-4">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                class="absolute left-0 w-full block h-95-px -top-94-px"
              >
                <polygon
                  points="-30,95 583,95 583,65"
                  class="text-emerald-500 fill-current"
                ></polygon>
              </svg>
              <h4 class="text-xl font-bold text-white">Top Notch Services</h4>
              <p class="text-md font-light mt-2 text-white">
                The Arctic Ocean freezes every winter and much of the sea-ice
                then thaws every summer, and that process will continue whatever
                happens.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    tokos: {
      type: [Object, Array],
    },
  },

  beforeMount() {
    this.authTokenStorage();
  },

  data() {
    return {
      image_url: process.env.NUXT_ENV_STORAGE_URL,
    };
  },

  methods: {
    redirectLogin() {
      this.$router.push("/auth/login");
    },
  },

  computed: {
    token() {
      return this.$store.getters["auth/getAuthToken"];
    },
  },
};
</script>
