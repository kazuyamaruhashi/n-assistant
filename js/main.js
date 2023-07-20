
// ハンバーガーメニュー
$(".open-button").click(function () {
    $(this).toggleClass('active');
});

// ハンバーガーメニューの中
$(function() {
$('#js-hamburger').on('click', function() {
    $('body').toggleClass('is-open');
});
$(document).on('click','.overlay', function() {
    $('body').removeClass('is-open');
});
});

// スライダー
$(function(){
    $('.slider').slick({
    autoplay: false, // 自動でスクロール
    autoplaySpeed: 3000, // 自動再生のスライド切り替えまでの時間を設定
    speed: 500, // スライドが流れる速度を設定
    cssEase: "ease-in-out", // スライドの流れ方を等速に設定
    slidesToShow: 3, // 表示するスライドの数
    infinite:true,
    swipe: true, // 操作による切り替え
    arrows: true, // 矢印表示
    dots: true,//下部ドットナビゲーションの表示
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: true, // スライダーにマウスホバーした時にスライドを停止させるか
    responsive: [
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 1, // 画面幅1200px以下でスライド1枚表示
            }
        }
        ]
    });
});

// ページ内リンク
$('a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top;	//idの上部の距離を取得
	$('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
});

// トップに戻る
function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200){//上から200pxスクロールしたら
        $('#page-top').removeClass('RightMove');//#page-topについているRightMoveというクラス名を除く
        $('#page-top').addClass('LeftMove');//#page-topについているLeftMoveというクラス名を付与
    }else{
        if(
            $('#page-top').hasClass('LeftMove')){//すでに#page-topにLeftMoveというクラス名がついていたら
            $('#page-top').removeClass('LeftMove');//LeftMoveというクラス名を除き
            $('#page-top').addClass('RightMove');//RightMoveというクラス名を#page-topに付与
        }
    }
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});
// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});
// #page-topをクリックした際の設定
$('#page-top').click(function () {
$('body,html').animate({
    scrollTop: 0//ページトップまでスクロール
}, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
return false;//リンク自体の無効化
});