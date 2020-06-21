// program.js
const block = [
  [0, 0, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0]
];

/**
 * ブロックを消す
 */
function kesu(cv, x, y) {
  // 消す処理にする
  cv.globalCompositeOperation = 'destination-out';
  // 描く処理と同じだが、実際は消える。
  kaku(cv, x, y);
  // 元にもどす
  cv.globalcompositeOperation = 'source-over';
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
  cv.strokeStyle = '#aaaaaa';
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
  
  let x = 4;
  let y = 0;
  
  kaku(cg, x, y);

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

  // Canvasを取得
  const backgamen = document.getElementById('back');

  const cb =backgamen.getContext('2d');

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

// 修正時刻： Sun Jun 21 11:51:53 2020
