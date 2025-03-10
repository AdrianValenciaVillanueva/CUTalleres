<template>
  <div class="home-container">
    <h1 class="main-title">TALLERES</h1>
    <h3 class="subtitle">Plataforma para el registro de talleres</h3>
    
    <div class="buttons-container">
      <div class="button-box">
        <router-link to="/login" class="button-link">
          <button class="home-button">INICIAR SESIÓN</button>
        </router-link>
      </div>
      
      <div class="button-box">
        <router-link to="/register" class="button-link">
          <button class="home-button">REGISTRARSE</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.main-title {
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.subtitle {
  color: #546e7a;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.buttons-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.button-box {
  background-color: white;
  padding: 1.5rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 200px;
}

.home-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.home-button:hover {
  background-color: #2980b9;
}

.button-link {
  text-decoration: none;
}
</style>