(function (){
	var rootEl = document.documentElement;
	var metaEl = document.querySelector('meta[name="viewport"]');
	window.dpr = window.devicePixelRatio || 1;
	window.rem = rootEl.clientWidth * dpr / 10;
	window.scale = 1 / dpr;

	metaEl.setAttribute('content', 'width=' + dpr * rootEl.clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');
	rootEl.setAttribute('data-dpr', dpr);
	rootEl.setAttribute('style', 'font-size:' + rem + 'px!important;');

	// 给js调用的，某一dpr下rem和px之间的转换函数
	window.rem2px = function(v) {
		v = parseFloat(v);
		return v * rem;
	};
	window.px2rem = function(v) {
		v = parseFloat(v);
		return v / rem;
	};
})();
