import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: () => import("./components/Home")
  },
  {
    path: "/dashboard",
    alias: "/userdash",
    name: "dashboard",
    component: () => import("./components/Dashboard")
  },
  {
    path: "/waitingpage",
    alias: "/wait",
    name: "waitingPage",
    component: () => import("./components/WaitingPage")
  },
  {
    path: "/quiz",
    alias: "/quizz",
    name: "quiz",
    component: () => import("./components/Quiz")
  },
  {
    path: "/history",
    alias: "/quizzhistorypage",
    name: "history",
    component: () => import("./components/QuizHistoryPage")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;