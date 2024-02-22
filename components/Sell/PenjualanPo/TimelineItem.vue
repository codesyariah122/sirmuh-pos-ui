TimelineItem.vue<template>
  <div>
    <li v-for="timeline in timelines" :key="timeline.id" class="mb-10 ms-4">
      <div
        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
      ></div>
      <time
        class="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500"
      >
        <span
          class="bg-blue-100 text-blue-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"
        >
          {{ timeTitle }} {{ $capitalize(timeline.nama_barang) }} ({{
            timeline.kode_barang
          }})
        </span>
      </time>
      <figure v-if="timeline.photo" class="max-w-lg mt-6">
        <img class="h-auto min-w-full w-24 rounded-lg" v-if="item.photo !== null" :src="`${storage_url}/${timeline.photo}`">

        <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
          {{timeline.nama_barang}}
        </figcaption>
      </figure>
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
        Subtotal : {{ $format(timeline.subtotal) }}
      </h3>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">
        QTY : {{ $roundup(timeline.qty) }} {{ timeline.satuan }}
      </p>
      <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        Harga Beli : {{ $format(timeline.harga_beli_barang) }}
      </p>
      <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        Supplier : <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
          {{ $capitalize(timeline.nama_supplier) }} - {{ $capitalize(timeline.kode_supplier) }}
        </span> 
      </p>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    timelines: {
      type: Array,
      default: function () {
        return [];
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
