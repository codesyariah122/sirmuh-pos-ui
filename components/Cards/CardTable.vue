<template>
  <div
  class="relative w-[100vw] flex flex-col max-w-full break-words mb-6 shadow-lg rounded h-auto overflow-hidden"
  :class="[
    $nuxt.color === 'light'
    ? 'bg-white'
    : 'bg-blueGray-800 text-white shadow-lg',
    widthCard,
    ]"
    >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-between">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <h3
          class="font-bold text-xl"
          :class="[
            $nuxt.color === 'light' ? 'text-blueGray-700' : 'text-white',
            ]"
            >
            {{ title }}
            <i
            v-if="queryParam"
            class="fa-solid fa-trash-can-arrow-up text-lg"
            ></i>
          </h3>
        </div>

        <div
        v-if="
        $nuxt.userData.role == 1 || $nuxt.userData.role == 2 || $nuxt.userData.role == 3 || $nuxt.userData.role == 4 &&
        !queryParam &&
        types !== 'user-role' &&
        types !== 'cetak' &&
        types !== 'bayar-hutang' && 
        types !== 'laporan-pembelian-periode' &&
        types !== 'laporan-penjualan-periode' &&
        tableSetting !== 'laporan' &&
        types !== 'cetak' &&
        types !== 'piutang-pelanggan' && 
        types !== 'data-laba-rugi' && 
        types !== 'data-history' &&
        !trashed || trashed === undefined
        "
        >
        <div v-if="types === 'pembelian-langsung' || types === 'purchase-order' || types === 'koreksi-stok'">
          <button
          class="text-white bg-emerald-600 hover:bg-[#d6b02e] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
          type="button"
          v-on:click="toggleModal(types)"
          >
          <i class="fa-solid fa-plus"></i> Tambah 
        </button>
      </div>

      <div v-else>
        <button
        v-if="types !== 'cetak' && types !== 'piutang-pelanggan' && types !== 'bayar-hutang' && types !== 'data-laba-rugi' && 
        types !== 'laporan-pembelian-periode' && 
        types !== 'laporan-penjualan-periode' && 
        tableSetting !== 'laporan' &&
        types !== 'return-pembelian' &&
        types !== 'return-penjualan' &&
        types !== 'data-history' &&
        !trashed || trashed === undefined"
        type="button"
        @click="redirectAddPage"
        class="text-white bg-emerald-600 hover:bg-[#d6b02e] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
        >
        <i class="fa-solid fa-plus"></i> Tambah
      </button>
    </div>
  </div>
  <div v-else>
    <button
    v-if="
    types !== 'user-data' &&
    types !== 'barang-by-warehouse' &&
    types !== 'cetak' &&
    trashed
    "
    @click="backTo"
    class="bg-emerald-600 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
    >
    <i class="fa-solid fa-arrow-left-long"></i> Kembali
  </button>
</div>

<div v-if="trashed">
  <button
  @click="backTo"
  class="bg-emerald-600 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
  >
  <i class="fa-solid fa-arrow-left-long"></i> Kembali
</button>
</div>

<div v-if="!queryParam && types !== 'user-role' && types !== 'cetak' && types !== 'pembelian-langsung' && types !== 'purchase-order' && types !== 'laporan-pembelian-periode' && types !== 'laporan-penjualan-periode' && types !== 'penjualan-toko' && types !== 'penjualan-partai' && types !== 'penjualan-po' && types !== 'barang-by-warehouse' && types !== 'piutang-pelanggan' && types !== 'bayar-hutang' && types !== 'data-laba-rugi' && types !== 'data-history' && tableSetting !== 'laporan'">
  <button
  type="button"
  @click="total > 0 ? redirectTrash() : null"
  class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800"
  >
  <i class="fa-solid fa-trash"></i>
  <span class="sr-only">Notifications</span>
  <div
  class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2"
  >
  {{ total }}
</div>
</button>
</div>
</div>

