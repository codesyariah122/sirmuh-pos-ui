<template>
  <tr
    class="bg-white border-b"
  >
    <th
    scope="row"
    class="whitespace-nowrap p-4 text-lg"
    >
      {{ $moment(item.tanggal).format("LL") }}
    </th>
    <th
      scope="row"
      class="whitespace-nowrap p-4 text-lg"
    >
      <span
        class="bg-blue-100 text-blue-800 font-medium me-2 px-2.5 py-0.5 rounded border border-blue-400"
      >
        {{ item.kode }}
      </span>
    </th>
    <th
      scope="row"
      class="whitespace-nowrap p-4 text-lg"
    >
      <span
        class="bg-blue-100 text-blue-800 font-medium me-2 px-2.5 py-0.5 rounded border border-blue-400"
      >
        {{ item.kode_pembelian }}
      </span>
    </th>
    <td class="whitespace-nowrap p-4 text-lg">
      <span
          class="bg-green-100 text-green-800 rounded me-2 px-2.5 py-0.5  border border-green-400"
        >
        {{ item.nama_supplier }}
      </span>
    </td>
    <td class="px-6 py-4">
      {{ item.alamat }}
    </td>
    <td class="whitespace-nowrap p-4 text-lg">
      <span
          class="bg-green-100 text-green-800 me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"
        >
        {{ item.operator }}
      </span>
    </td>
    <td class="whitespace-nowrap p-4 text-lg text-right">
      <span
          class="bg-green-100 text-green-800 me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"
        >
        {{ item.nama_barang }} ({{ item.kode_barang }})
      </span>
    </td>
    <td class="whitespace-nowrap p-4 text-lg text-right">
      {{ $format(item.harga_beli) }}
    </td>
    <td class="whitespace-nowrap p-4 text-lg">
      {{ $roundup(item.qty_pembelian) }}
      {{ item.satuan_pembelian_barang }}
    </td>
    <td class="whitespace-nowrap p-4 text-lg text-right">
      {{ $format(item.qty_pembelian * item.harga_beli) }}
    </td>
    <td class="whitespace-nowrap p-4 text-lg text-right">
      {{ $format(item.bayar) }}
    </td>
    <td class="whitespace-nowrap p-4 text-lg text-right">
      {{ $format(item.jumlah_hutang) }}
    </td>
    <td v-if="item.po === 'True'" class="whitespace-nowrap p-4 text-lg text-right">
      {{ $format(item.bayar - item.jumlah_pembelian) }}
    </td>
    <td v-if="item.po === 'False'" class="whitespace-nowrap p-4 text-lg text-right">
      {{ $format(item.bayar) }}
    </td>
    <td class="whitespace-nowrap p-4 text-lg text-right">
      {{ $format(item.diterima) }}
    </td>
    <td class="whitespace-nowrap p-4 text-lg text-right">
      {{ $format(item.sisa_hutang) }}
    </td>
    <td class="whitespace-nowrap p-4 text-lg">
      <span class="bg-indigo-100 text-indigo-800 text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400">
        {{ item.kas_nama }} ({{ item.kode_kas }})
      </span>
    </td>
    <td class="px-6 py-4">
      <span
        v-html="generateLunas({ lunas: item.lunas, visa: item.visa })"
      ></span>
    </td>
    <td class="px-6 py-4 w-80" v-if="item.lunas == 0">
      <span
        v-if="$_.size(timelines) > 0"
        class="bg-red-100 text-red-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400"
      >
        Angsuran
      </span>
      <span
        v-else
        :class="`${item.visa === 'HUTANG' ? 'bg-red-100 text-red-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400' : 'bg-green-100 text-green-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400'}`"
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
