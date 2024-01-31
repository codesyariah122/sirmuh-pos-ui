<template>
  <tbody>
    <tr v-for="(column, idx) in columns" :key="idx">
      <th class="border-t-0 px-6 border-l-0 border-r-0 text-sm p-8 text-left">
        {{ column.nama_barang }}
      </th>

      <th class="border-t-0 px-6 border-l-0 border-r-0 text-sm p-8 text-left">
        {{ column.kode }}
      </th>

      <td class="whitespace-nowrap p-8 text-sm">
        {{ column.nama_supplier }}
      </td>

      <td class="whitespace-nowrap p-8 text-sm">
        {{ column.alamat_supplier }}
      </td>

      <td class="whitespace-nowrap p-8 text-sm">
        {{ column.kode_kas }}
      </td>

      <td class="whitespace-nowrap p-8 text-sm">
        {{ $roundup(column.qty) }}
      </td>

      <td class="whitespace-nowrap p-8 text-sm">
        {{ column.satuan_barang }}
      </td>

      <td class="whitespace-nowrap p-8 text-sm">
        {{ $format(column.jumlah) }}
      </td>

      <td class="whitespace-nowrap p-8 text-sm">
        <span
          v-html="generateLunas({ lunas: column.lunas, visa: column.visa })"
        ></span>
      </td>

      <td class="whitespace-nowrap p-8 text-sm">
        {{ $format(column.hutang) }}
      </td>

      <td class="whitespace-nowrap p-8 text-sm">
        <span v-if="$roundup(column.jt) > 0">
          {{ $roundup(column.jt) }} Hari
        </span>
        <span v-else> 0 </span>
      </td>

      <td class="whitespace-nowrap p-8 text-sm">
        <blockquote>
          {{ column?.keterangan !== "undefined" ? column.keterangan : "-" }}
        </blockquote>
      </td>

      <td class="whitespace-nowrap p-8 text-sm">
        {{ column.operator }}
      </td>

      <td
        v-if="column.token !== token.token && column.name !== 'VICKY ANDRIANI'"
        class="whitespace-nowrap p-8 text-sm"
      >
        <dropdowns-table-dropdown
          @deleted-data="deletedData"
          @restored-data="restoredData"
          :id="column.id"
          :types="types"
          :param="column.id"
          :paging="paging"
          cellType="cetak"
          :role="roleId"
          :queryData="column.kode"
          :parentRoute="parentRoute"
          :typeRoute="typeRoute"
          cetakTitle="Pembelian"
          queryMiddle="pembelian-langsung"
          queryType="PEMBELIAN_LANGSUNG"
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
      groupedData: [],
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
      if (data.lunas && data.visa !== "HUTANG") {
        icon = `<i class="fa-solid fa-check fa-2xl text-emerald-600"></i>`;
      } else {
        icon = '<i class="fa-solid fa-xmark fa-2xl text-red-600"></i>';
      }
      return icon;
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
