<template>
  <div class="menu-desplegable">
    <div class="rectangle"></div>
    <div class="frame">
      <img src="@/assets/CutalleresLogoDark.svg" alt="Logo" class="logo" />
    </div>
    <router-link to="/profile" class="menu-item">
      <div class="menu-item">
        <img class="vector" src="@/assets/vector-5.svg" />
        <div class="text-wrapper">Página principal</div>
      </div>
    </router-link>
    <router-link to="/studentProfile">
      <div class="menu-item">
        <img class="img" src="@/assets/vector-4.svg" />
        <div class="text-wrapper">Perfil</div>
      </div>
    </router-link>
    <RouterLink to="/selectTaller">
      <div class="menu-item">
        <img class="vector-2" src="@/assets/vector-3.svg" />
        <div class="text-wrapper">Talleres</div>
      </div>
    </RouterLink>
    <div v-if="privilegios" class="menu-item">
      <img class="vector-3" src="@/assets/vector.svg" />
      <div class="text-wrapper">Gestionar talleres</div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import './style.css';
export default {
  name: 'MenuDesplegable',
};
</script>