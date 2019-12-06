let buttBuy = document.getElementById('butt_buy');
let riseBox = document.getElementById('rise_box');

buttBuy.onmouseover = () => {
  riseBox.style.display = 'block';
}

riseBox.onmouseleave = () => {
  riseBox.style.display = 'none';
}

let heart = document.getElementById('likeimg');
let heart2 = document.getElementById('onlikeimg');

heart.onclick = () => {
  heart2.style.display = 'block';
}

heart2.onclick = () => {
  heart2.style.display = 'none';
}



