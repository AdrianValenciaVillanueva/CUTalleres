<template>
  <div class="main-container">
    <unlog-header></unlog-header>
    <div class="register-container"> 
      <h2 class="register-title">Registro de Usuario</h2>
      <div class="register-content">
        <div class="register-form">
          <form @submit.prevent="submitRegister">
            <div class="form-row">
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
                <label for="email">Correo electrónico:</label>
                <input
                  type="email"
                  id="email"
                  v-model="email"
                  placeholder="Ingrese su correo"
                  required
                />
              </div>
            </div>
            <div class="form-row">
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
              <div class="form-group">
                <label for="confirmPassword">Confirmar contraseña:</label>
                <input
                  type="password"
                  id="confirmPassword"
                  v-model="confirmPassword"
                  placeholder="Confirme su contraseña"
                  required
                />
              </div>
            </div>
            <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
            <div class="form-actions">
              <button type="submit" class="btn-register">Registrarse</button>
            </div>
            <div class="form-links">
              <router-link to="/login">¿Ya tienes cuenta? Inicia sesión</router-link>
            </div>
          </form>
        </div>
        <div class="register-image">
          <img src="../assets/RegisterIMG.png" alt="Icono educativo" />
        </div>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
export default {
  name: 'RegisterView',
  data() {
    return {
      codigo_udg: '',
      email: '',
      password: '',
      confirmPassword: '',
      errorMessage: ''
    }
  },
  methods: {
    async submitRegister() {
      this.errorMessage = '';
      if (this.password !== this.confirmPassword) {
        this.errorMessage = 'Las contraseñas no coinciden';
        return;
      }
      try {
        const response = await fetch('http://localhost:3001/users/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            codigo_udg: Number(this.codigo_udg),
            correo: this.email,
            contrasena: this.password
          })
        });
        if (!response.ok) {
          throw new Error('Error al registrar usuario');
        }
        // const data = await response.json(); // Puedes usarlo si necesitas los datos de respuesta
        this.$router.push('/login');
      } catch (error) {
        this.errorMessage = 'No se pudo registrar el usuario';
        console.error(error);
      }
    }
  }
}
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: var(--background-color);
}

.register-container {
  max-width: 85%;
  max-height: 75%;
  width: 100%;
  height: 65%;
  margin: 1rem 1rem;
  background-color: var(--secondary-color);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 0 .5rem;
}

.register-title {
  text-align: center;
  color: var(--background-color);
  margin:.5rem auto;
  font-size: 1.8rem;
}

.register-content {
  display: flex;
  background-color: var(--secondary-color);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.register-form {
  flex: 3;
  padding: 0;
  margin: .5rem;
}

.register-image {
  flex: 1;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary-color);
}

.register-image img {
  max-width: 100%;
  max-height: 300px;
}

.form-row {
  display: flex;
  gap: 1rem;
  margin-bottom: .5rem;
}

.form-group {
  flex: 1;
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #546e7a;
}

input {
  width: 90%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 1em;
  font-size: 1rem;
}

.form-actions {
  margin-top: 2rem;
}

.btn-register {
  width: 100%;
  padding: 0.75rem;
  background-color: var(--background-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
}

.btn-register:hover {
  background-color: var(--primary-color);
}

.form-links {
  margin-top: 1rem;
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

@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
    gap: 0;
  }
  
  .register-content {
    flex-direction: column;
  }
  
  .register-image {
    order: -1;
  }
}
</style>