import { createApp, h } from 'vue';
import { createInertiaApp, Link, Head } from '@inertiajs/vue3';
import { SnackbarService, Vue3Snackbar } from 'vue3-snackbar';
import 'vue3-snackbar/styles';
import '../css/app.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true });
    return pages[`./Pages/${name}.vue`];
  },
  setup({ el, App, props, plugin }) {
    const vueApp = createApp({ render: () => h(App, props) })
      .component('Link', Link)
      .component('Head', Head)
      .component('vue3-snackbar', Vue3Snackbar)
      .use(plugin)
      .use(SnackbarService);

    vueApp.mount(el);

    AOS.init({
      once: true,
      duration: 800,
      easing: 'ease-out',
    });
  },
  title: title => `${title} - Faraimunashe`,
});
