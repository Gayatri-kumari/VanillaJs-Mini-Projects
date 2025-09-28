const displayval=document.getElementById("display");
window.addEventListener("keydown",()=>
{
    document.querySelector("input").classList.add("glow");
    setTimeout(()=>{document.querySelector("input").classList.remove("glow");},100)
    
});
displayval.addEventListener("keydown", function (e) {
  
  // Allow: Backspace, Delete, Escape, Enter, Arrow keys
  if (
    e.key === "Backspace" ||
    e.key === "Delete" ||
    e.key === "Escape" ||
    e.key === "Shift" ||
     (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key))||
     (["*", "/", "%", "+", "-", "." ,"^"].includes(e.key))
  ) {
    
    return;
  }
  if(e.key === "Enter")
  {
    calc();
  }
  if (!e.key.match(/[0-9]/)) {
    e.preventDefault();
  }   
});
function display(str)
{
    
  displayval.value+=str;
  
}
function clears()
{
     
    displayval.value="";
}
let output;
function calc(op="")
{   
    try{
    
    if(op=="square")
    {
         
       output=eval(displayval.value)**2;
      clears();
      display(output);
    }
    else if(op=="cube")
    {
       output=eval(displayval.value)**3;
      clears();
      display(output);
    }
    else if(op=="squareR")
    {
       output=eval(displayval.value)**(1/2);
      clears();
      display(output);
    }
    else if(op=="cubeR")
    {
       output=eval(displayval.value)**(1/3);
      clears();
      display(output);
    }
    else if(op=="div1x")
    {
       output=1/eval(displayval.value);
      clears();
      display(output);
    }
    else if(op=="signchange")
    {
       output= eval(displayval.value);
        clears();
        display(output*(-1));
       
    }
    else{
        output=eval(displayval.value);
        clears();
        display(output);

    }
    
}
catch(err)
{
    clears();
    display("Invalid expression");
    setTimeout(clears,1000);
    
}

}
