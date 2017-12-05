function getClass(cls){
    var ret = [];
    var els = document.getElementsByTagName("*");
    for (var i = 0; i < els.length; i++){
        if(els[i].className === cls || els[i].className.indexOf("cls")>=0 || els[i].className.indexOf(" cls")>=0 || els[i].className.indexOf(" cls ")>0){
            ret.push(els[i]);
        }
    }
    return ret;
}
function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
}
function startMove(obj,json,fun){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var iCur = 0;
			if(attr=="opacity"){
				iCur = parseInt(parseFloat(getStyle(obj,attr))*100);
			}else{
				iCur = parseInt(getStyle(obj,attr));
			}
			var ispeed = (json[attr]-iCur)/8;
			ispeed = ispeed>0?Math.ceil(ispeed):Math.floor(ispeed);
			if(iCur!=json[attr]){
				isStop = false;
			}
			if(attr=="opacity"){
				obj.style.filter = "alpha:(opacity:"+(json[attr]+ispeed)+")";
				obj.style.opacity = (json[attr]+ispeed)/100;
			}else{
				obj.style[attr] = iCur+ispeed+"px";
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			if(fun){
				fun();
			}
		}
	},30);
}