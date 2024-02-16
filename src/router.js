import { createRouter, createWebHistory } from "vue-router";

import MainHome from "./pages/MainHome.vue";
import MainProjects from "./pages/MainProjects.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: MainHome,
    },
    {
      path: "/projects",
      name: "projects",
      component: MainProjects,
    },
  ],
});

export { router };
