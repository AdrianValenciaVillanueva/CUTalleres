<template>
  <div class="detalle-taller">
    <header class="header">
      <div class="logo">
        <img src="@/assets/Cutalleres logo prototipo naranja-azul sin fondo 1.png" alt="CTalleres Logo" />
      </div>
      <div class="nav-links">
        <a href="#" class="nav-link">Lista de talleres</a>
        <div class="divider"></div>
        <a href="#" class="nav-link">Perfil <span class="dropdown-arrow">▾</span></a>
      </div>
    </header>

    <main class="main-content">
      <h1 class="titulo-taller">{{ taller.nombre }}</h1>

      <div class="imagen-taller">
        <p v-if="!taller.imagenCargada" class="placeholder-text">Agregar imagen del taller</p>
        <p v-else class="success-message">✔ Imagen cargada correctamente</p>
      </div>

      <section class="info-taller">
        <p><strong>Impartidor:</strong> {{ taller.impartidor }}</p>
        <p><strong>Correo:</strong> {{ taller.correo }}</p>
        <p><strong>Fecha de inicio:</strong> {{ taller.fechaInicio }}</p>
        <p><strong>Horario:</strong> {{ taller.horario }}</p>
        <p><strong>Descripción:</strong> {{ taller.descripcion }}</p>
      </section>

      <div class="boton-inscribirse">
        <button 
          class="inscribirse-btn" 
          @click="inscribirse"
          :disabled="cargando"
        >
          {{ cargando ? 'PROCESANDO...' : 'INSCRIBIRME ➜' }}
        </button>
      </div>
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
  name: 'DetalleTaller',
  data() {
    return {
      cargando: false,
      taller: {
        nombre: "Taller de Programación",
        impartidor: "Juan Pérez",
        correo: "juan.perez@example.com",
        fechaInicio: "2025-05-10",
        horario: "10:00 - 12:00",
        descripcion: "Aprende los fundamentos de programación con ejemplos prácticos.",
        imagenCargada: false
      }
    };
  },
  methods: {
    async inscribirse() {
      // Obtener ID del taller (asumiendo que está en la URL como /:id)
      const tallerId = this.$route?.params?.id || 1; // Si no hay ruta, usa 1 como ejemplo
      
      // Obtener código del alumno desde localStorage (debe guardarse al hacer login)
      const codigoAlumno = localStorage.getItem('codigoAlumno');
      
      if (!codigoAlumno) {
        alert('Debes iniciar sesión para inscribirte');
        return this.$router.push('/login'); // Redirigir al login si no está autenticado
      }

      this.cargando = true;
      try {
        const response = await axios.post(
          'http://localhost:3004/api/inscripciones',
          {
            Codigo_alumno: codigoAlumno,
            ID_taller: tallerId
          }
        );
        
        alert('¡Inscripción exitosa!');
        console.log('Respuesta del servidor:', response.data);
        
      } catch (error) {
        const mensajeError = error.response?.data?.message || 
                            'Error al inscribirse. Por favor, intenta más tarde.';
        alert(mensajeError);
        console.error('Error en la inscripción:', error);
      } finally {
        this.cargando = false;
      }
    }
  }
};
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
