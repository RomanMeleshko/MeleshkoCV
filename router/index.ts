import { createWebHistory, createRouter } from "vue-router";
import Login from "../src/views/Login/Login.vue";
import Welcome from "../src/views/Login/Welcome.vue";
import Password from "../src/views/Login/Password.vue";
import Registration from "../src/views/Registrations/Registration.vue";
import Success from "../src/views/Registrations/Success.vue";
import Organization from "../src/views/Registrations/Organization.vue";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/password",
    name: "Password",
    component: Password
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration
  },
  {
    path: "/success",
    name: "Success",
    component: Success
  },
  {
    path: "/organization",
    name: "Organization",
    component: Organization
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
