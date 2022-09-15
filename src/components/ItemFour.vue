<template>
  <div>
    <h2>图表</h2>
    <div class="chart" id="chart">图标容器</div>
  </div>
</template>
<script>
import {inject, onMounted} from "@vue/runtime-core";
import {getFourJsonData} from "@/api/data";

export default {
  setup(){
    let $echarts = inject('echarts')

    onMounted(async()=>{
      const data = await getFourJsonData()
      const chartData = data.data.chartData
      console.log(chartData)
      let myChart = $echarts.init(document.getElementById('chart'))
      myChart.setOption({
        grid:{
          left:'3%',
          bottom:'3%',
          containLabel:true
        },
        xAxis:{
          type:'category',
          data:chartData.day
        },
        yAxis:{
          type:'value',
        },
        tooltip:{
          trigger:'axis',
          axisPointer:{
            type:'shadow'
          }
        },
        legend:{
          textStyle:{
            color:'#ffffff'
          }
        },
        series:[
          {
            name:'服饰',
            type:'bar',
            data:chartData.num.Clothes,
            //住行图堆叠
            stack:'Total',
            emphasis:{
              focus:'series'
            }
          },
          {
            name:'数码产品',
            type:'bar',
            data:chartData.num.digit,
            //住行图堆叠
            stack:'Total',
            emphasis:{
              focus:'series'
            }
          },
          {
            name:'家电',
            type:'bar',
            data:chartData.num.Electrical,
            //住行图堆叠
            stack:'Total',
            emphasis:{
              focus:'series'
            }
          },
          {
            name:'家具',
            type:'bar',
            data:chartData.num.gear,
            //住行图堆叠
            stack:'Total',
            emphasis:{
              focus:'series'
            }
          },
          {
            name:'日化',
            type:'bar',
            data:chartData.num.Chemicals,
            //住行图堆叠
            stack:'Total',
            emphasis:{
              focus:'series'
            }
          },
        ]

      },)
      // 图表自适应
      // window.onresize = myChart.resize;
    })
  }
}
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
