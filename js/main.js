$(function () {

  // /*top video */
    // const animatedText = document.querySelector("animated-text");
    // const video = document.querySelector("video");
    // let hasTextShown = false;
  
    // video.addEventListener("timeupdate", function () {
    //   if (video.currentTime >= 1.5 && !hasTextShown) {
    //     animatedText.style.opacity = 1;
    //     animatedText.style.transform = "scale(1)";
    //     hasTextShown = true; 
    //   }
    // });


  /*concept*/
  var fadeIn = $('.fade-in');
  $(window).scroll(function () {
    $(fadeIn).each(function () {
      var offset = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > offset - windowHeight + 150) {
        $(this).addClass("scroll-in");
      }
    });
  });



  /*slick*/
  $(".slick").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
    ],
  });


  const image = document.querySelectorAll('.img-wrap');

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('img-animation');
      } else {
        entry.target.classList.remove('img-animation');
      }
    });
  });

  Array.prototype.forEach.call(image, function (img) {
    observer.observe(img);
  });



  /*roomフェードイン*/
  $(window).scroll(function () {

    // fadeinクラスに対して順に処理を行う
    $(".fadein").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });

  });


  /*openbtn*/
  $(".openbtn1").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $(".video,#container").toggleClass('mainblur');//ぼかしたいエリアにmainblurクラスを付与
  });

  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去し
    $(".video,#container").removeClass('mainblur');//ぼかしているエリアのmainblurクラスを除去
  });

});