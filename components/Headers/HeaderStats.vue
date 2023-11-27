<template>
  <!-- Header -->
  <div class="relative bg-blueGray-800 md:pt-32 pb-32 pt-24">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-6/12 px-4">
            <card-stats
              statSubtitle="TOTAL USERS"
              :statTitle="`${totalUser.total}`"
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
              statSubtitle="TOTAL BARANG"
              :statTitle="`${totalBarang.total}`"
              :data="$_.map(totalBarang.data, (item) => item)[0]"
              statArrow="up"
              statPercent="12"
              statPercentColor="text-emerald-500"
              :statDescripiron="{
                type: 'TOTAL_BARANG',
                total_barang: '10 Stok Barang Limit',
              }"
              statIconName="fas fa-percent"
              statIconColor="bg-emerald-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-6/12 px-4 py-6">
            <card-stats
              statSubtitle="PERFORMANCE"
              statTitle="49,65%"
              statArrow="up"
              statPercent="12"
              statPercentColor="text-emerald-500"
              :statDescripiron="{ text: 'Since last month' }"
              statIconName="fas fa-percent"
              statIconColor="bg-emerald-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-6/12 px-4 py-6">
            <card-stats
              statSubtitle="PERFORMANCE"
              statTitle="49,65%"
              statArrow="up"
              statPercent="12"
              statPercentColor="text-emerald-500"
              :statDescripiron="{ text: 'Since last month' }"
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
  },

  computed: {
    totalUser() {
      return this.$store.getters["totals/getTotalUser"];
    },
    totalBarang() {
      return this.$store.getters["totals/getTotalBarang"];
    },
  },
  watch: {
    notifs() {
      if (this.$_.size(this.notifs)) {
        this.getTotalUser();
        this.getTotalBarang();
      }
    },
  },
};
</script>
