<style lang="css">
  .embed-responsive {
    position: relative;
    display: block;
    width: 100%;
    padding-bottom: 56.25%; /* Rasio aspek 16:9 (9/16 * 100) */
  }

  .embed-responsive iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

</style>

<template>
  <section
  class="pb-20 bg-blueGray-200 -mt-24 top-0 w-full h-full bg-center bg-cover"
  :style="`background-image: url(${require('~/assets/img/index-bg-2.jpg')})`"
  >
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
          v-if="tokos[0]?.logo"
          :src="`${image_url}/tokos/${tokos[0].logo}`"
          :alt="tokos[0].name"
          class="max-w-[150px]"
          />
        </div>
        <h6 v-if="tokos[0]?.name" class="text-xl font-semibold">
          {{ tokos[0]?.name }}
        </h6>

        <p v-if="tokos[0]?.about" class="mt-2 mb-4 text-blueGray-500">
          {{ $capitalize(tokos[0].about) }}
        </p>

        <div v-if="token?.token === userTokenLogins">
          <button
          @click="redirectDashboard"
          class="ml-4 lg:ml-4 mt-4 bg-emerald-600 text-white active:bg-[#d3ad29] text-md font-bold uppercase px-4 py-0 rounded shadow hover:shadow-lg hover:bg-[#dab842] outline-none focus:outline-none ease-linear transition-all duration-150 w-[200px] h-[30px]"
          type="button"
          >
          <i class="fa-solid fa-gauge text-md"></i> Dashboard
        </button>
      </div>
      <div v-else>
        <button
        v-if="errorLogin"
        @click="forceLogout"
        class="ml-4 lg:ml-4 mt-4 bg-[#5c0611] text-white active:bg-[#5c0611] text-md font-bold uppercase px-4 py-0 rounded shadow hover:shadow-lg hover:bg-[#bc42da] outline-none focus:outline-none ease-linear transition-all duration-150 w-[200px] h-[30px]"
        type="button"
        >
        <i class="fa-solid fa-right-from-bracket text-md"></i> Force
        Logout
      </button>
      <button
      v-else
      @click="redirectLogin"
      class="ml-4 lg:ml-4 mt-4 bg-emerald-600 text-white active:bg-[#d3ad29] text-md font-bold uppercase px-4 py-0 rounded shadow hover:shadow-lg hover:bg-[#dab842] outline-none focus:outline-none ease-linear transition-all duration-150 w-[200px] h-[30px]"
      type="button"
      >
      <i class="fa-solid fa-arrow-right-to-bracket text-md"></i>
      Login
    </button>
  </div>
</div>

<div v-else class="px-4 py-5 flex-auto">
  <div
  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
  >
  <img
  :src="require('~/assets/img/new-logo.png')"
  alt="PD Barokah"
  class="max-w-[150px]"
  />
</div>
<h6 class="text-xl font-semibold">
  {{ " PD. Barokah " }}
</h6>
<p class="mt-2 mb-4 text-blueGray-500">
  {{ $capitalize("supplier gula aren & hasil bumi") }}
</p>
<button
@click="redirectLogin"
class="ml-4 lg:ml-4 mt-4 bg-emerald-600 text-white active:bg-[#d3ad29] text-md font-bold uppercase px-4 py-0 rounded shadow hover:shadow-lg hover:bg-[#dab842] outline-none focus:outline-none ease-linear transition-all duration-150 w-[200px] h-[30px]"
type="button"
>
<i class="fa-solid fa-arrow-right-to-bracket text-md"></i> Login
</button>
</div>
</div>
</div>

<div class="w-full md:w-6/12 px-4 text-center">
  <div
  class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
  >
  <div class="px-4 py-5 flex-auto">
    <div
    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400"
    >
    <i class="fa-solid fa-mosque"></i>
  </div>
  <h6 class="text-xl font-semibold">Yayasan Sirojul Muhtadin</h6>
  <p class="mt-2 mb-4 text-blueGray-500">
    Jadilah Seseorang Yang Bermanfa'at Dan Yang Selalu Memberikan
    Manfa'at Kepada Orang Lain
  </p>
  <button
  @click="
  redirectToMedsos(
    'https://www.youtube.com/channel/UC05rQzcIZJoEW9q9LgmjCMQ'
    )
    "
    class="ml-4 lg:ml-4 mt-4 bg-emerald-600 text-white active:bg-[#d3ad29] text-md font-bold uppercase px-4 py-0 rounded shadow hover:shadow-lg hover:bg-[#dab842] outline-none focus:outline-none ease-linear transition-all duration-150 w-[200px] h-[30px]"
    type="button"
    >
    <i class="fa-solid fa-arrow-right-to-bracket text-md"></i> Check
    Now!
  </button>
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
    <span class="text-2xl font-bold">🕋</span>
  </div>
  <h6 class="text-xl font-semibold">SIRMUH UMROH</h6>
  <p class="mt-2 mb-4 text-blueGray-500">
    Manasik Umroh Jama'ah SIRMUH UMROH (bimbingan umroh bersama sirojul muhtadin)
  </p>

  <button
  @click="
  redirectToMedsos(
    'https://www.facebook.com/MultimediaSIRMUH/?locale=id_ID'
    )
    "
    class="ml-4 lg:ml-4 mt-4 bg-emerald-600 text-white active:bg-[#d3ad29] text-md font-bold uppercase px-4 py-0 rounded shadow hover:shadow-lg hover:bg-[#dab842] outline-none focus:outline-none ease-linear transition-all duration-150 w-[200px] h-[30px]"
    type="button"
    >
    <i class="fa-solid fa-arrow-right-to-bracket text-md"></i> Check
    Now!
  </button>
