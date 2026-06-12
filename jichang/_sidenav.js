// 侧边栏导航组件
// 更新方法：只需修改 _sidenav.html 文件，所有页面会自动更新
(function() {
  var sidenavHtml = '<ul class="site-nav site-navbar">' +
    '<li><a href="/">首页</a></li>' +
    '<li><a href="/jichang/ny/">奈云</a></li>' +
    '<li><a href="/jichang/yangfanyun/">扬帆云</a></li>' +
    '<li><a href="/jichang/yuzhouyun/">宇宙云</a></li>' +
    '<li><a href="/jichang/dageyun/">大哥云</a></li>' +
    '<li><a href="/jichang/jinglingxueyuan/">精灵学院</a></li>' +
    '<li><a href="/jichang/tidal/">Tidal 潮汐加速</a></li>' +
    '<li><a href="/jichang/wanxiang/">万象加速</a></li>' +
    '<li><a href="/jichang/feimiaoyun/">肥猫云</a></li>' +
    '<li><a href="/jichang/sy/">瞬云</a></li>' +
    '<li><a href="/jichang/feiniaoyun/">飞鸟云</a></li>' +
    '<li><a href="/jichang/longmiaoyun/">龙猫云</a></li>' +
    '</ul>';

  function initSidenav() {
    $('.pagemenus[data-sidenav]').each(function() {
      var $container = $(this);
      var pageKey = $container.data('sidenav');
      $container.html(sidenavHtml);
      // 设置当前页面 active
      $container.find('a[href*="/' + pageKey + '/"]').parent().addClass('active');
    });
  }

  $(document).ready(initSidenav);
})();