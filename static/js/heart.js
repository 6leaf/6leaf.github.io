// 定义heart类
function Heart(){
	this.init();
}

// 定义heart类的draw函数
Heart.prototype={
	init:function(){
		Heart.finished = false;
	},
	calPositon:function(startx, starty, radius, addArch, garden){
		// 初始化弧度系数，0-2
		var startArch = 0;

		// 执行定时计算，frequency是刷新频率
		var a = setInterval(function() {
			// 计算出的当前心形坐标
			var coordinates=Heart.calCenter(startArch,startx, starty, radius);

			// 将绘制的点加入到绘制的集合中,碰到底部和顶部时候要控制一下
			if(startArch <= 0.94 || ((startArch -1) <=0.92 && (startArch - 1) >= 0.08)){
				garden.createRandomBloom(coordinates[0], coordinates[1]);
			}
			
			// 弧度依次增加,弧度为2PI时，就停止继续绘制
			if (startArch >= 2) {
				clearInterval(a);
				Heart.finished = true;
			} else {
				startArch += addArch;//0.020265432069524;
			}

		}, 50);

	},
	draw:function(startx, starty, radius, addArch,garden){
		// 启动计算坐标函数
		this.calPositon(startx,starty, radius, addArch, garden);

		// 定时刷新绘制
		setInterval(function() {
			garden.render();

		}, Garden.options.growSpeed)
	}

};

// 是否完成绘制
Heart.finished = false;

// 静态方法，计算坐标点
Heart.calCenter=function(startArch, startX, startY, radius){
	// 0-PI-2PI
	var b = startArch * Math.PI;
	
	// x,y轴，平面坐标点，参考心形线绘制方法
	var a = radius * (16 * Math.pow(Math.sin(b), 3));
	var d = -1 * radius * (13 * Math.cos(b) - 5 * Math.cos(2 * b) - 2 * Math.cos(3 * b) - Math.cos(4 * b));

	return new Array(startX + a, startY + d);
}

// 清除画布
Heart.clear=function(garden){
	garden.clear();
}

