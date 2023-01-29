$(function () {
  initImgPlayer();
})

function initImgPlayer() {
  const $$ = $(".img-player");
  $(".shutter").shutter({
    shutterW: $$.width(), // 容器宽度
    shutterH: $$.height(), // 容器高度
    isAutoPlay: true, // 是否自动播放
    playInterval: 3000, // 自动播放时间
    // curDisplay: 1, // 当前显示页
    fullPage: false // 是否全屏展示
  });
}