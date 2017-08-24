//示例，生成一个表格
$(function(){
	var list = [createFun('微团购',200),createFun('微商场',300),createFun('微酒店',400),createFun('留言板',500),createFun('微调研',700),createFun('微投票',800)];
	console.log(list);
	//创建表格
	getTable('container',5,6,1000,list);
	//动态宽高
    getWidth();
});