<template>
  <div class="header-card">
    <el-page-header @back="goBack">
      <template #content>
        <span class="text-large font-600 mr-3"> 写文章 </span>
      </template>
    </el-page-header>
  </div>
  <div class="content">
    <div class="essay-title">
      <span>文章标题：</span>
      <el-input
        v-model="essayTitle"
        placeholder="请输入文章标题"
        style="width: 350px"
      ></el-input>
    </div>
    <div class="essay-main">
      <div class="editor-lable">
        <span>文章内容：</span>
      </div>
      <div class="editor-card">
        <editor></editor>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import editor from "@/components/editor/Index.vue";
import { useRouter } from "vue-router";

const router = useRouter();

let essayTitle = ref("无标题文章");

const goBack = () => {
  router.go(-1);
};
</script>

<style lang="scss" scoped>
.header-card {
  padding: 20px 30px;
}
.content {
  padding: 100px 30px;
  .essay-title {
    display: flex;
    align-items: center;
  }
  .essay-main {
    padding: 30px 0;
    display: flex;
    .editor-lable {
      min-width: 85px;
    }
    .editor-card {
      flex: 1;
    }
  }
}

::v-deep .essay-title .el-input__inner {
  color: black;
}
</style>
