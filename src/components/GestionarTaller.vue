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

.success-message {
  color: green;
  font-weight: bold;
}
</style>

