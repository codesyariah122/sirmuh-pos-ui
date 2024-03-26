<template>
    <tbody>
        <tr v-for="column in columns" :key="column.id">
            <td class="p-4 text-lg text-left">
                {{ column.name }}
            </td>
            <td class="border-t-0 px-8 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">
                <img :src="`${image_url}/tokos/${column.logo}`" class="w-[600px]" />
            </td>
            <td class="border-t-0 px-8 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">
                <img :src="`${image_url}/tokos/${column.banner}`" class="w-[600px]" />
            </td>
            <td class="border-t-0 px-8 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">
                {{ column.phone }}
            </td>
            <td class="border-t-0 px-8 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">
                {{ column.email }}
            </td>
            <td class="border-t-0 px-8 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">
                {{ column.address }}
            </td>
            <td class="border-t-0 px-8 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">
                {{ column.about }}
            </td>
            <td class="border-t-0 px-8 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">
                {{ column.kota }}
            </td>
            <td class="border-t-0 px-8 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">
                {{ column.provinsi }}
            </td>
            <td class="border-t-0 px-8 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">
                {{ column.negara }}
            </td>
            <td class="border-t-0 px-8 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">
                {{ column.koordinat }}
            </td>
            <td class="border-t-0 px-8 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">
                {{ column.npwp }}
            </td>
            <td class="border-t-0 px-8 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">
                {{ column.nppkp }}
            </td>
            <td class="border-t-0 px-8 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">
                {{ column.kode_lokasi }}
            </td>
            <td v-if="column.token !== token.token && column.name !== 'VICKY ANDRIANI'"
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-left">
                <dropdowns-table-dropdown 
                    @deleted-data="deletedData" 
                    @restored-data="restoredData" :id="column.id"
                    :types="types" 
                    :param="column.id" 
                    :paging="paging" 
                    cellType="data" 
                    :role="roleId"
                    :queryData="column.kode" 
                    :parentRoute="parentRoute" 
                    :typeRoute="typeRoute" 
                    queryMiddle="perusahaan"
                    queryType="DATA_PERUSAHAAN"
                    detailUrl="/dashboard/master/barang/barang-by-suppliers"
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
  