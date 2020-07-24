<template>
  <div class="container">
    <div class="title">
      <span class="title_desc">会议室一</span>
    </div>
    <div class="swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
        </div>
        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
      </div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="state">
      <div class="up">
        <div class="times">
          <div class="use_time">使用时间</div>
          <div class="time_number">2020-12-25</div>
        </div>
        <div class="states">
          <div class="use_state">使用状态</div>
          <div class="state_desc">未使用</div>
        </div>
      </div>
      <div class="middle">
        <div class="personnel">
          <div class="use_personnel">使用人员</div>
          <div class="department_desc">行政部</div>
        </div>
        <div class="matter">
          <div class="use_matter">使用事项</div>
          <div class="matter_desc">未使用</div>
        </div>
      </div>
      <div class="down">
        <div class="appointment">
          <div class="use_appointment">会议室预约</div>
          <div class="appointment_desc">已预约</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  //
  data() {
    return {
      show: false
    };
  },
  computed: {},
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {

      effect: "coverflow",
      slidesPerView: 2,
      initialSlide: 1,
      spaceBetween: 0,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0, // 指的时后面一张图片被前一张图片遮挡的部分
        depth: 200, // 图片缩小的部分
        modifier: 2
      },
      // direction: 'vertical', // 垂直切换选项
      // loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }

      // 如果需要滚动条
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    });
  },
  methods: {}
};
</script>

<style   lang='less'>
.container {
  width: 633px;
  height: 422px;
  background-image: url("../assets/image/index-bj.png");
  background-size: 100% 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    background-image: url("../assets/image/index-bq.png");
    background-size: 100%;

    width: 595px;
    height: 45px;
    position: relative;
    .title_desc {
      position: absolute;
      left: 43px;
      bottom: 5px;
      font-size: 28px;
      font-family: HYGangYiTiJ;
      font-weight: 400;
    }
  }
  .swiper {
    width: 100%;
    position: relative;
    margin-top: 10px;
    .swiper-container {
      width: 520px;
      height: 189px;
      .swiper-slide {
        background-color: #ff6700;
        height: 189px;
      }
    }
    // .swiper-slide {
    //   width: auto !important;
    //   margin-right: 15px !important;
    // }
    .swiper-button-prev,
    .swiper-button-next {
      width: 44px;
      height: 44px;
      user-select: none;
      background-size: 100%;
      &::after {
        content: "";
      }
    }
    .swiper-button-prev {
      left: 43px;
      background-image: url("../assets/image/index-left.png");
      background-repeat: no-repeat;
      background-size: 100%;
    }
    .swiper-button-next {
      right: 36px;
      background-image: url("../assets/image/index-right.png");
      background-repeat: no-repeat;
      background-size: 100%;
    }
    .swiper-pagination {
      width: 100px;
      height: 10px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: center;
      margin-top: 10px;
    }
    .swiper-pagination-bullet {
      background-color: #fff;
      margin-right: 12px;
      opacity: 1;
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
    .swiper-pagination-bullet-active {
      background: linear-gradient(
        94deg,
        rgba(0, 182, 255, 1) 0%,
        rgba(0, 255, 246, 1) 100%
      );
    }
  }
  .state {
    width: 100%;
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .up,
    .middle,
    .down {
      width: 602px;
      height: 45px;
      display: flex;
      align-items: center;
      font-size: 26px;
    }
    .times,
    .states,
    .personnel,
    .matter,
    .appointment {
      display: flex;
      justify-content: space-between;
    }
    .state_desc,
    .time_number,
    .department_desc,
    .matter_desc,
    .appointment_desc {
      color: #01bbf6;
    }
    .up {
      background: rgba(6, 103, 150, 1);
      .times {
        width: 308px;
        margin: 0 29px 0 11px;
      }
      .states {
        width: 211px;
      }
    }
    .middle {
      .personnel {
        width: 255px;
        margin: 0 82px 0 11px;
      }
      .matter {
        width: 211px;
      }
    }
    .down {
      background: rgba(6, 103, 150, 1);
      .appointment {
        // width: 238px;
        .use_appointment {
          margin: 0 45px 0 11px;
        }
      }
    }
  }
}
</style>