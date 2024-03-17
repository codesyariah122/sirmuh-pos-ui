<template>
  <tr
    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
  >
    <th
      scope="row"
      class="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
    >
      {{ $moment(item.tanggal).format("LL") }}
    </th>
    <td class="whitespace-nowrap p-4 text-lg">
      <span
        class="bg-blue-100 text-blue-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"
      >
        {{ item.kode }}
      </span>
    </td>
    <td class="whitespace-nowrap p-4 text-lg">
      <span class="bg-green-100 text-green-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
        {{ item.nama_pelanggan }}
      </span>
    </td>
    <td class="px-6 py-4">
      {{ item.alamat_pelanggan }}
    </td>
    <td class="whitespace-nowrap p-4 text-lg">
      <span class="bg-purple-100 text-purple-800 font-bold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">
        {{ item.operator }}
      </span>
    </td>

    <td class="px-6 py-4">
      {{ $format(item.jumlah_penjualan) }}
    </td>
    <td class="px-6 py-4">
      {{ $format(item.jumlah_penjualan - item.jumlah_piutang) }}
    </td>
    <td class="px-6 py-4">
      {{ $format(item.jumlah_piutang ) }}
    </td>
    <td class="px-6 py-4">
      {{ $format(item.bayar_penjualan) }}
    </td>
    <td class="whitespace-nowrap p-4 text-lg">
      <span class="bg-green-100 text-green-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
        {{ item.kas_nama }} ({{ item.kode_kas }})
      </span>
    </td>
    <td class="px-6 py-4">
      <span
        v-html="generateLunas({ lunas: item.lunas, visa: item.visa })"
      ></span>
    </td>
    <td class="whitespace-nowrap p-4 text-lg" v-if="item.lunas == 0">
      <span
        v-if="$_.size(timelines) > 0"
        class="bg-red-100 text-red-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400"
      >
        Angsuran
      </span>
      <span
        v-else
        class="bg-red-100 text-red-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400"
      >
        {{ item.visa }}
      </span>
    </td>
    <td class="px-6 py-4" v-else>
      <span
        :class="`${item.visa === 'HUTANG' ? 'bg-red-100 text-red-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400' : 'bg-green-100 text-green-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400'}`"
        >{{ item.visa }}</span
      >
    </td>
    <td class="px-6 py-4">{{ $roundup(item.jatuh_tempo) }} Hari</td>
    <td class="whitespace-nowrap p-4 text-lg">
      {{ $moment(item.tanggal).add(item.jatuh_tempo, "days").format("LL") }}
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: function () {
        return {};
      },
    },
    timelines: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },

  methods: {
    generateLunas(data) {
      let icon;
      if (data.lunas == 1 || data.visa === "LUNAS") {
        icon = `<i class="fa-solid fa-check fa-lg text-emerald-600"></i>`;
      } else {
        icon = '<i class="fa-solid fa-circle-minus text-red-600 fa-lg"></i>';
      }
      return icon;
    },
  },
};
</script>
