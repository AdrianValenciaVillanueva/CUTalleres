<template>
  <div class="seleccion-taller-container">
    <main class="content">
      <h1 class="section-title">LISTA DE TALLERES</h1>

      <div class="taller-cards-container">
        <TallerCard
          v-for="taller in talleres"
          :key="taller.id"
          :taller="taller"
          @seleccionarTaller="mostrarTallerInfo"
        />

        <!-- TallerInfoCard flotante -->
        <div v-if="tallerSeleccionado" class="taller-info-overlay" @click.self="cerrarTallerInfo">
          <TallerInfoCard :taller="tallerSeleccionado" class="taller-info-card" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import router from '@/router';
import TallerCard from './TallerCard.vue';
import TallerInfoCard from './TallerInfoCard.vue';
import { ref, onMounted} from 'vue';
import axios from 'axios';

export default {
  name: 'SeleccionTaller',
  components: {
    TallerCard,
    TallerInfoCard
  },
  setup() {

    const talleres = ref([]);
    const tallerSeleccionado = ref(null);

    const cargarTalleres = async () => {
      try{
        const response = await axios.get('http://localhost:3002/taller/listaTalleres');
        talleres.value = response.data;
      }catch(error){
        console.error('Error al cargar los talleres:', error);
      }
    }

    onMounted(() => {
      cargarTalleres();
    });

    const mostrarTallerInfo = async (taller) => {
      try {
        const response = await axios.post('http://localhost:3002/taller/vistaTaller', {
          ID_Taller: taller.ID_Taller || taller.id
        });
        console.log("Datos recibidos del backend:", response.data);
        tallerSeleccionado.value = response.data;
      } catch (error) {
        console.error('Error al obtener la información del taller:', error);
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
};
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