var tog = 0;
var score = 0;
var scr = '';
var correct = [];
var entry = [];
var turn = 0;
var sound1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var sound2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var sound3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var sound4 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
var sound5 = new Audio("HonkFail.mp3");
var colorNum;
var z = 0;
//gonna have to use queue to get the simon things to go in order
$(document).ready(function(){
  bindClickHandlers();
});
function bindClickHandlers(){
  $(".slider").click(toggle);
  $(".reset").click(start);
  $(".strict").click(indLight);
}
function startGame(z){
  $(".score").text('01');
  score = 1;
  correct = [];
  $(".bam").children().off('mouseup');
  $(".bam").children().off('mousedown');
  $(".bam").children().off('click');
  do {
    colorNum = Math.floor(Math.random()*4) + 1;
    correct.push(colorNum);
    console.log(correct);
    nextColor(turn, turn + 1);
    turn += 1;
}
  while(turn < 3);
}
function checkArrs(){
  if (entry == correct){
    score += 1;
  }
}
function start(){
  if($(".indicator").css('background-color') == 'rgb(0, 0, 0)'){}
  else if ($(".score").text() == '00' ){
    startGame(1);
  }
  else{reset();}
};
function clearTime(){
  if(entry.length == correct.length){
    checkArrs();
  }
  else if(entry.length < correct.length){
    for (k = 0; k<entry.length; k++){
      if(entry[k] != correct[k]){
        sound5.play();
        entry = [];
        nextColor();
      }
    }
  }
}
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
    $(".bam").children().off('mouseup');
    $(".bam").children().off('mousedown');
    $('.indicator').css('box-shadow', '');
    $('.start').off('click');
  }
else{
  $(".slider").css('margin-left', '0px');
  tog = 1;
  addClasses2();
  reset();
}
}
function addClasses2(){
  $(".ul").mousedown(function(){$(".ul").css('background-color', '#55ff56');sound1.play();});
  $(".ul").mouseup(function(){$(".ul").css('background-color', '#297729');});
  $(".ur").mouseup(function(){$(".ur").css('background-color', '#990000');});
  $(".ur").mousedown(function(){$(".ur").css('background-color', 'red');sound2.play();});
  $(".lr").mouseup(function(){$(".lr").css('background-color', '#999900');});
  $(".lr").mousedown(function(){$(".lr").css('background-color', 'yellow');sound3.play();});
  $(".ll").mouseup(function(){$(".ll").css('background-color', '#000066');});
  $(".ll").mousedown(function(){$(".ll").css('background-color', 'blue');sound4.play();});
}
function addClasses(){
  $(".ul").click(function(){
    if(entry.length < correct.length){entry.push(1);}
    clearTime();});
  $(".ur").click(function(){
    if(entry.length < correct.length){entry.push(2);}
    clearTime();});
  $(".lr").click(function(){
    if(entry.length < correct.length){entry.push(3);}
    clearTime();});
  $(".ll").click(function(){
    if(entry.length < correct.length){entry.push(4);}
    clearTime();});
}
function nextColor(x, y){
  console.log(x, y);
  console.log(correct[x+1]);
  console.log()
  if(score < 10){
    $(".score").text('0' + score.toString());
  }
  else{$(".score").text(score.toString());}
    if (correct[x] == 1){
      setTimeout(function(){$(".ul").css('background-color', '#55ff56');}, ((800 * x) + (700 * (y-1))));
      setTimeout(function(){sound1.play();}, ((800 * x) + (700 * (y-1))));
      setTimeout(function(){$(".ul").css('background-color', '#297729');},((800 * x))+ (700 * (y)));
  }
    else if (correct[x] == 2){
      setTimeout(function(){$(".ur").css('background-color', 'red');}, ((800 * x) + (700 * (y-1))));
      setTimeout(function(){sound2.play();}, ((800 * x) + (700 * (y-1))));
      setTimeout(function(){$(".ur").css('background-color', '#990000')},((800 * x))+ (700 * (y)));
  }
    else if (correct[x] == 3){
      setTimeout(function(){$(".lr").css('background-color', 'yellow');}, ((800 * x) + (700 * (y-1))));
      setTimeout(function(){sound3.play();}, ((800 * x) + (700 * (y-1))));
      setTimeout(function(){$(".lr").css('background-color', '#999900')}, ((800 * x))+ (700 * (y)));
  }
    else {
      setTimeout(function(){$(".ll").css('background-color', 'blue');}, ((800 * x) + (700 * (y-1))));
      setTimeout(function(){sound4.play();}, ((800 * x) + (700 * (y-1))));
      setTimeout(function(){$(".ll").css('background-color', '#000066')},((800 * x))+ (700 * (y)));
  }
  if(correct[x] == undefined){
    setTimeout(addClasses(),(800 * x)+ (700 * (y)));
    setTimeout(addClasses2(),(800*x)+(700 *y));
    setTimeout(function(){console.log('added');},(800*x)+(700 *y))}
  else{
    $(".bam").children().off('mouseup');
    $(".bam").children().off('mousedown');
    $(".bam").children().off('click');}
}
