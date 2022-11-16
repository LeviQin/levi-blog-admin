import { defineStore } from "pinia";
import { Names } from "./store_name";

export const userInfoStore = defineStore(Names.USER, {
    state: () => {
        return {
            name: "levi",
            token: "",
        }
    },
    getters: {

    },

    actions: {

    }
})

export const menuInfoStore = defineStore(Names.MENU, {
    state: () => {
        return {
            isCollapse: false,
            menuLisr: [],
        }
    },
    getters: {

    },

    actions: {
        setCollapse(state) {
            this.isCollapse = state;
        }
    }
})