//============================//
// Author : Rahul Teja T      //
// Created Date : 08/17/2017  //              
//============================//


//IDENTIFYING THE CLICK EVENT ON SELECTION OF RECORD FROM LIST-A
$('.li_grp_A').off('click', '.li_grp_item').on('click', '.li_grp_item', function (event) {
    var $this = $(this);
    $('.li_grp_item').removeClass('languageTrHighlight');
    if (!$this.hasClass("languageTrHighlight")) {
              $this.addClass("languageTrHighlight");
          }else{
          $this.removeClass("languageTrHighlight");
          }
});

//IDENTIFYING THE CLICK EVENT ON SELECTION OF RECORD FROM LIST-B
$('.li_grp_B').off('click', '.li_grp_item').on('click', '.li_grp_item', function (event) {
    var $this = $(this);
    $('.li_grp_item').removeClass('languageTrHighlight');
    if (!$this.hasClass("languageTrHighlight")) {
              $this.addClass("languageTrHighlight");
          }else{
          $this.removeClass("languageTrHighlight");
          }
});
//IDENTIFYING THE CLICK EVENT ON "Push to List B"
$('.btn_pushToB').off('click').on('click', function (event) {
    //Element that needs to be Pushed Up
    var reqTr = $('.li_grp_A .languageTrHighlight');
    $('.li_grp_B').append(reqTr);
});
//IDENTIFYING THE CLICK EVENT ON "Push to List A"
$('.btn_pushToA').off('click').on('click', function (event) {
    //Element that needs to be Pushed Up
    var reqTr = $('.li_grp_B .languageTrHighlight');
    $('.li_grp_A').append(reqTr);
});
