<template>
  <div class="leftNavbar">
    <el-menu 

     default-active="1"
     background-color="#545c64"
     text-color="#fff"
     class="el-menu-dv"
     :style="{height:leftMenuHeight+'px'}"
     >
      <el-menu-item index="1" class="menu-item" @click="goMeterPanel">
        <i class="el-icon-stopwatch"></i>
        <span slot="title">仪表盘面板</span>
      </el-menu-item>
      <el-menu-item index="2" class="menu-item" @click="goVillageManage">
        <i class="el-icon-menu"></i>
        <span slot="title">小区管理</span>
      </el-menu-item>
      <el-menu-item index="3" class="menu-item">
        <i class="el-icon-menu"></i>
        <span slot="title">设备管理</span>
      </el-menu-item>
      <el-menu-item index="4" class="menu-item">
        <i class="el-icon-menu"></i>
        <span slot="title">费用管理</span>
      </el-menu-item>
      <el-submenu index="5" class="menu-item">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>报表中心</span>
        </template>
         <el-menu-item index="5-1">交易流水</el-menu-item>
         <el-menu-item index="5-2">用水量统计报表</el-menu-item>
         <el-menu-item index="5-3">日用水量排行</el-menu-item>
         <el-menu-item index="5-4">终端状态报表</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "LeftNavbar",
  data() {
    return {
        leftMenuHeight:'' //侧边栏高度
    };
  },
  mounted() {
      this.leftMenuHeight=document.documentElement.clientHeight-50
  },
  methods: {
    goMeterPanel(){
    this.$router.push({path: '../Index/MeterPanel'})
    },
    goVillageManage(){
    this.$router.push({path: '../Index/VillageManage'}) 
    }
  },
};
</script>
<style scoped>
.leftNavbar {
}
.menu-item{
    width: 200px;
}
.el-menu-dv{
    
}
</style>