<div
v-if="success"
ref="alertNotifs"
class="flex justify-center w-full bg-transparent mt-4"
>
<molecules-success-alert
:success="success"
:messageAlert="messageAlert"
@close-alert="closeSuccessAlert"
/>
</div>

<div
v-if="
types === 'barang-by-suppliers' ||
types === 'data-pelanggan' ||
types === 'data-supplier' ||
types === 'barang-by-warehouse' ||
types === 'barang-all' ||
types === 'karyawan' ||
types === 'kas' ||
types === 'data-biaya' ||
types === 'bank-data' ||
types === 'laporan-pembelian-periode' ||
types === 'laporan-pembelian-supplier' ||
types === 'laporan-pembelian-barang' ||
types === 'data-laba-rugi' ||
types === 'data-laporan-hutang' || 
types === 'laporan-penjualan-periode' ||
types === 'laporan-cash-flow'
"
>
<div class="flex flex-nowrap justify-start mt-6 mb-6 space-x-4">
  <div v-if="types !== 'laporan-pembelian-periode' && types !== 'laporan-penjualan-periode' && types !== 'barang-by-warehouse' && types !== 'data-laba-rugi'">
    <button
    @click="resetFilter"
    type="button"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
    >
    Reset Filter
    <i class="fa-solid fa-repeat"></i>
  </button>
</div>

<div>
  <button
  v-if="$nuxt.startDownload"
  @click="downloadData"
  type="button"
  class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
  >
  Export PDF {{ $nuxt.startDownload }}
  <i class="fa-solid fa-download"></i>
</button>
</div>
</div>
</div>

<div class="flex justify-start w-full bg-transparent mt-2 overflow-x-auto">
  <div v-if="types === 'barang-by-suppliers'">
    <barangs-filter-barang
    @filter-data="filterData"
    :resetFilterProcess="resetFilterProcess"
    />
  </div>
  <div v-if="types === 'barang-all'">
    <barang-all-filter @filter-data="filterData" />
  </div>
  <div v-if="types === 'data-pelanggan'">
    <pelanggans-filter-pelanggan @filter-data="filterData" />
  </div>
  <div v-if="types === 'data-supplier'">
    <suppliers-filter-supplier @filter-data="filterData" />
  </div>
  <div v-if="types === 'karyawan'">
    <karyawans-filter-karyawan @filter-data="filterData" />
  </div>
  <div v-if="types === 'kas'">
    <cashes-filter-kas @filter-data="filterData" />
  </div>
  <div v-if="types === 'data-biaya'">
    <cost-filter-biaya @filter-data="filterData" />
  </div>
  <div v-if="types === 'laporan-pembelian-periode'">
    <laporan-pembelian-periode-filter-laporan-periode
    @filter-data="filterData"
    />
  </div>
  <div v-if="types === 'laporan-pembelian-supplier'">
    <laporan-pembelian-periode-filter-laporan-periode
    @filter-data="filterData"
    />
  </div>
  <div v-if="types === 'laporan-pembelian-barang'">
    <laporan-pembelian-periode-filter-laporan-periode
    @filter-data="filterData"
    />
  </div>

  <div v-if="types === 'laporan-penjualan-periode'">
    <laporan-penjualan-periode-filter-laporan-periode
    @filter-data="filterData"
    />
  </div>

  <div v-if="types === 'data-laba-rugi'">
    <laba-rugi-filter-laba-rugi @filter-data="filterData" />
  </div>

  <div v-if="types === 'data-laporan-hutang'">
    <hutang-filter-hutang @filter-data="filterData" />
  </div>

  <div v-if="types === 'pembelian-langsung'">
    <buys-pembelian-langsung-filter-data @filter-data="filterData" />
  </div>

  <div v-if="types === 'purchase-order'">
    <buys-purchase-order-filter-data @filter-data="filterData" />
  </div>

  <div v-if="types === 'penjualan-toko'">
    <sell-penjualan-toko-filter-data @filter-data="filterData" />
  </div>

  <div v-if="types === 'penjualan-po'">
    <sell-penjualan-po-filter-data @filter-data="filterData" />
  </div>

  <div v-if="types === 'penjualan-partai'">
    <sell-penjualan-partai-filter-data @filter-data="filterData" />
  </div>

  <div v-if="types === 'bayar-hutang'">
    <bayar-hutang-filter-data @filter-data="filterData" />
  </div>

  <div v-if="types === 'piutang-pelanggan'">
    <terima-piutang-pelanggan-filter-data @filter-data="filterData" />
  </div>

  <div v-if="types === 'pemasukan'">
    <pemasukans-filter-data @filter-data="filterData" />
  </div>

  <div v-if="types === 'pengeluaran'">
    <expenditures-filter-data @filter-data="filterData" />
  </div>

  <div v-if="types === 'mutasi-kas'">
    <mutasi-kas-filter-data @filter-data="filterData" />
  </div>

  <div v-if="types === 'return-pembelian'">
    <return-pembelian-filter-data @filter-data="filterData" />
  </div>

  <div v-if="types === 'return-penjualan'">
    <return-penjualan-filter-data @filter-data="filterData" />
  </div>

  <div v-if="types === 'koreksi-stok'">
    <koreksi-stok-filter-data @filter-data="filterData" />
  </div>

  <div v-if="types === 'laporan-cash-flow'">
    <laporan-cash-flow-filter @filter-data="filterData"/>
  </div>
