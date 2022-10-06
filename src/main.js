import App from './App.vue';
import { createApp } from 'vue';
import { router } from './router';
import './assets/less/common.less';

createApp(App).use(router).mount('#app');