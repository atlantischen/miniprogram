<template>
  <div class="template">
    <div v-if="isVertical">请横屏使用</div>
    <div class="box" v-else>
      <div class="aside">
        <div class="logo">
          <img src="../assets/image/index-logo.png" alt />
        </div>
        <ul class="list">
          <li @click="handleClick(1,'/staff')">
            <img src="../assets/image/icon-rygl.png" alt />
            <span>人员管理</span>
          </li>
          <li @click="handleClick(2,'/access')">
            <img src="../assets/image/icon-mjqx.png" alt />
            <span>门禁权限</span>
          </li>
          <li @click="handleClick(3,'/region')">
            <img src="../assets/image/icon-qugnsm.png" alt />
            <span>区域功能说明</span>
          </li>
          <li @click="handleClick(4)">
            <img src="../assets/image/icon-syzt.png" alt />
            <span>会议室使用状态</span>
          </li>
          <li @click="handleClick(5)">
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
          <keep-alive>
            <router-view></router-view>
          </keep-alive>

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
import Weather from "../views/Weather";
export default {
  name: "Home",
  components: {
    Weather
  },
  data() {
    return {
      selectIndex: null,
      isVertical: true
    };
  },

  mounted() {
    this.renderResize();
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
      // alert(width+"宽高"+height)
      if (width > height) {
        console.log("heng");

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
<style lang="less" scoped >
.template{
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
        margin-bottom: 50px;
        font-size: 20px;
        font-weight: 400;
        color: #fff;
        display: flex;
        align-items: center;
        & > img {
          margin: 0 30px 0 12px;
        }
        & > span {
          white-space: nowrap;
        }
      }
    }
    .active {
      background-image: url("../assets/image/icon-bj.png");
      background-repeat: no-repeat;
      width: 172px;
      height: 87px;
      // height: 94px;
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
      .btn {
        display: flex;
        position: absolute;
        margin-top: 30px;
        right: 10px;
        .btn1 {
          margin-right: 55px;
        }
        img {
          width: 89px;
          height: 89px;
        }
      }
    }
  }
}
</style>
