<template>
  <div
  class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-12"
  >
  <div class="flex flex-wrap items-between mt-6 p-4">
    <div class="relative w-full max-w-full flex-grow flex-1">
      <h3 class="font-bold text-xl text-blueGray-700">Detail {{ title }}</h3>
    </div>
    <div>
      <button
      @click="backTo"
      class="bg-emerald-600 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
      >
      <i class="fa-solid fa-arrow-left-long"></i> Kembali
    </button>
  </div>
</div>
<!-- Component Detail non table -->
<div v-if="tables === 'off'"
class="mt-6 p-4">
<expenditures-detail-pengeluaran
v-if="cellType === 'pengeluaran'"
:item="item"
/>
<koreksi-stok-detail-list
v-if="cellType === 'koreksi-stok'"
:item="item"
:timelines="timelines"
/>
</div>
<!-- Component Detail base table -->
<div v-else class="mt-6 p-4">
  <div class="overflow-auto shadow-md sm:rounded-lg">
    <table
    class="items-center border-collapse table-sticky w-full"
    :class="[
      color === 'light'
      ? 'bg-white'
      : 'bg-blueGray-800 text-white shadow-lg',
      ]"
      >
      <molecules-table-header
      :headers="headers"
      :color="color"
      :types="types"
      />

      <tbody>
        <bayar-hutang-detail-table-cell
        v-if="cellType === 'bayar-hutang'"
        :item="item"
        :timelines="timelines"
        />
        <buys-pembelian-langsung-detail-table-cell
        v-if="cellType === 'pembelian-langsung'"
        :item="item"
        :timelines="timelines"
        />
        <buys-purchase-order-detail-table-cell
        v-if="cellType === 'purchase-order'"
        :item="item"
        />

        <sell-penjualan-toko-detail-table-cell
        v-if="cellType === 'penjualan-toko'"
        :item="item"
        />

        <sell-penjualan-po-detail-table-cell
        v-if="cellType === 'penjualan-po'"
        :item="item"
        />

        <sell-penjualan-partai-detail-table-cell
        v-if="cellType === 'penjualan-partai'"
        :item="item"
        />

        <terima-piutang-pelanggan-detail-table-cell
        v-if="cellType === 'piutang-pelanggan'"
        :item="item"
        :timelines="timelines"
        />
      </tbody>
    </table>
  </div>
</div>

<div v-if="$_.size(timelines) > 0" class="mt-10 p-4">
  <div class="flex justify-start mb-8">
    <div>
      <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
        {{ timelineTitle }}
      </h2>
    </div>
  </div>
  <ol class="relative border-s border-gray-200 dark:border-gray-700">
    <bayar-hutang-timeline-item
    v-if="cellType === 'bayar-hutang'"
    :timelines="timelines"
    :timeTitle="timeTitle"
    :item="item"
    />
    <buys-pembelian-langsung-timeline-item
    v-if="cellType === 'pembelian-langsung'"
    :timelines="timelines"
    :timeTitle="timeTitle"
    />
    <buys-purchase-order-timeline-item
    v-if="cellType === 'purchase-order'"
    :timelines="timelines"
    :timeTitle="timeTitle"
    />

    <sell-penjualan-toko-timeline-item
    v-if="cellType === 'penjualan-toko'"
    :timelines="timelines"
    :timeTitle="timeTitle"
    :item="item"
    />

    <sell-penjualan-po-timeline-item
    v-if="cellType === 'penjualan-po'"
    :timelines="timelines"
    :timeTitle="timeTitle"
    :item="item"
    />

    <sell-penjualan-partai-timeline-item
    v-if="cellType === 'penjualan-partai'"
    :timelines="timelines"
    :timeTitle="timeTitle"
    :item="item"
    />

    <terima-piutang-pelanggan-timeline-item
    v-if="cellType === 'piutang-pelanggan'"
    :timelines="timelines"
    :timeTitle="timeTitle"
    :item="item" 
    />
  </ol>
</div>

<molecules-row-loading :loading="loading" :options="options" />
</div>
</template>
<script>
  import team2 from "@/assets/img/team-2-800x800.jpg";

  export default {
    props: {
      item: {
        type: Object,
      default: function () {
        return {};
      },
    },
    detail: {
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

tables: {
  type: String,
default: null
},
headers: {
  type: Array,
},
title: {
  type: String,
default: null,
},
timelineTitle: {
  type: String,
default: null,
},
timeTitle: {
  type: String,
default: null,
},
stringRoute: {
  type: String,
default: null,
},
parentRoute: {
  type: String,
default: null,
},
typeRoute: {
  type: String,
default: null,
},
selectedRoute: {
  type: String,
default: null,
},
type: {
  type: String,
default: null,
},
types: {
  type: String,
default: null,
},
cellType: {
  type: String,
default: null,
},
orderBy: {
  type: Object,
default: function () {
  return {};
},
},
loading: {
  type: Boolean,
},
options: {
  type: String,
default: "",
},
},

methods: {
  backTo() {
    this.$router.go(-1);
  },
},
};
</script>
