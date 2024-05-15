<template>
  <div>
    <ol class="items-center sm:flex justify-start space-x-6">
      <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
          <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0 text-blue-800">
            <i class="fa-solid fa-warehouse"></i>
          </div>
          <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pe-8">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            {{timelines.nama_barang_asal}}
          </h3>
          <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{timelines.kode_barang_asal}}</time>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            Stok Terkini : {{parseFloat(timelines.stok_barangasal)}}{{timelines.satuan_barang_asal}}
          </p>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            Stok Lalu : {{parseFloat(timelines.last_qty_barangasal)}}{{timelines.satuan_barang_asal}}
          </p>
        </div>
      </li>

      <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
          <div class="z-10 flex items-center justify-center w-6 h-6 shrink-0 text-2xl text-emerald-800">
            <i class="fa-solid fa-right-left"></i>
          </div>
        </div>
        <div class="mt-3 sm:pe-8 text-emerald-700 text-xl">
          <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
            Terpakai : {{parseFloat(timelines.qty)}}{{timelines.satuan_barang_asal}}
          </span>
        </div>
      </li>

      <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
          <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0 text-emerald-700">
            <i class="fa-solid fa-boxes-stacked"></i>
          </div>
          <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pe-8">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            {{timelines?.nama_barang_tujuan}}
          </h3>
          <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {{timelines?.kode_barang_tujuan}}
          </time>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            Stok Terkini : {{parseFloat(timelines?.stok_barangtujuan)}}{{timelines?.satuan_barang_tujuan}}
          </p>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            Stok Lalu : {{parseFloat(timelines?.last_qty_barangtujuan)}}{{timelines?.satuan_barang_tujuan}}
          </p>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    props: {
      timelines: {
        type: Object,
      default: function () {
        return {};
      },
    },
    item: {
      type: Object,
    default: function () {
      return {};
    },
  },
  timeTitle: {
    type: String,
  default: null,
  },
},

data() {
  return {
    storage_url: process.env.NUXT_ENV_STORAGE_URL
  }
}
};
</script>
