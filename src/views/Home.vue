<template>
  <div class="home">
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <div class="mui-row nav-items">
      <div class="mui-col-xs-4 mui-col-sm-4 nav-item">
        <a href="#">
          <img src="@/assets/menu1.png"
               alt="">
          <p>新闻资讯</p>
        </a>
      </div>
      <div class="mui-col-xs-4 mui-col-sm-4 nav-item">
        <a href="#">
          <img src="@/assets/menu2.png"
               alt="">
          <p>图片分享</p>
        </a>
      </div>
      <div class="mui-col-xs-4 mui-col-sm-4 nav-item">
        <a href="#">
          <img src="@/assets/menu3.png"
               alt="">
          <p>商品购买</p>
        </a>
      </div>
      <div class="mui-col-xs-4 mui-col-sm-4 nav-item">
        <a href="#">
          <img src="@/assets/menu4.png"
               alt="">
          <p>浏览反馈</p>
        </a>
      </div>
      <div class="mui-col-xs-4 mui-col-sm-4 nav-item">
        <a href="#">
          <img src="@/assets/menu5.png"
               alt="">
          <p>视频专区</p>
        </a>
      </div>
      <div class="mui-col-xs-4 mui-col-sm-4 nav-item">
        <a href="#">
          <img src="@/assets/menu6.png"
               alt="">
          <p>联系我们</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.home {
  .mint-swipe {
    height: 200px;
    .mint-swipe-item {
      text-align: center;
      line-height: 200px;
      font-size: 30px;
      color: #fff;
      &:nth-of-type(1) {
        background: rgb(250, 250, 128);
      }
      &:nth-of-type(2) {
        background: rgb(134, 247, 185);
      }
      &:nth-of-type(3) {
        background: rgb(128, 236, 250);
      }
    }
  }
  .nav-items {
    .nav-item {
      padding-top:10px;
      text-align: center;
      img {
        width: 60px;
        height: 60px;
      }
      p {
        font-size: 13px;
      }
    }
  }
}
</style>
