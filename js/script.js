document.body.innerHTML+=`<div class='spinner'><div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div></div>`

$(window).bind('load', function() { 
	document.body.removeChild(document.body.lastChild);
	carousel();
});

$(".phone_mask").mask("+380(99)999-99-99");


//---переключение языка--------------
document.querySelector(`#eng`).onclick=function(){
	let langEng = document.querySelectorAll(`.language-eng`);
	let langRu = document.querySelectorAll(`.language-ru`)

	document.querySelector(`#eng`).classList.add('language-active');
	document.querySelector(`#ru`).classList.remove('language-active');

	/*for(let i=0; i<langEng.length; i++){
		langEng[i].classList.remove('language-hidden');
	}
	 
	for(let i=0; i<langRu.length; i++){
		langRu[i].classList.add('language-hidden');
	}*/
}

document.querySelector(`#ru`).onclick=function(){
	let langEng = document.querySelectorAll(`.language-eng`);
	let langRu = document.querySelectorAll(`.language-ru`)

	document.querySelector(`#ru`).classList.add('language-active');
	document.querySelector(`#eng`).classList.remove('language-active');

	/*for(let i=0; i<langEng.length; i++){
		langEng[i].classList.add('language-hidden');
	}
	 
	for(let i=0; i<langRu.length; i++){
		langRu[i].classList.remove('language-hidden');
	}*/
}

