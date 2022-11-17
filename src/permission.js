import router from "./router/index";
import NProgress from "nprogress"; // 进度条
import "nprogress/nprogress.css"; // 进度栏样式

NProgress.configure({ showSpinner: false }); // NProgress配置

const whiteList = ["/login"]; // 没有重定向白名单

router.beforeEach(async (to, from, next) => {
    NProgress.start();
    if (whiteList.includes(to.path)) {
        // 在免费登录白名单中，直接进入
        next();
        NProgress.done();
    } else {
        // 其他无权访问的页面将被重定向到登录页面。
        next(`/login?redirect=${to.path}`);
        NProgress.done();
    }
});

router.afterEach(() => {
    NProgress.done();
});