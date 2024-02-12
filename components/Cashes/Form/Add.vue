<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div
      v-if="success"
      ref="alertNotifs"
      class="flex justify-center w-full bg-transparent mt-4"
    >
      <molecules-success-alert
        :success="success"
        :messageAlert="messageAlert"
        @close-alert="closeSuccessAlert"
      />
    </div>

    <div v-if="success" class="flex justify-center bg-transparent mt-2 mb-2">
      <button
        @click="backTo"
        type="button"
        class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
      >
        Check Data Kas
      </button>
    </div>

    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form @submit.prevent="addNewKas">
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Data Pelanggan
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="nama"
              >
                Nama
              </label>
              <input
                id="nama"
                type="text"
                placeholder="Nama Barang"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="input.nama"
              />
            </div>

            <div
              v-if="validations.nama"
              class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <i class="fa-solid fa-circle-info"></i>
              <div class="px-2">
                {{ validations.nama[0] }}
              </div>
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="kode"
              >
                Bank
              </label>
              <Select2
                v-model="selectedBank"
                :settings="{ allowClear: true }"
                :options="[{ id: null, text: 'Pilih Bank' }, ...banks]"
                @change="changeBank($event)"
                @select="changeBank($event)"
                placeholder="Pilih Bank"
              />

              <div
                v-if="validations.bank"
                class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <i class="fa-solid fa-circle-info"></i>
                <div class="px-2">
                  {{ validations.bank[0] }}
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="barcode"
              >
                Saldo
              </label>
              <input
                type="number"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="input.saldo"
              />
              <div
                v-if="validations.saldo"
                class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <i class="fa-solid fa-circle-info"></i>
                <div class="px-2">
                  {{ validations.saldo[0] }}
                </div>
              </div>
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4 py-4">
            <div class="flex">
              <div class="flex items-center h-5">
                <input
                  id="helper-checkbox"
                  aria-describedby="helper-checkbox-text"
                  type="checkbox"
                  v-model="input.default_toko"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div class="ms-2 text-sm">
                <label
                  for="helper-checkbox"
                  class="font-medium text-gray-900 dark:text-gray-300"
                  >Default Toko</label
                >
                <p
                  id="helper-checkbox-text"
                  class="text-xs font-normal text-gray-500 dark:text-gray-300"
                >
                  Checklist untuk iya
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300" />
        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4 py-6">
            <button
              type="submit"
              class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              <div v-if="loading">
                <svg
                  aria-hidden="true"
                  role="status"
                  class="inline w-4 h-4 mr-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Loading...
              </div>
              <span v-else><i class="fa-solid fa-plus"></i> Tambah Barang</span>
            </button>

            <div v-if="loading">
              <molecules-row-loading :loading="loading" :options="options" />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { getData } from "~/hooks/index";
import Datepicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  props: {
    type: {
      type: String,
      default: null,
    },
    current: {
      type: [Number, String],
      default: null,
    },
  },

  components: {
    Datepicker,
  },

  data() {
    return {
      selectedBank: null,
      roles: [],
      loading: null,
      success: null,
      messageAlert: null,
      options: "",
      api_url: process.env.NUXT_ENV_API_URL,
      api_token: process.env.NUXT_ENV_APP_TOKEN,
      input: {
        default_toko: false,
      },
      validations: [],
      banks: [
        { id: 1, text: "Bank Mandiri" },
        { id: 2, text: "Bank Rakyat Indonesia (BRI)" },
        { id: 3, text: "Bank Central Asia (BCA)" },
        { id: 4, text: "Bank Negara Indonesia (BNI)" },
        { id: 5, text: "Bank CIMB Niaga" },
        { id: 6, text: "Bank Danamon" },
        { id: 7, text: "Bank Permata" },
        { id: 8, text: "Bank Panin" },
        { id: 9, text: "Bank Maybank Indonesia" },
        { id: 10, text: "Bank Mega" },
      ],
    };
  },

  beforeMount() {
    this.authTokenStorage();
  },

  methods: {
    closeSuccessAlert() {
      this.success = false;
      this.message = "";
    },

    backTo() {
      this.$router.push("/dashboard/master/kas");
    },

    changeBank(newValues) {
      if (newValues.id !== undefined) {
        this.selectedBank = newValues?.id;
        this.input.bank = newValues?.text;
      }
    },

    addNewKas() {
      this.loading = true;

      this.options = "add-kas";

      const dataPost = {
        nama: this.input.nama,
        bank: this.input.bank,
        saldo: this.input.saldo,
        default_toko: this.input.default_toko,
      };

      const endPoint = `/data-kas`;
      const config = {
        headers: {
          Authorization: `Bearer ${this.token.token}`,
        },
      };

      this.$api
        .post(endPoint, dataPost, config)
        .then(({ data }) => {
          if (data.success) {
            this.success = true;
            this.messageAlert = data.message;
            this.validations = [];
            this.$swal({
              position: "top-end",
              icon: "success",
              title: data?.message,
              showConfirmButton: false,
              timer: 1500,
            });
            this.loading = false;
          } else {
            this.$swal({
              icon: "error",
              title: "Oops...",
              text: data.message,
            });
          }
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false;
            this.input = {};
          }, 1000);
        })
        .catch((err) => {
          this.validations = err.response.data;
          this.success = false;
          setTimeout(() => {
            this.loading = false;
          }, 1000);
        });
    },
  },

  computed: {
    token() {
      return this.$store.getters["auth/getAuthToken"];
    },
  },
};
</script>
