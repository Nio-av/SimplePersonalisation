//Script for persolalisation

//Basic Configuration

// Contains Reading Time for first section
const timeToSwitch = 10;


//Init for Variables

//var contain Information wheather the User has seen the personalisated content
//--> Avoid change of Information and thereby iritation of the user
var hasSeenPersonalisatedContent = false;

//var is changed after timeToSwitch - var
var timeUp = false;

// var contains article mode.
// no logic function; just for debuging documentation, cookies, statistic etc.
// modes: [onLoad][fastReader][carefulReader]
var articleMode = "onLoad";


//Start Logic
window.onload = function () {
  //prepare Document
  $('.carefulReader').addClass('personalisation');
  $('.fastReader').addClass('personalisation');

  //start timer
  setTimeout(timeIsUp, timeToSwitch*1000);

  //Hide Informations
  toggelVisibility('.carefulReader');

  checkCookie();
};


function checkCookie(){
  cookie = getCookie("lastReadeMode");
  if (cookie != ""){
    alert(cookie);
  } else {
    alert ("noCookie");
  }
}


//change timeUp - var after timeToSwitch
function timeIsUp() {
  timeUp = true;
  console.info('TimeIsUp');
}


//Function is triggerd every time the user scrolls
$( window ).scroll(function() {

  setCookie("lastReadeMode", articleMode, 14);

  //user just wants some basic Informations
  if(timeUp == false & hasSeenPersonalisatedContent == false){
    isTrigerVisible = isScrolledIntoView(document.getElementById('TrigerForHiding'))
    console.log('Triger is visible: ' + isTrigerVisible);
    if(isTrigerVisible == true){
      hasSeenPersonalisatedContent = true;
      articleMode = "fastReader";
      console.log('User has seen personalisated content');
    }
  }

  //user is a careful Reader and wants textual Informatio
  if(timeUp == true & hasSeenPersonalisatedContent == false){
    console.log('Show textual version');
    toggelVisibility('.personalisation');
    articleMode = "carefulReader";
    //avoid flickr while scroling
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


//viewMore-Button for fastReader
function viewMore(){
  $(".carefulReader").insertAfter("#ViewMoreButton");
  toggelVisibility(".carefulReader");
  if($("#ViewMoreButton").text() == "View More"){
    $("#ViewMoreButton").text("View Less");
  } else{
    $("#ViewMoreButton").text("View More");
  }
}



  //Creates the Cookie "cname" with value "cvalue" amd the Livetime "exdays"
  function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      var expires = "expires="+ d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }


// returns the value of a specified cookie
  function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
          }
      }
      return "";
  }
