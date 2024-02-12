<template>
  <div>
    <li v-for="timeline in timelines" :key="timeline.id" class="mb-10 ms-4">
      <div
        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
      ></div>
      <time
        class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
      >
        {{ timeTitle }} {{ timeline.angsuran_ke }}
      </time>
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
        Dibayarkan : {{ $format(timeline.bayar_angsuran) }}
      </h3>
      <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        Sisa Hutang : {{ $format(timeline.jumlah) }}
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
    timeTitle: {
      type: String,
      default: null,
    },
  },
};
</script>
