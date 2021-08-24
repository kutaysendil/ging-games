const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "games", component: () => import("pages/Games.vue") },
      { path: "careers", component: () => import("pages/Careers.vue") },
      { path: "contact", component: () => import("pages/Contact.vue") },
      { path: "admin", component: () => import("src/pages/Admin/Admin.vue") },
      {
        path: "careers/apply",
        component: () => import("components/Apply.vue")
      },
      {
        path: "admin/update",
        component: () => import("pages/Admin/UpdateForm.vue")
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
