<template>
  <div>
    <li v-for="groupedTimeline in groupedTimelines" :key="groupedTimeline.kode_barang" class="mb-10 ms-4">
      <div
      class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "
      ></div>
      <time
      class="mb-1 text-lg font-normal leading-none text-gray-400"
      >
      <span
      class="bg-blue-100 text-blue-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dborder border-blue-400"
      >
      {{ timeTitle }} {{ $capitalize(groupedTimeline[0].nama_barang) }} ({{
        groupedTimeline[0].kode_barang
      }})
    </span>
  </time>
  <h3 class="text-lg font-semibold text-gray-900">
    Subtotal : {{ $format(groupedTimeline.reduce((acc, timeline) => acc + parseFloat(timeline.subtotal), 0)) }}
  </h3>
  <p class="text-base font-normal text-gray-500">
    QTY : {{ groupedTimeline.reduce((acc, timeline) => acc + parseFloat(timeline.qty), 0) }} {{ groupedTimeline[0].satuan }}
  </p>
  <p class="mb-4 text-base font-normal text-gray-500">
    Harga Satuan : {{ $format(groupedTimeline[0].harga_satuan) }}
  </p>
  <p class="mb-4 text-base font-normal text-gray-500">
    Supplier : <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-green-400">
      {{groupedTimeline[0].supplier}}
    </span>
  </p>
  <p class="mb-4 text-base font-normal text-gray-500">
    Alamat Suplier : <address>{{ $capitalize(groupedTimeline[0].alamat_supplier) }}</address>
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

  computed: {
    groupedTimelines() {
      const grouped = this.timelines.reduce((acc, timeline) => {
        const key = timeline.kode_barang;
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(timeline);
        return acc;
      }, {});
      return Object.values(grouped);
    },
  },
};
</script>
