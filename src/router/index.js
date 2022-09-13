import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CaseStudy from "../views/CaseStudy.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/case/:id",
      name: "caseStudy",
      component: CaseStudy,
    },
  ],
  scrollBehavior(to, from, savedPosition){
    if (to.hash) {
      const el = window.location.href.split("#")[1];
      if (el.length) {
        document.getElementById(el).scrollIntoView({ behavior: "smooth" });
      }
    } else if (savedPosition) {
      return savedPosition;
    } else {
      document.getElementById("app").scrollIntoView({ behavior: "smooth" });
    }
  },
});

export default router;
