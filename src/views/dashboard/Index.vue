<template>
  <div class="content">
    <div class="card-lf">
      <el-card shadow="hover" class="box-card">
        <div class="user-card">
          <el-image class="image" :src="userInfo.avatar">
            <template #error>
              <div class="image-slot">
                <el-icon><icon-picture /></el-icon>
              </div>
            </template>
          </el-image>
          <div class="nick-card">
            <div>
              <div class="greet-text">
                <span>{{ greetText }}</span>
              </div>
              <div class="nick-name-text">
                <span>{{ userInfo.userName }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="info-card">
          <div class="time-card">
            <span>当前时间：</span>
            <span>{{ currentTime }}</span>
          </div>
          <div class="welcome-text">
            <span>欢迎使用levi的后台管理系统</span>
          </div>
        </div>
      </el-card>
      <el-card shadow="hover" class="box-card chart-card">
        <!-- 饼状图 -->
        <div class="pie-card">
          <pie-charts :pieChartData="dataMap.pieChartData"></pie-charts>
        </div>
      </el-card>
    </div>
    <div class="card-rt">
      <div class="rt-top">
        <div class="top-item">
          <el-card shadow="hover" class="box-card">
            <div class="flex-item-card">
              <div class="icon-card flex-center">
                <el-icon size="30" color="#44b884"><User /></el-icon>
              </div>
              <div class="num-card">
                <div class="flex-center num-text">5000</div>
                <div class="flex-center">访问数</div>
              </div>
            </div>
          </el-card>
        </div>
        <div class="top-item">
          <el-card shadow="hover" class="box-card">
            <div class="flex-item-card">
              <div class="icon-card flex-center">
                <el-icon size="30" color="#409eff"><Memo /></el-icon>
              </div>
              <div class="num-card">
                <div class="flex-center num-text">300</div>
                <div class="flex-center">blog文章数</div>
              </div>
            </div>
          </el-card>
        </div>
        <div class="top-item">
          <el-card shadow="hover" class="box-card">
            <div class="flex-item-card">
              <div class="icon-card flex-center">
                <el-icon size="30" color="#c09553"><Dish /></el-icon>
              </div>
              <div class="num-card">
                <div class="flex-center num-text">30</div>
                <div class="flex-center">食谱数</div>
              </div>
            </div>
          </el-card>
        </div>
      </div>
      <div class="rt-content">
        <el-card shadow="hover" class="box-card">
          <template #header>
            <div class="card-header">
              <span>代办事项</span>
              <el-button class="button">添加</el-button>
            </div>
          </template>
          <div class="matter-content">
            <template v-if="dataMap.matterLst.length">
              <div class="matter-item" v-for="item in dataMap.matterLst" :key="item.id">
                <div class="item-title">
                  <span>{{ item.title }}</span>
                </div>
                <div class="item-date">
                  <span>{{ item.date }}</span>
                </div>
              </div>
            </template>
            <template v-else>
              <el-empty :image-size="200" />
            </template>
          </div>
        </el-card>
      </div>
    </div>
  </div>
  <div class="line-content">
    <el-card shadow="hover" class="box-card">
      <div class="line-card">
        <line-charts :lineChartData="dataMap.lineChartData"></line-charts>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount, computed } from "vue";
import { User, Memo, Dish } from "@element-plus/icons-vue";
import { userInfoStore } from "@/store";
import PieCharts from "@/components/Echarts/PieCharts/Index.vue";
import LineCharts from "@/components/Echarts/LineCharts/Index.vue";

onMounted(() => {
  timer.value = setInterval(formatDate, 1000);
});

onBeforeUnmount(() => {
  clearInterval(timer);
  timer.value = null;
});

const userStore = userInfoStore();
const userInfo = computed(() => {
  return userStore.getUserInfo;
});

