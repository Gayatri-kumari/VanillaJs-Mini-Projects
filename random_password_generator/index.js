/*code for range slider*/
const slider = document.getElementById("myRange");
const output = document.getElementById("rangeval");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  updateSliderBackground(this.value);//calling this to fill the slider
}

// Update slider fill on load
function updateSliderBackground(value) {
  const percent = (value - slider.min) / (slider.max - slider.min) * 100;
  slider.style.background = `linear-gradient(to right, #fb8500 0%, #fb8500 ${percent}%, #e4e2d9 ${percent}%, #e4e2d9 100%)`;
}

updateSliderBackground(slider.value); // Fill till initial value (8)


/*Main Code to generate a password*/
//creating variables to access the elements
const ABC=document.getElementById("ABC");  
const abc=document.getElementById("abc");  
const _123=document.getElementById("_123");  
const symbols=document.getElementById("symbols");  
const mainpass=document.getElementById("mainpass");
const passmsg=document.getElementById("passmsg");

//variables that consists of strings that will help in creating the final password
const caps="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const small=caps.toLowerCase();
const no="0123456789";
const sym="!@#$%^&*()_+-={}[]:;,.?/";

//main function
function generate(){
    let allowedChar="";
    let passwordString="";
    allowedChar += ABC.checked ? caps : "";
    allowedChar += abc.checked ? small : "";
    allowedChar += _123.checked ? no : "";
    allowedChar += symbols.checked ? sym : "";
    if(allowedChar.length==0) //atleast 1 of the checkbox shld be selected
    {
        passmsg.innerHTML="<span class='warning'>Select atleast 1 checkbox</span>";
        mainpass.textContent="";
        return;   
    }
    //various messages based on the length of the requested password string
    if(slider.value==0)
    {
        passmsg.innerHTML="<span class='warning'>Password length must be at least 1</span>";
    }
    else if(Number(slider.value)<=4 && Number(slider.value)>0)
    {
        passmsg.innerHTML="<span class='bad'>Bad password</span>";
    }
    else if(Number(slider.value)<=8 && Number(slider.value)>4)
    {
        passmsg.innerHTML="<span class='weak'>Weak password</span>";
    }
    else if(Number(slider.value)<12 && Number(slider.value)>8)
    {
        passmsg.innerHTML="<span class='good'>Good password</span>";
    }
    else if (Number(slider.value)>=12 && Number(slider.value)<17)
    {
        passmsg.innerHTML="<span class='strong'>Strong password</span>";
    }
    else if(Number(slider.value)>=17)
    {
        passmsg.innerHTML="<span class='very_strong'>Very strong password</span>";
    }

    //logic to generate the password
    for(let i =0;i<slider.value;i++)
    {
        let randno=Math.floor(Math.random()*allowedChar.length);
        passwordString+=allowedChar[randno];
    }
    //displaying the password
    mainpass.textContent=passwordString;
    
}

/*function to copy the password*/
function copy()
{
    const copyIcon = document.getElementById("copy");
    const password = mainpass.textContent;
    /*console.log(password);*/
    if (!password || password.trim() === "") {
        // Optional: feedback if nothing is generated yet
        alert("No password to copy!");
        return;
    }

    navigator.clipboard.writeText(password).then(() => {
        // Visual feedback (icon change)
        copyIcon.innerHTML = `<i class="fa fa-check" title="copied" style="cursor:initial;color:#014c01;"></i>`;
        setTimeout(() => {
            copyIcon.innerHTML = `<i class="fa fa-clone"></i>`;
        }, 1000);
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
  
}

//tagline typewriting animation
const taglineElement = document.getElementById("tagline");

const messages = [
  "Protect your accounts effortlessly",
  "Secure. Random. Reliable."
];

let msgIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = messages[msgIndex];
  taglineElement.textContent = currentText.substring(0, charIndex);

  if (!isDeleting) {
    if (charIndex < currentText.length) {
      charIndex++;
    } else {
      isDeleting = true;
      setTimeout(typeEffect, 1000); // pause at end
      return;
    }
  } else {
    if (charIndex > 0) {
      charIndex--;
    } else {
      isDeleting = false;
      msgIndex = (msgIndex + 1) % messages.length;
    }
  }

  const speed = isDeleting ? 50 : 100;
  setTimeout(typeEffect, speed);
}

typeEffect();
