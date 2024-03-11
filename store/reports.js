/**
 * @author: pujiermanto@gmail.com
 */
export const strict = false;

export const state = () => ({
  payableReports: [],
});

export const mutations = {
  ACCOUNTS_PAYABLE_REPORT(state, data) {
    state.payableReports = data;
  },
};

export const actions = {
  accountsPayableReport({ commit }, param) {
    const endPoint = `${param.api_url}/laporan-utangpiutang-pelanggan`;
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${param.token.token}`,
        'Sirmuh-Key': param.app_token
      },
    };
    this.$api
      .get(endPoint, config)
      .then(({ data }) => {
        commit("ACCOUNTS_PAYABLE_REPORT", data);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};

export const getters = {
  getAccountsPayableReport(state) {
    return state.payableReports;
  },
};
