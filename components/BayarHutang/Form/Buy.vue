<template>
  <div>
    <div
    class="relative flex flex-col min-w-0 break-words bg-transparent mb-4 shadow-sm rounded"
    >
    <hr class="w-full" />
  </div>
  <div
  class="relative flex flex-col min-w-0 break-words bg-transparent w-96 mb-6 shadow-sm rounded"
  >
  <div>
    <div class="flex justify-start space-x-0">
      <div class="flex-none w-36">
        <h4 class="font-bold text-md">Ref No</h4>
      </div>
      <div class="shrink-0 w-full">
        <div class="flex justify-between space-x-2">
          <div class="shrink-0 w-30 text-black">
            <input type="text" v-model="detail.kode" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div>
    <div class="flex justify-start space-x-0 py-6">
      <div class="flex-none w-36">
        <h4 class="font-bold text-md ">Pilih Kode Kas</h4>
      </div>
      <div class="shrink-0 w-60 text-black">
        <div v-if="loadingKasList || loadingKas">
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
        <span class="">Preparing data kas ...</span>
      </div>
      <div v-else>
        <Select2
        :disabled="disableSelectedKas"
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
    </div>
  </div>
  <div
  v-if="error && validation?.kode_kas"
  class="mt-6 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
  role="alert"
  >
  <span class="font-medium">Danger alert!</span>
  {{ validation?.kode_kas[0] }}
</div>
</div>
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
<span class=" font-semibold">Preparing data kas</span>
</div>
<div v-else>
  <div
  v-if="showDetailKas && detailKas"
  class="flex justify-start space-x-0 mt-6"
  >
  <div class="flex-none w-36">
    <h4 class="font-bold text-md ">Saldo Kas</h4>
  </div>
  <div class="shrink-0 w-60 text-black">
    <input type="text" disabled :value="$format(detailKas.saldo)" />
  </div>
</div>
</div>

<div>
  <div class="flex justify-start space-x-0 py-6">
    <div class="flex-none w-36">
      <h4 class="font-bold text-md ">Keterangan</h4>
    </div>
    <div class="shrink-0 w-full">
      <label
      for="keterangan"
      class="block mb-2 text-sm font-medium  dark:"
      >Keterangan</label
      >
      <textarea
      id="keterangan"
      rows="4"
      class="block text-black p-2.5 w-full text-sm text-blueGray-700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark: dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Tambahkan keterangan..."
      :disabled="!showDetailKas"
      v-model="detail.keterangan"
      @input="inputKeterangan($event)"
      ></textarea>
    </div>
  </div>
</div>
</div>

<div
class="bg-transparent mb-4 shadow-sm rounded w-full overflow-x-auto overflow-y-auto"
>
<div>
  <table class="w-full text-md border-collapse border-b">
    <thead
    class="text-xs bg-transparent border-b border-t dark:border-gray-700  uppercase dark:bg-gray-700 dark:text-gray-400"
    >
    <tr>
      <th class="px-6 py-3">No Hutang</th>
      <th class="px-6 py-3">Lunas</th>
      <th class="px-6 py-3">Tgl Hutang</th>
      <th class="px-6 py-3">Barang</th>
      <th class="px-6 py-3">QTY</th>
      <th class="px-6 py-3">Jumlah Hutang</th>
      <th class="px-6 py-3">Supplier</th>
    </tr>
  </thead>

  <tbody>
    <tr class="bg-transparent border-b ">
      <th
      scope="row"
      class="px-10 py-4 font-medium whitespace-nowrap text-left"
      >
      <span
      class="bg-blue-100 text-blue-800 me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 font-bold"
      >
      {{ detail.kode }}
    </span>
  </th>
  <td class="whitespace-nowrap p-8 text-lg">
    <span
    v-html="
    generateLunas({ lunas: detail.lunas, visa: detail.visa })
    "
    ></span>
  </td>
  <td class="whitespace-nowrap p-4 text-lg">
    {{ $moment(detail.tanggal).format("LL") }}
  </td>
  <td class="whitespace-nowrap p-4 text-lg">
    <span
    class="bg-green-100 text-green-800 me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"
    >
    {{ detail.nama_barang }} ({{ detail.kode_barang }})
  </span>
</td>
<td class="whitespace-nowrap p-8 text-lg">
  <span
  class="bg-blue-100 me-2 px-2.5 py-0.5 text-blue-800 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"
  >
  {{ parseFloat(detail.qty_pembelian) }} {{ detail.satuan_pembelian_barang }}
</span>
</td>
<td class="px-10 py-4 font-bold">
  {{ $format(detail.jumlah) }}
