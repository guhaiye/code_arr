var category={"分类管理":[["分类管理","../category/categoryTagInfoList.html"]]};

var cjMenu={"场景管理":[["卖场管理","../html/mallList.html"],["代理商管理","../html/agentInfoList.html"],["品牌管理","../html/brandInfoList.html"],["商户管理","../html/merchantInfoList.html"]]};
var baseUser={"基础信息":[["查看用户信息","../html/userInfoList.html"]]};
var orderUser={"订单信息":[["查看订单信息","../html/mallList.html"]]};

var nmenu=[{"订单信息":["查看订单信息","查看用户信息":[{"123","456"}]]}];
console.log(nmenu);
function getMenu(menu){
	for(var i=0;i<menu.length;i++){
		var navSys = '';
		for(var name in menu[i]){
			var navSys = '';
			navSys =navSys + '<li class="nav-li">'+
							'<a href="javascript:void(0)"  class="dropdown-toggle a" data-hover="navJson.text">' +name +'</a><ul class="dropdown-menu">';
			var secArrs =menu[i][name];
			for(var j=0;j<secArrs.length;j++){
				for(var item in secArrs[j]){//cjMenu
					var secText="";
					navSys =navSys  + secText + '<li><a href="javascript:void(0)">' +item + '</a><ul class="thr-menu">';
					var thiNav = secArrs[j][item];
					for(var p=0;p < thiNav.length;p++){//["卖场管理","../html/mallList.html"]
						var thiText = '';
						thiText =thiText + '<li><a href="' + thiNav[p][1] + '">' + thiNav[p][0] + '</a></li>';
						navSys = navSys + thiText;
					}
					navSys =navSys +'</ul></li>';					
				}				
			}navSys = navSys +'</ul></li>'; $('#menu-ul').append(navSys);
		}
	}
}

//合并两个角色
function merge(menu1,menu3){
	var menu2 = menu3;
	for(var j=0;j<menu2.length;j++){
		for(var i=0;i<menu1.length;i++){
			for(var name1 in menu1[i]){
				var arr1 = menu1[i][name1];
				for(var name2 in menu2[j]){
					var arr2 = menu2[j][name2];
					if(name2 == name1){
						for(var p=0;p<arr2.length;p++){
							if(arr1.indexOf(arr2[p]) == '-1'){
								menu1[i][name1].push(arr2[p]);
							}							
						}	
						menu2.splice(j,1);
					}
				}
			}
		}
	}
	for(var i=0;i<menu2.length;i++){
		menu1.push(menu2[i]);
	}	
	return menu1;
}

function duplicate(menu){
	for(var i=0;i<menu.length;i++){
		for(var name in menu[i]){
			var dupArr = menu[i][name]; //[approvalUserBaseInfo,approvalUserCreditInfo]
			if(dupArr.length > 1){
				for(var j = 0;j<dupArr.length;j++){
					for(var k=1;k>j,k<dupArr.length;k++){
						var dupObj1 = dupArr[j];
						var dupObj2 = dupArr[k];
						for(var name1 in dupObj1){
							for(var name2 in dupObj2){
								if(name1 == name2){
									var dupObjArr1 = dupObj1[name1];
									var dupObjArr2 = dupObj2[name2];
									for(var n=0;n<dupObjArr2.length;n++){
										if(dupObjArr1.indexOf(dupObjArr2[n]) == -1){
											dupObjArr1.push(dupObjArr2[n]);
											menu[i][name].splice(k,1);
										}										
									}								
								}
							}
						}
					}
				}
			}			
		}		
	}
	return menu;
}



