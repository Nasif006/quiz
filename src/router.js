import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/login",
    name: "login",
    component: () => import("./components/Login")
  },
  {
    path: "/register",
    alias: "/register",
    name: "register",
    component: () => import("./components/Register")
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
  },
  {
  path: "/quiz/review/:id",
  name: "quizReview",
  component: () => import("./components/QuizReviewPage.vue"),
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;