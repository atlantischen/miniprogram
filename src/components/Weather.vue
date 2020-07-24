<template>
  <div class="hello">
    <!-- <div id="weather-view-he"></div> -->
  </div>
</template>

<script>
export default {
  name: "Weather",
  mounted() {
    window.WIDGET = { FID: "aij3hJpuYz" };
    var a = document.getElementById("weather-float-he");
    if (a) {
      a.parentNode.removeChild(a);
    }
    a = document.createElement("div");
    a.id = "weather-float-he";
    // console.log(a);
    var b = document.getElementsByClassName("hello")[0];
    b.appendChild(a);
    var c = document.createElement("link");
    c.rel = "stylesheet";
    c.href =
      "https://apip.weatherdt.com/float/static/css/tqw_widget_float.css?v=0101";
    var s = document.createElement("script");
    s.src =
      "https://apip.weatherdt.com/float/static/js/tqw_widget_float.js?v=0101";
    var sn = document.getElementsByTagName("script")[0];
    sn.parentNode.insertBefore(c, sn);
    sn.parentNode.insertBefore(s, sn);
  }
};
</script>

<style>
#weather-float-he {
  position: absolute;
  padding: 0px;
  top: 50px !important;
  right: 20px !important;
  pointer-events: none;
  /* left: 1160px !important; */
  /* right: 8px !important;; */
}
</style>