</td>
<td class="whitespace-nowrap p-4 text-lg">
  <span class="bg-green-100 text-green-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
    {{ detail.supplier }} ( {{ detail.nama_supplier }} )
  </span>
</td>
</tr>

<tr v-if="loadingSaldo">
  <th
  colspan="3"
  scope="row"
  class="px-6 py-4 font-medium whitespace-nowrap text-center overflow-x-hidden"
  >
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
<span v-if="loadingSaldo">Proses pengecekan saldo ...</span>
</th>
</tr>
</tbody>
</tbody>
</table>
</div>
</div>

<form @submit.prevent="simpanBayarHutang(false)">
  <div
  class="bg-transparent shadow-sm rounded w-full flex justify-start space-x-4 mt-6"
  >
  <div class="shrink w-[80vw]">
    <div
    class="grid grid-cols-1 bg-emerald-600 h-48 content-evenly justify-items-center text-white"
    >
    <div class="col-span-full ">
      <h4 class="text-white font-bold text-4xl">
        {{ showKembali ? kembali : angsuran }}
      </h4>
    </div>
  </div>
  <div class="grid grid-cols-1 bg-blueGray-600 h-12 text-white">
    <div class="col-span-full p-2">
      <h6 class="text-white text-lg font-bold">
        {{ showKembali ? terbilangKembali : terbilangAngsuran }}
      </h6>
    </div>
  </div>
</div>

<div>
  <ul class="w-80 text-sm font-medium  bg-transparent">
    <li class="w-full py-2">
      <div class="grid grid-cols-3 gap-0">
        <div>
          <label class="font-bold">Sisa Hutang</label>
        </div>
        <div>
          <input
          type="text"
          disabled
          class="h-8 text-black"
          v-model="jumlahRupiah"
          />
        </div>
      </div>
    </li>
    <li class="w-full py-2">
      <div class="grid grid-cols-3 gap-0">
        <div>
          <label class="font-bold">Return</label>
        </div>
        <div>
          <input
          disabled
          type="number"
          value="0"
          class="h-8 text-black"
          v-model="input.ppn"
          @input="recalculateTotalBayar(input.diskon)"
          />
        </div>
      </div>
    </li>

    <li class="w-full py-2">
      <div class="grid grid-cols-3 gap-0">
        <div>
          <label class="font-bold">Bayar</label>
        </div>
        <div>
          <input
          type="text"
          class="h-8 text-black"
          v-model="input.bayar"
          @input="changeBayar($event)"
          @focus="clearBayar"
          tabindex="0"
          />
        </div>
      </div>
    </li>
    <div v-if="loadingKembali">
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
    <span class=" font-semibold">Preparing bayar</span>
  </div>
  <li v-else class="w-full py-2">
    <div v-if="showKembali" class="grid grid-cols-3 gap-0">
      <div>
        <label class="font-bold">Kembali</label>
      </div>
      <div>
        <input
        type="text"
        class="h-8 text-black"
        disabled
        v-model="input.kembaliRupiah"
        />
      </div>
    </div>
    <div v-if="showAngsuran" class="grid grid-cols-3 gap-0">
      <div>
        <label class="font-bold">Sisa Hutang</label>
      </div>
      <div>
        <input
        type="text"
        class="h-8 text-black"
        disabled
        v-model="input.sisaHutangRupiah"
        />
      </div>
    </div>
  </li>
</ul>
</div>
</div>

<div class="flex justify-end mt-2">
  <div>
    <button
    class="text-white bg-emerald-600 hover:bg-[#d6b02e] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
    >
    <div v-if="loadingSave">
      <svg
      aria-hidden="true"
      role="status"
      class="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
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
      fill="#1C64F2"
      />
    </svg>
    Loading...
  </div>
  <div v-else>
    <i class="fa-regular fa-floppy-disk"></i> Bayar Hutang
  </div>
</button>
</div>
</div>
</form>

