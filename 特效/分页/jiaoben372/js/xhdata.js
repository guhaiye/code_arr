$(function(){	
	$("#Searchresult").append("<li>aaa</li><li>bbb</li><li>ccc</li>");  
	var num_entries = $("#Searchresult li").length;	
	var showCount = 1;
	var initPagination = function() {
		$("#Pagination").pagination(num_entries, {
			num_edge_entries: 1,
			num_display_entries: 4,
			callback: pageselectCallback,
			items_per_page:showCount 
		});
	 }();	 
	function pageselectCallback(page_index, jq){
		var max_elem = Math.min((page_index+1) *showCount, num_entries);		
		$("#htcList").html("");		
		for(var i=page_index*showCount;i<max_elem;i++){
			var new_content = $("#Searchresult li:eq("+i+")").clone();
			$("#htcList").append(new_content);
		}
		return false;
	}
});
