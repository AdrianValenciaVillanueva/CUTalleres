<template>
    <header class="app-header">
        <img src="/src/assets/LogoUdg.png" alt="Logo Universidad de Guadalajara">
        <dark-mode-toggle></dark-mode-toggle>
      <nav>
        <ul>
            <li><RouterLink to="/" class="nav-element">Inicio</RouterLink></li>
            <li><RouterLink to="/login" class="nav-element">Login</RouterLink></li>
            <div class="profile-header">
            <h2>PERFIL DE USUARIO</h2>
            <div class="profile-actions">
              <button class="btn-edit">Editar</button>
              <button class="btn-logout" @click="logout">Salir</button>
            </div>
    </div>
        </ul>
    </nav> 
    
    </header>
  </template>
  
  <script>
    import { RouterLink } from 'vue-router';
    export default {
    name: 'HeaderComponent',
    components: {
        RouterLink
    },
    };
  </script>
  
  <style scoped>
  .app-header {
    background-color:var(--primary-color);
    color: var(--text-color);
    text-align: center;
    margin: 0;
    width: 100%;
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

  .nav-element {
    text-decoration: none;
    color: white;
  }
  img{
    width: 4rem;
    margin: 0;
    padding-left: 2rem;
    filter: invert(1);
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