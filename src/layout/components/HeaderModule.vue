<template>    
    <div class="adminmaintop container">
        <p class="adminmaintoplogo"><span><img src="../../assets/images/logo.png" alt=""></span>长尾词素材</p>
        <p class="publicClass"><strong>公共样式</strong><span><i class="el-icon-download"></i>移动端优先</span><span><i class="el-icon-download"></i>PC端优先</span></p>
    </div>
</template>
<script>
export default {
    name:"HeaderModule",
}
</script>
<style lang="scss" scoped>
  .adminmaintop{
    overflow:hidden;
    .adminmaintoplogo{
      float:left;
      color:#fff;
      font-size:24px;
      line-height:49px;
      font-weight: bold;
      span{
        display: block;
        float:left;
        width:70px;
        margin-right:15px;
        img{
          display: block;
          width: 100%;
        }
      }
    }
    .publicClass{
      float: right;
      color: #fff;
      font-size:14px;
      padding-top:10px;
      span{
        display: inline-block;
        border-radius:3px;
        margin-left:10px;
        font-size:14px;
        cursor: pointer;
        i{
          margin-right: 5px;
        }
        &:hover{
          color: #ff0;
        }
      }
    }
  }
</style>


