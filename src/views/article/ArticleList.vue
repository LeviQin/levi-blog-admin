<template>
  <div class="content">
    <div class="page-title">
      <span>文章列表</span>
    </div>
    <div class="tool-card">
      <el-button type="primary" @click="addArticle">新增文章</el-button>
    </div>
    <div class="table-card">
      <el-table :data="dataMap.tableData" style="width: 100%" border>
        <el-table-column prop="id" label="Id" width="180" align="center" />
        <el-table-column prop="title" label="Title" width="180" align="center" />
        <el-table-column prop="url" label="Url" align="center" />
        <el-table-column prop="awesome" label="Awesome" align="center" />
        <el-table-column prop="browse" label="Browse" align="center" />
        <el-table-column label="Operate" width="200" align="center">
          <template #default="{ row }">
            <el-button type="primary">编辑</el-button>
            <el-button type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const dataMap = reactive({
  tableData: [],
});

const addArticle = () => {
  router.push("/write-essay");
};
</script>

<style lang="scss" scoped>
.content {
  padding: 20px;
  .tool-card {
    padding: 20px 0;
    display: flex;
    align-items: center;
  }
}
</style>
