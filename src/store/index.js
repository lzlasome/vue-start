import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import axios from 'axios'

Vue.use(Vuex);
// vuex长久化储存组件
const vuexLocal = new VuexPersist({
  storage: window.localStorage //可选，sessionStorage/indexDB
});

export default new Vuex.Store({
  //全局参数
  state: {
    baseUrl: 'https://admin.quanyong.mobi:8443/unipttadmin/',
    demoValue: {
      name: "",
      age: ""
    },
    //登录信息
    loginInfo:{
      userName:'',
      password:'',
      vCode:''
    }
  },
  mutations: {
    //set方法
    setDemoValue(state, demoValue) {
      state.demoValue = demoValue
    },
    setLoginInfo(state,loginInfo){
    state.loginInfo.userName=loginInfo.userName
    }
  },
  getters: {
    //get方法  
    getDemoValue: state => state.demoValue,
    getLoginInfo: state => state.loginInfo
  },
  //封装axios在vuex中
  actions: {
    getAxios({
      commit
    }, url) {
      axios.get(this.state.baseUrl + url, {
          params: '',
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtYW5hZ2VybmFtZSI6IndzcmNlc2hpZGlhb2R1MiIsImV4cCI6MTYxMTAyODgwNn0.-AqwW4Pt7wAMQ5ZroqG0GiWVIG8YuSBPuG3a54NNx94'
          },
        })
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },

  },
  modules: {},
  plugins: [vuexLocal.plugin]
});