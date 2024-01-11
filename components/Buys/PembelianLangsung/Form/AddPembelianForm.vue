<template>
  <div>
    <div
      class="relative flex flex-col min-w-0 break-words bg-transparent mb-4 shadow-sm rounded"
    >
      <ul class="w-80 text-sm text-white font-bold bg-transparent">
        <li class="w-full py-2">Supplier : &nbsp; {{ supplier.nama }}</li>
        <li class="w-full py-2">
          Telp : &nbsp; {{ supplier.telp ? supplier.telp : "-" }}
        </li>
        <li class="w-full py-2">
          Alamat : &nbsp; {{ supplier.alamat ? supplier.alamat : "-" }}
        </li>
      </ul>
    </div>
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
            <h4 class="font-bold text-md text-white">
              {{ changeAgain ? "Pilih Lagi Produk" : "Pilih Produk" }}
            </h4>
          </div>
          <div class="shrink-0 w-60">
            <Select2
              v-model="selectedBarang"
              :settings="{
                allowClear: true,
                dropdownCss: { top: 'auto', bottom: 'auto' },
              }"
              :options="[{ id: null, text: 'Pilih Barang' }, ...barangs]"
              @change="changeBarang($event)"
              @select="changeBarang($event)"
              placeholder="Pilih Barang"
            />
          </div>
        </div>
      </div>
      <div>
        <div class="flex justify-start space-x-0 py-6">
          <div class="flex-none w-36">
            <h4 class="font-bold text-md text-white">Supplier</h4>
          </div>
          <div class="shrink-0 w-full">
            <input type="text" disabled :value="supplier.nama" />
          </div>
        </div>
      </div>
      <div>
        <div class="flex justify-start space-x-0">
          <div class="flex-none w-36">
            <h4 class="font-bold text-md text-white">Pilih Kode Kas</h4>
          </div>
          <div class="shrink-0 w-60">
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
        </div>
      </div>
      <div v-if="showDetailKas">
        <div class="flex justify-start space-x-0 mt-6">
          <div class="flex-none w-36">
            <h4 class="font-bold text-md text-white">Saldo Kas</h4>
          </div>
          <div class="shrink-0 w-60">
            <input type="text" disabled :value="$format(detailKas.saldo)" />
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
            class="text-xs bg-transparent border-b border-t dark:border-gray-700 text-white uppercase dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th class="px-6 py-3">Nama Barang</th>
              <th class="px-6 py-3">Satuan</th>
              <th class="px-6 py-3 w-10">Qty</th>
              <th class="px-6 py-3">Harga Beli</th>
              <th class="px-6 py-3">Harga Toko</th>
              <th class="px-6 py-3">(%)</th>
              <th class="px-6 py-3">Harga Partai</th>
              <th class="px-6 py-3">(%)</th>
              <th class="px-6 py-3">Harga Cabang</th>
              <th class="px-6 py-3">(%)</th>
              <th class="px-6 py-3">Disc</th>
              <th class="px-6 py-3">Rupiah</th>
              <th class="px-6 py-3">Expired</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(barang, idx) in barangCarts"
              :key="idx"
              class="bg-transparent border-b text-white"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium whitespace-nowrap text-left"
              >
                {{ barang.nama }}
              </th>
              <td class="px-6 py-4">
                {{ barang.satuan }}
              </td>
              <td class="px-6 py-4 text-black">
                <input
                  class="w-20"
                  type="number"
                  v-model="barang.qty"
                  @input="updateIsi(barang, $event, barang.id)"
                />
              </td>
              <td class="px-6 py-4">
                {{ $format(barang.harga_beli) }}
              </td>
              <td class="px-6 py-4">
                {{ $format(barang.harga_toko) }}
              </td>
              <td class="px-6 py-4">%</td>
              <td class="px-6 py-4">
                {{ $format(barang.harga_partai) }}
              </td>
              <td class="px-6 py-4">%</td>
              <td class="px-6 py-4">
                {{ $format(barang.harga_cabang) }}
              </td>
              <td class="px-6 py-4">%</td>

              <td class="px-6 py-4">
                {{ $roundup(barang.disc) }}
              </td>
              <td class="px-6 py-4">
                {{
                  barang.formatCalculateRupiah
                    ? $format(barang.formatCalculateRupiah)
                    : $format(barang.harga_beli)
                }}
              </td>
              <td class="px-6 py-4">
                {{ barang.expired }}
              </td>
              <td class="px-10 py-4">
                <button
                  @click="deletedBarangCarts(barang.id)"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <i class="fa-solid fa-trash-can text-red-600 text-xl"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div
      class="bg-transparent shadow-sm rounded w-full flex justify-start space-x-4 mt-6"
    >
      <div class="shrink w-[80vw]">
        <div
          class="grid grid-cols-1 bg-emerald-600 h-48 content-evenly justify-items-center"
        >
          <div class="col-span-full text-white">
            <h4 class="font-bold text-4xl">
              {{ total ? $format(total) : "Rp. 0" }}
            </h4>
          </div>
        </div>
        <div class="grid grid-cols-1 bg-blueGray-600 h-12">
          <div class="col-span-full p-2">
            <h6 class="text-white text-lg font-bold">
              {{ terbilang }}
            </h6>
          </div>
        </div>
      </div>

      <div>
        <ul class="w-80 text-sm font-medium text-white bg-transparent">
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
          <li class="w-full py-2">
            <div class="grid grid-cols-3 gap-0">
              <div>
                <label class="font-bold">Diskon</label>
              </div>
              <div>
                <input
                  type="number"
                  value="0"
                  class="h-8 text-black"
                  @input="hitungBayarSetelahDiskon(input.diskon)"
                />
              </div>
            </div>
          </li>
          <li class="w-full py-2">
            <div class="grid grid-cols-3 gap-0">
              <div>
                <label class="font-bold">PPN</label>
              </div>
              <div>
                <input
                  type="number"
                  value="0"
                  class="h-8 text-black"
                  v-model="input.ppn"
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
                  disabled
                  v-model="input.bayar"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="flex justify-end mt-6">
      <div>
        <button
          class="text-white bg-emerald-600 hover:bg-[#d6b02e] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
        >
          <i class="fa-regular fa-floppy-disk"></i> Simpan Transaksi
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { getData } from "~/hooks/index";

