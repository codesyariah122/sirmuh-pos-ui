/**
 * @author: pujiermanto@gmail.com
 */

import axios from "axios";

export const strict = false;

export const state = () => ({
  api_url: process.env.NUXT_ENV_API_URL,
  totalUser: 0,
  userPerRole: {},
  userisonline: 0,
});

export const mutations = {
  TOTAL_DATA_USER(state, data) {
    state.totalUser = data;
  },
  TOTAL_USER_ONLINE(state, data) {
    state.userisonline = data;
  },
  USER_PER_ROLE(state, data) {
    state.userPerRole = data;
  },
};

export const actions = {
  totalUserOnline({ commit }, param) {
    const endPoint = `${param.api_url}/user-data`;
    this.$api
      .get(endPoint)
      .then(({ data }) => {
        commit("TOTAL_USER_ONLINE", data?.data);
      })
      .catch((err) => {
        console.error(err);
      });
  },

  totalDataQuery({ commit }, param) {
    const endPoint = `${param.api_url}/data-total?type=${param.type}`;
    this.$api
      .get(endPoint)
      .then(({ data }) => {
        switch (param.type) {
          case "TOTAL_USER":
            commit("TOTAL_DATA_USER", data?.total);
            commit("USER_PER_ROLE", data?.data);
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
};
