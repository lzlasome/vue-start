<template>
  <div class="topNavbar">
    <div class="logo-dv">
        <i class="el-icon-odometer"></i>
        &emsp;水&emsp;表&emsp;管&emsp;理&emsp;系&emsp;统
    </div>
    <div class="loginInfor-dv">
      <el-dropdown>
        <span class="el-dropdown-link" style="color:#ffffff">
          {{userName}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="backToLogin">退出登录</el-dropdown-item>
          <el-dropdown-item>修改密码</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNavbar",
  data() {
    return {
        userName:''
    };
  },
  mounted() {
    this.userName=this.$store.getters.getLoginInfo.userName
  },
  methods: {
    backToLogin(){
      console.log(555)
      localStorage.clear()
      this.$router.push({path: '/Login'});
    }
  },
};
</script>
<style scoped>
.topNavbar {
  width: 100%;
  height: 50px;
  background-color: #409eff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.loginInfor-dv{
    width: 200px;
    text-align: center;
}
.logo-dv{
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    width: 300px;
    text-align: end;
}

</style>