const dataMap = reactive({
  matterLst: [
    {
      title: "今日文章写作",
      date: "2022年11月22日",
      id: 1,
    },
    {
      title: "尤克里里第二章节学习",
      date: "2022年11月22日",
      id: 1,
    },
  ],
  pieChartData: {
    title: {
      text: "文章类型汇总",
      left: "0",
    },
    countList: [
      { value: 23, name: "Html", itemStyle: { color: "#fc8251" } },
      { value: 274, name: "JavaScript", itemStyle: { color: "#5470c6" } },
      { value: 51, name: "CSS", itemStyle: { color: "#91cd77" } },
      { value: 335, name: "Vue", itemStyle: { color: "#ef6567" } },
      { value: 106, name: "React", itemStyle: { color: "#5f6f67" } },
      { value: 63, name: "Webpack", itemStyle: { color: "#f9c956" } },
      { value: 109, name: "小程序", itemStyle: { color: "#75bedc" } },
      { value: 95, name: "uni-app", itemStyle: { color: "#45b4dc" } },
      { value: 48, name: "Node", itemStyle: { color: "#3c8251" } },
    ],
  },
  lineChartData: {
    title: {
      text: "访问走势",
      left: "0",
    },
    dateList: [
      "2022-11-01",
      "2022-11-02",
      "2022-11-03",
      "2022-11-04",
      "2022-11-05",
      "2022-11-06",
      "2022-11-07",
      "2022-11-08",
      "2022-11-09",
      "2022-11-10",
      "2022-11-11",
      "2022-11-12",
      "2022-11-13",
      "2022-11-14",
      "2022-11-15",
      "2022-11-16",
      "2022-11-17",
      "2022-11-18",
      "2022-11-19",
      "2022-11-20",
      "2022-11-21",
      "2022-11-22",
    ],
    countList: [
      26,
      66,
      46,
      105,
      73,
      99,
      44,
      58,
      195,
      21,
      33,
      63,
      202,
      33,
      16,
      69,
      99,
      108,
      220,
      55,
      76,
      89,
    ],
  },
});

let greetText = ref("早上好");
let currentTime = ref(new Date());
let timer = ref(null);

const formatDate = () => {
  let date = new Date();
  let year = date.getFullYear(); // 年
  let month = date.getMonth() + 1; // 月
  let day = date.getDate(); // 日
  let week = date.getDay(); // 星期
  let weekArr = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  let hour = date.getHours(); // 时
  hour = hour < 10 ? "0" + hour : hour; // 如果只有一位，则前面补零
  let minute = date.getMinutes(); // 分
  minute = minute < 10 ? "0" + minute : minute; // 如果只有一位，则前面补零
  let second = date.getSeconds(); // 秒
  second = second < 10 ? "0" + second : second; // 如果只有一位，则前面补零
  if (hour >= 0 && hour < 12) {
    greetText.value = "早上好";
  } else if (hour >= 12 && hour <= 18) {
    greetText.value = "中午好";
  } else {
    greetText.value = "晚上好";
  }
  currentTime.value = `${year}/${month}/${day} ${hour}:${minute}:${second} ${weekArr[week]}`;
};
</script>

<style lang="scss" scoped>
.line-content {
  padding: 0 20px 20px 20px;
  .line-card {
    width: 100%;
    height: 400px;
  }
}
.content {
  padding: 20px;
  display: flex;
  .card-lf {
    width: 35%;
    .user-card {
      display: flex;
      .image {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        padding: 10px;
        border: 1px solid rgb(219, 219, 219);
      }
      .nick-card {
        margin-left: 40px;
        display: flex;
        align-items: center;
        .greet-text {
          font-weight: bold;
          font-size: 24px;
          padding: 8px 0;
        }
        .nick-name-text {
          font-size: 20px;
          color: rgb(124, 123, 123);
          padding: 8px 0;
        }
      }
    }
    .info-card {
      margin-top: 20px;
      .time-card,
      .welcome-text {
        color: rgb(124, 123, 123);
        padding: 5px 0;
      }
    }
  }
  .card-rt {
    flex: 1;
    margin-left: 20px;
    .rt-top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      .top-item {
        width: 30%;
      }
    }
  }
}
.card-header {
  display: flex;
  justify-content: space-between;
  span {
    font-size: 20px;
    font-weight: bold;
  }
}
.num-text {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 15px;
}
.flex-item-card {
  display: flex;
  .icon-card {
    width: 20%;
  }
  .num-card {
    flex: 1;
  }
}
.matter-content {
  height: 348px;
  overflow: auto;
  .matter-item {
    display: flex;
    justify-content: space-between;
    padding: 5px 20px 5px 0;
    .item-title {
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        color: #2d8cf0;
        transition: all 0.3s;
      }
    }
    .item-date {
      color: rgb(191, 190, 190);
    }
  }
}
.chart-card {
  margin-top: 20px;
  .pie-card {
    width: 100%;
    height: 270px;
  }
}
</style>
