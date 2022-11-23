import router from "./router/index";
import NProgress from "nprogress"; // 进度条
import "nprogress/nprogress.css"; // 进度栏样式
import { getToken } from "@/utils/auth";
import { _isMobile } from "@/utils/utils";

NProgress.configure({ showSpinner: false }); // NProgress配置

const whiteList = ["/login"]; // 没有重定向白名单

router.beforeEach(async (to, from, next) => {
    NProgress.start();

    // 确定用户是否已登录
    const hasToken = getToken();

    const hasMobile = _isMobile();

    if (hasMobile) {
        // 如果是移动端，请重定向到提示页
        if (to.path === "/m-tips") {
            next();
            NProgress.done();
        } else {
            next(`/m-tips`);
            NProgress.done();
        }
    } else {
        if (hasToken) {
            if (to.path === "/login" || to.path === "/m-tips") {
                // 如果已登录，请重定向到主页
                next({ path: "/" });
                NProgress.done();
            } else {
                next();
            }
        } else {
            if (whiteList.includes(to.path)) {
                // 在免费登录白名单中，直接进入
                next();
                NProgress.done();
            } else {
                // 其他无权访问的页面将被重定向到登录页面。
                next(`/login?redirect=${to.path}`);
                NProgress.done();
            }
        }
    }
});

router.afterEach(() => {
    NProgress.done();
});