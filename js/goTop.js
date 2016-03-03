/**
 * Created by cmy on 2016/2/26.
 */
window.onload = function() {
	var obtn = document.getElementById('totop');
	var timer = null;
	var isTop = true;
	var clientHeight = document.documentElement.clientHeight;//获取可视区域的高度

	//滚动条滚动时触发
	window.onscroll = function() {
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		if (osTop >= (clientHeight)) {
			obtn.style.display = 'block';
		} else {
			obtn.style.display = 'none';
		}
		if (!isTop) {
			clearInterval(timer);
		}
		isTop = false;
	};
	obtn.onclick = function() {
		//设置定时器
		timer = setInterval(function() {
			//获取滚动条距离顶部的高度
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			var speed = Math.floor(-osTop / 6);//控制速度
			document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
			isTop = true;
			console.log(osTop - speed);
			//判断
			if (osTop == 0) {
				clearInterval(timer);
			}
		}, 30);
	}
}