<template>
  <div class="index" >
    <topNavbar />
    <div class="main-dv">
    <leftNavbar />
    <router-view style="width:100%"></router-view>
    </div>
    
  </div>
</template>

<script>

import topNavbar from '../components/topNavbar'
import leftNavbar from '../components/leftNavbar'
export default {
  components: {
    topNavbar, //头部导航栏
    leftNavbar //左侧导航栏
  },
  name: "Index",
    data () {
      return {
      value:{
      name:"李四",
      age:"19"
    },
    viewHeight:'',
    userinfor:'notifications?Keyword=0&ReadType=1&Type=0&PageSize=0&PageIndex=1&TimeFrom=1610380851&TimeTo=1610467191'
      };
    },
    mounted(){
     
      // 默认打开首页在仪表界面
     // this.$router.push({path: '../Index/MeterPanel'}); 
     //验证是否登录
     this.checkLoginState()
      
      /* this.$store.commit('setDemoValue', this.value);   
      console.log(this.$store.getters.getDemoValue) */
       /* this.$store.dispatch('getAxios',this.userinfor) */
    },
   methods:{
    
     
    
     checkLoginState(){
       if(this.$store.getters.getLoginInfo.userName==''){
         this.$router.push({path: '/Login'});
       }
      
     }
    
  }
};
</script>
<style scoped>
.main-dv{
  display: flex;
  flex-direction: row;
}

</style>
