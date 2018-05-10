//Script for persolalisation

//Basic Configuration

// Contains Reading Time for first section
var timeToSwitch = 10;


//Init for Variables

//var contains the current classification of the user
var fastReader = true;

// var contains the current state of visibility of the triger headline
var isTrigerVixsible = false;

//var is changed after
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



$( window ).scroll(function() {
    isTrigerVisible = isScrolledIntoView(document.getElementById('TrigerForHiding'))
    console.log(isTrigerVisible);
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
