
var totalArr = [
  // 华为系列
  [
    // 畅享系列
    { name: '畅享系列', children: [
        {title: '华为畅享10E 全网通', set: '4G + 128G 幻夜黑', price: '1090'},
        {title: '华为畅享10E 全网通', set: '4G + 128G 翡冷翠', price: '1090'},
        {title: '华为畅享10E 全网通', set: '4G + 64G 幻夜黑', price: '930'},
        {title: '华为畅享10E 全网通', set: '4G + 64G 珍珠白', price: '940'},
        {title: '华为畅享10E 全网通', set: '4G + 64G 翡冷翠', price: '890'},
        {title: '华为畅享10 Plus 全网通', set: '4G + 128G 天空之境', price: '1240'},
        {title: '华为畅享10 Plus 全网通', set: '4G + 128G 幻夜黑', price: '1230'},
        {title: '华为畅享10 Plus 全网通', set: '4G + 128G 翡冷翠', price: '1205'},
        {title: '华为畅享10 Plus 全网通', set: '6G + 128G 天空之境', price: '1410'},
        {title: '华为畅享10 Plus 全网通', set: '6G + 128G 幻夜黑', price: '1350'},
        {title: '华为畅享10 Plus 全网通', set: '6G + 128G 翡冷翠', price: '1400'},
        {title: '华为畅享10 Plus 全网通', set: '6G + 128G 赤茶橘', price: '1360'},
        {title: '华为畅享10 Plus 全网通', set: '8G + 128G 天空之境', price: '1615'},
        {title: '华为畅享10 Plus 全网通', set: '8G + 128G 幻夜黑', price: '1585'},
        {title: '华为畅享10 Plus 全网通', set: '8G + 128G 翡冷翠', price: '1615'},
        {title: '华为畅享10 Plus 全网通', set: '8G + 128G 赤茶橘', price: '1555'},
        {title: '华为畅享MAX 全网通', set: '6G + 128G 幻夜黑', price: '1630'},
        {title: '华为畅享MAX 全网通', set: '6G + 128G 琥珀棕', price: '1550'},
        {title: '华为畅享10 全网通', set: '4G + 128G 天空之境', price: '1110'},
        {title: '华为畅享10 全网通', set: '4G + 128G 幻夜黑', price: '1070'},
        {title: '华为畅享10 全网通', set: '4G + 128G 极光蓝', price: '1090'},
        {title: '华为畅享10 全网通', set: '4G + 128G 相思红', price: '1115'},
        {title: '华为畅享10 全网通', set: '4G + 64G 天空之境', price: '1005'},
        {title: '华为畅享10 全网通', set: '4G + 64G 幻夜黑', price: '940'},
        {title: '华为畅享10 全网通', set: '4G + 64G 极光蓝', price: '985'},
        {title: '华为畅享10 全网通', set: '4G + 64G 相思红', price: '980'},
        {title: '华为畅享10S 全网通', set: '6G + 128G 幻夜黑', price: '1370'},
        {title: '华为畅享10S 全网通', set: '6G + 128G 翡冷翠', price: '1400'},
        {title: '华为畅享10S 全网通', set: '8G + 128G 天空之境', price: '1525'},
        {title: '华为畅享10S 全网通', set: '8G + 128G 幻夜黑', price: '1520'},
        {title: '华为畅享10S 全网通', set: '8G + 128G 翡冷翠', price: '1535'},
        {title: '华为畅享9 全网通', set: '4G + 128G 幻夜黑', price: '1080'},
        {title: '华为畅享9 全网通', set: '4G + 128G 极光紫', price: '1090'},
        {title: '华为畅享9 全网通', set: '4G + 128G 极光蓝', price: '1130'},
        {title: '华为畅享9 全网通', set: '4G + 128G 珊瑚红', price: '1140'},
        {title: '华为畅享9 全网通', set: '4G + 64G 幻夜黑', price: '880'},
        {title: '华为畅享9 全网通', set: '4G + 64G 极光紫', price: '900'},
        {title: '华为畅享9 全网通', set: '4G + 64G 极光蓝', price: '900'},
        {title: '华为畅享9 全网通', set: '4G + 64G 珊瑚红', price: '895'},
        {title: '华为畅享9S 全网通', set: '4G + 128G 幻夜黑', price: '1110'},
        {title: '华为畅享9S 全网通', set: '4G + 128G 极光蓝', price: '1120'},
        {title: '华为畅享9S 全网通', set: '4G + 128G 珊瑚红', price: '1220'},
        {title: '华为畅享9Plus 全网通', set: '4G + 128G 宝石蓝', price: '1235'},
        {title: '华为畅享9Plus 全网通', set: '6G + 128G 幻夜黑', price: '1345'},
        {title: '华为畅享9Plus 全网通', set: '6G + 128G 极光紫', price: '1320'},
        {title: '华为畅享9E 全网通', set: '3G + 64G 宝石蓝', price: '740'},
        {title: '华为畅享9E 全网通', set: '3G + 64G 幻夜黑', price: '740'},
        {title: '华为畅享9E 全网通', set: '3G + 64G 摩登黑', price: '740'},
        {title: '华为畅享9E 全网通', set: '3G + 64G 琥珀棕', price: '770'},
        {title: '华为畅享8E青春版 全网通', set: '2G + 32G 幻夜黑', price: '530'},
        {title: '华为畅享8E青春版 全网通', set: '2G + 32G 摩登黑', price: '470'},
        {title: '华为畅享8E青春版 全网通', set: '2G + 32G 琥珀棕', price: '450'},
      ] 
    },
    // Nova系列
    { name: 'Nova系列',children: [
        {title: '华为NOVA6 SE 全网通', set: '8G + 128G 幻夜黑', price: '1890'},
        {title: '华为NOVA6 SE 全网通', set: '8G + 128G 樱雪晴空', price: '1980'},
        {title: '华为NOVA6 SE 全网通', set: '8G + 128G 绮境森林', price: '1900'},
        {title: '华为NOVA6 5G 全网通', set: '8G + 128G 亮黑色', price: '2875'},
        {title: '华为NOVA6 5G 全网通', set: '8G + 128G 普罗旺斯', price: '3075'},
        {title: '华为NOVA6 5G 全网通', set: '8G + 128G 苏音蓝', price: '2885'},
        {title: '华为NOVA6 5G 全网通', set: '8G + 128G 蜜语红', price: '2895'},
        {title: '华为NOVA6 5G 全网通', set: '8G + 256G 亮黑色', price: '3280'},
        {title: '华为NOVA6 5G 全网通', set: '8G + 256G 普罗旺斯', price: '3390'},
        {title: '华为NOVA6 5G 全网通', set: '8G + 256G 苏音蓝', price: '3290'},
        {title: '华为NOVA6 4G 全网通', set: '8G + 128G 亮黑色', price: '2290'},
        {title: '华为NOVA6 4G 全网通', set: '8G + 128G 普罗旺斯', price: '2330'},
        {title: '华为NOVA6 4G 全网通', set: '8G + 128G 苏音蓝', price: '2245'},
        {title: '华为NOVA5ipro 全网通', set: '8G + 128G 幻夜黑', price: '1645'},
        {title: '华为NOVA5ipro 全网通', set: '8G + 128G 极光色', price: '1645'},
        {title: '华为NOVA5ipro 全网通', set: '8G + 128G 翡冷翠', price: '1645'},
        {title: '华为NOVA5ipro 全网通', set: '8G + 256G 翡冷翠', price: '1820'},
        {title: '华为NOVA5i 全网通', set: '6G + 128G 幻夜黑', price: '1350'},
        {title: '华为NOVA5i 全网通', set: '6G + 128G 烟雨青蓝', price: '1365'},
        {title: '华为NOVA5i 全网通', set: '6G + 128G 苏音蓝', price: '1365'},
        {title: '华为NOVA5i 全网通', set: '8G + 128G 幻夜黑', price: '1485'},
        {title: '华为NOVA5i 全网通', set: '8G + 128G 烟雨青蓝', price: '1490'},
        {title: '华为NOVA5i 全网通', set: '8G + 128G 苏音蓝', price: '1505'},
        {title: '华为NOVA5i 全网通', set: '8G + 128G 蜜语红', price: '1540'},
        {title: '华为NOVA5pro 全网通', set: '8G + 128G 亮黑色', price: '2115'},
        {title: '华为NOVA5pro 全网通', set: '8G + 128G 绮境森林', price: '2115'},
        {title: '华为NOVA5pro 全网通', set: '8G + 256G 亮黑色', price: '2405'},
        {title: '华为NOVA5pro 全网通', set: '8G + 256G 绮境森林', price: '2405'},
        {title: '华为NOVA5 全网通', set: '8G + 128G 亮黑色', price: '2000'},
        {title: '华为NOVA5 全网通', set: '8G + 128G 仲夏紫', price: '2000'},
        {title: '华为NOVA5 全网通', set: '8G + 128G 绮境森林', price: '1895'}        
      ] 
    },
    // 麦芒系列
    { name: '麦芒系列', children: [
        {title: '华为麦芒8 全网通', set: '6G + 128G 宝石蓝', price: '1205'},
        {title: '华为麦芒8 全网通', set: '6G + 128G 幻夜黑', price: '1185'}
      ] 
    },
    // p系列
    { name: 'p系列', children: [
        {title: '华为畅享10E 全网通', set: '4G + 128G 幻夜黑', price: '1090'},
        {title: '华为畅享10E 全网通', set: '4G + 128G 翡翠冷', price: '1090'},
      ] 
    },
    // Mate系列
    { name: 'Mate系列', children: [
        {title: '华为畅享10E 全网通', set: '4G + 128G 幻夜黑', price: '1090'},
        {title: '华为畅享10E 全网通', set: '4G + 128G 翡翠冷', price: '1090'},
      ] 
    },
    // 荣耀系列
    { name: '荣耀系列', children: [
       {title: '华为畅享10E 全网通', set: '4G + 128G 幻夜黑', price: '1090'},
       {title: '华为畅享10E 全网通', set: '4G + 128G 翡翠冷', price: '1090'},
      ] 
    },
    // 畅玩系列
    { name: '畅玩系列', children: [
        {title: '华为畅享10E 全网通', set: '4G + 128G 幻夜黑', price: '1090'},
        {title: '华为畅享10E 全网通', set: '4G + 128G 翡翠冷', price: '1090'},
      ] 
    },
    // play
    { name: 'play', children: [
        {title: '华为畅享10E 全网通', set: '4G + 128G 幻夜黑', price: '1090'},
        {title: '华为畅享10E 全网通', set: '4G + 128G 翡翠冷', price: '1090'},
      ] 
    },
    // x 系列
    { name: 'X系列', children: [
        {title: '华为畅享10E 全网通', set: '4G + 128G 幻夜黑', price: '1090'},
        {title: '华为畅享10E 全网通', set: '4G + 128G 翡翠冷', price: '1090'},
      ] 
    },
    // v 系列
    { name: 'V系列', children: [
        {title: '华为畅享10E 全网通', set: '4G + 128G 幻夜黑', price: '1090'},
        {title: '华为畅享10E 全网通', set: '4G + 128G 翡翠冷', price: '1090'},
      ] 
    },
  ],
  // 苹果
  [  
    // iphone7
    { name: 'iphone 7', children: [
       {title: '苹果iphone7 PLus ', set: '128G 国行未激活 亮黑色', price: '3460'},
       {title: '苹果iphone7 PLus ', set: '128G 国行未激活 玫瑰金', price: '3420'},
       {title: '苹果iphone7 PLus ', set: '128G 国行未激活 金色', price: '3320'},
      ] 
    },
    // iphone8
    { name: 'iphone 8', children: [
      {title: '苹果iphone8 PLus ', set: '128G 国行未激活 深空灰', price: '4730'},
      {title: '苹果iphone8 PLus ', set: '128G 国行未激活 金色', price: '4820'},
      {title: '苹果iphone8 PLus ', set: '64G 国行未激活 深空灰', price: '4050'},
      {title: '苹果iphone8 PLus ', set: '64G 国行未激活 金色', price: '4090'},
      {title: '苹果iphone8', set: '64G 国行未激活 深空灰', price: '3450'},
      {title: '苹果iphone8  ', set: '64G 国行未激活 金色', price: '3450'},
      {title: '苹果iphone8  ', set: '64G 国行未激活 银色', price: '3450'},
      
     ] 
    },
    // iphonexs
    { name: 'iphone xs', children: [
      {title: '华为畅享10E 全网通', set: '4G + 128G 幻夜黑', price: '1090'},
      {title: '华为畅享10E 全网通', set: '4G + 128G 翡翠冷', price: '1090'},
     ] 
    },
    // iphonexr
    { name: 'iphone xr', children: [
      {title: '华为畅享10E 全网通', set: '4G + 128G 幻夜黑', price: '1090'},
      {title: '华为畅享10E 全网通', set: '4G + 128G 翡翠冷', price: '1090'},
     ] 
    },
    // ihone11
    { name: 'iphone 11', children: [
      {title: '华为畅享10E 全网通', set: '4G + 128G 幻夜黑', price: '1090'},
      {title: '华为畅享10E 全网通', set: '4G + 128G 翡翠冷', price: '1090'},
     ] 
    },
  ],
  // oppo
  [  
    // A系列
    { name: 'A 系列',id: 'h00', children: [
        {title: '华为畅享10E 全网通', set: '4G + 128G 幻夜黑', price: '1090'},
        {title: '华为畅享10E 全网通', set: '4G + 128G 翡翠冷', price: '1090'},
      ] 
    },
    // Reno系列
    { name: 'A 系列',id: 'h00', children: [
        {title: '华为畅享10E 全网通', set: '4G + 128G 幻夜黑', price: '1090'},
        {title: '华为畅享10E 全网通', set: '4G + 128G 翡翠冷', price: '1090'},
      ] 
    },
    // R系列
    { name: 'R 系列',id: 'h00', children: [
        {title: '华为畅享10E 全网通', set: '4G + 128G 幻夜黑', price: '1090'},
        {title: '华为畅享10E 全网通', set: '4G + 128G 翡翠冷', price: '1090'},
      ] 
    },
    // k系列
    { name: 'K 系列',id: 'h00', children: [
        {title: '华为畅享10E 全网通', set: '4G + 128G 幻夜黑', price: '1090'},
        {title: '华为畅享10E 全网通', set: '4G + 128G 翡翠冷', price: '1090'},
      ] 
    },
    // Findx系列
    { name: 'Findx系列',id: 'h00', children: [
        {title: '华为畅享10E 全网通', set: '4G + 128G 幻夜黑', price: '1090'},
        {title: '华为畅享10E 全网通', set: '4G + 128G 翡翠冷', price: '1090'},
      ] 
    },

  ],
  // vivo 
  [ 
    // U系列
    { name: 'U系列',id: 'h00', children: [
        {title: '华为畅享10E 全网通', set: '4G + 128G 幻夜黑', price: '1090'},
        {title: '华为畅享10E 全网通', set: '4G + 128G 翡翠冷', price: '1090'},
      ] 
    },
    // Z系列
    { name: 'Z系列',id: 'h00', children: [
        {title: '华为畅享10E 全网通', set: '4G + 128G 幻夜黑', price: '1090'},
        {title: '华为畅享10E 全网通', set: '4G + 128G 翡翠冷', price: '1090'},
      ] 
    },
    // Y系列
    { name: 'Y系列',id: 'h00', children: [
        {title: '华为畅享10E 全网通', set: '4G + 128G 幻夜黑', price: '1090'},
        {title: '华为畅享10E 全网通', set: '4G + 128G 翡翠冷', price: '1090'},
      ] 
    },
    // X系列
    { name: 'X系列',id: 'h00', children: [
        {title: '华为畅享10E 全网通', set: '4G + 128G 幻夜黑', price: '1090'},
        {title: '华为畅享10E 全网通', set: '4G + 128G 翡翠冷', price: '1090'},
      ] 
    },
    // S系列
    { name: 'S系列',id: 'h00', children: [
        {title: '华为畅享10E 全网通', set: '4G + 128G 幻夜黑', price: '1090'},
        {title: '华为畅享10E 全网通', set: '4G + 128G 翡翠冷', price: '1090'},
      ] 
    },
    // Nex系列
    { name: 'Nex系列',id: 'h00', children: [
        {title: '华为畅享10E 全网通', set: '4G + 128G 幻夜黑', price: '1090'},
        {title: '华为畅享10E 全网通', set: '4G + 128G 翡翠冷', price: '1090'},
      ] 
    },
    // iQoo系列
    { name: 'iQoo系列',id: 'h00', children: [
        {title: '华为畅享10E 全网通', set: '4G + 128G 幻夜黑', price: '1090'},
        {title: '华为畅享10E 全网通', set: '4G + 128G 翡翠冷', price: '1090'},
      ] 
    },
  ],
  // 小米
  [  
    // Redmi
     { name: 'Redmi',id: 'h00', children: [
         {title: '华为畅享10E 全网通', set: '4G + 128G 幻夜黑', price: '1090'},
         {title: '华为畅享10E 全网通', set: '4G + 128G 翡翠冷', price: '1090'},
       ] 
     },
    //  小米10
    { name: '小米10',id: 'h00', children: [
        {title: '华为畅享10E 全网通', set: '4G + 128G 幻夜黑', price: '1090'},
        {title: '华为畅享10E 全网通', set: '4G + 128G 翡翠冷', price: '1090'},
      ] 
    },
    // Redmi Note
    { name: 'Redmi Note',id: 'h00', children: [
        {title: '华为畅享10E 全网通', set: '4G + 128G 幻夜黑', price: '1090'},
        {title: '华为畅享10E 全网通', set: '4G + 128G 翡翠冷', price: '1090'},
      ] 
    },
    // Redmi K
    { name: 'Redmi K',id: 'h00', children: [
        {title: '华为畅享10E 全网通', set: '4G + 128G 幻夜黑', price: '1090'},
        {title: '华为畅享10E 全网通', set: '4G + 128G 翡翠冷', price: '1090'},
      ] 
    },
    // CC系列
    { name: 'CC系列',id: 'h00', children: [
        {title: '华为畅享10E 全网通', set: '4G + 128G 幻夜黑', price: '1090'},
        {title: '华为畅享10E 全网通', set: '4G + 128G 翡翠冷', price: '1090'},
      ] 
    }
  ]
 ]
