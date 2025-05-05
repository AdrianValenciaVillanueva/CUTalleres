<template>
<HeaderComponent></HeaderComponent>
    <div>
      <h1></h1>
      <PerfilEstudiante />
    </div>
  </template>
  
  <script>
  import PerfilEstudiante from '../components/PerfilEstudiante.vue'
  import HeaderComponent from '../components/HeaderComponent.vue'
  
  export default {
    components: { 
      PerfilEstudiante,
      HeaderComponent,

     }
  }
  </script>
  