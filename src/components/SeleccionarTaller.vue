<template>
    <div class="seleccion-taller-container">
     
      <header class="header">
        <div class="logo">
          <img src="@/assets/logo.png" alt="CTalleres Logo" />
        </div>
        <div class="nav-links">
          <a href="#" class="nav-link">Lista de talleres</a>
          <div class="divider"></div>
          <a href="#" class="nav-link">Mis talleres <span class="dropdown-arrow">▾</span></a>
          <div class="divider"></div>
          <a href="#" class="nav-link">Perfil <span class="dropdown-arrow">▾</span></a>
        </div>
      </header>
  
      
      <main class="content">
        <h1 class="section-title">SELECCION DE TALLER</h1>
        
        <div class="taller-cards-container">
          
          <div class="taller-card">
            <div class="taller-info">
              <h2 class="taller-name">Nombre del taller</h2>
              <p class="taller-horario">Horario</p>
            </div>
            <div class="taller-image-placeholder">
              <p>Imagen de fondo</p>
            </div>
            <div class="taller-action">
              <button class="gestionar-button">Gestionar</button>
            </div>
          </div>
  
         
          <div class="taller-card">
            <div class="taller-info">
              <h2 class="taller-name">Nombre del taller</h2>
              <p class="taller-horario">Horario</p>
            </div>
            <div class="taller-image-placeholder">
              <p>Imagen de fondo</p>
            </div>
            <div class="taller-action">
              <button class="gestionar-button">Gestionar</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SeleccionTaller',
  }
  </script>
  
  <style scoped>
  .seleccion-taller-container {
    font-family: Arial, sans-serif;
    border: 1px solid #ccc;
    max-width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: white;
    min-height: 100vh;
  }
  
  
  .header {
    background-color: #e6e6e6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    border-bottom: 1px solid #ccc;
  }
  
  .logo img {
    height: 30px;
  }
  
  .nav-links {
    display: flex;
    align-items: center;
  }
  
  .nav-link {
    text-decoration: none;
    color: black;
    font-size: 16px;
  }
  
  .divider {
    height: 20px;
    width: 1px;
    background-color: black;
    margin: 0 10px;
  }
  
  .dropdown-arrow {
    font-size: 12px;
  }

  .content {
    padding: 0 0 40px 0;
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .section-title {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin: 30px 0;
    text-transform: uppercase;
  }
  
 
  .taller-cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-start;
    padding: 0 20px;
  }
  
  
  .taller-card {
    background-color: #e0e0e0;
    width: 180px;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  
  .taller-info {
    padding: 10px;
  }
  
  .taller-name {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
  }
  
  .taller-horario {
    margin: 5px 0 0;
    font-size: 14px;
  }
  
  .taller-image-placeholder {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #555;
  }
  
  .taller-action {
    padding: 10px;
    display: flex;
    justify-content: center;
  }
  
  .gestionar-button {
    background-color: #7cfc00; /* Bright green */
    color: black;
    border: none;
    padding: 5px 15px;
    font-size: 14px;
    border-radius: 15px;
    cursor: pointer;
  }
  </style>