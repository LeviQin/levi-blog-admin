<template>
  <div id="line" ref="lineRef"></div>
</template>

<script setup>
import {
  ref,
  onMounted,
  onBeforeUnmount,
  defineProps,
  watch,
  reactive,
  markRaw,
} from "vue";
import * as echarts from "echarts";

const props = defineProps({
  lineChartData: {
    type: Object,
    default: () => {},
  },
});

onMounted(() => {
  initCharts();
});

const dataMap = reactive({
  lineChart: null,
});

let lineRef = ref(null);

const initCharts = () => {
  dataMap.lineChart = markRaw(echarts.init(lineRef.value));
  const lineOption = {
    title: props.lineChartData.title,
    xAxis: {
      type: "category",
      data: props.lineChartData.dateList,
      axisLabel: {
        showMaxLabel: true,
      },
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: false, //去掉折线图中的横线
      },
    },
    dataZoom: {
      // 放大和缩放
      type: "inside",
    },
    tooltip: {
      trigger: "axis",
      show: true,
    },
    series: [
      {
        data: props.lineChartData.countList,
        type: "line",
        smooth: true,
        areaStyle: {
          normal: {
            color: "#091e3b", //改变区域颜色
          },
        },
        itemStyle: {
          normal: {
            color: "#091e3b", //改变折线点的颜色
            lineStyle: {
              color: "#091e3b", //改变折线颜色
            },
          },
        },
      },
    ],
    grid: {
      top: "80px",
      left: "40px",
      right: "20px",
      bottom: "30px",
    },
  };

  lineOption && dataMap.lineChart.setOption(lineOption);

  window.addEventListener("resize", () => {
    dataMap.lineChart.resize();
  });
};

onBeforeUnmount(() => {
  window.removeEventListener("resize", () => {
    dataMap.lineChart.resize();
  });
});

watch(
  () => props.lineChartData,
  () => {
    initCharts();
  },
  { deep: true }
);
</script>

<style>
#line {
  width: 100%;
  height: 100%;
}
</style>
