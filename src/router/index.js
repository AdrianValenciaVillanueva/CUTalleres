import { createRouter, createWebHistory } from 'vue-router'

// Importar vistas
const HomeView = () => import('../views/HomeView.vue')
const LoginView = () => import('../views/LoginView.vue')
const RegisterView = () => import('../views/RegisterView.vue')
const ProfileView = () => import('../views/ProfileView.vue')
const CrearTallerView = () => import('../views/CrearTallerView.vue')
const GestionarTallerView = () => import('../views/GestionarTallerView.vue')
const PerfilEstudianteView = () => import('../views/PerfilEstudianteView.vue')
const SeleccionarTallerView = () => import('../views/SeleccionarTallerView.vue')
const AdminHome = () => import('../views/Admin/AdminHome.vue')
const EliminarTaller = () => import('../views/Admin/AdminTaller.vue')
const CambiarRol = () => import('../views/Admin/AdminCambio.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: { requiresAuth: true }
  },
  {
    path: '/createTaller',
    name: 'createTaller',
    component: CrearTallerView,
    meta: { requiresAuth: true }
  },
  {
    path: '/manageTaller',
    name: 'manageTaller',
    component: GestionarTallerView,
    meta: { requiresAuth: true }
  },
  {
    path: '/studentProfile',
    name: 'studentProfile',
    component: PerfilEstudianteView,
    meta: { requiresAuth: true }
  },
  {
    path: '/selectTaller',
    name: 'selectTaller',
    component: SeleccionarTallerView,
    meta: { requiresAuth: true }
  },
  {
    path: '/adminhome',
    name: 'Administrador',
    component: AdminHome
  },
  {
    path:'/adminTaller',
    name: 'EliminarTaller',
    component: EliminarTaller
  },
  {
    path: '/adminCambio',
    name: 'CambiarRol',
    component: CambiarRol
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router