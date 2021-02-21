<template>
  <div class="login" :style="{height:documentHeight+'px'}">
    <div class="loginmain">
      <div class="login-title">
        <span>管理员登录</span>
      </div>

      <div class="login-con">
        <div class="login-user">
          <div class="icon">
            <img src="../assets/user_icon_copy.png" alt />
          </div>
          <input type="text" placeholder="用户名" autocomplete="off" v-model="loginInfo.userName" />
        </div>
        <div class="login-pwd">
          <div class="icon">
            <img src="../assets/lock_icon_copy.png" alt />
          </div>
          <input type="password" placeholder="密码" autocomplete="off" v-model="loginInfo.password" />
        </div>
        <div class="login-yan">
          <div class="icon">
            <img src="../assets/key.png" alt />
          </div>
          <input type="text" placeholder="验证码" autocomplete="off" v-model="loginInfo.vCode" />
        </div>
        <div class="login-btn">
          <input type="button" value="登录" @click="loginUsePassword" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  mounted() {
    //console.log(this.$store.getters.getDemoValue)

    this.documentHeight = document.documentElement.scrollHeight;
  },
  data() {
    return {
      documentHeight: "", //可见窗口高度
      loginInfo: {
        userName: "",
        password: "",
        vCode: ""
      }
    };
  },
  methods: {
    loginUsePassword() {
      if (this.loginInfo.userName != "") {
        this.$message({
          showClose: true,
          message: "登录成功",
          type: "success"
        });
        this.$store.commit("setLoginInfo", this.loginInfo);
        this.$router.push({ path: "/" });
      }
    }
  }
};
</script>
<style scoped>
.login {
  margin: 0;
  width: 100%;
  background: url("../assets/bg1.jpg") no-repeat;
  background-size: 100% 100%;
}
.loginmain {
  background: rgba(0, 0, 0, 0.5);
  width: 540px;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  padding: 100px 40px 40px 40px;
  box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
  z-index: 99999;
}
.login-title {
  color: #d3d7f7;
  height: 60px;
  font-size: 20px;
  text-align: center;
  margin-top: -20px;
}
.login-con {
  height: 208px;
  position: absolute;
  left: 0;
  width: 80%;
  margin: 0 10%;
}
.login-user {
  position: relative;
}
.icon {
  position: absolute;
  z-index: 1;
  left: 36px;
  top: 8px;
  opacity: 1;
}
.login-con input {
  width: calc(100% - 130px);
  margin-top: -2px;
  background: rgba(57, 61, 82, 0);
  left: 0;
  padding: 10px 65px;
  border-top: 2px solid rgba(57, 61, 82, 0);
  border-bottom: 2px solid rgba(57, 61, 82, 0);
  border-right: none;
  border-left: none;
  outline: none;
  font-family: "Gudea", sans-serif;
  box-shadow: none;
  color: #61bfff !important;
}
.login-pwd,
.login-yan {
  position: relative;
}
/*
.login-pwd .icon{
    position: absolute;
    z-index: 1;
    left: 36px;
    top: 8px;
    opacity: .5;
}*/
.login-btn {
  width: 80%;
  margin: 0 auto;
  position: relative;
}
.login-btn input {
  border-radius: 3px;
  background: transparent;
  border: 2px solid #4fa1d9;
  color: #4fa1d9;
  text-transform: uppercase;
  font-size: 11px;
  cursor: pointer;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;

  margin: auto;
  width: 80%;
  transition-property: background, color;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
}
.login-btn input:hover {
  color: white !important;
  background: #4fa1d9;
  cursor: pointer;
  -webkit-transition-property: background, color;
  transition-property: background, color;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
}
</style>