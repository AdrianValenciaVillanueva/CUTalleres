<template>
  <div class="profile-container">
    <!-- Header -->
    <header class="header">
      <div class="logo">
        <img src="@/assets/Cutalleres logo prototipo naranja-azul sin fondo 1.png" alt="CTalleres Logo" />
      </div>
      <div class="nav-links">
        <a href="#" class="nav-link">Lista de talleres</a>
        <div class="divider"></div>
        <a href="#" class="nav-link">Perfil <span class="dropdown-arrow">▼</span></a>
      </div>
    </header>

    
    <main class="content">
      
      <h1 class="section-title">PERFIL DE USUARIO</h1>
      
      <div class="user-info">
        
        <div class="info-row">
          <div class="info-group">
            <h3 class="info-label">Código UDG:</h3>
            <p class="info-value">219499804</p>
          </div>
          
          <div class="info-group">
            <h3 class="info-label">Correo institucional</h3>
            <p class="info-value">
              <a href="mailto:salvador.robles4998@gmail.com" class="email-link">salvador.robles4998@gmail.com</a>
            </p>
          </div>
          
          <div class="info-group">
            <h3 class="info-label">Fecha de Nacimiento:</h3>
            <p class="info-value">12/07/2004</p>
          </div>
        </div>
        
        
        <div class="info-row">
          <div class="info-group">
            <h3 class="info-label">Sexo:</h3>
            <p class="info-value">Masculino</p>
          </div>
          
          <div class="info-group">
            <h3 class="info-label">Nombre Completo:</h3>
            <p class="info-value">Salvador Robles Casillas</p>
          </div>
          
          <div class="info-group">
            <h3 class="info-label">Rol:</h3>
            <p class="info-value">Estudiante:</p>
          </div>
        </div>
      </div>
      
     
      <h1 class="section-title">TALLERES INSCRITOS</h1>
      
      <div class="table-container">
        <table class="workshops-table">
          <thead>
            <tr>
              <th>Nombre del taller</th>
              <th>Tutor</th>
              <th>Fecha de emisión</th>
              <th>Estado</th>
              <th>Certificado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="workshop-name">
                  <img src="C:\Users\pablo\proyectokratos\src\assets\Group.png" alt="Futbol" class="workshop-icon" />
                  <span>Futbol</span>
                </div>
              </td>
              <td>Chucho Benítez</td>
              <td>12/marzo/2024</td>
              <td>Terminado</td>
              <td>
                <button class="download-btn">Descargar</button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="workshop-name">
                  <img src="C:\Users\pablo\proyectokratos\src\assets\Group.png" alt="Pintura" class="workshop-icon" />
                  <span>Pintura</span>
                </div>
              </td>
              <td>Gerarda Castañeda</td>
              <td>10/02/2025</td>
              <td>Activo</td>
              <td>No disponible</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
}
</script>

<style scoped>
.profile-container {
  font-family: Arial, sans-serif;
  border: 1px solid #ccc;
  max-width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: white;
}

/* Header Styles */
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

/* Content Styles */
.content {
  padding: 0 0 40px 0;
}

.section-title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin: 30px 0;
  text-transform: uppercase;
}


.user-info {
  margin: 0 100px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}

.info-group {
  width: 33%;
  text-align: center;
}

.info-label {
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 16px;
}

.info-value {
  margin: 0;
  font-size: 16px;
}

.email-link {
  color: black;
  text-decoration: underline;
}


.table-container {
  margin: 0 100px;
}

.workshops-table {
  width: 100%;
  border-collapse: collapse;
}

.workshops-table th,
.workshops-table td {
  border: 1px solid black;
  padding: 10px;
  text-align: left;
}

.workshop-name {
  display: flex;
  align-items: center;
}

.workshop-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.download-btn {
  background-color: #999;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 3px;
}
</style>