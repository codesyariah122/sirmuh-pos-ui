import Vue from "vue";
import VueLodash from "vue-lodash";
import lodash from "lodash";

Vue.use(VueLodash, { name: "$_", lodash });

Vue.prototype.$lodash = lodash;