</div>
</div>

<!-- Cetak Pembelian -->
<div
v-if="types === 'cetak'"
class="block w-full overflow-x-hidden overflow-y-hidden"
>
<cetak-pembelian-langsung v-if="queryMiddle === 'cetak-pembelian'" />
<cetak-purchase-order v-if="queryMiddle === 'cetak-purchase-order'" />
<cetak-penjualan-toko v-if="queryMiddle === 'cetak-penjualan-toko'" />
<cetak-penjualan-po v-if="queryMiddle === 'cetak-penjualan-po'" />
<cetak-penjualan-partai v-if="queryMiddle === 'cetak-penjualan-partai'" />
<cetak-bayar-hutang v-if="queryMiddle === 'cetak-bayar-hutang'" />
<cetak-piutang-pelanggan v-if="queryMiddle === 'cetak-piutang-pelanggan'" />
<cetak-return-pembelian v-if="queryMiddle === 'cetak-return-pembelian'" />
<cetak-return-penjualan v-if="queryMiddle === 'cetak-return-penjualan'" />
</div>

<div
v-else
:class="`block w-full overflow-x-auto overflow-y-auto ${
  types !== 'data-role-management' ? 'h-[75vh]' : 'h-auto'
}`"
>

<!-- History Programm / data-history -->
<div class="p-6 px-6" v-if="types === 'data-history'" >
  <history-log-history :items="columns"/>
</div>
<!-- End of history programm -->

<table v-if="types !== 'data-history'"
class="items-center border-collapse table-sticky w-full"
:class="[
  $nuxt.color === 'light'
  ? 'bg-white'
  : 'bg-blueGray-800 text-white shadow-lg',
  ]"
  >
  <molecules-table-header
  :headers="headers"
  :types="types"
  :orderBy="orderBy"
  :tableSetting="tableSetting"
  @sort-data="sortData"
  />

  <tr v-if="$_.size(columns) < 1">
    <td
    colspan="12"
    style="text-align: center; width: 100%; display: table-cell"
    >
    Empty data
  </td>
</tr>

<barangs-barang-data-cell
v-if="types === 'barang-by-suppliers'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<barangs-kategori-barang-table-cell
v-if="types === 'kategori-barang'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<barang-by-warehouse-table-cell
v-if="types === 'barang-by-warehouse'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<barang-all-table-cell
v-if="types === 'barang-all'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<barangs-trash-cell
v-if="types === 'data-barang-trash'"
:columns="columns"
:types="types"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<pelanggans-pelanggan-data-cell
v-if="types === 'data-pelanggan'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<pelanggans-trash-cell
v-if="types === 'data-pelanggan-trash'"
:columns="columns"
:types="types"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<suppliers-supplier-data-cell
v-if="types === 'data-supplier'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<suppliers-trash-cell
v-if="types === 'data-suppplier-trash'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<karyawans-karyawan-data-cell
v-if="types === 'karyawan'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<karyawans-trash-cell
v-if="types === 'data-karyawan-trash'"
:columns="columns"
:types="types"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<cashes-kas-data-cell
v-if="types === 'kas'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<cashes-trash-cell
v-if="types === 'data-kas-trash'"
:columns="columns"
:types="types"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<cost-biaya-data-cell
v-if="types === 'data-biaya'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<cost-trash-cell
v-if="types === 'data-biaya-trash'"
:columns="columns"
:types="types"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<buys-pembelian-langsung-trash-cell
v-if="types === 'pembelian-langsung-trash'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<buys-purchase-order-trash-cell
v-if="types === 'purchase-order-trash'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<roles-role-user-data-cell
v-if="types === 'data-role-management'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<expenditures-table-cell
v-if="types === 'pengeluaran'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<expenditures-trash-cell
v-if="types === 'data-pengeluaran-trash'"
:columns="columns"
:types="types"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<pemasukans-table-cell
v-if="types === 'pemasukan'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<pemasukans-trash-cell
v-if="types === 'data-pemasukan-trash'"
:columns="columns"
:types="types"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<mutasi-kas-table-cell
v-if="types === 'mutasi-kas'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<buys-pembelian-langsung-table-cell
v-if="types === 'pembelian-langsung'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<buys-purchase-order-table-cell
v-if="types === 'purchase-order'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<bayar-hutang-table-cell
v-if="types === 'bayar-hutang'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<sell-penjualan-toko-table-cell
v-if="types === 'penjualan-toko'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
@rebuild-data="rebuildData"
/>

<sell-penjualan-partai-table-cell
v-if="types === 'penjualan-partai'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
@rebuild-data="rebuildData"
/>

<terima-piutang-pelanggan-table-cell
v-if="types === 'piutang-pelanggan'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<sell-penjualan-toko-trash-cell
v-if="types === 'penjualan-toko-trash'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<sell-penjualan-po-table-cell
v-if="types === 'penjualan-po'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<koreksi-stok-table-cell
v-if="types === 'koreksi-stok'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<DataPerusahaanTableCell
v-if="types === 'perusahaan'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<PemakaianBarangTableCell
v-if="types === 'pemakaian-barang'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<hutang-table-cell
v-if="types === 'data-laporan-hutang'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<LaporanPembelianPeriodeTableCell
v-if="types === 'laporan-pembelian-periode'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<LaporanPembelianSuplierTableCell
v-if="types === 'laporan-pembelian-supplier'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<LaporanPembelianBarangTableCell
v-if="types === 'laporan-pembelian-barang'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<LaporanPenjualanPeriodeTableCell
v-if="types === 'laporan-penjualan-periode'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<LabaRugiTableCell
v-if="types === 'data-laba-rugi'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<ReturnPembelianTableCell
v-if="types === 'return-pembelian'"
:columns="columns"
:types="types"
:pembelianType="pembelianType"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<ReturnPenjualanTableCell
v-if="types === 'return-penjualan'"
:columns="columns"
:types="types"
:pembelianType="pembelianType"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<LaporanCashFlowTableCell
v-if="types === 'laporan-cash-flow'"
:columns="columns"
:types="types"
:paging="paging"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
@deleted-data="deletedData"
@restored-data="restoredData"
/>

<tr>
  <molecules-row-loading :loading="loading" :options="options" />
</tr>
</table>
</div>

<!-- Modal Supplier List -->
<div
v-if="showModal"
class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
>
<div class="relative w-full my-6 mx-auto max-w-lg">
  <!--content-->
  <div
  class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
  >
  <!--header-->
  <div
  class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"
  >
  <button
  class="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold"
  v-on:click="toggleModal()"
  >
  <span class="text-black h-6 w-6 text-2xl block">
    <i class="fa-solid fa-xmark text-lg"></i>
  </span>
</button>
</div>
<!--body-->
<div class="relative p-6 flex-auto">
  <div v-if="loadingListModal">
    <div role="status">
      <svg
      aria-hidden="true"
      class="w-4 h-4 me-2 text-gray-200 animate-spin fill-blue-600"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      >
      <path
      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
      fill="currentColor"
      />
      <path
      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
      fill="currentFill"
      />
    </svg>
    <span class="sr-only">Loading...</span>
  </div>
  <span class="text-black">wait preparing data ⏳⏳⏳</span>
</div>
<div v-else>
  <div v-if="types !== 'koreksi-stok'" class="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50" role="alert">
    <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <span class="sr-only">Info</span>
    <div>
      <span class="font-medium">Info!</span> Ketikan kode supplier / nama supplier.
    </div>
  </div>
  <div v-else class="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50" role="alert">
    <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <span class="sr-only">Info</span>
    <div>
      <span class="font-medium">Info!</span> Ketikan kode barang / nama barang atau kode supplier.
    </div>
  </div>
  <Select2
  v-if="types !== 'koreksi-stok'"
  v-model="selectedSupplier"
  :settings="{
    allowClear: true,
    dropdownCss: { top: 'auto', bottom: 'auto' },
  }"
  :options="[{ id: null, text: 'Pilih Supplier' }, ...suppliers]"
  @change="changeSupplier($event)"
  @select="changeSupplier($event)"
  placeholder="Pilih Supplier"
  />

  <Select2
  v-else
  v-model="selectedBarang"
  :settings="{
    allowClear: true,
    dropdownCss: { top: 'auto', bottom: 'auto' },
  }"
  :options="[{ id: null, text: 'Pilih Barang' }, ...barangs]"
  @change="changeBarang($event)"
  @select="changeBarang($event)"
  placeholder="Pilih Barang"
  />
</div>
</div>
</div>
</div>
</div>
<div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
</div>
</template>
<script>
  import { getData } from "~/hooks/index";
  import { totalTrash } from "~/hooks/index";

  export default {
    props: {
      title: {
        type: String,
      },
      headers: {
        type: Array,
      },
      columns: {
        type: Array,
      },
      types: {
        type: String,
      },
      pembelianType: {
        type: String,
      },
      loading: {
        type: Boolean,
      },
      options: {
        type: String,
      default: "",
      },
      parentRoute: {
        type: String,
      default: null,
      },
      typeRoute: {
        type: String,
      default: null,
      },
      queryType: {
        type: String,
      default: "",
      },
      queryRole: {
        type: String,
      default: "",
      },
      queryMiddle: {
        type: String,
      default: "",
      },
      success: {
        type: Boolean,
      default: null,
      },
      messageAlert: {
        type: String,
      default: "",
      },
      paging: {
        type: [Object, Array],
      },
      orderBy: {
        type: Object,
      default: function () {
        return {};
      },
    },
    tableSetting: {
      type: String,
    default: ""
    },
    trashed: {
      type: Boolean
    }
  },

  data() {
    return {
      total: 0,
      loadingListModal: null,
      loadingItem: null,
      api_url: process.env.NUXT_ENV_API_URL,
      api_token: process.env.NUXT_ENV_APP_TOKEN,
      queryParam: this.$route.query.type,
      validLogin: this.$nuxt?.userData?.email,
      showModal: false,
      selectedSupplier: null,
      suppliers: [],
      selectedBarang: null,
      barangs: [],
      widthCard: this.$nuxt.showSidebar
      ? "w-full"
      : "w-screen overflow-x-hidden",
      resetFilterProcess: null,
    };
  },

  beforeMount() {
    this.authTokenStorage();
  },

  created() {
    this.checkNewData();
    this.checkUserLogin();
    this.$nuxt.checkNewData();
    this.$nuxt.checkUserLogin();
  },

  mounted() {
    this.totalTrash();
    this.getSupplierLists();
    this.getBarangLists();
  },

  methods: {
    checkItemPembelian(loading) {
      this.loadingItem = loading;
      this.$nuxt.globalLoadingMessage = "Proses pengecekan item pembelian ...";

      const refCodeStorage = localStorage.getItem("ref_code")
      ? JSON.parse(localStorage.getItem("ref_code"))
      : null;

      if (refCodeStorage && refCodeStorage?.ref_code !== null) {
        const endPoint = `/draft-item-pembelian/${
          refCodeStorage && refCodeStorage?.ref_code !== null
          ? refCodeStorage?.ref_code
          : ""
        }`;

        const config = {
          headers: {
            Authorization: `Bearer ${this.token.token}`,
          },
        };

        this.$api
        .get(endPoint, config)
        .then(({ data }) => {
          if (data.data.length > 0) {
            this.$router.push({
              path: `/dashboard/${this.parentRoute}/${this.typeRoute}/${this.queryMiddle}/add`,
              query: {
                type: this.queryType,
                kd_beli: data?.data[0]?.kode,
                supplier: data?.data[0]?.id_supplier,
              },
            });
            this.showModal = !this.showModal;
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setTimeout(() => {
            this.loadingItem = false;
          }, 500);
        });
      } else {
        setTimeout(() => {
          this.loadingItem = false;
        }, 500);
      }
    },

    redirectTrash() {
      if (
        this.typeRoute !== "data-pelanggan" &&
        this.typeRoute !== "supplier" &&
        this.typeRoute !== "karyawan" &&
        this.typeRoute !== "kas" &&
        this.typeRoute !== "biaya" && 
        this.typeRoute !== 'pemasukan' &&
        this.typeRoute !== 'pengeluaran'
        ) {
        this.$router.push({
          path: `/dashboard/${this.parentRoute}/${this.typeRoute}/${this.queryMiddle}/trash`,
          query: {
            type: this.queryType,
          },
        });
    } else {
      this.$router.push({
        path: `/dashboard/${this.parentRoute}/${this.queryMiddle}/trash`,
        query: {
          type: this.queryType,
        },
      });
    }
  },

  redirectAddPage() {
    if (
      this.types !== "data-pelanggan" &&
      this.types !== "data-supplier" &&
      this.types !== "karyawan" &&
      this.typeRoute !== "kas" &&
      this.typeRoute !== "biaya" &&
      this.types !== "mutasi-kas" && 
      this.types !== "pemakaian-barang" &&
      this.types !== "pemasukan" &&
      this.types !== "pengeluaran"
      ) {
      this.$router.push({
        path: `/dashboard/${this.parentRoute}/${this.typeRoute}/${this.queryMiddle}/add`,
        query: {
          type: this.queryType,
        },
      });
  } else {
    this.$router.push({
      path: `/dashboard/${this.parentRoute}/${this.queryMiddle}/add`,
      query: {
        type: this.queryType,
      },
    });
  }
},

changeSupplier(newValue) {
  const supplierId = newValue.id;
  if (supplierId !== undefined) {
    this.$router.push({
      path: `/dashboard/${this.parentRoute}/${this.typeRoute}/${this.queryMiddle}/add`,
      query: {
        type: this.queryType,
        supplier: supplierId,
      },
    });
    this.showModal = !this.showModal;
  }
},

changeBarang(newValue) {
  const barangId = newValue.id;
  if (barangId !== undefined) {
    this.$router.push({
      path: `/dashboard/${this.parentRoute}/${this.typeRoute}/add`,
      query: {
        type: this.queryType,
        barang: barangId,
      },
    });
    this.showModal = !this.showModal;
  }
},

transformSupplierLists(rawData) {
  return rawData
  .filter((item) => item && item.kode)
  .map((item) => ({
    id: item.id,
    text: `${item.nama} - ${item.kode}`,
  }));
},

getSupplierLists() {
  this.loadingListModal = true;
  const getAllPages = async () => {
    let allData = [];
    let currentPage = 1;
    let totalPages = 1;

    while (currentPage <= totalPages) {
      const data = await getData({
        api_url: `${this.api_url}/data-supplier?page=${currentPage}`,
        token: this.token.token,
        api_key: this.api_token,
      });

      allData = allData.concat(data?.data);
      totalPages = data?.meta?.last_page;
      currentPage++;
    }

    return allData;
  };

  getAllPages()
  .then((data) => {
    this.suppliers = this.transformSupplierLists(data);
  })
  .finally(() => {
    this.loadingListModal = false;
  })
  .catch((err) => console.log(err));
},

transformBarangLists(rawData) {
  return rawData
  .filter((item) => item && item.kode)
  .map((item) => ({
    id: item.kode,
    text: `${item.nama} - ${item.kode}`,
  }));
},


getBarangLists() {
  this.loadingListModal = true;
  const getAllPages = async () => {
    let allData = [];
    let currentPage = 1;
    let totalPages = 1;

    while (currentPage <= totalPages) {
      const data = await getData({
        api_url: `${this.api_url}/lists-barang?page=${currentPage}`,
        token: this.token.token,
        api_key: this.api_token,
      });

      allData = allData.concat(data?.data);
      totalPages = data?.meta?.last_page;
      currentPage++;
    }

    return allData;
  };

  getAllPages()
  .then((data) => {
    this.barangs = this.transformBarangLists(data);
  })
  .finally(() => {
    this.loadingListModal = false;
  })
  .catch((err) => console.log(err));
},

toggleModal: function () {
  this.showModal = !this.showModal;
  this.checkItemPembelian(true);
},

backTo() {
  this.$router.go(-1);
  localStorage.removeItem("ref_code");
  localStorage.removeItem("cetak_code");
},

deletedData(id) {
  this.$emit("deleted-data", id);
},

restoredData(id) {
  this.$emit("restored-data", id);
},

sortData(param) {
  this.$emit("sort-data", param, this.types);
},

totalTrash() {
  const endPoint = `${this.api_url}/data-total-trash?type=${this.queryType}${
    this.queryRole ? "&roles=" + this.queryRole : ""
  }`
  totalTrash({
    api_url: endPoint,
    api_key: process.env.NUXT_ENV_APP_TOKEN,
    token: this.token.token,
  })
  .then(({ data }) => {
    this.total = data;
  })
  .catch((err) => console.log(err));
},

closeSuccessAlert() {
  this.$emit("close-alert");
},

filterData(param) {
  this.$emit("filter-data", param, this.types);
},

rebuildData(param) {
  this.$emit('rebuild-data', param, false)
},

resetFilter() {
  this.$nuxt.startDownload = false;
  this.resetFilterProcess = true;
  this.$emit("filter-data", {}, this.types);
},

downloadData() {
  this.$emit("download-data", true);
},
},

computed: {
  token() {
    return this.$store.getters["auth/getAuthToken"];
  },
},

watch: {
  "$nuxt.showSidebar"(newVal) {
    this.widthCard = newVal ? "w-full" : "w-screen";
  },
  notifs() {
    if (this.$_.size(this.$nuxt.notifs) > 0) {
        // this.$toast.show(this.messageNotifs, {
        //   type: "info",
        //   duration: 5000,
        //   position: "top-right",
        // });
      this.totalTrash();
    }
  },
},
};
</script>
