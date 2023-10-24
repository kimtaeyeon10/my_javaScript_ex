const score_buttons = document.querySelector("#score_buttons");
const p1score = document.querySelector("#p1");
const p2score = document.querySelector("#p2");
const winningScoreSelect = document.querySelector("#playingTo");
const msg = document.querySelector("#msg");

let p1Score = 0;
let p2Score = 0;
let isGameOver = false;
let winningScore = 5;

function endFnc() {
  if (p1Score === winningScore || p2Score === winningScore) {
    reset();
  }
}
// 버튼 클릭시 동작
const actionFun = {
  p1_up: function () {
    if (p1Score !== winningScore) {
      p1Score += 1;
      p1score.textContent = p1Score;
      console.log(p1Score);
    } else {
      console.log("p1");
      msg.textContent = `Congrate! P1 WIN ! P1 got ${p1Score} P2 got ${p2Score}`;
    }
  },
  p2_up: function () {
    if (p2Score !== winningScore) {
      p2Score += 1;
      p2score.textContent = p2Score;
      console.log(p2Score);
    } else {
      console.log("p2");
      msg.textContent = `Congrate! P2 WIN ! P1 got ${p1Score} P2 got ${p2Score}`;
    }
  },
  reset: function () {
    p1Score = 0;
    p2Score = 0;
    p1score.textContent = p1Score;
    p2score.textContent = p2Score;
  },
};

score_buttons.addEventListener("click", function (e) {
  const action = e.target.dataset.action;
  if (action) {
    actionFun[action]();
  }
});

// 몇점내기 ?
winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  console.log(winningScore);
});
