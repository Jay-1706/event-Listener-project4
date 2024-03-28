//click event

//An element receives a click event when a pointing device button(such as a mouse's primary mouse button)
//is both pressed and released  while the pointer is located inside the element.

// IF the button is pressed on one element and the poiner is moved outside the element before the button is released,
// the event is fired on the most specific ancestor element that contained both elements

const boxelement=document.getElementById("box");
   
//add a click event listener to the element 

boxelement.addEventListener("click",function(){
    alert("You Just click my Page👏")
});
 