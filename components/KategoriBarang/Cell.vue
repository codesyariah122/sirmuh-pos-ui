<template>
  <tbody>
    <tr v-for="column in columns" :key="column.id">
      <th
      class="border-t-0 px-6 border-l-0 border-r-0 text-xs w-12 p-4 text-left"
      style="width: 50px"
      >
      {{ column.kode }}
    </th>

    <td
    class="border-t-0 px-8 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
    >
    {{ column.description ? column.description : "null" }}
  </td>

  <td
  v-if="column.token !== token.token && column.name !== 'VICKY ANDRIANI'"
  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
  >
  <dropdowns-table-dropdown
  @deleted-data="deletedData"
  @restored-data="restoredData"
  :id="column.kode"
  :types="types"
  cellType="trash"
  />
</td>
</tr>
</tbody>
</template>

<script>
  export default {
    props: {
      columns: {
        type: Array,
      default: function () {
        return {}; // or any other appropriate default value
      },
    },
    types: {
      type: String,
    },
  },

  data() {
    return {
      image_url: process.env.NUXT_ENV_STORAGE_URL,
      userData: [],
      name: "",
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
