//动态维护表格宽高的方法
function getWidth(){
    var list = $(".histogram-bg-line ul li");
    $(".histogram-bg-line li").width(100/(list.length/5)+"%");
    var functionlist = $(".histogram-content ul li");
    $(".histogram-content li").width(100/functionlist.length+"%");
}

//生成表格的方法
//divId:存放表格的div的id,如需class，请自己更改
//row:表格需要多少航
//col:表格需要多少列
//maxNum:表格允许的最大值
//list:需要显示在树状图中的值列表，包含字段必须为：项目名称，项目数量
function getTable(divId,row,col,maxNum,list){
    //获取作为显示用容器
    var container = $("#"+divId);
    //var conatiner = $("."+divId);//如需使用class，请注释上行并取消本行注释
    //开始构建表格
    var html = "";
    html+="<div class='histogram-container' id='histogram-container'><div class='histogram-bg-line'>";
    for(var i = 0 ; i < row ; i++){
        html+="<ul>";
        for(var j = 0 ; j < col ; j++){
        	html+="<li><div></div></li>";
        }
        html+="</ul>";
    }
    //背景表格画完了，开始创建柱状图啦
    html+="</div><div class='histogram-content'><ul>";
    for(var i = 0 ; i < list.length ; i++){
    	var color = getcolor(6);
    	html+="<li><span class='histogram-box'><span class='num' style='bottom:"+Percent(list[i].fNum,maxNum)+"%;'>"+list[i].fNum+"</span><a style='height:"+Percent(list[i].fNum,maxNum)+"%;background:#"+color+";' title='"+Percent(list[i].fNum,maxNum)+"%'></a><a class='plan' style='height:"+Percent(list[i].fNum,maxNum)+"%;background:#"+color+";box-shadow: -1px -1px 0px 0px #"+color+";'></a></span><span class='name'>"+list[i].fName+"</span></li>";
    }
    //详细内容显示完啦，开始显示y轴及数值
    html+="</ul></div><div class='histogram-y'><ul>";
    var yNum = maxNum;
    var reduction = Math.round(maxNum/row);
    for(var i = 0 ; i < row ; i++){
    	html += "<li>"+yNum+"</li>";
    	yNum -= reduction;
    }
    html += "<li>0</li></ul></div></div>";
    container.html(html);
}


//生成随机颜色，因为color为16进制代码，所以你懂的
var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
function getcolor(n) {
     var res = "";
     for(var i = 0; i < n ; i ++) {
         var id = Math.ceil(Math.random()*15);
         res += chars[id];
     }
     return res;
}

//求两个数的百分比
function Percent(num1,num2)
{
    var num =  Math.round((num1 / num2 )  * 100);
    return num ;
}
//创建柱状图对象的方法
function createFun(fName,fNum){
	var fun = new Object();
	fun.fName = fName;
	fun.fNum = fNum;
	return fun;
}
