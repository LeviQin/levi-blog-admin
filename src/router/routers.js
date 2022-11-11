import Layout from "../layout/Index.vue";

export default [
    {
        path: "/",
        name: "Home",
        component: Layout,
        redirect: {
            path: "/dashboard",
        },
        meta: {
            title: "首页",
        },
        children: [
            {
                path: "/dashboard",
                name: "Dashboard",
                meta: {
                    title: "首页",
                },
                component: () => import("../views/dashboard/Index.vue"),
            },
        ],
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/login/Index.vue"),
        meta: {
            title: "登录",
        },
    },
]