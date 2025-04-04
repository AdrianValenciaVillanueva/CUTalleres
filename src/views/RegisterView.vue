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
                <label for="name">Nombre:</label>
                <input
                  type="text"
                  id="name"
                  v-model="name"
                  placeholder="Ingrese su nombre"
                  required
                />
              </div>
      
              <div class="form-group">
                <label for="lastName">Apellidos:</label>
                <input
                  type="text"
                  id="lastName"
                  v-model="lastName"
                  placeholder="Ingrese sus apellidos"
                  required
                />
              </div>
            </div>
      
            <div class="form-row">
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
                <label for="phone">Teléfono:</label>
                <input
                  type="tel"
                  id="phone"
                  v-model="phone"
                  placeholder="Ingrese su teléfono"
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
      name: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    submitRegister() {
      // Validar que las contraseñas coincidan
      if (this.password !== this.confirmPassword) {
        alert('Las contraseñas no coinciden')
        return
      }
      
      // Aquí iría la lógica para el registro
      console.log('Registrando usuario:', {
        name: this.name,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone
      })
      
      // Después del registro exitoso, redirigir al inicio de sesión
      this.$router.push('/login')
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