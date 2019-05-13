// 作成の流れ
// 1. 追加ボタンにclickのイベントを登録する
let btn = document.getElementById("addBtn");
btn.addEventListener('click', function () {
// 2. 追加ボタンがクリックされた時の処理を書く

// 2.1 画面の入力欄、入力値を取得する
let colorName = document.getElementById("inputColor");

  // 2.2 新しくdivを作成する
let div = document.createElement('div');


// 2.3 divの背景色に画面の「2.1」で取得した入力値を設定する
div.style.backgroundColor = colorName.value;

if (colorName.value == 'red') {
  div.style.backgroundColor= "red";
} else if (colorName.value == 'green') {
  div.style.backgroundColor='green';
} else if (colorName.value == 'blue') {
  div.style.backgroundColor='blue';
} 

// 2.4 新しく作成したdivにCSSのクラスを追加する

div.classList.add('panel');

// // 2.5 div[id=box]を取得する
let box = document.getElementById("box");

// // 2.6 作成したdivを追加する
box.appendChild(div);

colorName.value = "";
});