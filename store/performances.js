/**
 * @author: pujiermanto@gmail.com
 */
export const strict = false;

export const state = () => ({
  topSellings: [],
});

export const mutations = {
  TOP_SELLING_PRODUCTS(state, data) {
    state.topSellings = data;
  },
};

export const actions = {
  topSellingProducts({ commit }, param) {
    const endPoint = `${param.api_url}/penjualan-terbaik`;
    const config = {
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${param.token.token}`,
        'Sirmuh-Key': param.app_token
      },
    };
    this.$api
      .get(endPoint, config)
      .then(({ data }) => {
        commit("TOP_SELLING_PRODUCTS", data);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};

export const getters = {
  getTopSellingProducts(state) {
    return state.topSellings;
  },
};
