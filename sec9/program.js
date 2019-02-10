// program.js

var block = [
    [      // block0
           [
               [0, 0, 0, 0],
               [1, 1, 1, 0],
               [0, 1, 0, 0],
               [0, 0, 0, 0]
           ],
           [
               [0, 1, 0, 0],
               [0, 1, 1, 0],
               [0, 1, 0, 0],
               [0, 0, 0, 0]
           ],
           [
               [0, 1, 0, 0],
               [1, 1, 1, 0],
               [0, 0, 0, 0],
               [0, 0, 0, 0]
           ],
           [
               [0, 1, 0, 0],
               [1, 1, 0, 0],
               [0, 1, 0, 0],
               [0, 0, 0, 0]
           ],
    ],
    [      // block1
           [
               [0, 0, 0, 0],
               [1, 1, 1, 0],
               [1, 0, 0, 0],
               [0, 0, 0, 0]
           ],
           [
               [1, 0, 0, 0],
               [1, 0, 0, 0],
               [1, 1, 0, 0],
               [0, 0, 0, 0]
           ],
           [
               [0, 0, 0, 0],
               [0, 0, 1, 0],
               [1, 1, 1, 0],
               [0, 0, 0, 0]
           ],
           [
               [1, 1, 0, 0],
               [0, 1, 0, 0],
               [0, 1, 0, 0],
               [0, 0, 0, 0]
           ],
    ],
    [      // block2
           [
               [0, 0, 0, 0],
               [0, 1, 1, 0],
               [1, 1, 0, 0],
               [0, 0, 0, 0]
           ],
           [
               [1, 0, 0, 0],
               [1, 1, 0, 0],
               [0, 1, 0, 0],
               [0, 0, 0, 0]
           ],
           [
               [0, 0, 0, 0],
               [0, 1, 1, 0],
               [1, 1, 0, 0],
               [0, 0, 0, 0]
           ],
           [
               [1, 0, 0, 0],
               [1, 1, 0, 0],
               [0, 1, 0, 0],
               [0, 0, 0, 0]
           ],
    ],
    [      // block3
           [
               [0, 0, 0, 0],
               [1, 1, 1, 0],
               [0, 0, 1, 0],
               [0, 0, 0, 0]
           ],
           [
               [1, 1, 0, 0],
               [1, 0, 0, 0],
               [1, 0, 0, 0],
               [0, 0, 0, 0]
           ],
           [
               [0, 0, 0, 0],
               [1, 0, 0, 0],
               [1, 1, 1, 0],
               [0, 0, 0, 0]
           ],
           [
               [0, 1, 0, 0],
               [0, 1, 0, 0],
               [1, 1, 0, 0],
               [0, 0, 0, 0]
           ],
    ],
    [      // block4
           [
               [0, 0, 0, 0],
               [1, 1, 1, 1],
               [0, 0, 0, 0],
               [0, 0, 0, 0]
           ],
           [
               [0, 0, 1, 0],
               [0, 0, 1, 0],
               [0, 0, 1, 0],
               [0, 0, 1, 0]
           ],
           [
               [0, 0, 0, 0],
               [1, 1, 1, 1],
               [0, 0, 0, 0],
               [0, 0, 0, 0]
           ],
           [
               [0, 0, 1, 0],
               [0, 0, 1, 0],
               [0, 0, 1, 0],
               [0, 0, 1, 0]
           ],
    ],
    [      // block5
           [
               [0, 0, 0, 0],
               [0, 1, 1, 0],
               [0, 1, 1, 0],
               [0, 0, 0, 0]
           ],
           [
               [0, 0, 0, 0],
               [0, 1, 1, 0],
               [0, 1, 1, 0],
               [0, 0, 0, 0]
           ],
           [
               [0, 0, 0, 0],
               [0, 1, 1, 0],
               [0, 1, 1, 0],
               [0, 0, 0, 0]
           ],
           [
               [0, 0, 0, 0],
               [0, 1, 1, 0],
               [0, 1, 1, 0],
               [0, 0, 0, 0]
           ],
    ],
    [      // block6
           [
               [0, 0, 0, 0],
               [1, 1, 0, 0],
               [0, 1, 1, 0],
               [0, 0, 0, 0]
           ],
           [
               [0, 1, 0, 0],
               [1, 1, 0, 0],
               [1, 0, 0, 0],
               [0, 0, 0, 0]
           ],
           [
               [0, 0, 0, 0],
               [1, 1, 0, 0],
               [0, 1, 1, 0],
               [0, 0, 0, 0]
           ],
           [
               [0, 1, 0, 0],
               [1, 1, 0, 0],
               [1, 0, 0, 0],
               [0, 0, 0, 0]
           ],
    ]
];

