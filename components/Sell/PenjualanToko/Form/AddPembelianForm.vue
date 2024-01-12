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
        <span class="text-white font-semibold">Preparing data kas</span>
      </div>
      <div v-if="showDetailKas && detailKas">
        <div class="flex justify-start space-x-0 mt-6">
          <div class="flex-none w-36">
            <h4 class="font-bold text-md text-white">Saldo Kas</h4>
          </div>
          <div class="shrink-0 w-60">
            <input type="text" disabled :value="$format(detailKas.saldo)" />
          </div>
        </div>
      </div>

      <div>
        <div class="flex justify-start space-x-0 mt-6">
          <div class="flex-none w-36">
            <h4
              :class="`font-bold text-md ${
                changeAgain ? 'text-emerald-600' : 'text-white'
              }`"
            >
              {{ changeAgain ? "Pilih Lagi Produk" : "Pilih Produk" }}
            </h4>
          </div>
          <div class="shrink-0 w-60">
            <Select2
              :disabled="!showDetailKas"
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
          <div v-if="!changeSupplierShow">
            <input type="text" disabled :value="supplier.nama" />
          </div>
          <div v-else class="shrink-0 w-60">
            <Select2
              v-model="selectedSupplier"
              :settings="{
                allowClear: true,
                dropdownCss: { top: 'auto', bottom: 'auto' },
              }"
              :options="[{ id: null, text: 'Pilih Supplier' }, ...suppliers]"
              @change="changeSupplier($event)"
              @select="changeSupplier($event)"
              placeholder="Pilih Supplier"
            />
          </div>
          <div class="px-6" v-if="!changeSupplierShow">
            <button
              @click="showChangeSupplier"
              class="text-emerald-600 font-bold"
            >
              Ganti
            </button>
          </div>
        </div>
      </div>

      <div>
        <div class="flex justify-start space-x-0 py-6">
          <div class="flex-none w-36">
            <h4 class="font-bold text-md text-white">Keterangan</h4>
          </div>
          <div class="shrink-0 w-full">
            <label
              for="keterangan"
              class="block mb-2 text-sm font-medium text-white dark:text-white"
              >Keterangan Beli</label
            >
            <textarea
              id="keterangan"
              rows="4"
              class="block p-2.5 w-full text-sm text-blueGray-700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tambahkan keterangan..."
              :disabled="!showDetailKas"
              v-model="input.keterangan"
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
            class="text-xs bg-transparent border-b border-t dark:border-gray-700 text-white uppercase dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th class="px-6 py-3">Nama Barang</th>
              <th class="px-6 py-3">Satuan</th>
              <th class="px-6 py-3 w-10">Qty</th>
              <th class="px-6 py-3">Harga Beli</th>
              <th class="px-6 py-3">Harga Toko</th>
              <!-- <th class="px-6 py-3">(%)</th>
              <th class="px-6 py-3">Harga Partai</th>
              <th class="px-6 py-3">(%)</th>
              <th class="px-6 py-3">Harga Cabang</th>
              <th class="px-6 py-3">(%)</th> -->
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
              <!-- <td class="px-6 py-4">%</td>
              <td class="px-6 py-4">
                {{ $format(barang.harga_partai) }}
              </td>
              <td class="px-6 py-4">%</td>
              <td class="px-6 py-4">
                {{ $format(barang.harga_cabang) }}
              </td>
              <td class="px-6 py-4">%</td> -->

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

    <form @submit.prevent="simpanPembelian">
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
                    class="h-8 text-black"
                    v-model="input.diskon"
                    @input="recalculateTotalBayar(input.qty, input.diskon)"
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
                    @input="recalculateTotalBayar(input.qty, input.diskon)"
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
              <i class="fa-regular fa-floppy-disk"></i> Simpan Transaksi
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

export default {
  data() {
    return {
      loading: null,
      options: null,
      api_url: process.env.NUXT_ENV_API_URL,
      api_token: process.env.NUXT_ENV_APP_TOKEN,
      barangs: [],
      barangCarts: [],
      currentPage: 1,
      changeAgain: false,
      selectedBarang: null,
      selectedKodeKas: null,
      selectedSupplier: null,
      supplierId: this.$route.query["supplier"],
      supplier: {},
      suppliers: [],
      kas: [],
      detailKas: {},
      showDetailKas: null,
      loadingKas: null,
      input: {
        kode_barang: null,
        qty: 1,
        diskon: 0,
        ppn: 0,
        supplier: Number(this.$route.query["supplier"]),
      },
      total: 0,
      bayar: 0,
      terbilang: "Nol Rupiah",
      addQty: false,
      qtyById: 1,
      formatCalculateRupiah: 0,
      changeSupplierShow: false,
    };
  },

  beforeMount() {
    this.authTokenStorage();
  },

  mounted() {
    this.getDetailSupplier();
  },

  created() {
    this.getBarangLists();
    this.getSupplierLists();
    this.getKasData();
  },

  methods: {
    showChangeSupplier() {
      this.changeSupplierShow = !this.changeSupplierShow;
    },

    changeSupplier(newValue) {
      const supplierId = newValue.id;
      if (supplierId !== undefined) {
        console.log(supplierId);
        this.selectedSupplier = null;
        this.supplierId = supplierId;
        this.getDetailSupplier();
        this.$router.push({
          path: `/dashboard/transaksi/beli/pembelian-langsung/add`,
          query: {
            type: "PEMBELIAN_LANGSUNG",
            supplier: supplierId,
          },
        });
        this.changeSupplierShow = false;
      }
    },

    transformSupplierLists(rawData) {
      return rawData
        .filter((item) => item && item.kode)
        .map((item) => ({
          id: item.id,
          text: item.nama,
        }));
    },

    getSupplierLists() {
      const getAllPages = async () => {
        let allData = [];
        let currentPage = 1;
        let totalPages = 1;

        while (currentPage <= totalPages) {
          const data = await getData({
            api_url: `${this.api_url}/data-supplier?page=${currentPage}`,
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
          this.suppliers = this.transformSupplierLists(data);
        })
        .catch((err) => console.log(err));
    },

    simpanPembelian() {
      this.loading = true;
      this.options = "pembelian-langsung";
      const endPoint = `/data-pembelian-langsung`;
      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token.token}`,
        },
      };

      let formData = new FormData();
      formData.append("supplier", this.input.supplier);
      formData.append("kode_kas", this.input.kode_kas);
      formData.append("keterangan", this.input.keterangan);
      formData.append("diskon", this.input.diskon);
      formData.append("ppn", this.input.ppn);
      formData.append("jumlah", this.bayar);
      formData.append("operator", this.$nuxt.userData.name);
      formData.append("kode_barang", this.input.kode_barang);
      formData.append("qty", this.input.qty);

      this.$api
        .post(endPoint, formData, config)
        .then(({ data }) => {
          if (data?.success) {
            this.$swal({
              position: "top-end",
              icon: "success",
              title: data?.message,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .finally(() => {
          setTimeout(() => {
            this.$router.push({
              path: "/dashboard/transaksi/beli/pembelian-langsung",
              query: {
                success: "add-new-pembelian-langsung",
              },
            });
          }, 2000);
          setTimeout(() => {
            this.loading = false;
          }, 2500);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    inputKeterangan(e) {
      this.input.keterangan = e.target.value;
    },

    recalculateTotalBayar(isi = 0, diskon = 0) {
      if (this.barangCarts.length > 1) {
        this.total = this.barangCarts.reduce((total, item) => {
          return Number(this.total) + Number(this.$roundup(item.harga_beli));
        }, 0);
        this.loadTerbilang(diskon, this.total);
      } else {
        this.total = this.barangCarts.reduce((acc, item) => {
          return isi !== 0 ? acc + item.harga_beli * isi : item.harga_beli;
        }, 0);

        const diskonAmount = (diskon / 100) * this.total;
        this.total -= diskonAmount;

        // Apply tax
        const ppnAmount = (this.input.ppn / 100) * this.total;
        this.total += ppnAmount;

        // Update payment amount
        this.bayar = this.addQty ? this.total * isi : this.total;
        this.loadTerbilang(diskon, this.input.ppn, this.$roundup(this.total));
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
        this.input.kode_barang = Number(barangId);
        this.pushDataBarang(barangId);
        this.selectedBarang = null;
        this.changeAgain = true;
      }
    },

    changeKodeKas(newValues) {
      if (newValues && newValues.id !== undefined) {
        const kasId = Number(newValues.id);
        if (!isNaN(kasId)) {
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

      setTimeout(() => {
        this.showDetailKas = true;
        this.detailKas = result;
        this.loadingKas = false;
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

    async loadTerbilang(diskon, ppn, total) {
      const data = await getData({
        api_url: `${this.api_url}/load-form/${diskon}/${ppn}/${total}`,
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

    async getDetailSupplier() {
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
