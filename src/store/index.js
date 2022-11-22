import { defineStore } from "pinia";
import { Names } from "./store_name";
import { getToken, setToken, removeToken } from "@/utils/auth";

export const userInfoStore = defineStore(Names.USER, {
    state: () => {
        return {
            userInfo: "",
            token: getToken(),
        }
    },
    getters: {
        getToken: state => state.token,
        getUserInfo: state => {
            if (!state.userInfo) {
                state.userInfo = JSON.parse(localStorage.getItem("USER_INFO"));
            }
            return state.userInfo
        },
    },

    actions: {
        setToken(token) {
            this.token = token;
            setToken(token);
        },
        setUserInfo(userInfo) {
            this.userInfo = userInfo;
            localStorage.setItem("USER_INFO", JSON.stringify(userInfo))
        },
        // 用户注销
        handleLogOut() {
            this.token = "";
            removeToken();
            this.userInfo = "";
            localStorage.removeItem("USER_INFO");
        },
        // 删除token
        resetToken() {
            this.token = "";
            removeToken();
        },
    }
})

export const menuInfoStore = defineStore(Names.MENU, {
    state: () => {
        return {
            isCollapse: false,
        }
    },
    getters: {

    },
    actions: {
        setCollapse(state) {
            this.isCollapse = state;
        },
    }
})