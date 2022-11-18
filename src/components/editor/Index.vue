<template>
  <md-editor
    v-model="text"
    @onSave="onSave"
    @onChange="onChange"
    @onUploadImg="onUploadImg"
  />
</template>

<script setup>
import { ref } from "vue";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";

const text = ref("Hello Editor!");

// 保存事件
const onSave = (val) => {
  console.log(val);
};
// 内容变化事件
const onChange = (val, html) => {
  console.log(val);
  console.log(html);
};
// 上传图片事件
const onUploadImg = (val) => {
  console.log(val);
};
</script>

<style lang="scss" scoped></style>
