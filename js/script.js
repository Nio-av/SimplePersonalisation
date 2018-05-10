//Script for persolalisation

//Basic Configuration

// Contains Reading Time for first section
var timeToSwitch = 10;


//Init for Variables

//var contain Information wheather the User has seen the personalisated content
//--> Avoid change of Information and thereby iritation of the user
var hasSeenPersonalisatedContent = false;

//var is changed after timeToSwitch - var
var timeUp = false;


//Start Logic
window.onload = function () {
  //prepare Document
  $('.carefulReader').addClass('personalisation');
  $('.fastReader').addClass('personalisation');

  //start timer
  setTimeout(timeIsUp, timeToSwitch*1000);

  //Hide Informations
  toggelVisibility('.carefulReader');
    };


//change timeUp - var after timeToSwitch
function timeIsUp() {
  timeUp = true;
  console.info('TimeIsUp');
}


//Function is triggerd every time the user scrolls
$( window ).scroll(function() {

  //user just wants some basic Informations
  if(timeUp == false & hasSeenPersonalisatedContent == false){
    isTrigerVisible = isScrolledIntoView(document.getElementById('TrigerForHiding'))
    console.log('Triger is visible: ' + isTrigerVisible);
    if(isTrigerVisible == true){
      hasSeenPersonalisatedContent = true;
      console.log('User has seen personalisated content');
    }
  }

  //user is a carefull Reader and wants textual Informatio
  if(timeUp == true & hasSeenPersonalisatedContent == false){
    console.log('Show textual version');
    toggelVisibility('.personalisation');
    hasSeenPersonalisatedContent = true;
  }

});



//Change visibility of "el".
function toggelVisibility(el){
  $(el).toggle();
}


//Check wheather "el" is currentlyy visible
function isScrolledIntoView(el) {
  var rect = el.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  // Only completely visible elements return true:
  // var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  // Partially visible elements return true:
  isVisible = elemTop < window.innerHeight && elemBottom >= 0;

  return isVisible;
}



function viewMore(){
  $(".carefulReader").insertAfter("#ViewMoreButton");
  toggelVisibility(".carefulReader");
  if($("#ViewMoreButton").text() == "View More"){
    $("#ViewMoreButton").text("View Less");
  } else{
    $("#ViewMoreButton").text("View More");
  }





}
