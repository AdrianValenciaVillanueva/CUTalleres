<template>
  <HeaderComponent @toggle-menu="toggleMenu"></HeaderComponent>
  <MenuDesplegable v-if="menuVisible" ref="menu" :privilegios="setPrivilegios()"></MenuDesplegable>
  <div class="profile-container">
    
    <div class="profile-content">
      <div class="profile-info">
        <div class="info-section">
          <h3>Datos Personales</h3>
          <div class="info-row">
            <div class="info-label">Nombre:</div>
            <div class="info-value">{{ user?.info?.nombre || 'No disponible' }}</div>
          </div>
          <div class="info-row">
            <div class="info-label">Correo electrónico:</div>
            <div class="info-value">{{ user?.correo || 'No disponible' }}</div>
          </div>
          <div class="info-row">
            <div class="info-label">Tipo:</div>
            <div class="info-value">{{ user?.rol || 'No disponible'}}</div>
          </div>
          <div class="info-row">
            <div class="info-label">Codigo UDG:</div>
            <div class="info-value">{{ user?.codigo_udg || 'No disponible' }}</div>
          </div>
          <div class="info-row">
            <div class="info-label">sexo:</div>
            <div class="info-value">{{ user?.info?.sexo || 'No disponible' }}</div>
          </div>
        </div>
        
        <div class="workshops-section">
          <h3>TALLERES INSCRITOS</h3>
          <table class="workshops-table">
            <thead>
              <tr>
                <th>Nombre del taller</th>
                <th>Fecha</th>
                <th>Tipo de inscripción</th>
                <th>Estado</th>
                <th>Certificado</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(workshop, index) in workshops" :key="index">
                <td>
                  <div class="workshop-info">
                    <span>{{ workshop.name }}</span>
                  </div>
                </td>
                <td>{{ workshop.date }}</td>
                <td>{{ workshop.inscriptionType }}</td>
                <td>{{ workshop.status }}</td>
                <td>
                  <button v-if="workshop.certificateAvailable" class="btn-certificate">
                    Ver Certificado
                  </button>
                  <span v-else>No disponible</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import axios from 'axios'
import MenuDesplegable from '@/components/MenuDesplegable/MenuDesplegable.vue';
import { ref, onMounted, onUnmounted, provide } from 'vue';
import router from '@/router';
import { forEach } from 'lodash';
import { get } from 'lodash';
import { getLoggedUser, setPrivilegios } from '@/services/db-data.js'; // Asegúrate de que la ruta sea correcta
export default {
  components: { HeaderComponent, MenuDesplegable },
  setup() {
    const menuVisible = ref(false);
    const menu = ref(null);

    const handleClickOutside = (event) => {
      // Verifica si el menú está visible y si el clic no fue dentro del menú ni en el botón de toggle
      if (menuVisible.value && menu.value && 
          !event.target.closest('.menu-desplegable') && 
          !event.target.closest('#menuBt')) {
        menuVisible.value = false;
      }
    };

    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };

    const closeMenu = () => {
      menuVisible.value = false;
    };

    // Provee la función para cerrar el menú
    provide('closeMenu', closeMenu);

    // Agregar el event listener cuando el componente se monta
    onMounted(() => {
      document.addEventListener('click', handleClickOutside);
    });

    // Remover el event listener cuando el componente se desmonta
    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside);
    });

    return { 
      menuVisible, 
      toggleMenu,
      setPrivilegios 
    }
   },
  name: 'ProfileView',
  data() {
    return {
      user: null,
      workshops: 
        {
          name: '',
          //icon: require('../assets/theater-icon.png'), // Asegúrate de tener esta imagen
          date: '',
          inscriptionType: '',
          status: '',
          certificateAvailable: false
        }
    }
  },
  async mounted() {
      try {
    const userJson = await getLoggedUser(); // Obtén el string JSON
    this.user = JSON.parse(userJson); // Convierte el string JSON a un objeto
    console.log('User loaded:', this.user); // Log del usuario como objeto
  } catch (error) {
    console.error('Error loading user:', error);
  }
  },
  methods: {
    // async fetchWorkshops() {
    //   try {
    //     const response = await axios.get('http://localhost:3002/user/workshops')
    //     this.workshops = response.data
    //   } catch (error) {
    //     console.error('Error fetching workshops:', error)
    //   }
    // },
    logout() {
      // Lógica para cerrar sesión
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.profile-container {
  max-width: 1000px;
  margin: 1rem auto 0 ;
  padding: 1.5rem;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.profile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ddd;
  margin-top:0 ;
}

.profile-header h2 {
  color: #2c3e50;
  margin: 0;
}

.profile-actions {
  display: flex;
  gap: 1rem;
}

.btn-edit, .btn-logout {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.btn-edit {
  background-color: #3498db;
  color: white;
}

.btn-logout {
  background-color: #e74c3c;
  color: white;
}

.profile-content {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.profile-info {
  overflow: scroll;
}

.info-section {
  margin-bottom: 2rem;
}

.info-section h3 {
  color: #2c3e50;
  margin-top: 0;
  margin-bottom: 1rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}

.info-row {
  display: flex;
  margin-bottom: 0.75rem;
}

.info-label {
  font-weight: bold;
  min-width: 180px;
  color: #546e7a;
}

.workshops-section h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.workshops-table {
  width: 100%;
  border-collapse: collapse;
}

.workshops-table th, .workshops-table td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.workshops-table th {
  background-color: #f9f9f9;
  font-weight: bold;
  color: #546e7a;
}

.workshop-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.workshop-icon {
  width: 24px;
  height: 24px;
}

.btn-certificate {
  padding: 0.25rem 0.5rem;
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .info-row {
    flex-direction: column;
  }
  
  .workshops-table {
    display: block;
    overflow-x: auto;
  }
}
</style>
