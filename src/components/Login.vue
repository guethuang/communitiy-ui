<template>
  <el-container class="login_container">
<el-main class="main">
  <div class="login_img">
    <img src="../assets/login-img.png">
  </div>
  <div class="login_box">
    <div class="login_logo">
      <a href="#">
        <img src="../assets/login_logo.png">
      </a>
    </div>
    <div class="login_name">
    <span>Community</span>
    </div>
    <div class="login_tab">
        <el-form  label-width="0px" :rules="loginFormRules" :model="loginForm" ref="loginFormRef">
        <el-form-item class="item_account" prop="username">
          <el-input v-model="loginForm.username" placeholder="用户名" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item class="item_account" prop="password">
          <el-input v-model="loginForm.password" placeholder="密码" type="password" prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" class="btn_login" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="login_help">
      <a href="#">
        <img  src="../assets/register.png" class="login_help_img">
      </a>
      <a href="#">
        <img src="../assets/forget.png" class="login_help_img">
      </a>
    </div>
  </div>
</el-main>
  <el-footer class="copyright">
    <p>某某有限公司 版权所有©2016-2018 技术支持电话：000-00000000</p>
  </el-footer>
  </el-container>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        phoneNum: '',
        verityCode: ''
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 5, max: 16, message: '长度在5到16之间', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 16, message: '长度在5到16之间', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login() {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return
        const { data: res } = await this.$http.post('/login', this.loginForm)
        console.log(res.code)
        if (res.code !== 200) {
          return this.$message.error('登录失败')
        }
        this.$message.success('登录成功')
        this.$router.push('/home')
      })
    }
  }
}
</script>

<style  scoped >
 .login_container {
    background-color: #93defe;
    height: 100%;
    width: 100%;
    margin: auto ;
   background-size: cover;
  }
  .login_img {
    float: left;
    width: 432px;
    height: 440px;
    margin-left:25%;
    margin-top: 8%;
  }
  .login_box {
    height: 360px;
    width: 400px;
    padding: 50px;
    background-color: #ffffff;
    border-radius: 6px;
    box-sizing: border-box;
    float: right;
    margin-right: 25%;
    position: relative;
    margin-top: 8%;
  }
  .login_logo {
    width: 120px;
    height: 120px;
    border: 5px solid #93defe;
    border-radius: 100px;
    background: #fff;
    text-align: center;
    line-height: 110px;
    position: absolute;
    top: -50px;
    right: 140px;
  }
  .login_name {
    margin-top: 30px;
    margin-bottom: -5px;
    width: 100%;
    text-align: center;
    font-size: 25px;
    color: #444;
    padding: 10px 0 20px;
  }
  .btn_login {
    display: inline-block;
    vertical-align: middle;
    padding: 12px 24px;
    margin: 0px;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    border-radius: 3px;
    border: none;
    -webkit-appearance: none;
    outline: none;
    width: 100%;
  }
  .copyright {
    font-size: 14px;
    color: #fff;
    display: block;
    width: 100%;
    float: left;
    text-align: center;
    margin-top: 30px;
  }
  .login_help_img {
    height: 30px;
    width: 30px;
  }
  .login_help {
    float: right;
  }
</style>
