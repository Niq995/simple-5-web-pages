console.log("hi from IndexJS.js");

function like_function() {
  console.log("Liked successfully.");
  if(document.getElementById("like").src=="https://cdn.glitch.com/7328cc29-1021-45be-9480-3b8c192b43ca%2Flove.png?v=1580704455111"){
    document.getElementById("like").src="https://cdn.glitch.com/7328cc29-1021-45be-9480-3b8c192b43ca%2Fliked.svg?v=1580705828058";
  }else if (document.getElementById("like").src=="https://cdn.glitch.com/7328cc29-1021-45be-9480-3b8c192b43ca%2Fliked.svg?v=1580705828058"){
    document.getElementById("like").src="https://cdn.glitch.com/7328cc29-1021-45be-9480-3b8c192b43ca%2Flove.png?v=1580704455111";
  }
  
}

var heartImage = document.getElementById("like");
//console.log(heartImage);
heartImage.addEventListener("click", function(){
  like_function();
});
