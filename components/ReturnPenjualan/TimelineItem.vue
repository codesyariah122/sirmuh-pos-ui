<template>
  <div>
    <ol class="items-center sm:flex">
      <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
          <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
           <i class="fa-solid fa-boxes-stacked me-2 text-blue-800"></i>
         </div>
         <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
       </div>
       <div class="mt-3 sm:pe-8">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Item Penjualan {{timelines.nama_barang}}({{timelines?.kode_barang}})
        </h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {{$moment(timelines?.created_at_penjualan).format("LLL")}}
        </time>
        <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
          <li class="flex items-center">
            <i class="fa-solid fa-boxes-stacked me-2 text-emerald-700"></i>
            Quantity Beli : {{parseFloat(timelines?.qty_item) + parseFloat(timelines.qty)}} {{timelines?.satuan}}
          </li>
          <li class="flex items-center">
            <i class="fa-solid fa-money-bill me-2 text-blue-800"></i>
            Harga / {{timelines?.satuan}} : {{$format(timelines?.harga)}}
          </li>
          <li class="flex items-center">
            <i class="fa-solid fa-hand-holding-dollar me-2 text-emerald-700"></i>
            Total Belanja : {{$format((parseFloat(timelines?.qty_item) + parseFloat(timelines?.qty)) * timelines?.harga)}}
          </li>
        </ul>
      </div>
    </li>

    <li class="relative mb-6 sm:mb-0 ">
      <div class="flex justify-center items-center">
        <div class="z-10 flex items-center justify-center w-6 h-6 shrink-0 text-4xl">
          <i class="fa-solid fa-arrow-right-arrow-left text-emerald-700"></i>
        </div>
        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
      </div>
      <div class="mt-3 sm:pe-8 grid place-items-center">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Item Yang Direturn
        </h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {{$moment(timelines?.created_at).format("LLL")}}
        </time>
        <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 px-16">
          <li class="flex items-center">
            <i class="fa-solid fa-boxes-stacked me-2 text-emerald-700"></i>
            Quantity Return : {{parseFloat(timelines?.qty)}} {{timelines?.satuan}}
          </li>
          <li class="flex items-center">
            <i class="fa-solid fa-hand-holding-dollar me-2 text-emerald-700"></i>
            Total Return : {{$format(timelines?.harga * parseFloat(timelines?.qty))}}
          </li>
        </ul>
      </div>
    </li>

    <li class="relative mb-6 sm:mb-0">
      <div class="flex items-center">
        <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
         <i class="fa-solid fa-boxes-stacked me-2 text-blue-800"></i>
       </div>
       <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
     </div>
     <div class="mt-3 sm:pe-8">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Return Barang</h3>
      <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {{$moment(timelines?.updated_at).format("LLL")}}
      </time>
      <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
        <li class="flex items-center">
          <i class="fa-solid fa-boxes-stacked me-2 text-emerald-700"></i>
          Barang Return : {{parseFloat(timelines?.qty_item)}} {{timelines?.satuan}}
        </li>
        <li class="flex items-center">
          <i class="fa-solid fa-hand-holding-dollar me-2 text-emerald-700"></i>
          Kas Return : {{$format(timelines?.jumlah)}}
        </li>
      </ul>
    </div>
  </li>
</ol>


</div>
</template>

<script>
  export default {
    props: {
      timelines: {
        type: [Array, Object]
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
