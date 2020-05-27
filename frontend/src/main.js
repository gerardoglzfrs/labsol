import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import vueAxios from "vue-axios"
import vuetify from './plugins/vuetify'
import { apolloClient } from './graphql/apollo';
import VueApollo from 'vue-apollo'

Vue.use(vueAxios,axios)
Vue.use(VueApollo)

Vue.config.productionTip = false

//axios.defaults.baseURL = "http://127.0.0.1:3000/"
axios.defaults.baseURL = "http://187.237.158.13/"


axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${localStorage.getItem('token')}` 

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

new Vue({
  router,
  store,
  vuetify,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
