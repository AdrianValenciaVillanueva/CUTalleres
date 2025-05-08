<template>
  <div class="crear-taller-container">
    <header class="header">
      <div class="logo">
        <img src="@/assets/Cutalleres logo prototipo naranja-azul sin fondo 1.png" alt="CTalleres Logo" />
      </div>
      <div class="nav-links">
        <a href="#" class="nav-link">Lista de talleres</a>
        <div class="divider"></div>
        <a href="#" class="nav-link">Mis talleres <span class="dropdown-arrow">▾</span></a>
        <div class="divider"></div>
        <a href="#" class="nav-link">Perfil <span class="dropdown-arrow">▾</span></a>
      </div>
    </header>

    <main class="content">
      <h1 class="section-title">CREAR TALLER</h1>

      <div class="form-container">
        <div class="form-left-column">
          <div class="form-group">
            <label for="nombreTaller" class="form-label">Nombre del Taller:</label>
            <input type="text" id="nombreTaller" class="form-input" placeholder="Ingresa el nombre del Taller" v-model="form.nombre" />
          </div>

          <div class="form-group">
            <label for="descripcionTaller" class="form-label">Descripción del taller:</label>
            <textarea id="descripcionTaller" class="form-textarea" placeholder="Describe el tema del taller y sus enfoques" v-model="form.descripcion"></textarea>
          </div>

          <div class="form-group">
            <label for="diaInicio" class="form-label">Día de inicio:</label>
            <input type="date" id="diaInicio" class="form-input" v-model="form.diaInicio" />
          </div>

          <div class="form-group">
            <label for="horario" class="form-label">Horario:</label>
            <input type="time" id="horario" class="form-input" v-model="form.horario" />
          </div>
        </div>

        <div class="form-right-column">
          <div class="form-group">
            <label class="form-label">Imagen del taller</label>
            <div class="image-upload-area" @click="triggerFileInput">
              <div v-if="!imagenCargada" class="upload-placeholder">
                <div class="upload-icon">+</div>
                <p class="upload-text">Agregar una imagen al taller</p>
              </div>
              <p v-if="imagenCargada" class="success-message">✔ Imagen cargada correctamente</p>
              <input type="file" ref="imageInput" accept="image/*" style="display: none;" @change="previewImage">
            </div>
          </div>
        </div>
      </div>

      <div class="button-container">
        <button class="crear-button" @click="guardarTaller">CREAR</button>
      </div>
    </main>

    <footer class="footer">
      <p>© CUTalleres</p>
      <p>Universidad de Guadalajara</p>
      <p>Centro Universitario de Tonalá</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'CrearTaller',
  data() {
    return {
      imagenCargada: false,
      form: {
        nombre: '',
        descripcion: '',
        diaInicio: '',
        horario: '',
        imagen: null
      }
    };
  },
  methods: {
    triggerFileInput() {
      this.$refs.imageInput.click();
    },
    previewImage(event) {
      const file = event.target.files[0];
      if (!file) return;

      this.form.imagen = file;
      this.imagenCargada = true;
    },
    guardarTaller() {
      const datosTaller = {
        nombre: this.form.nombre,
        descripcion: this.form.descripcion,
        diaInicio: this.form.diaInicio,
        horario: this.form.horario,
        imagenArchivo: this.form.imagen
      };

      console.log("Datos del taller:", datosTaller);
      alert("Taller guardado (revisar consola para ver los datos).");
    }
  }
}
</script>

<style scoped>
.crear-taller-container {
  font-family: 'Poppins', sans-serif;
  background-color: #f0fff0;
  color: #333;
  min-height: 100vh;
  padding: 20px;
}

.header {
  background-color: #4caf50;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-radius: 8px;
}

.logo img {
  height: 35px;
}

.nav-links {
  display: flex;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
}

.divider {
  height: 20px;
  width: 1px;
  background-color: white;
  margin: 0 10px;
}

.content {
  max-width: 900px;
  margin: auto;
  padding: 20px;
}

.section-title {
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: #2e7d32;
}

.form-container {
  display: flex;
  gap: 20px;
}

.form-left-column, .form-right-column {
  flex: 1;
}

.form-group {
  margin-bottom: 15px;
}

.form-label {
  font-weight: bold;
}

.form-input, .form-textarea {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 16px;
}

.image-upload-area {
  background-color: #d7ffd9;
  padding: 20px;
  text-align: center;
  cursor: pointer;
}

.upload-icon {
  font-size: 24px;
}

.success-message {
  color: green;
  font-weight: bold;
}

.crear-button {
  background-color: #2e7d32;
  color: white;
  font-size: 18px;
  padding: 10px 40px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

.crear-button:hover {
  background-color: #1b5e20;
}

.footer {
  text-align: center;
  background-color: #2e7d32;
  color: white;
  padding: 10px 0;
  font-size: 14px;
  font-weight: bold;
  margin-top: 40px;
}
</style>
