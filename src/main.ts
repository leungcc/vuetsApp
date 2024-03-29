import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUi from 'element-ui';
import '@/base/css/base.scss';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false;
Vue.use(ElementUi);


new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
