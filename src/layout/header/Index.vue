<template>
  <div class="content">
    <div class="content-lf">
      <div class="logo-card">
        <img src="../../assets/vue.svg" />
      </div>
      <div class="title-card">
        <span @click="router.push(`/`)">Levi博客管理</span>
      </div>
      <div class="button-card">
        <el-icon v-if="isCollapse" class="button-icon" size="28" @click="clickFold"
          ><Expand
        /></el-icon>
        <el-icon v-else class="button-icon" size="28" @click="clickFold"
          ><Fold
        /></el-icon>
      </div>
    </div>
    <div class="content-rt">
      <User />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import User from "../user/Index.vue";
import { Expand, Fold } from "@element-plus/icons-vue";
import { menuInfoStore } from "@/store";
import { storeToRefs } from "pinia";

const router = useRouter();

const menuInfo = menuInfoStore();
const { isCollapse } = storeToRefs(menuInfo);

const clickFold = () => {
  isCollapse.value = !isCollapse.value;
};
</script>

<style lang="scss" scoped>
.content {
  height: 100%;
  display: flex;
  color: var(--theme-color);
  .content-lf {
    width: 50%;
    display: flex;
    align-items: center;
    .logo-card {
      padding: 0 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 35px;
        height: 35px;
      }
    }
    .title-card {
      font-size: 18px;
      font-weight: bold;
      span {
        cursor: pointer;
      }
    }
    .button-card {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 30px;
      .button-icon {
        cursor: pointer;
      }
    }
  }
  .content-rt {
    flex: 1;
  }
}
</style>
