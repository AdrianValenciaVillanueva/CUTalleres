<template>
    <div class="detalle-taller">
      <header class="header">
        <div class="logo">
          <img src="@/assets/logo.png" alt="CTalleres Logo" />
        </div>
        <div class="nav-links">
          <a href="#" class="nav-link">Lista de talleres</a>
          <div class="divider"></div>
          <a href="#" class="nav-link">Perfil <span class="dropdown-arrow">▾</span></a>
        </div>
      </header>
  
      <main class="main-content">
        <h1 class="titulo-taller">NOMBRE DEL TALLER</h1>
        <div class="imagen-taller">Imagen del taller</div>
  
        <section class="info-taller">
          <p><strong>Impartidor:</strong> Nombre de quien lo imparte</p>
          <p><strong>Correo del impartidor:</strong> Correo de quien imparte el taller</p>
          <p><strong>Fecha de inicio:</strong> Fecha en formato DATE</p>
          <p><strong>Horario:</strong> El horario del taller en formato TIME</p>
          <p><strong>Descripción:</strong> Descripción del taller</p>
        </section>
  
        <div class="boton-inscribirse">
          <button class="inscribirse-btn">INSCRIBIRME ➜</button>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DetalleTaller',
  }
  </script>
  
  <style scoped>
  .detalle-taller {
    font-family: Arial, sans-serif;
    background: #fff;
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
    width: 1px;
    height: 20px;
    background-color: black;
    margin: 0 10px;
  }
  
  .dropdown-arrow {
    font-size: 12px;
  }
  
  .main-content {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .titulo-taller {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
  
  .imagen-taller {
    background-color: #ddd;
    height: 100px;
    margin: 15px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .info-taller {
    background-color: #f4f4f4;
    padding: 15px;
    border-radius: 4px;
  }
  
  .boton-inscribirse {
    margin: 20px 0;
    text-align: center;
  }
  
  .inscribirse-btn {
    background-color: #7cfc00;
    color: black;
    padding: 10px 30px;
    font-size: 16px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
  }
  </style>
  