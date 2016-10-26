window.onload = function(){

var menu = document.getElementsByClassName('menu-fixed')[0];
var topHeader = document.getElementsByClassName('top-header')[0];
var botHeader = document.getElementsByClassName('bottom-header')[0];


window.addEventListener('scroll', function(){
var width = window.innerWidth;
var position = window.pageYOffset;

console.log();

if ( position > 217){
 topHeader.style.height = "67px";
botHeader.style.height = "67px";
  menu.style.visibility ="visible";
}else{
  topHeader.style.height = "0";
 botHeader.style.height = "0";
menu.style.visibility ="hidden";
}

if(width < 1025){
menu.style.height = "75px";

}

})//addEventListener


}//onload
