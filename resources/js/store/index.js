import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        siteInfo: {},
    },
    mutations: {
        SITE_INFO: (state, data) => {
            state.siteInfo = data
        },
    },
    actions: {
        siteInfo({commit}, userData) {
            commit("SITE_INFO", userData);
        },
    },
})
export default store
