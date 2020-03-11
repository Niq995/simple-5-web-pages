/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi from Script.js");

/*Functions to open links*/
function open_ins(){
  window.open('https://www.instagram.com/');
}

function open_facebook(){
  window.open('https://www.facebook.com/');
  
}

function open_linkedin(){
  window.open('https://www.linkedin.com/');
  
}

function open_twitter(){
  window.open('https://www.twitter.com/');
  
}

/*Open link in new page*/
var ins=document.getElementById("ins");
ins.addEventListener("click", function(){
  open_ins();
});

var facebook=document.getElementById("fb");
facebook.addEventListener("click", function(){
  open_facebook();
});

var linkedin=document.getElementById("linkedin");
linkedin.addEventListener("click", function(){
  open_linkedin();
});

var twitter=document.getElementById("twitter");
twitter.addEventListener("click", function(){
  open_twitter();
});

