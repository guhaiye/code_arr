var array1 = [
	{text:"系统管理",data:[{text:"场景管理",data:[{text:"卖场管理","source":"..ml/tableList.html"},{text:"代理商管理","source":"..ml/tableList.html"}]}]},
	{text:"管理",data:[{text:"管理",data:[{text:"管理一","source":"..ml/tableList.html"},{text:"管理二","source":"..ml/tableList.html"}]}]},
];
var array2 = [
	{text:"系统管理",data:[{text:"场景管理",data:[{text:"卖场管理","source":"..ml/tableList.html"},{text:"商户管理","source":"..ml/tableList.html"}]}]},
];
var array3 = [
	{text:"系统管理",data:[{text:"场景管理",data:[{text:"卖场管理1","source":"..ml/tableList.html"},{text:"商户管理3","source":"..ml/tableList.html"}]}]},
];

array1 = array1.concat(array2,array3);
console.log(array1);
var newObj={};
for(var i in array1){
   if(newObj[array1[i].text] !== undefined){
     newObj[array1[i].text].data.push(array1[i].data[0]);   
   }else{
     newObj[array1[i].text] =  array1[i];
   } 
}
// console.log(newObj);
var secondObj={},json_arr=[];
var secondcon='',ObjArr='';
for(var i in newObj){
    var secondArr=newObj[i].data;
    var First_text=newObj[i].text;
    var data_len=secondArr.length;
    if(data_len>1){
        $.each(secondArr,function(index){
            if(secondObj[secondArr[index].text] !== undefined){
                 var thirddata=secondArr[index].data;
                 $.each(thirddata,function(ind){
                     secondObj[secondArr[index].text].data.push(thirddata[ind]);
                 });
            }else{
                 secondObj[secondArr[index].text]=secondArr[index];
            }
        });
        $.each(secondObj,function(index){
          var _text=secondObj[index].text;
          var _data=secondObj[index].data;
          _data=JSON.stringify(_data);
          ObjArr+='{"text":"'+_text+'","data":'+_data+'},';
        });
        secondcon+='{"text":"'+First_text+'","data":['+ObjArr+']}';
    }else{
        secondArr=JSON.stringify(secondArr);
        secondcon+=',{"text":"'+First_text+'","data":'+secondArr+'}';
    }
    newsecondcon=eval('('+secondcon+')');
    json_arr.push(newsecondcon);
}
console.log(json_arr);
var arr_result=json_arr;
//json数组去重                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
var paylist=[{paymode:'1',payname:"现金",paymoney:"20"},{paymode:'2',payname:"支付宝",paymoney:"50"},{paymode:'1',payname:"现金",paymoney:"40"}];
uniqueArray(paylist,"payname");
function uniqueArray(array, key){
    var result = [array[0]];
    for(var i = 1; i < array.length; i++){
        var item = array[i];
        var repeat = false;
        for (var j = 0; j < result.length; j++) {
            if (item[key] == result[j][key]) {
                repeat = true;
                break;
            }
        }
        if (!repeat) {
            result.push(item);
        }
    }
    return result;
}

function getMenu(){
    // var a_json=$.extend( true,adminJson1, adminJson2 ); 
    // console.log(a_json);
	var arr_first=[],arr_second,arr_third,first_data_arr=[],second_data_arr=[],third_data_arr=[];
	var ele_len=arguments.length;
	var new_arr=arguments;
	var content='';
	var unique_arr=[],unique_arr2=[],unique_arr3=[];
	$.each(arr_result,function(index){
		var arr_text=arr_result[index].text;
        var arr_data=arr_result[index].data;
        content +='<li class="nav-li active">';
        content +='<a href="javascript:void(0)"  class="dropdown-toggle a" data-hover="navJson.text">'+arr_text+'</a>';
        content +='<ul class="dropdown-menu">';
        $.each(arr_data,function(ind2){
            var arr_text2=arr_data[ind2].text;
         	var arr_data2=arr_data[ind2].data;
         	content +='<li>';
         	content +='<a href="javascript:void(0)">'+arr_text2+'</a>';
         	content +='<ul class="thr-menu">';
         	$.each(arr_data2,function(ind3){
         		//第三级
         		var arr_text3=arr_data2[ind3].text;
         		content+='<li>';
         		content+='<a href="javascript:void(0)">'+arr_text3+'</a>';
         		content+='</li>';
         	});
         	content+='</ul></li>';
        });
        content+='</ul></li>';
	});
	$('#menu-ul').append(content);
}