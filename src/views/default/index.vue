<template>
  <el-container>
    <el-header>
        <div class="class_nav container">
              <div class="class_navitem clearfix">                
                  <el-select 
                  v-model="Moduletype" clearable filterable @change="handelModuletype" placeholder="请选择模块类型">
                    <el-option
                      v-for="item in classData[0].children"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
              </div>
              <div class="class_navitem clearfix" >                
                  <el-select v-model="ApplyPage" clearable filterable @change="handelApplyPage" placeholder="请选择适用页面">
                    <el-option
                      v-for="item in classData[1].children"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
              </div>
              <div class="class_navitem clearfix" >                
                  <el-select v-model="EffeWidth" clearable filterable @change="handelEffeWidth" placeholder="请选择有效宽度">
                    <el-option
                      v-for="item in classData[2].children"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
              </div>
              <div class="class_navitem clearfix" >                
                  <el-select v-model="author" clearable filterable @change="handelauthor" placeholder="请选择添加人">
                    <el-option
                      v-for="item in classData[3].children"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
              </div>
              <div class="class_navitem clearfix" >                
                  <el-select v-model="TypeOrder" clearable filterable @change="handelTypeOrder" placeholder="请选择排版顺序">
                    <el-option
                      v-for="item in classData[4].children"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
              </div>
        </div>
    </el-header>
    <el-main>
    <div class="Ltt_list">
        <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="getData"
                  	:gap="20"
                    :loadingDotCount='0'
                    :maxCols='5'
                    :imgWidth='305'
                    :timeOut="500">
            <div class="img-info" slot-scope="props">
                 <a class="some-info-down" target="_blank" :href="props.value.file"><i class="el-icon-download"></i>下载</a>
                 <p class="some-info-name">{{props.value.ApplyPage}}</p>
                 <p class="some-info-icon">
                   <span class="el-icon-s-marketing"><i>{{props.value.ModuleType}}</i></span>
                   <span class="el-icon-s-platform"><i>{{props.value.EffWidth}}</i></span>
                   <span class="el-icon-s-custom"><i>{{props.value.Author}}</i></span>
                 </p>
            </div>
        </vue-waterfall-easy>
    </div>
    </el-main>
  </el-container>
