import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/home.vue";
import loginComponent from "../e-commerce/components/login.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home',                    name: 'home', component: Home, meta: { title: 'Home'}},
        { path: '/login',                   name: 'about', component: loginComponent, meta: { title: 'login'}},
        { path: '/',                        redirect: '/home'}
    ]
});

export default router;