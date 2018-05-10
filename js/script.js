//Discribs wheather the long Version of the article is visible.
var articleVisivle = false;



$( window ).scroll(function() {
  console.log(isScrolledIntoView(document.getElementById('TrigerForHiding')));
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
