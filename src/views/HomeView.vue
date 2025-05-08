<template>
  <div class="main-container">
    <unlog-header> </unlog-header>
    <div class="home-container">
      <div class="logo-container">
        <div class="logo light"></div>
        <div class="logo dark"></div>
      </div>
      <h3 class="subtitle">Plataforma para el registro de talleres</h3>
      <div class="buttons-container">
        <div class="button-box">
          <router-link to="/login" class="button-link">
            <button class="home-button">INICIAR SESIÓN</button>
          </router-link>
        </div>
        <div class="button-box">
          <router-link to="/register" class="button-link">
            <button class="home-button">REGISTRARSE</button>
          </router-link>
        </div>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>


<style scoped>

@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}

@keyframes arrive {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}


.main-container {
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
  align-items: center;
  height: 100vh;
}

.home-container {
  background-color: var(--secondary-color);
  max-width: 85%;
  max-height: 75%;
  width: 100%;
  height: 65%;
  margin: 2.5rem 1rem;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}


.main-title {
  color: var(--text-color);
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.logo-container {
  position: relative;
  width: 100%;
  height: 45%;
}

.logo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  transition: opacity 0.5s ease-in-out; /* Transición suave */
  opacity: 0; /* Oculta por defecto */
}

.logo.enter{
  animation: arrive 2s ease-in-out;
}
.logo.light {
  background-image: url('/src/assets/CutalleresLogoAlt.png');
}

.logo.dark {
  background-image: url('/src/assets/CutalleresLogoDark.png');
}

[data-theme="light"] .logo.light {
  opacity: 1; /* Muestra la imagen clara */
}

[data-theme="dark"] .logo.dark {
  opacity: 1; /* Muestra la imagen oscura */
}

.logo:hover{
  animation: shake 0.3s ease-in-out;
}

.subtitle {
  color: var(--primary-color);
  font-size: 1.2rem;
  margin: .7rem 0;
}

.buttons-container {
  display: flex;
  justify-content: space-between;
  margin: 1rem 3em;
  width: auto;
}

.button-box {
  background-color: var(--primary-color);
  padding: 0;
  border:none;
  border-radius: 5px;
  /*box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);*/
  width: 35%;
  height: 4rem;
  align-content: center;
  align-items: center;
  justify-content: center;
  box-shadow: var(--text-color) 0px 5px 5px 0px;
}

.home-button {
  width: 70%;
  white-space: normal;
  word-wrap: break-word;
  height: clamp(1rem, 3rem, 3rem);
  padding: 0;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size:clamp(.5rem, 1.35vw, 1.5rem);
  text-align: center;
  justify-content: center;
}

.home-button:hover {
  background-color: var(--background-color);
  width: 100%;
  height:100%;
  transition: width 0.5s ease, height 0.2s ease 0.5s, background-color 0.5s ease;
}


.home-button:not(:hover) {
  background-color: var(--primary-color);
  width: 70%;
  height: clamp(1rem, 3rem, 3rem);
  transition: width 0.5s ease, height 0.2s ease 0.5s, background-color 0.5s ease;
}


.button-link {
  text-decoration: none;
}


</style>