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
  Check Data Koreksi
</button>
</div>

<div v-if="success" class="flex justify-center bg-transparent mt-2 mb-2">
  <ul class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
      Barang : <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">{{showData.nama}}({{showData.kode}})</span>
    </li>
    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
      Stok Kini : <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
        {{showData.toko}}{{showData.satuan}}
      </span>
    </li>
    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
      Stok Lalu : {{input.stok_lalu}}{{showData.satuan}}
    </li>
  </ul>
</div>

<div class="flex-auto px-4 px-10 py-10 pt-0">
  <form @submit.prevent="addKoreksiStok">
    <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
      Data Koreksi Stok
    </h6>
    <div class="flex justify-start space-x-6">
      <div class="w-full w-6/12">
        <label for="nama_barang" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kode Referensi</label>
        <input type="text" v-model="input.reference_code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
      </div>
      <div class="w-full w-6/12">
        <label for="nama_barang" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal Koreksi</label>
        <datepicker
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
      <div class="w-full w-6/12">
        <label for="nama_barang" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Barang</label>
        <input disabled type="text" v-model="input.nama_barang" id="nama_barang" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Harga Satuan" />
      </div>

      <div class="w-full w-6/12">
        <label for="supplier" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kode Supplier</label>
        <input type="text" v-model="input.supplier" id="supplier" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Rp. 0" />
      </div>
    </div>

    <div class="flex justify-start space-x-6 mt-12">
      <div class="w-full w-6/12">
        <label for="stok_lalu" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stok Lalu</label>
        <div class="flex justify-between space-x-2">
          <div class="shrink-0 w-full">
            <input v-model="input.stok_lalu" type="text" id="stok_lalu" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Stok Lalu" /> 
          </div>
          <div>
            {{input.satuan}}
          </div>
        </div>
      </div>

      <div class="w-full w-6/12 px-12">
        <label for="stok_kini" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stok Kini</label>
        <div class="flex justify-between space-x-2">
          <div class="shrink-0 w-full">
            <input type="text" v-model="input.stok_kini" id="stok_kini" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Stok Kini" @input="inputStokKini($event)"/>
          </div>
          <div>
            {{input.satuan}}
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center mt-2">
      <div v-if="validations.stok_kini"  class="w-full w-12/12">
        <div>
          <div class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <i class="fa-solid fa-circle-info"></i>
            <div class="px-2">
              {{ validations.stok_kini[0] }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-start space-x-6 mt-12">
      <div class="w-full w-6/12">
        <label for="hpp" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Harga Satuan</label>
        <input disabled type="text" v-model="input.hpp" id="hpp" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Harga Satuan" />
      </div>

      <div class="w-full w-6/12">
        <label for="selisih" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selisih</label>
        <input type="text" v-model="input.selisih" id="selisih" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Rp. 0" />
      </div>
    </div>

    <div class="flex justify-start space-x-6 mt-12">
      <div class="w-full w-12/12">
        <div class="relative mb-3">
          <label for="keterangan" class="block mb-2 text-sm font-medium dark:"
          >Alasan</label
          >
          <textarea
          id="keterangan"
          rows="4"
          class="block p-2.5 w-full text-sm text-blueGray-700 bg-gray-50 rounded-lg border border-gray-300"
          placeholder="Tambahkan Alasan..."
          v-model="input.alasan"
          @input="inputAlasan($event)"
          ></textarea>

          <div v-if="validations.alasan" class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <i class="fa-solid fa-circle-info"></i>
            <div class="px-2">
              {{ validations.alasan[0] }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr class="mt-6 border-b-1 border-blueGray-300" />

    <div class="flex flex-wrap">
      <div class="w-full w-12/12 px-4 py-6">
        <button
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
      <span v-else><i class="fa-solid fa-plus"></i> Submit</span>
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
        loadingSave: null,
        selectedBarang: null,
        success: null,
        messageAlert: null,
        options: "",
        api_url: process.env.NUXT_ENV_API_URL,
        api_token: process.env.NUXT_ENV_APP_TOKEN,
        input: {
          tanggal: new Date(),
          reference_code: null,
          stok_lalu: 0,
          stok_kini: 0,
          satuan: null,
          hpp: 0
        },
        barangs: [],
        detail: {},
        validations: [],
        datePickerConfig: {
          range: false,
        },
        dateFormat: "YYYY-MM-DD",
        showData: {},
        kode_barang: this.$route.query["barang"]
      };
    },

    beforeMount() {
      this.authTokenStorage();
    },

    mounted() {
      this.generateReferenceCode();
      this.getDetailBarang(this.kode_barang);
    },

    methods: {
      async generateReferenceCode() {
        this.loadingReferenceCode = true;
        this.$nuxt.globalLoadingMessage = "Proses menyiapkan data kas ...";

        const data = await getData({
          api_url: `${this.api_url}/generate-reference-code/koreksi-stok`,
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

      inputAlasan(e) {
        this.input.alasan = e.target.value
      },

      closeSuccessAlert() {
        this.success = false;
        this.message = "";
      },

      backTo() {
        this.$router.push("/dashboard/backoffice/koreksi-stok");
      },

      inputJumlah(e) {
        this.input.jumlah = e.target.value
      },

      inputStokKini(e) {
        const stok_kini = parseFloat(e.target.value);
        this.input.stok_kini = stok_kini;
        const selisih_stok = this.input.stok_kini - this.input.stok_lalu;
        const nilai_selisih = selisih_stok * this.input.hpp;
        this.input.selisih = parseFloat(nilai_selisih).toFixed(2)
      },

      getDetailBarang(kode) {
        this.loading = true;
        this.$nuxt.globalLoadingMessage = "Proses menyiapkan data ...";

        const endPoint = `/detail-barang-by-kode/?kode=${kode}`;
        const config = {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${this.token.token}`,
          },
        };

        this.$api
        .get(endPoint, config)
        .then((data) => {
          const result = data.data.data;
          console.log(result)
          const selisih_stok = this.input.stok_kini - parseFloat(result.toko);
          const nilai_selisih = selisih_stok * result.hpp;
          this.detail = result
          this.input.nama_barang = `${result.nama}(${result.kode})`
          this.input.supplier = result.supplier
          this.input.stok_lalu = parseFloat(result.toko)
          this.input.hpp = parseFloat(result.hpp)
          this.input.satuan = result.satuan
          this.input.selisih = nilai_selisih
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false;
          }, 500);
        })
        .catch((err) => {
          console.log(err);
        });
      },

      addKoreksiStok() {
        this.loadingSave = true;

        this.options = "add-koreksi-stok";
        let day = this.input.tanggal.getDate(), month = this.input.tanggal.getMonth() + 1, year = this.input.tanggal.getFullYear();
        const dataPost = {
          kode: this.input.reference_code,
          tanggal: `${year}-${(month < 10) ? '0' + month : month}-${(day < 10) ? '0' + day : day}`,
          kode_barang: this.detail.kode,
          nama_barang: this.detail.nama,
          satuan: this.input.satuan,
          stok_lalu: this.input.stok_lalu,
          stok_kini: this.input.stok_kini,
          alasan: this.input.alasan,
          selisih: this.input.selisih,
          hpp: this.detail.hpp,
          operator: this.$nuxt.userData.name,
          lokasistok: 'TOKO',
          jenis: 'KOREKSI STOK'
        };

        const endPoint = `/koreksi-stok`;
        const config = {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${this.token.token}`,
          },
        };
        console.log(dataPost)

        const formData = new FormData;
        formData.append('kode', dataPost.kode)
        formData.append('tanggal', dataPost.tanggal)
        formData.append('kode_barang', dataPost.kode_barang)
        formData.append('nama_barang', dataPost.nama_barang)
        formData.append('satuan', dataPost.satuan)
        formData.append('stok_lalu', dataPost.stok_lalu)
        formData.append('stok_kini', dataPost.stok_kini)
        formData.append('alasan', dataPost.alasan)
        formData.append('selisih', dataPost.selisih)
        formData.append('hpp', dataPost.hpp)
        formData.append('operator', dataPost.operator)
        formData.append('lokasistok', dataPost.lokasistok)
        formData.append('jenis', dataPost.jenis)

        this.$api
        .post(endPoint, formData, config)
        .then(({ data }) => {
          if (data.success) {
            console.log(data)
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
