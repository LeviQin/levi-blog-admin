import Layout from "@/layout/Index.vue";

export default [
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Layout,
        redirect: {
            path: "/dashboard",
        },
        meta: {
            title: "首页",
            icon: "HomeFilled"
        },
        alwaysShow: true,
        children: [
            {
                path: "/dashboard",
                name: "Dashboard",
                meta: {
                    title: "首页",
                    icon: "HomeFilled"
                },
                component: () => import("@/views/dashboard/Index.vue"),
            },
        ],
    },
    {
        path: "/article",
        name: "Article",
        component: Layout,
        meta: {
            title: "文章管理",
            icon: "Reading"
        },
        children: [
            {
                path: "/article",
                name: "Article",
                meta: {
                    title: "文章列表",
                    icon: "Memo"
                },
                component: () => import("@/views/article/ArticleList.vue"),
            },
            {
                path: "/write-essay",
                name: "WriteEssay",
                meta: {
                    title: "写文章",
                },
                component: () => import("@/views/article/WriteEssay.vue"),
                hidden: true
            },
        ],
    },
    {
        path: "/recipe",
        name: "Recipe",
        component: Layout,
        meta: {
            title: "食谱管理",
            icon: "Dish"
        },
        children: [
            {
                path: "/recipe",
                name: "Recipe",
                meta: {
                    title: "食谱列表",
                    icon: "Tickets"
                },
                component: () => import("@/views/recipe/RecipeList.vue"),
            },
        ],
    },
    {
        path: "/front-end",
        name: "FrontEnd",
        component: Layout,
        meta: {
            title: "前端中心",
            icon: "ChromeFilled"
        },
        children: [
            {
                path: "/front-end",
                name: "FrontEnd",
                meta: {
                    title: "网站导航",
                    icon: "Promotion"
                },
                component: () => import("@/views/frontEnd/WebsiteNavigation.vue"),
            },
            {
                path: "/technical-article",
                name: "TechnicalArticle",
                meta: {
                    title: "技术文章",
                    icon: "DocumentCopy"
                },
                component: () => import("@/views/frontEnd/TechnicalArticle.vue"),
            },
            {
                path: "/interview",
                name: "Interview",
                meta: {
                    title: "面试宝典",
                    icon: "ChatDotSquare"
                },
                component: () => import("@/views/frontEnd/Interview.vue"),
            },
        ],
    },
    {
        path: "/ui-design",
        name: "UIDesign",
        component: Layout,
        meta: {
            title: "UI中心",
            icon: "Brush"
        },
        children: [
            {
                path: "/ui-design",
                name: "UIDesign",
                meta: {
                    title: "网站导航",
                    icon: "Promotion"
                },
                component: () => import("@/views/UIDesign/WebsiteNavigation.vue"),
            },
            {
                path: "/ui-technical-article",
                name: "UITechnicalArticle",
                meta: {
                    title: "技术文章",
                    icon: "DocumentCopy"
                },
                component: () => import("@/views/UIDesign/TechnicalArticle.vue"),
            },
            {
                path: "/ui-interview",
                name: "UIInterview",
                meta: {
                    title: "面试宝典",
                    icon: "ChatDotSquare"
                },
                component: () => import("@/views/UIDesign/Interview.vue"),
            },
        ],
    },
    {
        path: "/settings",
        name: "Settings",
        component: Layout,
        meta: {
            title: "系统设置",
            icon: "Tools"
        },
        alwaysShow: true,
        children: [
            {
                path: "/settings",
                name: "Settings",
                meta: {
                    title: "系统设置",
                    icon: "Tools"
                },
                component: () => import("@/views/settings/Index.vue"),
            },
        ],
    },
    {
        path: "/account",
        name: "Account",
        component: () => import("@/views/account/Index.vue"),
        meta: {
            title: "账户中心",
        },
        hidden: true
    },
    {
        path: "/access",
        name: "Access",
        component: () => import("@/views/access/Index.vue"),
        meta: {
            title: "访问管理",
        },
        hidden: true
    },
    {
        path: "/message",
        name: "Message",
        component: () => import("@/views/message/Index.vue"),
        meta: {
            title: "消息中心",
        },
        hidden: true
    },
    {
        path: "/m-tips",
        name: "MTips",
        component: () => import("@/views/m/Index.vue"),
        meta: {
            title: "提示",
        },
        hidden: true
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("@/views/login/Index.vue"),
        meta: {
            title: "登录",
        },
        hidden: true
    },
    {
        path: "/",
        component: Layout,
        redirect: "/dashboard",
        hidden: true
    },
]