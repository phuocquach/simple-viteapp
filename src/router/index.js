import Helloworld from "../components/HelloWorld.vue";
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: "/",
    component: Helloworld
  },
  {
    path: "/hello",
    component: Helloworld
  }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes // short for `routes: routes`
  });

export default router;
