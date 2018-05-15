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


//Start Logic
window.onload = function () {
  //prepare Document
  $('.carefulReader').addClass('personalisation');
  $('.fastReader').addClass('personalisation');

  //start timer
  setTimeout(timeIsUp, timeToSwitch*1000);

  //Hide Informations
  toggelVisibility('.carefulReader');


  //console.info("cookieExist " + cookieExist());
  if(cookieExist()==true){
    timeUp = true;
    hasSeenPersonalisatedContent = true;
    setArticleModeBecauseOfCookie(getCookie("lastReadeMode"));
  };
};

function cookieExist() {
    var cookie = getCookie("lastReadeMode");
    if (cookie != "") {
        return true;
    } else {
        return false;
    }
}

//User has alreade been on this page
//rest last state of Page
function setArticleModeBecauseOfCookie(mode){
  if(mode=="carefulReader"){
    toggelVisibility('.personalisation');
    console.info("Article Mode via Cookie: carefullReader");
  } else if (mode == "fastReader") {
    //nothing to do; see onLoad
    console.info("Article Mode via Cookie: fastReader");
  }
}



//change timeUp - var after timeToSwitch
function timeIsUp() {
  timeUp = true;
  console.info('TimeIsUp');
}


//Function is triggerd every time the user scrolls
$( window ).scroll(function() {

  var isTrigerVisible = isScrolledIntoView(document.getElementById('TrigerForHiding'));
  console.log('Triger is visible: ' + isTrigerVisible);

  //user just wants some basic Informations
  if(timeUp == false & hasSeenPersonalisatedContent == false){


    if(isTrigerVisible == true){
      hasSeenPersonalisatedContent = true;
      setCookie("lastReadeMode", "fastReader", 14);
      console.log('User has seen personalisated content');
    }
  }

  //user is a careful Reader and wants textual Informatio
  if(timeUp == true & hasSeenPersonalisatedContent == false){
    console.log('Show textual version');
    toggelVisibility('.personalisation');

    // TODO: hasSeenPersonalisatedContent is not correct.
    // hasSeenPersonalisatedContent needs to be set as true because of if not, the visibility is toggeld acidently.


    //avoid flickr while scroling
    hasSeenPersonalisatedContent = true;


    if(isTrigerVisible == true){
      setCookie("lastReadeMode", "carefulReader", 14);
    }
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
