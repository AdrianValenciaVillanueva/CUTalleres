<template>
  <div class="crear-taller-container">

    <main class="content">
      <h1 class="section-title">CREAR TALLER</h1>

      <div class="form-container">
        <!-- Columna izquierda -->
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
            <input type="text" id="diaInicio" class="form-input" placeholder="Día de la primera clase del taller" v-model="form.diaInicio" />
          </div>

          <div class="form-group">
            <label for="horario" class="form-label">Horario:</label>
            <input type="text" id="horario" class="form-input" placeholder="Horario del taller" v-model="form.horario" />
          </div>
        </div>

        <!-- Columna derecha -->
        <div class="form-right-column">
          <div class="form-group">
            <label class="form-label">Imagen del taller</label>
            <div class="image-upload-area" @click="triggerFileInput">
              <div v-if="!imagenSrc" class="upload-placeholder">
                <div class="upload-icon">+</div>
                <p class="upload-text">Agregar una imagen a la página del taller</p>
              </div>
              <img v-else :src="imagenSrc" alt="Imagen del taller" style="max-width: 100%; border-radius: 8px;" />
              <input type="file" ref="imageInput" accept="image/*" style="display: none;" @change="previewImage">
            </div>
          </div>
        </div>
      </div>

      <div class="button-container">
        <button class="crear-button" @click="guardarTaller">CREAR</button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'CrearTaller',
  data() {
    return {
      imagenSrc: null,
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

      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagenSrc = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    guardarTaller() {
      const datosTaller = {
        nombre: this.form.nombre,
        descripcion: this.form.descripcion,
        diaInicio: this.form.diaInicio,
        horario: this.form.horario,
        imagenBase64: this.imagenSrc,
        imagenArchivo: this.form.imagen
      };

      console.log("Datos del taller:", datosTaller);
      alert("Taller guardado (revisar consola para ver los datos).");

      // Aquí podrías hacer un envío real, por ejemplo usando FormData si vas a una API
    }
  }
}
</script>

<style scoped>
.crear-taller-container {
  font-family: Arial, sans-serif;
  border: 1px solid #ccc;
  max-width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: white;
  min-height: 100vh;
}

.header {
  background-color: #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #ccc;
}

.logo img {
  height: 30px;
}

.nav-links {
  display: flex;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: black;
  font-size: 16px;
}

.divider {
  height: 20px;
  width: 1px;
  background-color: black;
  margin: 0 10px;
}

.dropdown-arrow {
  font-size: 12px;
}

.content {
  padding: 0 0 40px 0;
  max-width: 900px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin: 30px 0;
  text-transform: uppercase;
}

.form-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.form-left-column, .form-right-column {
  width: 48%;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
}

.form-input, .form-textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 0;
  font-size: 14px;
  box-sizing: border-box;
}

.form-textarea {
  height: 180px;
  resize: none;
}

.image-upload-area {
  width: 100%;
  height: 130px;
  background-color: #e6e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  cursor: pointer;
}

.upload-placeholder {
  text-align: center;
}

.upload-icon {
  font-size: 30px;
  color: #888;
  margin-bottom: 5px;
}

.upload-text {
  font-size: 12px;
  color: #333;
  margin: 0;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.crear-button {
  background-color: #7cfc00;
  color: black;
  border: none;
  padding: 10px 50px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
  text-transform: uppercase;
}
</style>