<div v-if="loading">
  <molecules-row-loading :loading="loading" :options="options" />
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

      slug: {
        type: String,
      },
      current: {
        type: [Number, String],
      default: null,
      },
      pageData: {
        type: String,
      default: null,
      },
      parentRoute: {
        type: String,
      default: null,
      },
      typeRoute: {
        type: String,
      default: null,
      },
    },

    components: {
      Datepicker,
    },

    data() {
      return {
        loading: null,
        loadingSaldo: null,
        loadingSave: null,
        options: null,
        detail: {},
        api_url: process.env.NUXT_ENV_API_URL,
        api_token: process.env.NUXT_ENV_APP_TOKEN,
        idHutang: this.$route.query["id"],
        kodeHutang: this.$route.params.kode,
        currentPage: 1,
        changeAgain: false,
        selectedKodeKas: null,
        disableSelectedKas: false,
        kas: [],
        detailKas: {},
        showDetailKas: true,
        loadingKas: null,
        loadingKasList: null,
        showKembali: null,
        showAngsuran: null,
        loadingKembali: null,
        angsurans: [],
        input: {
          kasId: null,
          tanggal: new Date(),
          reference_code: null,
          bayar: "Rp. 0",
          bayarRupiah: "Rp. 0",
          diterima: null,
          barang: null,
          qty: 1,
          diskon: 0,
          ppn: 0,
          total: "Rp. 0",
          kode_kas: null,
          kembali: 0,
          diskon_rupiah: 0,
          jatuhTempo: 0,
          kembaliRupiah: "Rp. 0",
          angsuran: 0,
          sisaHutangRupiah: "Rp. 0",
        },
        jumlahRupiah: "Rp. 0",
        error: false,
        validation: [],
        total: 0,
        bayar: 0,
        kembali: "Rp. 0",
        angsuran: "Rp. 0",
        terbilangAngsuran: "Nol Rupiah",
        terbilangKembali: "Nol Rupiah",
        addQty: false,
        qtyById: 1,
        formatCalculateRupiah: 0,
        changeSupplierShow: false,
        draft: false,
      };
    },

    beforeMount() {
      this.authTokenStorage();
    },

    created() {
      this.$nuxt.checkNewData();
    },

    mounted() {
      this.detailHutang(this.idHutang, true);
      this.getKasData();
    },

    methods: {
      generateLunas(data) {
        let icon;
        if (data.lunas && data.visa !== "HUTANG") {
          icon = `<i class="fa-solid fa-check fa-lg text-emerald-600"></i>`;
        } else {
          icon = '<i class="fa-solid fa-circle-minus text-red-600 fa-lg"></i>';
        }
        return icon;
      },

      detailHutang(id = "", loading) {
        try {
          if (this.$_.isObject(this.token)) {
            this.$nuxt.globalLoading = loading;
            this.$nuxt.globalLoadingMessage = "Proses menyiapkan data hutang ...";

            const endPoint = `${this.api_url}/data-hutang/${id}`;
            const config = {
              headers: {
                Accept: "application/json",
                Authorization: `Bearer ${this?.token?.token}`,
                "Content-Type": "application/json",
                "Sirmuh-Key": process.env.NUXT_ENV_APP_TOKEN,
              },
            };
            this.$api
            .get(endPoint, config)
            .then(({ data }) => {
              if (data.success) {
                this.detail = data?.data;
                this.angsurans = data?.angsurans;
                this.jumlahRupiah = this.$format(data?.data?.jumlah);
                this.getKasDetail(data?.data?.kas_id);
              }
            })
            .finally(() => {
              setTimeout(() => {
                this.loading = false;
              }, 1000);
            })
            .catch((err) => {
              console.log(err);
            });
          } else {
            this.$swal({
              icon: "error",
              title: "Oops...",
              text: "Error Access!",
            });
            this.$router.replace("/");
          }
        } catch (err) {
          console.error(err);
        }
      },

      gantiHarga(id) {
        if (id) {
          this.showGantiHarga = true;
        }
      },

      changeBayar(e) {
        this.loadingKembali = true;
        const valueBayar = Number(e.target.value);
        const endPoint = `${this.api_url}/check-bayar-hutang/${this.idHutang}?bayar=${valueBayar}`;
        const config = {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${this?.token?.token}`,
            "Content-Type": "application/json",
            "Sirmuh-Key": process.env.NUXT_ENV_APP_TOKEN,
          },
        };
        this.$api
        .get(endPoint, config)
        .then(({ data }) => {
          if (!data.lunas) {
            this.showKembali = false;
            this.showAngsuran = true;
            this.input.sisaHutangRupiah = `Rp. ${data.formatRupiah}`;
            this.input.angsuran = data.sisaHutang;
            this.angsuran = `Sisa Hutang : Rp. ${data.formatRupiah}`;
            this.terbilangAngsuran = data?.terbilang;
            this.input.bayar = data?.bayar;
            this.input.bayarRupiah = `Rp. ${data.bayarRupiah}`;
          }

          if (data.lunas) {
            this.showAngsuran = false;
            this.showKembali = true;
            this.input.kembaliRupiah = `Rp. ${data.formatRupiah}`;
            this.input.kembali = data.kembali;
            this.kembali = `Lunas : Rp. ${data.jmlHutang}`;
            this.terbilangKembali = data?.terbilang;
            this.input.bayar = data?.bayar;
            this.input.bayarRupiah = `Rp. ${data.bayarRupiah}`;
          }
          this.input.kasId = data.kasId;
        })
        .finally(() => {
          setTimeout(() => {
            this.loadingKembali = false;
          }, 1000);
        })
        .catch((err) => {
          console.log(err);
        });
      },

      clearBayar() {
        this.input.bayar = null;
        this.input.bayarRupiah = null;
      },

      transformDataKasLists(rawData) {
        return rawData
        .filter((item) => item && item.kode)
        .map((item) => ({
          id: item.id,
          text: item.nama,
        }));
      },

      inputKeterangan(e) {
        this.input.keterangan = e.target.value;
      },

      changeKodeKas(newValues) {
        if (newValues && newValues.id !== undefined) {
          const kasId = this.detail.kas_id
          ? this.detail.kas_id
          : Number(newValues.id);
          if (!isNaN(kasId)) {
            this.selectedKodeKas = this.detail.kas_id
            ? this.detail.kas_id
            : kasId;
            this.getKasDetail(kasId);
            this.disableSelectedKas = this.selectedKodeKas ? true : false;
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

        setTimeout(() => {
          this.showDetailKas = true;
          this.detailKas = result;
          this.loadingKas = false;
          this.selectedKodeKas = id;
        }, 500);
      },

      checkSaldo() {
        this.loadingSaldo = true;
        this.$nuxt.globalLoadingMessage = "Proses pengecekan saldo ...";
        this.options = "penjualan-tokog";
        const endPoint = `/check-saldo/${this.detail.kas_id !== null ? this.detail.kas_id : this.input.kode_kas}?entitas=${this.input.bayar}`;
        const config = {
          headers: {
            Authorization: `Bearer ${this.token.token}`,
          },
        };

        this.$api
        .get(endPoint, config)
        .then((data) => {
          if (data?.data?.error) {
            this.input = {};
            this.$swal({
              icon: "error",
              title: "Oops...",
              text: data?.data?.message,
            });
          }
        })
        .finally(() => {
          setTimeout(() => {
            this.loadingSaldo = false;
          }, 500);
        })
        .catch((err) => {
          console.log(err);
        });
      },

      pad(number) {
        if (number < 10) {
          return "0" + number;
        }
        return number;
      },

      async getKasData() {
        this.loadingKasList = true;
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
            this.loadingKasList = false;
          }, 500);
        })
        .catch((err) => console.log(err));
      },

      simpanBayarHutang(draft) {
      // di matiin dulu sementara
        this.loadingSave = !draft ? true : false;
        this.checkSaldo();
        this.options = "bayar-hutang";
        const endPoint = `/data-hutang/${this.idHutang}`;
        const config = {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token.token}`,
          },
        };

        console.log(this.input.kode_kas)

        const prepareData = {
          bayar: this.input.bayar,
          ket: this.input.keterangan,
          kode_kas: this.input.kode_kas
        };

        this.$api
        .put(endPoint, prepareData, config)
        .then(({ data }) => {
          if (data?.success && !draft) {
            const ref_code = { ref_code: this.kodeHutang };
            localStorage.removeItem("ref_code");
            localStorage.setItem("cetak_code", JSON.stringify(ref_code));
            this.$swal({
              position: "top-end",
              icon: "success",
              title: data?.message,
              showConfirmButton: false,
              timer: 1000,
            });
          }
        })
        .finally(() => {
          this.loadingSave = false;

          this.detailHutang(this.idHutang, false);
          setTimeout(() => {
            this.$router.push({
              path: "/dashboard/transaksi/bayar-hutang/cetak",
              query: {
                kode: this.kodeHutang,
              },
            });
          }, 1000);
        })
        .catch((error) => {
          if (error?.message) {
            this.loading = false;
            this.error = true;
            this.$swal({
              title: "Data belum lengkap?",
              text: "Periksa kembali kolom input data!!",
              icon: "question",
            });
            this.validation = error?.response?.data;
          }
        });
      },
    },

    computed: {
      token() {
        return this.$store.getters["auth/getAuthToken"];
      },
    },

    watch: {
      notifs() {
        if (this.$nuxt.notifs && this.$_.size(this.$nuxt.notifs) > 0) {
          if (this.$nuxt.notifs[0].routes === "bayar-hutang") {
            this.detailHutang(this.idHutang, false);
          }
        }
      },
    },
  };
</script>
