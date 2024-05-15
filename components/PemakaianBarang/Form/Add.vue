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
  Check Data Pemakaian Barang
</button>
</div>

<div v-if="success" class="flex justify-center bg-transparent mt-2 mb-2">
  <div>
    <ul class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div class="flex justify-between space-x-4">
          <div>
            <b>Barang</b>
          </div>
          
          <div>
            <b>QTY</b>
          </div>

          <div>
            <b>Jenis</b>
          </div>
        </div>
      </li>
      <li class="w-full px-4 py-0 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div class="flex justify-between space-x-4">
          <div>
            {{showData.nama_barang_asal}}({{showData.kode_barang_asal}})
          </div>
          <div>
            {{parseFloat(showData.qty)}} {{showData.satuan_asal}}
          </div>
          <div>
            {{showData.keperluan}}
          </div>
        </div>
      </li>

      <li class="w-full px-4 py-0 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div class="flex justify-between space-x-4">
          <div>
            {{showData.nama_barang_tujuan}}({{showData.kode_barang_tujuan}}) <i class="fa-solid fa-right-left text-2xl text-emerald-700"></i> {{parseFloat(showData.stok_tujuan)}}{{showData.satuan_tujuan}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>

<div class="flex-auto px-4 px-10 py-10 pt-0">
  <form @submit.prevent="addPemakaianBarang">
    <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
      Data Pemakaian Barang
    </h6>
    <div class="flex justify-start space-x-6">
      <div class="w-full w-6/12">
        <label for="kode_ref" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kode Referensi</label>
        <input type="text" v-model="input.reference_code" id="kode_ref" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
      </div>
      <div class="w-full w-6/12">
        <label for="tgl" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal Pemakaian Barang</label>
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
          htmlFor="barang_asal"
          >
          Pilih Barang
        </label>
        <Select2
        id="barang_asal"
        v-model="selectedBarangAsal"
        :settings="{ allowClear: true }"
        :options="[{ id: null, text: 'Pilih Barang' }, ...barangs]"
        @change="changeBarangAsal($event)"
        @select="changeBarangAsal($event)"
        placeholder="Pilih Barang"
        />
      </div>

      <div v-if="validations.barang_asal"  class="w-full w-12/12">
        <div>
          <div class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <i class="fa-solid fa-circle-info"></i>
            <div class="px-2">
              {{ validations.barang_asal[0] }}
            </div>
          </div>
        </div>
      </div>

      <div v-if="loadingBarangAsal">
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
      <span class="text-white">Preparing data barang</span>
    </div>

    <div>
      <div v-if="parseFloat(detailBarangAsal.toko) <= 0" class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
        <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <span class="sr-only">Info</span>
        <div>
          <span class="font-medium">{{detailBarangAsal.nama}}, stok tersedia :</span> {{parseFloat(detailBarangAsal.toko)}} {{detailBarangAsal.satuan}}
        </div>
      </div>
      <div v-else class="flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
        <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <span class="sr-only">Info</span>
        <div>
          <span class="font-medium">{{detailBarangAsal.nama}}, stok tersedia :</span> {{parseFloat(detailBarangAsal.toko)}} {{detailBarangAsal.satuan}}
        </div>
      </div>
    </div>
  </div>

  <div class="w-6/12">
    <h4>Qty</h4>
    <div class="relative mb-3">
      <input :disabled="parseFloat(detailBarangAsal.toko) <= 0" type="text" v-model="input.qty" @input="inputQty" @focus="cleanQty" class="w-full"/>
    </div>
    <div v-if="validations.qty"  class="w-full w-12/12">
      <div>
        <div class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <i class="fa-solid fa-circle-info"></i>
          <div class="px-2">
            {{ validations.qty[0] }}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="flex justify-start space-x-6 mt-12">
  <div class="w-full w-6/12">
    <div class="relative mb-3">
      <label
      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
      htmlFor="keperluan"
      >
      Jenis Keperluan
    </label>
    <Select2
    :disabled="parseFloat(detailBarangAsal.toko) <= 0"
    id="keperluan"
    v-model="selectedKeperluan"
    :settings="{ allowClear: true }"
    :options="[{ id: null, text: 'Jenis Keperluan' }, ...keperluans]"
    @change="changeJenisKeperluan($event)"
    @select="changeJenisKeperluan($event)"
    placeholder="Jenis Keperluan"
    />
  </div>
  <div v-if="validations.keperluan"  class="w-full w-12/12">
    <div>
      <div class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        <i class="fa-solid fa-circle-info"></i>
        <div class="px-2">
          {{ validations.keperluan[0] }}
        </div>
      </div>
    </div>
  </div>
</div>
<div v-if="selectedKeperluan === 'CETAK'" class="w-full w-6/12">
  <div class="relative mb-3">
    <label
    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
    htmlFor="barang_tujuan"
    >
    Pilih Barang Cetak
  </label>
  <Select2
  id="barang_tujuan"
  v-model="selectedBarangTujuan"
  :settings="{ allowClear: true }"
  :options="[{ id: null, text: 'Pilih Barang' }, ...barangDests]"
  @change="changeBarangTujuan($event)"
  @select="changeBarangTujuan($event)"
  placeholder="Pilih Barang"
  />
</div>

<div v-if="loadingBarangTujuan">
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
<span class="text-white">Preparing data barang</span>
</div>

<div v-if="showDetailBarangTujuan">
  <div v-if="parseFloat(detailBarangTujuan.toko) <= 0" class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
    <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <span class="sr-only">Info</span>
    <div>
      <span class="font-medium">{{detailBarangTujuan.nama}}, stok tersedia :</span> {{parseFloat(detailBarangTujuan.toko)}} {{detailBarangTujuan.satuan}}
    </div>
  </div>
  <div v-else class="flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
    <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <span class="sr-only">Info</span>
    <div>
      <span class="font-medium">{{detailBarangTujuan.nama}}, stok terkini :</span> {{parseFloat(detailBarangTujuan.toko)}} {{detailBarangTujuan.satuan}}
    </div>
  </div>
</div>
</div>
</div>

<div class="flex justify-start space-x-6 mt-12">
  <div class="w-full w-12/12">
    <div class="relative mb-3">
      <label for="keterangan" class="block mb-2 text-sm font-medium dark:"
      >Keterangan</label
      >
      <textarea
      :disabled="parseFloat(detailBarangAsal.toko) <= 0"
      id="keterangan"
      rows="4"
      class="block p-2.5 w-full text-sm text-blueGray-700 bg-gray-50 rounded-lg border border-gray-300"
      placeholder="Tambahkan keterangan..."
      v-model="input.keterangan"
      @input="inputKeterangan($event)"
      ></textarea>
    </div>
    <div v-if="validations.keterangan"  class="w-full w-12/12">
      <div>
        <div class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <i class="fa-solid fa-circle-info"></i>
          <div class="px-2">
            {{ validations.keterangan[0] }}
          </div>
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
  <span v-else><i class="fa-solid fa-plus"></i> Simpan Data</span>
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
        loadingBarangAsal: null,
        loadingBarangTujuan: null,
        selectedBarangAsal: null,
        selectedBarangTujuan: null,
        selectedKeperluan: null,
        barangs: [],
        barangDests: [],
        keperluans: [],
        loadingSave: null,
        success: null,
        messageAlert: null,
        options: "",
        api_url: process.env.NUXT_ENV_API_URL,
        api_token: process.env.NUXT_ENV_APP_TOKEN,
        jumlahDest: 0,
        input: {
          tanggal: new Date(),
          reference_code: null,
          qty: 0,
          keterangan: ''
        },
        validations: [],
        datePickerConfig: {
          range: false,
        },
        dateFormat: "YYYY-MM-DD",
        showData: {},
        showdetailBarangAsal: null,
        detailBarangAsal: {},
        showDetailBarangTujuan: null,
        detailBarangTujuan: {},
      };
    },

    beforeMount() {
      this.authTokenStorage();
    },

    mounted() {
      this.getBarangAsalLists();
      this.getBarangTujuanLists();
      this.getJenisKeperluan();
      this.generateReferenceCode();
    },

    methods: {
      cleanQty() {
        this.input.qty = null;
      },

      async generateReferenceCode() {
        this.loadingReferenceCode = true;
        this.$nuxt.globalLoadingMessage = "Proses menyiapkan data pemakaian barang ...";

        const data = await getData({
          api_url: `${this.api_url}/generate-reference-code/pemakaian-barang`,
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
        this.$router.push("/dashboard/backoffice/pemakaian-barang");
      },

      inputQty(e) {
        if(e.target.value !== undefined) {
          this.input.qty = e.target.value
        }
      },

      changeBarangAsal(newValues) {
        if (newValues.id !== undefined) {
          this.selectedBarangAsal = newValues?.id;
          this.getDetailBarangAsal(this.selectedBarangAsal)
        }
      },

      changeBarangTujuan(newValues) {
        if (newValues.id !== undefined) {
          this.selectedBarangTujuan = newValues?.id;
          this.getDetailBarangTujuan(this.selectedBarangTujuan)
        }
      },

      changeJenisKeperluan(newValues) {
        if (newValues.id !== undefined) {
          this.selectedKeperluan = newValues?.id;
        }
      },

      transformBarangAsalLists(rawData) {
        return rawData
        .filter((item) => item && item.kode)
        .map((item) => ({
          id: item.kode,
          text: `${item.nama} - ${item.kategori} (${item.kode})`,
        }));
      },

      transformBarangTujuanLists(rawData) {
        return rawData
        .filter((item) => item && item.kode)
        .map((item) => ({
          id: item.kode,
          text: `${item.nama} - ${item.kategori} (${item.kode})`,
        }));
      },

      transformJenisKeperluan(rawData) {
        return rawData
        .filter((item) => item && item.id)
        .map((item) => ({
          id: item.kode,
          text: `${item.kode}`,
        }));
      },

      async getBarangAsalLists() {
        this.loading = true;
        const getAllPages = async () => {
          let allData = [];
          let currentPage = 1;
          let totalPages = 1;

          while (currentPage <= totalPages) {
            const data = await getData({
              api_url: `${this.api_url}/barang-list-pemakaian`,
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
          this.barangs = this.transformBarangAsalLists(data);
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false;
          }, 500);
        })
        .catch((err) => console.log(err));
      },

      async getBarangTujuanLists() {
        this.loading = true;
        const getAllPages = async () => {
          let allData = [];
          let currentPage = 1;
          let totalPages = 1;

          while (currentPage <= totalPages) {
            const data = await getData({
              api_url: `${this.api_url}/barang-cetak-pemakaian`,
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
          this.barangDests = this.transformBarangTujuanLists(data);
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false;
          }, 500);
        })
        .catch((err) => console.log(err));
      },

      async getJenisKeperluan() {
        const getAllPages = async () => {
          let allData = [];
          let currentPage = 1;
          let totalPages = 1;

          while (currentPage <= totalPages) {
            const data = await getData({
              api_url: `${this.api_url}/jenis-keperluan`,
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
          this.keperluans = this.transformJenisKeperluan(data);
        })
        .catch((err) => console.log(err));
      },

      getDetailBarangAsal(kode) {
        this.loadingBarangAsal = true
        const endPoint = `/detail-barang-by-kode?kode=${kode}`;
        const config = {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.token.token}`,
          },
        };

        this.$api
        .get(endPoint, config)
        .then(({data}) => {
          if(data.success) {
            this.showDetailBarangAsal = true
            this.detailBarangAsal = data?.data
          }
        })
        .finally(() => {
          setTimeout(() => {
            this.loadingBarangAsal = false
          }, 500)
        })
        .catch((err) => {
          this.loadingBarangAsal = false
          console.log(err)
        })
      },

      getDetailBarangTujuan(kode) {
        this.loadingBarangTujuan = true
        const endPoint = `/detail-barang-by-kode?kode=${kode}`;
        const config = {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.token.token}`,
          },
        };

        this.$api
        .get(endPoint, config)
        .then(({data}) => {
          if(data.success) {
            this.showDetailBarangTujuan = true
            this.detailBarangTujuan = data?.data
          }
        })
        .finally(() => {
          setTimeout(() => {
            this.loadingBarangTujuan = false
          }, 500)
        })
        .catch((err) => {
          this.loadingBarangTujuan = false
          console.log(err)
        })
      },

      addPemakaianBarang() {
        this.loadingSave = true;

        this.options = "add-mutasi-kas";

        const dataPost = {
          kode: this.input.reference_code,
          barang_asal: this.selectedBarangAsal,
          qty: this.input.qty,
          barang_tujuan: this.selectedBarangTujuan,
          keperluan: this.selectedKeperluan,
          keterangan: this.input.keterangan
        };

        const endPoint = `/pemakaian-barang`;
        const config = {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.token.token}`,
          },
        };
        console.log(dataPost)

        this.$api
        .post(endPoint, dataPost, config)
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
