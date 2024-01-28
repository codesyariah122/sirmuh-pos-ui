<template>
  <div>
    <div class="flex flex-wrap">
      <div class="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
        <card-bar-chart />
      </div>
      <div class="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
        <card-line-chart />
      </div>
    </div>
    <div class="flex flex-wrap mt-4">
      <div class="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
        <card-supplier-chart />
      </div>
      <div class="w-full xl:w-6/12 px-4">
        <card-pelanggan-chart />
      </div>
    </div>
  </div>
</template>

<script>
import CardLineChart from "@/components/Cards/CardLineChart.vue";
import CardBarChart from "@/components/Cards/CardBarChart.vue";
import CardSupplierChart from "@/components/Cards/CardSupplierChart.vue";
import CardPelangganChart from "@/components/Cards/CardPelangganChart.vue";
export default {
  name: "dashboard-role",
  layout: "admin",
  components: {
    CardLineChart,
    CardBarChart,
    CardSupplierChart,
    CardPelangganChart,
  },
};
</script>