</div>
</div>
</div>
</div>

<div class="flex flex-wrap items-center mt-0">
  <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
    <div
    class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-2 shadow-lg rounded-full bg-white"
    >
    <i class="fa-solid fa-mosque text-emerald-600"></i>
  </div>
  <h3 class="text-3xl mb-2 font-semibold leading-normal">
    Yayasan Sirojul Muhtadin
  </h3>
  <p
  class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600"
  >
  Kp.Citaliktik Ds.Pananjung Kec.Cangkuang, Bandung, Indonesia, West
  Java 0813-2178-5087
</p>
<router-link to="/" class="font-bold text-blueGray-700 mt-8">
  Check Now!
</router-link>
</div>

<div class="w-full md:w-4/12 px-4 mr-auto ml-auto mt-12">
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-emerald-500">
    <div class="embed-responsive aspect-ratio-16/9">
      <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/u-9IwW9KXKY?si=-RYgmLY1pYFbTntv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
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
    <h4 class="text-xl font-bold text-white">
      Selamat datang di channel Kebaikan PP Sirojul Muhtadin
    </h4>
    <p class="text-md font-light mt-2 text-white">
      Jadilah Seseorang Yang Bermanfa'at Dan Yang Selalu Memberikan Manfa'at Kepada Orang Lain
    </p>
  </blockquote>
</div>
</div>

</div>

<div class="flex flex-wrap justify-center items-center mt-12">
  <div>
    <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15839.095258011874!2d107.5451848!3d-7.035849!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ed3e1884accb%3A0xbe9e9e909569a163!2sPondok%20Pesantren%20Sirojul%20Muhtadin!5e0!3m2!1sid!2sid!4v1702400615767!5m2!1sid!2sid"
    class="lg:w-[900px] sm:w-[500px]"
    height="450"
    style="border: 0"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
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
        userDataLogin: [],
        userTokenLogins: {},
        errorLogin: null,
      };
    },

    mounted() {
      this.checkUserLogin();
    },

    methods: {
      redirectLogin() {
        this.$router.push("/auth/login");
      },
      redirectToMedsos(page) {
        window.open(page);
      },
      checkUserLogin() {
        try {
          if (this.$_.isObject(this.token)) {
            const endPoint = `/user-data`;
            const config = {
              headers: {
                Accept: "application/json",
                Authorization: `Bearer ${this?.token?.token}`,
              },
            };
            this.$api.defaults.headers.common["Sirmuh-Key"] =
            process.env.NUXT_ENV_APP_TOKEN;
            this.$api
            .get(endPoint, config)
            .then(({ data }) => {
              if (data.success) {
                this.userDataLogin = { ...data.data };
                data.data.logins.map((login) => {
                  this.userTokenLogins = login.user_token_login;
                });
              } else {
                this.errorLogin = true;
              }
            })
            .catch((err) => {
              this.errorLogin = true;
              console.log("Error Access " + err.message);
            });
          } else {
          // this.$swal({
          //   icon: "error",
          //   title: "Oops...",
          //   text: "Error Access!",
          // });
          // this.$router.replace("/");
            console.log("loading ....");
          }
        } catch (err) {
          this.errorLogin = true;
        }
      },

      redirectDashboard() {
        this.$router.push({
          path: `/dashboard/${this.userDataLogin.roles[0].name.toLowerCase()}`,
        });
      },

      forceLogout() {
        this.$nuxt.forceLogout(this.token.token);
      // this.$swal({
      //   position: "top-end",
      //   icon: "success",
      //   title: "fORCE LOGOUT SUCCESSFULLY",
      //   showConfirmButton: false,
      //   timer: 1500,
      // });
      // setTimeout(() => {
      //   location.reload();
      // }, 1000);
      },
    },

    computed: {
      token() {
        return this.$store.getters["auth/getAuthToken"];
      },
    },
  };
</script>
