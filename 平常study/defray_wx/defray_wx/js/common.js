//自定义-错误弹框
function allert_auto_bomb(text, hidetime) {
	hidetime = hidetime ? hidetime : 3000;
	var errAlert = "<div class='auto-bomb'><p>";
	errAlert += "<i class='tan'></i>" + text + "</p>";
	errAlert += "</div>";
	$("body").append(errAlert);
	setTimeout(function () {
		if ($(".auto-bomb")) {
			$(".auto-bomb").remove();
		}
	}, hidetime);
}