let intervalId = null;
function clock24() {
    clearInterval(intervalId); // stop any previous interval
    document.querySelector(".hrformat24").classList.add("active");
    document.querySelector(".hrformat12").classList.remove("active");

    function updateClock24() {
        const d = new Date();
        const clock = document.querySelector(".clock");
        const hours = d.getHours().toString().padStart(2, "0");
        const min = d.getMinutes().toString().padStart(2, "0");
        const sec = d.getSeconds().toString().padStart(2, "0");
        if(hours<=12)
        {
            document.body.style.backgroundImage='url("img/morning.jpg")';
        }
        else if(hours>12 && hours<19)
        {
            document.body.style.backgroundImage='url("img/eve.jpg")';

        }
        else{
            document.body.style.backgroundImage='url("img/city.jpg")';
        }
        
        clock.textContent = `${hours}:${min}:${sec}`;
    }

    updateClock24(); // run immediately
    intervalId = setInterval(updateClock24, 1000); // then run every second
}

function clock12() {
    clearInterval(intervalId);
    document.querySelector(".hrformat24").classList.remove("active");
    document.querySelector(".hrformat12").classList.add("active");

    function updateClock12() {
        const d = new Date();
        const clock = document.querySelector(".clock");
        let hours = d.getHours();
         if(hours<=12)
        {
            document.body.style.backgroundImage='url("img/morning.jpg")';
        }
        else if(hours>12 && hours<19)
        {
            document.body.style.backgroundImage='url("img/eve.jpg")';

        }
        else{
            document.body.style.backgroundImage='url("img/city.jpg")';
        }
        const min = d.getMinutes().toString().padStart(2, "0");
        const sec = d.getSeconds().toString().padStart(2, "0");
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12; // convert 0 or 12 to 12-hour format
        hours = hours.toString().padStart(2, "0");
        clock.textContent = `${hours}:${min}:${sec} ${ampm}`;
    }

    updateClock12();
    intervalId = setInterval(updateClock12, 1000);
}

// Show 24-hour format on page load
clock24();
