<template>
  <div class="mis-talleres">
    <h1>Mis Talleres</h1>
    <ul>
      <li v-for="taller in talleres" :key="taller.id">
        {{ taller.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'MisTalleres',
  setup() {
    const talleres = ref([]);

    const cargarTalleres = async () => {
      try {
        const response = await axios.get('http://localhost:3002/taller/listaTalleres');
        talleres.value = response.data.filter(taller => taller.estado === true); // Filtra talleres activos
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
.mis-talleres {
  padding: 20px;
  background-color: white;
  color: black;
}
</style>
