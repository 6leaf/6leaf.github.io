var $window = $(window)
var clientWidth = $(window).width();
var clientHeight = $(window).height();

$(window).resize(function() {
	var b = $(window).width();
	var a = $(window).height();
	if (b != clientWidth && a != clientHeight) {
		location.replace(location)
	}
});

// 初始化时候做的
$(function() {
	
	drawLoveHeartLeft();
	drawLoveHeartRight();
	drawWords();

	$("#elapseClock").hide();
	
});

// 绘制时间
function drawTime(){
	
	// 看是否绘制完成，绘制其他的东东
	setInterval(function(){
		adjustWordsPosition();
		timeElapse();
		
	}, 1000);
}

// 打字完成
var wordIsFinished = false;
function drawWords(){
	// 先绘制文字，绘制完毕绘制心形
	adjustCodePosition();
	$("#words").typewriter();

	var a = setInterval(function(){
		if(wordIsFinished){
			clearInterval(a);
			wordIsFinished = true;

			drawLoveHeart();
		}
	}, 1000);
}


// 绘制心形图形
function drawLoveHeartLeft(){
	var startX = 100;
	var startY = $("#paint").height() *3 / 4 + 30;

	var gardenCanvas = $("#garden")[0];
	gardenCanvas.width = $("#paint").width();
	gardenCanvas.height = $("#paint").height();
	
	var gardenCtx = gardenCanvas.getContext("2d");
	gardenCtx.globalCompositeOperation = "lighter";

	var garden = new Garden(gardenCtx, gardenCanvas);
	
	heart = new Heart();
	heart.draw(startX, startY, 5,0.09,garden);
	var right = setInterval(function(){
		if(Heart.finished){
			Heart.clear(garden);

			heart.draw(startX, startY, 5, 0.09, garden);
			
			if(startX < $("#paint").width()/2){
				startX = startX + 30;
			}
			
		}

		if(wordIsFinished){
			clearInterval(right);
		}
	}, 3000);
	
}

// 绘制心形图形
function drawLoveHeartRight(){
	var startX = $("#paint").width() -100;
	var startY = $("#paint").height() *3 / 4 + 30;

	var gardenCanvas = $("#garden")[0];
	gardenCanvas.width = $("#paint").width();
	gardenCanvas.height = $("#paint").height();
	
	var gardenCtx = gardenCanvas.getContext("2d");
	gardenCtx.globalCompositeOperation = "lighter";

	var garden = new Garden(gardenCtx, gardenCanvas);
	
	heart = new Heart();
	heart.draw(startX, startY, 5, 0.09,garden);
	var left = setInterval(function(){
		if(Heart.finished){
			Heart.clear(garden);
			heart.draw(startX, startY, 5, 0.09, garden);
			
			if(startX > $("#paint").width()/2){
				startX = startX - 30;
			}
			
		}

		if(wordIsFinished){
			clearInterval(left);
		}
	}, 3000);
	
}

// 绘制心形图形
function drawLoveHeart(){
	var startX = $("#paint").width() / 2 ;
	var startY = $("#paint").height() / 2 - 10;

	var gardenCanvas = $("#garden")[0];
	gardenCanvas.width = $("#paint").width();
	gardenCanvas.height = $("#paint").height();
	
	var gardenCtx = gardenCanvas.getContext("2d");
	gardenCtx.globalCompositeOperation = "lighter";

	var garden = new Garden(gardenCtx, gardenCanvas);
	
	heart = new Heart();
	heart.draw(startX, startY, 20, 0.0202,garden);
	setInterval(function(){
		if(Heart.finished){
			Heart.clear(garden);
			heart.draw(startX, startY, 20, 0.0202,garden);

			drawTime();		
		}
	}, 7000);
	
}

// 打字机效果
(function(a) {
	a.fn.typewriter = function() {
		this.each(function() {
			var d = a(this),
			c = d.html(),
			b = 0;
			d.html("");
			var e = setInterval(function() {
				var f = c.substr(b, 1);
				if (f == "<") {
					b = c.indexOf(">", b) + 1
				} else {
					b++
				}
				d.html(c.substring(0, b) + (b & 1 ? "_": ""));
				if (b >= c.length) {
					clearInterval(e);
					wordIsFinished = true;
				}
			},
			230)
		});
		return this
	}
})(jQuery);

// 计算时间
function timeElapse() {
	var togetherStart = new Date();
	togetherStart.setFullYear(2013, 4, 20);
	togetherStart.setHours(0);
	togetherStart.setMinutes(0);
	togetherStart.setSeconds(0);
	togetherStart.setMilliseconds(0);

	var e = Date();
	var f = (Date.parse(e) - Date.parse(togetherStart)) / 1000;
	var g = Math.floor(f / (3600 * 24));
	f = f % (3600 * 24);
	var b = Math.floor(f / 3600);
	if (b < 10) {
		b = "0" + b
	}
	f = f % 3600;
	var d = Math.floor(f / 60);
	if (d < 10) {
		d = "0" + d
	}
	f = f % 60;
	if (f < 10) {
		f = "0" + f
	}
	var a = '<span class="digit">' + g + '</span> days <span class="digit">' + b + '</span> hours <span class="digit">' + d + '</span> minutes <span class="digit">' + f + "</span> seconds";
	$("#elapseClock").html(a)
}

function adjustWordsPosition() {
	$("#elapseClock").css("position", "absolute");
	$("#elapseClock").css("top", $("#paint").position().top + $("#paint").height()/2);
	$("#elapseClock").css("left", $("#paint").position().left + $("#paint").width()/2 - 180);

	$("#words").fadeOut(1500);
	$("#elapseClock").fadeIn(6500);
}

function adjustCodePosition() {
	$("#words").css("position", "absolute");
	$("#words").css("top", $("#paint").position().top + $("#paint").height()/2 - 100);
	$("#words").css("left", $("#paint").position().left + $("#paint").width()/2 - 120);
	//$("#words").css("margin-top", ($("#content").height() - $("#code").height()) / 2)
}
