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
  <!-- <div class="flex justify-start">
    <div>
      <div class="flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
        <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <span class="sr-only">Info</span>
        <div>
          <span class="font-medium">Info alert!</span> silahkan pilih barang jadi ...
        </div>
      </div>
    </div>
  </div> -->
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
    v-model="selectedBarang"
    :settings="{
      allowClear: true,
      dropdownCss: { top: 'auto', bottom: 'auto' },
    }"
    :options="[{ id: null, text: 'Pilih Barang Jadi' }, ...barangs]"
    @change="changeBarang($event)"
    @select="changeBarang($event)"
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

<div class="relative mt-16 flex flex-col min-w-0 break-words bg-white w-full mb-12 rounded-lg">
  <div>
    <h2>Detail Item Pemakaian Barang</h2>
  </div>

  <div>
    <tabs
    :options="{ useUrlFragment: false, defaultTabHash: draftItems.length > 0 ? draftItems[0]?.id : draftItems[0]?.id, }"
    >
    <tab
    v-for="item in draftItems"
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

<div
class="bg-transparent mb-4 shadow-sm rounded w-full overflow-x-auto overflow-y-auto"
>
<div class="flex-none w-full">
  <h2>Detail Barang Jadi</h2>
</div>
<div>
  <table class="w-full text-md border-collapse border-b">
    <thead
    class="text-xs bg-transparent border-b border-t dark:border-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400"
    >
    <tr>
      <th class="px-6 py-3">Barang</th>
      <th class="px-6 py-3 w-10">Qty</th>
      <th class="px-6 py-3">Harga Beli</th>
      <th class="px-6 py-3">Supplier</th>
      <th class="px-6 py-3">Subtotal</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in products" :key="item.id"
    class="bg-transparent border-b"
    >
    <th
    scope="row"
    class="whitespace-nowrap p-4 text-lg"
    >
    <span
    class="bg-blue-100 text-blue-800 me-2 px-2.5 py-0.5 text-lg  rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"
    >
    {{ item.nama }}({{ item.kode_barang }})
  </span>
</th>

<td v-if="editingQtyId === item.id" class="px-6 py-4">
  <div class="flex justify-between space-x-2">
    <div>
      <input
      class="w-20"
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

<td v-else class="px-6 py-4">
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

<td
v-if="editingItemId === item.id"
class="px-6 py-4 text-black"
>
<div class="flex justify-between space-x-2">
  <div>
    <input
    class="w-auto"
    type="text"
    v-model="item.harga"
    @input="changeGantiHarga($event, item.id, item)"
    @keydown.esc="changeGantiHarga($event, item.id, item)"
    @keydown.enter="changeGantiHarga($event, item.id, item)"
    min="1"
    @focus="setInitialHarga(item)"
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
<td v-else class="px-6 py-4">
  <div class="flex justify-between space-x-2 text-right">
    <div class="font-semibold">
      {{ $format(item.harga) }}
    </div>
    <div>
      <button
      @click="gantiHarga(item.id, null)"
      class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 

      dark:focus:ring-blue-800"
      >
      <i class="fa-solid fa-repeat fa-lg"></i>
    </button>
  </div>
</div>
</td>

<td class="whitespace-nowrap p-4 text-lg">
  <span
  class="bg-blue-100 text-blue-800 me-2 px-2.5 py-0.5 text-lg  rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"
  >
  {{ item.nama_supplier }} ({{item.supplier}})
</span>
</td>

<td class="whitespace-nowrap p-4 text-lg text-right font-bold">
  {{ $format(item.total) }}
</td>

<td class="px-10 py-4">
  <button
  v-if="lastItemPemakaianId"
  @click="deletedBarangCarts(item.id, lastItemPemakaianId)"
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
      <h4 class="font-bold text-4xl">
        {{ input.total }}
      </h4>
    </div>
  </div>
  <div class="grid grid-cols-1 h-12 bg-blueGray-700 text-white">
    <div class="col-span-full p-2">
      <h6 class="text-lg font-bold">
        {{ terbilang ? terbilang : "Nol Rupiah" }}
      </h6>
    </div>
  </div>
</div>

