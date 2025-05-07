<template>
  <HeaderComponent @toggle-menu="toggleMenu"></HeaderComponent>
  <MenuDesplegable v-if="menuVisible" ref="menu" @rt-home="to-home"></MenuDesplegable>
  <div>
    <h1></h1>
    <GestionarTaller />
  </div>
</template>

<script>
import GestionarTaller from '../components/GestionarTaller.vue'
import HeaderComponent from '../components/HeaderComponent.vue'

export default {
  components: {
    GestionarTaller,
    HeaderComponent,
  }
}
</script>