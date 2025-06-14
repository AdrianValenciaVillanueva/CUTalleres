import { createApp } from 'vue'
import { forEach } from 'lodash';
import axios from 'axios';
import App from './App.vue'
import router from './router'
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import LogoComponent from './components/CutalleresLogo.vue';
import DarkModeToggle from './components/DarkModeToggle.vue';
import UnLogHeader from './components/UnLogHeader.vue';
import SeleccionTaller from './components/SeleccionarTaller.vue';
import MenuDesplegable from './components/MenuDesplegable/MenuDesplegable.vue';
import './router/root.css';

const app = createApp(App);

app.component('header-component', HeaderComponent);
app.component('footer-component', FooterComponent);
app.component('logo-component', LogoComponent);
app.component('dark-mode-toggle', DarkModeToggle);
app.component('unlog-header', UnLogHeader);
app.component('menu-desplegable', MenuDesplegable);

app.use(router).mount('#app');

