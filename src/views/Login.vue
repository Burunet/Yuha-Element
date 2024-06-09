<template>
  <div class="login-container">
    <el-form :model="loginForm"
             class="login-form"
             auto-complete="on"
             label-position="left">
      <div class="title-container">
        <h3 class="title">Login</h3>
      </div>
      <el-form-item>
        <el-icon class="svg-container" size="20px">
          <User/>
        </el-icon>
        <input v-model="loginForm.username" placeholder="username"/>
      </el-form-item>

      <el-form-item>
        <el-icon class="svg-container" size="20px">
          <Lock/>
        </el-icon>
        <input v-model="loginForm.password" placeholder="password" ref="PwdViewDom" type="password"/>
        <el-icon color="#A0A0A0FF" size="20px" @click="ChangePwdView">
          <View v-if="PwdView"/>
          <Hide v-else/>
        </el-icon>
        <!--        <el-icon><Hide /></el-icon>-->
      </el-form-item>

      <el-button
          type="primary"
          style="width: 100%; margin-bottom: 30px"
          @click="Login()"
      >Login
      </el-button>

      <div class="tips">
        <span style="margin-right: 20px">username: admin</span>
        <span> password: any</span>
      </div>
    </el-form>
  </div>
</template>

<script setup>
import {ref, reactive} from "vue";
import {useRouter} from "vue-router";
import {User, Lock, View, Hide} from '@element-plus/icons-vue';
import {setAuthority, setToken} from '@/utils/SetCookies.js';

const route = useRouter()
const PwdViewDom = ref()
const PwdView = ref(true)
const ChangePwdView = () => {
  if (PwdViewDom.value.type === 'text') {
    PwdViewDom.value.type = 'password'
  } else if (PwdViewDom.value.type === 'password') {
    PwdViewDom.value.type = 'text'
  }
  PwdView.value = !PwdView.value
}
const Login = () => {
  setToken('sssssss')
  // setAuthority({
  //   view:[
  //     'Dashboard',
  //     'table',
  //     'table1',
  //     'trr',
  //     'trr2',
  //     'trr2-1',
  //     'trr2-2'
  //   ]})

  setAuthority({
    view: {
      Dashboard: { Dashboard:true },
      Table: { table:true, table1:true },
      trr: { trr: true, trr2: { trr21:true,trr22:true} }
    }
  })
  route.push('/')
}

const loginForm = reactive({
  username: 'admin',
  password: '123456'
})
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;
$curso2: #a0a0a0;

.login-container {
  min-height: 100%;
  width: 100%;
  //background-color: $bg;
  overflow: hidden;
  background-color: rgba(45, 58, 75, 0.9);
  background-image: url("../assets/login.webp");

  .login-form {
    position: relative;
    background-color: rgba(84, 92, 100, 0.9);
    width: 520px;
    max-width: 100%;
    padding: 10px 35px;
    margin: 160px auto;
    overflow: hidden;
  }


  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;
    display: flex;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .el-form-item {
    display: flex;
    height: 50px;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
    margin-bottom: 20px;

    input {
      background-color: transparent;
      border: none;
      width: 85%;
      height: 30px;
      font-size: 16px;
      color: white;
      outline: none;
    }

    input[type="password"]::-ms-reveal,
    input[type="password"]::-webkit-textfield-decoration-container {
      display: none;
    }
  }

}
</style>