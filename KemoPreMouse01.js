// ------------------------------------------------------------
// MITライセンス
// ------------------------------------------------------------
// 匿名関数内で実行
(function (){
// ------------------------------------------------------------
// 各エレメント取得おーん（要書き換え）
// ------------------------------------------------------------
var element = document.getElementById("element_01");

// ------------------------------------------------------------
// マウイベ用のグロ変を定義だおーん
// ------------------------------------------------------------
var KemoPreMouseXDD = 0;

var KemoPreMouseYDD = 0;

// ------------------------------------------------------------
// マウボプッシュを定義だおーん
// ------------------------------------------------------------
function MousedownKemoPre(e){

KemoPreMouseXDD = e.screenX;

KemoPreMouseYDD = e.screenY;


// 定義は以上おーん
};
// ------------------------------------------------------------
// マウボリリースを定義だおーん
// ------------------------------------------------------------
function MouseupKemoPre(e){

KemoPreMouseXDD -= e.screenX;

KemoPreMouseYDD -= e.screenY;

KemoPreMouseXDD *= -1;

KemoPreMouseYDD *= -1;

var KemoPreMouseXDDAbs = Math.abs(KemoPreMouseXDD) 

var KemoPreMouseYDDAbs = Math.abs(KemoPreMouseYDD) 

var KemoPreMouseXYDD = KemoPreMouseXDD * KemoPreMouseXDD + KemoPreMouseYDD * KemoPreMouseYDD;

	//距離の2乗が100以上、すなわち距離が10以上の条件処理おーん
		if(KemoPreMouseXYDD >= 100){

	// X優位の条件処理おーん
		if(KemoPreMouseXDDAbs > KemoPreMouseYDDAbs){

		// Xがプラスの条件処理おーん
			if(KemoPreMouseXDD > 0){

			// ここに右キーの動作をいれてください


		// Xがプラスの条件処理終了おーん
			}

		// Xがマイナスの条件処理おーん
			if(KemoPreMouseXDD < 0){

			// ここに左キーの動作をいれてください


		// Xがマイナスの条件処理終了おーん
			}

	// X優位の条件処理終了おーん
		}

	// Y優位の条件処理おーん
		if(KemoPreMouseYDDAbs > KemoPreMouseXDDAbs){

		// Yがプラスの条件処理おーん
			if(KemoPreMouseYDD > 0){

			// ここに下キーの動作をいれてください


		// Yがプラスの条件処理終了おーん
			}

		// Yがマイナスの条件処理おーん
			if(KemoPreMouseYDD < 0){

			// ここに上キーの動作をいれてください


		// Yがマイナスの条件処理終了おーん
			}

	// Y優位の条件処理終了おーん
		}

	//距離の2乗が100以上、すなわち距離が10以上の条件処理終了おーん
		}

KemoPreMouseXDD = 0;

KemoPreMouseYDD = 0;


// 定義は以上おーん
};
// ------------------------------------------------------------
// クリックを定義だおーん
// ------------------------------------------------------------
function ClickKemoPre(e){

var KemoPreMouseXDDAbs = Math.abs(KemoPreMouseXDD) 

var KemoPreMouseYDDAbs = Math.abs(KemoPreMouseYDD) 

var KemoPreMouseXYDD = KemoPreMouseXDD * KemoPreMouseXDD + KemoPreMouseYDD * KemoPreMouseYDD;

	//距離の2乗が100未満、すなわち距離が10未満の条件処理おーん
		if(KemoPreMouseXYDD < 100){

			// ここに決定キーの動作をいれてください
			

	//距離の2乗が100未満、すなわち距離が10未満の条件処理終了おーん
		}

KemoPreMouseXDD = 0;

KemoPreMouseYDD = 0;


// 定義は以上おーん
};

// ------------------------------------------------------------
// 右クリックを定義だおーん
// ------------------------------------------------------------
function ContextmenuKemoPre(e){

var KemoPreMouseXDDAbs = Math.abs(KemoPreMouseXDD) 

var KemoPreMouseYDDAbs = Math.abs(KemoPreMouseYDD) 

var KemoPreMouseXYDD = KemoPreMouseXDD * KemoPreMouseXDD + KemoPreMouseYDD * KemoPreMouseYDD;

	//距離の2乗が100未満、すなわち距離が10未満の条件処理おーん
		if(KemoPreMouseXYDD < 100)

			// ここにキャンセルキーの動作をいれてください
			

	//距離の2乗が100未満、すなわち距離が10未満の条件処理終了おーん
		}

KemoPreMouseXDD = 0;

KemoPreMouseYDD = 0;


// 定義は以上おーん
};
// ------------------------------------------------------------
// マウイベを読み込んで関数を実行するんだおーん
// ------------------------------------------------------------

// イベントリスナー対応おーん
if(element.addEventListener){

	// マウボプッシュで実行おーん
		element.addEventListener("mousedown" , MousedownKemoPre);

	// マウボリリースで実行おーん
		element.addEventListener("mouseup" , MouseupKemoPre);

	// 左クリックで実行おーん
		element.addEventListener("click" , ClickKemoPre);

	// 右クリックで実行おーん
		element.addEventListener("contextmenu" , ContextmenuKemoPre);

// アタッチイベント対応おーん
	}else if(element.attachEvent){

	// マウボプッシュで実行おーん
		element.attachEvent("onmousedown" , MousedownKemoPre);

	// マウボリリースで実行おーん
		element.attachEvent("onmouseup" , MouseupKemoPre);

	// 左クリックで実行おーん
		element.attachEvent("onclick" , ClickKemoPre);

	// 右クリックで実行おーん
		element.attachEvent("oncontextmenu" , ContextmenuKemoPre);
}

// ------------------------------------------------------------
// 関数終了おーん
// ------------------------------------------------------------
})();