export default {
  data() {
    return {
      api_url: process.env.NUXT_ENV_API_URL,
      api_token: process.env.NUXT_ENV_APP_TOKEN,
      barangs: [],
      barangCarts: [],
      currentPage: 1,
      changeAgain: false,
      selectedBarang: null,
      selectedKodeKas: null,
      supplierId: this.$route.query["supplier"],
      supplier: {},
      kas: [],
      detailKas: {},
      showDetailKas: null,
      input: {
        qty: 1,
      },
      total: 0,
      bayar: 0,
      terbilang: "Nol Rupiah",
      addQty: false,
      qtyById: 1,
      formatCalculateRupiah: 0,
    };
  },

  beforeMount() {
    this.authTokenStorage();
  },

  mounted() {
    this.getSupplier();
  },

  created() {
    this.getBarangLists();
    this.getKasData();
  },

  methods: {
    recalculateTotalBayar(isi = 0, diskon = 0) {
      if (this.barangCarts.length > 1) {
        this.total = this.barangCarts.reduce((total, item) => {
          return Number(this.total) + Number(this.$roundup(item.harga_toko));
        }, 0);
        this.loadTerbilang(diskon, this.total);
      } else {
        this.total = this.barangCarts.reduce((acc, item) => {
          return isi !== 0 ? acc + item.harga_toko * isi : item.harga_toko;
        }, 0);

        this.bayar = this.addQty ? this.total * isi : this.total;
        this.loadTerbilang(diskon, this.$roundup(this.total));
      }
    },

    updateIsi(data, event, id) {
      this.addQty = true;
      if (this.$_.isArray(data)) {
        const dataChange = data.find((item) => item.id === id);
        if (dataChange) {
          dataChange.qty = Number(event.target.value);
          if (!isNaN(dataChange.qty)) {
            dataChange.formatCalculateRupiah =
              dataChange.qty * Number(dataChange.harga_beli);
            this.recalculateTotalBayar(dataChange.qty, 0);
          }
        }
      } else {
        if (event.target.value) {
          const qtyBarang = Number(event.target.value);
          if (!isNaN(qtyBarang)) {
            this.input.qty = Math.max(1, qtyBarang);
            const harga_beli = Number(this.$roundup(data.harga_beli));
            data.formatCalculateRupiah = harga_beli * qtyBarang;

            this.recalculateTotalBayar(qtyBarang, 0);
          }
        }
      }
    },

    deletedBarangCarts(id) {
      this.barangCarts = this.barangCarts.filter((item) => item.id !== id);
      this.recalculateTotalBayar(0, 0);
    },

    changeBarang(newValues) {
      const barangId = newValues.id;
      if (barangId !== undefined) {
        this.pushDataBarang(barangId);
        this.selectedBarang = null;
        this.changeAgain = true;
      }
    },

    changeKodeKas(newValues) {
      const kasId = Number(newValues.id);
      if (kasId !== undefined) {
        this.selectedKodeKas = kasId;
        this.getKasDetail(kasId);
      }
    },

    async getKasDetail(id) {
      const data = await getData({
        api_url: `${this.api_url}/data-kas/${id}`,
        token: this.token.token,
        api_key: this.api_token,
      });
      const result = data?.data[0];
      this.detailKas = result;
      setTimeout(() => {
        this.showDetailKas = true;
      }, 1500);
    },

    async pushDataBarang(id) {
      const data = await getData({
        api_url: `${this.api_url}/data-barang/${id}`,
        token: this.token.token,
        api_key: this.api_token,
      });
      const result = data?.data;

      // const selectedBarang = { ...result };
      const selectedBarang = this.transformBarang(result);
      selectedBarang.qty = 1;
      selectedBarang.formatCalculateRupiah =
        selectedBarang.qty * selectedBarang.hpp;

      this.barangCarts.push(selectedBarang);

      this.recalculateTotalBayar();
    },

    hitungBayarSetelahDiskon(diskon) {
      const diskonValue = Number(diskon);
      if (!isNaN(diskonValue)) {
        const diskonAmount = (diskonValue / 100) * this.total;
        this.bayar = this.total - diskonAmount;
      }
    },

    transformBarang(result) {
      // Gantilah kunci-kunci berikut sesuai dengan struktur yang diinginkan
      const transformedBarang = {
        id: result.id,
        nama: result.nama,
        satuan: result.satuan,
        harga_beli: result.hpp,
        harga_toko: result.harga_toko,
        "%": "",
        harga_partai: result.harga_partai,
        "%": "",
        harga_cabang: result.harga_cabang,
        "%": "",
        disc: result.diskon,
        expired: result.ada_expired_date
          ? this.$moment(result.expired).locale("id").format("LL")
          : "-",
      };

      return transformedBarang;
    },

    async loadTerbilang(diskon, total) {
      const data = await getData({
        api_url: `${this.api_url}/load-form/${diskon}/${total}`,
        token: this.token.token,
        api_key: this.api_token,
      });
      const result = data?.data;
      this.terbilang = result.terbilang;
      this.input.bayar = "Rp." + result?.bayarrp;
      this.input.total = "Rp." + result?.totalrp;
    },

    transformDataKasLists(rawData) {
      return rawData
        .filter((item) => item && item.kode)
        .map((item) => ({
          id: item.id,
          text: item.nama,
        }));
    },

    transformBarangLists(rawData) {
      return rawData
        .filter((item) => item && item.kode)
        .map((item) => ({
          id: item.id,
          text: item.nama,
        }));
    },

    async getBarangLists() {
      const getAllPages = async () => {
        let allData = [];
        let currentPage = 1;
        let totalPages = 1;

        while (currentPage <= totalPages) {
          const data = await getData({
            api_url: `${this.api_url}/data-barang?page=${currentPage}`,
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
        .catch((err) => console.log(err));
    },

    async getSupplier() {
      const data = await getData({
        api_url: `${this.api_url}/data-supplier/${this.supplierId}`,
        token: this.token.token,
        api_key: this.api_token,
      });
      const result = data?.data[0];
      this.supplier = result;
    },

    async getKasData() {
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
        .catch((err) => console.log(err));
    },
  },

  computed: {
    token() {
      return this.$store.getters["auth/getAuthToken"];
    },
  },
};
</script>