var navImg = ['./img/menu.png','./img/sj.png','./img/wx.png']
var navImgActive = ['./img/menuactive.png','./img/sjactive.png','./img/wxactive.png']
var infoIndex = 0
var navId = 0 
// 页面导航dome
var $pageNavDome = $('.main_pageNav li')

infofun()

function infofun(){
  phoneListFun(totalArr[0])
  // 头部菜单
  $('.header_nav li').click(function(){
      $(this).addClass('activaNav').siblings().removeClass('activaNav')
      $(this).children('div').addClass('activeline').parent('li').siblings().children('div').removeClass('activeline')
      navId = $(this).index()
      phoneListFun( totalArr[$(this).index()] )
      
     
  })
  //页面导航区
  $pageNavDome.click(function () {
      $pageNavDome.eq(infoIndex).find('img').attr('src',navImg[infoIndex])
      infoIndex = $(this).index()
      $(this).find('img').attr('src',navImgActive[infoIndex])

    
  })
  
}
// 左侧菜单栏

function phoneListFun(arrList){
   var domearr = ''
   var $domeleftphone= $('.leftphoneNav_bigbox')
   arrList.forEach((val) => {
    domearr += `<li>${ val.name }</li>`
   })
   $domeleftphone.html(domearr)
   $domeleftphone.find('li').eq(0).addClass('activeitem')
   // 左边菜单切换
   $('.leftphoneNav_bigbox li').click(function () {
     $(this).addClass('activeitem').siblings().removeClass('activeitem')
     rightlistItem(totalArr[navId][$(this).index()])
  })
  
   rightlistItem(totalArr[navId][0])
}
// 手机详情展示
function rightlistItem(phonearr){
  var rightdomearr = ''
  phonearr.children.forEach((val) => {
    rightdomearr += ` <li class="phoneListItem"><p class="phoneName">${val.title}</p><div class="phoneConfig_box"> <p class=phonedata>${val.set}</p> <div class="phoneprice"> ¥<span class="preceIcon">${val.price}</span></div></div></li>`
 
  })
  $('.phoneList_box').html(rightdomearr)
  scrollfun()
}
// betterscroll 
function scrollfun(){
  let wrapper = document.querySelector('.rightphoneList_bigbox')
  let scroll = new BScroll(wrapper)
}