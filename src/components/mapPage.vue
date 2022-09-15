<template>
  <div class="map" id="map">
</div>
</template>

<script>

import {onMounted} from "@vue/runtime-core";
import {getChinaMap} from "@/api/data";
import {inject} from "vue";

export default {
  name: "mapPage",
  setup(){
    let $echarts = inject('echarts')
    onMounted(async ()=>{
      const data = await getChinaMap()
      // 数据不能取到features,否则地图无法正确显示
      const mapData = data.data
      //设置地图名称数据
      $echarts.registerMap('china',mapData)
      let myChart = $echarts.init(document.getElementById('map'))
      myChart.setOption(
          {
            title:{
              text:'中国地图',
              left:'50%',
              top:'2%',
              textStyle:{
                color:'#ffffff'
              }
            },
            geo:{
              map:'china',
              itemStyle:{
                areaColor:'#0099ff',
                borderColor:'#00ffff',
                shadowColor:'rgba(230,130,70,0.5)',
                shadowBlur:30,
                // 高亮反转
                emphasis:{
                  focus:'self'
                }
              }
            },
            // 鼠标悬浮提示
            tooltip:{
              trigger:'item'
            },

            series:[
              {
                // 设置散点
                type:'scatter',
                itemStyle:{
                  color:'red'
                },
                //转化坐标
                coordinateSystem:'geo',
                data:[
                  {name:'北京',value:[116.46,39]},
                  {name:'上海',value:[121.48,31.22]},
                  {name:'深圳',value:[114.07,22.62]},
                  {name:'广州',value:[113.23,23.16]},
                  {name:'长顺',value:[106.45,26.03]}
                ]
              }
            ]
          }
      )
      // 图表自适应
      window.onresize = myChart.resize;
    })
  }
}
</script>

<style lang="less" scoped>
.map{
  width: 100%;
  height: 100%;
}
</style>
