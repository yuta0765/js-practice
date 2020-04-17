/**
 *  2.2.1 バブルソート
 *
 *  バブルソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function bubbleSort (array) {
  for(let outer =0; outer < array.length -1; outer++) {
    for(let i = array.length-1; i > outer; i--) {
      if(array[i] < array[i-1]) {
        let tmp = array[i];
        array[i] = array[i-1];
        array[i-1] = tmp;
      }
    }
  }

  return
}

//バブルソートとは隣接するデータの大小を比較、必要に応じて入れ替えることで全体を整列させる

/**
 *  2.2.2 挿入ソート
 *
 *  挿入ソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function insertSort (array) {
  return array
}

//挿入ソートとは整列済みと未整列を分け、未整列の側から一つずつ整列済みの適切な位置に挿入していく


/**
 *  2.2.3 マージソート
 *
 *  マージソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function mergeSort (array) {
  return array
}

//マージソートとは



/**
 *  2.2.4 クイックソート
 *
 *  クイックソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function quickSort (array, start = 0, end = (array.length -1)) {
  return array
};

//クイックソートとは
