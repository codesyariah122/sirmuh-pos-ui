<template>
  <tbody>
    <tr v-for="column in columns" :key="column.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-lg">
      <th
        class="w-12 p-4 text-left"
        style="width: 50px"
      >
        {{ column.kode }}
      </th>

      <td
        class="whitespace-nowrap p-4"
      >
        {{ column.nama }}
      </td>

      <td
        v-if="column.photo !== null"
        class="whitespace-nowrap p-4"
      >
        <div class="flex justify-center">
          <div>
            <img :src="`${image_url}/${column.photo}`" class="w-[600px]" />
          </div>
        </div>
        <div class="flex justify-center mt-2">
          <div>
            <button
              @click="redirectUpload(column.id, 'edit-gambar')"
              type="button"
              class="px-3 py-2 font-medium text-center text-white bg-emerald-600 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-blue-800"
            >
              <i class="fa-solid fa-pen-to-square"></i>&nbsp; Edit Gambar
            </button>
          </div>
        </div>
      </td>

      <td
        v-else
        class="whitespace-nowrap p-4"
      >
        <div class="flex justify-center">
          <div>
            <img
              :src="require('~/assets/img/default.jpg')"
              alt="default image product if no photo product"
            />
          </div>
        </div>
        <div class="flex justify-center mt-2">
          <div>
            <button
              @click="redirectUpload(column.id, 'upload-gambar')"
              type="button"
              class="px-3 py-2 font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
            >
              <i class="fa-solid fa-plus"></i> &nbsp; Upload Gambar
            </button>
          </div>
        </div>
      </td>

      <td
        class="whitespace-nowrap p-4"
      >
        {{
          $moment(column.tgl_terakhir).locale("id").format("dddd, D MMMM YYYY")
        }}
      </td>

      <td
        class="whitespace-nowrap p-4"
      >
        <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
          {{ column.kategori }}
        </span>
      </td>

      <td
        class="whitespace-nowrap p-4"
      >
        {{ column.satuanbeli }}
      </td>

      <td
        class="whitespace-nowrap p-4"
      >
        {{ column.satuan }}
      </td>

      <td
        class="whitespace-nowrap p-4"
      >
        {{ $roundup(column.isi) }}
      </td>

      <td
        class="whitespace-nowrap p-4"
      >
        {{ $roundup(column.stok) }}
      </td>

      <td
        class="whitespace-nowrap p-4"
      >
        {{ $format(column.hpp) }}
      </td>

      <td
        class="whitespace-nowrap p-4"
      >
        {{ $format(column.harga_toko) }}
      </td>

      <td
        class="whitespace-nowrap p-4"
      >
        {{ $roundup(column.diskon) }}%
      </td>

      <td
        class="whitespace-nowrap p-4"
      >
        {{
          column?.suppliers && column?.suppliers[0]?.nama
            ? column?.suppliers[0]?.nama
            : column.supplier
        }}
      </td>

      <td
        class="whitespace-nowrap p-4"
      >
        <img
          :src="`${image_url}/qrcodes/${column.barcode}.png`"
          class="w-[600px]"
        />
      </td>

      <td
        class="whitespace-nowrap p-4"
      >
        {{
          column.expired !== null
            ? $moment(column.expired).locale("id").format("dddd, D MMMM")
            : "-"
        }}
      </td>

      <td
        v-if="column.token !== token.token && column.name !== 'VICKY ANDRIANI'"
        class="whitespace-nowrap p-4 text-left"
      >
        <dropdowns-table-dropdown
          @deleted-data="deletedData"
          @restored-data="restoredData"
          :id="column.id"
          :types="types"
          :param="column.id"
          :paging="paging"
          cellType="data"
          :role="roleId"
          :queryData="column.kode"
          :parentRoute="parentRoute"
          :typeRoute="typeRoute"
          queryMiddle="data-barang"
          queryType="DATA_BARANG"
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
        return {}; // or any other appropriate default value
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
    };
  },

  beforeMount() {
    this.authTokenStorage();
  },

  mounted() {
    this.checkUserLogin();
  },

  methods: {
    redirectUpload(id, type) {
      this.$router.push({
        path: `/dashboard/${this.parentRoute}/${this.typeRoute}/data-barang/upload/${id}`,
        query: {
          type: type,
          current: this.paging.current,
        },
      });
    },
    deletedData(id) {
      this.$emit("deleted-data", id);
    },

    restoredData(id) {
      this.$emit("restored-data", id);
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
