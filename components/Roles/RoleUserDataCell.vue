<template>
  <tbody>
    <tr v-for="column in columns" :key="column.id">
      <td
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
      >
        {{ column.name }}
      </td>

      <td
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
      >
        {{ column.total_user }}
      </td>

      <td
        v-if="column.token !== token.token"
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
      >
        <div v-if="types === 'data-role-management'">
          <dropdowns-table-dropdown
            v-if="roleId === 1"
            @deleted-data="deletedData"
            @restored-data="restoredData"
            :id="column.id"
            :types="types"
            :param="column.name.toLowerCase()"
            :paging="paging"
            cellType="data"
            :role="roleId"
            :queryData="column.name.toLowerCase()"
            :parentRoute="parentRoute"
            :typeRoute="typeRoute"
            queryMiddle="data-role-management"
            queryType="DATA_ROLE_MANAGEMENT"
          />
        </div>
        <div v-else>
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
            queryMiddle="data-role-management"
            queryType="DATA_ROLE_USER"
          />
        </div>
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
            console.log(this.roleId);
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
