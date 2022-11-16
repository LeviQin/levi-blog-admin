<template>
  <div class="content">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="0">
        <el-icon><icon-menu /></el-icon>
        <template #title>首页</template>
      </el-menu-item>
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>文章管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">文章列表</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><location /></el-icon>
          <span>菜谱管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">菜谱列表</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item index="3">
        <el-icon><document /></el-icon>
        <template #title>日志列表</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>系统设置</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Document, Menu as IconMenu, Location, Setting } from "@element-plus/icons-vue";
import { storeToRefs } from "pinia";
import { menuInfoStore } from "../../store";

const menuInfo = menuInfoStore();
const { isCollapse } = storeToRefs(menuInfo);

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};
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
