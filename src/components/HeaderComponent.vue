<template>
  <link rel="stylesheet" href="/src/components/menuStyle.css">
    <header class="app-header">
        <div class="right">
          <a href="https://www.udg.mx/es"><img src="/src/assets/LogoUdg.png" alt="Logo Universidad de Guadalajara"></a>
          <!-- From Uiverse.io by ArturCodeCraft --> 
          <div class="background">
            <button class="menu__icon" @click="toggleMenu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>        </div>
        
        <dark-mode-toggle></dark-mode-toggle>
    
    </header>
  </template>
  
  <script>
    import { RouterLink } from 'vue-router';

    export default {
      name: 'HeaderComponent',
      components: {
        RouterLink,
      },
      methods: {
        toggleMenu() {
          if (this.$refs.floatMenu) {
            this.$refs.floatMenu.toggleMenu(); // Llama al método del menú flotante
          }
        },
      },
    };
  </script>
  
  <style scoped>
  .app-header {
    position: relative; /* Necesario para que el menú flotante se posicione correctamente */
    background-color: var(--primary-color);
    color: var(--text-color);
    text-align: center;
    margin: 0;
    width: 100%;
    height: 7vh;
    padding: 0.5rem 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid var(--color-3);
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
  }

  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 30%;
    height: 100%; /* Asegura que ocupe toda la altura del header */
    position: relative; /* Necesario para que `sticky` funcione en los hijos */
    overflow-y: hidden; /* Evita que el contenido desborde */
  }

  img{
    width: 5vh;
    margin: 0 1.5rem;
    filter: invert(1);
  }

  img:hover{
    animation: shake 0.5s ease-in-out;
  }

  .nav-options {
    display: flex;
    justify-content: center;
    align-items: flex-end; /* Alinea los elementos al final del contenedor */
    max-width: 30%;
    height: 100%; /* Asegura que ocupe toda la altura del header */
    position: relative; /* Necesario para que `sticky` funcione en los hijos */
    overflow-y: hidden; /* Evita que el contenido desborde */
  }

  ul {
    list-style-type: none;
    display: flex;
    gap: 2rem;
    margin: 0;
    padding: 0;
    position: sticky;
    bottom: 0; /* Se pega al borde inferior del contenedor padre */
    z-index: 10; /* Asegura que esté por encima de otros elementos */
    background-color: var(--primary-color); /* Fondo para evitar superposición visual */
  }

  li{
    position:sticky;
    bottom: 0;
  }

  
  </style>