// ブロックの色
var bcolor = ['#CC00CC', '#FFA500', '#0000CC',
        '#00CC00', '#CC0000', '#CCCC00', '#00CCCC'];

var col;  // blockのx座標 1..10
var row;  // blockのy座標 0..21

// block[syurui][muki]で、ブロックを指定できるようにする。
var syurui;  // ブロックの種類
var muki;    // ブロックの向き

var joutai;// 画面の各セルのデータ
var nextBlock = {syurui: 0, muki: 0};

var tensu;  // 得点

var gameOn;   // ゲームが実行中である
var jikan;    // タイマー

function otoKaiten() {
	document.getElementById('kaiten').play();
}
function otoOchiru() {
    document.getElementById('ochiru').play();
}
function otoDon() {
    document.getElementById('don').play();
}
function otoGameover() {
    document.getElementById('gameover').play();
}
function otoKieru() {
    document.getElementById('kieru').play();
}
function otoZenbu() {
    document.getElementById('zenbu').play();
}

function prPos(col, y, x) {
	var migi;
	migi = col + x;
	console.log('col:' + col + ' y:' + y + ' x:' + x + ' migi:' + migi);
}

function reRender() {
    var cv = document.getElementById('game').getContext('2d');
    
    cv.clearRect(20, 0, 219, 419);
    // console.log('----------------------');
    for (y = 0; y < 21; y++) {
        for (x = 1; x < 11; x++) {
            if (joutai[y][x] !== 100) {
                // console.log('joutai y:' + y + ' x:' + x + ' j:' + joutai[y][x]);
                cv.fillStyle = bcolor[joutai[y][x]];
                cv.strokeStyle = '#333333';
                cv.lineWidth = 3;
                cv.fillRect(x * 20, y * 20, 20, 20);
                cv.strokeRect(x * 20, y * 20, 20, 20);
            }
        }
    }
}

function moveJoutai(y) {
    var x;
    if (y !== 0) {
        for (x = 1; x < 11; x++) {
            joutai[y][x] = joutai[y - 1][x];
        }

        moveJoutai(y - 1);
    }
    for (x = 1; x < 11; x++) {
        joutai[0][x] = 100;
    }
}

function tokuten(num) {
    switch (num) {
        case 1:
            tensu = tensu + 10;
            otoKieru();
            break;
        case 2:
            tensu = tensu + 50;
            otoKieru();
            break;
        case 3:
            tensu = tensu + 100;
            otoKieru();
            break;
        case 4:
            tensu = tensu + 500;
            otoZenbu();
            break;
    }
    document.getElementById('tokuten').textContent = tensu;
}

