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

let samsung_checkbox = document.getElementById('samsung_checkbox');
let samsung_img = document.getElementById('samsung_img');
let samsung = document.getElementById('samsung');
let line_margin = document.getElementById('line_margin');

samsung_checkbox.onchange = () => {
  if (samsung_checkbox.checked) {
    samsung.style.display = 'block';
    line_margin.style.display = 'block';
  }
  else {
    samsung.style.display = 'none';
    line_margin.style.display = 'none';
  }
}

samsung_img.onclick = () => {
  samsung.style.display = 'none';
  line_margin.style.display = 'none';
  samsung_checkbox.checked = false;
}


/**
 * from Boris work, header.
 */

$(() => {
  let profile = $("#profile");
  let modal = $("#modal");
  let modalJs = document.getElementById("modal");
  let crossAdmin = $(".admin-cross");
  profile.on("click", () => {
    modal.attr("style", "display: block");
  });

  crossAdmin.on("click", () => {
    modal.attr("style", "display: none");
  });

  window.onclick = event => {
    if (event.target == modalJs) {
      modalJs.style.display = "none";
    }
  };
});

$(() => {
  $(".catalog").on("click", () => {
    $(".nav-catalog").attr("id", "burger");
    console.log($(".nav-catalog"));
  });

  $(".cross").on("click", () => {
    $(".nav-catalog").attr("id", " ");
  });
});
