import AuthLayout from "@/layout/AuthLayout.vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "vue-router/auto-routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/auth",
      component: AuthLayout,
      children: [
        {
          path: "log-in",
          component: () => import("@/pages/auth/log-in.vue"),
        },
        {
          path: "sign-up",
          component: () => import("@/pages/auth/sign-up.vue"),
        },
      ],
    },
  ],
});

export default router;
