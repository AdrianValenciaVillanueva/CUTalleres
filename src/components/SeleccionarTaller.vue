<template>
  <div class="seleccion-taller-container">
    <main class="content">
      <h1 class="section-title">SELECCION DE TALLER</h1>

      <div class="taller-cards-container">
        <TallerCard v-for="taller in talleres" :key="taller.id" :taller="taller"
          @seleccionarTaller="mostrarTallerInfo" />

        <!-- TallerInfoCard flotante -->
        <div v-if="tallerSeleccionado" class="taller-info-overlay" @click.self="cerrarTallerInfo">
          <TallerInfoCard :taller="tallerSeleccionado" class="taller-info-card" />
        </div>

      </div>
    </main>
  </div>
</template>

<script>
import TallerCard from './TallerCard.vue';
import TallerInfoCard from './TallerInfoCard.vue';
import { ref } from 'vue';
export default {
  name: 'SeleccionTaller',
  components: {
    TallerCard,
    TallerInfoCard
  },
  setup() {
    const talleres = ref([
      {
        id: 1,
        nombre: 'Taller de Programación',
        horario: 'Lunes y Miércoles 10:00 - 12:00',
        descripcion: 'Aprende a programar desde cero con ejercicios prácticos.',
        diaInicio: '01/06/2025',
        tallerista: 'Juan Pérez',
        imagen: 'https://via.placeholder.com/150',
        comentarios: [
          { id: 1, usuario: 'Ana', texto: 'Excelente taller, aprendí mucho.' },
          { id: 2, usuario: 'Luis', texto: 'Muy recomendado.' }
        ]
      },
      {
        id: 2,
        nombre: 'Taller de Diseño Gráfico',
        horario: 'Martes y Jueves 14:00 - 16:00',
        descripcion: 'Explora las herramientas de diseño gráfico más populares.',
        diaInicio: '02/06/2025',
        tallerista: 'Ana López',
        imagen: 'https://via.placeholder.com/150',
        comentarios: [
          { id: 1, usuario: 'Carlos', texto: 'Me encantó el enfoque práctico.' }
        ]
      },
      {
        id: 3,
        nombre: 'Taller de Fotografía',
        horario: 'Viernes 09:00 - 11:00',
        descripcion: 'Domina las técnicas básicas de fotografía.',
        diaInicio: '03/06/2025',
        tallerista: 'Carlos Gómez',
        imagen: 'https://via.placeholder.com/150',
        comentarios: []
      },
      {
        id: 4,
        nombre: 'Taller de Cocina',
        horario: 'Sábados 10:00 - 12:00',
        descripcion: 'Aprende a cocinar platos deliciosos y saludables.',
        diaInicio: '04/06/2025',
        tallerista: 'María Fernández',
        imagen: 'https://via.placeholder.com/150',
        comentarios: [
          { id: 1, usuario: 'Laura', texto: 'Las recetas son fáciles de seguir.' }
        ]
      },
      {
        id: 5,
        nombre: 'Taller de Música',
        horario: 'Domingos 11:00 - 13:00',
        descripcion: 'Descubre los fundamentos de la música y aprende a tocar instrumentos.',
        diaInicio: '05/06/2025',
        tallerista: 'Pedro Martínez',
        imagen: 'https://via.placeholder.com/150',
        comentarios: []
      },
      {
        id: 6,
        nombre: 'Taller de Pintura',
        horario: 'Lunes y Miércoles 15:00 - 17:00',
        descripcion: 'Explora tu creatividad con técnicas de pintura.',
        diaInicio: '06/06/2025',
        tallerista: 'Sofía Ramírez',
        imagen: 'https://via.placeholder.com/150',
        comentarios: [
          { id: 1, usuario: 'Miguel', texto: 'Muy inspirador.' }
        ]
      },
      {
        id: 7,
        nombre: 'Taller de Escritura Creativa',
        horario: 'Martes y Jueves 16:00 - 18:00',
        descripcion: 'Desarrolla tus habilidades de escritura con ejercicios creativos.',
        diaInicio: '07/06/2025',
        tallerista: 'Lucía Torres',
        imagen: 'https://via.placeholder.com/150',
        comentarios: []
      },
      {
        id: 8,
        nombre: 'Taller de Yoga',
        horario: 'Sábados 08:00 - 09:30',
        descripcion: 'Relájate y mejora tu flexibilidad con yoga.',
        diaInicio: '08/06/2025',
        tallerista: 'Claudia Vega',
        imagen: 'https://via.placeholder.com/150',
        comentarios: [
          { id: 1, usuario: 'Elena', texto: 'Perfecto para empezar el día.' }
        ]
      },
      {
        id: 9,
        nombre: 'Taller de Fotografía Avanzada',
        horario: 'Viernes 11:00 - 13:00',
        descripcion: 'Perfecciona tus habilidades fotográficas con técnicas avanzadas.',
        diaInicio: '09/06/2025',
        tallerista: 'Carlos Gómez',
        imagen: 'https://via.placeholder.com/150',
        comentarios: []
      },
      {
        id: 10,
        nombre: 'Taller de Programación Avanzada',
        horario: 'Lunes y Miércoles 13:00 - 15:00',
        descripcion: 'Lleva tus habilidades de programación al siguiente nivel.',
        diaInicio: '10/06/2025',
        tallerista: 'Juan Pérez',
        imagen: 'https://via.placeholder.com/150',
        comentarios: [
          { id: 1, usuario: 'Diego', texto: 'Muy desafiante, pero aprendí mucho.' }
        ]
      }
    ]);

    const tallerSeleccionado = ref(null);

    const mostrarTallerInfo = (taller) => {
      if (taller && typeof taller === 'object') {
        console.log('Taller seleccionado:', taller);
        tallerSeleccionado.value = taller;
      } else {
        console.error('El taller seleccionado no es válido:', taller);
      }
    };

    const cerrarTallerInfo = () => {
      tallerSeleccionado.value = null;
    };

    return {
      talleres,
      tallerSeleccionado,
      mostrarTallerInfo,
      cerrarTallerInfo
    };
  }
}
</script>

<style scoped>
/* Estilo para el overlay flotante */
.taller-info-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* Animación para la tarjeta */
.taller-info-card {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

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
  max-height: 70vh;
  /* Limitar la altura máxima del contenedor */
  overflow-y: auto;
  /* Habilitar el scroll vertical si el contenido excede la altura */
  scrollbar-width: thin;
}
</style>