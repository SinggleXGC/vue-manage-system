import Vue from 'vue'
import App from './App.vue'
import router from  './router';

// 引入 Element UI
import ElementUI from 'element-ui';
// 单独引入样式文件
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false;

// 执行 ElementUI
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
