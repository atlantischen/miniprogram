<template>
  <div class="container">
    <div class="meeting_bg">
      <img src="../assets/image/index-bj5.png" alt />
    </div>
    <div class="meeting_item"></div>
    <div class="meeting_desc">
      <div class="desc_title">研究所</div>
      <div class="desc_content">
        区域功能说明区域功能说明区域功能说明区域
        域功能说明区域功能说明,域功能说明区域功能
        说明域功能说明区域功能说明。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Staff"
};
</script>

<style scoped lang='less'>
.container {
  width: 477px;
  height: 422px;
  padding: 9px;
  box-sizing: border-box;
  background-image: url("../assets/image/bg-4.png");
  background-size: 100% 100%;
  background-origin:center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  .meeting_bg {
    width: 460px;
    height: 236px;
    & > img {
      width: 100%;
      height: 100%;
    }
  }
  .meeting_item {
    width: 438px;
    height: 25px;
    margin-top: 7px;
    background-image: url("../assets/image/index-21.png");
  }
  .meeting_desc {
    color: #fff;
    .desc_title {
      font-size: 28px;
      font-family: HYGangYiTiJ;
      font-weight: 400;
      margin-top: 3px;
    }
    .desc_content {
      margin-top: 13px;
      font-size: 22px;
      font-family: Microsoft YaHei;
    }
  }
}
</style>