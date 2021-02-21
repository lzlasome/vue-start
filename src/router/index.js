import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Login from "../views/Login.vue";
import MeterPanel from "../views/MeterPanel.vue";
import VillageManage from "../views/VillageManage.vue"

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect:"../Index/MeterPanel"
  },
  {
    path: "/Index",
    name: "Index",
    component: Index,
    children: [
      {
        path: "MeterPanel",
        name: 'MeterPanel',
        component: MeterPanel
      },
      {
        path: "VillageManage",
        name: 'VillageManage',
        component: VillageManage
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
 /*  {
    path: "/MeterPanel",
    name: 'MeterPanel',
    component: () =>
    import( "../views/MeterPanel.vue")
  } */
];
const router = new VueRouter({
  routes
});
export default router;