//---------------------навигация по сайту---------------
document.querySelectorAll(`.list`).forEach(function(element){
	element.onclick=function(){
		let list =this.dataset.list;
		let listArr =	document.querySelectorAll(`.list`);
		let point =	document.querySelectorAll(`.point-animation`);
		document.querySelector(`#logo`).setAttribute('src', 'svg/logo.svg');
		for(let i=0; i<listArr .length; i++){
			listArr [i].classList.remove('list-active');
		}
		for(let i=0; i<document.querySelectorAll(`.icon`).length; i++){
			document.querySelectorAll(`.icon`)[i].classList.remove('icon-active');
		}
		//-------------------------------

		this.classList.toggle('list-active')//---------------навигация------
		document.querySelector('.content').style.marginTop=`-${list}vh`;
		//-------------------------------

		setTimeout(function(){//-----подсветка навигации
			for(let i=0; i<point.length; i++){
				point[i].classList.remove('point-active');
			}
			let a = +list/100*4;
			let b =(+list/100*4)+4;
			for(let j=a; j<b; j++){
				point[j].classList.add('point-active');
				if(list=='600')break;
			}
		}, 600);
		//--------------------------------
	
		if(+list>0&&+list<600){//-----подсветка для выбранного языка
			document.querySelector(`#eng`).classList.add('lang');
			document.querySelector(`#ru`).classList.add('lang');
		}else{
			document.querySelector(`#eng`).classList.remove('lang');
			document.querySelector(`#ru`).classList.remove('lang');
		}
		//--------------------------------

		setTimeout(icon, 600)
		function icon(){
			if(list=='100'){
				for(let i=0; i<document.querySelectorAll(`.icon`).length; i++){
					document.querySelectorAll(`.icon`)[i].classList.add('icon-active');
				}
			}
		}
		//--------------------------------

		if(+list>100&&+list<600){//--изменеие цвета лого на черный
			setTimeout(function(){
				document.querySelector(`#logo`).setAttribute('src', 'svg/logo2.svg');
			}, 600);
		}
		//--------------------------------


		let out =`<iframe class='on' width="100%" height="100%" src="https://www.youtube.com/embed/bR6LS62lYHA?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>`
		if(list=='400'){//--загрузка видео-----
			if(!document.querySelector(`.on`)){
				document.querySelector(`.video`).innerHTML=`<div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div>`;
				console.log('e');
				setTimeout(function(){
					document.querySelector(`.video`).innerHTML=out;
				}, 3000);	
			}
		}
	}
})
//--------------------------------------------------
//-----------предзаказ подсветка -------------------
document.querySelector(`.order`).onclick=function(){
	let listArr =	document.querySelectorAll(`.list`);
	let point =	document.querySelectorAll(`.point-animation`);
	document.querySelector(`#logo`).setAttribute('src', 'svg/logo.svg');
	document.querySelector('.content').style.marginTop=`-600vh`;
	for(let i=0; i<listArr .length; i++){
		listArr[i].classList.remove('list-active');
		if(i==6){
			listArr[i].classList.toggle('list-active')
		}
	}
	setTimeout(function(){//-----подсветка навигации
		for(let i=0; i<point.length; i++){
			point[i].classList.remove('point-active');
			if(i==24){
				point[i].classList.add('point-active');
			}
		}
	}, 600);
	document.querySelector(`#eng`).classList.remove('lang');
	document.querySelector(`#ru`).classList.remove('lang');
}
//------------------------------------------------------
//---------скрол на странице два------------------------
let a=0;
function wrapTwoNav(a) {
	let icons = ['svg/arrows.svg', 'svg/cursor.svg', 'svg/circle.svg', 'svg/top.svg', 'svg/for.svg', 'svg/t.svg'];
	let monik = ['svg/monik0.svg', 'svg/monik1.svg', 'svg/monik2.svg', 'svg/monik3.svg', 'svg/monik4.svg', 'svg/monik5.svg'];
	let handOne = ['svg/hand1.svg', 'svg/hand_t1.svg', 'svg/hand_t1.svg', 'svg/hand_t1.svg', 'svg/hand_t1.svg', 'svg/hand_t1.svg'];
	let handTwo = ['svg/hand2.svg', 'svg/nand_cursor.svg', 'svg/nand_click.svg', 'svg/scrolling.svg', 'svg/slider.svg', 'svg/hand_t2.svg'];
	let handAnimationOne = ['animation-hand1', 'animation-none', 'animation-none', 'animation-none', 'animation-none', 'animation-hand7'];
	let handAnimationTwo = ['animation-hand2', 'animation-hand3', 'animation-hand4', 'animation-hand5', 'animation-hand6', 'animation-hand7'];
	for(let i=0; i<document.querySelectorAll(`.icon`).length; i++){
		document.querySelectorAll(`.icon`)[i].classList.remove('icon-active');
	}
	for(let i=0; i<document.querySelectorAll(`.control-text`).length; i++){
		document.querySelectorAll(`.control-text`)[i].classList.remove('show');
	}
	for(let i=0; i<document.querySelectorAll(`.wrap-two-nav-point`).length; i++){
		document.querySelectorAll(`.wrap-two-nav-point`)[i].classList.remove('nav-point-active');
	}
	document.querySelectorAll(`.control-text`)[a].classList.add('show');
	document.querySelectorAll(`.wrap-two-nav-point`)[a].classList.add('nav-point-active');
	document.querySelector(`.monik`).style.opacity='0.0';

	document.querySelector(`.hand1`).setAttribute('src', handOne[a]);
	document.querySelector(`.hand2`).setAttribute('src', handTwo[a]);

	for(let i=0; i<handAnimationTwo.length; i++){
		document.querySelector(`.hand1`).classList.remove(handAnimationOne[i]);
		document.querySelector(`.hand2`).classList.remove(handAnimationTwo[i]);
	}
	
	setTimeout(icon, 500);
	setTimeout(iconT, 600);
	function icon(){
		for(let i=0; i<document.querySelectorAll(`.icon-svg`).length; i++){
			document.querySelectorAll(`.icon-svg`)[i].setAttribute('src', icons[a]);
		}
		document.querySelector(`.monik`).setAttribute('src', monik[a]);

		for(let i=0; i<handAnimationTwo.length; i++){
			document.querySelector(`.hand1`).classList.remove(handAnimationOne[i]);
			document.querySelector(`.hand2`).classList.remove(handAnimationTwo[i]);
		}

		document.querySelector(`.hand1`).classList.add(`${handAnimationOne[a]}`);
		document.querySelector(`.hand2`).classList.add(`${handAnimationTwo[a]}`);
	}
	function iconT(){
		for(let i=0; i<document.querySelectorAll(`.icon`).length; i++){
			document.querySelectorAll(`.icon`)[i].classList.add('icon-active');
		}
		document.querySelector(`.monik`).style.opacity='1';
	}
}

