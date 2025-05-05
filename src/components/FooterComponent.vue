<template>
    <footer class="app-footer">
      <p>&copy; CUTalleres</p>
      <p>Universidad de Guadalajara</p>
      <p>Centro Universitario de Tonala </p>
    </footer>
  </template>
  
  <script>
    import { RouterLink } from 'vue-router';

    export default {
    name: 'FooterComponent',
    components: {
        RouterLink,
    },
};
  </script>
  
  <style scoped>
  .app-footer {
    background-color:var(--primary-color);
    color: #fff;
    padding : 0;
    text-align: center;
    justify-content: center;
    position: fixed; /* Para fijar el footer */
    bottom: 0;
    left: 0;
    width: 100%;
    height: 7vh;
    border-top: 1px solid var(--color-3);
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    /* Estilos adicionales para tu footer */
  }

  p{
    margin: 0;
    padding: 0;
    font-size: .7rem;
    color: #fff;
  }
  </style>