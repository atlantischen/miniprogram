<template>
  <div class="container">
    <div class="header">
      <span>人员管理</span>
    </div>
    <div class="content">

        <div id="myCharts" ref="myCharts"></div>


      <div class="attendance">
        <span class="span1">出勤人数</span>
        <span class="span2">290</span>
      </div>
      <div class="number">
        <div class="up">
          <div class="chuqin">
            <div class="chuqin_person">出勤人数</div>
            <div class="chuqin_num">280</div>
          </div>
          <div class="chidao">
            <div class="chidao_person">迟到人数</div>
            <div class="chidao_num">5</div>
          </div>
        </div>
        <div class="middle">
          <div class="qingjia">
            <div class="qingjia_preson">请假人数</div>
            <div class="qingjia_num">6</div>
          </div>
          <div class="chuchai">
            <div class="chuchai_person">出差人数</div>
            <div class="chuchai_num">20</div>
          </div>
        </div>
        <div class="down">
          <div class="laifang">
            <div class="laifang_person">来访人数</div>
            <div class="laifang_num">10</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "Region",
  methods: {
    drawChart() {
      // 初始化echarts
      const myCharts = this.$echarts.init(this.$refs.myCharts);
      this.myCharts = myCharts;
      let option = {
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%"
        },
        series: [
          {
            name: "业务指标",
            type: "gauge",
            radius: "70%", //仪表大小
            min: 0,
            max: 100,
            detail: {
              show: false
            },
            // grid: {

            //   width: "2.5rem",
            //   height: "2.5rem",

            // },

            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitLine: {
              show: false
            },
            pointer: {
              // 仪表盘指针。
              show: false // 是否显示指针,默认 true。
            },
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                width: 15,
                color: [
                  [0.2, "#91c7ae"],
                  [0.4, "#63869e"],
                  [0.6, "#ff6700"],
                  [1, "#c23531"]
                ]
              }
            }
          }
        ]
      };
      myCharts.setOption(option);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.drawChart();
    });

    let _this = this;
    // Echarts.resize()是echarts的对图表进行重新绘制的方法,结合 函数防抖（debounce）避免在窗口大小变化时频繁的进行图表的resize()。
    window.addEventListener("resize", function() {
      if (_this.resizeTimer) clearTimeout(_this.resizeTimer);
      _this.resizeTimer = setTimeout(function() {
        _this.myCharts.resize();
      }, 100);
    });
  },
  created() {}
};
</script>

<style lang="less" scoped>
.container {
  background-image: url("../assets/image/index-bj.png");
  background-size: 100%;
  width: 633px;
  height: 422px;
  overflow: hidden;
  .header {
    font-size: 28px;
    font-family: HYGangYiTiJ;
    font-weight: 400;
    color: #fff;
    margin: 6px 20px 0;
    width: 595px;
    height: 45px;
    background-image: url("../assets/image/index-bq.png");
    background-size: 100%;
    position: relative;
    & > span {
      position: absolute;
      left: 43px;
      bottom: 5px;
    }
  }
  .content {
    width: 100%;
    position: relative;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
  // .box{
  //    height: 250px;
  //     width: 250px;
  // }
    #myCharts {
      height: 250px;
      width: 250px;
      margin: 0 auto;
      & > div {
        width: 100%;
        height: 100%;
      }
      canvas {
        width: 100%;
        height: 100%;
      }
    }
    .attendance {
      position: absolute;
      top: 11px;
      right: 50px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #0c4987;
      border: 1px solid rgba(0, 182, 255, 1);
      .span1 {
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #ffffff;
        white-space: nowrap;
      }
      .span2 {
        margin-left: 10px;
        font-size: 30px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #00b6ff;
      }
    }
    .number {
      width: 100%;
      margin-top: -25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 26px;
      color: #fff;
      .up,
      .middle,
      .down {
        width: 602px;
        height: 45px;
        display: flex;
        align-items: center;
      }
      .chuqin_num,
      .chidao_num,
      .qingjia_num,
      .chuchai_num,
      .laifang_num {
        color: #01bbf6;
      }
      .up {
        display: flex;
        align-items: center;
        background-color: #066796;
        .chuqin {
          display: flex;
          justify-content: space-between;
          width: 208px;
          margin: 0 127px 0 11px;
        }
        .chidao {
          width: 148px;
          display: flex;
          justify-content: space-between;
        }
      }
      .middle {
        .qingjia {
          width: 180px;
          margin: 0 155px 0 11px;
          display: flex;
          justify-content: space-between;
        }
        .chuchai {
          width: 160px;
          display: flex;
          justify-content: space-between;
        }
      }
      .down {
        display: flex;
        align-items: center;
        background-color: #066796;
        .laifang {
          width: 190px;
          display: flex;
          justify-content: space-between;
          margin-left: 11px;
        }
      }
    }
  }
}
</style>