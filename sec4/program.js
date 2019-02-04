// program.js
var block = [
    [0, 0, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0]
];


function gamekaishi() {
	var x, y, i, t,
		gamegamen, cg;

	
    // Canvasを取得
    gamegamen = document.getElementById('game');

    cg =gamegamen.getContext('2d');

	x = 4;
	y = 0;

	cg.fillStyle = '#cc00cc';
	cg.strokeStyle = '#aaaaaa';

    for (i = 0; i < 4; i++) {
        for (t = 0; t < 4; t++) {
            if (block[i][t] === 1) {
                cg.fillRect((x + t) * 20, (y + i) * 20, 20, 20);
                cg.strokeRect((x + t) * 20, (y + i) * 20, 20, 20);
            }
        }
    }
    /*
	cg.fillRect(x * 20, y, 20, 20);
	cg.strokeRect(x * 20, y, 20, 20);

	cg.fillRect((x + 1) * 20, y, 20, 20);
	cg.strokeRect((x + 1) * 20, y, 20, 20);

	cg.fillRect((x + 2)   * 20, y, 20, 20);
	cg.strokeRect((x + 2) * 20, y, 20, 20);

	cg.fillRect((x  + 1) * 20, (y + 1) * 20, 20, 20);
	cg.strokeRect((x + 1) * 20, (y + 1) * 20, 20, 20);
    */
}

function hajime() {

    var backgamen,
        cb, x, y;

    // Canvasを取得
    backgamen = document.getElementById('back');

    cb =backgamen.getContext('2d');

    // 塗りを設定
    cb.fillStyle = '#CCCCCC';

    // 線を設定
    cb.strokeStyle = '#333333';
    cb.lineWidth = 3;

    // 四角形を塗る
    // cb.fillRect(0, 0, 20, 20);

    // 四角形の枠線を描く
    // cb.strokeRect(0, 0, 20, 20);

    // 左壁を描く
    x = 0;
    y = 0;

    for (var i = 0; i < 22; i++) {
        cb.fillRect(x, y, 20, 20);
        cb.strokeRect(x, y, 20, 20);
        y = y + 20;
    }
	// 右壁を描く
	x = 11 * 20;
	y = 0;
    for (var i = 0; i < 22; i++) {
        cb.fillRect(x, y, 20, 20);
        cb.strokeRect(x, y, 20, 20);
        y = y + 20;
    }
	// 下壁を描く
	x = 20;
	y = 21 * 20;
    for (var i = 0; i < 20; i++) {
        cb.fillRect(x, y, 20, 20);
        cb.strokeRect(x, y, 20, 20);
        x = x + 20;
    }
}
