import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "about" */ "../views/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },
  {
    path: "/songs",
    name: "songs",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Songs.vue")
  },
  {
    path: "/songs/create",
    name: "songs-create",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CreateSong.vue")
  },
  {
    path: "/reuse-component",
    name: "reuse-component",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ReuseComponent.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
