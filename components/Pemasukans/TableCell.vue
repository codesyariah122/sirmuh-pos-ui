<template>
    <tbody>
        <tr v-for="column in columns" :key="column.id" class="border-b-2 border-t-2">
            <th class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2 border-b-2 border-t-2 text-left">
                {{ $moment(column.tanggal).format("L") }}
            </th>
            <th class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2 border-b-2 border-t-2 text-left">
                <span class="bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded  border border-blue-400">
                    {{ column.kode }}
                </span>
            </th>
            <td class="border-t-0 px-8 align-middle  text-lg border-l-2 border-r-2 border-b-2 border-t-2 whitespace-nowrap p-4">
                <span class="bg-gray-100 text-gray-800 font-medium me-2 px-2.5 py-0.5 rounded border border-gray-500">
                    {{ column.jenispelanggan }}
                </span>
            </td>
            
            <td class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2 border-b-2 border-t-2">
                <span class="bg-green-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded border border-green-400">
                   {{column.nama_kas}}({{column.kode_kas}})
               </span>
           </td>

           <td class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2 border-b-2 border-t-2 text-right">
            {{ $format(column.jumlah) }}
        </td>
        <td class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2 border-b-2 border-t-2">
            <span class="bg-purple-100 text-purple-800 font-bold me-2 px-2.5 py-0.5 rounded border border-purple-400">
              {{ column.operator }}
          </span>
      </td>
      <td v-if="column.token !== token.token && column.name !== 'VICKY ANDRIANI'"
      class="border-t-0 align-middle text-lg border-l-2 border-r-2 border-b-2 border-t-2 whitespace-nowrap p-4 text-left">
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
      queryMiddle="pemasukan"
      queryType="DATA_PEMASUKAN" 
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
