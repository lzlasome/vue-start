<template>
<!-- 小区管理界面内容 -->
  <div class="VillageManager y-scroll" :style="{height:viewHeight+'px'}">
  <div class="test1">
   <div class="test2"></div>
   <input type="checkbox" />
  </div>
  </div>
  
</template>
<script>
export default {
  name: "VillageManager",
  data() {
    return {
        viewHeight:''
    };
  },
  mounted() {
    this.viewHeight=document.documentElement.clientHeight-50
    
  },
  methods: {},
};
</script>
<style scoped>

.test1{
  height: 300px;
  width: 300px;
  padding-top: 1px;
  background-color: #409eff;
  box-sizing: border-box;
}
.test2{
  height: 50px;
  width: 50px;
  background-color: brown;
 
  position: absolute;
  top: 100px;
}
</style>