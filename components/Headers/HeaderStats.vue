<template>
  <!-- Header -->
  <div class="relative bg-emerald-600 md:pt-32 pb-32 pt-24">
    <div class="px-12 md:px-10 mx-auto w-full">
      <!-- <div v-if="!$nuxt.isMobile">
        <button
        class="cursor-pointer ml-6 px-6 py-0 mb-10 bg-transparent z-3"
        v-on:click="toggleHideSidebar"
        >
        <span v-if="$nuxt.showSidebar">
          <i class="fa-solid fa-xmark text-blueGray-300 text-4xl"></i>
        </span>
        <span v-else>
          <i class="fas fa-bars text-blueGray-300 text-4xl"></i>
        </span>
      </button>
    </div> -->

    <div>
      <div class="flex flex-wrap">
        <div class="hidden">
         <audio v-if="$nuxt.loginSound" autoplay :src="`${$nuxt.soundUrl}/login.mp3`" preload="auto"></audio>
       </div>
     </div>
     <!-- Card stats -->
     <div class="flex flex-wrap" v-if="$route.name === 'dashboard-role'">
      <div v-if="totalUser" class="w-full lg:w-6/12 xl:w-6/12 px-4">
        <card-stats
        statSubtitle="TOTAL PENGGUNA"
        :statTitle="`${totalUser.total} Pengguna`"
        :data="totalUser.data"
        statArrow="up"
        statPercent="3.48"
        statPercentColor="text-emerald-500"
        :statDescripiron="{
          type: 'TOTAL_USER',
          user_online: 'User is online',
          kasir: 'Karyawan Kasir',
          gudang: 'Karyawan Gudang',
          produksi: 'Karyawan Produksi',
        }"
        statIconName="fas fa-users"
        statIconColor="bg-orange-500"
        />
      </div>
      <div v-else class="w-full lg:w-6/12 xl:w-6/12 px-12 py-4">
        <div
        class="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50"
        >
        <div
        class="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse"
        >
        loading...
      </div>
    </div>
  </div>

  <div v-if="$_.size(topSellings.data) > 0" class="w-full lg:w-6/12 xl:w-6/12 px-4">
    <card-stats
    :statSubtitle="`PREDIKSI PENJUALAN TERBAIK BULAN ${$moment()
    .clone()
    .add(1, 'months')
    .format('MMMM')} ${$moment()
    .clone()
    .format('YYYY')}`"
    :statTitle="$_.map(topSellings.data, (item) => item)[1]"
    :data="topSellings.data"
    statArrow="up"
    statPercent="12"
    statPercentColor="text-emerald-500"
    :statDescripiron="{
      type: 'TOP_SELLINGS',
      top_selling: 'Barang Dengan Penjuaan Terbaik Bulan Depan',
      supplier: 'Supplier',
      kode: 'Kode Barang',
      nama: 'Nama Barang',
      stok: 'Stok Barang Tersisa',
      tanggal: 'Penjualan Terakhir',
      total_qty: 'Total Item Terjual',
      total_penjualan: 'Total Penjualan',
    }"
    statIconName="fas fa-hand-holding-dollar fa-2x"
    statIconColor="bg-indigo-500"
    />
  </div>
  <div v-else class="w-full lg:w-6/12 xl:w-6/12 px-4 py-4">
    <div
    class="flex items-center justify-center w-full h-56 border border-gray-200 rounded-lg bg-gray-50"
    >
    <div class="flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50" role="alert">
      <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
      </svg>
      <span class="sr-only">Info</span>
      <div>
        <span class="font-medium">👩🏻‍💼!</span> Belum ada transaksi penjualan dilakukan
      </div>
    </div>
  </div>
</div>

<div
v-if="totalBarang?.data"
class="w-full lg:w-6/12 xl:w-6/12 px-4 py-4"
>
<card-stats
statSubtitle="TOTAL BARANG"
:statTitle="`${totalBarang.total} Barang`"
:data="$_.map(totalBarang.data, (item) => item)[0]"
statArrow="up"
statPercent="12"
statPercentColor="text-emerald-500"
:statDescripiron="{
  type: 'TOTAL_BARANG',
  total_barang: '10 Stok Barang Limit',
}"
statIconName="fas fa-cart-arrow-down"
statIconColor="bg-fuchsia-500"
/>
</div>

<div v-else class="w-full lg:w-6/12 xl:w-6/12 px-4 py-4">
  <div
  class="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50"
  >
  <div
  class="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse"
  >
  loading...
</div>
</div>
</div>

<div
v-if="payableReports?.total"
class="w-full lg:w-6/12 xl:w-6/12 px-4 py-4"
>
<card-stats
:statSubtitle="`${$capitalize(payableReports?.message)}`"
:statTitle="`Hutang / Piutang jatuh tempo`"
:data="payableReports.data"
:reportTotals="[{id: 1, 'supplier': payableReports?.total.supplier}, {id:2, 'pelanggan': payableReports?.total.pelanggan}]"
statArrow="up"
statPercent="12"
statPercentColor="text-emerald-500"
:statDescripiron="{
  type: 'HUTANG_PIUTANG',
  title: $capitalize('hutang / piutang jatuh tempo'),
}"
statIconName="fas fa-percent"
statIconColor="bg-emerald-500"
/>
</div>
<div v-else class="w-full lg:w-6/12 xl:w-6/12 px-4 py-4">
  <div
  class="flex items-center justify-center w-full h-56 border border-gray-200 rounded-lg bg-gray-50"
  >
  <div
  class="flex items-center justify-center w-full h-56 border border-gray-200 rounded-lg bg-gray-50"
  >
  <div class="flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50" role="alert">
    <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <span class="sr-only">Info</span>
    <div>
      <span class="font-medium">👩🏻‍💼!</span> Belum ada transaksi penjualan dilakukan
    </div>
  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</template>

<script>
  import CardStats from "@/components/Cards/CardStats.vue";

  export default {
    components: {
      CardStats,
    },

    data() {
      return {
        api_url: process.env.NUXT_ENV_API_URL,
        dataPercent: {},
      };
    },

    created() {
      this.$nuxt.checkNewData();
    },

    mounted() {
      this.$nuxt.getTotalUser();
      this.$nuxt.getTotalBarang();
      this.$nuxt.topSellingProducts();
      this.$nuxt.accountsPayableReport();
    },

    methods: {
      toggleHideSidebar() {
        this.$nuxt.showSidebar = !this.$nuxt.showSidebar;
      },
    },

    computed: {
      totalUser() {
        return this.$store.getters["totals/getTotalUser"];
      },
      totalBarang() {
        return this.$store.getters["totals/getTotalBarang"];
      },
      topSellings() {
        return this.$store.getters["performances/getTopSellingProducts"];
      },
      payableReports() {
        return this.$store.getters["reports/getAccountsPayableReport"];
      },
    },
    watch: {
      notifs() {
        if (this.$_.size(this.$nuxt.notifs) > 0) {
          this.$nuxt.getTotalUser();
          this.$nuxt.getTotalBarang();
          this.$nuxt.topSellingProducts();
          this.$nuxt.accountsPayableReport();
        }
      },

      forbidenNotifs() {
        if (this.$_.size(this.$nuxt.forbidenNotifs) > 0 && this.$nuxt.forbidenNotifs.find(user => user.token !== this.token.token)) {
          this.$nuxt.getTotalUser();
          this.$nuxt.getTotalBarang();
          this.$nuxt.topSellingProducts();
          this.$nuxt.accountsPayableReport();
        }
      },

      loginNotifs() {
        if (this.$_.size(this.$nuxt.loginNotifs) > 0 && this.$nuxt.loginNotifs.find(user => user.email !== this.$nuxt.userData.email)) {
          this.$nuxt.getTotalUser();
          this.$nuxt.getTotalBarang();
          this.$nuxt.topSellingProducts();
          this.$nuxt.accountsPayableReport();
        }
      },

      logoutNotifs() {
        if (this.$_.size(this.$nuxt.logoutNotifs) > 0 && this.$nuxt.logoutNotifs.find(user => user.email !== this.$nuxt.userData.email)) {
          this.$nuxt.getTotalUser();
          this.$nuxt.getTotalBarang();
          this.$nuxt.topSellingProducts();
          this.$nuxt.accountsPayableReport();
        }
      },
      notifs() {
        if (this.$_.size(this.$nuxt.notifs) > 0) {
          if (this.$nuxt.notifs.find(notif => notif.routes === "data-barang") || this.$nuxt.notifs.find(notif => notif.routes === "pembelian-langsung") || this.$nuxt.notifs.find(notif => notif.routes === "purchase-order") || this.$nuxt.notifs.find(notif => notif.routes === "penjualan-toko") || this.$nuxt.notifs.find(notif => notif.routes === "penjualan-partai") || this.$nuxt.notifs.find(notif => notif.routes === "penjualan-po")) {
            this.$nuxt.getTotalBarang();
          }
        }
      },
    },
  };
</script>
