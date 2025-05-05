<template>
    <div class="info-card-container">
        <h1>{{ taller.nombre }}</h1>
        <div>
            <img :src="taller.imagen" alt="Imagen del taller" />
        </div>
        <div class="taller-descripcion">
            <p><strong>Descripción: </strong> {{ taller.descripcion }}</p>
            <p><strong>Horario: </strong> {{ taller.horario }}</p>
            <p><strong>Día de inicio: </strong> {{ taller.diaInicio }}</p>
            <p><strong>Tallerista: </strong>{{ taller.tallerista }}</p>
        </div>
        <button class="btn-inscribirse" @click="inscribirse">Inscribirse</button>
        <h2>COMENTARIOS SOBRE EL TALLER</h2>
        <div class="comentarios">
            <div v-for="comentario in taller.comentarios" :key="comentario.id" class="comentario">
                <p><strong>{{ comentario.usuario }}:</strong> {{ comentario.texto }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'TallerInfoCard',
    props: {
        taller: {
            type: Object,
            required: true
        }
    },
    setup() {
        const inscribirse = () => {
            alert('Te has inscrito en el taller.');
        };
    
        return {
            inscribirse
        };
    }
}
</script>

<style>
.info-card-container {
    background-color: #797979;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.taller-descripcion {
    background-color: var(--color-primario);
    margin: 1rem 0;
    border-radius: .5rem;
    padding: .1rem 1.5rem;
    text-align: left;
    box-shadow: 0 0 .5rem rgba(0, 0, 0, 0.3);
}
</style>