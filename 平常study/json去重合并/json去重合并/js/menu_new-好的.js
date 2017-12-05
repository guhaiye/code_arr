var array1 = [
	{text:"系统管理",data:[{text:"场景管理",data:[{text:"卖场管理",source:"..ml/tableList.html"},{text:"代理商管理",source:"..ml/tableList.html"}]}]},
	{text:"管理",data:[{text:"管理",data:[{text:"管理一",source:"..ml/tableList.html"},{text:"管理二",source:"..ml/tableList.html"}]}]},
];
var array2 = [
	{text:"系统管理",data:[{text:"场景管理",data:[{text:"卖场管理",source:"..ml/tableList.html"},{text:"商户管理",source:"..ml/tableList.html"}]}]},
];
var array3 = [
	{text:"系统管理",data:[{text:"场景管理",data:[{text:"卖场管理1",source:"..ml/tableList.html"},{text:"商户管理",source:"..ml/tableList.html"}]}]},
];

array1 = array1.concat(array2,array3);
var audit = {},audit_new=[],audit_new_arr=[],audit_arr=[];
for(var i =0;i<array1.length;i++){
	if(audit[array1[i].text] !== undefined){
		// console.log(audit[array1[i].text].data);
		// console.log(array1[i].data);
		var new_arr=audit[array1[i].text].data.concat(array1[i].data);		
        audit_new=new_arr[0].data.concat(new_arr[1].data);
        $.each(audit_new,function(index){
            var a_index=audit_new_arr.indexOf(audit_new[index].text);
            var a_text=audit_new[index].text;
            var a_url=audit_new[index].source;
            if(a_index == -1){
              audit_new_arr.push(a_text);
              audit_arr.push({"text":a_text,"source":a_url});	
            }
        });
  
        audit[array1[i].text].data[0].data=audit_arr;


	}else{
		audit[array1[i].text] = array1[i];
	}
}

var arr_result = [];

for(var prop in audit){
	arr_result.push(audit[prop]);
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