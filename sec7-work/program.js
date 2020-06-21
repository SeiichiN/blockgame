// program.js

const block = [
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
      [1, 1, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
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
const bcolor = ['#CC00CC', '#FFA500', '#CC0000',
                '#00CC00', '#CC0000', '#CCCC00', '#00CCCC'];


let col;  // blockのx座標 1..10
let row;  // blockのy座標 0..21

let syurui;
let muki;

// 画面の状態を記憶しておく
const joutai = new Array(23);

// 次のブロック
const nextBlock = { syurui: 0, muki: 0 };

function otoKaiten() {
  document.getElementById('kaiten').play();
}
function otoOchiru() {
  document.getElementById('ochiru').play();
}
function otoDon() {
  document.getElementById('don').play();
}

/**
 * kakunin -- 移動回転が可能かどうかを判定する
 * 引数
 *   col -- 現在のx座標(ブロックの左上)
 *   row -- 現在のy座標(ブロックの左上)
 *   syurui -- ブロックの種類(0...6)
 *   muki -- ブロックの向き(0...3)
 * 返り値
 *   true -- 移動は可能
 *   false -- 移動は不可能
 */
function kakunin(col, row, syurui, muki) {
  let x, y;
  let hantei = true;
  const thisBlock = block[syurui][muki];

  for (y = 0; y < 4; y++) {
	for (x = 0; x < 4; x++) {
      if (thisBlock[y][x] === 1) {
        // もしx座標が左の壁にはいったら 
        if (col + x < 1) {
          // x座標を戻す
		  col = col + 1;
		  return false;
		}	
        // もしx座標が右の壁に入ったら
        if (col + x > 11) {
          // x座標を戻す
		  col = col - 1;
		  return false;
        }
        // ブロックのどこかが 100 でなかったら
        // そこは移動可能な場所ではない。
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
 * 画面データの配列 joutai[][] の
 * 各セルにそのブロックのsyuruiを埋め込む。
 * syurui -- 0...6
 */
function atBottom(col, row, syurui, muki) {
  const thisBlock = block[syurui][muki];
  let x, y;

  for (y = 0; y < 4; y++) {
    for (x = 0; x < 4; x++) {
      if (thisBlock[y][x] === 1) {
        joutai[row + y][col + x] = syurui;
      }
    }
  }
}

/**
 * 次のブロックに処理を切り変える
 * 次のブロックの情報(種類、向き)は、
 * nextBlock(初期値) から得る。
 */
function changeToNextBlock() {
  col = Math.floor(Math.random() * 7) + 1;
  row = 0;
  syurui = nextBlock.syurui;
  muki = nextBlock.muki;
}

/**
 * 次のブロックの種類と向きを決定する。
 * 次のブロックを小窓に表示する。
 */
function makeNext() {
  const nextSyurui = Math.floor(Math.random() * 7);
  const nextMuki = Math.floor(Math.random() * 4);
  // 次のブロックを表示する小窓
  const nextGamen = document.getElementById('tsugi');
  const nextCV = nextGamen.getContext('2d');

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
  const gamegamen = document.getElementById('game');
  const cv = gamegamen.getContext('2d');	
  let mukiOrg;
  
  kesu(cv, col, row, syurui, muki);


  switch (e.keyCode) {
  case 37:
    // kakunin()がtrueならcolを左に移動
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
    // もし、回転してkakunin()が false なら
    if (! kakunin(col, row, syurui, muki)) {
      // 向きを元に戻す
      muki = mukiOrg;
    }
	otoKaiten();
	break;
  case 39:
    // kakunin()が true なら colを右に移動
    if (kakunin(col + 1, row, syurui, muki)) {
	  col = col + 1;
      otoKaiten();
    }
    break;
  case 40:
    // kakunin()が true なら row を一つ下に移動
    if (kakunin(col, row + 1, syurui, muki)) {
      row = row + 1;
      otoOchiru();
    }
    // もし kakunin()が false なら、底についたということ
    else {
      kaku(cv, col, row, syurui, muki);
      otoDon();  // 底についた音
      // 画面データの配列 joutai にブロックの種類を埋め込む
      atBottom(col, row, syurui, muki);
      printJoutai();
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
  let i, t;

  cv.fillStyle = bcolor[syurui];
  cv.strokeStyle = '#333333';
  cv.lineWidth = 3;

  const thisBlock = block[syurui][muki];

  for (i = 0; i < 4; i++) {
	for (t = 0; t < 4; t++) {
	  if (thisBlock[i][t] === 1) {
		cv.fillRect((x + t) * 20, (y + i) * 20, 20, 20);
		cv.strokeRect((x + t) * 20, (y + i) * 20, 20, 20);
	  }
	}
  }
}

// 画面の各セルの状態を表示する  
function printJoutai() {
  let i, j;
  const joutaiArea = document.getElementById('joutai-area');
  let joutaiHtml;

  joutaiHtml = '<table>';
  for (i = 0; i < 23; i++) {
    joutaiHtml = joutaiHtml + `<tr><th>${i}:</th>`;
	for (j = 0; j < 12; j++) {
      joutaiHtml = `${joutaiHtml}<td>${joutai[i][j]}</td>`;
	}
    joutaiHtml = joutaiHtml + '</tr>';
  }
  joutaiHtml = joutaiHtml + '</table>';

  joutaiArea.innerHTML = joutaiHtml;
}

/**
 * 画面の各セルにデータを埋め込む
 * 100 -- 移動できるセル
 *  99 -- 壁
 *  0...6 -- ブロックが積まれているセル
 */
function setupJoutai() {
  let i, j;

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
}

function gamekaishi() {
  // Canvasを取得
  const gamegamen = document.getElementById('game');

  const cg =gamegamen.getContext('2d');

  // 画面を消す
  cg.clearRect(0, 0, 239, 439);

  // 画面データをつくる
  setupJoutai();
  // 画面データを表示
  printJoutai();
  
  col = 4;
  row = 0;

  syurui = Math.floor(Math.random() * 7);
  muki = Math.floor(Math.random() * 4);;

  kaku(cg, col, row, syurui, muki);

  makeNext();
}

function hajime() {

  // Canvasを取得
  const backgamen = document.getElementById('back');

  const cb =backgamen.getContext('2d');

  // 塗りを設定
  cb.fillStyle = '#CCCCCC';

  // 線を設定
  cb.strokeStyle = '#333333';
  cb.lineWidth = 3;

  // 左壁を描く
  let x = 0;
  let y = 0;
  let i;

  for (i = 0; i < 22; i++) {
	cb.fillRect(x, y, 20, 20);
	cb.strokeRect(x, y, 20, 20);
	y = y + 20;
  }
  // 右壁を描く
  x = 11 * 20;
  y = 0;
  for (i = 0; i < 22; i++) {
	cb.fillRect(x, y, 20, 20);
	cb.strokeRect(x, y, 20, 20);
	y = y + 20;
  }
  // 下壁を描く
  x = 20;
  y = 21 * 20;
  for (i = 0; i < 20; i++) {
	cb.fillRect(x, y, 20, 20);
	cb.strokeRect(x, y, 20, 20);
	x = x + 20;
  }
}

// 修正時刻： Sun Jun 21 19:10:59 2020
