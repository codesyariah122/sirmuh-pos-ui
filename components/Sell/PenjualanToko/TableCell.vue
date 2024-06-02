<template>
  <tbody>
    <tr v-for="(column, idx) in columns" :key="idx" class="border-b border-gray-200 text-lg border-l-2 border-r-2">
      <th class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2">
        {{ $moment(column.tanggal).format("L") }}
      </th>

      <th
      class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2"
      >
      <div class="flex justify-between space-x-12">
        <div>
          <span class="bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded  border border-blue-400">
            {{ column.kode }}
          </span>
        </div>

      </div>
    </th>

    <td
    class="border-t-0 px-6 align-middle  whitespace-nowrap p-4 text-center"
    >
    <span v-html="generateLunas(column.lunas)"></span>
  </td>

  <td v-if="column.lunas === 'True'" class="px-6 align-middle  text-lg border-l-2 border-r-2 whitespace-nowrap p-4">
    <span v-if="column.receive === 'True'" :class="`
    ${
      column.status === 'DIKIRIM' ? 'bg-green-100 text-green-800 text-lg border-l-2 border-r-2 font-medium me-2 px-2.5 py-0.5 rounded border border-green-400' : column.status === 'BELUM DIKIRIM' ? 'bg-yellow-100 text-yellow-800 text-lg border-l-2 border-r-2 font-medium me-2 px-2.5 py-0.5 rounded  border border-yellow-400' : 'bg-red-100 text-red-800 text-lg border-l-2 border-r-2 font-medium me-2 px-2.5 py-0.5 rounded border border-red-400`'
    }`
    ">
    {{column.status}}
  </span>
  <div v-else class="grid-cols-4 w-36">            
    <div>
      <Select2
      v-model="column.status"
      :settings="{
        allowClear: true,
        dropdownCss: { top: 'auto', bottom: 'auto' },
      }"
      :options="[
        { id: null, text: 'Status Pengiriman' },
        ...deliver_status,
        ]"
        @change="changeStatusPengiriman($event, column.id)"
        @select="changeStatusPengiriman($event, column.id)"
        placeholder="Ubah Status Pengiriman"
        />
      </div>
    </div>
  </td>

  <td v-else class="px-6 align-middle  text-lg border-l-2 border-r-2 whitespace-nowrap p-4">
    <span class="bg-red-100 text-red-800 text-lg border-l-2 border-r-2 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">
      {{column.status}}
    </span>
  </td>

  <td
  class="px-6 align-middle text-lg border-l-2 border-r-2 whitespace-nowrap p-4 text-center"
  >
  <span v-if="column.return === 'True'" class="bg-pink-100 text-pink-800 text-lg border-l-2 border-r-2 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">Di Return</span>
  <span v-else>-</span>
</td>

<td
class="px-6 align-middle  whitespace-nowrap p-4 text-lg border-l-2 border-r-2"
>
<span class="bg-blue-100 text-blue-800 font-medium me-2 px-2.5 py-0.5 rounded  border border-blue-400">
  {{column.nama_pelanggan}}
</span>
</td>

<td
class="px-6 align-middle  text-lg border-l-2 border-r-2 whitespace-nowrap p-4 text-right"
>
{{ column.diskon > 0 ? parseFloat(column.bayar) === 0 ? $format(column.jumlah) : $format(column.bayar) : $format(column.jumlah) }}
</td>

<td
class="px-6 align-middle  text-lg border-l-2 border-r-2 whitespace-nowrap p-4 text-right"
>
{{ column?.diskon > 0 ? $format(column.diskon) : '-' }}
</td>

<td
class="px-6 align-middle  whitespace-nowrap p-4"
>
<span class="bg-purple-100 text-purple-800 font-bold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">
  {{ column.operator }}
</span>
</td>

<td
v-if="column.token !== token.token && column.name !== 'VICKY ANDRIANI'"
class="p-4 text-lg border-l-2 border-r-2"
>
<dropdowns-table-dropdown
@deleted-data="deletedData"
@restored-data="restoredData"
:id="column.id"
:types="types"
:param="column.id"
:paging="paging"
cellType="transaksi"
:role="roleId"
:queryData="column.kode"
:parentRoute="parentRoute"
:paramData="{lunas: column.lunas, piutang: column.piutang, stop_qty: column.stop_qty, return: column.return, receive:column.receive}"
:typeRoute="typeRoute"
cetakTitle="Penjualan"
queryMiddle="penjualan-toko"
queryType="PENJUALAN_TOKO"
/>
</td>
</tr>
</tbody>
</template>

<script>
  export default {
    props: {
      columns: {
        type: [Array, Object],
      default: function () {
        return {};
      },
    },
    parentRoute: {
      type: String,
    default: null,
    },
    typeRoute: {
      type: String,
    default: null,
    },
    types: {
      type: String,
    },
    paging: {
      type: [Array, Object],
    default: function () {
        return {}; // or any other appropriate default value
      },
    },
  },

  data() {
    return {
      image_url: process.env.NUXT_ENV_STORAGE_URL,
      userData: [],
      name: "",
      roleId: null,
      status_kirim: null,
      deliver_status: [
        { id: "DIKIRIM", text: "DIKIRIM" },
        { id: "PROSES", text: "PROSES" },
        { id: "PENDING", text: "PENDING" }
        ]
    };
  },

  beforeMount() {
    this.authTokenStorage();
  },

  mounted() {
    this.checkUserLogin();
  },

  methods: {
    generateLunas(data) {
      return data === "True" || data === 1
      ? `<i class="fa-solid fa-check fa-lg text-emerald-600"></i>`
      : '<i class="fa-solid fa-circle-minus text-red-600 fa-lg"></i>';
    },

    deletedData(id) {
      this.$emit("deleted-data", id);
    },

    restoredData(id) {
      this.$emit("restored-data", id);
    },

    changeStatusPengiriman(newValue, id) {
      if(newValue.text !== undefined) {
        const status_kirim = newValue.text

        const endPoint = `/status-kirim/${id}`;
        const config = {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${this.token.token}`,
          },
        };

        const prepareItem = {
          status_kirim: status_kirim
        }

        this.$api
        .put(endPoint, prepareItem, config)
        .then(({ data }) => {
          if (data?.error) {
            this.startPenjualanSound = true;
            this.$swal({
              icon: "error",
              title: "Oops...",
              text: data.message,
            });
          }
          if (data?.success) {
            this.startPenjualanSound = true;
            this.$swal({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            })
            this.$emit("rebuild-data", {}, false);
          }
        })
        .finally(() => {
          this.loading = false;
          this.$emit("rebuild-data", {});
        })
        .catch((err) => {
          this.loading = false;
          this.$swal({
            icon: "error",
            title: "Oops...",
            text: "Terjadi kesalahan saat update data 😱",
          });
        });
      }
    },

    checkUserLogin() {
      if (this.$_.isObject(this.token)) {
        const endPoint = `${this.api_url}/user-data`;
        const config = {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${this?.token?.token}`,
            "Content-Type": "application/json",
            "Sirmuh-Key": process.env.NUXT_ENV_APP_TOKEN,
          },
        };
        this.$api
        .get(endPoint, config)
        .then(({ data }) => {
          this.userData = data?.data;
          this.name = data?.data?.name;
          this.roleId = data?.data?.role;
        })
        .catch((err) => {
          console.log(err);
        });
      } else {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Error Access!",
        });
        this.$router.replace("/");
      }
    },
  },

  computed: {
    token() {
      return this.$store.getters["auth/getAuthToken"];
    },
  },
};
</script>
