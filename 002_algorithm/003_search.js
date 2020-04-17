
/**
 *  2.3.1 リニアサーチ
 *
 *  リニアサーチを実装してください。(入力は数値のみ)
 *  二つ目の引数に合致した配列の添字を返却してください。
 *  合致のする数字のない場合は-1を返却してください。
 *
 *  example:
 *    [1, 3, 2, 4, 5], 3 => 1
 *    [5, 3, 2, 1], 6 => -1
 */

function linearSearch (array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return 1;
    } else {
      return -1;
    }
  }
}


/**
 *  2.3.2 バイナリサーチ
 *
 *  バイナリサーチを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 2, 3, 4, 5], 2 => 2
 *    [1, 2, 3, 4] 5 => -1
 */

function binarySearch (array, target) {
  let head = 0; //先頭
  let tail =array.length;

  while(head <= tail) {
    let center = Math.floor((head + tail) / 2); //中央値計算
    if (array[center] === target) {
      return target;
    } else if (array[center] < target) {
      head = center + 1;
    } else {
      tail = center -1;
    }
  }

  return -1;
}

//Math.floorで小数点以下切り捨てる