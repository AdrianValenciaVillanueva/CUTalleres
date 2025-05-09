<template>
    <div class="info-card-container">
        <h1 class="taller-titulo">{{ taller.nombre }}</h1>
        
        <div class="taller-image-container">
            <img :src="taller.imagen" alt="Imagen del taller" class="taller-image" />
        </div>

        <div class="taller-descripcion">
            <p><strong>Descripción:</strong> <span class="taller-info">{{ taller.descripcion }}</span></p>
            <p><strong>Horario:</strong> <span class="taller-info">{{ taller.horario }}</span></p>
            <p><strong>Día de inicio:</strong> <span class="taller-info">{{ taller.fecha }}</span></p>
            <p><strong>Tallerista:</strong> <span class="taller-info">{{ taller.admin_ID }}</span></p>
        </div>

        <!--<h2>COMENTARIOS SOBRE EL TALLER</h2>
        <div class="comentarios">
            <div v-for="comentario in taller.comentarios" :key="comentario.id" class="comentario">
                <p><strong>{{ comentario.usuario }}:</strong> {{ comentario.texto }}</p>
            </div>
        </div>-->

        <button class="btn-inscribirse" @click="confirmarInscripcion">Inscribirse</button>
    </div>
</template>

<script>
import { ref } from 'vue';
import Swal from 'sweetalert2';

export default {
    name: 'TallerInfoCard',
    props: {
        taller: {
            type: Object,
            required: true
        }
    },
    setup() {
        // Función para confirmar inscripción
        const confirmarInscripcion = async () => {
            const result = await Swal.fire({
                title: '¿Estás seguro?',
                text: "¡Vas a inscribirte en este taller!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, inscribirme',
                cancelButtonText: 'Cancelar'
            });

            if (result.isConfirmed) {
                Swal.fire(
                    '¡Inscripción exitosa!',
                    'Te has inscrito correctamente en el taller.',
                    'success'
                    //AQUI IRA EL ENDPOINT DE DARIO
                );
            }
        };

        return {
            confirmarInscripcion
        };
    }
}
</script>

<style scoped>
.info-card-container {
    background-color: #f4f4f4;
    padding: 20px;
    border-radius: 24px;
    width: 620px;
    max-height: 700px;
    overflow-y: auto; 
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    scrollbar-width: thin;
    scrollbar-color: #e0e0e0;
}

/* Estilo del Scrollbar */
.info-card-container::-webkit-scrollbar {
    width: 8px;
}

.info-card-container::-webkit-scrollbar-thumb {
    border-radius: 10px;
}

.info-card-container::-webkit-scrollbar-track {
    background-color: #e0e0e0;
}

/* Título del taller */
.taller-titulo {
    font-size: 32px;
    color: #DAA520;
    font-weight: bold;
    margin-bottom: 15px;
    text-align: center;
}

/* Imagen del taller */
.taller-image-container {
    width: 100%;
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
}

.taller-image {
    max-width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 10px;
}

/* Descripción del taller */
.taller-descripcion {
    background-color: #e8ffe8;
    margin: 1rem 0;
    border-radius: 8px;
    padding: 1rem;
    text-align: left;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    width: 95%; /* Se ajusta para ocupar más espacio */
}

/* Títulos de cada sección (dorado) */
.taller-descripcion p strong {
    color: #DAA520; /* Dorado elegante */
    font-weight: bold;
}

/* Información del taller (negro) */
.taller-info {
    color: black;
}

/* Botón de inscripción */
.btn-inscribirse {
    background-color: #DAA520;
    color: white;
    border: none;
    padding: 20px 40px;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    margin-bottom: 15px;
    transition: background-color 0.3s ease;
}

.btn-inscribirse:hover {
    background-color: #c1911d;
}


</style>
