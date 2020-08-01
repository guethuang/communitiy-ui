<template>
  <el-container class="login_container">
    <el-main class="main">
      <el-row :gutter="10" justify="center" type="flex">
        <el-col :span="10">
          <div class="login-box">
            <div class="login-name">
              <span>Community</span>
            </div>
            <div class="login-tab">
              <el-form  label-width="0px" :rules="loginFormRules" :model="loginForm" ref="loginFormRef">
                <el-form-item class="item-account" prop="username">
                  <el-input v-model="loginForm.username" placeholder="用户名" prefix-icon="el-icon-user"></el-input>
                </el-form-item>
                <el-form-item class="item-account" prop="password">
                  <el-input v-model="loginForm.password" placeholder="密码" type="password" prefix-icon="el-icon-lock"></el-input>
                </el-form-item>
                <el-form-item >
                  <el-button type="primary" class="btn-login" @click="login">登录</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-col>
      </el-row>
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
  .main {
    height:800px ;
  }
  .login-container {
    height: 100%;
    width: 100%;
    margin: auto ;
  }
  .login-box {
    height: 360px;
    width: 400px;
    padding: 50px;
    background-color: #ffffff;
    border-radius: 6px;
    box-sizing: border-box;
    position: relative;
  }
  .login-name {
    margin-top: 30px;
    margin-bottom: -5px;
    width: 100%;
    text-align: center;
    font-size: 25px;
    color: #444;
    padding: 10px 0 20px;
  }
  .btn-login {
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
    display: block;
    width: 100%;
    float: left;
    text-align: center;
    margin-top: 30px;
  }
</style>
