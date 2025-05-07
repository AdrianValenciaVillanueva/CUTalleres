<template>
    <div class="container">
        <h1 class="title">Dar de baja taller</h1>
        <label for="tallerId" class="label">Ingresa el ID del taller</label>
            <input
                type="text"
                id="tallerId"
                v-model="tallerId"
                class="textfield"
                placeholder="Solo números"
            />
        <div class="buttons">
            <button class="button" @click="bajaTaller">Dar de baja</button>
        </div>
    </div>
</template>

<script>
    import Swal from 'sweetalert2';
    import axios from 'axios';

    export default {
        name: "BajaTaller",
        data() {
            return {
            tallerId: '', //variable que almacena el ID del taller
            };
        },
        methods: {
            async bajaTaller() {
            if (!this.tallerId) {
                //Si no se ingresa un ID, muestra una alerta de error
                await Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Por favor ingresa el ID del taller.',
                });
            } else {
                const result = await Swal.fire({
                    icon: 'warning',
                    title: '¿Estás seguro?',
                    text: `¿Deseas dar de baja el taller con ID ${this.tallerId}?`,
                    showCancelButton: true,
                    confirmButtonText: 'Sí',
                    cancelButtonText: 'Cancelar',
                });

                if (result.isConfirmed) {
                try{
                    const response = await axios.patch('http://localhost:3002/taller/bajaTaller', {
                        ID_Taller: this.tallerId,
                });
                await Swal.fire({
                    icon: 'success',
                    title: 'Taller dado de baja',
                    text: `El taller con ID ${this.tallerId} ha sido dado de baja con éxito.`,
                });
                //Solo limpia el textfield
                this.tallerId = '';

                    }catch(error){
                        await Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: error.response?.data?.error || 'Hubo un problema al dar de baja el taller.',
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
        background-color: #dc3545;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .button:hover {
        background-color: #c82333;
    }
</style>
  