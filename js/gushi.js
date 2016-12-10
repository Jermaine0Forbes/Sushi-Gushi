window.onload = function(){

	var menu = document.getElementsByClassName('menu-fixed')[0];
	var topHeader = document.getElementsByClassName('top-header')[0];
	var botHeader = document.getElementsByClassName('bottom-header')[0],
	mobileMenu = document.querySelector(".mobile-menu"),
	menuBtn = document.querySelectorAll('.menu-btn button'),
	isMobileOn = false,
	width = document.body.clientWidth;
	menuOn = true;
	

	
	
	function checkMobile(widthSize){
		
		if(widthSize < 469){
			isMobileOn = true;
		}else{
			isMobileOn = false;
			menuOn = true;
		}
	}
	
	checkMobile(width);

	window.addEventListener('scroll', function(){
		 width = document.body.clientWidth;
		var position = window.pageYOffset;

		console.log(width);

		if ( position > 602 && width > 1025){
			
			 topHeader.style.height = "4.19em";
			
			  menu.style.display = "block";
		}else if (position > 519 && width > 768){
			topHeader.style.height = "4.19em";
			
			  menu.style.display = "block";
		}else{
			
			menu.style.display = "none";
		}

		checkMobile(width);
		

	})//addEventListener
	
	
	
	 function exposeMenu(){
		
		if(menuOn === true && isMobileOn === false){
			
			botHeader.className = "bottom-header response expose-menu";
			menuOn = false;
		}else if (menuOn === true && isMobileOn === true){
			mobileMenu.className = "mobile-menu col-xs-12 expose-menu";
			menuOn = false;
		}else{
			botHeader.className = "bottom-header response";
			mobileMenu.className = "mobile-menu col-xs-12 hide-menu ";
			menuOn = true;
		}
		
	}
	
	for(let i = 0 ; i < menuBtn.length; i++ ){
		menuBtn[i].onclick = exposeMenu;
	}

	
}//onload
