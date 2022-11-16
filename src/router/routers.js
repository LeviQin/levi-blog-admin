import Layout from "@/layout/Index.vue";

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
            icon: "box-home"
        },
        children: [
            {
                path: "/dashboard",
                name: "Dashboard",
                meta: {
                    title: "首页",
                    icon: "box-home"
                },
                component: () => import("@/views/dashboard/Index.vue"),
            },
        ],
    },
    {
        path: "/settings",
        name: "Settings",
        component: Layout,
        meta: {
            title: "系统设置",
        },
        children: [
            {
                path: "/settings",
                name: "Settings",
                meta: {
                    title: "系统设置",
                    icon: "box-home"
                },
                component: () => import("@/views/dashboard/Index.vue"),
            },
        ],
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("@/views/login/Index.vue"),
        meta: {
            title: "登录",
        },
    },
]