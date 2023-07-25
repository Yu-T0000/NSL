
$(window).on('load resize',function(){
  //ウィンドウの高さを取得する
  var targetY = $(window).height();

  //スクロールをクリックするとウィンドウの高さ分、下にスクロールする
  $('.js-scroll a').on('click',function(){
    $("html, body").stop().animate({scrollTop: targetY}, 500, 'swing');
    return false;
  });
});

$(window).on('load resize',function(){
  //ウィンドウの高さを取得する
  var targetY = $(window).height();

  //スクロールをクリックするとウィンドウの高さ分、下にスクロールする
  $('.js-scrollup a').on('click',function(){
    $("html, body").stop().animate({scrollTop: -targetY}, 500, 'swing');
    return false;
  });
});




const set1 = [
	{
    word:"料理"
  },
  {
    word:"カバン"
  },
  {
    word:"花火"
  }

];

const set2 = [
	{
    word:"テレビ"
  },
  {
    word:"花"
  },
  {
    word:"ボール"
  }

];

const set3 = [
	{
    word:"芝生"
  },
  {
    word:"トマト"
  },
  {
    word:"電気"
  }

];

const set4 = [
	{
    word:"何人で遊ぶ？"
  },

  {
    word:"チームで戦う？一人で戦う？"
  },

  {
    word:"どのくらいの時間がかかる？"
  },

	{
		word:"してはいけないことは？"
	},

	{
		word:"選手は人間じゃなくてもいいかも…？"
	}

];

// DOM要素を取得

const startButton = document.querySelector(".start-button");
const hint = document.querySelector(".hint span");
const wordset1 = document.querySelector("#wordset1");
const wordset2 = document.querySelector("#wordset2");
const wordset3 = document.querySelector("#wordset3");
const wordset4 = document.querySelector("#wordset4");
const words = document.querySelectorAll(".title span");

// min~maxからランダムな整数を取得する関数
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

// 単語セットから1つランダム取得してHTML要素に反映
function changeRandomword1() {
  const maxIndex = set1.length - 1;
  const randomIndex = getRandomInt(0, maxIndex);

  // 1つオブジェクトを取得
  const w1 = set1[randomIndex];

  // 取得したオブジェクトをDOMに反映
  wordset1.innerHTML = w1.word;

}

function changeRandomword2() {
  const maxIndex = set2.length - 1;
  const randomIndex = getRandomInt(0, maxIndex);
  const w2 = set2[randomIndex];

  // 取得したオブジェクトをDOMに反映
  wordset2.innerHTML = w2.word;

}

function changeRandomword3() {
  const maxIndex = set3.length - 1;
  const randomIndex = getRandomInt(0, maxIndex);
  const w3 = set3[randomIndex];

  // 取得したオブジェクトをDOMに反映
  wordset3.innerHTML = w3.word;

}

function hints() {
  const maxIndex = set4.length - 1;
  const randomIndex = getRandomInt(0, maxIndex);
  const w4 = set4[randomIndex];

  // 取得したオブジェクトをDOMに反映
  wordset4.innerHTML = w4.word;

}

//もしかしてだけどこの辺ってclassでまとめられたりしないか...？

function playAnimation() {
  changeRandomword1();
  changeRandomword2();
  changeRandomword3();
  for (let index = 0; index < words.length; index++) {
    const character = words[index];
    const direction = index % 2 === 0 ? -1 : 1; // +と-を順番に入れ替え
    const position = getRandomInt(40, 100) * direction; // ５０〜１５０のランダムな値を生成
    character.animate(
      [{
          transform: "translateY(" + position  + "px)",
          opacity: 0
        },
        {
          transform: "translateY(0)",
          opacity: 1
        },
      ], {
        delay: index * 50, // 50msずつ再生を遅らせる
        duration: 600,
        easing: "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
        iterations: 1,
        fill: "both",
        direction: "alternate"
      }
    );
  }
}
startButton.addEventListener("click", playAnimation);

function playAnimation2() {
  hints();
  for (let index = 0; index < set4.length; index++) {
		const character2 = hint[index];
    const position = getRandomInt(40, 60); // ５０〜１５０のランダムな値を生成
  
  }
}
hint.addEventListener("click", playAnimation2);
