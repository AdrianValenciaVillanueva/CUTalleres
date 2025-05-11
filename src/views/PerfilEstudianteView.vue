<template>
  <HeaderComponent @toggle-menu="toggleMenu"></HeaderComponent>
  <MenuDesplegable v-if="menuVisible" ref="menu" :privilegios="setPrivilegios()"></MenuDesplegable>
  <div>
    <h1>Perfil del Estudiante</h1>
    <PerfilEstudiante />
  </div>
</template>

<script>
import PerfilEstudiante from '../components/PerfilEstudiante.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import MenuDesplegable from '@/components/MenuDesplegable/MenuDesplegable.vue';
import { ref, onMounted, onUnmounted, provide } from 'vue';
import router from '@/router';
import { getUsers, setPrivilegios } from '@/services/db-data.js'; // Asegúrate de que la ruta sea correcta

export default {
  components: {
    PerfilEstudiante,
    HeaderComponent,
    MenuDesplegable
  },
  setup() {
    const menuVisible = ref(false);
    const menu = ref(null);
    const users = ref([]); // Variable reactiva para almacenar los usuarios

    const toHome = () => {
      router.push({ name: 'home' });
    };

    const handleClickOutside = (event) => {
      // Verifica si el menú está visible y si el clic no fue dentro del menú ni en el botón de toggle
      if (
        menuVisible.value &&
        menu.value &&
        !event.target.closest('.menu-desplegable') &&
        !event.target.closest('#menuBt')
      ) {
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
    onMounted(async () => {
      document.addEventListener('click', handleClickOutside);

      try {
        // Llama a getUsers y almacena los datos en la variable reactiva
        const response = await getUsers();
        users.value = response;
        console.log('Usuarios cargados:', users.value);
      } catch (error) {
        console.error('Error al cargar los usuarios:', error);
      }
    });

    // Remover el event listener cuando el componente se desmonta
    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside);
    });

    return {
      menuVisible,
      menu,
      toggleMenu,
      setPrivilegios,
      users // Retorna la lista de usuarios para usarla si es necesario
    };
  }
};
</script>