</template>
<script>
import TemJson from "static/js/temModule";
import vueWaterfallEasy from 'vue-waterfall-easy';
export default {
    name: 'defaultPage',
    data() {
      return {
        imgsArr: [],
        group: 0,
        initDatalist:[],
        pullDownDistance: 0,
        classData:[
          {
            id:1,
            type:'Moduletype',
            name:'模块类型',
            children:[             
              {
                value: '页头',
                label:"页头",
                isOn:true,
              },
              {
                value: 'banner',
                label:"banner",
                isOn:false,
              },
              {
                value: '组合页头',
                label:"组合页头",
                isOn:false,
              },
              {
                value: '图文列表',
                label:"图文列表",
                isOn:false,
              },
              {
                value: '文字列表',
                label:"文字列表",
                isOn:false,
              },
              {
                value: '组合列表',
                label:"组合列表",
                isOn:false,
              },
              {
                value: '分类列表',
                label:"分类列表",
                isOn:false,
              },
              {
                value: '图文详情',
                label:"图文详情",
                isOn:false,
              },
              {
                value: '正文详情',
                label:"正文详情",
                isOn:false,
              },
              {
                value: '组合详情',
                label:"组合详情",
                isOn:false,
              },
              {
                value: '组合长尾词',
                label:"组合长尾词",
                isOn:false,
              },
              {
                value: '组合新闻',
                label:"组合新闻",
                isOn:false,
              },
              {
                value: '公司简介',
                label:"公司简介",
                isOn:false,
              },
              {
                value: '公司文化',
                label:"公司文化",
                isOn:false,
              },
              {
                value: '公司服务',
                label:"公司服务",
                isOn:false,
              },
              {
                value: '公司实力',
                label:"公司实力",
                isOn:false,
              },
              {
                value: '国际合作',
                label:"国际合作",
                isOn:false,
              },
              {
                value: '联系方式',
                label:"联系方式",
                isOn:false,
              },
              {
                value: '留言板',
                label:"留言板",
                isOn:false,
              },
              {
                value: '装饰模块',
                label:"装饰模块",
                isOn:false,
              },
              {
                value: '页脚',
                label:"页脚",
                isOn:false,
              }
            ]
          },
          {
            id:2,
            type:'ApplyPage',
            name:'适用页面',
            children:[

              {
                value: '首页',
                label: '首页',
                isOn:false,
              },
              {
                value: '关于我们',
                label:"关于我们",
                isOn:false,
              },
              {
                value: '列表页',
                label:"列表页",
                isOn:true,
              },
              {
                value: '详情页',
                label:"详情页",
                isOn:false,
              },
              {
                value: '联系我们',
                label:"联系我们",
                isOn:false,
              },
              {
                value: '长尾词页',
                label:"长尾词页",
                isOn:false,
              },
            ]
          },
          {
            id:3,
            type:'EffeWidth',
            name:'有效宽度',
            children:[
              {
                value: '通屏',
                label:"通屏",
                isOn:false,
              },
              {
                value: '1600',
                label:"1600",
                isOn:false,
              },
              {
                value: '1440',
                label:"1440",
                isOn:false,
              },
              {
                value: '1280',
                label:"1280",
                isOn:true,
              },
              {
                value: '960',
                label:"960",
                isOn:false,
              }
            ]
          },
          {
            id:4,
            type:'author',
            name:'添  加  人',
            children:[
              {
                value: '聂亚兵',
                label:"聂亚兵",
                isOn:true,
              },
              {
                value: '张校远',
                label:"张校远",
                isOn:false,
              },
              {
                value: '聂俊辉',
                label:"聂俊辉",
                isOn:false,
              },
              {
                value: '王军凯',
                label:"王军凯",
                isOn:false,
              },
              {
                value: '张晗',
                label:"张晗",
                isOn:false,
              }
            ]
          },
          {
            id:5,
            type:'author',
            name:'排版顺序',
            children:[
              {
                value: '从小到大',
                label:"从小到大",
                isOn:true,
              },
              {
                value: '从大到小',
                label:"从大到小",
                isOn:false,
              }
            ]
          }
        ],
        SearchCriteria:{
          Moduletype:'',
          ApplyPage:'',
          EffeWidth:'',
          author:'',
          TypeOrder:'',
        },
        Moduletype:'',
        ApplyPage:'',
        EffeWidth:'',
        author:'',
        TypeOrder:'',
      }
    },
    components: {
      vueWaterfallEasy
    },
    mounted() {
      var $this=this;
      $this.initStart()
    },
    methods: {
       initStart:function(){
         var $this=this;
         console.log(TemJson);
         var arrlist=[];
         TemJson.forEach(function(item,index){
            var arrObj={
                name:"",
                src:"",
                ModuleType:"",
                ApplyPage:"",
                EffWidth:"",
                Author:"",
                TypeOrder:"",
                file:""
            };
            arrObj.name=item.name;
            arrObj.src=require('static/filepic/'+ item.src);
            arrObj.ModuleType=item.ModuleType;
            arrObj.ApplyPage=item.ApplyPage;
            arrObj.EffWidth=item.EffWidth;
            arrObj.Author=item.Author;
            arrObj.TypeOrder=item.TypeOrder;
            arrObj.file=require('static/file/'+ item.file);
            arrlist.push(arrObj);
         });
         $this.initDatalist=arrlist;
         $this.imgsArr=$this.filterResult($this.initDatalist,$this.SearchCriteria);
       },
       getData:function(){
         var $this=this;
       },
       // 模块类型change事件
       handelModuletype:function(val){
          var $this = this;
          $this.Moduletype = val;
          console.log($this.Moduletype,"$this.Moduletype");
          $this.SearchCriteria.Moduletype = $this.Moduletype;
          $this.imgsArr=$this.filterResult($this.initDatalist,$this.SearchCriteria);
       },
       // 适用页面change事件
       handelApplyPage:function(val){
          var $this = this;
          $this.ApplyPage = val;
          console.log($this.ApplyPage,"$this.ApplyPage");
          $this.SearchCriteria.ApplyPage = $this.ApplyPage;
          $this.imgsArr=$this.filterResult($this.initDatalist,$this.SearchCriteria);
       },
       // 有效宽度change事件
       handelEffeWidth:function(val){
          var $this = this;
          $this.EffeWidth = val;
          console.log($this.EffeWidth,"$this.EffeWidth");
          $this.SearchCriteria.EffeWidth = $this.EffeWidth;
          $this.imgsArr=$this.filterResult($this.initDatalist,$this.SearchCriteria);
       },
       // 添加人change事件
       handelauthor:function(val){
          var $this = this;
          $this.author = val;
          console.log($this.author,"$this.author");
          $this.SearchCriteria.author = $this.author;
          $this.imgsArr=$this.filterResult($this.initDatalist,$this.SearchCriteria);
       },
       // 排版顺序change事件
       handelTypeOrder:function(val){
          var $this = this;
          $this.TypeOrder = val;
          console.log($this.TypeOrder,"$this.author");
          $this.SearchCriteria.TypeOrder = $this.TypeOrder;
          $this.imgsArr=$this.filterResult($this.initDatalist,$this.SearchCriteria);
       },
      // 获取过滤筛选条件后的数据
      filterResult: function(initData,SearchCriteria) {
        var filterModuleData = this.filterDataModule(initData,SearchCriteria.Moduletype);
        var filterApplyPageData = this.filterDataApplyPage(filterModuleData,SearchCriteria.ApplyPage);
        var filterEffeWidthData = this.filterDataEffeWidth(filterApplyPageData,SearchCriteria.EffeWidth);
        var filterauthorData = this.filterDataAuthor(filterEffeWidthData,SearchCriteria.author);
        var filterTypeOrderData = this.filterDataTypeOrder(filterauthorData,SearchCriteria.TypeOrder);
        return filterTypeOrderData;
      },
      // 过滤模块类型
      filterDataModule: function(initData,itemParam) {
        var newData = [];
        if (itemParam.length > 0) {
          initData.forEach(function(item) {
              if (itemParam == item.ModuleType) {
                newData.push(item);
              }
          });
        } else {
            newData=initData;
        }
        return newData;
      },
      // 过滤适用页面
      filterDataApplyPage: function(initData,itemParam) {
        var newData = [];
        if (itemParam.length > 0) {
          initData.forEach(function(item) {
              if (itemParam == item.ApplyPage) {
                newData.push(item);
              }
          });
        } else {
            newData=initData;
        }
        return newData;
      },
      // 过滤有效宽度
      filterDataEffeWidth: function(initData,itemParam) {
        var newData = [];
        if (itemParam.length > 0) {
          initData.forEach(function(item) {
              if (itemParam == item.EffWidth) {
                newData.push(item);
              }
          });
        } else {
            newData=initData;
        }
        return newData;
      },
      // 过滤添加人
      filterDataAuthor: function(initData,itemParam) {
        var newData = [];
        if (itemParam.length > 0) {
          initData.forEach(function(item) {
              if (itemParam == item.Author) {
                newData.push(item);
              }
          });
        } else {
            newData=initData;
        }
        return newData;
      },
      // 过滤排版顺序
      filterDataTypeOrder: function(initData,itemParam) {
        var newData = [];
        if (itemParam.length > 0) {
          initData.forEach(function(item) {
              if (itemParam == item.TypeOrder) {
                newData.push(item);
              }
          });
        } else {
            newData=initData;
        }
        return newData;
      },
      //点击来源页面跳转
      See:function(e){
        window.open(e, '_blank');
      },

    }
}
</script>

