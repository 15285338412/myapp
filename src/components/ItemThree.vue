<template>
  <div>
    <h2>图表</h2>
    <div class="chart" id="threeChart"></div>
  </div>
</template>
<script>
import {inject, onMounted, reactive} from "@vue/runtime-core";
import {getThreeJsonData} from "@/api/data";

export default {
  setup() {
    let $echarts = inject("echarts");
    let threeData = reactive({})

   onMounted(async()=>{
    const data =  await getThreeJsonData()
      threeData = data.data.chartData
      let myChart = $echarts.init(document.getElementById('threeChart'))
      myChart.setOption({
        legend: {
          top: 'bottom',
          textStyle:{
            color:'#ffffff'
          }
        },
        // 提示框
        tooltip: {
          show: true,
        },
        series: [
          {
            type: 'pie',
            radius: [10, 90],
            center: ['50%', '45%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 10
            },
            data: threeData
          }
        ]
      });
      // echarts自适应
      window.onresize = myChart.resize;
    });

    return {
      threeData
    }
  },
};
</script>
<style lang="less" scoped>
.chart {
  height: 4.5rem;
}
h2 {
  height: 0.6rem;
  color: #fff;
  line-height: 0.6rem;
  text-align: center;
}
</style>
