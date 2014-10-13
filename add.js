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
var add = function(a, b){
  var bunshi;
  var bunbo;

  if(Number.isInteger(a)){
    a = frac(a, 1);
  }
  if(Number.isInteger(b)){
    b = frac(b, 1);
  }

  if(a.bunbo != b.bunbo){
    bunshi = a.bunshi * b.bunbo + b.bunshi * a.bunbo;
    bunbo = a.bunbo * b.bunbo;
  }else{
    bunshi = a.bunshi + b.bunshi;
    bunbo = a.bunbo;
  }

  var answer = frac(bunshi, bunbo);
  return answer;
};

a = frac(1, 3);
b = frac(4, 3);

var result1 = add(a, b);

c = frac(1, 4);
d = frac(1, 1);

var result2 = add(c, d);

e = frac(4, 1);
f = frac(2, 3);

var result3 = add(e, f);

g = frac(1, 1);
h = frac(2, 1);

var result4 = add(g, h);
