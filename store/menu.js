/**
 * @author: pujiermanto@gmail.com
 * @globals: method reusable for any component and any source
 */

export const strict = false;
export const state = () => ({
  menus: {},
  dataMenus: [],
});

export const mutations = {
  USER_MENU(state, data) {
    state.token = sessionStorage.setItem(
      "menus",
      JSON.stringify({ menus: data })
    );
  },
  GET_MENU(state, key) {
    const storedMenus = sessionStorage.getItem(key);
    state.dataMenus = _.size(storedMenus)
      ? JSON.parse(storedMenus).menus
      : null;
  },
};

export const actions = {
  storeUserMenu({ commit }, data) {
    commit("USER_MENU", data);
  },
  storeGetUserMenu({ commit }, key) {
    commit("GET_MENU", key);
  },
};

export const getters = {
  getUserMenus(state) {
    return state.dataMenus;
  },
};
