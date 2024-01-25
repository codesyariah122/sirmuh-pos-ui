<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
    :class="[
      color === 'light' ? 'bg-white' : 'bg-blueGray-800 text-white shadow-lg',
    ]"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-between">
        <div class="relative w-full px-2 max-w-full flex-grow flex-1">
          <h3
            class="font-bold text-xl"
            :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']"
          >
            {{ title }}
            <i
              v-if="queryParam"
              class="fa-solid fa-trash-can-arrow-up text-lg"
            ></i>
          </h3>
        </div>

        <div
          v-if="
            !queryParam && types !== 'user-role' && types !== 'cetak-pembelian'
          "
        >
          <button
            v-if="types === 'pembelian-langsung'"
            class="text-white bg-emerald-600 hover:bg-[#d6b02e] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
            type="button"
            v-on:click="toggleModal()"
          >
            <i class="fa-solid fa-plus"></i> Add
          </button>

          <button
            v-else
            type="button"
            @click="
              $router.push({
                path: `/dashboard/${parentRoute}/${typeRoute}/${queryMiddle}/add`,
                query: {
                  type: queryType,
                },
              })
            "
            class="text-white bg-emerald-600 hover:bg-[#d6b02e] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
          >
            <i class="fa-solid fa-plus"></i> Add
          </button>
        </div>

        <div v-else>
          <button
            v-if="types !== 'user-data'"
            @click="backTo"
            class="bg-emerald-600 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          >
            Back
          </button>
        </div>

        <div v-if="!queryParam && types !== 'user-role'">
          <button
            type="button"
            @click="
              total > 0
                ? $router.push({
                    path: `/dashboard/${parentRoute}/${typeRoute}/${queryMiddle}/trash`,
                    query: {
                      type: queryType,
                    },
                  })
                : null
            "
            class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <i class="fa-solid fa-trash"></i>
            <span class="sr-only">Notifications</span>
            <div
              class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900"
            >
              {{ total }}
            </div>
          </button>
        </div>
      </div>

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

      <div
        v-if="
          types === 'data-barang' ||
          types === 'data-pelanggan' ||
          types === 'data-supplier' ||
          types === 'data-kategori' ||
          types === 'data-karyawan' ||
          types === 'data-kas' ||
          types === 'data-biaya' ||
          types === 'bank-data' ||
          types === 'data-pengeluaran' ||
          types === 'laporan-pembelian-periode'
        "
      >
        <div class="flex flex-nowrap justify-start mt-6 mb-6 space-x-4">
          <div>
            <button
              @click="resetFilter"
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Reset Filter
              <i class="fa-solid fa-repeat"></i>
            </button>
          </div>

          <div v-if="types === 'data-barang'">
            <button
              @click="downloadData"
              type="button"
              class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Export All
              <i class="fa-solid fa-download"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="flex justify-start w-full bg-transparent mt-2">
        <div v-if="types === 'data-barang'">
          <barangs-filter-barang @filter-data="filterData" />
        </div>
        <div v-if="types === 'data-kategori'">
          <kategori-barang-filter @filter-data="filterData" />
        </div>
        <div v-if="types === 'data-pelanggan'">
          <pelanggans-filter-pelanggan @filter-data="filterData" />
        </div>
        <div v-if="types === 'data-supplier'">
          <suppliers-filter-supplier @filter-data="filterData" />
        </div>
        <div v-if="types === 'data-karyawan'">
          <karyawans-filter-karyawan @filter-data="filterData" />
        </div>
        <div v-if="types === 'data-kas'">
          <cashes-filter-kas @filter-data="filterData" />
        </div>
        <div v-if="types === 'data-biaya'">
          <cost-filter-biaya @filter-data="filterData" />
        </div>
        <div v-if="types === 'laporan-pembelian-periode'">
          <laporan-pembelian-periode-filter-laporan-periode
            @filter-data="filterData"
          />
        </div>
      </div>
    </div>

    <div
      :class="`block w-full overflow-x-auto overflow-y-auto ${
        types !== 'data-role-management' ? 'h-[75vh]' : 'h-auto'
      }`"
    >
      <table class="items-center bg-blueGray-800 border-collapse table-sticky">
        <molecules-table-header
          :headers="headers"
          :color="color"
          :types="types"
        />

        <tr v-if="$_.size(columns) < 1">
          <td
            colspan="12"
            style="text-align: center; width: 100%; display: table-cell"
          >
            Empty data
          </td>
        </tr>

        <barangs-barang-data-cell
          v-if="types === 'data-barang'"
          :columns="columns"
          :types="types"
          :paging="paging"
          :parentRoute="parentRoute"
          :typeRoute="typeRoute"
          @deleted-data="deletedData"
          @restored-data="restoredData"
        />

        <kategori-barang-cell
          v-if="types === 'data-kategori'"
          :columns="columns"
          :types="types"
          @deleted-data="deletedData"
          @restored-data="restoredData"
        />

        <barangs-trash-cell
          v-if="types === 'data-barang-trash'"
          :columns="columns"
          :types="types"
          @deleted-data="deletedData"
          @restored-data="restoredData"
        />

        <pelanggans-pelanggan-data-cell
          v-if="types === 'data-pelanggan'"
          :columns="columns"
          :types="types"
          :paging="paging"
          @deleted-data="deletedData"
          @restored-data="restoredData"
        />

        <suppliers-supplier-data-cell
          v-if="types === 'data-supplier'"
          :columns="columns"
          :types="types"
          :paging="paging"
          @deleted-data="deletedData"
          @restored-data="restoredData"
        />

        <karyawans-karyawan-data-cell
          v-if="types === 'data-karyawan'"
          :columns="columns"
          :types="types"
          :paging="paging"
          @deleted-data="deletedData"
          @restored-data="restoredData"
        />

        <cashes-kas-data-cell
          v-if="types === 'data-kas'"
          :columns="columns"
          :types="types"
          :paging="paging"
          @deleted-data="deletedData"
          @restored-data="restoredData"
        />

        <cost-biaya-data-cell
          v-if="types === 'data-biaya'"
          :columns="columns"
          :types="types"
          :paging="paging"
          @deleted-data="deletedData"
          @restored-data="restoredData"
        />

        <roles-role-user-data-cell
          v-if="types === 'data-role-management'"
          :columns="columns"
          :types="types"
          :paging="paging"
          :parentRoute="parentRoute"
          :typeRoute="typeRoute"
          @deleted-data="deletedData"
          @restored-data="restoredData"
        />

        <expenditures-table-cell
          v-if="types === 'data-pengeluaran'"
          :columns="columns"
          :types="types"
          :paging="paging"
          :parentRoute="parentRoute"
          :typeRoute="typeRoute"
          @deleted-data="deletedData"
          @restored-data="restoredData"
        />

        <pemasukans-table-cell
          v-if="types === 'data-pemasukan'"
          :columns="columns"
          :types="types"
          :paging="paging"
          :parentRoute="parentRoute"
          :typeRoute="typeRoute"
          @deleted-data="deletedData"
          @restored-data="restoredData"
        />

        <mutasi-kas-table-cell
          v-if="types === 'mutasi-kas'"
          :columns="columns"
          :types="types"
          :paging="paging"
          :parentRoute="parentRoute"
          :typeRoute="typeRoute"
          @deleted-data="deletedData"
          @restored-data="restoredData"
        />

        <buys-pembelian-langsung-table-cell
          v-if="types === 'pembelian-langsung'"
          :columns="columns"
          :types="types"
          :paging="paging"
          :parentRoute="parentRoute"
          :typeRoute="typeRoute"
          @deleted-data="deletedData"
          @restored-data="restoredData"
        />

        <sell-penjualan-toko-table-cell
          v-if="types === 'penjualan-toko'"
          :columns="columns"
          :types="types"
          :paging="paging"
          :parentRoute="parentRoute"
          :typeRoute="typeRoute"
          @deleted-data="deletedData"
          @restored-data="restoredData"
        />

        <koreksi-stok-table-cell
          v-if="types === 'koreksi-stok'"
          :columns="columns"
          :types="types"
          :paging="paging"
          :parentRoute="parentRoute"
          :typeRoute="typeRoute"
          @deleted-data="deletedData"
          @restored-data="restoredData"
        />

        <DataPerusahaanTableCell
          v-if="types === 'data-perusahaan'"
          :columns="columns"
          :types="types"
          :paging="paging"
          :parentRoute="parentRoute"
          :typeRoute="typeRoute"
          @deleted-data="deletedData"
          @restored-data="restoredData"
        />

        <PemakaianBarangTableCell
          v-if="types === 'pemakaian-barang'"
          :columns="columns"
          :types="types"
          :paging="paging"
          :parentRoute="parentRoute"
          :typeRoute="typeRoute"
          @deleted-data="deletedData"
          @restored-data="restoredData"
        />

        <PurchaseOrderTableCell
          v-if="types === 'purchase-order'"
          :columns="columns"
          :types="types"
          :paging="paging"
          :parentRoute="parentRoute"
          :typeRoute="typeRoute"
          @deleted-data="deletedData"
          @restored-data="restoredData"
        />

        <LaporanPembelianPeriodeTableCell
          v-if="types === 'laporan-pembelian-periode'"
          :columns="columns"
          :types="types"
          :paging="paging"
          :parentRoute="parentRoute"
          :typeRoute="typeRoute"
          @deleted-data="deletedData"
          @restored-data="restoredData"
        />

        <tr>
          <molecules-row-loading :loading="loading" :options="options" />
        </tr>
      </table>
    </div>

    <!-- Modal Supplier List -->
    <div
      v-if="showModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <div class="relative w-96 my-6 mx-auto max-w-sm">
        <!--content-->
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
        >
          <!--header-->
          <div
            class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"
          >
            <button
              class="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold"
              v-on:click="toggleModal()"
            >
              <span class="text-black h-6 w-6 text-2xl block">
                <i class="fa-solid fa-xmark text-lg"></i>
              </span>
            </button>
          </div>
          <!--body-->
          <div class="relative p-6 flex-auto">
            <div>
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
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>
<script>
import { getData } from "~/hooks/index";
import { totalTrash } from "~/hooks/index";

export default {
  props: {
    color: {
      default: "light",
      validator: function (value) {
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
    title: {
      type: String,
    },
    headers: {
      type: Array,
    },
    columns: {
      type: Array,
    },
    types: {
      type: String,
    },
    loading: {
      type: Boolean,
    },
    options: {
      type: String,
      default: "",
    },
    parentRoute: {
      type: String,
      default: null,
    },
    typeRoute: {
      type: String,
      default: null,
    },
    queryType: {
      type: String,
      default: "",
    },
    queryRole: {
      type: String,
      default: "",
    },
    queryMiddle: {
      type: String,
      default: "",
    },
    success: {
      type: Boolean,
      default: null,
    },
    messageAlert: {
      type: String,
      default: "",
    },
    paging: {
      type: [Object, Array],
    },
  },

  data() {
    return {
      total: 0,
      api_url: process.env.NUXT_ENV_API_URL,
      api_token: process.env.NUXT_ENV_APP_TOKEN,
      queryParam: this.$route.query.type,
      validLogin: this.$nuxt?.userData?.email,
      showModal: false,
      selectedSupplier: null,
      suppliers: [],
    };
  },

  beforeMount() {
    this.authTokenStorage();
  },

  created() {
    this.checkNewData();
    this.$nuxt.checkUserLogin();
    this.getSupplierLists();
  },

  mounted() {
    this.totalTrash();
  },

  methods: {
    changeSupplier(newValue) {
      const supplierId = newValue.id;
      if (supplierId !== undefined) {
        this.$router.push({
          path: `/dashboard/${this.parentRoute}/${this.typeRoute}/${this.queryMiddle}/add`,
          query: {
            type: this.queryType,
            supplier: supplierId,
          },
        });
        this.showModal = !this.showModal;
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

    toggleModal: function () {
      this.showModal = !this.showModal;
    },

    backTo() {
      this.$router.go(-1);
    },

    deletedData(id) {
      this.$emit("deleted-data", id);
    },

    restoredData(id) {
      this.$emit("restored-data", id);
    },

    totalTrash() {
      totalTrash({
        api_url: `${this.api_url}/data-total-trash?type=${this.queryType}${
          this.queryRole ? "&roles=" + this.queryRole : ""
        }`,
        api_key: process.env.NUXT_ENV_APP_TOKEN,
        token: this.token.token,
      })
        .then(({ data }) => {
          this.total = data;
        })
        .catch((err) => console.log(err));
    },

    closeSuccessAlert() {
      this.$emit("close-alert");
    },

    filterData(param) {
      this.$emit("filter-data", param, this.types);
    },

    resetFilter() {
      this.$emit("filter-data", {}, this.types);
    },

    downloadData() {
      if (this.types === "campaign-data") {
        this.$emit("download-data");
      }
    },
  },

  computed: {
    token() {
      return this.$store.getters["auth/getAuthToken"];
    },
  },

  watch: {
    notifs() {
      if (this.$_.size(this.notifs) > 0) {
        // this.$toast.show(this.messageNotifs, {
        //   type: "info",
        //   duration: 5000,
        //   position: "top-right",
        // });
        this.totalTrash();
      }
    },
  },
};
</script>
