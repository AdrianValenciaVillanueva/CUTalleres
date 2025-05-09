<template>
  <div class="crear-taller-container">
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
        </div>

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

          <div class="form-group">
            <label for="diaInicio" class="form-label">Día de inicio:</label>
            <input type="date" id="diaInicio" class="form-input" v-model="form.diaInicio" />
          </div>

          <div class="form-group">
            <label for="horario" class="form-label">Horario:</label>
            <input type="time" id="horario" class="form-input" v-model="form.horario" />
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
import axios from 'axios';
import Swal from 'sweetalert2';  

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

      //Crear un objeto URL para la imagen (mejor rendimiento que FileReader)
      this.imagenSrc = URL.createObjectURL(file);
    },
    async guardarTaller() {
      //Verifica si algún campo está vacío
      if (!this.form.nombre || !this.form.descripcion || !this.form.diaInicio || !this.form.horario || !this.form.imagen) {
        //Muestra un mensaje de alerta si algún campo está vacío
        Swal.fire({
          icon: 'error',
          title: 'Faltan datos',
          text: 'Por favor, completa todos los campos antes de crear el taller.',
        });
        return;
      }

      try {
        //Construcción de FormData para enviar el archivo
        const formData = new FormData();
        formData.append('nombre_taller', this.form.nombre);
        formData.append('descripcion', this.form.descripcion);
        formData.append('fecha', this.form.diaInicio);
        formData.append('horario', this.form.horario);
        formData.append('imagen', this.form.imagen); //Aquí se envía la imagen

        const response = await axios.post('http://localhost:3002/taller/crearTaller', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        Swal.fire({
          icon: 'success',
          title: 'Taller creado correctamente',
          text: 'El taller se ha creado exitosamente.',
        });
        console.log('Respuesta del servidor:', response.data);

      } catch (error) {
        console.error('Error al crear el taller:', error);
        Swal.fire({
          icon: 'error',
          title: 'Hubo un error',
          text: 'Hubo un error al crear el taller.',
        });
      }
    }
  }
};
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
  height: 222px;
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

.image-upload-area img {
  max-width: 100%;
  max-height: 130px; /* Ajusta el alto para que no tape el formulario */
  object-fit: contain;
  border-radius: 8px;
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

