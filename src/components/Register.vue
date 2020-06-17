<template>
  <el-container>
    <el-header class="header">
    </el-header>
    <el-main class="main">
      <el-row :gutter="0">
        <el-col :span="8" offset="10">
          <div class="register_box">
          <span class="register_name">Community注册</span>
          <el-form   label-width="0px">
            <el-form-item >
              <el-input placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item >
              <el-input placeholder="手机号"></el-input>
            </el-form-item>
            <el-form-item >
              <el-row :gutter="15">
                <el-col :span="15">
              <el-input placeholder="短信验证码"></el-input>
                </el-col>
                <el-col :span="8" >
              <el-button  class="btn_verity" >获取验证码</el-button>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item >
              <el-input placeholder="设置密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="确认密码"></el-input>
            </el-form-item>
            <el-form-item class="statement">
              <el-row :gutter="0">
              <el-col :span="14">
              <p>点击注册，表示您同意Community</p>
              </el-col>
              <el-col :span="10">
              <a href="#">《服务协议及隐私声明》</a>
              </el-col>
              </el-row>
            </el-form-item>
            <el-form-item >
              <el-button type="primary" class="btn_register" >注册</el-button>
            </el-form-item>
          </el-form>
          </div>
        </el-col>
      </el-row>
    </el-main>
    <el-footer class="footer">
      <p>某某有限公司 版权所有©2016-2018 技术支持电话：000-00000000</p>
    </el-footer>
  </el-container>
</template>
<script>
export default {
  name: 'Register'
}
</script>

<style scoped lang="less">
  .header {
    width: 100%;
    height: 48px;
    padding: 16px 16px 16px 16px;
    border: 1px solid #e1e1e1;
  }
  .main {
    border-bottom:1px solid #e1e1e1 ;
  }
  .statement {
    line-height: 0px;
  }
  .register_name {
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    line-height: 50px;
    color: #333;
  }
  .register_box {
    width: 330px;
    height: 463px;
  }
  .btn_register {
    display: block;
    width: 100%;
    height: 52px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    border-radius: 2px;
  }
  .footer {
    margin: 20px auto 0;
    width: 100%;
    height: 42px ;
  }

</style>
