<!-- src/views/CrearTallerView.vue -->
<template>
  <HeaderComponent></HeaderComponent>
    <div>
      <h1></h1>
      <CrearTaller />
    </div>
  </template>
  
  <script>
  import CrearTaller from '../components/CrearTaller.vue'
  import HeaderComponent from '../components/HeaderComponent.vue'
  
  export default {
    components: {
      CrearTaller,
      HeaderComponent,
    }
  }
  </script>
  