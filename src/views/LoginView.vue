<template>
  <div class="login-container">
    <h2 class="login-title">Inicio de Sesión</h2>
    
    <div class="login-content">
      <div class="login-image">
        <img src="../assets/teatro-masks.jpg" alt="Máscaras de teatro" />
      </div>
      
      <div class="login-form">
        <form @submit.prevent="submitLogin">
          <div class="form-group">
            <label for="email">Correo electrónico:</label>
            <input 
              type="email" 
              id="email" 
              v-model="email" 
              placeholder="Ingrese su correo" 
              required
            />
          </div>
          
          <div class="form-group">
            <label for="password">Contraseña:</label>
            <input 
              type="password" 
              id="password" 
              v-model="password" 
              placeholder="Ingrese su contraseña" 
              required
            />
          </div>
          
          <div class="form-actions">
            <button type="submit" class="btn-login">Iniciar Sesión</button>
          </div>
          
          <div class="form-links">
            <router-link to="/register">¿No tienes cuenta? Regístrate</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submitLogin() {
      // Aquí iría la lógica para el inicio de sesión
      console.log('Iniciando sesión con:', this.email, this.password)
      // Después de la validación exitosa, redirigir al perfil
      this.$router.push('/profile')
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.login-title {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 1.8rem;
}

.login-content {
  display: flex;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.login-image {
  flex: 1;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
}

.login-image img {
  max-width: 100%;
  max-height: 300px;
}

.login-form {
  flex: 1;
  padding: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #546e7a;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.form-actions {
  margin-top: 2rem;
}

.btn-login {
  width: 100%;
  padding: 0.75rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
}

.btn-login:hover {
  background-color: #2980b9;
}

.form-links {
  margin-top:.5rem;
  text-align: center;
}

.form-links a {
  color: #3498db;
  text-decoration: none;
}

.form-links a:hover {
  text-decoration: underline;
}
</style>