<template>
  <HeaderComponent @toggle-menu="toggleMenu"></HeaderComponent>
  <MenuDesplegable v-if="menuVisible" ref="menu" :privilegios="setPrivilegios()"></MenuDesplegable>
  <div>
    <h1></h1>
    <SeleccionarTaller />
  </div>
</template>

<script>
import SeleccionarTaller from '../components/SeleccionarTaller.vue'
import HeaderComponent from '../components/HeaderComponent.vue'
import MenuDesplegable from '@/components/MenuDesplegable/MenuDesplegable.vue';
import { ref, onMounted, onUnmounted, provide } from 'vue';
import router from '@/router';
import { setPrivilegios } from '@/services/db-data.js'; // Asegúrate de que la ruta sea correcta

export default {
  components: { 
    SeleccionarTaller,
    HeaderComponent,
    MenuDesplegable
  },
  setup() {
    const menuVisible = ref(false);
    const menu = ref(null);

    // const setPrivilegios = () => {
    //   const userData = JSON.parse(localStorage.getItem('user'));
    //   const rol = userData.rol;
    //   if(rol ==='tallerista'){
    //     return true;
    //   }
    //   else{
    //     return false;
    //   }
    //   return false;
    // };

    const toHome = () => {
      router.push({ name: 'home' });
    };

    const handleClickOutside = (event) => {
      // Verifica si el menú está visible y si el clic no fue dentro del menú ni en el botón de toggle
      if (menuVisible.value && menu.value && 
          !event.target.closest('.menu-desplegable') && 
          !event.target.closest('#menuBt')) {
        menuVisible.value = false;
      }
    };

    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };

    const closeMenu = () => {
      menuVisible.value = false;
    };

    // Provee la función para cerrar el menú
    provide('closeMenu', closeMenu);

    // Agregar el event listener cuando el componente se monta
    onMounted(() => {
      document.addEventListener('click', handleClickOutside);
    });

    // Remover el event listener cuando el componente se desmonta
    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside);
    });

    return {
      menuVisible,
      toggleMenu,
      menu,
      toHome,
      setPrivilegios,
    };
  }
}
</script>
