import Vue from 'vue'
import App from './App.vue'
import router from './router' //向vue根实例注入VueRouter实例

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
