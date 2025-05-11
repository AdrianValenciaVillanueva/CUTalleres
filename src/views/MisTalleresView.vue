<template>
  <HeaderComponent @toggle-menu="toggleMenu"></HeaderComponent>
  <MenuDesplegable v-if="menuVisible" ref="menu" :privilegios="setPrivilegios()"></MenuDesplegable>
  <div>
    <MisTalleres />
  </div>
</template>

<script>
import MisTalleres from '../components/MisTalleres.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import MenuDesplegable from '@/components/MenuDesplegable/MenuDesplegable.vue';
import { ref, provide } from 'vue';

export default {
  components: {
    MisTalleres,
    HeaderComponent,
    MenuDesplegable
  },
  setup() {
    const menuVisible = ref(false);

    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };

    provide('closeMenu', () => {
      menuVisible.value = false;
    });

    return {
      menuVisible,
      toggleMenu
    };
  }
};
</script>
