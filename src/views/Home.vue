<template>
  <div class="template">
    <!-- <div v-if="isVertical">请横屏使用</div> -->
    <div class="box">
      <div class="aside">
        <div class="logo">
          <img src="../assets/image/index-logo.png" alt />
        </div>
        <ul class="list">
          <li @click="handleClick(1, '/staff')" :class="{ 'is-active': selectIndex === 1 }">
            <img src="../assets/image/icon-rygl.png" alt />
            <span>人员管理</span>
          </li>
          <li @click="handleClick(2, '/access')" :class="{ 'is-active': selectIndex === 2 }">
            <img src="../assets/image/icon-mjqx.png" alt />
            <span>门禁权限</span>
          </li>
          <li @click="handleClick(3, '/region')" :class="{ 'is-active': selectIndex === 3 }">
            <img src="../assets/image/icon-qugnsm.png" alt />
            <span>区域功能说明</span>
          </li>
          <li @click="handleClick(4)" :class="{ 'is-active': selectIndex === 4 }">
            <img src="../assets/image/icon-syzt.png" alt />
            <span>会议室使用状态</span>
          </li>
          <li @click="handleClick(5)" :class="{ 'is-active': selectIndex === 5 }">
            <img src="../assets/image/icon-ryjk.png" alt />
            <span>能源监控</span>
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

          <div class="btn">
            <div class="btn1">
              <img src="../assets/image/index-gj.png" alt />
            </div>
            <div class="btn2">
              <img src="../assets/image/index-gj.png" alt />
            </div>
          </div>
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
      isVertical: true
    };
  },

  mounted() {
    this.renderResize();
    var flexible = new Flexible(1334, 750, "fixed_width ");
    window.addEventListener("resize", this.renderResize, false);
  },
  beforeDestroy() {},
  methods: {
    handleClick(index, path) {
      this.$router.push(`${path}`);
      this.selectIndex = index;
    },
    renderResize() {
      // 判断横竖屏
      let width = document.documentElement.clientWidth;
      let height = document.documentElement.clientHeight;
      if (width > height) {
        this.isVertical = false;
        window.removeEventListener("resize", this.renderResize, false);
      } else {
        this.isVertical = true;
      }

      // 做页面适配
      // 注意：renderResize方法执行时虚拟dom尚未渲染挂载，如果要操作vue实例，最好在this.$nextTick()里进行。
    }
  }
};
</script>
<style lang="less" scoped>
@keyframes a {
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
        transition: all 0.5s ease;
        & > img {
          margin: 0 30px 0 12px;
          z-index: 2;
        }
        & > span {
          white-space: nowrap;
          z-index: 2;
        }
        &.is-active {
          // font-size: 25px;
        }
        &.is-active::after {
          content: "";
          position: absolute;
          width: 172px;
          height: 94px;
          background: url(../assets/image/icon-bj.png) no-repeat;
          animation: a 0.4s ease forwards;
          background-size: 100% 100%;
        }
      }
    }
    // .active {
    //   background-image: url("../assets/image/icon-bj.png");
    //   background-repeat: no-repeat;
    //   width: 172px;
    //   height: 87px;
    //   // height: 94px;
    // }
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
