<template>
  <el-container>
    <el-header><header-module></header-module></el-header>
    <el-main><router-view /></el-main>
  </el-container>
</template>

<script>
import HeaderModule from './components/HeaderModule';
export default {
  name: 'Layout',
  components: {
    HeaderModule
  }
}
</script>
<style lang="scss">
#app{
  clear:both;
  display:block;
  height:100%;
}
.el-container{
  height:100%;
  .el-header{
    background-color:#0177d5;
    text-align: center;
    padding:20px 30px 20px 30px;
    height:auto!important;
  }
  .el-main {
    color: #333;
    text-align: center;
    line-height:30px;
    padding:0px;
  }
}
</style>