function checkHolizonalLine() {
    var lineNo = [];   // 横一列そろっている行の配列
    var count;        // 100でないセルの数
    var x, y;

    // 1行ごとに100でないセルの数を数える
    for (y = 0; y < 21; y++) {
        count = 0;
        for (x = 1; x < 11; x ++) {
            if (joutai[y][x] !== 100) {
                count++;
            }
        }

        // もし、10個のセル全部が100でなかったら、
        if (count === 10) {
            lineNo.push(y);   // その行番号をlineNoに入れる。
        }
    }

    // lineNoには、そろっている行の番号が配列ではいっている。
    // 上の行から順番に、そろっている行を削除し、上の行を下につめる。
    if (lineNo.length > 0) {
        tokuten(lineNo.length);
        lineNo.forEach((ele) => {
            if (ele !== 0) {
                moveJoutai(ele);
            }
        });
        printJoutai();
        reRender();
    }
    
}

/**
 * All Green -- true
 *     Red   -- false
 */
function kakunin(col, row, syurui, muki) {
	var x, y;
	var hantei = true;
	var thisBlock = block[syurui][muki];

	for (y = 0; y < 4; y++) {
		for (x = 0; x < 4; x++) {
			if (thisBlock[y][x] === 1) {
				if (col + x < 1) {
					col = col + 1;
					return false;
		        }	
				if (col + x > 11) {
					col = col - 1;
					return false;
				}
				if (joutai[row + y][col + x] !== 100) {
					return false;
				}
			}
		}
	}
	return hantei;
}

/**
 * ブロックが底についたときの処理
 * 各セルにそのブロックのsyuruiを埋め込む。
 * syurui -- 0...6
 */
function atBottom(col, row, syurui, muki) {
    var thisBlock = block[syurui][muki];
    var x, y;

    for (y = 0; y < 4; y++) {
        for (x = 0; x < 4; x++) {
            if (thisBlock[y][x] === 1) {
                joutai[row + y][col + x] = syurui;
            }
        }
    }
}

function changeToNextBlock() {
    col = Math.floor(Math.random() * 7) + 1;
    row = 0;
    syurui = nextBlock.syurui;
    muki = nextBlock.muki;
//    console.log('col:' + col + ' row:' + row + ' syurui:' + syurui + ' muki:' + muki);

    // 新しいブロックが置けるかどうかを確認して、
    // もし置けなかったら、ゲームオーバー
    if (! kakunin(col, row, syurui, muki)) {
        otoGameover();
        alert('ゲームオーバー');
        gameOn = false;
    }
}

function makeNext() {
	var nextSyurui = Math.floor(Math.random() * 7);
	var nextMuki = Math.floor(Math.random() * 4);
	var nextGamen = document.getElementById('tsugi');
	var nextCV = nextGamen.getContext('2d');

	// 表示する前に消す
	nextCV.clearRect(0, 0, 79, 79);
	kaku(nextCV, 0, 0, nextSyurui, nextMuki);
    nextBlock.syurui = nextSyurui;
    nextBlock.muki = nextMuki;

}
/**
 * keyCode: left 37  up 38   right 39  down 40
 */
function ugokasu(e) {
	var gamegamen = document.getElementById('game');
	var cv = gamegamen.getContext('2d');
	var mukiOrg;

	kesu(cv, col, row, syurui, muki);


	switch (e.keyCode) {
		case 37:
			if (kakunin(col - 1, row, syurui, muki)) {
				col = col - 1;	
				otoKaiten();
			}
			break;
		case 38:
            mukiOrg = muki;
            muki = muki + 1;
            if (muki > 3) {
                muki = 0;
            }
            if (! kakunin(col, row, syurui, muki)) {
                muki = mukiOrg;
            }
	        otoKaiten();
			break;
		case 39:
			if (kakunin(col + 1, row, syurui, muki)) {
				col = col + 1;
				otoKaiten();
			}
            break;
		case 40:
			if (kakunin(col, row + 1, syurui, muki)) {
				row = row + 1;
				otoOchiru();
			}
            // 底についた
            else {
                kaku(cv, col, row, syurui, muki);
                otoDon();
                atBottom(col, row, syurui, muki);
                checkHolizonalLine();
                changeToNextBlock();
                makeNext();
            }
			break;
	}

	kaku(cv, col, row, syurui, muki);

}

