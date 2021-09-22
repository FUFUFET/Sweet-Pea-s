// const hamburger = document.getElementById('js-buttonHamburger');
// const navUL = document.getElementById('mobile-navlist');

// hamburger.addEventListener('click',() =>{
//   navUL.classList.toggle('show');

// });


// document.body.classList.toggle('js-enabled')
// document.addEventListener('DOMContentLoaded', function(event){

// let ken = document.getElementById('hamburger')  
// ken.setAttribute('aria-expanded','false')
// ken.onclick = function(){
//   if(this.getAttribute('aria-expanded') == 'false')
//   {
// this.setAttribute('aria-expanded' ,'true');
//   }else{
//     this.setAttribute('aria-expanded' ,'false');
//   }}});

const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
const nav = document.querySelector("nav");


menuIcon.addEventListener("click",() => {
navbar.classList.toggle("change");
nav.classList.toggle("change");

});

document.body.classList.toggle('js-enabled')
document.addEventListener('DOMContentLoaded', function(event){

let ken = document.querySelector('.hamburger-menu')  
ken.setAttribute('aria-expanded','false')
ken.onclick = function(){
  if(this.getAttribute('aria-expanded') == 'false')
  {
this.setAttribute('aria-expanded' ,'true');
  }else{
    this.setAttribute('aria-expanded' ,'false');
  }}});




//   $( function() {
//     // モーダルメニュー
//     var modalMenu = $( '#modal_menu' );

//     // モーダルメニューが開いているかどうか
//     var isOpenModalMenu;

//     // モーダルメニュー内でフォーカスを当てたい要素リスト
//     var modalMenuElements = modalMenu.find( 'a, button' );

//     // モーダルメニューを開く
//     $( '#open_modal' ).click( function() {
//         isOpenModalMenu = true;
//         $( '#close_modal' ).focus();
//         modalMenu.show();
//     });

//     // モーダルメニューを閉じる
//     $( '#close_modal' ).click( function() {
//         isOpenModalMenu = false;
//         modalMenu.hide();
//     });

//     // キーイベント
//     $( document ).keydown( function( event ) {

//         // モーダルメニューが開かれていた場合
//         if ( showDrawer ) {

//             // フォーカスが当たっている要素
//             var activeEl = document.activeElement;

//             // モーダルメニュー内でフォーカスを当てたい最初の要素
//             var firstEl = modalMenuElements[0];

//             // モーダルメニュー内でフォーカスを当てたい最後の要素
//             var lastEl = modalMenuElements[ modalMenuElements.length - 1 ];

//             // タブキーを押されたかどうか
//             var tabKey = ( 9 === event.keyCode );

//             // Shiftキーが押されているかどうか
//             var shiftKey = event.shiftKey;

//             // 最後の要素でタブキーが押された場合は、最初の要素にフォーカスを当てる
//             if ( ! shiftKey && tabKey && lastEl === activeEl ) {
//                 event.preventDefault();
//                 firstEl.focus();
//             }

//             // 最初の要素でタブキー+Shiftキーが押された場合は、最後の要素にフォーカスを当てる
//             if ( shiftKey && tabKey && firstEl === activeEl ) {
//                 event.preventDefault();
//                 lastEl.focus();
//             }
//         }
//     });
// });

