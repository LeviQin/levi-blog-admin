<template>
  <div id="login">
    <div class="login-form">
      <div class="login-title">Blog后台管理系统</div>
      <div class="login-content">
        <el-form label-width="80px" label-position="top">
          <el-form-item label="登录账户">
            <el-input
              v-model="userName"
              placeholder="userName"
              style="width: 400px"
            ></el-input>
          </el-form-item>
          <el-form-item label="登录密码">
            <el-input
              v-model="passWord"
              placeholder="passWord"
              style="width: 400px"
            ></el-input>
          </el-form-item>
        </el-form>
        <div class="button-card">
          <div class="button" @click="userLogin">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElEMessage } from "@/utils/resetMessage";
import { useRouter } from "vue-router";

const router = useRouter();

let userName = ref("");
let passWord = ref("");

const userLogin = async () => {
  if (userName.value === "leviqin" && passWord.value === "123456") {
    ElEMessage({
      type: "success",
      message: "登录成功",
    });
    router.push("/");
  } else {
    ElEMessage({
      type: "error",
      message: "登录失败！请检查账户密码是否正确",
    });
  }
};
</script>

<style lang="scss" scoped>
#login {
  height: 100%;
  position: relative;
  background: url(../../assets/images/loginBg2.jpg);
  background-size: cover;
  background-position: 50%;
}
.login-form {
  padding: 60px;
  background: rgba(0, 0, 0, 0.575);
  border-radius: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.login-title {
  text-align: center;
  font-size: 40px;
  color: #fff;
  margin-bottom: 20px;
  padding-bottom: 20px;
}

.login-content {
  margin: 0 auto;
}
.button-card {
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  .button {
    background: linear-gradient(to right, #d2e1db, #97c3c6);
    border-radius: 20px;
    width: 180px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
  }
}

::v-deep .el-form-item__label {
  color: #fff;
  font-size: 20px;
}

::v-deep .el-input__wrapper {
  background: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  box-shadow: none;
  border-radius: 0;
}

::v-deep .el-input__inner {
  color: #fff;
  outline: none;
  font-size: 18px;
}
</style>