<div>
  <ul class="w-80 text-sm font-medium bg-transparent">
    <li class="w-full py-2">
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
      };
    },

    beforeMount() {
      this.authTokenStorage();
    },

    mounted() {
      this.checkItemPemakaian(true);
      this.getBarangLists();
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

      checkItemPemakaian(loading) {
        this.loadingItem = loading;
        this.$nuxt.globalLoadingMessage = "Proses pengecekan item pemakaian ...";

        const endPoint = `/item-pemakaian/${this.input.reference_code}`;

        const config = {
          headers: {
            Authorization: `Bearer ${this.token.token}`,
          },
        };

        this.$api
        .get(endPoint, config)
        .then(({ data }) => {
          if (data.success) {
            const selectedBarang = this.transformBarang(data?.data);
            if (selectedBarang !== undefined && selectedBarang.length > 0) {
              this.detail = data?.detail;
              this.selectedKeperluan = data?.detail?.keperluan;
              this.input.reference_code = data?.detail?.kode;
              this.input.keterangan = data?.detail?.keterangan;
              this.input.tanggal = this.$moment(data?.detail?.tanggal, 'YYYY-MM-DD HH:mm:ss').toDate();
              this.draftItems = selectedBarang;
              this.readySubmit = !this.$_.isEmpty(selectedBarang)
              this.lastItemPemakaianId = data?.last_item_pemakaian_id
              this.loadCalculateItemPembelianDetect();
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

      transformJenisKeperluan(rawData) {
        return rawData
        .filter((item) => item && item.id)
        .map((item) => ({
          id: item.kode,
          text: `${item.kode}`,
        }));
      },

      gantiQty(itemId = null, barangId = null) {
        if (itemId) {
          this.editingQtyId = itemId;
        }

        if (barangId) {
          this.editingQtyId = barangId;
        }
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

      gantiHarga(itemId = null, barangId = null) {
        if (itemId) {
          this.editingItemId = itemId;
        }

        if (barangId) {
          this.editingItemId = barangId;
        }
      },

      setInitialHarga(barang) {
        this.initialHarga = barang.harga_beli;
      },

      updateHarga(id, draft) {
        const newHarga = this.input.harga;
        if (draft) {
          this.checkSaldo(true);

          const selectedBarang = this.draftItems
          .map((item) => item)
          .find((item) => item.id === id);
          selectedBarang.harga = this.$roundup(newHarga);
          this.transformBarang(selectedBarang);

          this.total = 0;

          this.input.total = this.$format(this.total);
          this.input.bayar = this.$format(this.total);

          this.generateKembali(this.input.diskon, this.total, this.total);
          this.recalculateJumlahRupiah(this.input.qty, this.input.diskon);

          this.draftItemPemakaian(draft, true, id);
          setTimeout(() => {
          // this.updateStokBarang();
            this.editingItemId = null;
          }, 500);
        }
      },


      changeBarang(newValue) {
        this.loadingItem = true;
        if (newValue && newValue.id !== undefined) {
          this.getDetailBarang(newValue?.id);
        } else {
          console.log("Value Is Null");
        }
      },

      changeGantiHarga(e,id, draft) {
        const newHarga = e.target.value;
        if(e.key === 'Escape') {
          this.showGantiHarga = false
          this.input.harga = Number(this.initialHarga)
          draft.harga_beli = this.initialHarga
          this.editingItemId = null
        } else if(e.key === 'Enter') {
          this.showGantiHarga = false
          this.input.harga = Number(newHarga)
          draft.harga_beli = newHarga
          this.editingItemId = null
          this.updateItemPemakaian(id);
        } else {        
          this.input.harga = Number(newHarga);
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
      const dataDraft = this.draftItems.filter(item => item.id === id)[0];
      const dataPrepare = {
        kode: this.input.reference_code,
        qty: this.input.qty ? parseFloat(this.input.qty) : parseFloat(dataDraft.harga),
        harga: this.input.harga ? parseFloat(this.input.harga) : parseFloat(dataDraft.harga)
      }
      
      const endPoint = `/item-pemakaian/${id}`;
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
        this.checkItemPemakaian(false);
        this.readySubmit = true;
      })
      .catch((err) => {
        console.log(err);
      });
    },

    transformBarangLists(rawData) {
      return rawData
      .filter((item) => item && item.kode)
      .map((item) => ({
        id: item.id,
        text: `${item.nama} - ${item.kategori} (${item.kode})`,
      }));
    },

    transformBarang(results) {
      if (results !== undefined && results.length > 0) {
        return results.map(result => {
          const transformedBarang = {
            id: result.id,
            nama: result.nama,
            kode: result.kode_pemakaian,
            kode_barang: result.kode,
            satuan: result.satuan,
            harga: result?.harga ? parseFloat(result?.harga) : this.$roundup(result.hpp),
            qty: !isNaN(result.qty_asal) ? Number(result.qty_asal) : 0,
            supplier_id: result.id_supplier,
            nama_supplier: result.nama_supplier,
            supplier: result.supplier,
            total: result.qty_asal !== null ? parseFloat(result.total) : parseFloat(result.hpp)
          };
          return transformedBarang
        })
      } else {
        const transformedBarang = {
          id: results.id,
          nama: results.nama,
          kode: results.kode_pemakaian,
          kode_barang: results.kode,
          satuan: results.satuan,
          harga: results?.harga ? parseFloat(results?.harga) : this.$roundup(results.hpp),
          qty: !isNaN(results.qty_asal) ? Number(results.qty_asal) : 0,
          supplier_id: results.id_supplier,
          nama_supplier: results.nama_supplier,
          supplier: results.supplier,
          total: results.qty_asal !== null ? parseFloat(results.total) : parseFloat(results.hpp)
        };
        return transformedBarang
      }
    },

    inputKeterangan(e) {
      this.input.keterangan = e.target.value;
    },

    async getBarangLists() {
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
        this.barangs = this.transformBarangLists(data);
      })
      .finally(() => {
        setTimeout(() => {
          this.loading = false;
        }, 500);
      })
      .catch((err) => console.log(err));
    },

    async getDetailBarang(id) {
      const data = await getData({
        api_url: `${this.api_url}/data-barang/${id}`,
        token: this.token.token,
        api_key: this.api_token,
      });
      if (data && data?.data) {
        const result = data?.data;
        // const selectedBarang = { ...result };
        const selectedBarang = this.transformBarang(result);
        const idBarang = selectedBarang.id;
        const existingItem = result.id === id;
        if (!existingItem) {
          this.draftItems.push(selectedBarang);
          this.draftItemPemakaian(true, true, idBarang);

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

    deletedBarangCarts(idBarang, idItemPemakaian) {
      // console.log(idItemPemakaian);
      this.loadingDelete = true;
      this.selectedBarang = null;
      const endPoint = `/item-pemakaian/${idItemPemakaian}`;
      const config = {
        headers: {
          Authorization: `Bearer ${this.token.token}`,
        },
      };

      this.$api
      .delete(endPoint, config)
      .then(({ data }) => {
        if (data.success) {
          this.input.keterangan = "";
          this.showGantiHarga = false;
          this.selectedBarang = null;

          this.draftItems = this.draftItems?.id !== data?.data?.id

          this.checkItemPemakaian(false);

          this.loadCalculateItemPembelianDetect();
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
      const endPoint = `/pemakaian-barang`;
      const config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token.token}`,
        },
      };

      const dataPrepareItem = {
        kode: typeof this.input.reference_code === "string" ? this.input.reference_code : this.input.reference_code[0],
        draft: this.draft ? true : true,
        keperluan: this.selectedKeperluan,
        keterangan: this.input.keterangan,
        total: this.total
      }

      console.log(dataPrepareItem)

      this.$api
      .post(endPoint, dataPrepareItem, config)
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

    draftItemPemakaian(draft, onDraft, idBarang = null) {
      const endPoint = `/item-pemakaian`;
      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token.token}`,
        },
      };

      let dataDraft = {
        kode: typeof this.input.reference_code === "string" ? this.input.reference_code : this.input.reference_code[0],
        barangs: this.draftItems.filter(item => item.id === idBarang)
        .map(item => ({
         kode_barang: item.kode_barang,
         harga: item.harga,
         qty: this.input.qty,
         supplier_id: item.supplier_id
       }))
      };

      this.$api
      .post(endPoint, dataDraft, config)
      .then(({ data }) => {
        if (data?.draft) {
          this.draft = data.draft;
          this.input.reference_code = data?.data;
          this.lastItemPemakaianId = data?.item_pemakaian_id;
        }
      })
      .finally(() => {
        this.checkItemPemakaian(false);
      })
      .catch((err) => {
        console.log(err);
      });
    },

    loadCalculateItemPembelianDetect() {
      this.total = this.draftItems.length > 0 ? this.draftItems.reduce((acc, item) => {
        if (item.harga !== undefined && !isNaN(item.harga)) {
          if (parseFloat(item.qty) > 1) {
            return acc + item.total;
          } else {
            return acc + parseFloat(item.harga);
          }
        } else {
          return acc;
        }
      }, 0) : 0;
      this.input.total = this.$format(this.total);
      this.input.bayar = this.$format(this.total);
      this.generateKembali(this.input.diskon, this.total, this.total);
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
