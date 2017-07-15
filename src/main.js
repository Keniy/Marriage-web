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

axios.defaults.timeout = 1000 * 60;
var loadinginstance;
// http interceptor
axios.interceptors.request.use(config => {
	loadinginstance = ElementUI.Loading.service({fullscreen: true});
	return config;
}, error => {
	loadinginstance.close();
	ElementUI.Message.error({
		message: '加载超时'
	});
	return Promise.reject(error);
});

axios.interceptors.response.use(data => {
	loadinginstance.close();
	return data;
}, error => {
	loadinginstance.close();
	if(error.response) {
		switch (error.response.status) {
			case 401: {
				this.$router.push('/login');
				break;
			}
			case 403: {
				ElementUI.Message.error({
					message: '当前用户无此访问权限'
				});
				break;
			}
			case 500: {
				ElementUI.Message.error({
					message: '服务器内部错误' + error.response.data.message
				});
				break;
			}
			case 504: {
				ElementUI.Message.error({
					message: '网关连接超时' + error.response.data.message
				});
				break;
			}

		}
		
	}
	console.log(1111, error.response.status);
	
	return Promise.reject(error);
})
Vue.prototype.$axios = axios;

new Vue({
	router,
	render: j => j(App)
}).$mount('#app');
