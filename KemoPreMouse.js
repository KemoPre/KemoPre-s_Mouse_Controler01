function sleeper(ws,cbf) {
	var sc = ws;
	var wf = function () {
		sc -= 1;
		if (sc <= 0) {
			if (cbf) cbf();
			return;
		}
 		clearTimeout(id);
		id = setTimeout(wf, 50);
	};
	var id = setTimeout(wf, 50);
}

KemoPreMouseCSelf20 = 320;
function KemoPreMouseKeyOk(){
	Input._currentState['ok'] = true;
	sleeper(2, function() {
		 Input._currentState['ok'] = false;
	});
}
function KemoPreMouseKeyEscape(){
	Input._currentState['escape'] = true;
	sleeper(2, function() {
		 Input._currentState['escape'] = false;
	});
}
function KemoPreMouseKeyDown(){
	Input._currentState['down'] = true;
	sleeper(2, function() {
		 Input._currentState['down'] = false;
	});
}
function KemoPreMouseKeyLeft(){
	Input._currentState['left'] = true;
	sleeper(2, function() {
		 Input._currentState['left'] = false;
	});
}
function KemoPreMouseKeyRight(){
	Input._currentState['right'] = true;
	sleeper(2, function() {
		 Input._currentState['right'] = false;
	});
}
function KemoPreMouseKeyUp(){
	Input._currentState['up'] = true;
	sleeper(2, function() {
		 Input._currentState['up'] = false;
	});
}

function KemoPreMouseDown(e){
		var KemoPreMouseCSelf9 = "MouseDown";
		console.log(KemoPreMouseCSelf9);		
		KemoPreMouseCSelf10 = e.clientX;
		KemoPreMouseCSelf11 = e.clientY;
		if (KemoPreMouseCSelf10 < KemoPreMouseCSelf20) {
			KemoPreMouseCSelf24 = 0;
		}
		if (KemoPreMouseCSelf10 > KemoPreMouseCSelf20) {
			KemoPreMouseCSelf24 = 1;
		}
}

function KemoPreMouseUp(e){
		KemoPreMouseCSelf12 = e.clientX; 
		KemoPreMouseCSelf13 = e.clientY;
		KemoPreMouseCSelf14 = KemoPreMouseCSelf12 - KemoPreMouseCSelf10;
		KemoPreMouseCSelf15 = KemoPreMouseCSelf13 - KemoPreMouseCSelf11;
		KemoPreMouseCSelf16 = Math.abs(KemoPreMouseCSelf14);
		KemoPreMouseCSelf17 = Math.abs(KemoPreMouseCSelf15);
		KemoPreMouseCSelf18 = KemoPreMouseCSelf14 * KemoPreMouseCSelf14;
		KemoPreMouseCSelf18 = KemoPreMouseCSelf15 * KemoPreMouseCSelf15 + KemoPreMouseCSelf18;
		if (KemoPreMouseCSelf10 < KemoPreMouseCSelf20) {
			KemoPreMouseCSelf24 = 0;
		}
		if (KemoPreMouseCSelf10 > KemoPreMouseCSelf20) {
			KemoPreMouseCSelf24 = 1;
		}
		if(KemoPreMouseCSelf24 == 1){
			if(KemoPreMouseCSelf18 <= 100){
				 //キャンセル
				var KemoPreMouseCSelf9 = "escape";
				console.log(KemoPreMouseCSelf9);
				KemoPreMouseKeyEscape();
			} else {
				if(KemoPreMouseCSelf16 > KemoPreMouseCSelf17){
					if(KemoPreMouseCSelf14 > 0){
						//右
						var KemoPreMouseCSelf9 = "right+Shift";
						console.log(KemoPreMouseCSelf9);
						KemoPreMouseKeyRight();
					} if(KemoPreMouseCSelf14 < 0){
						//左
						var KemoPreMouseCSelf9 = "left+Shift";
						console.log(KemoPreMouseCSelf9);
						KemoPreMouseKeyLeft();
					}
				} if(KemoPreMouseCSelf16 < KemoPreMouseCSelf17){
					if(KemoPreMouseCSelf15 > 0){
						//下
						var KemoPreMouseCSelf9 = "down+Shift";
						console.log(KemoPreMouseCSelf9);
						KemoPreMouseKeyDown();
					} if(KemoPreMouseCSelf15 < 0){
						//上
						var KemoPreMouseCSelf9 = "up+Shift";
						console.log(KemoPreMouseCSelf9);
						KemoPreMouseKeyUp();
					}
				}
			}
		} if(KemoPreMouseCSelf24 == 0){
			if(KemoPreMouseCSelf18 <= 100){
				//決定
				var KemoPreMouseCSelf9 = "ok";
				console.log(KemoPreMouseCSelf9);
				KemoPreMouseKeyOk();
			} else {
				if(KemoPreMouseCSelf16 > KemoPreMouseCSelf17){
					if(KemoPreMouseCSelf14 > 0){
						//右
						var KemoPreMouseCSelf9 = "right";
						console.log(KemoPreMouseCSelf9);
						KemoPreMouseKeyRight();
					} if(KemoPreMouseCSelf14 < 0){
						//左
						var KemoPreMouseCSelf9 = "left";
						console.log(KemoPreMouseCSelf9);
						KemoPreMouseKeyLeft();
					}
				} if(KemoPreMouseCSelf16 < KemoPreMouseCSelf17){
					if(KemoPreMouseCSelf15 > 0){
						//下
						var KemoPreMouseCSelf9 = "down";
						console.log(KemoPreMouseCSelf9);
						KemoPreMouseKeyDown();
					} if(KemoPreMouseCSelf15 < 0){
						//上
						var KemoPreMouseCSelf9 = "up";
						console.log(KemoPreMouseCSelf9);
						KemoPreMouseKeyUp();
					}
				}
			}
		}
}


if(document.addEventListener){
	document.addEventListener("mousedown" , KemoPreMouseDown);
} else {
	if(document.attachEvent){
		document.attachEvent("mousedown" , KemoPreMouseDown);
	}
}

if(document.addEventListener){
	document.addEventListener("mouseup" , KemoPreMouseUp);
} else {
	if(document.attachEvent){
		document.attachEvent("mouseup" , KemoPreMouseUp);
	}
}
