<template>
  <div class="content">
    <div class="title">
      <span>访问提示</span>
    </div>
    <div class="text">
      <span>抱歉！</span>
      <span>当前系统不支持移动端，请使用PC访问~</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>

<style lang="scss" scoped>
.content {
  padding: 2em;
  margin-top: 20em;
  .title {
    font-size: 3em;
    text-align: center;
    padding: 2em;
  }
  .text {
    font-size: 2em;
    text-align: center;
  }
}
</style>
