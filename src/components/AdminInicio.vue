<template>
    <div class="container">
        <h1 class="title">Administrador</h1>
            <p class="des">Página exclusiva para la gestión de la plataforma</p>
        <div class="buttons">
        <router-link to="/adminCambio">
            <button class="button">Cambiar rol</button>
        </router-link>
        <router-link to="/adminTaller">
            <button class="button">Dar de baja taller</button>
        </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Administrador"
    };
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 70vh;
        text-align: center;
    }

    .title {
        font-size: 6rem;
        font-weight: bold;
        margin-bottom: 10px; 
    }

    .des {
        font-size: 2rem;
        margin-top: 0; /* Eliminar margen superior para acercar más al título */
    }

    .buttons {
        display: flex;
        margin-top: 10px;
        gap: 30px;
    }

    .button {
        padding: 20px 40px;
        font-size: 2rem;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .button:hover {
        background-color: #0056b3;
    }
</style>
