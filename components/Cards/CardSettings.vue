<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0"
    :class="[
      $nuxt.color === 'light'
        ? 'bg-white text-blueGray-800'
        : 'bg-blueGray-800 text-white shadow-lg',
    ]"
  >
    <div class="rounded-t mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-xl font-bold">{{ title }}</h6>

        <div class="flex justify-between space-x-2">
          <div>
            <button
              @click="backTo"
              class="bg-emerald-600 text-white active:bg-emerald-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            >
              <i class="fa-solid fa-arrow-left text-md"></i> Kembali
            </button>
          </div>
          <!-- 
          <div>
            <button
              v-if="$nuxt.color === 'dark'"
              @click="() => ($nuxt.color = 'light')"
              class="bg-yellow-500 text-white active:bg-orange-600 font-bold uppercase text-sm px-4 py-2 shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 rounded-full"
            >
              <i class="fa-solid fa-sun"></i>
            </button>
            <button
              v-if="$nuxt.color === 'light'"
              @click="() => ($nuxt.color = 'dark')"
              class="bg-blueGray-800 text-white active:bg-gray-500 font-bold uppercase text-sm px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            >
              <i class="fa-solid fa-cloud-moon"></i>
            </button>
          </div> -->
        </div>
      </div>
    </div>

    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <barangs-form-add
        v-if="pageType === 'barangData' && methodType === 'add'"
        @detail-data="detailData"
        :type="type"
        :current="current"
        :pageData="pageData"
      />

      <pelanggans-form-add
        v-if="pageType === 'pelangganData' && methodType === 'add'"
        :type="type"
        :current="current"
        :pageData="pageData"
      />

      <cost-form-add
        v-if="pageType === 'biayaData' && methodType === 'add'"
        :type="type"
        :current="current"
        :pageData="pageData"
      />

      <suppliers-form-add
        v-if="pageType === 'supplierData' && methodType === 'add'"
        :type="type"
        :current="current"
        :pageData="pageData"
      />

      <mutasi-kas-form-add
        v-if="pageType === 'mutasiKas' && methodType === 'add'"
        :type="type"
        :current="current"
        :pageData="pageData"
      />

      <cashes-form-add
        v-if="pageType === 'kasData' && methodType === 'add'"
        :type="type"
        :detail="detail"
        :slug="slug"
        :current="current"
        :pageData="pageData"
        :parentRoute="parentRoute"
        :typeRoute="typeRoute"
      />

      <barangs-form-edit
        v-if="pageType === 'barangData' && methodType === 'edit'"
        :type="type"
        :detail="detail"
        :slug="slug"
        :current="current"
        :pageData="pageData"
        :parentRoute="parentRoute"
        :typeRoute="typeRoute"
      />

      <pelanggans-form-edit
        v-if="pageType === 'pelangganData' && methodType === 'edit'"
        :type="type"
        :detail="detail"
        :slug="slug"
        :current="current"
        :pageData="pageData"
      />

      <cost-form-edit
        v-if="pageType === 'biayaData' && methodType === 'edit'"
        :type="type"
        :detail="detail"
        :slug="slug"
        :current="current"
        :pageData="pageData"
        @rebuild-data="detailBiaya"
      />

      <suppliers-form-edit
        v-if="pageType === 'supplierData' && methodType === 'edit'"
        :type="type"
        :detail="detail"
        :slug="slug"
        :current="current"
        :pageData="pageData"
      />

      <karyawans-form-edit
        v-if="pageType === 'karyawanData' && methodType === 'edit'"
        :type="type"
        :detail="detail"
        :slug="slug"
        :current="current"
        :pageData="pageData"
      />

      <cashes-form-edit
        v-if="pageType === 'kasData' && methodType === 'edit'"
        :type="type"
        :detail="detail"
        :slug="slug"
        :current="current"
        :pageData="pageData"
        :parentRoute="parentRoute"
        :typeRoute="typeRoute"
      />

      <barangs-form-upload
        v-if="pageType === 'barangData' && methodType === 'upload'"
        :type="type"
        :detail="detail"
        :slug="slug"
        :current="current"
        :pageData="pageData"
        :parentRoute="parentRoute"
        :typeRoute="typeRoute"
      />

      <buys-pembelian-langsung-form-add-pembelian-form
        v-if="pageType === 'pembelianLangsung' && methodType === 'add'"
        :type="type"
        :current="current"
        :pageData="pageData"
      />

      <buys-pembelian-langsung-form-edit-pembelian-form
        v-if="pageType === 'pembelianLangsung' && methodType === 'edit'"
        :type="type"
        :current="current"
        :pageData="pageData"
        :detail="detail"
        :items="items"
        @rebuild-data="getDetailPembelian"
      />

      <buys-purchase-order-form-add-purchase-order-form
        v-if="pageType === 'purchaseOrder' && methodType === 'add'"
        :type="type"
        :current="current"
        :pageData="pageData"
      />

      <buys-purchase-order-form-edit-purchase-order-form
        v-if="pageType === 'purchaseOrder' && methodType === 'edit'"
        :type="type"
        :current="current"
        :pageData="pageData"
        :detail="detail"
        :items="items"
        @rebuild-data="getDetailPembelian"
      />
      <buys-purchase-order-form-accept-purchase-order-form
        v-if="pageType === 'terimaPurchaseOrder' && methodType === 'accept'"
        :type="type"
        :current="current"
        :pageData="pageData"
        :detail="detail"
        :items="items"
        :orders="orders"
        @rebuild-data="getDetailPembelian"
      />

      <bayar-hutang-form-buy
        v-if="pageType === 'bayarHutang' && methodType === 'edit'"
        :type="type"
        :kodeBayar="kodeBayar"
        :current="current"
        :pageData="pageData"
        :parentRoute="parentRoute"
        :typeRoute="typeRoute"
      />

      <sell-penjualan-toko-form-add-penjualan-toko-form
        v-if="pageType === 'penjualanToko' && methodType === 'add'"
        :type="type"
        :current="current"
        :pageData="pageData"
      />

      <sell-penjualan-toko-form-edit-penjualan-toko-form
        v-if="pageType === 'penjualanToko' && methodType === 'edit'"
        :type="type"
        :current="current"
        :pageData="pageData"
        :detail="detail"
        :items="items"
        @rebuild-data="getDetailPenjualan"
      />

      <sell-penjualan-po-form-add-penjualan-po-form
        v-if="pageType === 'penjualanPo' && methodType === 'add'"
        :type="type"
        :current="current"
        :pageData="pageData"
      />

      <sell-penjualan-po-form-edit-penjualan-po-form
        v-if="pageType === 'penjualanPo' && methodType === 'edit'"
        :type="type"
        :current="current"
        :pageData="pageData"
        :detail="detail"
        :items="items"
        @rebuild-data="getDetailPenjualan"
      />

      <sell-penjualan-partai-form-add-penjualan-partai-form
        v-if="pageType === 'penjualanPartai' && methodType === 'add'"
        :type="type"
        :current="current"
        :pageData="pageData"
      />

      <terima-piutang-pelanggan-form-buy
        v-if="pageType === 'terimaPiutang' && methodType === 'edit'"
        :type="type"
        :kodeBayar="kodeBayar"
        :current="current"
        :pageData="pageData"
        :parentRoute="parentRoute"
        :typeRoute="typeRoute"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageType: {
      type: String,
      default: null,
    },
    methodType: {
      type: String,
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
    title: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: null,
    },
    types: {
      type: String,
      default: null,
    },
    detail: {
      type: [Object, Array],
      default: function () {
        return {};
      },
    },
    items: {
      type: Array,
      default: function () {
        return [];
      },
    },
    orders: {
      type: Array,
      default: function () {
        return [];
      },
    },
    slug: {
      type: String,
    },
    kodeBayar: {
      type: String,
    },
    current: {
      type: [Number, String],
      default: null,
    },
  },

  methods: {
    backTo() {
      localStorage.removeItem('ref_code')
      if (this.current) {
        if (this.pageType === "bayarHutang") {
          this.$router.push({
            path: `/dashboard/${this.parentRoute}/${this.pageData}`,
            query: {
              current: this.current,
            },
          });
        } else {
          this.$router.push({
            path: `/dashboard/${this.parentRoute}/${this.typeRoute}/${this.pageData}`,
            query: {
              current: this.current,
            },
          });
        }
      } else {
        this.$router.go(-1);
      }
    },
    detailData(param) {
      this.$emit("detail-data", param);
    },

    getDetailPembelian(loading) {
      this.$emit("rebuild-data", loading);
    },

    getDetailPenjualan(loading) {
      this.$emit("rebuild-data", loading);
    },

    detailBiaya(loading) {
      this.$emit('rebuild-data', this.slug, loading)
    }
  },
};
</script>
