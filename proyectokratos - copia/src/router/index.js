import { createRouter, createWebHistory } from 'vue-router'

import CrearTallerView from '../views/CrearTallerView.vue'
import GestionarTallerView from '../views/GestionarTallerView.vue'
import PerfilEstudianteView from '../views/PerfilEstudianteView.vue'
import SeleccionarTallerView from '../views/SeleccionarTallerView.vue'
import DetalleTallerView from '../views/DetalleTallerView.vue' 

const routes = [
  {
    path: '/', // 
    component: SeleccionarTallerView // 
  },
  {
    path: '/crear-taller',
    component: CrearTallerView
  },
  {
    path: '/gestionar-taller',
    component: GestionarTallerView
  },
  {
    path: '/perfil-estudiante',
    component: PerfilEstudianteView
  },
  {
    
      path: '/detalle-taller/:id',  // Ahora acepta un ID dinámico
      component: DetalleTallerView,
      props: true  // Pasa el parámetro como prop al componente
    
  },
  
  {
    path: '/seleccionar-taller',
    component: SeleccionarTallerView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
