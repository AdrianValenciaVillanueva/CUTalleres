<template>
  <div class="main-container">
    <unlog-header></unlog-header>
    <div class="login-container">
      <h2 class="login-title">Inicio de Sesión</h2>  
      <div class="login-content">
        <div class="login-image">
          <img src="../assets/LoginIMG.png" alt="Máscaras de teatro" />
        </div>
        <div class="login-form">
          <form @submit.prevent="submitLogin">
            <div class="form-group">
              <label for="codigo_udg">Código UDG:</label>
              <input 
                type="number" 
                id="codigo_udg" 
                v-model="codigo_udg" 
                placeholder="Ingrese su código UDG" 
                required
              />
            </div>
            <div class="form-group">
              <label for="contrasena">Contraseña:</label>
              <input 
                type="password" 
                id="contrasena" 
                v-model="contrasena" 
                placeholder="Ingrese su contraseña" 
                required
              />
            </div>
            <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
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
    <footer-component></footer-component>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      codigo_udg: '',
      contrasena: '',
      errorMessage: ''
    }
  },
  methods: {
    async submitLogin() {
      this.errorMessage = '';
      try {
        const response = await fetch('http://localhost:3001/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            codigo_udg: Number(this.codigo_udg),
            contrasena: this.contrasena
          })
        });
        if (!response.ok) {
          throw new Error('Credenciales incorrectas');
        }
        const data = await response.json();
        // Guardar token y usuario si es necesario
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        // Redirigir según el rol
        if (data.user.rol === 'admin') {
          this.$router.push('/adminhome');
        } else {
          this.$router.push('/profile');
        }
      } catch (error) {
        this.errorMessage = 'Código o contraseña incorrectos';
        console.error('Error de inicio de sesión', error);
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 85%;
  max-height: 75%;
  width: 100%;
  height: 65%;
  margin: 1rem auto;
  padding: 1rem;
  background-color: var(--secondary-color);
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
  background-color: var(--secondary-color);
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
  background-color: var(--secondary-color);
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
  color: var(--primary-color);
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
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
}

.btn-login:hover {
  background-color: var(--background-color);
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

.error-message {
  color: #e74c3c;
  margin-bottom: 1rem;
  text-align: center;
}
</style>