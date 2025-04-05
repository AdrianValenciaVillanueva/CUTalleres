<template>
  <div class="mode-toggle">
      <label class="switch-container" for="darkmode-toggle"> 
        <input type="checkbox" id="darkmode-toggle" @change="toggleDarkMode" />
        <span class="slider"></span>
      </label>
  </div>
</template>

<script>
export default {
  name: "DarkModeToggle",
  mounted() {
    // Obtener el tema actual desde localStorage
    const currentTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", currentTheme);

    // Preseleccionar el checkbox si el tema es oscuro
    const toggleSwitch = document.querySelector("#darkmode-toggle");
    if (currentTheme === "dark") {
      toggleSwitch.checked = true;
    }
  },
  methods: {
    toggleDarkMode(event) {
      const isDarkMode = event.target.checked;
      const theme = isDarkMode ? "dark" : "light";

      // Cambiar el atributo `data-theme` en el elemento `<html>`
      document.documentElement.setAttribute("data-theme", theme);

      // Cambiar el logo dinámicamente
      const logo = document.querySelector(".logo");
      if (logo) {
        logo.src = isDarkMode
          ? "/src/assets/CutalleresLogoDark.svg"
          : "/src/assets/CutalleresLogoAlt.svg";
      }

      // const incomingLogo = document.querySelector('.logo');
      // incomingLogo.classList.add('enter');
      // setTimeout(() => {
      //   incomingLogo.classList.remove('enter');
      // }, 500);

      // Guardar el tema en localStorage
      localStorage.setItem("theme", theme);
    },
  },
};
</script>

<style scoped>
.mode-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.darkmode-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
}

.switch-container {
  position: relative;
  display: inline-block;
  width: 3em;
  height: 1.5em;
  margin-right: 1rem;
}

/* Hide default HTML checkbox */
.switch-container input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.switch-container .slider {
  --background: linear-gradient(to right, var(--primary-color), #18151f);
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--background);
  transition: background-color 0.5s;
  border-radius: 30px;
}

.switch-container .slider:before {
  position: absolute;
  content: "";
  height: 1em;
  width: 1em;
  border-radius: 50%;
  left: 10%;
  bottom: 15%;
  box-shadow: inset 15px -4px 0px 15px #f8ea27;
  background: var(--background);
  transition: transform 0.5s, box-shadow 0.5s;
}

.switch-container input:checked + .slider {
  --background: linear-gradient(to right, #18151f, var(--primary-color) );

}

.switch-container input:checked + .slider:before {
  transform: translateX(100%);
  box-shadow: inset 8px -4px 0px 0px #f8f8f4;
}

</style>