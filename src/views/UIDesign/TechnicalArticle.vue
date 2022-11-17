<template>
  <div class="content">
    <el-input v-model="inputVal" placeholder="" style="width: 250px"></el-input>
    <div class="upload-card">
      <el-upload
        v-model="fileList"
        class="upload-demo"
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        :on-change="handleChange"
        :limit="3"
      >
        <el-button type="primary">Click to upload</el-button>
      </el-upload>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const fileList = ref([]);

const handleChange = (file, fileList) => {
  const formData = new FormData();
  // 你可以使用FormData.append来添加键/值对到表单里面；
  fileList.forEach((file) => {
    formData.append("file", file.raw);
  });
  formData.forEach((item) => {
    console.log(item, "=======================");
  });
};

onMounted(() => {
  role_at.forEach((item) => {
    inputVal.value += item.value;
  });
});

let inputVal = ref("");
let role_at = [{ value: "张三" }, { value: "历史" }];
</script>

<style lang="scss" scoped>
.content {
  padding: 50px;
}
.upload-card {
  margin-top: 50px;
}
</style>
