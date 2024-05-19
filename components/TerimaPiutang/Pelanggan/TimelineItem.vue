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
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
      Dari kas : <span v-if="timeline.kas !== null" class="bg-indigo-100 text-indigo-800 text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400">
        {{timeline.kas}}
      </span> <span v-else>Belum ada kas digunakan</span>
    </h3>
    <p class="mb-4 mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
      Sisa Piutang : {{ $format(timeline.jumlah < 0 ? 0 : timeline.jumlah) }}
    </p>
    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
      Dibayarkan oleh : <span v-if="parseFloat(timeline.bayar_angsuran) > 0" class="bg-green-100 text-green-800 text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"> {{ timeline.operator }}</span>
    </p>
    <div class="mt-4 flex justify-start space-x-6">
      <div>
        <span>Keterangan : </span>
      </div>
      <div>
        <article>
          {{timeline.keterangan}}
        </article>
      </div>
    </div>

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
    default: function() {
      return {}
    }
  },
  timeTitle: {
    type: String,
  default: null,
  },
},
};
</script>
