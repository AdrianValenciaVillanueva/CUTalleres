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
            <tr v-for="taller in talleresInscritos" :key="taller.ID_inscripcion">
              <td>
                <div class="workshop-name">
                  <!-- Imagen comentada -->
                  <!-- <img :src="getImagenTaller(taller.nombre)" :alt="taller.nombre" class="workshop-icon" /> -->
                  <span>{{ taller.nombre }}</span>
                </div>
              </td>
              <td>{{ taller.impartidor }}</td>
              <td>{{ formatFecha(taller.fecha_inicio) }}</td>
              <td>
                <span :class="['estado', taller.estado.toLowerCase()]">
                  {{ taller.estado }}
                </span>
              </td>
              <td>
                <button v-if="taller.estado === 'Terminado'" class="download-btn" @click="descargarCertificado(taller.ID_taller)">
                  Descargar
                </button>
                <span v-else>No disponible</span>
              </td>
            </tr>
            <tr v-if="talleresInscritos.length === 0 && !cargando">
              <td colspan="5" class="no-data">No estás inscrito en ningún taller</td>
            </tr>
            <tr v-if="cargando">
              <td colspan="5" class="loading">Cargando talleres...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UserProfile',
  data() {
    return {
      talleresInscritos: [],
      cargando: false
    };
  },
  created() {
    this.cargarTalleresInscritos();
  },
  methods: {
    async cargarTalleresInscritos() {
      this.cargando = true;
      try {
        const codigoAlumno = localStorage.getItem('codigoAlumno') || '219499804';
        const response = await axios.get(`http://localhost:3004/api/inscripciones/alumno/${codigoAlumno}`);
        this.talleresInscritos = response.data;
      } catch (error) {
        console.error('Error al cargar talleres:', error);
        this.talleresInscritos = [];
      } finally {
        this.cargando = false;
      }
    },
    formatFecha(fecha) {
      if (!fecha) return 'Sin fecha';
      const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(fecha).toLocaleDateString('es-MX', opciones);
    },
    async descargarCertificado(codigoAlumno) {
      try {
        const response = await axios.get(`http://localhost:3004/api/certificados/descargar/${codigoAlumno}`, {
          responseType: 'blob' // Importante para manejar archivos binarios
        });

        // Crear un enlace para descargar el archivo
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `certificado_${codigoAlumno}.pdf`); // Nombre del archivo
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        alert('Certificado descargado exitosamente.');
      } catch (error) {
        console.error('Error al descargar el certificado:', error);
        alert('Hubo un error al descargar el certificado. Por favor, intenta más tarde.');
      }
    }
  }
};
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

.no-data {
  text-align: center;
  font-style: italic;
  color: #999;
}

.loading {
  text-align: center;
  font-style: italic;
  color: #007bff;
}
</style>