<template>
  <div class="content">
    <span @click="toLinkPage">@levi-前端开发工程师</span>
  </div>
</template>

<script setup>
import { ref } from "vue";

const toLinkPage = () => {
  window.open("https://www.leviqin.top");
};
</script>

<style lang="scss" scoped>
.content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--theme-color);
  font-size: 18px;
  span {
    cursor: pointer;
  }
}
</style>
