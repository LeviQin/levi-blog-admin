<template>
  <div class="content">
    <div class="page-title">
      <span>技术文章</span>
    </div>
    <div class="list-card">
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="Html" name="1">
          <ul>
            <li>1</li>
            <li>2</li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="CSS" name="2">
          <ul>
            <li>1</li>
            <li>2</li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="JavaScript" name="3">
          <ul>
            <li>1</li>
            <li>2</li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="Vue" name="4">
          <ul>
            <li>1</li>
            <li>2</li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="小程序" name="5">
          <ul>
            <li>1</li>
            <li>2</li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="Webpack" name="6">
          <ul>
            <li>1</li>
            <li>2</li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="Node" name="7">
          <ul>
            <li>1</li>
            <li>2</li>
          </ul>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let activeName = ref("1");
</script>

<style lang="scss" scoped>
.list-card {
  padding: 20px 50px;
}
</style>
