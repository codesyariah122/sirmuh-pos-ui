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
        Check Data Baru
      </button>
    </div>

    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form @submit.prevent="addNewPemasukan">
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Data Pemasukan
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="kode"
              >
                Kode
              </label>
              <input
                id="kode"
                type="text"
                placeholder="Kode Referensi"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="input.reference_code"
              />
            </div>

            <div
              v-if="validations.kode"
              class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <i class="fa-solid fa-circle-info"></i>
              <div class="px-2">
                {{ validations.kode[0] }}
              </div>
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="tanggal"
              >
                Tanggal
              </label>
              <datepicker
              v-model="input.tanggal"
              :config="datePickerConfig"
              @input="handleTanggalPemasukan($event)"
              placeholder="Tanggal Penjualan"
              :format="dateFormat"
              :style="{ width: '100%', height: '10vh' }"
              ></datepicker>
            </div>
            <div
              v-if="validations.tanggal"
              class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <i class="fa-solid fa-circle-info"></i>
              <div class="px-2">
                {{ validations.tanggal[0] }}
              </div>
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Jenis Pemasukan
              </label>
              <Select2
              v-model="selectedJenis"
              :settings="{
                allowClear: true,
                dropdownCss: { top: 'auto', bottom: 'auto' },
              }"
              :options="[{ id: null, text: 'Pilih Jenis Pemasukan' }, ...jenispemasukans]"
              @change="changeJenisPemasukan($event)"
              @select="changeJenisPemasukan($event)"
              placeholder="Pilih Jenis Pemasukan"
              />
            </div>
            <div
              v-if="validations.jenis_pemasukan"
              class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <i class="fa-solid fa-circle-info"></i>
              <div class="px-2">
                {{ validations.jenis_pemasukan[0] }}
              </div>
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="kas"
              >
                Keterangan
              </label>
              <textarea
              id="kas"
              rows="4"
              class="block p-2.5 w-full text-sm text-blueGray-700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark: dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tambahkan keterangan..."
              :disabled="selectedJenis === null"
              v-model="input.keterangan"
              ></textarea>
            </div>
            <div
              v-if="validations.keterangan"
              class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <i class="fa-solid fa-circle-info"></i>
              <div class="px-2">
                {{ validations.keterangan[0] }}
              </div>
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="kas"
              >
                Kas
              </label>
                <Select2
                v-model="selectedKodeKas"
                :settings="{
                  allowClear: true,
                  dropdownCss: { top: 'auto', bottom: 'auto' },
                }"
                :options="[{ id: null, text: 'Pilih Kode Kas' }, ...kas]"
                @change="changeKodeKas($event)"
                @select="changeKodeKas($event)"
                placeholder="Pilih Kode Kas"
              />
            </div>
            <div
              v-if="validations.kode_kas"
              class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <i class="fa-solid fa-circle-info"></i>
              <div class="px-2">
                {{ validations.kode_kas[0] }}
              </div>
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="jumlah"
              >
                Jumlah
              </label>
              <input
              type="number"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              v-model="input.jumlah"
              />
            </div>
            <div
              v-if="validations.jumlah"
              class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <i class="fa-solid fa-circle-info"></i>
              <div class="px-2">
                {{ validations.jumlah[0] }}
              </div>
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="kode_pelanggan"
              >
                Pelanggan
              </label>
                <Select2
                  v-model="selectedPelanggan"
                  :settings="{
                    allowClear: true,
                    dropdownCss: { top: 'auto', bottom: 'auto' },
                  }"
                  :options="[
                    { id: null, text: 'Pilih Pelanggan' },
                    ...pelanggans,
                  ]"
                  @change="changePelanggan($event)"
                  @select="changePelanggan($event)"
                  placeholder="Pilih Pelanggan"
              />
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div v-if="loadingPelanggan" class="relative w-full mb-3">
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
              <span class="text-white">Preparing data pelanggan</span>
            </div>
            <div v-else class="relative w-full mb-3">
              <div v-if="showDetailPelanggan">                
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="nama"
                >
                  Nama Pelanggan
                </label>
                  <input
                  id="nama"
                  type="text"
                  placeholder="Nama Barang"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  v-model="input.nama_pelanggan"
                />
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
              <span v-else><i class="fa-solid fa-plus"></i> Tambah Pemasukan</span>
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
      loadingPelangganList: null,
      loadingPelanggan: null,
      selectedKodeKas: null,
      selectedJenis: null,
      selectedPelanggan: null,
      jenispemasukans: [],
      kas: [],
      pelanggans: [],
      pelanggan: {},
      changePelangganShow: false,
      showDetailPelanggan: null,
      showDetailKas: null,
      loading: null,
      success: null,
      messageAlert: null,
      options: "",
      api_url: process.env.NUXT_ENV_API_URL,
      api_token: process.env.NUXT_ENV_APP_TOKEN,
      input: {
        tanggal: new Date(),
        reference_code: null,
        kode_pelanggan: null,
        nama_pelanggan: null
      },
      validations: [],
      datePickerConfig: {
        range: false,
      },
      dateFormat: "YYYY-MM-DD",
    };
  },

  beforeMount() {
    this.authTokenStorage();
    this.generateReferenceCode();
  },

  mounted() {
    this.getJenisPemasukans();
    this.getKasData();
    this.getPelangganLists();
  },

  methods: {
    async generateReferenceCode() {
      this.loadingReferenceCode = true;
      const refCodeStorage = localStorage.getItem("ref_code")
        ? JSON.parse(localStorage.getItem("ref_code"))
        : null;
      if (refCodeStorage && refCodeStorage?.ref_code !== null) {
        this.input.reference_code = refCodeStorage.ref_code;
        setTimeout(() => {
          this.loadingReferenceCode = false;
        }, 500);
      } else {
        const data = await getData({
          api_url: `${this.api_url}/generate-reference-code/pemasukan`,
          token: this.token.token,
          api_key: this.api_token,
        });
        const result = data?.data;

        if (data?.success) {
          const ref_code = { ref_code: result.ref_code };
          localStorage.setItem("ref_code", JSON.stringify(ref_code));
          this.input.reference_code = result.ref_code;
          setTimeout(() => {
            this.loadingReferenceCode = false;
          }, 500);
        }
      }
    },

    closeSuccessAlert() {
      this.success = false;
      this.message = "";
    },

    backTo() {
      this.$router.push("/dashboard/backoffice/pemasukan");
    },

    handleTanggalPemasukan(e) {

    },

    changeJenisPemasukan(newValue) {
      const jenis = newValue.id;
      if (jenis !== undefined) {
        this.$emit("filter-data", {
          keywords: "",
          jenis: jenis,
          date: "",
          view_all: this.$nuxt.viewAllPemasukan,
        });
      }
    },

    transformJenisPemasukan(rawData) {
      return rawData
        .filter((item) => item && item.kode)
        .map((item) => ({
          id: item.kode,
          text: item.nama,
        }));
    },

    getJenisPemasukans() {
      this.loadingJenisPemasukan = true;
      const getAllPages = async () => {
        let allData = [];
        let currentPage = 1;
        let totalPages = 1;

        while (currentPage <= totalPages) {
          const data = await getData({
            api_url: `${this.api_url}/data-jenis-pemasukan`,
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
          this.jenispemasukans = this.transformJenisPemasukan(data);
        })
        .finally(() => {
          this.loadingJenisPemasukan = false;
        })
        .catch((err) => console.log(err));
    },

    changeKodeKas(newValues) {
      if (newValues && newValues.id !== undefined) {
        const kasId = Number(newValues.id);
        if (!isNaN(kasId)) {
          this.showBayar = false;
          this.selectedKodeKas = kasId;
          this.getKasDetail(kasId);
          this.input.kode_kas = kasId;
        }
      }
    },

    async getKasDetail(id) {
      this.loadingKas = true;
      const data = await getData({
        api_url: `${this.api_url}/data-kas/${id}`,
        token: this.token.token,
        api_key: this.api_token,
      });
      const result = data?.data[0];
      this.showDetailKas = true;
      setTimeout(() => {
        this.detailKas = result;
        this.loadingKas = false;
      }, 500);
    },

    getKasData() {
      this.loadingKas = true;
      const getAllPages = async () => {
        let allData = [];
        let currentPage = 1;
        let totalPages = 1;

        while (currentPage <= totalPages) {
          const data = await getData({
            api_url: `${this.api_url}/data-kas?page=${currentPage}`,
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
          this.kas = this.transformDataKasLists(data);
        })
        .finally(() => {
          setTimeout(() => {
            this.loadingKas = false;
          }, 500);
        })
        .catch((err) => console.log(err));
    },

    transformDataKasLists(rawData) {
      return rawData
        .filter((item) => item && item.kode)
        .map((item) => ({
          id: item.kode,
          text: `${item.nama} - ${item.kode}`,
        }));
    },

    changePelanggan(newValues) {
      if (newValues && newValues.id !== undefined) {
        const pelangganId = Number(newValues.id);
        if (!isNaN(pelangganId)) {
          this.changePelangganShow = false;
          this.selectedPelanggan = pelangganId;
          this.getPelangganDetail(pelangganId);
        }
      }
    },

    async getPelangganLists() {
      this.loadingPelangganList = true;
      const getAllPages = async () => {
        let allData = [];
        let currentPage = 1;
        let totalPages = 1;

        while (currentPage <= totalPages) {
          const data = await getData({
            api_url: `${this.api_url}/list-pelanggan-partai?page=${currentPage}`,
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
          this.pelanggans = this.transformPelangganLists(data);
        })
        .finally(() => {
          setTimeout(() => {
            this.loadingPelangganList = false;
          }, 500);
        })
        .catch((err) => console.log(err));
    },

    transformPelangganLists(rawData) {
      return rawData
        .filter((item) => item && item.kode)
        .map((item) => ({
          id: item.id,
          text: `${item.nama} - ${item.kode}`,
        }));
    },

    async getPelangganDetail(id) {
      this.loadingPelanggan = true;
      const data = await getData({
        api_url: `${this.api_url}/data-pelanggan/${id}`,
        token: this.token.token,
        api_key: this.api_token,
      });
      const result = data?.data;
      this.input.kode_pelanggan = result.kode;
      this.input.nama_pelanggan = result.nama;
      setTimeout(() => {
        this.pelanggan = result;
        this.loadingPelanggan = false;
        this.showDetailPelanggan = true;
      }, 500);
    },

    addNewPemasukan() {
      this.loading = true;

      this.options = "add-karyawan";

      const day = this.input.tanggal.getDate();
      const month = this.input.tanggal.getMonth() + 1;
      const year = this.input.tanggal.getFullYear();

      const dateString = `${year.toString()}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

      const dataPost = {
        kode: this.input.reference_code,
        tanggal: dateString,
        jenis_pemasukan: this.selectedJenis,
        keterangan: this.input.keterangan,
        kode_kas: this.selectedKodeKas,
        jumlah: this.input.jumlah,
        operator: this.$nuxt.userData.name,
        kode_pelanggan: this.input.kode_pelanggan,
        nama_pelanggan: this.input.nama_pelanggan
      };

      const endPoint = `/data-pemasukan`;
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
