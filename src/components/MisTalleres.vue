<template>
  <div class="seleccion-taller-container">
    <main class="content">
      <h1 class="section-title">Mis talleres</h1>

      <div class="taller-cards-container" v-if="talleres.length > 0">
        <GestionCard
          v-for="taller in talleres"
          :key="taller.id"
          :taller="taller"
        />
      </div>

      <p v-else class="mensaje-vacio">No has creado ningún taller aún.</p>
    </main>
  </div>
</template>

<script>
import GestionCard from './GestionCard.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'MisTalleres',
  components: {
    GestionCard
  },
  setup() {
    const talleres = ref([]);

    //Se obtiene el codigo_udg del admin_ID desde el objeto 'user' en localStorage por la token
    const getAdminId = () => {
      const user = JSON.parse(localStorage.getItem('user'));
      return user ? user.codigo_udg : null;
    };

    const cargarTalleres = async () => {
      try {
        const adminID = getAdminId();
        if (!adminID) {
          console.error("No se encontró un admin_ID en el usuario.");
          return;
        }

        const response = await axios.get('http://localhost:3002/taller/listaTalleres');

        //Se filtra con los talleres que solo tiene el codigo_udg
        talleres.value = response.data.filter(
          (taller) => taller.admin_ID === adminID
        );

        
      } catch (error) {
        console.error('Error al cargar los talleres:', error);
      }
    };

    

    onMounted(() => {
      cargarTalleres();
    });

    return {
      talleres
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

.mensaje-vacio {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh; /* Centra verticalmente */
  font-size: 32px; /* Tamaño grande */
  font-weight: bold;
  color: #DAA520;
  text-align: center;
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
  font-size: 40px;
  font-weight: bold;
  margin: 30px 0;
  text-transform: uppercase;
}

/* Ajustes al contenedor para centrar las tarjetas */
.taller-cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center; /* Ahora está centrado */
  padding: 0 20px;
  max-height: 70vh;
  overflow-y: auto;
  scrollbar-width: thin;
}
</style>
