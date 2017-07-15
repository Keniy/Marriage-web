// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios';
import '../static/css/theme-green/index.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUI);
Vue.prototype.$axios = axios;

new Vue({
	router,
	render: j => j(App)
}).$mount('#app');
