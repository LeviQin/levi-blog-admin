<template>
  <div class="content">
    <el-menu
      :default-active="activeMenu"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :active-text-color="variables.menuActiveText"
      :unique-opened="true"
    >
      <sidebar-item
        v-for="route in routerList"
        :key="route.path"
        :item="route || {}"
      ></sidebar-item>
    </el-menu>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { menuInfoStore } from "@/store";
import { useRouter, useRoute } from "vue-router";
import SidebarItem from "./SidebarItem.vue";
import variables from "@/styles/variables.module.scss";

const router = useRouter();
const route = useRoute();

const routerList = computed(() => {
  return router.options.routes;
});

const activeMenu = computed(() => {
  const { path } = route;
  return path;
});

const menuInfo = menuInfoStore();
const { isCollapse } = storeToRefs(menuInfo);
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo {
  background: var(--theme-bg-color);
  height: calc(100vh - 120px);
}
::v-deep .el-menu-item {
  color: var(--theme-color);
}
::v-deep .el-menu-item:hover {
  background: #0c0e0f;
}
::v-deep .el-sub-menu__title {
  color: var(--theme-color);
}
::v-deep .el-sub-menu__title:hover {
  background: #0c0e0f;
}
::v-deep .el-menu {
  background: var(--theme-bg-color);
  border-right: none;
}
</style>
