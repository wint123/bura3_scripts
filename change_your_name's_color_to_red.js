// ==UserScript==
// @name Bura3 how many Resources - Wint
// @namespace http://wint.x0.com/
// @description どれだけの資源を持っているのか表示します
// @include http://s25.3gokushi.jp/*
// ==/UserScript==

(function() {
	var name = document.getElementsByTagName("a");
	console.log(name.length);

	for(i=1;i<name.length;i++){
		var name_href = name[i].getAttribute('href');
		if(name_href == "/user/?user_id=1675"){
			name[i].style.color = "#FF0000";
			console.log("一致しました！");
		}
		if(name_href == "/user/?user_id=1775"){
			name[i].style.color = "#00FF00";
			console.log("一致しました！");
		}
		console.log(i + "回目の実行です！");
	}
}());
