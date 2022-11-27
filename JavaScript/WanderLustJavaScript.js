// Get the button
let mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//focus for the form

var goidArray = ["Enter your name please",
    "Enter you e-mail please",
    "Rate us please",
    "Enter your comment here please",
    "Clck the button to submit the form",
    "Click this button if you want to clear the form"
];

var goidText;

function changebackgroundcolor(bg)
{ document.body.style.background = bg; }//This function is used to change the background color of the website

function init() {
    goidText = document.getElementById("goidText");

    registerListenrs(document.getElementById("name"), 0);
    registerListenrs(document.getElementById("email"), 1);
    registerListenrs(document.getElementById("txtList"), 2);
    registerListenrs(document.getElementById("comment"), 3);
    registerListenrs(document.getElementById("submit"), 4);
    registerListenrs(document.getElementById("clear"), 5);
    var myForm = document.getElementById( "myForm" );
    myForm.addEventListener( "submit", 
       function()
       {                                                         
          return confirm( "Are you sure you want to submit?" );  
       }, // end anonymous function
       false );
    myForm.addEventListener( "clear", 
       function()
       {                                                         
          return confirm( "Are you sure you want to clear?" );  
       },
       false );
}

function registerListenrs(object, messageNumber) {

    object.addEventListener("focus",
        function() { goidText.innerHTML = goidArray[messageNumber] }, false);

    object.addEventListener("blur",
        function() { goidText.innerHTML = goidArray[6] }, false);
}
window.addEventListener("load", init, false);
