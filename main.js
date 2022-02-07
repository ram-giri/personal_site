burger = document.querySelector('.burger')
menuitem = document.querySelector('.menu-item')
rightnav = document.querySelector('.right-nav')
navigation = document.querySelector('.navigation')

burger.addEventListener('click', () => {
    rightnav.classList.toggle('v-class-resp');
    menuitem.classList.toggle('v-class-resp');
    navigation.classList.toggle('h-nav-resp');
})


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}