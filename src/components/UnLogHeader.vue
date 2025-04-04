<template>
    <header class="app-header">
        <div></div>
        <a href="https://www.udg.mx/es"><img src="/src/assets/LogoUdg.png" alt="Logo Universidad de Guadalajara"></a>
        <dark-mode-toggle></dark-mode-toggle>
    
    </header>
  </template>
  
  <script>
    import { RouterLink } from 'vue-router';
    export default {
    name: 'UnLogHeader',
    components: {
        RouterLink
    },
    };

  </script>
  
  <style scoped>

  @keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-5px); }
    100% { transform: translateX(0); }
  }

  .app-header {
    background-color:var(--primary-color);
    color: var(--text-color);
    text-align: center;
    margin: 0;
    width: 100%;
    height: 7vh;
    padding: .5rem 0;
    display: flex;
    flex-direction: row;
    flex-wrap: space-between;
    justify-content: space-between;
    border-bottom: 1px solid var(--color-3);
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    /* Estilos adicionales para tu header */
  }
  img{
    width: 5vh;
    margin: 0;
    padding-left: 4rem;
    filter: invert(1);
  }

  img:hover{
    animation: shake 0.5s ease-in-out;
  }

  ul{
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
  }

  li{
    padding: 1rem;
  }

  nav{
    display: flex;
    flex-direction: row;
  }
  </style>