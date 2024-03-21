<template>
  <div>
    <div
      class="relative flex flex-col min-w-0 break-words bg-transparent w-96 mb-6 shadow-sm rounded"
    >
      <div>
        <div class="flex justify-start space-x-0">
          <div class="hidden">
             <audio v-if="playSound" autoplay :src="`${$nuxt.soundUrl}/pembelian-notification.mp3`" preload="auto"></audio>
          </div>
          
          <div class="hidden">
             <audio v-if="startPembelianSound" autoplay :src="`${$nuxt.soundUrl}/sweet_text.mp3`" preload="auto"></audio>
          </div>

          <div class="hidden">
             <audio v-if="errorPembelianSound" autoplay :src="`${$nuxt.soundUrl}/error.mp3`" preload="auto"></audio>
          </div>

          <div class="flex-none w-36">
            <h4 class="font-bold text-md">Ref No</h4>
          </div>
          <div class="shrink-0 w-full">
            <div class="flex justify-between space-x-2">
              <div class="shrink-0 w-30 text-black">
                <input type="text" v-model="detail.kode" disabled />
              </div>
              <div class="flex-none w-30">
                <datepicker
                  v-model="input.tanggal"
                  :value="detail.tanggal"
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
        <div>
          <div class="flex justify-start space-x-0 py-6">
            <div class="flex-none w-36">
              <h4 class="font-bold text-md">Pelanggan</h4>
            </div>

            <div class="shrink-0 w-full">
              <input type="text" disabled :value="`${detail.nama_pelanggan} (${detail.pelanggan})`" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div class="flex justify-start space-x-0 py-6">
            <div class="flex-none w-36">
              <h4 class="font-bold text-md">Total Biaya Kirim</h4>
            </div>

            <div class="shrink-0 w-full">
              <input class="text-emerald-600 font-bold" type="text" disabled :value="`${$format(detail.biayakirim)}`" />
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
            <div v-if="loadingSupplier">
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
                disabled
                v-model="detail.kas_id"
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
          v-if="error && validation?.kode_kas"
          class="mt-6 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <span class="font-medium">Danger alert!</span>
          {{ validation?.kode_kas[0] }}
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
        <div v-else class="flex justify-start space-x-0 mt-6">
          <div class="flex-none w-36">
            <h4 class="font-bold text-md">Saldo Kas</h4>
          </div>
          <div class="shrink-0 w-60 text-black">
            <input type="text" disabled :value="$format(detail.kas_saldo)" />
          </div>
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
          <div v-if="detail.po == 'False'" class="shrink-0 w-60">
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
          <div v-else class="shrink-0 w-60">
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

      <div class="mt-24">
        <label class="inline-flex items-center cursor-pointer">
          <input :disabled="!changeMultiInput" @change="changeMultipleInput" type="checkbox" v-model="isCheckedMultiple" class="sr-only peer">
          <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {{isCheckedMultiple ? 'Multiple Item P.O' : 'Daily Input P.O'}}
          </span>
        </label>
      </div>
    </div>

    <div class="relative mt-16 flex flex-col min-w-0 break-words bg-white w-full mb-12 rounded-lg">
      <div>
        <h2>Detail Purchase Order Proccess</h2>
      </div>

      <div>
        <tabs
        :options="{
          useUrlFragment: false,
          defaultTabHash: 1,
        }"
        >
          <tab
            v-for="item in items"
            :key="item.id"
            :name="item.nama_barang"
            :id="item.id"
          >
            <div class="flex justify-start items-center overflow-x-auto">
              <div>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table
                    class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
                  >
                    <thead
                      class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                    >
                      <tr>
                        <th
                          scope="col"
                          class="px-6 py-3"
                        >
                          PO Ke
                        </th>
                       <!--  <th
                          scope="col"
                          class="px-6 py-3"
                        >
                          Barang
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3"
                        >
                          Supplier
                        </th> -->
                        <th
                          scope="col"
                          class="px-6 py-3"
                        >
                          Qty
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3"
                        >
                          Harga
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3"
                        >
                          Subtotal
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="order in orders.filter(e => e.kode_barang === item.kode_barang)" :key="order.id"
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white font-bold"
                          >
                          {{ order.po_ke }}
                        </th>
                        <!-- <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {{ order.nama_barang}} ({{order.kode_barang}})
                        </th>
                        <td class="px-6 py-4">
                          <span
                            class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"
                            >
                            {{ order.supplier }}
                          </span>
                        </td> -->
                        <td class="whitespace-nowrap  px-6 py-4">
                          <div class="flex justify-center space-x-2">
                            <div v-if="editingOrderQtyId !== order.id">
                              {{order.qty}} {{item.satuan}}
                            </div>
                            <div v-if="editingOrderQtyId === order.id">
                              <input
                              class="h-10 w-24"
                              type="text"
                              v-model="order.qty"
                              @input="changeGantiOrderItemQty($event, detail.id, item)"
                              @focus="setInitialOrderQty(order)"
                              @keydown.esc="changeGantiOrderItemQty($event, detail.id, item)" 
                              @keydown.enter="changeGantiOrderItemQty($event, detail.id, item)"
                              />
                            </div>

                            <div v-if="order.po_ke >= 1 && editingOrderQtyId !== order.id">
                              <button
                                @click="gantiOrderItemQty(order.id, null)"
                                class="px-3 py-2 text-xs font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                                >
                                <i class="fa-solid fa-pen-to-square"></i>
                              </button>
                            </div>
                          </div>
                        </td>

                        <td class="px-6 py-4" v-if="order.po_ke">
                          <div v-if="editingItemId !== order.id" class="flex justify-between space-x-2">
                            <div>
                              {{$format(order.harga_satuan)}}
                            </div>
                              <div>
                                <button
                                  @click="gantiHarga(order.id, null)"
                                  class="px-3 py-2 text-xs font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                                  >
                                <i class="fa-solid fa-pen-to-square"></i>
                              </button>
                            </div>
                          </div>

                          <div v-if="editingItemId === order.id" class="flex justify-between space-x-2">
                            <div>
                              <input
                              class="w-auto"
                              type="text"
                              v-model="order.harga_satuan"
                              @input="changeGantiHarga"
                              @focus="setInitialHarga(order)"
                              @keydown.esc="changeGantiHarga($event, detail.id, item)"
                              @keydown.enter="changeGantiHarga($event, detail.id, item)"
                              />
                            </div>
                            <div>
                              <button
                              @click="updateHarga(detail.id, item.id, item)"
                              class="px-3 py-3 text-xs font-medium text-center text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
                              >
                              <i class="fa-solid fa-floppy-disk fa-lg"></i>
                            </button>
                          </div>
                        </div>
                        </td>
                        <td class="px-6 py-4">
                          {{$format(order.subtotal)}}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </tab>
        </tabs>
      </div>
    </div>

    <div class="bg-transparent mb-10 mt-12 shadow-sm rounded w-full overflow-x-auto overflow-y-auto">
      <div>
        <table class="w-full text-md border-collapse border-b">
          <thead
            class="text-xs bg-transparent border-b border-t dark:border-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th class="px-6 py-3">Barang</th>
              <th class="px-6 py-3">Supplier</th>
              <th class="px-6 py-3">Available Stok</th>
              <th class="px-6 py-3 w-10">Qty</th>
              <th class="px-6 py-3 w-10">Harga</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(barang, idx) in items"
              :key="idx"
              class="bg-transparent border-b"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium whitespace-nowrap text-left"
              >
                <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
                  {{ barang.nama_barang }}({{ barang.kode_barang }})
                </span>
              </th>

              <th
                scope="row"
                class="px-6 py-4 font-medium whitespace-nowrap text-left"
              >
                <div class="flex justify-between space-x-4">
                  <div>
                    <span
                      class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"
                    >
                      {{ barang.nama_supplier }}({{ barang.supplier }})
                    </span>
                  </div>
                </div>
              </th>

              <td class="whitespace-nowrap p-4 text-lg text-center">
                <span :class="`${barang.available_stok < 100 ? 'bg-pink-100 text-pink-800 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300' : 'bg-indigo-100 text-indigo-800 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300'}`">
                  {{barang.available_stok}} {{barang.satuan}}
                </span>
              </td>

              <td v-if="editingQtyId === barang.id" class="px-6 py-4">
                <div class="flex justify-between space-x-2">
                  <div v-if="!showEditQty">
                    <input
                      class="w-20"
                      type="text"
                      v-model="barang.qty"
                      @input="changeGantiQty($event, detail.id, barang)"
                      @focus="setInitialQty(barang)"
                      @keydown.esc="changeGantiQty($event, detail.id, barang)" 
                      @keydown.enter="changeGantiQty($event, detail.id, barang)"
                    />
                  </div>

                  <div v-if="showEditQty">
                    <input
                      class="w-20"
                      type="text"
                      v-model="barang.qty"
                      @input="changeGantiItemQty($event, detail.id, barang)"
                      @focus="setInitialQty(barang)"
                      @keydown.esc="changeGantiItemQty($event, detail.id, barang)" 
                      @keydown.enter="changeGantiItemQty($event, detail.id, barang)"
                    />
                  </div>

                  <div v-if="!showEditQty">
                    <button
                    @click="updateQty(detail.id, barang.id)"
                    class="px-3 py-3 text-xs font-medium text-center text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
                      >
                      <i class="fa-solid fa-floppy-disk fa-lg"></i>
                    </button>
                  </div>

                  <div v-if="showEditQty">
                    <button
                      @click="updateItemQty(detail.id, barang.id, barang)"
                      class="px-3 py-3 text-xs font-medium text-center text-white bg-amber-500 rounded-lg hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-400 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-600"
                    >
                      <i class="fa-solid fa-floppy-disk fa-lg"></i>
                    </button>
                  </div>
                </div>
              </td>

              <td v-else class="px-6 py-4">
                <div class="flex justify-between space-x-2">
                  <div>
                    {{ $roundup(barang.qty) }}{{barang.satuan}}
                  </div>

                  <div v-if="!isCheckedMultiple">
                    <button
                      v-if="barang.stop_qty === 'False'"
                      @click="gantiQty(barang.id, null)"
                      class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <i class="fa-solid fa-plus"></i>
                    </button>
                  </div>

                  <div v-else>
                    <button
                      v-if="masukpiutang"
                      @click="gantiQty(barang.id, null)"
                      class="px-3 py-2 text-xs font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                    >
                      <i class="fa-solid fa-plus"></i>
                    </button>
                  </div>
                  <div v-if="showEditQty && barang.qty > 0 && orderItemId === null">
                    <button
                      @click="gantiItemQty(barang.id, null)"
                      class="px-3 py-2 text-xs font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                    >
                      <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                  </div>
                </div>
              </td>

              <!-- <td v-if="editingItemId === barang.id" class="px-6 py-4">
                <div class="flex justify-between space-x-2">
                  <div>
                    <input
                      class="w-auto"
                      type="text"
                      v-model="barang.harga"
                      @input="changeGantiHarga"
                      @focus="setInitialHarga(barang)"
                      @keydown.esc="changeGantiHarga($event, detail.id, barang)"
                      @keydown.enter="changeGantiHarga($event, detail.id, barang)"
                    />
                  </div>
                  <div>
                    <button
                      @click="updateHarga(detail.id, barang.id)"
                      class="px-3 py-3 text-xs font-medium text-center text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
                    >
                      <i class="fa-solid fa-floppy-disk fa-lg"></i>
                    </button>
                  </div>
                </div>
              </td>
              <td v-else class="px-6 py-4">
                <div class="flex justify-between space-x-2">
                  <div class="font-bold text-right">
                    {{ $format(barang.harga) }}
                  </div>
                  <div>
                    <button
                      @click="gantiHarga(barang.id, null)"
                      class="px-3 py-2 text-xs font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                    >
                      <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                  </div>
                </div>
              </td> -->

              <td class="px-6 text-right">
                {{ $format(barang.harga) }}
              </td>

              <!-- <td class="px-6 py-4 text-right">
                {{ $format(barang.harga * barang.qty) }}
              </td> -->

              <td v-if="!isCheckedMultiple" class="px-10 py-4">
                <button v-if="orders.length > 1"
                  @click="deletedBarangCarts(barang.id)"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <i class="fa-solid fa-trash-can text-red-600 text-xl"></i>
                </button>
              </td>
              <td v-else>
                <button v-if="showDeletedById !== barang.id || barang.stop_qty === 'False'"
                  @click="deletedBarangCarts(barang.id)"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <i class="fa-solid fa-trash-can text-red-600 text-xl"></i>
                </button>
              </td>
            </tr>
          </tbody>

          <tbody v-if="loadingItem || loadingDelete ">
            <tr>
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
                <span v-if="loadingItem">Loading item pembelian ...</span>
                <span v-if="loadingDelete">Loading item deleted ...</span>
                <span v-if="loadingSaldo">Proses pengecekan saldo ...</span>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <form @submit.prevent="updatePenjualan(false)">
      <div
        class="bg-transparent shadow-sm rounded w-full flex justify-start space-x-4 mt-6"
      >
        <div
          v-if="detail.jumlah === detail.dikirim && !showKembali"
          class="shrink w-[80vw]"
        >
          <div
            class="grid grid-cols-1 bg-emerald-600 h-48 content-evenly justify-items-center text-white"
          >
            <div class="col-span-full text-white">
              <h4 class="font-bold text-4xl">
                {{ input.total }}
              </h4>
            </div>
          </div>
          <div class="grid grid-cols-1 h-12 bg-blueGray-700 text-white">
            <div class="col-span-full p-2">
              <h6 class="text-lg font-bold">
                {{ terbilang }}
              </h6>
            </div>
          </div>
        </div>

        <div v-else class="shrink w-[80vw]">
          <div
            class="grid grid-cols-1 bg-emerald-600 h-48 content-evenly justify-items-center text-white"
          >
            <div class="col-span-full">
              <h4 class="font-bold text-4xl">
                {{ showKembali ? kembali : showDp ? `Sisa DP ${this.$format(Number(detail.jumlah) - detail.dikirim)}` : input.total }}
              </h4>
            </div>
          </div>
          <div class="grid grid-cols-1 h-12 bg-blueGray-700 text-white">
            <div class="col-span-full p-2">
              <h6 class="text-lg font-bold">
                {{ terbilang }}
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
                  <input
                    disabled
                    type="number"
                    class="h-8 text-black"
                    v-model="input.diskon"
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

            <li class="w-full py-2">
              <div class="grid grid-cols-3 gap-0">
                <div>
                  <label class="font-bold">Biaya Kirim</label>
                </div>
                <div>
                  <input
                    type="number"
                    value="0"
                    class="h-8 text-black"
                    v-model="input.ongkir"
                    @focus="clearBayarOngkir"
                  />
                </div>
              </div>
            </li>

            <li v-if="!showDp" class="w-full py-2">
              <div class="grid grid-cols-3 gap-0">
                <div>
                  <label class="font-bold">
                    {{piutangAfter ? 'Bayar Kekurangan DP' : 'Bayar (Cash)'}}
                  </label>
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

                <div v-if="loadingSaldo">
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
                    <span class="sr-only">Check saldo...</span>
                  </div>
                </div>
              </div>

              <div v-if="piutangAfter" class="flex justify-start mt-10">
                <div>
                  <small>
                    <div class="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                      <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                      </svg>
                      <span class="sr-only">Info</span>
                      <div>
                        <span class="font-medium">Lengkapi dengan nominal berikut!</span> {{$format(input.bayarSisaDp)}}
                      </div>
                    </div>
                  </small>
                </div>
              </div>

              <div
                v-if="modeBayar"
                class="flex items-center p-4 mb-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 mt-2"
                role="alert"
              >
                <i class="fa-solid fa-circle-info"></i>
                <div>
                  <span class="font-medium">Silahkan!</span> ubah jumlah bayar
                  terlebih dahulu atau pilih masuk piutang.
                </div>
              </div>
            </li>

            <li v-else class="w-full py-2">
              <div class="grid grid-cols-3 gap-0">
                <div>
                  <label class="font-bold">DP Diterima</label>
                </div>
                <div>
                  <input
                    :disabled="!showDp"
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
              <div v-if="masukpiutang">
                <div class="grid grid-cols-3 gap-0">
                  <div>
                    <label class="font-bold">{{piutangAfter ? 'Piutang' : 'Sisa DP'}}</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      class="h-8 text-black"
                      disabled
                      v-model="input.piutangRupiah"
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
        <div v-if="modeBayar">
          <button
            class="bg-red-600 hover:bg-[#d6b02e] focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none text-white"
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
              <i class="fa-regular fa-floppy-disk"></i> Masuk piutang
            </div>
          </button>
        </div>
        <div v-else>
          <button v-if="!isCheckedMultiple"
            :disabled="!showBayarDaily || orders.length === 1"
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

          <button v-else
            :disabled="itemCount === 1"
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

  props: {
    detail: {
      type: Object,
      default: function () {
        return {};
      },
    },
    items: {
      type: Array,
      default: function () {
        return [];
      },
    },
    orders: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },

  data() {
    return {
      playSound: false,
      startPembelianSound: false,
      errorPembelianSound: false,
      id: this.$route.params.id,
      isCheckedMultiple: this.detail.multiple_input === "True" ? true : false,
      changeMultiInput: true,
      countOrder: 0,
      on_process: null,
      options: "purchase-order",
      loadingReferenceCode: this.detail.kode ? this.detail.kode : null,
      loadingSupplier: null,
      loadingSaldo: null,
      loadingItem: null,
      loadingDelete: null,
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
      currentPage: 1,
      changeAgain: false,
      selectedBarang: null,
      selectedKodeKas: null,
      selectedSupplier: null,
      supplierId: this.$route.query["supplier"],
      supplier: {},
      suppliers: [],
      kas: [],
      detailKas: {},
      showDetailKas: null,
      loadingKas: null,
      showKembali:
        this.detail &&
        this.detail?.bayar >= this.detail.jumlah &&
        this.detail.lunas == "True"
          ? true
          : false,
      loadingKembali:
        this.detail && this.detail?.bayar > this.detail.jumlah ? false : null,
      showGantiHarga: null,
      showGantiQty: null,
      showGantiOrderQty: null,
      editingItemId: null,
      editingQtyId: null,
      addQtyId: null,
      editingItemQtyId: null,
      editingOrderQtyId: null,
      diskonByBarang: 0,
      lastItemPembelianId: null,
      masukpiutang: this.detail.lunas === "False" ? true : false,
      piutang: "Rp. 0",
      showDp: this.detail && Number(this.detail.jumlah) - this.detail.bayar >= 0 ? true : false,
      showBayar: false,
      modeBayar: null,
      bayarDpRp: this.detail.lunas == "False" ? this.detail.jumlah : "Rp. 0",
      pembayaranChange: this.detail.lunas == "True" ? "cash" : null,
      qtyDrafts: [],
      draftOrders: [],
      lastQtyDraft: null,
      initialQty: 0,
      initialHarga: 0,
      initialOrderQty: 0,
      piutangAfter: null,
      bayarAction: null,
      showEditQty: false,
      orderItemId: null,
      showDeletedById: null,
      input: {
        tanggal: new Date(),
        reference_code: null,
        bayar:
          this.detail && this.detail.bayar
            ? this.$format(this?.detail?.bayar)
            : 0,
        barang: null,
        qty: 1,
        order_qty: 1,
        last_qty: 0,
        diskon: 0,
        ppn: 0,
        ongkir: 0,
        total:
          this.detail && this.detail.dikirim
            ? this.$format(this?.detail?.dikirim)
            : "Rp. 0",
        supplier: Number(this.$route.query["supplier"]),
        pembayaran:
          this.detail && this.detail?.lunas == "True" ? "cash" : "custom",
        kode_kas: null,
        jatuhTempo: this.detail && this.detail.tempo ? this.detail.tempo : 0,
        piutang:
          this.detail && this.detail?.lunas == "True" ? 0 : this.detail?.piutang,
        kembaliRupiah:
          this.detail && this.detail.bayar >= this.detail.jumlah
            ? this.$format(
                Number(this.detail.bayar) - Number(this.detail.jumlah)
              )
            : "Rp. 0",
        piutangRupiah:
          this.detail && this.detail?.lunas == "True"
            ? "Rp. 0"
            : this.$format(this.detail?.jumlah - this.detail?.dikirim),
        bayarDp:
          this.detail && this.detail?.jumlah
            ? this.$format(this?.detail?.jumlah)
            : 0,
        bayarSisaDp: 0,
        pelanggan: this.detail && this.detail?.pelanggan ? this.detail?.id_pelanggan : null,
        status_kirim: "proses"
      },
      showBayarDaily: Number(this.detail.jumlah) - Number(this.detail.bayar) === 0 ? true : false,
      error: false,
      validation: [],
      total: 0,
      bayar: 0,
      kembali:
        this.detail && this.detail?.lunas == "True"
          ? `Kembali ${this.$format(
              Number(this.detail.bayar) - Number(this.detail.jumlah)
            )}`
          : `piutang ${this.$format(this.detail.piutang)}`,
      terbilang: "Nol Rupiah",
      addQty: false,
      showAddQty: true,
      idAddQty: null,
      qtyById: 1,
      formatCalculateRupiah: 0,
      changeSupplierShow: false,
      draft: false,
      itemCount: 0,
      pembayarans: [
        { id: "cash", text: "cash" },
        { id: "custom", text: "custom" },
      ],
      deliver_status: [
        { id: "dikirim", text: "DIKIRIM" },
        { id: "proses", text: "PROSES" },
        { id: "pending", text: "PENDING" }
      ]
    };
  },

  beforeMount() {
    this.authTokenStorage();
  },

  mounted() {
    this.getKasData();
    this.generateTerbilang(this.detail.dikirim ? this.detail.dikirim : this.detail.jumlah);
    this.generateTempo(Number(this.detail.tempo));
    this.draftQtyById();
    this.checkItemMultiInput();
  },

  methods: {
    checkItemMultiInput() {
      const checks = this.items.map(item => item.stop_qty)
      const orders = this.orders.map(item => item);
      const countByKodeBarang = {};

      orders.forEach(item => {
        const kodeBarang = item.kode_barang;
        countByKodeBarang[kodeBarang] = (countByKodeBarang[kodeBarang] || 0) + 1;
      });

      const resultArray = Object.entries(countByKodeBarang).map(([kodeBarang, count]) => ({ kodeBarang, count }));

      resultArray.map(item => {
        this.itemCount = item.count;
        if(item.count > 1) {
          this.changeMultiInput = false;
        }
      })
    },

    draftQtyById() {
      this.qtyDrafts = this.items.map((item) => ({
        id: item.id,
        id_barang: item.id_barang,
        kode: item.kode,
        last_qty: item.qty,
      }));

      // this.items.map(item => {
      //   if(item.qty > 0) {
      //     this.showEditQty = true
      //   }
      // })
    },

    changeMultipleInput() {
       const endPoint = `/multiple-input-po/${this.id}`;
       const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token.token}`,
        },
      };
      const dataItem = {
        'multiple_input': this.isCheckedMultiple
      }
      this.$api
      .put(endPoint, dataItem, config)
      .then(({ data }) => {
        if(data.success) {
          this.changeMultiInput = false;
          this.$toast.show(data.message, {
            type: "purchase-order",
            duration: 1500,
            position: "top-right",
            icon: "circle-exclamation",
          });
          this.$emit('rebuild-data', false);
          this.on_process = 'on';
          localStorage.setItem('on_process', JSON.stringify({'status': 'on'}));
        }
      })
      .catch((err) => {
        console.log(err);
      });
    },

    gantiHarga(itemId = null, barangId = null) {
      if (itemId) {
        this.editingItemId = itemId;
      }

      if (barangId) {
        this.editingItemId = barangId;
      }
    },

    setInitialQty(barang) {
      barang.qty = null;
      this.initialQty = barang.qty;
    },

    setInitialOrderQty(order) {
      order.qty = null;
      this.initialOrderQty = order.qty
    },

    setInitialHarga(order) {
      order.harga_satuan = null;
      this.initialHarga = order.harga_satuan;
    },

    gantiQty(itemId = null, barangId = null) {
      this.showEditQty = false
      if (itemId) {
        this.editingQtyId = itemId;
      }

      if (barangId) {
        this.editingQtyId = barangId;
      }
    },

    gantiItemQty(itemId=null, barangId=null) {
      if (itemId) {
        this.editingQtyId = itemId;
      }

      if (barangId) {
        this.editingQtyId = barangId;
      }
    },

    gantiOrderItemQty(itemId=null, barangId=null) {
      if (itemId) {
        this.editingOrderQtyId = itemId;
      }

      if (barangId) {
        this.editingOrderQtyId = barangId;
      }
    },

    generateTerbilang(jml = null) {
      if (this.detail) {
        const jumlah = jml !== null ? jml : Number(this.detail.jumlah);
        const endPoint = `/generate-terbilang?jml=${jumlah}`;
        const config = {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token.token}`,
          },
        };
        this.$api
          .get(endPoint, config)
          .then(({ data }) => {
            this.terbilang = data?.data;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },

    updateItemQty(id, itemId, barang) {
      this.showKembali = false;
      const newQty = this.input.qty;
      const dataOrder = this.orders.map(item => item).find(item => item.kode_barang === barang.kode_barang)
      const itemsDetect = this.qtyDrafts[0]

      const prepareData = {
        item_id: itemId,
        qty: Number(newQty),
        order_id: dataOrder.id,
        last_qty: this.input.last_qty,
      };

      console.log(prepareData)

      const endPoint = `/update-item-penjualan-po-qty/${itemId}`;
      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token.token}`,
        },
      };

      this.$api
      .put(endPoint, prepareData, config)
      .then(({ data }) => {
        if(data.success) {
          // this.orderItemId = data.orders
          this.changeMultiInput = false;
          this.showBayarDaily = true;
          this.showKembali = true;
          this.orderItemId = data.orders.id;
          this.input.last_qty = barang.qty;
          if (data.data.lunas === "True") {
            if (data.data.bayar < data.data.dikirim) {
              this.masukpiutang = true;
              this.modeBayar = true;
              this.kembali = `Piutang : ${this.$format(
                Math.abs(data.data.bayar - Number(data.data.jumlah))
                )}`;
              this.input.piutang = Math.abs(
                data.data.bayar - Number(data.data.jumlah)
                );
              this.input.piutangRupiah = this.$format(
                Math.abs(data.data.bayar - Number(data.data.jumlah))
                );
              this.input.total = this.$format(data.data.dikirim);
              this.input.bayar = this.$format(data.data.bayar);
              this.input.pembayaran = "custom";
            } else {
              this.masukpiutang = false;
              this.modeBayar = false;
              const kembali =
              Number(data.data.bayar) - Number(data.data.jumlah);
              this.input.kembaliRupiah = this.$format(kembali);
              this.kembali = `Kembali : ${this.$format(kembali)}`;
              this.input.total = this.$format(data.data.jumlah);
              this.input.bayar = this.$format(data.data.bayar);
             this.input.pembayaran = "custom";
            }
          } else {
            if(data.data.bayar < data.data.dikirim) {
              this.generateTerbilang(Number(data.data.dikirim))
              this.masukpiutang = true;
              this.modeBayar = true;
              this.showBayar = false;
              this.showDp = false;
              this.piutangAfter = true;
              this.kembali = `Piutang : ${this.$format(Math.abs(data.data.dikirim - Number(data.data.jumlah)))}`;
              this.input.piutang = data.data.dikirim - data.data.bayar;
              this.input.piutangRupiah = this.$format(data.data.dikirim - data.data.bayar)
              // this.input.bayar = this.$format(data.data.bayar)
              this.input.bayarSisaDp = data.data.dikirim - data.data.bayar;
              this.input.bayar = "Rp. 0";
              this.input.total = this.$format(data.data.dikirim);
              this.input.pembayaran = "custom";
            } else {
              this.piutangAfter = false;        
              this.showKembali = true;
              this.masukpiutang = true;
              this.modeBayar = false;
              this.showDp = true;
              const sisaDp = data.sisa_dp ? data.sisa_dp : Number(data.data.bayar) - data.data.dikirim
              this.kembali = `Sisa DP : ${this.$format(sisaDp)}`;
              this.input.total = this.$format(data.data.dikirim);
              this.input.bayar = this.$format(data.data.bayar);
              this.input.piutangRupiah = this.$format(sisaDp);
              this.input.piutang = sisaDp;
              this.input.pembayaran = "custom";
            }
          }
        }
      })
      .finally(() => {
        this.$emit("rebuild-data", false);
          setTimeout(() => {
            this.loadingItem = false;
          }, 1000)
      })
      .catch((err) => {
        console.log(err);
      });
    },

    updateItemHarga(id, itemId, barang) {
      this.showKembali = false;
      const newQty = this.input.qty;
      const dataOrder = this.orders.map(item => item).find(item => item.kode_barang === barang.kode_barang)
      const itemsDetect = this.qtyDrafts[0]

      const prepareData = {
        item_id: itemId,
        qty: Number(newQty),
        order_id: dataOrder.id,
        last_qty: this.input.last_qty,
        harga: this.input.harga
      };

      const endPoint = `/update-item-penjualan-po-harga/${itemId}`;
      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token.token}`,
        },
      };

      this.$api
      .put(endPoint, prepareData, config)
      .then(({ data }) => {
        if(data.success) {
          // this.orderItemId = data.orders
          this.changeMultiInput = false;
          this.showBayarDaily = true;
          this.showKembali = true;
          this.orderItemId = data.orders.id;
          this.input.last_qty = barang.qty;
          if (data.data.lunas === "True") {
            if (data.data.bayar < data.data.dikirim) {
              this.masukpiutang = true;
              this.modeBayar = true;
              this.kembali = `Piutang : ${this.$format(
                Math.abs(data.data.bayar - Number(data.data.jumlah))
                )}`;
              this.input.piutang = Math.abs(
                data.data.bayar - Number(data.data.jumlah)
                );
              this.input.piutangRupiah = this.$format(
                Math.abs(data.data.bayar - Number(data.data.jumlah))
                );
              this.input.total = this.$format(data.data.dikirim);
              this.input.bayar = this.$format(data.data.bayar);
              this.input.pembayaran = "custom";
            } else {
              this.masukpiutang = false;
              this.modeBayar = false;
              const kembali =
              Number(data.data.bayar) - Number(data.data.jumlah);
              this.input.kembaliRupiah = this.$format(kembali);
              this.kembali = `Kembali : ${this.$format(kembali)}`;
              this.input.total = this.$format(data.data.jumlah);
              this.input.bayar = this.$format(data.data.bayar);
             this.input.pembayaran = "custom";
            }
          } else {
            if(data.data.bayar < data.data.dikirim) {
              this.generateTerbilang(Number(data.data.dikirim))
              this.masukpiutang = true;
              this.modeBayar = true;
              this.showBayar = false;
              this.showDp = false;
              this.piutangAfter = true;
              this.kembali = `Piutang : ${this.$format(Math.abs(data.data.dikirim - Number(data.data.jumlah)))}`;
              this.input.piutang = data.data.dikirim - data.data.bayar;
              this.input.piutangRupiah = this.$format(data.data.dikirim - data.data.bayar)
              // this.input.bayar = this.$format(data.data.bayar)
              this.input.bayarSisaDp = data.data.dikirim - data.data.bayar;
              this.input.bayar = "Rp. 0";
              this.input.total = this.$format(data.data.dikirim);
              this.input.pembayaran = "custom";
            } else {
              this.piutangAfter = false;        
              this.showKembali = true;
              this.masukpiutang = true;
              this.modeBayar = false;
              this.showDp = true;
              const sisaDp = data.sisa_dp ? data.sisa_dp : Number(data.data.bayar) - data.data.dikirim
              this.kembali = `Sisa DP : ${this.$format(sisaDp)}`;
              this.input.total = this.$format(data.data.dikirim);
              this.input.bayar = this.$format(data.data.bayar);
              this.input.piutangRupiah = this.$format(sisaDp);
              this.input.piutang = sisaDp;
              this.input.pembayaran = "custom";
            }
          }
        }
      })
      .finally(() => {
        this.$emit("rebuild-data", false);
          setTimeout(() => {
            this.loadingItem = false;
          }, 1000)
      })
      .catch((err) => {
        console.log(err);
      });
    },

    updateQty(id, itemId) {
      this.showKembali = false;
      const newQty = this.input.qty;
      const itemsDetect = this.qtyDrafts
        .map((item) => item)
        .find((item) => item.id === itemId);

      const prepareData = {
        item_id: itemId,
        qty: newQty,
        last_qty: itemsDetect.last_qty,
      };

      if (newQty) {
        this.showDp = true
        this.updateItemPenjualan(id, prepareData);
        setTimeout(() => {
          this.showGantiQty = false;
          this.editingQtyId = null;
          this.showBayar = false;
          this.showEditQty = true;
          if(!this.isCheckedMultiple) {
            this.on_process = 'on';
          }
        }, 500);
      }
    },

    changeGantiQty(e, id, barang) {
      const newQty = e.target.value;
      if(e.key === 'Escape') {
         this.showGantiQty = false;
         this.input.qty = Number(barang.qty);
         barang.qty = this.initialQty;
         this.editingQtyId = null;
       } else if(e.key === 'Enter') {
        this.showGantiQty = false;
        this.input.qty = newQty;
        barang.qty = newQty;
        this.editingQtyId = null;
        this.updateQty(id, barang.id)
      } else {
        this.input.qty = Number(newQty);
      }
    },

    changeGantiOrderItemQty(e, id, barang) {
      const newQty = e.target.value;
      if(e.key === 'Escape') {
         this.showGantiOrderQty = false;
         this.input.qty = Number(barang.qty);
         barang.qty = this.initialOrderQty;
         this.editingOrderQtyId = null;
       } else if(e.key === 'Enter') {
        this.showGantiOrderQty = false;
        this.input.qty = newQty;
        barang.qty = newQty;
        this.editingOrderQtyId = null;
        this.updateItemQty(id, barang.id, barang)
      } else {
        this.input.qty = Number(newQty);
      }
    },

    changeGantiItemQty(e, id, barang) {
      const newQty = e.target.value;
      if(e.key === 'Escape') {
         this.showGantiQty = false;
         this.input.qty = Number(barang.qty);
         barang.qty = this.initialQty;
         this.editingQtyId = null;
       } else if(e.key === 'Enter') {
        this.showGantiQty = false;
        this.input.qty = newQty;
        barang.qty = newQty;
        this.editingQtyId = null;
        this.updateItemQty(id, barang.id, barang)
      } else {
        this.input.qty = Number(newQty);
      }
    },

    changeGantiHarga(e, id, barang) {
      const newHarga = e.target.value;
      if(e.key === 'Escape') {
        this.showGantiHarga = false
        this.input.harga = Number(this.initialHarga)
        barang.harga = this.initialHarga
        this.editingItemId = null
      } else if(e.key === 'Enter') {
        this.showGantiHarga = false
        this.input.harga = Number(newHarga)
        barang.harga = newHarga
        this.editingItemId = null
        this.updateItemHarga(id, barang.id, barang)
      } else {        
        this.input.harga = Number(newHarga);
      }
    },

    updateHarga(id, itemId, barang) {
      const newHarga = this.input.harga;
      const prepareData = {
        item_id: itemId,
        harga: newHarga,
      };
      if (newHarga) {
        this.updateItemHarga(id, itemId, barang)
        setTimeout(() => {
          this.showGantiHarga = false;
          this.editingItemId = null;
          this.showBayar = false;
          // this.checkSaldo();
        }, 500);
      }
    },

    updateOrderHarga(id, data) {
      console.log(data)
    },

    changeBayar(e) {
      this.loadingKembali = true;
      this.showKembali = true;
      this.bayarAction = true
      const numberResult = parseInt(this.input.total.replace(/[^0-9]/g, ""));
      const bayar = Number(e.target.value);
      const numBayar = Number(this.detail.jumlah) + bayar

      console.log(numBayar)
    
      if (numBayar >= this.detail.dikirim) {
        console.log("Kadie part1")
        const kembali = numBayar - numberResult;
        this.showDp = false;
        this.masukpiutang = false;
        this.input.pembayaran = "cash";
        this.input.piutang = 0;
        this.input.kembali = this.$format(kembali);
        // this.total = `Kembali : Rp. ${kembali}`;
        this.kembali = `Kembali : RP. ${kembali}`;
        this.input.kembaliRupiah = this.$format(kembali);
      } else {
        console.log("Kadie part2")
        const kembali = Math.abs(numBayar - numberResult);
        this.masukpiutang = true;
        this.piutangAfter = true;
        this.kembali = `Piutang : ${this.$format(kembali)}`;
        this.input.piutang = kembali;
        this.input.piutangRupiah = this.$format(kembali);
        this.input.total = this.$format(numberResult);
        this.input.bayar = this.$format(numBayar);
        this.input.pembayaran = "custom";
      }

      // if (this.showDp) {
      //   this.input.piutang = kembali;
      //   this.masukpiutang = true;
      //   this.kembali = `piutang : ${this.$format(kembali)}`;
      //   this.input.piutangRupiah = this.$format(kembali);
      // } else {
      //   this.input.piutang = 0;
      //   this.input.kembali = this.$format(kembali);
      //   // this.total = `Kembali : Rp. ${kembali}`;
      //   this.kembali = `Kembali : RP. ${kembali}`;
      //   this.input.kembaliRupiah = this.$format(kembali);
      //   this.masukpiutang = false;
      // }

      this.input.bayar = bayar;
      this.input.dikirim = bayar;

      this.generateTerbilang(numberResult);
      this.checkItemMultiInput()
      setTimeout(() => {
        this.modeBayar = false;
        this.editingItemId = null;
        this.loadingKembali = false;
        this.showBayarDaily = true;
        this.checkSaldo();
      }, 500);
    },

    clearQty(barang) {
      barang.qty = null;
    },

    clearHarga(barang) {
      barang.harga = null;
    },

    clearBayar() {
      this.input.bayar = null;
      this.input.bayarDp = null;
    },

    clearBayarOngkir() {
      this.input.ongkir = null
    },

    generateTempo(value) {
      switch (value) {
        case 0:
          this.input.pembayaran = "cash";
          break;

        case 7:
          this.input.pembayaran = "1 Minggu";
          break;

        case 14:
          this.input.pembayaran = "2 Minggu";
          break;

        case 21:
          this.input.pembayaran = "3 Minggu";
          break;

        case 28:
          this.input.pembayaran = "4 Minggu";
          break;
      }
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
      this.generatePembayaran(newValue.text);
    },

    changeStatusPengiriman(newValue) {
      if(newValue.text !== undefined) {
        this.input.status_kirim = newValue.text
      }
    },

    transformDataKasLists(rawData) {
      return rawData
        .filter((item) => item && item.kode)
        .map((item) => ({
          id: item.id,
          text: `${item.nama} - ${item.kode}`,
        }));
    },

    inputKeterangan(e) {
      this.input.keterangan = e.target.value;
    },

    changeKodeKas(newValues) {
      if (newValues && newValues.id !== undefined) {
        const kasId = Number(newValues.id);
        if (!isNaN(kasId)) {
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

    deletedBarangCarts(idItemPembelian) {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.loading = true
          this.loadingDelete = true;
          this.$nuxt.globalLoadingMessage = "Proses delete item P.O ...";

          this.selectedBarang = null;
          const endPoint = `/delete-item-penjualan-po/${idItemPembelian}`;
          const config = {
            headers: {
              Authorization: `Bearer ${this.token.token}`,
            },
          };

          this.$api
            .delete(endPoint, config)
            .then(({ data }) => {
              if (data.success) {
                // console.log(data)
                // this.items = this.items.filter(
                //   (item) => item.id !== idItemPembelian
                // );
                this.showGantiHarga = false;
                this.selectedBarang = null;
                this.masukpiutang = false;
                this.piutangAfter = false;
                this.showDp = true;
                this.input.total = this.$format(data.data.dikirim);
                this.input.bayarDp = this.$format(data.data.jumlah);
                this.input.piutangRupiah = this.$format(data.data.jumlah);
                this.input.piutang = this.$format(data.data.jumlah);
                this.input.sisaDp  = this.$format(data.data.jumlah);
              }
            })
            .finally(() => {
              this.loading = false;
              this.loadingDelete = false;
              this.$emit("rebuild-data", false);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    },

    async getKasData() {
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

    checkSaldo() {
      this.loadingSaldo = true;
      this.$nuxt.globalLoadingMessage = "Proses pengecekan saldo ...";
      this.options = "pembelian-langsung";
      const endPoint = `/check-saldo/${this.detail.kas_id}?entitas=${this.detail.jumlah}`;
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
            this.loadingSaldo = false;
          }
        })
        .finally(() => {
          this.loadingSaldo = false;
        })
        .catch((err) => {
          this.loadingSaldo = false;
          console.log(err);
        });
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

    updateStokBarang() {
      let endPoint, dataDraft;
      const config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${this.token.token}`,
        },
      };

      if(this.isCheckedMultiple) {

        endPoint = "/updated-stok-barang-po";

        let totalQty = this.orders.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.qty;
        }, 0);

        let qtyById = this.orders.reduce((accumulator, currentValue) => {
          const kode_barang = currentValue.kode_barang;
          accumulator[kode_barang] = (accumulator[kode_barang] || 0) + currentValue.qty;
          return accumulator;
        }, {});

        let newOrders = Object.entries(qtyById).map(([kode_barang, qty]) => ({
          kode_barang: kode_barang,
          qty: qty
        }));

        dataDraft = {
          type: "penjualan",
          kode: this.input.reference_code,
          barangs: newOrders
        };
      } else {
        endPoint = "/update-stok-barang-all";
        dataDraft = {
        type: "penjualan",
        kode: this.input.reference_code,
        barangs: this.qtyDrafts.map((item) => {
            return {
              id: item.id_barang,
              kode: item.kode,
              qty: this.input.qty,
              last_qty: null
            };
          }),
        };
      }

      this.$api
        .post(endPoint, dataDraft, config)
        .then(({ data }) => {
          if (data?.success) {
            this.draft = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    updatePenjualan(draft) {
      if(this.input.ongkir > 0) {
        this.loading = true;
        this.startPembelianSound = true;
        this.$nuxt.globalLoadingMessage = "Proses menyimpan data pembelian ...";

        const endPoint = `/data-penjualan-po/${this.id}`;
        const calculateBayar = Number(this.detail.jumlah) + Number(this.input.bayar);
        const prepareItem = {
          jumlah_saldo: Number(this.detail.jumlah),
          bayar: this.bayarAction ? calculateBayar : this.$format(this.detail.jumlah),
          ongkir: this.input.ongkir,
          bayarDpRp: this.input.bayarDp
          ? Number(this.input.bayarDp)
          : this.detail.bayar,
          dikirim: this.input.total
          ? this.input.total
          : this.detail.total,
          kode_kas: this.input.kode_kas
          ? this.input.kode_kas
          : this.detail.kode_kas,
          sisa_dp: this.bayarAction ? this.input.piutang : this.detail.jumlah - this.detail.dikirim,
          piutang: this.input.piutang,
          masuk_hutang: this.input.pembayaran !== "cash" ? true : false,
          jt: this.input.jatuhTempo,
          multiple_input: this.isCheckedMultiple ? 'True' : 'False',
          operator: this.$nuxt.userData.name,
          pelanggan: this.input.pelanggan
        };

        const config = {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${this.token.token}`,
          },
        };

        console.log(prepareItem)

        this.$api
        .put(endPoint, prepareItem, config)
        .then(({ data }) => {
          if (data?.error) {
            this.startPembelianSound = true;
            this.$swal({
              icon: "error",
              title: "Oops...",
              text: data.message,
            });
          }
          if (data?.success) {
            this.playSound = true;
            this.updateStokBarang();
            const ref_code = { ref_code: this.detail.kode };
            localStorage.removeItem("ref_code");
            localStorage.setItem("cetak_code", JSON.stringify(ref_code));
            this.$swal({
              position: "top-end",
              icon: "success",
              title: data?.message,
              showConfirmButton: false,
              timer: 1000,
            });
            this.draft = draft;

            setTimeout(() => {
              this.loading = false;
              this.on_process = 'off';
              const path = "/dashboard/transaksi/jual/penjualan-po/cetak";
              this.$router.push({
                path: path,
                query: {
                  kode:
                  this.input.reference_code !== null
                  ? this.input.reference_code
                  : this.detail.kode,
                },
              });
            }, 1500);
          }
        })
        .finally(() => {
          this.loading = false;
          this.$emit("rebuild-data", false);
        })
        .catch((err) => {
          this.startPembelianSound = true;
          this.loading = false;
        });
      } else {
        this.$swal({
          icon: "info",
          title: "Oops...",
          text: "Input biaya kirim terlebih dahulu !",
        });
      }
    },

    updateItemPenjualan(itemId, item) {
      this.loading = true
      this.loadingItem = true;
      this.$nuxt.globalLoadingMessage = "Proses menyimpan item quantity ...";

      const endPoint = `/data-item-penjualan/${itemId}`;
      const prepareItem = {
        item_id: item.item_id,
        qty: item.qty !== undefined ? item.qty : null,
        last_qty: item.last_qty !== undefined ? item.last_qty : null,
        harga: item.harga !== undefined ? item.harga : null,
        jt: this.input.jatuhTempo ? this.input.jatuhTempo : this.detail.tempo,
        stop_qty: !this.isCheckedMultiple ? "True" : "False"
      };

      const config = {
        headers: {
          Authorization: `Bearer ${this.token.token}`,
        },
      };

      this.$api
        .put(endPoint, prepareItem, config)
        .then(({ data }) => {
          if (data.success) {
            this.$emit("rebuild-data", false);
            this.showDeletedById = item.item_id;
            this.changeMultiInput = false;
            this.showBayarDaily = true;
            this.showKembali = true;
            this.orderItemId = data.orders.id;
            this.input.last_qty = item.qty;
            this.checkItemMultiInput();
            if (data.data.lunas === "True") {
              if (data.data.bayar < data.data.dikirim) {
                this.masukpiutang = true;
                this.modeBayar = true;
                this.kembali = `Piutang : ${this.$format(
                  Math.abs(data.data.bayar - Number(data.data.jumlah))
                )}`;
                this.input.piutang = Math.abs(
                  data.data.bayar - Number(data.data.jumlah)
                );
                this.input.piutangRupiah = this.$format(
                  Math.abs(data.data.bayar - Number(data.data.jumlah))
                );
                this.input.total = this.$format(data.data.dikirim);
                this.input.bayar = this.$format(data.data.bayar);
                this.input.pembayaran = "custom";
                this.showAddQty = false
              } else {
                const kembali =
                  Number(data.data.bayar) - Number(data.data.jumlah);
                this.input.kembaliRupiah = this.$format(kembali);
                this.kembali = `Kembali : ${this.$format(kembali)}`;
                this.input.total = this.$format(data.data.jumlah);
                this.input.bayar = this.$format(data.data.bayar);
                this.input.pembayaran = "cash";
              }
            } else {
              if(data.data.bayar < data.data.dikirim) {
                this.generateTerbilang(Number(data.data.dikirim))
                this.masukpiutang = true;
                this.modeBayar = true;
                this.showBayar = false;
                this.showDp = false;
                this.piutangAfter = true;
                this.kembali = `Piutang : ${this.$format(Math.abs(data.data.dikirim - Number(data.data.jumlah)))}`;
                this.input.piutang = data.data.dikirim - data.data.bayar;
                this.input.piutangRupiah = this.$format(data.data.dikirim - data.data.bayar)
                // this.input.bayar = this.$format(data.data.bayar)
                this.input.bayar = 0;
                this.input.total = this.$format(data.data.dikirim);
                this.input.pembayaran = "custom";
                this.input.bayarSisaDp = data.data.dikirim - data.data.bayar;
                this.showAddQty = false
              } else {                
                this.showKembali = true;
                const sisaDp = Number(data.data.jumlah) - data.data.dikirim
                this.kembali = `Sisa DP : ${this.$format(sisaDp)}`;
                this.input.total = this.$format(data.data.dikirim);
                this.input.bayar = this.$format(data.data.bayar);
                this.input.piutangRupiah = this.$format(sisaDp);
                this.input.piutang = sisaDp;
              }
            }
          }
        })
        .finally(() => {
          this.$emit("rebuild-data", false);
          setTimeout(() => {
            this.loading = false
            this.loadingItem = false;
          }, 1000)
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  computed: {
    token() {
      return this.$store.getters["auth/getAuthToken"];
    },
  },
};
</script>