<style lang="scss" scoped>
.class_nav{
  clear: both;
  overflow: hidden;
  .class_navitem{
      float: left;
      margin-right:20px;
      position: relative;
      strong{
        position: absolute;
        left:0px;
        top:6px;
        font-size:14px;
      }
      span{
        float: left;
        font-size:14px;
        border:1px solid #ccc;
        line-height:1;
        padding:7px 10px;
        margin-bottom:8px;
        margin-left:8px;
        border-radius:3px;
        color:#666;
        cursor: pointer;
        &.active{
          color: #f60;
          border-color: #f60;
        }
      }
  }
}
.el-container{
  height:100%;
  .el-header{
    background: #fff;
    border-bottom:1px solid #d9e2ea;
    padding:20px 0px;
    height:auto!important;
  }
  .el-main {
    color: #333;
    text-align: center;
    line-height:30px;
    padding:0px;
    position: relative;
    .Ltt_list{
      position: absolute;
      top:0px;
      bottom:0px;
      left:20px;
      right: 20px;
      .img-info{
        clear: both;
        position: relative;
        background: #fff;
        border:1px solid #d9e2ea;
        .some-info-name{
          clear: both;
          display: block;
          padding:5px 15px;
          font-size: 14px;
          font-weight: bold;
          color:#168ee1;
          text-align: left;
        }
        .some-info-icon{
          clear: both;
          display: block;
          overflow: hidden;
          text-align: left;          
          font-size: 12px;
          background: #f6f6f6;
          border-top: 1px solid #e7e7e7;
          box-shadow: 0 1px 0 0 #fff inset;
          padding: 0px 0px 0px 13px;
          color: #8B8B8C;
          height: 36px;
          span{
            float: left;
            height:20px;
            font-size:16px;
            position: relative;
            line-height:20px;
            text-align:center;
            margin-top:8px;
            cursor: pointer;
            margin-right:15px;
            i{
              font-style: normal;
              font-size:12px;
              z-index: 2;
              padding-left:5px;
              line-height:20px;
              display: inline-block;
            }
          }
        }
        .some-info-down{
          position: absolute;
          width: 62px;
          height: 32px;
          line-height: 32px;
          background: #f6f6f6;
          display: block;
          position: absolute;
          right: 0;
          top: -32px;
          text-align: center;
          color: #05920a;
          &:hover{
            background: #05920a;
            color: #f6f6f6;
          }
        }
      }
    }
  }
}
.vue-waterfall-easy-container .vue-waterfall-easy a.img-inner-box[data-v-ded6b974]{box-shadow: none; border-radius:0px;}
</style>
