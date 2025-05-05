<template>
  <HeaderComponent></HeaderComponent>
    <div>
      <h1></h1>
      <SeleccionarTaller />
    </div>
  </template>
  
  <script>
  import SeleccionarTaller from '../components/SeleccionarTaller.vue'
  import HeaderComponent from '../components/HeaderComponent.vue'
  
  export default {
    components: { 
      SeleccionarTaller,
      HeaderComponent,
     }
  }
  </script>
  