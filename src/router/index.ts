import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Form from "@/views/Form.vue";
import Signin from '@/components/Signin.vue'
import Signup from '@/components/Signup.vue'
import Profile from '@/views/Profile.vue'

import Auth from '@/firebase/init'
const requiredAuth = (to:any,from:any,next:any)=>{
   Auth.onAuthStateChanged((u)=>{
    if(!u){
      next()
    }
    else{
      next('/')
    }
  })
}
const requiredAuthProfile = (to:any,from:any,next:any)=>{
  Auth.onAuthStateChanged((u)=>{
    if(u){
      next()
    }
    else{
      next('/')
    }
  })
}
Vue.use(VueRouter);
const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter:requiredAuthProfile
  },
  {
    path: "/form",
    name: "Form",
    component: Form,
    beforeEnter:requiredAuth,
    children:[
      {
        path:'/signin',
        component:Signin,
      },
      {
        path:'/signup',
        component:Signup,
      }
      
    ]
  },
  {
    path: "/leagues",
    name: "Leagues",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: {
      default: () =>
        import(/* webpackChunkName: "about" */ "../views/Leagues.vue"),
    },
  },
  {
    path: "/*",
    name: "Home",
    component: Home
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export { routes };
export default router;
