<template>
  <el-container>
    <el-header>
      <div class="navbar-main"></div>
      <el-row :gutter="5">
        <el-col :span="2" offset="5">
          <a href="#" class="navbar-item navbar-logo" ><img src="../assets/image/home/logo.svg"></a>
        </el-col>
        <el-col :span="1" >
          <a href="#" class="navbar-item " >Home</a>
        </el-col>
        <el-col :span="1" >
          <a href="#" class="navbar-item " >Archives</a>
        </el-col>
        <el-col :span="1" >
          <a href="#" class="navbar-item " >Categories</a>
        </el-col>
        <el-col :span="1" >
          <a href="#" class="navbar-item " >Tags</a>
        </el-col>
        <el-col :span="1" >
          <a href="#" class="navbar-item " >About</a>
        </el-col>
        <el-col :span="6" >
          <el-input class=" navbar-item-input" placeholder="请输入关键词"  suffix-icon="el-icon-search"></el-input>
        </el-col>
        <el-col :span="1" offset="4">
          <a href="#" class="navbar-item">Register</a>
        </el-col>
          <el-col :span="1">
           <a href="#" class="navbar-item">Login</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container class="dashboard_main_container">
      <el-aside class="dashboard_aside_left">
        <div class="dashboard_aside_userinfo">
        </div>
      </el-aside>
      <el-main class="dashboard_main">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </el-main>
      <el-aside class="dashboard_aside_right">
        <div class="dashboard_aside_right_recent"></div>
      </el-aside>
    </el-container>
    <el-footer></el-footer>
  </el-container>
</template>

<script >
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

<style  >
  .navbar-item-input {
    padding: 10px 10px;
  }
  .navbar-item {
    height: 60px;
    width: auto;
    padding: 20px 10px;
    line-height: 20px;
    font-family: sans-serif;
  }
  .navbar-logo {
    padding: 17px 10px;
  }
  .navbar-logo img {
    height: 97px;
    max-height: 26px;
  }
  .navbar-main {
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  }
  .navbar-main .navbar-item {
    display: flex;
    align-items: center;
    padding: 1.25rem 0.75rem;
    margin: 0 0;
  }
  a.navbar-item {
    cursor: pointer;
    color: #343a40;
  }
  .navbar-item {
    display: block;
    flex-grow: 0;
    flex-shrink: 0;
  }
  .navbar-item a  {
    cursor: pointer;
    text-decoration: none;
  }
  .navbar-item a:visited {
    text-decoration: none;
  }

  .el-main {
    display: block;
    flex: none;
    flex-basis: auto;
    overflow: auto;
    box-sizing: border-box;
    padding: 20px;
  }
  .dashboard_aside_right_recent {
    width: 100%;
    padding: 1.5rem;
    height: 430px;
  }
  .dashboard_aside_userinfo {
    height: 430px;
    width: 100%;
    padding: 1.5rem;
  }
  .dashboard_aside_left {
    height: 338px;
    width: 25%;
    height: 4706px;
    padding: 0.75rem;
  }
  .dashboard_aside_right {
    width: 25%;
    height: 4706px;
    padding: 0.75rem;
  }
  .dashboard_main {
    width: 50%;
    height: 4706px;
    padding: 0.75rem;
  }
  .dashboard_main_container {
    width: 100%;
    height: 4706px;
    padding: 42px 21px ;
  }
  .el-header {
    padding-top: 5px;
    padding-bottom: 5px;
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
    background-color: var(--blue) ;
    color: var(--white);
  }
  .a_register {
    padding: 15px;
    line-height: 20px;
    background-color: var(--blue) ;
    color: var(--white);
  }
  .input_nav {
    margin: 5px 0 ;
  }

</style>
