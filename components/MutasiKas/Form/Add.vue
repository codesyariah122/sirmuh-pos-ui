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

<div v-if="success" class="flex justify-center bg-transparent mt-2 mb-2">
  <div>
    <ul class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div class="flex justify-between space-x-4">
          <div>
            <b>Kas Asal</b>
          </div>
          
          <div>
            <b>Kas Tujuan</b>
          </div>
        </div>
      </li>
      <li class="w-full px-4 py-0 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div class="flex justify-between space-x-4">
          <div>
            {{showData.own_kas.nama}}
          </div>
          <div>
            {{showData.dest_kas.nama}}
          </div>
        </div>
      </li>
      <li class="w-full px-4 py-4 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div class="flex justify-between space-x-4">
          <div>
            {{$format(showData.own_kas.saldo)}}
          </div>
          <div>
            <i class="fa-solid fa-right-left text-2xl text-emerald-700"></i>
          </div>
          <div>
            {{$format(showData.dest_kas.saldo)}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>

<div class="flex-auto px-4 px-10 py-10 pt-0">
  <form @submit.prevent="addMutasiKas">
    <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
      Data Mutasi Kas
    </h6>
    <div class="flex justify-start space-x-6">
      <div class="w-full w-6/12">
        <label for="kode_ref" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kode Referensi</label>
        <input type="text" v-model="input.reference_code" id="kode_ref" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
      </div>
      <div class="w-full w-6/12">
        <label for="tgl" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal Mutasi</label>
        <datepicker
        id="tgl"
        v-model="input.tanggal"
        :config="datePickerConfig"
        @input="handleTanggalPenjualan($event)"
        placeholder="Tanggal Penjualan"
        :format="dateFormat"
        :style="{ width: '100%', height: '10vh' }"
        ></datepicker>
      </div>
    </div>

    <div class="flex justify-start space-x-6">
      <div class="w-6/12">
        <div class="relative mb-3">
          <label
          class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
          htmlFor="ownKas"
          >
          Kas Asal
        </label>
        <Select2
        id="ownKas"
        v-model="selectedOwn"
        :settings="{ allowClear: true }"
        :options="[{ id: null, text: 'Pilih Kas' }, ...owns]"
        @change="changeOwnKas($event)"
        @select="changeOwnKas($event)"
        placeholder="Pilih Kas"
        />
      </div>
    </div>

    <div class="w-6/12">
      <div class="relative mb-3">
        <div v-if="loadingKas">
          <div role="status">
            <svg
            aria-hidden="true"
            class="w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
            />
            <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
        <span class="font-semibold">Preparing data kas</span>
      </div>
      <div v-else>
        <div
        v-if="showDetailKas && detailKas"
        class="flex justify-start"
        >
        <div class="relative w-full mb-3">
          <label
          class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
          htmlFor="destKas"
          >
          Destinasi Kas
        </label>
        <Select2
        id="destKas"
        v-model="selectedDest"
        :settings="{ allowClear: true }"
        :options="[{ id: null, text: 'Pilih Kas' }, ...dests]"
        @change="changeDestKas($event)"
        @select="changeDestKas($event)"
        placeholder="Pilih Kas"
        />
      </div>
    </div>
  </div>
</div>
</div>
</div>

<div v-if="showDetailKas" class="flex justify-start space-x-6 mt-12">
  <div class="w-6/12">
    <h4>Detail Saldo {{detailKas.nama}}</h4>
    <div class="relative mb-3">
      <input type="text" v-model="jumlah" @input="newOwnKas" @focus="cleanOwnKas"/>
    </div>
  </div>

  <div class="w-6/12 text-center mt-6">
    <i class="fa-solid fa-right-left text-2xl text-emerald-700"></i>
  </div>

  <div class="w-6/12">
    <div v-if="loadingDestKas">
      <div role="status">
        <svg
        aria-hidden="true"
        class="w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
        />
        <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
        />
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
    <span class="font-semibold">Preparing data kas</span>
  </div>
  <div v-else>
    <h4>Destinasi {{detailDestKas.nama}}</h4>
    <div class="relative mb-3">
      <input type="text" disabled v-model="jumlahDest" />
    </div>
  </div>
</div>
</div>

<div v-if="showDetailKas" class="flex justify-start space-x-6 mt-12">
  <div class="w-full w-12/12">
    <div class="relative mb-3">
      <label for="keterangan" class="block mb-2 text-sm font-medium dark:"
      >Keterangan</label
      >
      <textarea
      id="keterangan"
      rows="4"
      class="block p-2.5 w-full text-sm text-blueGray-700 bg-gray-50 rounded-lg border border-gray-300"
      placeholder="Tambahkan keterangan..."
      :disabled="!showDetailKas"
      v-model="input.keterangan"
      @input="inputKeterangan($event)"
      ></textarea>
    </div>
  </div>
</div>

<hr class="mt-6 border-b-1 border-blueGray-300" />

<div class="flex flex-wrap">
  <div class="w-full w-12/12 px-4 py-6">
    <button
    :disabled="!showDetailKas"
    type="submit"
    class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    >
    <div v-if="loadingSave">
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
  <span v-else><i class="fa-solid fa-plus"></i> Mutasikan</span>
</button>

<div v-if="loadingSave">
  <molecules-row-loading :loading="loadingSave" :options="options" />
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
        selectedOwn: null,
        selectedDest: null,
        owns: [],
        dests: [],
        loadingSave: null,
        success: null,
        messageAlert: null,
        options: "",
        api_url: process.env.NUXT_ENV_API_URL,
        api_token: process.env.NUXT_ENV_APP_TOKEN,
        jumlahDest: 0,
        jumlah: 0,
        input: {
          tanggal: new Date(),
          reference_code: null
        },
        validations: [],
        showMutasi: null,
        loadingKas: null,
        loadingDestKas: null,
        showDetailKas: null,
        showDetailDestKas: null,
        detailDestKas: {},
        detailKas: {},
        datePickerConfig: {
          range: false,
        },
        dateFormat: "YYYY-MM-DD",
        showData: {},
        takeNewOwnKas: false
      };
    },

    beforeMount() {
      this.authTokenStorage();
    },

    mounted() {
      this.getOwnKasLists();
      this.getDestKasLists();
      this.generateReferenceCode();
    },

    methods: {
      cleanOwnKas() {
        this.jumlah = "";
        this.input.jumlah = null;
        this.takeNewOwnKas = true;
      },

      newOwnKas(e) {
        if(e.target.value) {          
          const newOwnKas = parseFloat(e.target.value)
          this.input.jumlah = newOwnKas;
        }
      },

      async generateReferenceCode() {
        this.loadingReferenceCode = true;
        this.$nuxt.globalLoadingMessage = "Proses menyiapkan data kas ...";

        const data = await getData({
          api_url: `${this.api_url}/generate-reference-code/mutasi-kas`,
          token: this.token.token,
          api_key: this.api_token,
        });
        const result = data?.data;

        if (data?.success) {
          const ref_code = { ref_code: result.ref_code };
          this.input.reference_code = result.ref_code;
          setTimeout(() => {
            this.loadingReferenceCode = false;
          }, 500);
        }
      },

      handleTanggalPenjualan(e) {
        console.log(e.target.value)
      },

      inputKeterangan(e) {
        this.input.keterangan = e.target.value
      },

      closeSuccessAlert() {
        this.success = false;
        this.message = "";
      },

      backTo() {
        this.$router.push("/dashboard/backoffice/mutasi-kas");
      },

      inputJumlah(e) {
        this.input.jumlah = e.target.value
      },

      changeOwnKas(newValues) {
        if (newValues.id !== undefined) {
          this.showMutasi = true
          this.selectedOwn = newValues?.id;
          this.getKasDetail(newValues.id);
        }
      },

      changeDestKas(newValues) {
        if (newValues.id !== undefined) {
          this.selectedDest = newValues?.id;
          this.getDestKasDetail(newValues.id)
        }
      },


      transformOwnLists(rawData) {
        return rawData
        .filter((item) => item && item.id)
        .map((item) => ({
          id: item.id,
          text: `${item.nama} - ${item.kode}`,
        }));
      },

      getOwnKasLists() {
        this.loading = true
        const getAllPages = async () => {
          let allData = [];
          let currentPage = 1;
          let totalPages = 1;

          while (currentPage <= totalPages) {
            const data = await getData({
              api_url: `${this.api_url}/data-kas`,
              token: this.token.token,
              api_key: this.api_token,
            });

            allData = allData.concat(data?.data);
            totalPages = data?.meta?.last_page;
            currentPage++;
          }

          return allData;
        };

        getAllPages()
        .then((data) => {
          this.owns = this.transformOwnLists(data);
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false
          }, 500)
        })
        .catch((err) => console.log(err));
      },

      async getDestKasDetail(id) {
        this.loadingDestKas = true;
        const data = await getData({
          api_url: `${this.api_url}/data-kas/${id}`,
          token: this.token.token,
          api_key: this.api_token,
        });
        const result = data?.data[0];

        setTimeout(() => {
          this.showDetailDestKas = true;
          this.detailDestKas = result;
          this.input.jumlahDest = result.saldo
          this.jumlahDest = this.$format(result.saldo)
          this.loadingDestKas = false;
        }, 500);
      },

      async getKasDetail(id) {
        this.loadingKas = true;
        const data = await getData({
          api_url: `${this.api_url}/data-kas/${id}`,
          token: this.token.token,
          api_key: this.api_token,
        });
        const result = data?.data[0];

        setTimeout(() => {
          this.showDetailKas = true;
          this.detailKas = result;
          this.input.jumlah = result.saldo
          this.jumlah = this.$format(result.saldo)
          this.loadingKas = false;
        }, 500);
      },

      transformDestLists(rawData) {
        return rawData
        .filter((item) => item && item.id)
        .map((item) => ({
          id: item.id,
          text: `${item.nama} - ${item.kode}`,
        }));
      },

      getDestKasLists() {
        const getAllPages = async () => {
          let allData = [];
          let currentPage = 1;
          let totalPages = 1;

          while (currentPage <= totalPages) {
            const data = await getData({
              api_url: `${this.api_url}/data-kas`,
              token: this.token.token,
              api_key: this.api_token,
            });

            allData = allData.concat(data?.data);
            totalPages = data?.meta?.last_page;
            currentPage++;
          }

          return allData;
        };

        getAllPages()
        .then((data) => {
          this.dests = this.transformDestLists(data);
        })
        .catch((err) => console.log(err));
      },

      addMutasiKas() {
        this.loadingSave = true;

        this.options = "add-mutasi-kas";

        const dataPost = {
          kode: this.input.reference_code,
          kas_id: this.selectedOwn,
          jumlah: this.input.jumlah,
          destination: this.selectedDest,
          keterangan: this.input.keterangan
        };

        const endPoint = `/mutasi-kas`;
        const config = {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${this.token.token}`,
          },
        };

        const formData = new FormData;
        formData.append('kode', dataPost.kode)
        formData.append('kas_id', dataPost.kas_id)
        formData.append('jumlah', dataPost.jumlah)
        formData.append('destination', dataPost.destination)
        formData.append('keterangan', dataPost.keterangan)
        formData.append('operator', this.$nuxt.userData.name)

        this.$api
        .post(endPoint, formData, config)
        .then(({ data }) => {
          if (data.success) {
            this.success = true;
            this.messageAlert = data.message;
            this.validations = [];
            this.showData = data.data
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
            this.loadingSave = false;
            this.input = {};
          }, 500);
        })
        .catch((err) => {
          this.validations = err.response.data;
          this.success = false;
          setTimeout(() => {
            this.loading = false;
          }, 500);
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
