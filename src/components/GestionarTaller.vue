<template>
  <div class="talleres-app">
    <header class="header">
      <div class="logo">
        <img src="@/assets/Cutalleres logo prototipo naranja-azul sin fondo 1.png" alt="CTalleres Logo" />
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
          <h2>{{ taller.nombre }}</h2>
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
                  <input type="file" @change="handleFileUpload($event, alumno.id)" />
                  <span v-if="alumno.certificado" class="success-message">✔ Certificado subido</span>
                </td>
              </tr>
            </tbody>
          </table>
          <button class="btn-finalizar" @click="finalizarTaller">Terminar Taller</button>
        </div>
      </section>
    </main>

    <footer class="footer">
      <p>© CUTalleres</p>
      <p>Universidad de Guadalajara - Centro Universitario de Tonalá</p>
    </footer>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TalleresApp',
  data() {
    return {
      taller: {
        nombre: "Taller de Desarrollo Web"
      },
      alumnos: [
        { id: 1, nombre: "Ana López", correo: "ana.lopez@udg.mx", certificado: false },
        { id: 2, nombre: "Carlos Ramírez", correo: "carlos.ramirez@udg.mx", certificado: false }
      ]
    };
  },
  methods: {
    async handleFileUpload(event, idInscripcion) {
      const file = event.target.files[0]; // Obtener el archivo seleccionado

      if (!file) {
        alert('Por favor selecciona un archivo.');
        return;
      }

      if (file.type !== 'application/pdf') {
        alert('Solo se permiten archivos PDF.');
        return;
      }

      const formData = new FormData();
      formData.append('pdf', file); // Coincidir con el nombre esperado por multer

      try {
        // Realizar la solicitud POST al backend
        const response = await axios.post(`http://localhost:3004/api/certificaciones/subir/${idInscripcion}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        alert('Certificado subido exitosamente.');
        console.log(response.data); // Opcional: manejar la respuesta del backend

        // Actualizar el estado del alumno
        this.alumnos.find(alumno => alumno.id === idInscripcion).certificado = true;
      } catch (error) {
        console.error('Error al subir el certificado:', error);
        alert('Hubo un error al subir el certificado.');
      }
    },
    finalizarTaller() {
      alert("El taller ha sido finalizado.");
    }
  }
};
</script>

<style scoped>
.talleres-app {
  font-family: 'Poppins', sans-serif;
  background-color: #f0fff0;
  color: #333;
  min-height: 100vh;
  padding: 20px;
}

.header {
  background-color: #4caf50;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-radius: 8px;
}

.logo img {
  height: 35px;
}

.navigation {
  display: flex;
  margin-left: auto;
}

.nav-link {
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin: 0 15px;
}

.main-content {
  max-width: 900px;
  margin: auto;
  padding: 20px;
}

.taller-management {
  text-align: center;
}

.management-title {
  font-size: 28px;
  font-weight: bold;
  color: #2e7d32;
}

.taller-name {
  font-size: 22px;
  margin-bottom: 15px;
}

.taller-content-area {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
}

.alumnos-table {
  width: 100%;
  border-collapse: collapse;
}

.alumnos-table th,
.alumnos-table td {
  border: 1px solid #ddd;
  padding: 10px;
}

.success-message {
  color: green;
  font-weight: bold;
}

.btn-finalizar {
  background-color: #2e7d32;
  color: white;
  font-size: 18px;
  padding: 10px 40px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-finalizar:hover {
  background-color: #1b5e20;
}

.footer {
  text-align: center;
  background-color: #2e7d32;
  color: white;
  padding: 10px 0;
  font-size: 14px;
  font-weight: bold;
  margin-top: 40px;
}
</style>

