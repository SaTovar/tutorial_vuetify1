import {createWebHistory, createRouter} from 'vue-router';
import compras from '../components/ComprasCom.vue'
import ventas from '../components/VentasCom.vue'
import usuarios from '../components/UsuariosCom.vue'
import crearusuarios from '../components/CrearUsuarios.vue'
import productos from '../components/ProductosComp.vue'

const routes = [{
    path:"/",
    name: "compras",
    component: compras,
},
{
    path:"/ventas",
    name: "ventas",
    component: ventas,
},
{
    path:"/usuarios",
    name: "usuarios",
    component: usuarios,
},
{
    path:"/crearusuarios",
    name: "crearusuarios",
    component: crearusuarios,
},
{
    path:"/productos",
    name: "productos",
    component: productos,
},
];

const router = createRouter({
    history: createWebHistory(),routes, 
  });
  
  export default router;