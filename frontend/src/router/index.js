import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/proyectos-labsol',
    name: 'ListaLaboratorios',
    component: () => import('../views/ListaLaboratorios.vue')
  },
  {
    path: '/proyectos-labsol/Perfil',
    name: 'Perfil',
    component: () => import('../views/Alumnos/Perfil.vue')
  },
  {
    path: '/proyectos-labsol/laboratorio/:nameLab',
    name: 'ProyectosLaboratorios',
    component: () => import('../views/ProyectosLaboratorios.vue')
  },
  {
    path: '*',
    redirect: '/proyectos-labsol'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
