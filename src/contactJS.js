/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi from contactJS.js");

//Function to print Your comment submit successfully to our "server"
function button_function(){  
  var e=document.getElementById("output");
  e.innerHTML += "<br>Comments submitted successfully! <br>We will get back to you within 5 business days.<br>";
 
}

const button1 = document.getElementById("submit");
button1.addEventListener('click', button_function);

window.addEventListener("load",function() {
	//add a "submit" listener to a form element with id "my-form"
  document.getElementById('contactform').addEventListener("submit",function(e) {
    //this code will prevent the form submission  
    e.preventDefault();     
    //location.reload();    
    
    //console.log('Form Submitted successfully!');
    
  }
                                                       );
});
