<template>
  <div class="content">
    <div class="bell-card">
      <el-badge :value="12" class="item">
        <el-icon class="bell-icon" size="22"><Bell /></el-icon>
      </el-badge>
    </div>
    <div class="avatar-card">
      <el-avatar :src="userInfo.avatar" />
    </div>
    <div class="nick-name-card">
      <span>{{ userInfo.userName }}</span>
    </div>
    <div class="operation-card">
      <el-dropdown trigger="click" @command="commandItem">
        <el-icon class="operation-icon"><Operation /></el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="dashboard">后台首页</el-dropdown-item>
            <el-dropdown-item command="account">账户中心</el-dropdown-item>
            <el-dropdown-item command="access">访问管理</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { Bell, Operation } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import { ElMessageBox } from "element-plus";
import { ElEMessage } from "@/utils/resetMessage";
import { userInfoStore } from "@/store";

const userStore = userInfoStore();
const userInfo = computed(() => {
  return userStore.getUserInfo;
});

const router = useRouter();

const commandItem = (val) => {
  const commandMap = {
    dashboard: toPathPage,
    account: toPathPage,
    access: toPathPage,
    logout: logout,
  };
  commandMap[val](val);
};

const toPathPage = (val) => {
  router.push(`/${val}`);
};

const logout = () => {
  ElMessageBox.confirm("是否退出本次登录?", "提示", {
    confirmButtonText: "退出",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      userStore.handleLogOut();
      router.push(`/login`);
      ElEMessage({
        type: "success",
        message: "退出成功",
      });
    })
    .catch(() => {
      ElEMessage({
        type: "info",
        message: "取消退出",
      });
    });
};
</script>

<style lang="scss" scoped>
.content {
  color: var(--theme-color);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .bell-card {
    padding: 0 10px;
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      .bell-icon {
        cursor: pointer;
      }
    }
  }
  .avatar-card {
    width: 30px;
    height: 30px;
    padding: 0 10px;
    .el-avatar {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
  .nick-name-card {
    font-size: 18px;
    padding: 0 10px;
  }
  .operation-card {
    padding: 0 25px 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    .operation-icon {
      cursor: pointer;
      color: #fff;
      font-size: 22px;
    }
  }
}
</style>
