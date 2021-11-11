import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        siteInfo: {},
        section: {},
        lang: 'en',
    },
    mutations: {
        SITE_INFO: (state, data) => {
            state.siteInfo = data
        },
        SECTION: (state, data) => {
            state.section = data
        },
        LANG: (state, data) => {
            state.lang = data
        },
    },
    actions: {
        siteInfo({commit}, userData) {
            commit("SITE_INFO", userData);
        },
        section({commit}, data) {
            commit("SECTION", data);
        },
        lang({commit}, data) {
            commit("LANG", data);
        },
    },
})
export default store
