<template>
  <div class="template">
    <!-- <div v-if="isVertical">请横屏使用</div> -->
    <div class="box">
      <div class="aside">
        <div class="logo">
          <img src="../assets/image/index-logo.png" alt />
        </div>
        <ul class="list">
          <li  v-for="item in routeList" :key="item.index" @click="handleClick(item.index, item.route)" :class="{ 'is-active': selectIndex === item.index }">
            <img :src="item.icon" alt />
            <span>{{item.name}}</span>
          </li>
        
        </ul>
      </div>
      <div class="article">
        <div class="weather">
          <Weather />
        </div>
        <div class="content">
          <!-- <keep-alive> -->
          <router-view></router-view>
          <!-- </keep-alive> -->

          <!-- <div class="btn">
            <div class="btn1">
              <img src="../assets/image/index-gj.png" alt />
            </div>
            <div class="btn2">
              <img src="../assets/image/index-gj.png" alt />
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Weather from "../components/Weather";
import Flexible from "../../static/flexible.js";
export default {
  name: "Home",
  components: {
    Weather
  },
  data() {
    return {
      selectIndex: 1,
      isVertical: true,
      routeList:[
      {index:1,name:'人员管理',route:'/staff',icon:require('../assets/image/icon-rygl.png')},
      {index:2,name:'门禁权限',route:'/access',icon:require('../assets/image/icon-mjqx.png')},
      {index:3,name:'区域功能说明',route:'/area',icon:require('../assets/image/icon-qugnsm.png')},
      {index:4,name:'会议室使用状态',route:'/meeting',icon:require('../assets/image/icon-syzt.png')},
      {index:5,name:'能源监控',route:'/monitor',icon:require('../assets/image/icon-ryjk.png')}]
    };
  },
  watch:{
    // 监听路由的变化
    $route:{
      handler(to){
       for(let item of this.routeList){
         if(item.route ===to.path) this.selectIndex =item.index
       }
      },
      immediate:true
    }
  },

  mounted() {
    this.renderResize();
    var flexible = new Flexible(1334, 750, "fixed_width ");
    window.addEventListener("resize", this.renderResize, false);
  },
  beforeDestroy() {},
  methods: {
    // 路由跳转
    handleClick(index, path) {
      this.$router.push(`${path}`);
    },
    renderResize() {
      // 判断横竖屏
      let width = document.documentElement.clientWidth;
      let height = document.documentElement.clientHeight;
      if (width > height) {
        // window.location.reload()
        console.log('weew');
        
        window.removeEventListener("resize", this.renderResize, false);
      } else {
        // this.isVertical = true;
        console.log('sushu');

      }

      // 做页面适配
      // 注意：renderResize方法执行时虚拟dom尚未渲染挂载，如果要操作vue实例，最好在this.$nextTick()里进行。
    }
  }
};
</script>
<style lang="less" scoped>
@keyframes move {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
.template {
  width: 100%;
  height: 100%;
}
.box {
  width: 100%;
  height: 100%;
  background-image: url("../assets/image/index-bj5.png");
  background-position: center;
  display: flex;
  .aside {
    padding: 52px 0 0 0;
    box-sizing: border-box;
    .logo {
      margin-left: 26px;
      & > img {
        width: 159px;
        height: 49px;
      }
    }
    .list {
      width: 100%;
      margin-top: 120px;
      & > li {
        height: 50px;
        position: relative;
        margin-bottom: 50px;
        font-size: 20px;
        font-weight: 400;
        color: #fff;
        display: flex;
        align-items: center;
        -webkit-transition: all 0.5s ease;
        -moz-transition: all 0.5s ease;
        -ms-transition: all 0.5s ease;
        transition: all 0.5s ease;
        & > img {
          margin: 0 30px 0 12px;
          z-index: 2;
        }
        & > span {
          white-space: nowrap;
          z-index: 2;
        }
        &.is-active::after {
          content: "";
          position: absolute;
          width: 172px;
          height: 94px;
          background: url(../assets/image/icon-bj.png) no-repeat;
         -webkit-animation: move 0.4s ease ;
         -moz-animation: move 0.4s ease ;
         -ms-animation: move 0.4s ease ;
          animation: move 0.4s ease ;
          background-size: 100% 100%;
        }
      }
    }
  }
  .article {
    width: 100%;
    height: 100%;
    position: relative;
    .weather {
      #weather-view-he {
        top: 453px;
        left: 8px;
      }
    }
    .content {
      position: absolute;
      top: 154px;
      right: 50px;
      background-repeat: no-repeat;
      padding: 9px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      .btn {
        display: flex;
        margin-top: 30px;
        padding-right: 10px;
        justify-content: flex-end;
        .btn1 {
          margin-right: 55px;
        }
        img {
          width: 89px;
          height: 89px;
        }
      }
    }
    @media screen and (min-width: 800px) {
      // .content {
      //   flex-direction: row-reverse;
      //   .btn {
      //     align-items: flex-end;
      //   }
      // }
    }
  }
}
</style>
