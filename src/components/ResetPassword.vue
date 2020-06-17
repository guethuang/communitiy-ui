<template>
<el-container>
  <el-header class="header">
    <span>找回密码</span>
  </el-header>
  <el-main >
    <div class="reset_box">
      <div class="reset_box2">
      <el-steps :active="active" finish-status="success" class="reset_step">
        <el-step title="填写用户名"></el-step>
        <el-step title="验证用户身份"></el-step>
        <el-step title="设置新密码"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>
      <div class="div_step1" v-if="active===0">
        <el-form>
          <el-input placeholder="用户名"></el-input>
        </el-form>
      </div>
      <div class="div_step2" v-if="active===1">
        <el-row :gutter="5">
        <span class="span_font_size">请点击获取验证码并在手机：133****3990中查看短信，并填写验证码</span>
          <el-col :span="16">
            <el-input aria-placeholder="短信验证码"></el-input>
          </el-col>
          <el-col :span="8">
            <el-button>获取短信验证码</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="div_step1" v-if="active===2">
        <el-input placeholder="设置密码"></el-input>
        <el-input placeholder="确认密码"></el-input>
      </div>
        <div class="div_step1" v-if="active===3">
          <span class="span_font_size">新密码设置成功！</span>
          <br>
          <span class="span_font_size">请您牢记新密码</span>
        </div>
      <div>
        <el-button style="margin-top: 12px;" @click="next" class="btn_next_step" type="primary">下一步</el-button>
      </div>
    </div>
    </div>
  </el-main>
  <el-footer class="footer">
    <p>某某有限公司 版权所有©2016-2018 技术支持电话：000-00000000</p>
  </el-footer>
</el-container>
</template>

<script>
export default {
  name: 'ResetPassword',
  data() {
    return {
      active: 0
    }
  },

  methods: {
    next() {
      if (this.active++ > 2) this.active = 0
    }
  }
}

</script>
<!--如何改变饿了么的样式-->
<!--方法去掉SCoped 并且找到个样式的默认class-->
<style  lang="less">
  .header {
    width: 100%;
    height: 48px;
    padding: 16px 16px 16px 16px;
    border: 1px solid #e1e1e1;
  }
  @color: #e1e1e1 ;
  @width: 982px;
.reset_box {
  width: @width;
  height: 441px;
  border: 1px solid #e7e7e7;
  border-top: 1px solid #409eff;
  margin: auto;
}
.span_font_size {
  font-size: 15px;
}
.reset_box2 {
  height: 233px;
  width: 980px;
  padding-top: 50px;
  padding-bottom: 100px;
}
  .reset_step {
    text-align: left;
    height: 59px;
    width: 500px;
    margin-left: 240px;
    margin-right: 240px;
  }
  .btn_next_step {
    width: 330px;
    height: 52px;
    margin-top: 6px;
  }
  .el-input__inner {
    width: 330px;
    height: 52px;
  }
  .div_step1 {
    height: auto;
    width: 330px;
    margin: auto;
    margin-top: 50px;
  }
  .div_step2 {
    height: auto;
    width: 330px;
    margin: auto;
    margin-top: 50px;
  }
  .footer {
    margin: 20px auto 0;
    width: 100%;
    height: 42px ;
  }
</style>
