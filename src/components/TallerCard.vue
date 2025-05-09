<template>
  <div class="taller-card">
    <div class="taller-image-placeholder">
      <img 
        v-if="taller.imagen" 
        :src="taller.imagen" 
        alt="Imagen del taller" 
        class="taller-image"
      />
      <p v-else>Imagen no disponible</p>
    </div>

    <div class="taller-info">
      <h2 class="taller-name">{{ taller.nombre }}</h2>
      <p class="taller-horario">{{ taller.horario }}</p>
    </div>

    <div class="taller-action">
      <button class="gestionar-button" @click="$emit('seleccionarTaller', taller)">
        Ver más
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TallerCard',
  props: {
    taller: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.taller-card {
  background-color: #f0fff0; /* Verde claro */
  width: 300px; /* Más grande para mejor visualización */
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.taller-card:hover {
  transform: translateY(-5px);
}

.taller-image-placeholder {
  height: 180px; /* Más alto para una mejor vista de la imagen */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #d9f7d9;
  border-bottom: 3px solid #32a852; /* Línea verde elegante */
  border-radius: 16px 16px 0 0;
}

.taller-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.taller-info {
  padding: 15px;
  text-align: center;
}

.taller-name {
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  color: #DAA520; /* Verde oscuro */
}

.taller-horario {
  margin: 5px 0 0;
  font-size: 16px;
  color: #4f4f4f;
}

.taller-action {
  padding: 15px;
  display: flex;
  justify-content: center;
}

.gestionar-button {
  background-color: #32a852; /* Verde elegante */
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.gestionar-button:hover {
  background-color: #278040;
}
</style>