document.querySelectorAll(`.wrap-two-nav-point`).forEach(function(element){
	element.onclick=function(){
		a = this.dataset.list;
		wrapTwoNav(+a);
	}
})

document.querySelector(`.wrap-two`).onwheel=function(e){
	if(e.deltaY>0){
		if(a>4) a=-1;
		++a
	}else{
		if(a<1) a=6;
		--a
	}
	wrapTwoNav(a);
	
	return false;
}

//------------------------------------------------------
//-------валидация и отправка формы---------------------
document.querySelector(`.checkout`).onclick=function() {
	let name = document.querySelector(`#name`).value;
	let surname = document.querySelector(`#surname`).value;
	let city = document.querySelector(`#city`).value;
	let country = document.querySelector(`#country`).value;
	let tel = document.querySelector(`#tel`).value;
	let mail = document.querySelector(`#mail`).value;
	let email = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
	let checkbox = document.getElementById('checked').checked;
	let form = document.getElementsByTagName('input')
	for(let i=0; i<form.length;i++){
		if (form[i].value==''){
			form[i].classList.add('checked-form');
		}else{
			form[i].classList.remove('checked-form');
		}
	}
	function showModal(){//
		$('#exampleModal').modal('show')
	}
	if(name && surname && city && country && tel && mail){
		if (email.test(mail)==false){
			document.getElementById('mail').classList.add('checked-form');
			Swal.fire({
				type: 'error',
				text: 'Электронная почта неверная',
				confirmButtonColor:'#2838ff',
				customClass: 'cube-mod',
			})
			}else if(checkbox){
				
				showModal();
			}else{
				Swal.fire({
					type: 'error',
					text: 'Нужно дать согласие на оброботку персональных данных',
					confirmButtonColor:'#2838ff',
					customClass: 'cube-mod',
				})
			}
	}else{
		Swal.fire({
			type: 'error',
			text: 'нужно заполнить все поля',
			confirmButtonColor:'#2838ff',
			customClass: 'cube-mod',
		})
	}
}

//------------------------------------------------------
//---------------------carousel-------------------------

function carousel(){
	document.querySelector('.wrap-carousel').ondragstart = function() {//----отключает в браузере выделение картинки
		return false;
	};
	let items = document.querySelectorAll(`.item`);
	let step = 1/items.length*100;
	document.querySelector(`.carousel`).style.width=`${items.length*100}%`;
	for(let i=0; i<items.length; i++){
		document.querySelectorAll(`.item`)[i].style.width=`${step}%`;
	}
	let k = 0;
	document.querySelectorAll(`.control-carousel`).forEach(function(element){
		element.onclick=function(){
			let control =this.dataset.control;
			if(control=='forw'){
				forw();
			}else{
				back();
			}
		}
	})

	function forw(){
		if(k<(items.length-1)) k++;
		if(k>0) document.querySelector(`.back`).classList.remove('none');
		if(k>(items.length-2)) document.querySelector(`.forw`).classList.add('none');
		document.querySelector(`#carousel`).style.transform=`translate(-${step*k}%, 0)`;
	}

	function back(){
		if(k>0) k--;
		document.querySelector(`#carousel`).style.transform=`translate(-${step*k}%, 0)`;
		if(k<(items.length-1)) document.querySelector(`.forw`).classList.remove('none');
		if(k==0) document.querySelector(`.back`).classList.add('none');
	}
	let a;
	let b;
	let c;
	document.querySelector('.wrap-carousel').onmousedown=function(event){
		c=1;
		a=event.pageX
		document.querySelector('.wrap-carousel').onmousemove= function(event){
			b=event.pageX
			if((a-b)>40){
				forw();
				document.querySelector('.wrap-carousel').onmousemove = null;
			}
			if((b-a)>40){
				back();
				document.querySelector('.wrap-carousel').onmousemove = null;
			}
		}
		document.querySelector('.wrap-carousel').onmouseup=function() {//----отключает после отпускания мышм
			document.querySelector('.wrap-carousel').onmousemove = null;
			document.querySelector('.wrap-carousel').onmouseup = null;
		};
	}
}



