//Script for persolalisation

//Basic Configuration

// Contains Reading Time for first section
var timeToSwitch = 10;


//Init for Variables

//var contain Information wheather the User has seen the personalisated content
//--> Avoid change of Information and thereby iritation of the user
var hasSeenPersonalisatedContent = false;

//var is changed after timeToSwitch
var timeUp = false;



//Start Logic
window.onload = function () {
        setTimeout(timeIsUp, timeToSwitch*1000);

        //Hide Informations
        toggelVisibility('.carefulReader');
    };



function timeIsUp() {
  timeUp = true;
  console.log('TimeIsUp');
}


//Function is triggerd every time the user scrolls
$( window ).scroll(function() {

  if(timeUp == false & hasSeenPersonalisatedContent == false){
    isTrigerVisible = isScrolledIntoView(document.getElementById('TrigerForHiding'))
    console.log(isTrigerVisible);
    if(isTrigerVisible == true){
      hasSeenPersonalisatedContent = true;
      console.log('User has seen personalisated content');
    }
  }
  if(timeUp == true & hasSeenPersonalisatedContent == false){
    console.log('Show foll version');
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
