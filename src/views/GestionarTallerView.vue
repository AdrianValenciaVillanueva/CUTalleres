<template>
  <HeaderComponent></HeaderComponent>
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