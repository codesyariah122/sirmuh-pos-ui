<template>
  <div>
    <div
    class="relative flex flex-col min-w-0 break-words bg-transparent mb-4 shadow-sm rounded"
    >
    <hr class="w-full" />
  </div>

  <div class="flex justify-between space-x-6">
    <div class="break-words bg-transparent w-96 mb-6 shadow-sm rounded">
      <div>
        <div class="flex justify-start space-x-0">
          <div class="hidden">
           <audio v-if="playSound" autoplay :src="`${$nuxt.soundUrl}/pembelian-notification.mp3`" preload="auto"></audio>
         </div>

         <div class="hidden">
           <audio v-if="startPembelianSound" autoplay :src="`${$nuxt.soundUrl}/sweet_text.mp3`" preload="auto"></audio>
         </div>


         <div class="hidden">
           <audio v-if="errorPembelianSound" autoplay :src="`${$nuxt.soundUrl}/error.mp3`" preload="auto"></audio>
         </div>
         <div class="flex-none w-36">
          <h4 class="font-bold text-md">Ref No</h4>
        </div>
        <div class="shrink-0 w-full">
          <div class="flex justify-between space-x-2">
            <div class="shrink-0 w-30 text-black">
              <input type="text" v-model="input.reference_code" />
            </div>
            <div class="flex-none w-30">
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
        </div>
      </div>
    </div>

    <div>
      <div class="flex justify-start space-x-0">
        <div class="flex-none w-36">
          <h4
          :class="`font-bold text-md ${
            changeAgain ? 'text-emerald-600' : ''
          }`"
          >
          {{ changeAgain ? "Pilih Lagi Produk" : "Pilih Produk" }}
        </h4>
      </div>
      <div class="shrink-0 w-60 text-black">
        <Select2
        v-model="selectedBarangDest"
        :settings="{
          allowClear: true,
          dropdownCss: { top: 'auto', bottom: 'auto' },
        }"
        :options="[{ id: null, text: 'Pilih Barang Jadi' }, ...barangs]"
        @change="changeBarangDest($event)"
        @select="changeBarangDest($event)"
        placeholder="Pilih Barang Jadi"
        />
      </div>
    </div>
    <div
    v-if="error && validation?.barangs"
    class="mt-6 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
    role="alert"
    >
    <span class="font-medium">Danger alert!</span>
    {{ validation?.barangs[0] }}
  </div>
</div>

<div>
  <div class="flex justify-start space-x-0 py-6">
    <div class="flex-none w-36">
      <h4 class="font-bold text-md">Keterangan</h4>
    </div>
    <div class="shrink-0 w-full">
      <label for="keterangan" class="block mb-2 text-sm font-medium dark:"
      >Keterangan</label
      >
      <textarea
      id="keterangan"
      rows="4"
      class="block p-2.5 w-full text-sm text-blueGray-700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark: dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Tambahkan keterangan..."
      v-model="input.keterangan"
      @input="inputKeterangan($event)"
      ></textarea>
    </div>
  </div>
</div>

<div>
  <div class="flex justify-start space-x-0 mt-4">
   <div class="flex-none w-36">
    <h4 class="font-bold text-md">Jenis Keperluan</h4>
  </div>
  <div class="shrink-0 w-full">
    <div class="relative mb-3">
      <label
      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
      htmlFor="keperluan"
      >
      Jenis Keperluan
    </label>
    <Select2
    id="keperluan"
    v-model="selectedKeperluan"
    :settings="{ allowClear: true }"
    :options="[{ id: null, text: 'Jenis Keperluan' }, ...keperluans]"
    @change="changeJenisKeperluan($event)"
    @select="changeJenisKeperluan($event)"
    placeholder="Jenis Keperluan"
    />
  </div>
  <div v-if="validation.keperluan"  class="w-full w-12/12">
    <div>
      <div class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        <i class="fa-solid fa-circle-info"></i>
        <div class="px-2">
          {{ validation.keperluan[0] }}
        </div>
      </div>
    </div>
  </div>
</div>
</div>

</div>
</div>

<div>
  <div class="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
    <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <span class="sr-only">Info</span>
    <div>
      Item Barang Pemakaian Barang.
    </div>
  </div>

  <div>
    <tabs
    :options="{ useUrlFragment: false, defaultTabHash: draftItems.length > 0 ? draftItems[0].id : 1 }"
    >
    <tab
    v-for="(item, idx) in draftItems"
    :key="item.id"
    :name="item.nama"
    :id="item.id"
    >
    <div class="flex justify-start items-center overflow-x-auto">
      <div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table
          class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
          <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
          <tr>
            <th
            scope="col"
            class="px-6 py-3"
            >
            Nama Barang
          </th>
          <th
          scope="col"
          class="px-6 py-3"
          >
          Qty
        </th>
        <th
        scope="col"
        class="px-6 py-3"
        >
        Harga
      </th>
      <th
      scope="col"
      class="px-6 py-3"
      >
      Subtotal
    </th>
  </tr>
</thead>
<tbody>
  <tr v-for="order in draftItems.filter(e => e.id === item.id)" :key="order.id"
    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
    >
    <th
    scope="row"
    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white font-bold"
    >
    {{ order.nama }}
  </th>
  <td class="whitespace-nowrap  px-6 py-4">
    <div class="flex justify-center space-x-2">
      <div>
        {{parseFloat(order.qty)}} {{item.satuan}}
      </div>
    </div>
  </td>

  <td class="px-6 py-4">
    <div class="flex justify-between space-x-2">
      <div>
        {{$format(order.harga)}}
      </div>
    </div>
  </td>
  <td class="px-6 py-4">
    {{$format(order.total)}}
  </td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</tab>
</tabs>
</div>
</div>
</div>


<div
class="bg-transparent mb-4 shadow-sm rounded w-full overflow-x-auto overflow-y-auto"
>
<div v-if="selectedBarangDest && $_.size(listDraftCarts) > 0" class="flex-none w-full mb-2 mt-2">
  <div class="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
    <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <span class="sr-only">Info</span>
    <div>
     List Produksi Barang {{selectedKeperluan}}
   </div>
 </div>
</div>
<div>
  <table class="w-full text-md border-collapse border-b">
    <thead
    class="text-xs bg-transparent border-b border-t dark:border-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400"
    >
    <tr>
      <th class="px-6 py-3">Barang</th>
      <th class="px-6 py-3 w-10">Qty</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in listDraftCarts" :key="item.id"
    class="bg-transparent border-b"
    >
    <th
    scope="row"
    class="w-80 whitespace-nowrap p-4 text-lg border-l-2 border-r-2"
    >
    <span
    class="bg-blue-100 text-blue-800 me-2 px-2.5 py-0.5 text-lg  rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"
    >
    {{ item.nama }}({{ item.kode_barang }})
  </span>
</th>

<td v-if="editingQtyId === item.id" class="px-6 py-4 border-l-2 border-r-2 text-lg w-90">
  <div class="flex justify-between space-x-2">
    <div>
      <input
      type="text"
      v-model="item.qty"
      @input="changeGantiQty($event, item.id, item)"
      @keydown.esc="changeGantiQty($event, item.id, item)" 
      @focus="setInitialQty(item)"
      @keydown.enter="changeGantiQty($event, item.id, item)"
      />
    </div>
    <div>
      <button
      @click="updateItemPemakaian(item.id)"
      class="px-3 py-3 text-xs font-medium text-center text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
      >
      <i class="fa-solid fa-floppy-disk fa-lg"></i>
    </button>
  </div>
</div>
</td>

<td v-else class="px-6 py-4 text-lg border-l-2 border-r-2 w-90">
  <div class="flex justify-between whitespace-nowrap space-x-6 text-lg">
    <div>
      {{ parseFloat(item.qty) }} {{ item.satuan }}
    </div>
    <div>
      <button
      @click="gantiQty(item.id, null)"
      class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
      <i class="fa-solid fa-repeat fa-sm"></i>
    </button>
  </div>
</div>
</td>

<td class="px-10 py-4 text-lg border-l-2 border-r-2 text-center w-60">
  <button
  v-if="lastItemPembelianId"
  @click="deletedBarangCarts(item.id)"
  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
  >
  <i class="fa-solid fa-trash-can text-red-600 text-xl"></i>
</button>
</td>
</tr>

<tr v-if="loadingItem || loadingDelete || loadingSaldo">
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
<span v-if="loadingItem">Checking item pembelian ...</span>
<span v-if="loadingDelete">Loading item deleted ...</span>
<span v-if="loadingSaldo">Proses pengecekan saldo ...</span>
</th>
</tr>
</tbody>
</table>
</div>
</div>

<form @submit.prevent="simpanPemakaianBarang(false)">
  <div
  class="bg-transparent shadow-sm rounded w-full flex justify-start space-x-4 mt-6"
  >

  <div class="shrink w-[80vw]">
    <div
    class="grid grid-cols-1 bg-emerald-600 h-48 content-evenly justify-items-center"
    >
    <div class="col-span-full">
      <h4 class="font-bold text-4xl text-white">
        {{ input.harga_proses_display }}
      </h4>
    </div>
  </div>
  <div v-if="harga_cetak === 0" class="grid grid-cols-1 h-12 bg-blueGray-700 text-white">
    <div class="col-span-full p-2">
      <h6 class="text-lg font-bold">
        {{ terbilang ? terbilang : "Nol Rupiah" }}
      </h6>
    </div>
  </div>
</div>

<div>
  <ul class="w-80 text-sm font-medium bg-transparent">
    <!-- <li class="w-full py-2">
      <div class="grid grid-cols-3 gap-0">
        <div>
          <label class="font-bold">Total</label>
        </div>
        <div>
          <input
          type="text"
          disabled
          class="h-8 text-black"
          v-model="input.total"
          />
        </div>
      </div>
    </li> -->
    <li class="w-full py-2">
      <div class="grid grid-cols-3 gap-0">
        <div>
          <label class="font-bold">Total Harga Proses</label>
        </div>
        <div>
          <input
          type="text"
          disabled
          class="h-8 text-black"
          v-model="input.harga_proses"
          />
        </div>
      </div>
    </li>
    
    <li class="w-full py-2">
      <div class="grid grid-cols-3 gap-0">
        <div>
          <label class="font-bold">Biaya Operasional</label>
        </div>
        <div>
          <input
          type="text"
          disabled
          class="h-8 text-black"
          v-model="input.biaya_operasional"
          />
        </div>
      </div>
    </li>

    <li v-if="harga_cetak > 0" class="w-full py-2">
      <div class="grid grid-cols-3 gap-0">
        <div>
          <label class="font-bold">Harga {{selectedKeperluan}}</label>
        </div>
        <div>
          <input
          type="text"
          disabled
          class="h-8 text-black"
          v-model="input.harga_cetak"
          />
        </div>
      </div>
    </li>
  </ul>
</div>
</div>

<div class="flex justify-end">
  <div>
    <button
    :disabled="!readySubmit"
    class="bg-emerald-600 hover:bg-[#d6b02e] w-80 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 -mr-6 mt-6 mb-6 mb-2 focus:outline-none text-white"
    >
    <div v-if="loading">
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
    <i class="fa-regular fa-floppy-disk"></i> Simpan Data
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
    components: {
      Datepicker,
    },

    data() {
      return {
        playSound: false,
        startPembelianSound: false,
        errorPembelianSound: false,
        options: "purchase-order",
        loadingReferenceCode: null,
        loadingItem: null,
        loadingDelete: null,
        loadingSupplier: null,
        loadingSaldo: null,
        datePickerConfig: {
          range: false,
        },
        dateFormat: "YYYY-MM-DD",
        loading: null,
        options: null,
        api_url: process.env.NUXT_ENV_API_URL,
        api_token: process.env.NUXT_ENV_APP_TOKEN,
        keperluans: [],
        barangs: [],
        barangCarts: [],
        listDraftCarts: [],
        currentPage: 1,
        changeAgain: false,
        selectedBarang: null,
        selectedBarangDest: null,
        selectedKodeKas: null,
        selectedSupplier: null,
        selectedKeperluan: "CETAK",
        showKembali: null,
        loadingKembali: null,
        showGantiHarga: null,
        diskonByBarang: 0,
        lastItemPemakaianId: null,
        masukHutang: null,
        hutang: "Rp. 0",
        showDp: true,
        showBayar: true,
        bayarDpRp: "Rp. 0",
        initialHarga: 0,
        initialQty: 0,
        saldo_hutang: 0,
        detail: {},
        input: {
          tanggal: '',
          reference_code: this.$route.params.kode,
          id_pemakaian: this.$route.query['query'],
          bayar: null,
          barang: null,
          qty: 0,
          diskon: 0,
          ppn: 0,
          total: "Rp. 0",
          biaya_operasional: "Rp. 0",
          harga_proses: "Rp. 0",
          harga_cetak: "Rp. 0",
          harga_proses_display: "Total Harga Proses : Rp. 0",
          supplier: Number(this.$route.query["supplier"]),
          pembayaran: "custom",
          kode_kas: null,
          jatuhTempo: 0,
          hutang: 0,
          kembaliRupiah: "Rp. 0",
          bayarDp: 0,
          biayabongkar: 0,
          keterangan: ''
        },
        draftItems: [],
        products: [],
        readySubmit: false,
        error: false,
        editingItemId: null,
        editingQtyId: null,
        editingOrderQtyId: null,
        validation: [],
        total: 0,
        bayar: 0,
        biaya_operasional: 0,
        harga_proses: 0,
        harga_cetak: 0,
        kembali: "Rp. 0",
        dpAwal: "Rp. 0",
        terbilang: "Nol Rupiah",
        terbilangDp: "Nol Rupiah",
        addQty: false,
        qtyById: 1,
        formatCalculateRupiah: 0,
        changeSupplierShow: false,
        draft: false,
        pembayarans: [
          { id: "cash", text: "cash" },
          { id: "custom", text: "custom" },
          ],
        activeTab: ''
      };
    },

    watch: {
      draftItems(newVal) {
        if (newVal.length > 0) {
          this.activeTab = newVal[0].id; 
        }
      }
    },

    beforeMount() {
      this.authTokenStorage();
    },

    mounted() {
      this.checkItemPemakaian(true);
      this.checkItemPembelian(true);
      this.getBarangDests();
      this.getJenisKeperluan();
    },

    methods: {
      clearBayar() {
        this.input.bayar = null;
        this.input.bayarDp = null;
      },

      clearHarga(draft) {
        draft.harga_beli = null;
      },

      transformJenisKeperluan(rawData) {
        return rawData
        .filter((item) => item && item.id)
        .map((item) => ({
          id: item.kode,
          text: `${item.kode}`,
        }));
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

      checkItemPemakaianDestResult(loading) {
        this.loadingItem = loading;
        this.$nuxt.globalLoadingMessage = "Proses pengecekan item pemakaian ...";

        const endPoint = `/item-pemakaian-dest-result/${this.input.reference_code}`;

        const config = {
          headers: {
            Authorization: `Bearer ${this.token.token}`,
          },
        };

        this.$api
        .get(endPoint, config)
        .then(({ data }) => {
          if (data.success) {
            const selectedBarang = this.transformItemPembelian(data?.data);
            if (selectedBarang !== undefined && selectedBarang.length > 0) {
              this.listDraftCarts = selectedBarang;
              this.input.keterangan = `Pemakaian barang ${this.selectedKeperluan} ${this.input.reference_code}`
            }
          }
        })
        .catch((err) => {
          this.loadingItem = false;
        })
        .finally(() => {
          this.loadCalculatePemakaian();
          setTimeout(() => {
            this.loadingItem = false;
          }, 500);
        });
      },

      checkItemPembelian(loading) {
        this.loadingItem = loading;
        this.$nuxt.globalLoadingMessage = "Proses pengecekan item pemakaian ...";

        const endPoint = `/item-pemakaian-dest/${this.input.reference_code}`;

        const config = {
          headers: {
            Authorization: `Bearer ${this.token.token}`,
          },
        };

        this.$api
        .get(endPoint, config)
        .then(({ data }) => {
          if (data.success) {
            const selectedBarang = this.transformItemPembelian(data?.data);
            if (selectedBarang !== undefined && selectedBarang.length > 0) {

              this.listDraftCarts = selectedBarang;

              this.loadCalculatePemakaian();

              this.barangCarts = [];
            }
          }
        })
        .catch((err) => {
          this.loadingItem = false;
        })
        .finally(() => {
          setTimeout(() => {
            this.loadingItem = false;
          }, 500);
        });
      },

      checkItemPemakaian(loading) {
        this.loadingItem = loading; 
        this.$nuxt.globalLoadingMessage = "Proses pengecekan item pemakaian ...";

        const endPoint = `/item-pemakaian-result/${this.input.reference_code}`;

        const config = {
          headers: {
            Authorization: `Bearer ${this.token.token}`,
          },
        };

        this.$api
        .get(endPoint, config)
        .then(({ data }) => {
          if (data.success) {
            this.loadingItem = false;
            const selectedBarang = this.transformOriginBarang(data?.data);
            if (selectedBarang !== undefined && selectedBarang.length > 0) {
              this.detail = data?.detail;
              this.selectedKeperluan = data?.detail?.keperluan;
              this.input.reference_code = data?.detail?.kode;
              this.input.keterangan = this.listDraftCarts.length === 0 ? data?.detail?.keterangan : '';
              this.input.tanggal = this.$moment(data?.detail?.tanggal, 'YYYY-MM-DD HH:mm:ss').toDate();
              this.draftItems = selectedBarang;
              this.activeTab = this.draftItems[0].id;
              this.loadCalculatePemakaian();
            }
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setTimeout(() => {
            this.loadingItem = false;
          }, 1000);
        });
      },

      gantiQty(itemId = null, barangId = null) {
        if (itemId) {
          this.editingQtyId = itemId;
        }

        if (barangId) {
          this.editingQtyId = barangId;
        }
      },

      changeBarangDest(newValue) {
        this.loadingItem = true;
        if (newValue && newValue.id !== undefined) {
          this.getDetailBarangDest(newValue?.id);
        } else {
          console.log("Value Is Null");
        }
      },

      setInitialQty(draft) {
        draft.qty = null;
        this.initialQty = draft.qty;
      },

      changeGantiQty(e, id, draft) {
        const newQty = e.target.value;
        if(e.key === 'Escape') {
         this.showGantiQty = false;
         this.input.qty = draft.qty;
         draft.qty = this.initialQty;
         this.editingQtyId = null;
       } else if(e.key === 'Enter') {
        this.showGantiQty = false;
        this.input.qty = newQty;
        draft.qty = newQty;
        this.editingQtyId = null;
        this.updateItemPemakaian(id);
      } else {
        this.input.qty = Number(newQty);
      }
    },

    updateItemPemakaian(id) {
      const dataDraft = this.listDraftCarts.filter(item => item.id === id)[0];
      const dataPrepare = {
        kode: this.input.reference_code,
        qty: this.input.qty ? parseFloat(this.input.qty) : parseFloat(dataDraft.qty),
        harga: this.input.harga ? parseFloat(this.input.harga) : parseFloat(dataDraft.harga_beli)
      }
      
      const endPoint = `/item-pemakaian-dest/${id}`;
      const config = {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${this.token.token}`,
        },
      };
      this.$api
      .put(endPoint, dataPrepare, config)
      .then(({ data }) => {
        if(data.success) {
          console.log("Successfully")
        }
      })
      .finally(() => {
        this.checkItemPemakaianDestResult(false);
        this.readySubmit = true;
      })
      .catch((err) => {
        console.log(err);
      });
    },

    transformOriginBarang(results) {
      return results.map(result => ({
        id: result.id,
        nama: result.nama,
        kode: result.kode_pemakaian,
        kode_barang: result.kode,
        satuan: result.satuan,
        harga: result?.harga ? parseFloat(result?.harga) : this.$roundup(result.hpp),
        qty: !isNaN(result.qty) ? Number(result.qty) : 0,
        supplier_id: result.id_supplier,
        nama_supplier: result.nama_supplier,
        supplier: result.supplier,
        total: result.qty !== null ? parseFloat(result.total) : parseFloat(result.hpp)
      }));
    },

    transformItemPembelian(results) {
      if (results !== undefined && results.length > 0) {
        return results.map((result) => {
          this.lastItemPembelianId = result.id;
          this.diskonByBarang = this.$roundup(result.diskon);
          const qtyBarang = result.qty;
          result.qty = qtyBarang > 1 ? qtyBarang : 0;
          const formatCalculateRupiah =
          result.qty > 1 ? result.qty * parseFloat(result.harga) : parseFloat(result.harga);
          this.supplierId = result.supplier_id;
          const transformedBarang = {
            id: result.id,
            id_barang: result.id_barang,
            nama: result.nama,
            kode_barang: result.kode,
            kode: result.kode_pemakaian,
            satuan: result.satuan,
            harga_beli: parseFloat(result.harga),
            qty: Number(result.qty),
            formatCalculateRupiah: formatCalculateRupiah,
            supplier_id: result.supplier_id,
            nama_supplier: result.nama_supplier,
            supplier: result.supplier
          };
          return transformedBarang;
        });
      } else {
        this.diskonByBarang = this.$roundup(results.diskon);
        this.supplierId = results.supplier_id;
        const transformedBarang = {
          id: results.id,
          nama: results.nama,
          kode_barang: results.kode,
          kode: results.kode_pemakaian,
          satuan: results.satuan,
          harga_beli: this.$roundup(results.harga),
          qty: Number(results.qty),
          formatCalculateRupiah: results.formatCalculateRupiah,
          supplier_id: results.supplier_id,
          nama_supplier: results.nama_supplier,
          supplier: results.supplier
        };

        return transformedBarang;
      }
      return [];
    },

    transformBarangDest(result) {
      const transformedBarang = {
        id: result.id,
        nama: result.nama,
        kode: result.kode,
        kode_barang: result.kode,
        satuan: result.satuan,
        harga_beli: parseFloat(result.hpp),
        qty: Number(result.qty),
        formatCalculateRupiah: result.formatCalculateRupiah,
        supplier_id: result.id_supplier,
        nama_supplier: result.nama_supplier,
        supplier: result.supplier
      };

      this.supplierId = result.id_supplier;
      return transformedBarang;
    },

    inputKeterangan(e) {
      this.input.keterangan = e.target.value;
    },

    transformBarangDestLists(rawData) {
      return rawData
      .filter((item) => item && item.kode)
      .map((item) => ({
        id: item.id,
        text: `${item.nama} - ${item.kategori} (${item.kode})`,
      }));
    },

    async getBarangDests() {
      this.loading = true;
      const getAllPages = async () => {
        let allData = [];
        let currentPage = 1;
        let totalPages = 1;
        let endPoint = this.selectedKeperluan === "CETAK" ? '/barang-cetak-pemakaian' : ''

        while (currentPage <= totalPages) {
          const data = await getData({
            api_url: `${this.api_url}${endPoint}`,
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
        this.barangs = this.transformBarangDestLists(data);
      })
      .finally(() => {
        setTimeout(() => {
          this.loading = false;
        }, 500);
      })
      .catch((err) => console.log(err));
    },

    async getDetailBarangDest(id) {
      const data = await getData({
        api_url: `${this.api_url}/data-barang/${id}`,
        token: this.token.token,
        api_key: this.api_token,
      });
      if (data && data?.data) {
        const result = data?.data;
        // const selectedBarang = { ...result };
        const selectedBarang = this.transformBarangDest(result);
        const idBarang = selectedBarang.id;
        const qtyBarang = selectedBarang.qty;
        selectedBarang.id = idBarang;
        selectedBarang.qty = qtyBarang > 1 ? qtyBarang : 0;
        selectedBarang.formatCalculateRupiah =
        selectedBarang.qty > 1
        ? selectedBarang.qty * selectedBarang.hpp
        : selectedBarang.hpp;

        const existingItem = result.id === id;

        if (!existingItem) {
          if (this.listDraftCarts.length > 0) {
            this.listDraftCarts.push(selectedBarang);
            this.draftItemPembelian(true, true, idBarang);
          } else {
            this.barangCarts.push(selectedBarang);
            this.draftItemPembelian(false, false, idBarang);
          }

          setTimeout(() => {
            this.qtyDrafts = this.listDraftCarts.map((item) => ({
              id: item.id,
              id_barang: item.id_barang,
              kode: item.kode,
              last_qty: item.qty,
            }));
          }, 500);

          this.showBayar = false;
        } else {
          this.$swal({
            icon: "error",
            title: "Oops...",
            text: `${selectedBarang.nama}, sudah ditambahkan!!`,
          });
        }
      }
    },

    deletedBarangCarts(idItemPembelian) {
      // console.log(idItemPembelian);
      this.loadingDelete = true;
      this.selectedBarang = null;
      const endPoint = `/item-pemakaian-dest/${idItemPembelian}`;
      const config = {
        headers: {
          Authorization: `Bearer ${this.token.token}`,
        },
      };

      this.$api
      .delete(endPoint, config)
      .then(({ data }) => {
        if (data.success) {
          this.listDraftCarts = this.listDraftCarts.filter(
            (item) => item.id !== idItemPembelian
            );
          this.barangCarts = this.barangCarts.filter(
            (item) => item.id !== idItemPembelian
            );
          this.showGantiHarga = false;
          this.selectedBarang = null;

          this.checkItemPemakaianDestResult(true);
        }
      })
      .finally(() => {
        setTimeout(() => {
          this.loadingDelete = false;
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

    simpanPemakaianBarang(draft) {
      // di matiin dulu sementara
      this.loading = !draft ? true : false;
      this.startPembelianSound = true;
      this.$nuxt.globalLoadingMessage = "Proses menyimpan pemakaian barang ...";
      // this.loading = true;
      this.options = "pemakaian-barang";
      const endPoint = `/pemakaian-barang/${this.input.id_pemakaian}`;
      const config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token.token}`,
        },
      };

      const dataPrepareItem = {
        draft: this.draft ? true : true,
        keperluan: this.selectedKeperluan,
        keterangan: this.input.keterangan,
        total: this.total,
        biaya_operasional: this.biaya_operasional,
        harga_proses: this.harga_proses,
        harga_cetak: this.harga_cetak
      }

      this.$api
      .put(endPoint, dataPrepareItem, config)
      .then(({ data }) => {
        if (data?.error) {
          this.errorPembelianSound = true;
          this.$swal({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
        if (data?.success) {
          this.playSound = true;
          this.$swal({
            position: "top-end",
            icon: "success",
            title: data?.message,
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => {
            this.loading = false;
            const path = "/dashboard/backoffice/pemakaian-barang";
            this.$router.push({
              path: path,
              query: {
                kode: this.input.reference_code,
              },
            });
          }, 1500);
        }
      })
      .finally(() => {
        this.loading = false;
      })
      .catch((error) => {
        console.log(error)
        this.loading = false;
        this.error = true;
        this.errorPembelianSound = true;
        this.$swal({
          title: "Data belum lengkap?",
          text: "Periksa kembali kolom input data!!",
          icon: "question",
        });
        this.validation = error.response.data;
      });
    },

    draftItemPembelian(draft, onDraft, idBarang = null) {
      const endPoint = `/item-pemakaian-dest`;
      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token.token}`,
        },
      };
      let dataDraft;
      if (onDraft) {
        dataDraft = {
          draft: draft,
          kode:
          typeof this.input.reference_code.length === "Object"
          ? this.input.reference_code[0]
          : this.input.reference_code,
          kode_kas: this.input.kode_kas,
          supplierId: this.supplierId,
          barangs: this.listDraftCarts
          .filter((item) => item.id === idBarang)
          .map((item, idx) => ({
            id: item.id,
            kode: item.kode,
            kode_barang: item.kode_barang,
            qty: item.qty,
            last_qty: item.last_qty,
            harga_beli: item.harga_beli,
            diskon: this.input.diskon,
            ppn: this.input.ppn,
            supplier_id: item.supplier_id,
          })),
        };
      } else {
        dataDraft = {
          draft: draft,
          kode: this.input.reference_code,
          kode_kas: this.input.kode_kas,
          supplierId: this.supplierId,
          barangs: this.barangCarts.map((item, idx) => {
            return {
              id: item.id,
              kode: item.kode,
              kode_barang: item.kode,
              qty: item.qty,
              last_qty: item.last_qty,
              harga_beli: item.harga_beli,
              diskon: this.input.diskon,
              ppn: this.input.ppn,
              supplier_id: item.supplier_id,
            };
          }),
        };
      }

      this.$api
      .post(endPoint, dataDraft, config)
      .then(({ data }) => {
          // console.log(data.itempembelian_id);
        if (data?.error) {
          this.errorPembelianSound = true;
          this.$swal({
            icon: "error",
            title: "Oops...",
            text: data.message,
          });
        } 
        
        if (data?.draft) {
          this.draft = true;
          this.lastItemPembelianId = data?.itempembelian_id;
          // this.listDraftItemPembelian(data?.data);
        }
      })
      .finally(() => {
        this.checkItemPemakaianDestResult(false);
        this.loading = false
      })
      .catch((err) => {
        console.log(err);
      });
    },

    loadCalculatePemakaian() {
      const totalQty = this.listDraftCarts.reduce((n, item) => {
        return n + item.qty
      }, 0)

      this.biaya_operasional = this.listDraftCarts.reduce((acc, item) => {
        return acc + item.qty;
      }, 0) * 1000;

      this.harga_proses = this.draftItems.reduce((acc, item) => {
        return acc + item.total;
      }, 0) + this.biaya_operasional


      if (totalQty !== 0) {
        this.harga_cetak = this.harga_proses / totalQty;
      } else {
        console.error("Total quantity is zero, cannot divide by zero.");
        this.harga_cetak = 0;
      }

      this.total = this.biaya_operasional;
      this.input.biaya_operasional = this.$format(this.biaya_operasional);
      this.input.total = this.$format(this.biaya_operasional);
      this.input.harga_proses = this.$format(this.harga_proses);
      this.input.harga_cetak = this.$format(this.harga_cetak);

      if(parseFloat(this.harga_cetak) > 0) {
        const formattedHargaCetak = this.harga_cetak
        this.generateKembali(this.input.diskon, parseFloat(formattedHargaCetak.toFixed(2)), parseFloat(formattedHargaCetak.toFixed(2)));
        this.input.harga_proses_display = `Harga Cetak / Kg : ${this.$format(this.harga_cetak)}`
      } else {
        this.generateKembali(this.input.diskon, this.harga_proses, this.harga_proses);
        this.input.harga_proses_display = `Total Harga Proses : ${this.$format(this.harga_proses)}`
      }

    },

    async generateKembali(diskon = 0, total = 0, bayar = 0) {
      const data = await getData({
        api_url: `${this.api_url}/load-form-penjualan/${diskon}/${total}/${bayar}`,
        token: this.token.token,
        api_key: this.api_token,
      });
      this.terbilang = data?.terbilang;
    },
  },

  computed: {
    token() {
      return this.$store.getters["auth/getAuthToken"];
    },
  },
};
</script>
