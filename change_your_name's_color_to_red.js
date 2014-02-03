// ==UserScript==
// @name Bura3 Change your name's color to red - Wint
// @namespace http://wint.x0.com/
// @description あなたの名前を赤にします。
// @include http://*.3gokushi.jp/*
// @include https://*.3gokushi.jp/*
// ==/UserScript==

(function() {
	//ユーザー番号はユーザーページのURLに含まれています。
	var your_id = ""; //あなたのブラウザ三国志のユーザー番号を入力してください。
	var name = document.getElementsByTagName("a");
	console.log(name.length);

	for(i=1;i<name.length;i++){
		var name_href = name[i].getAttribute('href');
		if(name_href == "/user/?user_id=" + your_id){
			name[i].style.color = "#FF0000";
			console.log("一致しました！");
		}
		console.log(i + "回目の実行です！");
	}
}());
