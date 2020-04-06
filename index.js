let wrapper = document.querySelector('.rightphoneList_bigbox')
let scroll = new BScroll(wrapper)
 console.log(scroll)
infofun()

function infofun(){
  var navImg = ['./img/menu.png','./img/sj.png','./img/wx.png']
  var navImgActive = ['./img/menuactive.png','./img/sjactive.png','./img/wxactive.png']
  var infoIndex = 0
  // 页面导航dome
  var $pageNavDome = $('.main_pageNav li')
  // 左边菜单dome
  var $leftNavDome = $('.leftphoneNav_bigbox li')
  // 头部菜单
  $('.header_nav li').click(function(){
      $(this).addClass('activaNav').siblings().removeClass('activaNav')
      $(this).children('div').addClass('activeline').parent('li').siblings().children('div').removeClass('activeline')
  })
  //页面导航区
  $pageNavDome.click(function () {
      $pageNavDome.eq(infoIndex).find('img').attr('src',navImg[infoIndex])
      infoIndex = $(this).index()
      $(this).find('img').attr('src',navImgActive[infoIndex])
    
  })
  // 左边菜单切换
  $leftNavDome.click(function () {
    $(this).addClass('activeitem').siblings().removeClass('activeitem')
  })
}
