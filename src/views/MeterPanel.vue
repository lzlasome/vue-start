<template>
<!-- 仪表盘面板页面 -->
  <div class="MeterPanel y-scroll" :style="{height:viewHeight+'px'}">
   <!-- 终端、用水量、收费标签 start --> 
   <div class="meter-infor-row">
   <div class="meter-infor-item terminal-state">
   <div class="number-info">
       <div class="number-info-item">终端数量：55</div>
       <div class="number-info-item">在线数量：29</div>
       <div class="number-info-item">离线数量：15</div>
       <div class="number-info-item">故障数量：2</div>
   </div>
   <div class="el-icon-s-tools meter-num-icon"></div>
   </div>

   <div class="meter-infor-item water-num">
   本月用水量：55
   <div class="el-icon-notebook-2"></div>
   </div>
   
   <div class="meter-infor-item month-cost">
    <div class="number-info">
       <div class="number-info-item">本月收费：55</div>
       <div class="number-info-item">上月收费：29</div>
       <div class="number-info-item">欠费户数：15</div>
       
   </div>
   <div class="el-icon-date meter-num-icon"></div>
   </div>
   </div>
   <!-- 终端、用水量、收费标签 end -->

  <!-- 图表 start -->
  <div class="row">
      <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
      <div id="myChart2" :style="{width: '300px', height: '300px'}"></div>
  </div>
  <!-- 图表 end -->

  </div>
  
</template>
<script>
export default {
  name: "MeterPanel",
  data() {
    return {
        viewHeight:'' //去掉顶部导航50px之后的页面高度，for内嵌页面滚动
    };
  },
  mounted() {
    this.viewHeight=document.documentElement.clientHeight-50
    this.drawLine();
    this.drawLine2();
  },
  methods: {
       drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '收费统计图' },
            tooltip: {},
            xAxis: {
                data: ["一月","二月","三月","四月","五月","六月"]
            },
            yAxis: {},
            series: [{
                name: '金额',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    },
    drawLine2(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart2'))
        // 绘制图表
        myChart.setOption({
            title: { text: '用量统计图' },
            tooltip: {},
            xAxis: {
                data: ["一月","二月","三月","四月","五月","六月"]
            },
            yAxis: {},
            series: [{
                name: '金额',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }
  },
};
</script>
<style scoped>
.meter-infor-row{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 20px;
}
.meter-infor-item{
    height: 200px;
    width: 400px;
    background-color: aqua;
}
.terminal-state{
    background-color: #1786AA;
     display: flex;
    flex-direction: row;
}
.number-info{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 40px;
}
.number-info-item{
    color: #fff;
    font-size: 22px;
}
.meter-num-icon{
    font-size: 120px;
    color: #36B3DB;
    position: relative;
    top: 60px;
    left: 80px;
}
.water-num{
    background-color:#785799;
    color: #fff;
    font-size: 22px;
    line-height: 200px;
    text-align: center;
}
.el-icon-notebook-2{
    font-size: 120px;
    color: #9981B1;
    position: relative;
    top: 60px;
    left: 50px;
}
.month-cost{
    background-color:#E35B5A;
     display: flex;
    flex-direction: row;
}
.el-icon-date{
    color: #E9807F;
}
#myChart{
    margin: 70px 0 0 200px;
}
#myChart2{
    margin: 70px 0 0 200px;
}
.row{
    display: flex;
    flex-direction: row;
}
</style>