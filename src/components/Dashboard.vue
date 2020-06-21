<template>
  <el-container>
    <el-header>
      <div class="header">
        <el-row :gutter="5">
          <el-col :span="4">
        <a href="#" class="nav_brand">码匠社区</a>
        </el-col>
        <el-col :span="4">
          <el-input class="input_nav"></el-input>
        </el-col>
        <el-col span="8">
        <ul class="ul_nav">
          <li><a href="#" class="a_register">注册</a></li>
          <li><a href="#" class="a_login">登录</a></li>
          <li></li>
        </ul>
        </el-col>
      </el-row>
      </div>
    </el-header>
    <el-main></el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'dashboard',
  data() {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped >
  .el-header {
     padding-top: 5px;
     padding-bottom: 5px;
     background-color: var(--danger) ;
  }
  .header {
    width: 1070px;
    height: 50px;
    margin: auto;
    font-size: 14px;
  }
  .nav_brand {
    float: left;
    height: 50px;
    padding: 15px 15px;
    font-size: 18px;
    line-height: 20px;
    color: #777;
  }
  .a_index {
    margin: auto;
    padding: 7px;
  }
  .ul_nav {
    padding: 12px 15px;
  }
  .a_login {
    padding: 15px;
    line-height: 20px;
  }
  .input_nav {
    margin: 5px 0 ;
  }

</style>
