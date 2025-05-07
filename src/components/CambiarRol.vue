<template>
    <div class="container">
        <h1 class="title">Cambio de rol</h1>
        <label for="userId" class="label">Ingresa el ID del usuario</label>
        <input
            type="text"
            id="userId"
            v-model="userId"
            class="textfield"
            placeholder="Solo números"
        />
        <div class="buttons">
            <button class="button" @click="cambiarRol">Cambiar rol</button>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
import axios from 'axios';

export default {
    name: "CambioRol",
    data() {
        return {
            userId: '', //variable que almacena el ID del usuario
        };
    },
    methods: {
        async cambiarRol() {
            if (!this.userId) {
                //Si no se ingresa un ID, muestra una alerta de error
                await Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Por favor ingresa el ID del usuario.',
                });
            } else {
                const result = await Swal.fire({
                    icon: 'warning',
                    title: '¿Estás seguro?',
                    text: `¿Deseas cambiar el rol del usuario con ID ${this.userId} de estudiante a tallerista?`,
                    showCancelButton: true,
                    confirmButtonText: 'Sí',
                    cancelButtonText: 'Cancelar',
                });

                if (result.isConfirmed) {
                    try {
                        const response = await axios.patch('Aqui ira el metodo de Adrian', {
                            ID_Usuario: this.userId, //Pasar el ID del usuario en el cuerpo de la solicitud.
                        });
                        await Swal.fire({
                            icon: 'success',
                            title: 'Rol cambiado',
                            text: `El rol del usuario con ID ${this.userId} ha sido cambiado con éxito.`,
                        });
                        //Solo limpia el textfield
                        this.userId = '';
                    } catch (error) {
                        await Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: error.response?.data?.error || 'Hubo un problema al cambiar el rol del usuario.',
                        });
                    }
                }
            }
        },
    },
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60vh;
    text-align: center;
}

.title {
    font-size: 6rem;
    font-weight: bold;
    margin-bottom: 30px;
}

.label {
    font-size: 2rem;
    margin-top: 50px;
}

.textfield {
    font-size: 1.5rem;
    padding: 10px;
    margin-top: 10px;
    width: 300px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.buttons {
    display: flex;
    margin-top: 20px;
    gap: 30px;
}

.button {
    padding: 10px 30px;
    font-size: 1.8rem;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.button:hover {
    background-color: #218838;
}
</style>