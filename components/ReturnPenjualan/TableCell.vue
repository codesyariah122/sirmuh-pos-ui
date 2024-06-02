<template>
  <tbody>
    <tr v-for="(column, idx) in columns" :key="idx">
      <th class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2 border-b-2">
        {{ $moment(column.tanggal).format("L") }}
      </th>

      <th class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2 border-b-2">
        <span
        class="bg-blue-100 me-2 px-2.5 py-0.5 text-blue-800 rounded  border border-blue-400"
        >
        {{ column.kode }}
      </span>
    </th>

    <td class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2 border-b-2">
      <span v-if="column.kembali === 'True'" class="bg-green-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded border border-green-400">
        {{ 'Return Diterima'}}
      </span>
      <div v-else>
        <div class="flex items-center p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50" role="alert">
          <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>
          <span class="sr-only">Info</span>
          <div>
            <span class="font-medium">Warning alert!</span> Silahkan ubah status terima return penjualan.
          </div>
        </div>
        <Select2 
        v-model="selectedKirim"
        :settings="{
          allowClear: true,
          dropdownCss: { top: 'auto', bottom: 'auto' },
        }"
        :options="[
          { id: null, text: 'Status Return' },
          ...sendReturns,
          ]"
          @change="changeStatusReturn($event, column)"
          @select="changeStatusReturn($event, column)"
          placeholder="Ubah Status Return"
          />
        </div>
      </td>

      <td class="whitespace-nowrap p-8 text-lg border-l-2 border-r-2 border-b-2 text-right">
        {{$format(column?.jumlah)}}
      </td>

      <td class="p-8 text-lg border-l-2 border-r-2 border-b-2 font-semibold text-italic">
        {{column.alasan}}
      </td>

      <td class="whitespace-nowrap p-8 text-lg border-l-2 border-r-2 border-b-2">
        <span class="bg-purple-100  text-purple-800 font-bold me-2 px-2.5 py-0.5 rounded border border-purple-400">
          {{ column.operator }}
        </span>
      </td>

      <td
      v-if="column.token !== token.token && column.name !== 'VICKY ANDRIANI'"
      class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2 border-b-2"
      >
      <dropdowns-table-dropdown
      @deleted-data="deletedData"
      @restored-data="restoredData"
      :id="column.id_penjualan"
      :types="types"
      :pembelianType="pembelianType"
      :param="column.id"
      :paging="paging"
      cellType="transaksi"
      :role="roleId"
      :queryData="column.kode"
      :parentRoute="parentRoute"
      :paramData="{kembali: column.kembali, return: column.return}"
      :typeRoute="typeRoute"
      cetakTitle="returnPenjualan"
      queryMiddle="return-penjualan"
      queryType="RETURN_PENJUALAN"
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
    pembelianType: {
      type: String
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
      groupedData: [],
      selectedTerima: null,
      sendReturns: [
        { id: "TERIMA", text: "TERIMA RETURN" },
        ]
    };
  },

  beforeMount() {
    this.authTokenStorage();
  },

  mounted() {
    this.groupData();
    this.checkUserLogin();
  },

  methods: {
    generateLunas(data) {
      let icon;
      if (data.lunas == "True" && data.visa !== "HUTANG") {
        icon = `<i class="fa-solid fa-check fa-lg text-emerald-600"></i>`;
      } else {
        icon = '<i class="fa-solid fa-circle-minus text-red-600 fa-lg"></i>';
      }
      return icon;
    },
    
    changeStatusReturn(newValue, item) {
      if(newValue.id === "TERIMA") {
        this.selectedTerima = newValue.id
        this.returnPenjualan(item)
      } else {
        this.selectedTerima = null
      }
    },

    returnPenjualan(item) {
      this.loading = true
      const preparedetail = {
        penjualan_id: item.id_penjualan,
        kas_id: item.kas_id,
        kode_barang: item.kode_barang,
        item_qty: item.qty,
        item_harga: item.harga,
        item_subtotal: item.jumlah,
        alasan: item.alasan
      }

      const endPoint = `/data-return-penjualan/${preparedetail.penjualan_id}`

      const config = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token.token}`,
        },
      }

      console.log(endPoint)
      console.log(preparedetail)

      this.$api
      .put(endPoint, preparedetail, config)
      .then(({data}) => {
        if(data.error) {
          this.$swal({
            icon: "error",
            title: "Oops...",
            text: data.message,
          });
          this.loading = false
        }

        if(data.success) {
          localStorage.setItem("cetak_code", JSON.stringify(data?.data));
          this.$swal({
            position: "top-end",
            icon: "success",
            title: data?.message,
            showConfirmButton: false,
            timer: 1500,
          });
          this.success = true;
          this.messageAlert = data?.message;

          this.$emit('rebuild-data', false);

          setTimeout(() => {
            this.loadingReturn = false;
            const path = "/dashboard/transaksi/return-penjualan/cetak";
            this.$router.push({
              path: path,
              query: {
                kode: data.data,
              },
            });
          }, 1500);
        }
      })
      .catch(err => {
        this.loading  = false
        this.validations = err.response.data
      })
    },

    deletedData(id) {
      this.$emit("deleted-data", id);
    },

    restoredData(id) {
      this.$emit("restored-data", id);
    },

    groupData() {
      const grouped = {};
      this.columns.forEach((column) => {
        if (!grouped[column.kode]) {
          grouped[column.kode] = [];
        }
        grouped[column.kode].push(column);
      });

      this.groupedData = Object.values(grouped);
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
