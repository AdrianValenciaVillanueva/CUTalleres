<template>
      <AdminInicio />
</template>
  
  <script>
  // Importar el componente correctamente
  import AdminInicio from '../../components/AdminInicio.vue'
  
  export default {
    name: 'AdminHome',
    components: {
      AdminInicio
    }
  };
  </script>
  
  <style>
  #app {
    font-family: Arial, sans-serif;
    padding: 20px;
  }
  
  /* Animación de desvanecimiento */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  
  /* Animación de deslizamiento */
  .slide-enter-active, .slide-leave-active {
    transition: transform 0.5s ease-in-out, opacity 0.5s;
  }
  .slide-enter {
    transform: translateX(100%);
    opacity: 0;
  }
  .slide-leave-to {
    transform: translateX(-100%);
    opacity: 0;
  }
  </style>
  