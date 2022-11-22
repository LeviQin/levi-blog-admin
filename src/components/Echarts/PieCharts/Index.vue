<template>
  <div id="pie" ref="pieRef"></div>
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
  pieChartData: {
    type: Object,
    default: () => {},
  },
});

onMounted(() => {
  initCharts();
});

const dataMap = reactive({
  pieChart: null,
});

let pieRef = ref(null);

const initCharts = () => {
  dataMap.pieChart = markRaw(echarts.init(pieRef.value));
  const pieOption = {
    title: props.pieChartData.title,
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "right",
      top: "center",
    },
    series: [
      {
        name: "条数",
        type: "pie",
        radius: "85%",
        data: props.pieChartData.countList,
        label: {
          normal: {
            show: true,
            position: "inside",
            formatter: "{d}%", //模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比

            textStyle: {
              align: "center",
              baseline: "middle",
              fontFamily: "微软雅黑",
              fontSize: 15,
              fontWeight: "bolder",
            },
          },
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  pieOption && dataMap.pieChart.setOption(pieOption);

  window.addEventListener("resize", () => {
    dataMap.pieChart.resize();
  });
};

onBeforeUnmount(() => {
  window.removeEventListener("resize", () => {
    dataMap.pieChart.resize();
  });
});

watch(
  () => props.pieChartData,
  () => {
    initCharts();
  },
  { deep: true }
);
</script>

<style>
#pie {
  width: 100%;
  height: 100%;
}
</style>
