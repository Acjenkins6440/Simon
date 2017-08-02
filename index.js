var tog = 0;
var score = 0;
var scr = '';
$(document).ready(function(){
  bindClickHandlers();
});
function bindClickHandlers(){
  $(".slider").click(toggle);
  $(".reset").click(start);
  $(".strict").click(indLight);
}
function startGame(){

}
function start(){
  if($(".indicator").css('background-color') == 'rgb(0, 0, 0)'){}
  else if ($(".score").text() == '00' ){
    startGame();
  }
  else{reset;}
};
function indLight(){
  console.log($(".indicator").css('background-color'));
  if ($(".indicator").css('background-color') == 'rgb(0, 0, 0)'){}
  else if($(".indicator").css('background-color') == 'rgb(255, 0, 0)'){
    $(".indicator").css('background-color', 'green'); $(".indicator").css('box-shadow', '0px 0px 20px 5px green');}
  else {
    $(".indicator").css('background-color', 'red');
    $('.indicator').css('box-shadow', '');
  }
}
function reset(){
  $(".score").text('00');
  $(".indicator").css('background-color', 'red');
  $('.indicator').css('box-shadow', '');
}
function toggle(){
  if(tog == 1){
    $(".slider").css('margin-left', '25px');
    tog = 0;
    $(".score").text('');
    $(".indicator").css('background-color', 'black');
    $(".bam").children().removeClass('lll lur lul llr');
    $('.indicator').css('box-shadow', '');
    $('.start').off('click');
  }
else{
  $(".slider").css('margin-left', '0px');
  tog = 1;
  addClasses();
  reset();
}
}
function addClasses(){
  $(".ul").addClass('lul');
  $(".ur").addClass('lur');
  $(".ll").addClass('lll');
  $(".lr").addClass('llr');
}
function nextColor(){
  var colorNum = Math.floor(Math.random()*4);
  console.log(colorNum);
  if (colorNum === 0){
    $(".ul").css('background-color', '#55ff56');
    setTimeout(function(){$(".ul").css('background-color', '#41c341')}, 700);
  }
  else if (colorNum == 1){
    $(".ur").css('background-color', 'red');
    setTimeout(function(){$(".ur").css('background-color', '#cc0000')}, 700);
  }
  else if (colorNum == 2){
    $(".lr").css('background-color', 'yellow');
    setTimeout(function(){$(".lr").css('background-color', '#CCCC00')}, 700);
  }
  else {
    $(".ll").css('background-color', 'blue');
    setTimeout(function(){$(".ll").css('background-color', '#0000aa')}, 700);
  }
}
