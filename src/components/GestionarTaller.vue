<template>
  <div class="talleres-app">
    <header class="header">
      <div class="logo-container">
        <img src="logo.png" alt="Talleres Logo" class="logo" />
      </div>
      <nav class="navigation">
        <a href="#" class="nav-link">Lista de talleres</a>
        <a href="#" class="nav-link dropdown">
          Mis talleres
          <span class="dropdown-arrow">▼</span>
        </a>
        <a href="#" class="nav-link dropdown">
          Perfil
          <span class="dropdown-arrow">▼</span>
        </a>
      </nav>
    </header>

    <main class="main-content">
      <section class="taller-management">
        <h1 class="management-title">GESTIÓN DEL TALLER</h1>
        <div class="taller-name">
          <h2>Nombre del taller</h2>
        </div>

        <div class="taller-content-area">
          <h3>Lista de alumnos</h3>
          <table class="alumnos-table">
  <thead>
    <tr>
      <th>Nombre completo</th>
      <th>Correo institucional</th>
      <th>Certificado</th>
    </tr>
  </thead>
  <tbody>
  <tr v-for="alumno in alumnos" :key="alumno.id">
    <td>{{ alumno.nombre }}</td>
    <td>{{ alumno.correo }}</td>
    <td>
      <input
        type="file"
        class="file-input-visible"
        @change="handleFileUpload($event, alumno.id)"
      />
    </td>
  </tr>
</tbody>
</table>
          <button class="btn-finalizar">Terminar Taller</button>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'TalleresApp',
  data() {
    return {
      alumnos: [] // Se llenará dinámicamente
    };
  },
  methods: {
    handleFileUpload(event, alumnoId) {
      const file = event.target.files[0];
      if (file) {
        // Aquí puedes implementar la lógica para enviar el archivo a un backend
        console.log(`Archivo subido para alumno ID ${alumnoId}:`, file.name);
      }
    }
  }
}
</script>

<style scoped>
.talleres-app {
  font-family: Arial, sans-serif;
  max-width: 100%;
  margin: 0;
  padding: 0;
}

.header {
  display: flex;
  align-items: center;
  background-color: #f8f8f8;
  padding: 10px 20px;
  border-bottom: 1px solid #e0e0e0;
}

.logo {
  height: 40px;
}

.navigation {
  display: flex;
  margin-left: auto;
}

.nav-link {
  margin-left: 20px;
  text-decoration: none;
  color: #333;
  font-size: 16px;
}

.dropdown {
  display: flex;
  align-items: center;
}

.dropdown-arrow {
  font-size: 10px;
  margin-left: 5px;
}

.main-content {
  padding: 20px;
}

.taller-management {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.management-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
}

.taller-name {
  font-size: 18px;
  margin-bottom: 20px;
}

.taller-content-area {
  width: 90%;
  background-color: #e9e9e9;
  border-radius: 6px;
  padding: 20px;
}

.alumnos-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.alumnos-table th,
.alumnos-table td {
  border: 1px solid #000;
  padding: 8px;
  text-align: center;
}

.btn-finalizar {
  background-color: #6fef6f;
  color: #000;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
}

.upload-label {
  display: inline-block;
  background-color: #dcdcdc;
  border: 1px solid #aaa;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
}

.file-input {
  display: none;
}
</style>

