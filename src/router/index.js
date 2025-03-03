import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Website/Home.vue";
import About from "@/views/Website/About.vue";
import Contact from "@/views/Website/Contact.vue";
import Support from "@/views/Website/Support.vue";
import WebsiteLayout from "@/views/Website/Layout/Layout.vue";
import Blog from "@/views/Website/Blog.vue";
import Login from "@/views/Auth/Login.vue";
import Register from "@/views/Auth/Register.vue";
import ForgotPassword from "@/views/Auth/ForgotPassword.vue"
import ClientDashboardLayout from "@/views/ClientDashboard/Layout/Layout.vue";
import ClientDashboardIndex from "@/views/ClientDashboard/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: ClientDashboardLayout,
      children: [
        {
          path: "index",
          name: "index",
          component: ClientDashboardIndex,
        },
      
      ],
    },
    {
      path: "/",
      name: "website-home",
      component: WebsiteLayout,
      children: [
        {
          path: "",
          name: "home",
          component: Home,
        },
        {
          path: "/about",
          name: "about",
          component: About,
        },
        {
          path: "/contact",
          name: "contact",
          component: Contact,
        },
        {
          path: "/support",
          name: "support",
          component: Support,
        },
        {
          path: "/blog",
          name: "blog",
          component: Blog,
        },
        {
          path: "/login",
          name: "login",
          component: Login,
        },
        {
          path: "/register",
          name: "register",
          component: Register,
        },
        {
          path: "/forgot-password",
          name: "forgot-password",
          component: ForgotPassword,
        },
      ],
    },
  ],
});

export default router;
