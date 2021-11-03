import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        siteInfo: {},
        section: {},
    },
    mutations: {
        SITE_INFO: (state, data) => {
            state.siteInfo = data
        },
        SECTION: (state, data) => {
            state.section = data
        },
    },
    actions: {
        siteInfo({commit}, userData) {
            commit("SITE_INFO", userData);
        },
        section({commit}, data) {
            commit("SECTION", data);
        },
    },
})
export default store
