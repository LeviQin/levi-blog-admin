<template>
  <div class="header">
    <Header />
  </div>
  <div class="mian">
    <div class="menu" :style="`width: ${menuWitdh}`">
      <Menu />
    </div>
    <div class="mian-content">
      <router-view></router-view>
    </div>
  </div>
  <div class="footer">
    <Footer />
  </div>
</template>

<script setup>
import { watch, ref } from "vue";
import Header from "./header/Index.vue";
import Footer from "./footer/Index.vue";
import Menu from "./menu/Index.vue";
import { menuInfoStore } from "@/store";
import { storeToRefs } from "pinia";

const menuInfo = menuInfoStore();
const { isCollapse } = storeToRefs(menuInfo);

let menuWitdh = ref("240px");

watch(isCollapse, () => {
  menuWitdh.value = isCollapse.value ? "63px" : "240px";
});
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  background: var(--theme-bg-color);
}
.footer {
  height: 60px;
  background: var(--theme-bg-color);
}
.menu {
  background: var(--theme-bg-color);
}
.mian {
  display: flex;
}
.mian-content {
  width: 100%;
  height: calc(100vh - 120px);
  overflow: auto;
  overflow-x: hidden;
  min-width: 1000px;
}
</style>
