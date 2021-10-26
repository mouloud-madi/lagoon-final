import Vue from 'vue'
import Main from "./Main"
import router from "./routes"
import store from "./store";
import '../../node_modules/nprogress/nprogress.css'
import VueScrollactive from 'vue-scrollactive';
import * as VueGoogleMaps from 'vue2-google-maps'

store.dispatch('siteInfo', window.Laravel.siteInfo)
Vue.use(VueGoogleMaps, {
    load: {
        key: store.state.siteInfo.maps_key,
        libraries: 'places',
    },
})
Vue.use(VueScrollactive);
window.axios = require('axios')
axios.defaults.baseURL = '/api/';
window.axios.defaults.withCredentials = true;
axios.defaults.headers.common = {
    'Content-Type': "application/json",
    'Accept': "application/json",
    'X-Requested-With': "XMLHttpRequest",
}

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(Main)
});
