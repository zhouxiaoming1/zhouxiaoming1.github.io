// let wrapper = document.querySelector('.main-box')
// let scroll = new BScroll(wrapper)
// console.log(scroll)
infofun()
function infofun(){
  $('.header_nav li').click(function(){
      $(this).addClass('activaNav').siblings().removeClass('activaNav')
      $(this).children('div').addClass('activeline').parent('li').siblings().children('div').removeClass('activeline')

  })
}
