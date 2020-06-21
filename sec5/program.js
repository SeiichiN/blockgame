// program.js
const block = [
  [0, 0, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0]
];

let col;  // blockのx座標 1..10
let row;  // blockのy座標 0..21

function otoKaiten() {
  document.getElementById('kaiten').play();
}

/**
 * keyCode: left 37  up 38   right 39  down 40
 */
function ugokasu(e) {
  const gamegamen = document.getElementById('game');
  const cv = gamegamen.getContext('2d');	

  kesu(cv, col, row);

  otoKaiten();

  switch (e.keyCode) {
  case 37:
	col = col - 1;
	break;
  case 38:
	break;
  case 39:
	col = col + 1;
	break;
  case 40:
	break;
  }

  kaku(cv, col, row);

}

/**
 * ブロックを消す
 */
function kesu(cv, x, y) {
  // 消す処理にする
  cv.globalCompositeOperation = 'destination-out';
  // 描く処理と同じだが、実際は消える。
  kaku(cv, x, y);
  // 元にもどす
  cv.globalCompositeOperation = 'source-over';
}


/**
 * ブロックを描く
 * @param: cv -- canvas
 *         x  -- ブロックを描くx座標
 *         y  -- ブロックを描くy座標
 */
function kaku(cv, x, y) {
  let i, t;

  cv.fillStyle = '#cc00cc';
  cv.strokeStyle = '#333333';
  cv.lineWidth = 3;

  for (i = 0; i < 4; i++) {
	for (t = 0; t < 4; t++) {
	  if (block[i][t] === 1) {
		cv.fillRect((x + t) * 20, (y + i) * 20, 20, 20);
		cv.strokeRect((x + t) * 20, (y + i) * 20, 20, 20);
	  }
	}
  }
}

function gamekaishi() {
  // Canvasを取得
  const gamegamen = document.getElementById('game');

  const cg =gamegamen.getContext('2d');

  // 画面を消す
  cg.clearRect(0, 0, 239, 439);

  col = 4;
  row = 0;

  kaku(cg, col, row);

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

// 修正時刻： Sun Jun 21 11:56:05 2020
