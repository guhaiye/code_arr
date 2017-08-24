/****
	*author:hale hu
	*email:hale1106@163.com
	*@copyRight:2012-5-28 hale
****/

(function($){
	$.fn.assoc = function(){
		var index = -1;
		var _val = "";
		$(this).live('keyup',function(e){
			var $this = $(this);		
			$this.parent().addClass('pos-r');
			$this.css({'display':'block'});
			var $ul = $("<ul class='dropL'><li>photoshop1</li><li>photoshop2</li><li>photoshop3</li></ul>");
			var $d = $this.next('ul.dropL');
			$d.length=="0"?$ul.insertAfter($this).show():$d.show();
			$d = $this.next('ul.dropL');
			$d.css({width:$this.outerWidth()});
			
			$('ul.dropL li').live('mouseover',function(){
				this.style.background='#eee';
			}).live('mouseout',function(){
				this.style.background='';
			}).live('click',function(e){
				e= e||window.event;
				e.stopPropagation();
				$(this).parent().prev().val($(this).text());	
				$d.hide();
			})
			
			//键盘选值
			e=e||window.event;
			var _key = e.keyCode,_n = $d.find('li').length;
			if(_key!=40&&_key!=38&&_key!=37&&_key!=39){
				_val = $this.val();
			};
			if(_key==40){//向下
				if(index >= _n){
					index=-1;				
				}
				index++;
				$d.find('li').css('background','#fff')
				$d.find('li').eq(index).css('background','#eee');
				$this.val($d.find('li').eq(index).text());
				if(index==_n){
					$this.val(_val);
				}
			}else if(_key==38){//向上
				if(index < 0){
					index=_n;
					$this.val(_val);
				}else if(index==0){
					index=_n+1;
					$this.val(_val);
				}
				index--;
				$d.find('li').css('background','#fff');
				$d.find('li').eq(index).css('background','#eee');
				$this.val($d.find('li').eq(index).text());
				if(index==_n){
					$this.val(_val);
				}
			}else if(_key==13){
				$('ul.dropL').hide();
			}
		});	
		$(document).bind('click',function(){
			$('ul.dropL').hide();
		});	
	}
})(jQuery);
