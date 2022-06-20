import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/home.vue';
import about from '../components/about.vue';
import user from '../components/user.vue';

const routes = [
  {
    path: '/home',
    component: home
  },
  {
    path: '/about',
    component: about
  },
  // 重定向
  {
    path: '/', 
    redirect: '/home' 
  },
  /*新增user路径，配置了动态的id*/
  {
    path: "/user/:id",
    component: user
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
