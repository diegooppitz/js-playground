import { createApp } from 'vue';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import App from './App.vue';
import router from './router';
import './styles/main.scss';

createApp(App)
  .use(router)
  .use(Toast, { timeout: 5000 })
  .mount('#app');
