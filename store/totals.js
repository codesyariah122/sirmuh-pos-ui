/**
 * @author: pujiermanto@gmail.com
 */
export const strict = false;

export const state = () => ({
  api_url: process.env.NUXT_ENV_API_URL,
  totalUser: 0,
  totalBarang: 0,
});

export const mutations = {
  TOTAL_DATA_USER(state, data) {
    state.totalUser = data;
  },
  TOTAL_DATA_BARANG(state, data) {
    state.totalBarang = data;
  },
};

export const actions = {
  totalDataQuery({ commit }, param) {
    const endPoint = `${param.api_url}/data-total?type=${param.type}`;
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${param.token.token}`,
      },
    };
    this.$api
      .get(endPoint, config)
      .then(({ data }) => {
        switch (param.type) {
          case "TOTAL_USER":
            commit("TOTAL_DATA_USER", data);
            break;
          case "TOTAL_BARANG":
            commit("TOTAL_DATA_BARANG", data);
            break;

          default:
            console.log("No Param Type");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  },
};

export const getters = {
  getTotalUser(state) {
    return state.totalUser;
  },
  getTotalBarang(state) {
    return state.totalBarang;
  },
};
