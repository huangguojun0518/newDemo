/*clock*/
function addZero(num){
	if(num<10){
		num="0"+num;
	}
	return num;
}
/**
*居中函数
*element:需要居中的元素
*/
function center(element){
	element.style.left=((getWindowSize().width-element.offsetWidth)/2+getScrollSize().left)+"px";
	element.style.top=((getWindowSize().height-element.offsetHeight)/2+getScrollSize().top)+"px";
}
/**
*获取窗口的尺寸
*不同的浏览器，窗口的尺寸计算不同
*/
function getWindowSize(){
	return {
		"width":window.innerWidth||document.documentElement.clientWidth,
		"height":window.innerHeight||document.documentElement.clientHeight
	};
}
/**
* 获取滚动条滚动的值
*/
function getScrollSize(){
	return{
		"top":document.documentElement.scrollTop||document.body.scrollTop,
		"left":document.documentElement.scrollLeft||document.body.scrollLeft
	}
}

/*正则 邮箱验证*/

function valide_email(value){
	var pattern=/^[a-z0-9]+([\._-][a-z0-9]+)?@[a-z0-9]+([_-][a-z0-9]+)?\.[a-z]{2,11}(\.[a-z]{2,4})?$/i ;   //?表示括号里的东西有没有都可以
	if(pattern.test(value)){
		return true;
	}else{
		return false;
	}
};

/*修建数据前后的空格*/
function trim(value){
	//如果value中全是空格
	if(/^(\s*)$/.test(value)){
		value=value.replace(/^(\s*)$/,"");
		//如果value的前后是空格
	}else if(/^\s* (.+?)\s*$/.test(value)){
		value=value.replace(/^\s* (.+?)\s*$/,"$1")
	}
	return value;
};

function valide_pwd(value){
	var num=0;
	//value中没有数字
	if(!/[\d]/.test(value)){
	num+=1;
	}
	//没有小写字母
	if(!/[a-z]/.test(value)){
		num+=1;
	}
	//没有大写字母
	if(!/[A-Z]/.test(value)){
		num+=1;
	}
	//没有特殊字符
	if(!/[\W]/.test(value)){
		num+=1;
	}
	return num;

};




