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
        <div class="up"></div>
        <div class="middle"></div>
        <div class="down"></div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: "Region",
  methods: {
    drawChart() {
      const myCharts = this.$echarts.init(this.$refs.myCharts);

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
                        [1,new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                          {
                             offset: 0,
                            color: "#15B5FF"
                          },
                          {
                            offset: 0.2,
                            color: "#083175"
                          },
                           {
                            offset: 0.5,
                            color: "#CEE326"
                          },
                          {
                            offset: 0.6,
                            color: "#EBD212"
                          },
                          {
                            offset: 1,
                            color: "#FF6A00"
                          }
                        ])
                      ]
                    ],

              }
            }
          }
        ]
      };
      myCharts.setOption(option);
    }
  },
  mounted() {
    this.drawChart();
  }
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
    display: flex;
    flex-direction: column;
    align-items: center;
    #myCharts {
      height: 250px;
      width: 250px;
    }
    .attendance {
      position: absolute;
      top: 11px;
      right: 50px;
      width: 154px;
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
    .number{
      width: 100%;
      height: 100%;
      margin-top: -25px;
      display:flex;
      flex-direction: column;
      align-items: center;
      font-size: 26px;
      .up,.middle,.down{
        width: 602px;
        height: 45px;
      }
    }
  }
}
</style>