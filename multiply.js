/*
 * この画面は JavaScript スクラッチパッドです。
 *
 * JavaScript を入力して、右クリックまたは “実行” メニューを選択してください。
 * 1. 実行: 選択したコードを実行します。(Cmd-R)
 * 2. 調査: 実行結果をオブジェクトインスペクタで表示します。(Cmd-I)
 * 3. 表示: 選択したコードの後ろに、実行結果をコメント形式で挿入します。(Cmd-L)
 */

var a;
var b;

var frac = function(bunshi, bunbo){
  var bunsu = {
    bunshi: bunshi,
    bunbo: bunbo
  };
  return bunsu;
};
var multiply = function(a, b){
  var bunshi;
  var bunbo;
  
    bunshi = a.bunshi * b.bunshi;
    bunbo = a.bunbo * b.bunbo;
  
  if(Number.isInteger(a) && Number.isInteger(b)){
    return a * b;
  }

  if(Number.isInteger(a)){
    a = frac(a, 1);
  }
  if(Number.isInteger(b)){
    b = frac(b, 1);
  }


  var answer = frac(bunshi, bunbo);
  return answer;
};

a = frac(1, 4);
b = frac(1, 1);

var result1 = multiply(a, b);

c = frac(2, 3);
d = frac(4, 1);

var result2 = multiply(c, d);

e = frac(1, 4);
f = frac(0, 1);

var result3 = multiply(e, f);

g = frac(1, 1);
h = frac(2, 1);

var result4 = multiply(g, h);

/*
[object Object]
*/
/*
[object Object]
*/