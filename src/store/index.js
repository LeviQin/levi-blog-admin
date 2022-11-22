import { defineStore } from "pinia";
import { Names } from "./store_name";
import { getToken, setToken, removeToken } from "@/utils/auth";

export const userInfoStore = defineStore(Names.USER, {
    state: () => {
        return {
            name: "",
            token: getToken(),
        }
    },
    getters: {
        getToken: state => state.token,
        getUserName: state => {
            if (!state.userName) {
                state.userName = JSON.parse(localStorage.getItem("userName"));
            }
            return state.userName
        },
    },

    actions: {
        setToken(token) {
            this.token = token;
            setToken(token);
        },
        setUserName(userName) {
            this.name = userName;
            localStorage.setItem("userName", JSON.stringify(userName))
        },
        // 用户注销
        handleLogOut() {
            this.token = "";
            removeToken();
            this.name = "";
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