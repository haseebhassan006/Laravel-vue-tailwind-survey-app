import { createRouter, createWebHashHistory } from "vue-router";


import Dashboard from '../view/Dashboard.vue'
import Login from '../view/Login.vue'
import Register from '../view/Register.vue'
import Servey from '../view/Survey.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import AuthLayout from '../components/AuthLayout.vue'
import store from '../store'

const routes = [
    {
        path:'/',
        redirect:'/dashboard',
        meta:{requireAuth:true},

        component:DefaultLayout,
        children:[
            {path:'/dashboard',name:'Dashboard',component:Dashboard},
            {path:'/serveys',name:'Servey',component:Servey },
        
        ]
    },
    {
        path:'/auth',
        redirect:'/login',
        name:'Auth',
        component:AuthLayout,
        meta:{isGuest:true},
        children:[
            {
                path:'/login',
                name:'Login',
                component: Login
        
            },
            {
                path:'/register',
                name :'Register',
                component : Register
        
            },

        ]
        
    }

   

]

const router = createRouter({

    history:createWebHashHistory(),
    routes

})

router.beforeEach((to, from,next)=>{

    if( to.meta.requireAuth && !store.state.user.token){
      next({name:'Login'})
      
    }else if(store.state.user.token && (to.meta.isGuest)){
        next({name:'Dashboard'})
    }else{

    }

   

})

export default router;