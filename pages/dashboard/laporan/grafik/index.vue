<template>
  <div>
    <div class="flex flex-wrap mt-12 px-6">
      <div class="w-full">
        <div
        class="relative w-[100vw] flex flex-col max-w-full break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-12"
        >
        <div class="flex flex-wrap items-between space-x-2 -mt-12 p-4">
          <div class="relative w-full md:w-4/12 max-w-full flex-grow flex-1">
            <cards-card-laba-pie-chart />
          </div>
          <div class="relative w-full md:w-4/12 max-w-full flex-grow flex-1">
            <cards-card-barang-terbaik-weekly />
          </div>
        </div>

        <div class="flex flex-wrap items-between space-x-2 p-4">
          <div class="relative w-full md:w-4/12 max-w-full flex-grow flex-1">
            <cards-card-penjualan-weekly />
          </div>

          <div class="relative w-full md:w-4/12 max-w-full flex-grow flex-1">
            <cards-card-pemasukan-weekly />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import { getData } from "~/hooks/index";

  export default {
    name: "laporan-grafik",
    layout: "admin"
  };
</script>
