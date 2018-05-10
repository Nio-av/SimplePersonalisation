//Discribs wheather the long Version of the article is visible.

//var contains the current classification of the user
var fastreader = true;

// var contains the current state of visibility of the triger headline
var isTrigerVixsible = false;


window.onload = function () {
        setTimeout(timeIsUp, 10*1000)
    };



function timeIsUp() {
    console.log('TimeIsUp');
}


$( window ).scroll(function() {
  isTrigerVisible = isScrolledIntoView(document.getElementById('TrigerForHiding'))
  console.log(isTrigerVisible);
});




function toggelVisibility(el){
  $(el).toggle();
}



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
