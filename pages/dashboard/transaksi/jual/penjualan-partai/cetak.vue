<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <cards-card-table
        color="dark"
        :title="`CETAK PENJUALAN PARTAI - ${kode}`"
        types="cetak"
        queryType="CETAK_PUNJUALAN_PARTAI"
        queryMiddle="cetak-penjualan-partai"
      />

      <div class="mt-6 -mb-2">
        <div class="flex justify-center items-center"></div>
      </div>
    </div>

    <div class="w-full">
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
                  :options="[
                    { id: null, text: 'Pilih Supplier' },
                    ...suppliers,
                  ]"
                  @change="changeSupplier($event)"
                  @select="changeSupplier($event)"
                  placeholder="Pilih Supplier"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="showModal"
        class="opacity-25 fixed inset-0 z-40 bg-black"
      ></div>
    </div>
  </div>
</template>

<script>
/**
 * @param {string}
 * @returns {string}
 * @author Puji Ermanto <puuji.ermanto@gmail.com>
 */
import { PEMBELIAN_LANGSUNG_TABLE } from "~/utils/table-pembelian-langsung";
import { getData, deleteData } from "~/hooks/index";

export default {
  name: "cetak-purchase-order",
  layout: "admin",

  data() {
    return {
      showModal: false,
      kode: this.$route.query["kode"],
      routePath: this.$route.path,
      stringRoute: null,
      typeRoute: null,
      loading: null,
      options: "",
      success: null,
      message_success: "",
      cetakStorage: localStorage.getItem("cetak_code")
        ? JSON.parse(localStorage.getItem("cetak_code"))
        : null,
      headers: [...PEMBELIAN_LANGSUNG_TABLE],
      api_url: process.env.NUXT_ENV_API_URL,
      items: [],
      links: [],
      paging: {
        current: null,
        from: null,
        last: null,
        per_page: null,
        total: null,
      },
    };
  },

  created() {
    this.checkNewData();
  },

  mounted() {
    this.getItemPembelianLangsung();
  },

  methods: {
    getItemPembelianLangsung() {
      if (
        this.cetakStorage !== null ||
        this.cetakStorage.ref_code === this.kode
      ) {
        console.log(this.cetakStorage.ref_code);
      } else {
        this.$router.push("/dashboard/transaksi/jual/penjualan-toko");
      }
    },
  },
};
</script>
