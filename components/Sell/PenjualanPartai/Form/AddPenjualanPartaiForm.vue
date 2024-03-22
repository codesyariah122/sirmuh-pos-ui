<template>
  <div>
    <div
      class="relative flex flex-col min-w-0 break-words bg-transparent mb-4 shadow-sm rounded"
    >
      <hr class="w-full" />
    </div>
    <div
      class="relative flex flex-col min-w-0 break-words bg-transparent w-96 mb-6 shadow-sm rounded"
    >
      <div>
        <div class="flex justify-start space-x-0">
          <div class="flex-none w-36">
            <h4 class="font-bold text-md">Ref No</h4>
          </div>
          <div class="shrink-0 w-full">
            <div class="flex justify-between space-x-2">
              <div class="shrink-0 w-30 text-black">
                <input type="text" v-model="input.reference_code" />
              </div>
              <div class="flex-none w-30">
                <datepicker
                  v-model="input.tanggal"
                  :config="datePickerConfig"
                  @input="handleTanggalPenjualan($event)"
                  placeholder="Tanggal Penjualan"
                  :format="dateFormat"
                  :style="{ width: '100%', height: '10vh' }"
                ></datepicker>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="flex justify-start space-x-0">
          <div class="flex-none w-36">
            <h4 class="font-bold text-md">Pilih Kode Kas</h4>
          </div>
          <div class="shrink-0 w-60 text-black">
            <div v-if="loadingKas">
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
              <span class="text-white">Preparing data kas</span>
            </div>
            <div v-else>
              <Select2
                v-model="selectedKodeKas"
                :settings="{
                  allowClear: true,
                  dropdownCss: { top: 'auto', bottom: 'auto' },
                }"
                :options="[{ id: null, text: 'Pilih Kode Kas' }, ...kas]"
                @change="changeKodeKas($event)"
                @select="changeKodeKas($event)"
                placeholder="Pilih Kode Kas"
              />
            </div>
          </div>
        </div>
        <div
          v-if="error && validations?.kode_kas"
          class="mt-6 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <span class="font-medium">Danger alert!</span>
          {{ validations?.kode_kas[0] }}
        </div>
      </div>
      <div v-if="loadingKas">
        <div role="status">
          <svg
            aria-hidden="true"
            class="w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
        <span class="font-semibold">Preparing data kas</span>
      </div>
      <div v-else>
        <div
          v-if="showDetailKas && detailKas"
          class="flex justify-start space-x-0 mt-6"
        >
          <div class="flex-none w-36">
            <h4 class="font-bold text-md">Saldo Kas</h4>
          </div>
          <div class="shrink-0 w-60 text-black">
            <input type="text" disabled :value="$format(detailKas.saldo)" />
          </div>
        </div>
      </div>

      <div>
        <div class="flex justify-start space-x-0 py-6">
          <div class="flex-none w-36">
            <h4 class="font-bold text-md">Pelanggan</h4>
          </div>

          <div v-if="!changePelangganShow" class="text-black">
            <input type="text" disabled :value="input.nama_pelanggan" />
          </div>
          <div v-else class="shrink-0 w-60 text-black">
            <div v-if="loadingPelangganList">
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
              <span class="text-white">Preparing data pelanggan</span>
            </div>
            <div v-else>
              <Select2
                :disabled="showDetailKas === null"
                v-model="selectedPelanggan"
                :settings="{
                  allowClear: true,
                  dropdownCss: { top: 'auto', bottom: 'auto' },
                }"
                :options="[
                  { id: null, text: 'Pilih Pelanggan' },
                  ...pelanggans,
                ]"
                @change="changePelanggan($event)"
                @select="changePelanggan($event)"
                placeholder="Pilih Pelanggan"
              />
            </div>
          </div>
          <div class="px-6" v-if="!changePelangganShow">
            <button
              @click="showChangePelanggan"
              class="px-3 py-2 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <i class="fa-solid fa-repeat text-lg"></i>
            </button>
          </div>
        </div>
      </div>

      <div>
        <div class="flex justify-start space-x-0 mt-6">
          <div class="flex-none w-36">
            <h4
              :class="`font-bold text-md ${
                changeAgain ? 'text-emerald-600' : ''
              }`"
            >
              {{ changeAgain ? "Pilih Lagi Produk" : "Pilih Produk" }}
            </h4>
          </div>
          <div class="shrink-0 w-60 text-black">
            <Select2
              :disabled="showDetailKas === null || changePelangganShow"
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
          <div class="px-6 shrink-0 w-80">
            <div class="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
              <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
              </svg>
              <span class="sr-only">Info</span>
              <div>
                <span class="font-medium">Info alert!</span> Ketikan nama barang, kode barang, nama supplier atau kode supplier.
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="error && validations?.barangs"
          class="mt-6 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <span class="font-medium">Danger alert!</span>
          {{ validations?.barangs[0] }}
        </div>
      </div>

      <div>
        <div class="flex justify-start space-x-0 py-6">
          <div class="flex-none w-36">
            <h4 class="font-bold text-md">Keterangan</h4>
          </div>
          <div class="shrink-0 w-full">
            <label for="keterangan" class="block mb-2 text-sm font-medium dark:"
              >Keterangan Beli</label
            >
            <textarea
              id="keterangan"
              rows="4"
              class="block p-2.5 w-full text-sm text-blueGray-700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark: dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tambahkan keterangan..."
              :disabled="!showDetailKas"
              v-model="input.keterangan"
              @input="inputKeterangan($event)"
            ></textarea>
          </div>
        </div>
      </div>

      <div>
        <div class="flex justify-start space-x-0">
          <div class="flex-none w-36">
            <h4 class="font-bold text-md">Pilih Pembayaran</h4>
          </div>
          <div class="shrink-0 w-60">
            <Select2
              v-model="input.pembayaran"
              :settings="{
                allowClear: true,
                dropdownCss: { top: 'auto', bottom: 'auto' },
              }"
              :options="[
                { id: null, text: 'Pilih Pembayaran' },
                ...pembayarans,
              ]"
              @change="changePembayaran($event)"
              @select="changePembayaran($event)"
              placeholder="Pilih Kode Kas"
            />
          </div>
        </div>
      </div>

      <div>
        <div class="flex justify-start space-x-0 py-10">
          <div class="flex-none w-36">
            <h4 class="font-bold text-md">Status Pengiriman</h4>
          </div>
          <div class="shrink-0 w-60">
            <Select2
              v-model="input.status_kirim"
              :settings="{
                allowClear: true,
                dropdownCss: { top: 'auto', bottom: 'auto' },
              }"
              :options="[
                { id: null, text: 'Status Pengiriman' },
                ...deliver_status,
              ]"
              @change="changeStatusPengiriman($event)"
              @select="changeStatusPengiriman($event)"
              placeholder="Ubah Status Pengiriman"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      class="bg-transparent mb-4 shadow-sm rounded w-full overflow-x-auto overflow-y-auto"
    >
      <div>
        <table class="w-full text-md border-collapse border-b">
          <thead
            class="text-lg bg-transparent border-b border-t dark:border-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th v-if="listDraftCarts.length > 0" class="px-6 py-3">
                Kode Referensi
              </th>
              <th class="px-6 py-3">Nama Barang</th>
              <th class="px-6 py-3">Supplier</th>
              <th class="px-6 py-3">Stok Tersedia</th>
              <th class="px-6 py-3 w-10">Qty</th>
              <th class="px-6 py-3">Harga</th>
              <!-- <th class="px-6 py-3">(%)</th>
              <th class="px-6 py-3">Harga Partai</th>
              <th class="px-6 py-3">(%)</th>
              <th class="px-6 py-3">Harga Cabang</th>
              <th class="px-6 py-3">(%)</th> -->
              <!-- <th class="px-6 py-3">Disc</th> -->
              <th class="px-6 py-3">Rupiah</th>
              <th class="px-6 py-3">Expired</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody v-if="listDraftCarts.length > 0">
            <tr
              v-for="(draft, idx) in listDraftCarts"
              :key="idx"
              class="bg-transparent border-b"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium whitespace-nowrap text-left"
              >
                <span class="bg-blue-100 text-blue-800 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  {{ draft.kode }}
                </span>
              </th>
              <th
                scope="row"
                class="px-6 py-4 font-medium whitespace-nowrap text-left"
              >
                <span class="bg-blue-100 text-blue-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  {{ draft.nama }} ({{ draft.kode_barang }})
                </span>              
              </th>

              <td class="whitespace-nowrap p-4 text-lg">
                <span class="bg-green-100 text-green-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                  {{ draft.nama_supplier }} ({{draft.kode_supplier}})
                </span>
              </td>

              <td class="whitespace-nowrap p-4 text-lg">
                <span :class="`${draft.available_stok < 100 ? 'bg-pink-100 text-pink-800 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300' : 'bg-indigo-100 text-indigo-800 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300'}`">
                  {{draft.stok}} {{ draft.satuan }}
                </span>
              </td>

              <td v-if="editingQtyId === draft.id" class="px-6 py-4">
                <div class="flex justify-between space-x-2">
                  <div>
                    <input
                      class="w-20"
                      type="text"
                      v-model="draft.qty"
                      @input="changeGantiQty($event, draft.id)"
                      @keydown.esc="changeGantiQty($event, draft.id, draft)"
                      @keydown.enter="changeGantiQty($event, draft.id, draft)"
                      @focus="setInitialQty(draft)"
                    />
                  </div>
                  <div>
                    <button
                      @click="updateQty(draft.id, true)"
                      class="px-3 py-3 text-lg font-medium text-center text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
                    >
                      <i class="fa-solid fa-floppy-disk fa-lg"></i>
                    </button>
                  </div>
                </div>
              </td>

              <td v-else class="px-6 py-4">
                <div class="flex justify-between space-x-6 text-lg">
                  <div>
                    {{ $roundup(draft.qty) }}{{ draft.satuan }}
                  </div>
                  <div>
                    <button
                      @click="gantiQty(draft.id, null)"
                      class="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <i class="fa-solid fa-repeat fa-sm"></i>
                    </button>
                  </div>
                </div>
              </td>

              <td
                v-if="editingItemId === draft.id"
                class="px-6 py-4 text-black"
              >
                <div class="flex justify-between space-x-2">
                  <div>
                    <input
                      class="w-auto"
                      type="text"
                      v-model="draft.harga_partai"
                      @input="changeGantiHarga"
                      @keydown.esc="changeGantiHarga($event, draft.id, draft)"
                      @keydown.enter="changeGantiHarga($event, draft.id, draft)"
                      @focus="setInitialHarga(draft)"
                    />
                  </div>
                  <div>
                    <button
                      @click="updateHarga(draft.id, true)"
                      class="px-3 py-3 text-lg font-medium text-center text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
                    >
                      <i class="fa-solid fa-floppy-disk fa-lg"></i>
                    </button>
                  </div>
                </div>
              </td>
              <td v-else class="px-6 py-4">
                <div class="flex justify-between space-x-2">
                  <div class="font-semibold text-lg">
                    {{ $format(draft.harga_partai) }}
                  </div>
                  <div>
                    <button
                      @click="gantiHarga(draft.id, null)"
                      class="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <i class="fa-solid fa-repeat fa-sm"></i>
                    </button>
                  </div>
                </div>
              </td>

              <td class="px-6 py-4 text-lg font-bold">
                {{ $format(draft.harga_partai * draft.qty) }}
              </td>
              <td class="px-6 py-4">
                {{
                  draft.expired !== null
                    ? $moment(draft.expired).locale("id").format("LL")
                    : "-"
                }}
              </td>
              <td class="px-10 py-4">
                <button
                  v-if="lastItemPembelianId"
                  @click="deletedBarangCarts(draft.id, lastItemPembelianId)"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <i class="fa-solid fa-trash-can text-red-600 text-xl"></i>
                </button>
              </td>
            </tr>

            <tr v-if="loadingItem || loadingDelete || loadingSaldo">
              <th
                colspan="3"
                scope="row"
                class="px-6 py-4 font-medium whitespace-nowrap text-center overflow-x-hidden"
              >
                <div role="status">
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
                <span v-if="loadingItem">Checking item penjualan ...</span>
                <span v-if="loadingDelete">Loading item deleted ...</span>
                <span v-if="loadingSaldo">Proses pengecekan saldo ...</span>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <form @submit.prevent="simpanPenjualan(false)">
      <div
        class="bg-transparent shadow-sm rounded w-full flex justify-start space-x-4 mt-6"
      >
        <div class="shrink w-[80vw]">
          <div
            class="grid grid-cols-1 bg-emerald-600 h-48 content-evenly justify-items-center"
          >
            <div class="col-span-full">
              <h4 class="font-bold text-4xl text-white">
                {{ showKembali ? kembali : input.total }}
              </h4>
            </div>
          </div>
          <div class="grid grid-cols-1 h-12 bg-blueGray-700 text-white">
            <div class="col-span-full p-2">
              <h6 class="text-lg font-bold">
                {{ terbilang ? terbilang : "Nol Rupiah" }}
              </h6>
            </div>
          </div>
        </div>

        <div>
          <ul class="w-80 text-sm font-medium bg-transparent">
            <li class="w-full py-2">
              <div class="grid grid-cols-3 gap-0">
                <div>
                  <label class="font-bold">Total</label>
                </div>
                <div>
                  <input
                    type="text"
                    disabled
                    class="h-8 text-black"
                    v-model="input.total"
                  />
                </div>
              </div>
            </li>

            <li class="w-full py-2">
              <div class="grid grid-cols-3 gap-0">
                <div>
                  <label class="font-bold">Diskon</label>
                </div>
                <div>
                  <!-- <input
                    v-if="diskonByBarang"
                    type="number"
                    class="h-8 text-black"
                    v-model="diskonByBarang"
                    @input="handleDiskonInput"
                  /> -->
                  <input
                    disabled
                    type="number"
                    class="h-8 text-black"
                    v-model="input.diskon"
                    @input="handleDiskonInput"
                  />
                </div>
              </div>
            </li>

            <li class="w-full py-2">
              <div class="grid grid-cols-3 gap-0">
                <div>
                  <label class="font-bold">PPN</label>
                </div>
                <div>
                  <input
                    disabled
                    type="number"
                    value="0"
                    class="h-8 text-black"
                    v-model="input.ppn"
                    @input="recalculateTotalBayar(input.qty, input.diskon)"
                  />
                </div>
              </div>
            </li>

            <li class="w-full py-6">
              <div class="grid grid-cols-1">
                <div class="col-span-full">
                  <div class="flex items-center">
                    <input v-model="showShipping" id="default-checkbox" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Non Ekspedisi</label>
                  </div>
                </div>
              </div>
            </li>

            <li v-if="!showShipping" :class="`w-full ${!showShipping ? 'mb-6' : ''}`">
              <div v-if="selectedProvince === null" class="grid grid-cols-1">
                <div class="col-span-1">
                  <small class="font-semibold text-red-600">*Pilih province terlebih dahulu untuk membuka layanan ekspedisi..</small>
                </div>
              </div>
              <div v-if="loadingProvince">
                <div role="status">
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
                <span class="text-blueGray-800">Preparing data provinsi</span>
              </div>
              <div v-else class="grid grid-cols-3 gap-0">
                <div>
                  <label class="font-bold">Provinsi</label>
                </div>
                <div class="w-48">
                  <Select2
                  v-model="selectedProvince"
                  :settings="{
                    allowClear: true,
                    dropdownCss: { top: 'auto', bottom: 'auto' },
                  }"
                  :options="[
                    { id: null, text: 'Pilih Provinsi' },
                    ...provinces,
                    ]"
                    @change="changeProvince($event)"
                    @select="changeProvince($event)"
                    placeholder="Pilih Provinsi"
                    />
                </div>
              </div>
            </li>

            <li v-if="selectedProvince && !showShipping" class="w-full py-2">
              <div v-if="loadingCityOrigin">
                <div role="status">
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
                <span class="text-blueGray-800">Preparing data city</span>
              </div>
              <div v-else class="grid grid-cols-3 gap-0">
                <div>
                  <label class="font-bold">Dari Kota</label>
                </div>
                <div class="w-48">
                  <Select2
                  v-model="selectedCityOrigin"
                  :settings="{
                    allowClear: true,
                    dropdownCss: { top: 'auto', bottom: 'auto' },
                  }"
                  :options="[
                    { id: null, text: 'Pilih Kota' },
                    ...citys,
                    ]"
                    @change="changeCityOrigin($event)"
                    @select="changeCityOrigin($event)"
                    placeholder="Pilih Kota"
                    />
                </div>
              </div>
            </li>

            <li v-if="selectedCityOrigin && !showShipping" class="w-full py-2">
              <div v-if="loadingCityDest">
                <div role="status">
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
                <span class="text-blueGray-800">Preparing data city</span>
              </div>
              <div v-else class="grid grid-cols-3 gap-0">
                <div>
                  <label class="font-bold">Ke Kota</label>
                </div>
                <div class="w-48">
                  <Select2
                  v-model="selectedCityDest"
                  :settings="{
                    allowClear: true,
                    dropdownCss: { top: 'auto', bottom: 'auto' },
                  }"
                  :options="[
                    { id: null, text: 'Pilih Kota' },
                    ...citys,
                    ]"
                    @change="changeCityDest($event)"
                    @select="changeCityDest($event)"
                    placeholder="Pilih Kota"
                    />
                </div>
              </div>
            </li>

            <li v-if="selectedCityDest && !showShipping" class="w-full py-2">
              <div class="grid grid-cols-3 gap-0">
                <div>
                  <label class="font-bold">Ekspedisi</label>
                </div>
                <div class="w-48">
                  <Select2
                  v-model="input.ekspedisi"
                  :settings="{
                    allowClear: true,
                    dropdownCss: { top: 'auto', bottom: 'auto' },
                  }"
                  :options="[
                    { id: null, text: 'Pilih Ekspedisi' },
                    ...ekpedisi_services,
                    ]"
                    @change="changeEkspedisi($event)"
                    @select="changeEkspedisi($event)"
                    placeholder="Pilih Layanan Ekspedisi"
                    />
                </div>
              </div>
            </li>

            <details v-if="selectedEkspedisi && !showShipping" class="w-full py-4">
              <summary class="font-bold text-info-800 cursor-pointer">
                Shipping Detail
              </summary>
              <li v-if="selectedEkspedisi && !showShipping" class="w-full py-2">
                <div class="grid grid-cols-1">
                  <div class="col-span-full">
                    <ol class="relative border-s border-gray-200 dark:border-gray-700">
                      <li v-for="ongkir in listOngkirs" :key="ongkir.id" class="mb-6 sm:mb-0">
                        <div class="flex items-center">
                          <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                          </div>
                          <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        </div>
                        <div class="mt-3 sm:pe-8">
                          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ongkir.barang}}</h3>
                          <time v-for="(cost, indx) in ongkir.costs" :key="Math.random()" class="block mb-2 text-sm font-semibold leading-none text-gray-400 dark:text-gray-500">Layanan Ekspedisi: {{cost.name}}</time>
                          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                            Quantity : {{ongkir.qty}}
                          </p>
                        </div>

                        <div v-for="(cost, idx) in ongkir.costs" :key="idx" class="flex justify-start py-2">
                          <div>
                            <ol class="relative border-s border-gray-200 dark:border-gray-700">                  
                              <li v-for="(resultCost, id) in cost.costs" class="mb-6 ms-6">            
                                <span class="absolute flex items-center justify-center max-w-auto p-2 bg-blue-100 rounded-sm -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                  <small class="text-blueGray-800 font-bold">
                                    {{resultCost.service}}
                                  </small>
                                </span>
                                <div v-for="(valueCost, index) in resultCost.cost" :key="index" class="flex items-center justify-between py-4 px-4 ml-12 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                                  <div>
                                    <div class="flex items-center">
                                      <button v-if="costId !== ongkir.id" @click="detailService(valueCost, ongkir.id)" type="button" class="text-white bg-emerald-800 hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-800 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 dark:bg-emerald-800 dark:hover:bg-emerald-700 focus:outline-none dark:focus:ring-emerald-700">
                                        Pilih
                                      </button>
                                      <button v-else @click="resetDetail" type="button" class="text-blueGray-800 bg-transparent hover:bg-transparent focus:ring-4 focus:ring-transparent font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 dark:bg-transparent dark:hover:bg-transparent focus:outline-none dark:focus:ring-transparent">
                                        <i class="fa-solid fa-repeat"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">{{valueCost.etd}}</time>
                                  <div class="text-sm font-normal text-gray-500 dark:text-gray-300">
                                    <span class="bg-gray-100 text-gray-800 text-xs font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">
                                      {{$format(valueCost.value)}}
                                    </span>
                                  </div>
                                </div>
                              </li>
                            </ol>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </li>
            </details>

            <li v-if="showShipping || listOngkirs.length > 0" class="w-full py-4">
              <div class="grid grid-cols-3 gap-0">
                <div>
                  <label class="font-bold">Biaya Kirim</label>
                </div>
                <div>
                  <div class="flex justify-between space-x-4">
                    <div>
                      <input v-if="!showShipping && listOngkirs.length > 0"
                      disabled
                      type="number"
                      value="0"
                      class="h-8 text-black w-36"
                      v-model="totalCostValue"
                      @focus="clearBayarOngkir"
                      />
                      <input v-else
                      type="number"
                      value="0"
                      class="h-8 text-black w-36"
                      v-model="input.ongkir"
                      @focus="clearBayarOngkir"
                      />
                    </div>
                    <div>
                      <button @click="clearOngkir" type="button" class="text-white bg-emerald-800 hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-800 font-medium rounded-lg text-md px-5 py-2 me-2 mb-2 dark:bg-emerald-800 dark:hover:bg-emerald-700 focus:outline-none dark:focus:ring-emerald-700">
                        <i class="fa-solid fa-repeat"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-1 py-2">
                <div class="col-span-full">
                  <div
                  v-if="validations.ongkir"
                  class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                  role="alert"
                  >
                  <i class="fa-solid fa-circle-info"></i>
                  <div class="px-2">
                    {{ validations.ongkir[0] }}
                  </div>
                </div>
                </div>
              </div>
            </li>

            <li v-if="!showDp" class="w-full py-2">
              <div class="grid grid-cols-3 gap-0">
                <div>
                  <label class="font-bold">Bayar (Cash)</label>
                </div>
                <div>
                  <input
                    :disabled="showBayar"
                    type="text"
                    class="h-8 text-black"
                    v-model="input.bayar"
                    @input="changeBayar($event)"
                    @focus="clearBayar"
                    tabindex="0"
                  />
                </div>
              </div>
            </li>

            <li v-else class="w-full py-2">
              <div class="grid grid-cols-3 gap-0">
                <div>
                  <label class="font-bold">Bayar (DP)</label>
                </div>
                <div>
                  <input
                    type="text"
                    class="h-8 text-black"
                    v-model="input.bayarDp"
                    @input="changeBayar($event)"
                    @focus="clearBayar"
                    tabindex="0"
                  />
                </div>
              </div>
            </li>

            <div v-if="loadingKembali && !showDp">
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
              <span class="font-semibold">Preparing bayar</span>
            </div>

            <li v-else class="w-full py-2">
              <div v-if="masukHutang">
                <div class="grid grid-cols-3 gap-0">
                  <div>
                    <label class="font-bold">Hutang</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      class="h-8 text-black"
                      disabled
                      v-model="hutang"
                    />
                  </div>
                </div>
              </div>
              <div v-else>
                <div v-if="showKembali" class="grid grid-cols-3 gap-0">
                  <div>
                    <label class="font-bold">Kembali</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      class="h-8 text-black"
                      disabled
                      v-model="input.kembaliRupiah"
                    />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex justify-end mt-6">
        <div>
          <button
            class="bg-emerald-600 hover:bg-[#d6b02e] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none text-white"
          >
            <div v-if="loading">
              <svg
                aria-hidden="true"
                role="status"
                class="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
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
                  fill="#1C64F2"
                />
              </svg>
              Loading...
            </div>
            <div v-else>
              <i class="fa-regular fa-floppy-disk"></i> Simpan Transaksi
            </div>
          </button>
        </div>
      </div>
    </form>

    <div v-if="loading">
      <molecules-row-loading :loading="loading" :options="options" />
    </div>
  </div>
</template>

<script>
import { getData } from "~/hooks/index";
import Datepicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  components: {
    Datepicker,
  },

  data() {
    return {
      options: "pembelian-langsung",
      loadingReferenceCode: null,
      loadingItem: null,
      loadingDelete: null,
      loadingPelanggan: null,
      loadingPelangganList: null,
      loadingSaldo: null,
      loadingProvince: null,
      loadingCityOrigin: null,
      loadingCityDest: null,
      loadingEkspedisi: null,
      showShipping: false,
      datePickerConfig: {
        range: false,
      },
      dateFormat: "YYYY-MM-DD",
      loading: null,
      options: null,
      api_url: process.env.NUXT_ENV_API_URL,
      api_token: process.env.NUXT_ENV_APP_TOKEN,
      barangs: [],
      barangCarts: [],
      listDraftCarts: [],
      listOngkirs: [],
      timelines: [],
      currentPage: 1,
      changeAgain: false,
      selectedBarang: null,
      selectedKodeKas: null,
      selectedPelanggan: null,
      selectedProvince: null,
      selectedCityOrigin: null,
      selectedCityDest: null,
      selectedEkspedisi: null,
      pelanggan: {},
      pelanggans: [],
      kas: [],
      detailKas: {},
      showDetailKas: null,
      loadingKas: null,
      showKembali: null,
      loadingKembali: null,
      showGantiHarga: null,
      showGantiQty: null,
      diskonByBarang: 0,
      lastItemPembelianId: null,
      masukHutang: null,
      hutang: "Rp. 0",
      showDp: false,
      showBayar: true,
      bayarDpRp: "Rp. 0",
      initialQty: 0,
      initialHarga: 0,
      stokAvailables: localStorage.getItem('stok_availables') ? JSON.parse(localStorage.getItem('stok_availables')) : [],
      input: {
        tanggal: new Date(),
        reference_code: null,
        bayar: 0,
        barang: null,
        qty: 1,
        diskon: 0,
        ppn: 0,
        total: "Rp. 0",
        supplier: Number(this.$route.query["supplier"]),
        pembayaran: "cash",
        kode_kas: null,
        jatuhTempo: 0,
        hutang: 0,
        kembaliRupiah: "Rp. 0",
        bayarDp: 0,
        status_kirim: "PROSES",
        ongkir: 0,
        ekspedisi: null
      },
      error: false,
      editingItemId: null,
      editingQtyId: null,
      validations: [],
      total: 0,
      bayar: 0,
      kembali: "Rp. 0",
      terbilang: "Nol Rupiah",
      addQty: false,
      qtyById: 1,
      formatCalculateRupiah: 0,
      changePelangganShow: true,
      draft: false,
      provinces: [],
      citys: [],
      costId: null,
      totalCostValue: 0,
      shipps: [],
      pembayarans: [
        { id: "cash", text: "cash" },
        { id: "custom", text: "custom" },
      ],
      deliver_status: [
        { id: "DIKIRIM", text: "DIKIRIM" },
        { id: "PROSES", text: "PROSES" },
        { id: "PENDING", text: "PENDING" }
      ],
      ekpedisi_services: [
        { id: "pos", text: "POS AJA" },
        { id: "jne", text: "JNE" },
        { id: "tiki", text: "TIKI" },
        { id: "pcp", text: "PCP (Berbayar)" },
        { id: "esl", text: "ESL (Berbayar)" },
        { id: "rpx", text: "RPX (Berbayar)" }
      ]
    };
  },

  beforeMount() {
    this.authTokenStorage();
    this.generateReferenceCode();
  },

  mounted() {
    this.getBarangLists();
    this.getPelangganLists();
    this.getKasData();
    this.checkItemPenjualan(true);
    this.getProvinceLists();
  },

  methods: {
    clearOngkir() {
      this.input.ongkir = 0;
      this.totalCostValue = 0;
    },

    resetDetail() {
      this.costId = null;
    },

    detailService(data, id) {
      const prepareShip = {
        id: id,
        value: data.value
      }      
      this.shipps.push(prepareShip)
      this.shipps.map((item, idx)=> {
        if(item.id === id){
          this.costId = item.id
        }
      })
      this.totalCostValue = this.shipps.reduce((total, item) => {
        return total + item.value;
      }, 0);
    },

    gantiHarga(itemId = null, barangId = null) {
      if (itemId) {
        this.editingItemId = itemId;
      }

      if (barangId) {
        this.editingItemId = barangId;
      }
    },

    gantiQty(itemId = null, barangId = null) {
      if (itemId) {
        this.editingQtyId = itemId;
      }

      if (barangId) {
        this.editingQtyId = barangId;
      }
    },

    checkItemPenjualan(loading) {
      this.loadingItem = loading;
      this.$nuxt.globalLoadingMessage = "Proses pengecekan item penjualan ...";

      const refCodeStorage = localStorage.getItem("ref_code")
        ? JSON.parse(localStorage.getItem("ref_code"))
        : null;

      if (refCodeStorage && refCodeStorage?.ref_code !== null) {
        this.input.reference_code = refCodeStorage.ref_code;

        const endPoint = `/draft-item-penjualan/${
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
            if (data.success) {
              const selectedBarang = this.transformItemPenjualan(data?.data);
              if (selectedBarang !== undefined && selectedBarang.length > 0) {
                this.input.reference_code = [
                  ...new Set(selectedBarang.map((item) => item.kode)),
                ];

                this.listDraftCarts = selectedBarang;

                this.loadCalculateItemPembelianDetect();

                this.barangCarts = [];
              }
            }
          })
          .catch((err) => {
            this.loadingItem = false;
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

    async generateReferenceCode() {
      this.loadingReferenceCode = true;
      const refCodeStorage = localStorage.getItem("ref_code")
        ? JSON.parse(localStorage.getItem("ref_code"))
        : null;
      if (refCodeStorage && refCodeStorage?.ref_code !== null) {
        this.input.reference_code = refCodeStorage.ref_code;
        setTimeout(() => {
          this.loadingReferenceCode = false;
        }, 500);
        // Matiin dulu
        // this.listdraftItemPenjualan(refCodeStorage.ref_code);
      } else {
        const data = await getData({
          api_url: `${this.api_url}/generate-reference-code/penjualan-partai`,
          token: this.token.token,
          api_key: this.api_token,
        });
        const result = data?.data;

        if (data?.success) {
          const ref_code = { ref_code: result.ref_code };
          localStorage.setItem("ref_code", JSON.stringify(ref_code));
          this.input.reference_code = result.ref_code;
          setTimeout(() => {
            this.loadingReferenceCode = false;
          }, 500);
        }
      }
    },

    changeGantiQty(e, id, draft) {
      const newQty = e.target.value;
      if(e.key === 'Escape') {
        this.showGantiQty = false;
        this.input.qty = Number(draft.qty);
        draft.qty = this.initialQty;
        this.editingQtyId = null;
      } else if(e.key === 'Enter') {
        if(newQty > this.stokAvailable) {
          console.log("kesini ok")
          this.$swal({
            title: "Ooops?",
            text: "Out off stok ⛔",
            icon: "question",
            timer: 5000,
            showConfirmButton: false,
          })
          this.showGantiQty = false;
          this.editingQtyId = null;
          this.input.qty = 1;
          draft.qty = 1;
        } else {
          this.showGantiQty = false;
          this.input.qty = newQty;
          draft.qty = newQty;
          this.editingQtyId = null;
          this.updateQty(draft.id, true)
        }
      } else {
        this.input.qty = Number(newQty);
      }
    },

    updateQty(id, draft) {
      if (draft) {
        const selectedBarangQty = this.listDraftCarts
          .map((item) => item)
          .find((item) => item.id === id);

        if (selectedBarangQty) {
          const newQty =
            Number(selectedBarangQty.qty) > 1
              ? Number(selectedBarangQty.qty)
              : 1;

          if(newQty > this.stokAvailable) {
            this.$swal({
              icon: "error",
              title: "Oops...",
              text: "Stok tidak tersedia!",
            })
            this.input.qty = 1;
            selectedBarangQty.qty = 1;
            selectedBarangQty.formatCalculateRupiah =
            selectedBarangQty.qty * selectedBarangQty.harga_partai;
          } else {
            this.input.qty = newQty;
            selectedBarangQty.qty = newQty;
            selectedBarangQty.formatCalculateRupiah =
            newQty * selectedBarangQty.harga_partai;
          }
          this.total = this.listDraftCarts.reduce((acc, item) => {
            if (
              Number(item.harga_partai) !== undefined &&
              !isNaN(Number(item.harga_partai))
              ) {
              if (Number(item.qty) > 1) {
                return acc + item.formatCalculateRupiah;
              } else {
                return acc + Number(item.harga_partai);
              }
            } else {
              return acc;
            }
          }, 0);

          this.input.total = this.$format(this.total);
          this.input.bayar = this.$format(this.total);

          this.generateKembali(this.input.diskon, this.total, this.total);
          this.recalculateJumlahRupiah(newQty, this.input.diskon);

          this.draftItemPenjualan(draft, true, id);

          setTimeout(() => {
            // this.updateStokBarang();
            this.editingQtyId = null;
            this.showGantiQty = false;
          }, 500);
        } else {
          console.error("Item not found");
        }
      } else {
        const selectedBarangQty = this.barangCarts
          .map((item) => item)
          .find((item) => item.id === id);

        if (selectedBarangQty) {
          const newQty =
            Number(selectedBarangQty.qty) > 1
              ? Number(selectedBarangQty.qty)
              : 1;
          if(newQty > this.stokAvailable) {
            this.$swal({
              icon: "error",
              title: "Oops...",
              text: "Stok tidak tersedia!",
            })
            this.input.qty = 1;
            selectedBarangQty.qty = 1;
            selectedBarangQty.formatCalculateRupiah =
            selectedBarangQty.qty * selectedBarangQty.harga_partai;
          } else {
            this.input.qty = newQty;
            selectedBarangQty.qty = newQty;
            selectedBarangQty.formatCalculateRupiah =
            newQty * selectedBarangQty.harga_partai;
          }

          this.total = this.barangCarts.reduce((acc, item) => {
            if (
              Number(item.harga_partai) !== undefined &&
              !isNaN(Number(item.harga_partai))
              ) {
              if (Number(item.qty) > 1) {
                return acc + item.formatCalculateRupiah;
              } else {
                return acc + Number(item.harga_partai);
              }
            } else {
              return acc;
            }
          }, 0);

          this.input.total = this.$format(this.total);
          this.input.bayar = this.$format(this.total);

          this.generateKembali(this.input.diskon, this.total, this.total);
          this.recalculateJumlahRupiah(newQty, this.input.diskon);

          this.draftItemPenjualan(draft, false, id);
          setTimeout(() => {
            // this.updateStokBarang();
            this.editingQtyId = null;
            this.showGantiQty = false;
          }, 500);
        } else {
          console.error("Item not found");
        }
      }
    },

    changeGantiHarga(e, id, draft) {
      const newHarga = e.target.value;
      if(e.key === 'Escape') {
        this.showGantiHarga = false
        this.input.harga = Number(this.initialHarga)
        draft.harga_partai = this.initialHarga
        this.editingItemId = null
      } else if(e.key === 'Enter') {
        this.showGantiHarga = false
        this.input.harga = Number(newHarga)
        draft.harga_partai = newHarga
        this.editingItemId = null
        this.updateHarga(draft.id, true)
      } else {        
        this.input.harga = Number(newHarga);
      }
    },

    updateHarga(id, draft) {
      const newHarga = this.input.harga;
      if (draft) {
        const selectedBarang = this.listDraftCarts
          .map((item) => item)
          .find((item) => item.id === id);
        selectedBarang.harga_partai = this.$roundup(newHarga);
        this.transformBarang(selectedBarang);

        selectedBarang.formatCalculateRupiah =
          this.input.qty * selectedBarang.harga_partai;

        this.total = this.listDraftCarts.reduce((acc, item) => {
          if (
            Number(item.harga_partai) !== undefined &&
            !isNaN(Number(item.harga_partai))
          ) {
            if (Number(item.qty) > 1) {
              return acc + item.formatCalculateRupiah;
            } else {
              return acc + Number(item.harga_partai);
            }
          } else {
            return acc;
          }
        }, 0);

        this.input.total = this.$format(this.total);
        this.input.bayar = this.$format(this.total);

        this.generateKembali(this.input.diskon, this.total, this.total);
        this.recalculateJumlahRupiah(this.input.qty, this.input.diskon);

        this.draftItemPenjualan(draft, true, id);
        setTimeout(() => {
          // this.updateStokBarang();
          this.editingItemId = null;
        }, 500);
      } else {
        const selectedBarang = this.barangCarts.find((item) => item.id === id);
        selectedBarang.harga_partai = this.$roundup(newHarga);
        this.transformBarang(selectedBarang);

        selectedBarang.formatCalculateRupiah =
          this.input.qty * selectedBarang.harga_partai;

        this.total = this.barangCarts.reduce((acc, item) => {
          if (
            Number(item.harga_partai) !== undefined &&
            !isNaN(Number(item.harga_partai))
          ) {
            if (Number(item.qty) > 1) {
              return acc + item.formatCalculateRupiah;
            } else {
              return acc + Number(item.harga_partai);
            }
          } else {
            return acc;
          }
        }, 0);

        this.input.total = this.$format(this.total);
        this.input.bayar = this.$format(this.total);

        this.generateKembali(this.input.diskon, this.total, this.total);
        this.recalculateJumlahRupiah(this.input.qty, this.input.diskon);

        this.draftItemPenjualan(draft, false, id);
        setTimeout(() => {
          // this.updateStokBarang();
          this.editingItemId = null;
        }, 500);
      }
    },

    showChangePelanggan() {
      this.changePelangganShow = !this.changePelangganShow;
      this.selectedBarang = null;
      this.barangs = [];
    },

    changePelanggan(newValues) {
      if (newValues && newValues.id !== undefined) {
        const pelangganId = Number(newValues.id);
        if (!isNaN(pelangganId)) {
          this.changePelangganShow = false;
          this.selectedPelanggan = pelangganId;
          this.getPelangganDetail(pelangganId);
          this.input.pelanggan = pelangganId;
          this.input.nama_pelanggan = newValues.text;
        }
      }
    },

    checkStokBarang(id) {
      this.loading = true
      const endPoint = `/check-stok-barang/${id}`;
      const config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${this.token.token}`,
        },
      };

      this.$api
      .get(endPoint, config)
      .then(({ data }) => {
        if (data?.success) {
          this.getDetailBarang(id);
        } else {
          this.$swal({
            icon: "error",
            title: "Oops...",
            text: data.message,
          });
        }

        // this.selectedBarang = null
      })
      .finally(() => {
        this.loading = false
      })
      .catch((err) => {
        console.log(err);
      });
    },

    changeBarang(newValue) {
      this.loadingItem = true;
      if (newValue && newValue.id !== undefined) {
        this.checkStokBarang(newValue.id)
      }
    },

    changeSupplier(newValue) {
      const supplierId = newValue.id;
      if (supplierId !== undefined) {
        this.selectedSupplier = null;
        this.supplierId = supplierId;
        this.getPelangganDetail();

        this.$router.push({
          path: `/dashboard/transaksi/beli/pembelian-langsung/add`,
          query: {
            type: "PEMBELIAN_LANGSUNG",
            supplier: supplierId,
          },
        });
        this.changeSupplierShow = false;
        this.getBarangLists();
      }
    },

    changeBayar(e) {
      this.loadingKembali = true;
      this.showKembali = true;
      const bayar = Number(e.target.value);
      const numberResult = parseInt(this.input.total.replace(/[^0-9]/g, ""));
      const kembali = bayar - numberResult;

      if (this.showDp) {
        this.input.piutang = Math.abs(kembali);
        this.masukHutang = true;
        this.kembali = `Hutang : Rp. ${Math.abs(kembali)}`;
        this.hutang = this.$format(Math.abs(kembali));
        this.input.kembali = null;
      } else {
        this.input.hutang = 0;
        this.input.kembali = this.$format(kembali);
        // this.total = `Kembali : Rp. ${kembali}`;
        this.kembali = `Kembali : RP. ${kembali}`;
        this.input.kembaliRupiah = this.$format(kembali);
        this.masukHutang = false;
      }

      this.input.bayar = bayar;
      this.input.diterima = bayar;
      this.generateKembali(this.input.diskon, numberResult, numberResult);
      setTimeout(() => {
        this.loadingKembali = false;
        // this.checkSaldo();
      }, 500);
    },

    setInitialHarga(draft) {
      this.initialHarga = draft.harga;
    },

    clearHarga(draft) {
      draft.harga_partai = null;
    },

    clearBayarOngkir() {
      this.input.ongkir = null;
    },

    clearBayar() {
      this.input.bayar = null;
      this.input.bayarDp = null;
    },

    setInitialQty(draft) {
      this.initialQty = draft.qty;
    },

    clearQty(draft) {
      draft.qty = null;
    },

    generatePembayaran(value) {
      const minggu = 7;
      this.input.pembayaran = value;

      switch (value) {
        case "cash":
          this.input.jatuhTempo = 0;
          this.showDp = false;
          break;

        case "custom":
          this.input.jatuhTempo = 40 * minggu;
          this.showDp = true;
          break;
      }
    },

    changePembayaran(newValue) {
      if (newValue.text !== undefined) {
        this.generatePembayaran(newValue.text);
      }
    },

    changeEkspedisi(newValue) {
      if (newValue.text !== undefined) {
        this.selectedEkspedisi = newValue.id;
        this.listOngkirs = [];
        this.checkOngkir();
      }
    },

    changeProvince(newValue) {
      if (newValue.text !== undefined) {
        this.selectedProvince = newValue.id
        this.getCityByProvinces(this.selectedProvince)
      }
    },

    changeCityOrigin(newValue) {
      this.loadingCityDest = true;
      if (newValue.text !== undefined) {
        this.selectedCityOrigin = newValue.id;
        this.selectedCityDest = null;
        setTimeout(() => {
          this.loadingCityDest = false;
        }, 500)
      }
    },

    changeCityDest(newValue) {
      this.loadingEkspedisi = true;
      if (newValue.text !== undefined) {
        this.selectedCityDest = newValue.id
        setTimeout(() => {
          this.loadingEkspedisi = false;
        }, 500)
      }
    },

    transformPelangganLists(rawData) {
      return rawData
        .filter((item) => item && item.id)
        .map((item) => ({
          id: item.id,
          text: `${item.nama} - ${item.kode}`,
        }));
    },

    transformDataKasLists(rawData) {
      return rawData
        .filter((item) => item && item.kode)
        .map((item) => ({
          id: item.id,
          text: `${item.nama} - ${item.kode}`,
        }));
    },

    transformBarangLists(rawData) {
      return rawData
        .filter((item) => item && item.kode)
        .map((item) => ({
          id: item.id,
          text: `${item.nama} - ${item.kategori} (${item.kode})`,
        }));
    },

    transformProvinceLists(rawData) {
      return rawData
        .filter((item) => item && item.province)
        .map((item) => ({
          id: item.province_id,
          text: `${item.province}`,
        }));
    },

    transformCityLists(rawData) {
      return rawData
        .filter((item) => item && item.city_id)
        .map((item) => ({
          id: item.city_id,
          text: `${item.city_name} - (${item.type})`,
        }));
    },

    transformItemPenjualan(results) {
      if (results !== undefined && results.length > 0) {
        return results.map((result) => {
          this.lastItemPembelianId = result.id;
          this.diskonByBarang = this.$roundup(result.diskon);
          const qtyBarang = result.qty;
          result.qty = qtyBarang > 1 ? qtyBarang : 1;
          const formatCalculateRupiah =
            result.qty > 1 ? result.qty * result.harga : result.harga;
          const transformedBarang = {
            id: result.id,
            id_barang: result.id_barang,
            nama: result.barang_nama,
            kode_barang: result.barang_kode,
            kode: result.kode,
            satuan: result.satuan,
            harga_partai: this.$roundup(result.harga),
            disc: result.diskon,
            expired: result.ada_expired_date ? result.expired : null,
            qty: Number(result.qty),
            formatCalculateRupiah: formatCalculateRupiah,
            supplier_id: result.id_supplier,
            nama_supplier: result.nama_supplier,
            kode_supplier: result.kode_supplier,
            pelanggan: this.selectedPelanggan,
            stok: result.toko
          };
          return transformedBarang;
        });
      } else {
        this.diskonByBarang = this.$roundup(results.diskon);
        const transformedBarang = {
          id: results.id,
          nama: results.nama_barang,
          kode_barang: results.kode_barang,
          kode: results.kode,
          satuan: results.satuan,
          harga_partai: this.$roundup(results.harga),
          disc: results.diskon,
          expired: results.ada_expired_date ? results.expired : null,
          qty: Number(results.qty),
          formatCalculateRupiah: results.formatCalculateRupiah,
          supplier_id: results.id_supplier,
          nama_supplier: results.nama_supplier,
          kode_supplier: results.kode_supplier,
          stok: results.toko
        };

        return transformedBarang;
      }
      return [];
    },

    transformBarang(result) {
      this.diskonByBarang = this.$roundup(result.diskon);
      const transformedBarang = {
        id: result.id,
        nama: result.nama,
        kode: result.kode,
        kode_barang: result.kode,
        satuan: result.satuan,
        harga_partai: this.$roundup(result.harga_partai),
        disc: result.diskon,
        pelanggan: this.selectedPelanggan,
        supplier_id: result.id_supplier,
        nama_supplier: result.nama_supplier,
        kode_supplier: result.kode_supplier,
        expired: result.ada_expired_date ? result.expired : null,
        qty: Number(result.qty),
        formatCalculateRupiah: result.formatCalculateRupiah,
        stok: result.toko
      };

      return transformedBarang;
    },

    async getPelangganLists() {
      this.loadingPelangganList = true;
      const getAllPages = async () => {
        let allData = [];
        let currentPage = 1;
        let totalPages = 1;

        while (currentPage <= totalPages) {
          const data = await getData({
            api_url: `${this.api_url}/list-pelanggan-partai?page=${currentPage}`,
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
          this.pelanggans = this.transformPelangganLists(data);
        })
        .finally(() => {
          setTimeout(() => {
            this.loadingPelangganList = false;
          }, 500);
        })
        .catch((err) => console.log(err));
    },

    inputKeterangan(e) {
      this.input.keterangan = e.target.value;
    },

    changeKodeKas(newValues) {
      if (newValues && newValues.id !== undefined) {
        const kasId = Number(newValues.id);
        if (!isNaN(kasId)) {
          this.showBayar = false;
          this.selectedKodeKas = kasId;
          this.getKasDetail(kasId);
          this.input.kode_kas = kasId;
        }
      }
    },

    async getKasDetail(id) {
      this.loadingKas = true;
      const data = await getData({
        api_url: `${this.api_url}/data-kas/${id}`,
        token: this.token.token,
        api_key: this.api_token,
      });
      const result = data?.data[0];

      setTimeout(() => {
        this.showDetailKas = true;
        this.detailKas = result;
        this.loadingKas = false;
      }, 500);
    },

    hitungBayarSetelahDiskon(diskon) {
      const diskonValue = Number(diskon);
      if (!isNaN(diskonValue)) {
        const diskonAmount = (diskonValue / 100) * this.total;
        this.bayar = this.total - diskonAmount;
      }
    },
    async getBarangLists() {
      this.loadingBarang = true;
      const getAllPages = async () => {
        let allData = [];
        let currentPage = 1;
        let totalPages = 1;

        while (currentPage <= totalPages) {
          const data = await getData({
            api_url: `${this.api_url}/data-barang?page=${currentPage}`,
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
          this.loadingBarang = false;
        })
        .catch((err) => console.log(err));
    },

    async getCityByProvinces(id) {
      this.loadingCityOrigin = true;
      const getAllPages = async () => {
        let allData = [];
        let currentPage = 1;
        let totalPages = 1;

        while (currentPage <= totalPages) {
          const data = await getData({
            api_url: `${this.api_url}/citys/${id}`,
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
          this.citys = this.transformCityLists(data);
        })
        .finally(() => {
          this.loadingCityOrigin = false;
        })
        .catch((err) => console.log(err));
    },

    async getProvinceLists() {
      this.loadingProvince = true;
      const getAllPages = async () => {
        let allData = [];
        let currentPage = 1;
        let totalPages = 1;

        while (currentPage <= totalPages) {
          const data = await getData({
            api_url: `${this.api_url}/province-lists`,
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
          this.provinces = this.transformProvinceLists(data);
        })
        .finally(() => {
          this.loadingProvince = false;
        })
        .catch((err) => console.log(err));
    },

    checkOngkir() {
      this.loadingEkspedisi = true
       this.$nuxt.globalLoadingMessage = "Proses pengecekan biaya ongkir ...";
      const endPoint = `/check-ongkir`;

      const config = {
        headers: {
          Authorization: `Bearer ${this.token.token}`,
        },
      };

      let formData = new FormData();

      this.listDraftCarts.map(item => {
        formData.append('origin', this.selectedCityOrigin)
        formData.append('destination', this.selectedCityDest)
        formData.append('weight', item.qty)
        formData.append('courier', this.selectedEkspedisi)

        this.$api
        .post(endPoint, formData, config)
        .then(({ data }) => {
          this.listOngkirs.push({
            id: item.id_barang,
            barang: `${item.nama}(${item.kode_barang})`,
            qty: `${item.qty}${item.satuan}`,
            costs: data.data
          })
        })
        .finally(() => {
          this.loadingEkspedisi = false
          this.loadingCityDest = false
        })
        .catch((err) => {
          console.log(err.message)
        });
      })
    },

    async getPelangganDetail(id) {
      this.loadingPelanggan = true;
      const data = await getData({
        api_url: `${this.api_url}/data-pelanggan/${id}`,
        token: this.token.token,
        api_key: this.api_token,
      });
      const result = data?.data[0];

      setTimeout(() => {
        this.showDetailPelanggan = true;
        this.detailPelanggan = result;
        this.loadingPelanggan = false;
      }, 500);
    },

    async getDetailBarang(id) {
      const data = await getData({
        api_url: `${this.api_url}/data-barang/${id}`,
        token: this.token.token,
        api_key: this.api_token,
      });
      if (data && data?.data) {
        const result = data?.data;
        // const selectedBarang = { ...result };
        const selectedBarang = this.transformBarang(result);
        const idBarang = selectedBarang.id;
        const qtyBarang = selectedBarang.qty;
        selectedBarang.id = idBarang;
        selectedBarang.qty = qtyBarang > 1 ? qtyBarang : 1;
        selectedBarang.formatCalculateRupiah =
          selectedBarang.qty > 1
            ? selectedBarang.qty * selectedBarang.harga_partai
            : selectedBarang.harga_partai;

        const existingItem = result.id === id;

        if (!existingItem) {
          if (this.listDraftCarts.length > 0) {
            this.listDraftCarts.push(selectedBarang);
            this.draftItemPenjualan(true, true, idBarang);
          } else {
            this.barangCarts.push(selectedBarang);
            this.draftItemPenjualan(false, false, idBarang);
          }

          this.showBayar = false;
        } else {
          console.log("kesini kali ah")
          this.$swal({
            icon: "question",
            title: "Oops...",
            text: `${selectedBarang.nama}, sudah ditambahkan!!`,
            timer: 5000
          });
        }
      }
    },

    updateStokBarang() {
      const endPoint = `/update-stok-barang-all`;
      const config = {
        headers: {
          Authorization: `Bearer ${this.token.token}`,
        },
      };

      const dataDraft = {
        type: "penjualan",
        kode: this.input.reference_code,
        barangs: this.listDraftCarts.map((item) => {
          return {
            id: item.id_barang,
            kode: item.kode,
            qty: item.qty,
          };
        }),
      };

      this.$api
        .post(endPoint, dataDraft, config)
        .then(({ data }) => {
          if (data?.success) {
            console.log(data.message);
            this.draft = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    deletedBarangCarts(idBarang, idItemPembelian) {
      // console.log(idItemPembelian);
      this.loadingDelete = true;
      this.selectedBarang = null;
      const endPoint = `/delete-item-penjualan/${idItemPembelian}`;
      const config = {
        headers: {
          Authorization: `Bearer ${this.token.token}`,
        },
      };

      this.$api
        .delete(endPoint, config)
        .then(({ data }) => {
          if (data.success) {
            this.listDraftCarts = this.listDraftCarts.filter(
              (item) => item.id !== idItemPembelian
            );
            this.barangCarts = this.barangCarts.filter(
              (item) => item.id !== idItemPembelian
            );
            this.showGantiHarga = false;
            this.selectedBarang = null;

            this.checkItemPenjualan(true);

            this.loadCalculateItemPembelianDetect();

          }
        })
        .finally(() => {
          setTimeout(() => {
            localStorage.removeItem('stok_availables');
            this.loadingDelete = false;
          }, 500);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    pad(number) {
      if (number < 10) {
        return "0" + number;
      }
      return number;
    },

    getKasData() {
      this.loadingKas = true;
      const getAllPages = async () => {
        let allData = [];
        let currentPage = 1;
        let totalPages = 1;

        while (currentPage <= totalPages) {
          const data = await getData({
            api_url: `${this.api_url}/data-kas?page=${currentPage}`,
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
          this.kas = this.transformDataKasLists(data);
        })
        .finally(() => {
          setTimeout(() => {
            this.loadingKas = false;
          }, 500);
        })
        .catch((err) => console.log(err));
    },

    handleDiskonInput() {
      const diskon = Number(this.input.diskon);

      this.recalculateTotalBayar(diskon);
    },

    checkSaldo() {
      if (this.input.kode_kas !== null) {
        this.loadingSaldo = true;
        // this.$nuxt.globalLoadingMessage = "Proses pengecekan saldo ...";
        this.options = "pembelian-langsung";
        const endPoint = `/check-saldo/${this.input.kode_kas}?entitas=${this.total}`;
        const config = {
          headers: {
            Authorization: `Bearer ${this.token.token}`,
          },
        };

        this.$api
          .get(endPoint, config)
          .then((data) => {
            if (data?.data?.error) {
              this.$swal({
                icon: "error",
                title: "Oops...",
                text: data?.data?.message,
              });
            }
          })
          .finally(() => {
            setTimeout(() => {
              this.loadingSaldo = false;
            }, 500);
          })
          .catch((err) => {
            this.loadingSaldo = false;
            console.log(err);
          });
      } else {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Pilih data kas terlebih dahulu",
        });
        this.checkItemPenjualan(false);
      }
    },

    recalculateJumlahRupiah(isi = 0, diskon = 0) {
      this.total = this.barangCarts.reduce((acc, item) => {
        return acc + (item.formatCalculateRupiah || 0);
      }, 0);

      const diskonAmount = (diskon / 100) * this.total;
      this.total -= diskonAmount;

      // Apply tax
      const ppnAmount = (this.input.ppn / 100) * this.total;
      this.total += ppnAmount;

      // Update payment amount (contoh: bayar adalah 80% dari total)
      this.bayar = this.total * 0.8; // sesuaikan sesuai dengan logika bisnis Anda
    },

    simpanPenjualan(draft) {
      // di matiin dulu sementara
      this.loading = !draft ? true : false;
      this.startPenjualanSound = true;
      this.$nuxt.globalLoadingMessage = "Proses menyimpan transaksi ...";
      // this.loading = true;
      this.options = "penjualan-partai";
      const endPoint = `/data-penjualan-partai`;
      const config = {
        headers: {
          Authorization: `Bearer ${this.token.token}`,
        },
      };

      const tanggal =
        this.input.tanggal.getFullYear() +
        "-" +
        this.pad(this.input.tanggal.getMonth() + 1) +
        "-" +
        this.pad(this.input.tanggal.getDate());

      const prepareBarang = this.barangCarts.map((item) => ({
        id: item.id,
        qty: item.qty,
      }));

      let formData = new FormData();
      formData.append("ref_code", this.input.reference_code);
      formData.append("draft", draft);
      formData.append("tanggal", tanggal);
      formData.append("pelanggan", this.input.pelanggan);
      formData.append("kode_kas", this.input.kode_kas);
      formData.append("keterangan", this.input.keterangan);
      formData.append("pembayaran", this.input.pembayaran);
      formData.append("jt", this.input.jatuhTempo);
      formData.append("diskon", this.input.diskon);
      formData.append("ppn", this.input.ppn);
      formData.append("jumlah", this.total);
      formData.append(
        "bayar",
        this.showKembali ? this.input.bayar : this.total
      );
      formData.append(
        "diterima",
        this.showKembali ? this.input.diterima : this.total
      );
      formData.append("ongkir", this.showShipping ? this.input.ongkir : this.totalCostValue);
      formData.append("status_kirim", this.input.status_kirim);
      formData.append("piutang", this.input.piutang);
      formData.append("kembali", this.showKembali ? this.input.kembali : 0);
      formData.append("operator", this.$nuxt.userData.name);
      formData.append("qty", this.input.qty);
      formData.append("barangs", JSON.stringify(prepareBarang));


      this.$api
        .post(endPoint, formData, config)
        .then(({ data }) => {
          if (data?.error) {
            this.$swal({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
          }
          if (data?.success && !draft) {
            this.updateStokBarang();
            const ref_code = { ref_code: this.input.reference_code[0] };
            localStorage.removeItem("ref_code");
            localStorage.setItem("cetak_code", JSON.stringify(ref_code));
            this.$swal({
              position: "top-end",
              icon: "success",
              title: data?.message,
              showConfirmButton: false,
              timer: 1000,
            });
            setTimeout(() => {
              this.loading = false;
              const path = "/dashboard/transaksi/jual/penjualan-partai/cetak";
              this.$router.push({
                path: path,
                query: {
                  kode: this.input.reference_code,
                },
              });
            }, 1500);
          }
        })
        .finally(() => {
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
          this.error = true;
          this.$swal({
            title: "Data belum lengkap?",
            text: "Periksa kembali kolom input data!!",
            icon: "question",
          });
          this.validations = error.response.data;
        });
    },

    draftItemPenjualan(draft, onDraft, idBarang = null) {
      this.loading = true
      this.$nuxt.globalLoadingMessage = "Proses menyimpan item quantity ...";

      const endPoint = `/update-item-penjualan`;
      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token.token}`,
        },
      };

      if(this.input.pelanggan === null || this.input.pelanggan === undefined) {
        this.$swal({
          title: "Data belum lengkap?",
          text: "Pilih pelanggan terlebih dahulu!!",
          icon: "question",
        });
      }

      let dataDraft;
      if (onDraft) {
        dataDraft = {
          draft: draft,
          kode:
            this.input.reference_code.length > 0
              ? this.input.reference_code[0]
              : this.input.reference_code,
          kode_kas: this.input.kode_kas,
          barangs: this.listDraftCarts
            .filter((item) => item.id === idBarang)
            .map((item, idx) => ({
              nourut: (idx += 1),
              id: item.id,
              kode: item.kode,
              kode_barang: item.kode_barang,
              qty: item.qty,
              harga_toko: null,
              harga_partai: item.harga_partai,
              diskon: this.input.diskon,
              ppn: this.input.ppn,
              supplier_id: item.supplier_id,
              pelanggan: this.input.pelanggan !== undefined ? this.input.pelanggan : this.selectedPelanggan,
            })),
        };
      } else {
        dataDraft = {
          draft: draft,
          kode: this.input.reference_code,
          kode_kas: this.input.kode_kas,
          barangs: this.barangCarts.map((item, idx) => {
            return {
              nourut: (idx += 1),
              id: item.id,
              kode: item.kode,
              kode_barang: item.kode_barang,
              qty: item.qty,
              pelanggan: this.input.pelanggan !== undefined ? this.input.pelanggan : this.selectedPelanggan,
              supplier_id: item.supplier_id,
              harga_toko: null,
              harga_partai: item.harga_partai,
              diskon: this.input.diskon,
              ppn: this.input.ppn,
              diskon_rupiah: this.input.diskon_rupiah,
            };
          }),
        };
      }

      this.$api
        .post(endPoint, dataDraft, config)
        .then(({ data }) => {
          if (data?.draft) {
            this.draft = true;
            this.input.reference_code = data?.data;
            this.lastItemPembelianId = data?.itempembelian_id;
            // this.listdraftItemPenjualan(data?.data);
          }
        })
        .finally(() => {
          this.checkItemPenjualan(false);
          this.loading = false
        })
        .catch((err) => {
          console.log(err.message)
        });
    },

    loadCalculateItemPembelianDetect() {
      this.total = this.listDraftCarts.reduce((acc, item) => {
        if (item.harga_partai !== undefined && !isNaN(item.harga_partai)) {
          if (Number(item.qty) > 1) {
            return acc + item.formatCalculateRupiah;
          } else {
            return acc + Number(item.harga_partai);
          }
        } else {
          return acc;
        }
      }, 0);
      this.input.total = this.$format(this.total);
      this.input.bayar = this.$format(this.total);
      this.generateKembali(this.input.diskon, this.total, this.total);
    },

    async generateKembali(diskon = 0, total = 0, bayar = 0) {
      const data = await getData({
        api_url: `${this.api_url}/load-form-penjualan/${diskon}/${total}/${bayar}`,
        token: this.token.token,
        api_key: this.api_token,
      });
      this.terbilang = data?.terbilang;
    },
  },

  computed: {
    token() {
      return this.$store.getters["auth/getAuthToken"];
    },
    // totalCostValue() {
    //   let total = 0;
    //   this.listOngkirs.forEach((item) => {
    //     item.costs.forEach((costItem) => {
    //       costItem.costs.forEach((cost) => {
    //         cost.cost.forEach((value, idx) => {
    //           total += value.value;
    //         });
    //       });
    //     });
    //   });
    //   return total;
    // },
  },
};
</script>
