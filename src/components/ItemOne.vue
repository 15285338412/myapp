<template>
  <div>
    <h2>图表</h2>
    <div class="chart" id="oneChart">图标容器</div>
  </div>
</template>
<script>
import { inject, onMounted } from "@vue/runtime-core";
import {getOneJsonData} from "@/api/data";
export default {
  setup() {
    // 引入echarts
    let $echarts = inject("echarts");

    // 加载图表
    onMounted(async () => {
      const data = await getOneJsonData()
      const chartData = data.data.chartData
      const yData = chartData.map(v=>v.num)
      const xData = chartData.map(v => v.title)
      let myChart = $echarts.init(document.getElementById("oneChart"));
      myChart.setOption({
        tooltip:{},
        grid:{
          top:'3%',
          left:'2%',
          right:'5%',
          bottom:'2%',
          containLabel:true
        },
        xAxis: {
          type:'value'
        },
        yAxis: {
          type:'category',
          data:xData
        },
        series: [
          {
            type: "bar",
            data:yData,

            itemStyle:{
                //设置圆角
              borderRadius:[0,8,8,0],
              // 设置颜色
                color:new $echarts.graphic.LinearGradient(0,0,1,0,[
                  {
                    offset:0,
                    color:'#005eaa'
                  },
                  {
                    offset: 0.5,
                    color: '#339ca8'
                  },
                  {
                    offset: 1,
                    color: '#cda819'
                  }
                ])
            }
          },
        ],
      });
      // 图表自适应
      // window.onresize = myChart.resize;
    });
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
