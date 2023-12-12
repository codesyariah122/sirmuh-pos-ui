<template>
  <!-- Header -->
  <div class="relative bg-emerald-600 md:pt-32 pb-32 pt-24">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-6/12 px-4">
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
                admin: 'Karyawan Admin',
                kasir: 'Karyawan Kasir',
                gudang: 'Karyawan Gudang',
                produksi: 'Karyawan Produksi',
                kasirGudang: 'Karwayan Kasir Gudang',
              }"
              statIconName="fas fa-users"
              statIconColor="bg-orange-500"
            />
          </div>

          <div class="w-full lg:w-6/12 xl:w-6/12 px-4">
            <card-stats
              v-if="topSellings"
              :statSubtitle="`PREDIKSI PENJUALAN TERBAIK BULAN ${$moment()
                .clone()
                .add(1, 'months')
                .format('MMMM')} ${$moment()
                .clone()
                .add(1, 'years')
                .format('YYYY')}`"
              :statTitle="$_.map(topSellings.data, (item) => item)[1]"
              :data="topSellings.data"
              statArrow="up"
              statPercent="12"
              statPercentColor="text-emerald-500"
              :statDescripiron="{
                type: 'TOP_SELLINGS',
                top_selling: 'Barang Dengan Penjuaan Terbaik Bulan Depan',
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

          <div class="w-full lg:w-6/12 xl:w-6/12 px-4 py-4">
            <card-stats
              v-if="totalBarang"
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

          <div class="w-full lg:w-6/12 xl:w-6/12 px-4 py-4">
            <card-stats
              v-if="payableReports"
              :statSubtitle="`${$capitalize(
                (payableReports && payableReports?.message) || 'Loading ...'
              )}`"
              :statTitle="`${
                payableReports?.total
                  ? JSON.stringify(payableReports?.total)
                  : 'Loading ...'
              }`"
              :data="payableReports.data"
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

  mounted() {
    this.getTotalUser();
    this.getTotalBarang();
    this.topSellingProducts();
    this.accountsPayableReport();
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
      if (this.$_.size(this.notifs)) {
        this.getTotalUser();
        this.getTotalBarang();
        this.topSellingProducts();
        this.accountsPayableReport();
      }
    },
  },
};
</script>
