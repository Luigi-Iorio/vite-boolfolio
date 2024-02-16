import { createRouter, createWebHistory } from "vue-router";

import MainHome from "./pages/MainHome.vue";
import MainProjects from "./pages/MainProjects.vue";
import ProjectDetail from "./pages/ProjectDetail.vue";

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
    {
      path: "/projects/:slug",
      name: "projects-detail",
      component: ProjectDetail,
    },
  ],
});

export { router };