/**
 * ブロックを消す
 */
function kesu(cv, x, y, syurui, muki) {
	// 消す処理にする
	cv.globalCompositeOperation = 'destination-out';
	// 描く処理と同じだが、実際は消える。
	kaku(cv, x, y, syurui, muki);
	// 元にもどす
	cv.globalCompositeOperation = 'source-over';
}


/**
 * ブロックを描く
 * @param: cv -- canvas
 *         x  -- ブロックを描くx座標
 *         y  -- ブロックを描くy座標
 */
function kaku(cv, x, y, syurui, muki) {
	var i, t, thisBlock;

	cv.fillStyle = bcolor[syurui];
	cv.strokeStyle = '#333333';
	cv.lineWidth = 3;

    thisBlock = block[syurui][muki];

	for (i = 0; i < 4; i++) {
		for (t = 0; t < 4; t++) {
			if (thisBlock[i][t] === 1) {
				cv.fillRect((x + t) * 20, (y + i) * 20, 20, 20);
				cv.strokeRect((x + t) * 20, (y + i) * 20, 20, 20);
			}
		}
	}
}

/**
 * joutai[y][x]の値を表に書き込む
 */
function printJoutai() {
	var y, x;
    var rows = [];
    var table = document.getElementsByTagName('table');
    
	for (y = 0; y < 21; y++) {
        for (x = 1; x < 11; x++) {
		    table[0].rows[y].cells[x - 1].innerText = joutai[y][x];
		}
	}
}
/**
 * joutai[y][x]の値を調べるための表を作成する
 */
function createTable() {
	var y, x;
    var rows = [];
    var table = document.createElement('table');
    
	for (y = 0; y < 21; y++) {
        rows.push(table.insertRow(-1));
        for (x = 1; x < 11; x++) {
            cell = rows[y].insertCell(-1);
            cell.appendChild(document.createTextNode('.'));
		}
	}
    document.getElementById('dataarea').appendChild(table);
}


/**
 * 画面の各セルにデータを埋め込む
 * 100 -- 移動できるセル
 *  99 -- 壁
 *  0...6 -- ブロックが積まれているセル
 */
function setupJoutai() {
	var i, j;

	joutai = new Array(23);
	for (i = 0; i < 23; i++) {
		joutai[i] = new Array(12);
		for (j = 0; j < 12; j++) {
			joutai[i][j] = 100;
		}
	}
	// 左壁
	for (i = 0; i < 23; i++) {
		joutai[i][0] = 99;
	}
	// 右壁
	for (i = 0; i < 23; i++) {
		joutai[i][11] = 99;
	}
	// 下壁
	for (j = 0; j < 12; j++) {
		joutai[21][j] = 99;
        joutai[22][j] = 99;
	}

	// printJoutai();
}

function jikandeugokasu() {
    if (gameOn) {
        // 実行中
        var ev = { keyCode: 40 };
        ugokasu(ev);
        
        jikan = jikan - 2;
        if (jikan < 50) {
            jikan = 1000;
        }
        document.getElementById('jikan').textContent = jikan;
        setTimeout(jikandeugokasu, jikan);
    }
}

function gamekaishi() {
	var gamegamen, cg;

	// Canvasを取得
	gamegamen = document.getElementById('game');

	cg =gamegamen.getContext('2d');

	// 画面を消す
	cg.clearRect(0, 0, 239, 439);

    tensu = 0;  // 得点をゼロにする

    gameOn = true;    // ゲーム実行中
    jikan = 1000;     // タイマーを1秒にセット

    setTimeout(jikandeugokasu, jikan);
    
	// 画面データをつくる
	setupJoutai();

	col = 4;
	row = 0;

    syurui = Math.floor(Math.random() * 7);  // 0...6
    muki = Math.floor(Math.random() * 4);;   // 0...3

	kaku(cg, col, row, syurui, muki);

	makeNext();

    createTable();
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
