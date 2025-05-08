<template>
    <div class="taller-card">
            <div class="taller-info">
              <h2 class="taller-name">{{ taller.nombre }}</h2>
              <p class="taller-horario">{{ taller.horario }}</p>
            </div>
            <div class="taller-image-placeholder">
              <p>Imagen de fondo</p>
            </div>
            <div class="taller-action">
 <button class="gestionar-button" @click="$emit('seleccionarTaller', taller)">Ver mas</button>
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

<style>
.taller-card {
    background-color: #e0e0e0;
    width: 180px;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  
  .taller-info {
    padding: 10px;
  }
  
  .taller-name {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
  }
  
  .taller-horario {
    margin: 5px 0 0;
    font-size: 14px;
  }
  
  .taller-image-placeholder {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #555;
  }
  
  .taller-action {
    padding: 10px;
    display: flex;
    justify-content: center;
  }
  
  .gestionar-button {
    background-color: #7cfc00; /* Bright green */
    color: black;
    border: none;
    padding: 5px 15px;
    font-size: 14px;
    border-radius: 15px;
    cursor: pointer;
  }
</style>