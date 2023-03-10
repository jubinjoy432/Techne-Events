(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
   let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "02/09/",//change date/month for change in timer or countdown
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
   // if (today > birthday) {
   //     birthday = dayMonth + nextYear;         /**************undo this comment when you need the countdown to start***************/
  //  }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
            const now = new Date().getTime(),
                distance = countDown - now;
            document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
          //do something later when date is reached
        if (distance < 0) {
            document.getElementById("headline").innerText = "The festival has come to a close, but we look forward to reuniting next year!";/****change it to "It's Techne Day" */
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
        }
          //seconds
        }, 0)
    }());

    // NAVIGATION BAR
    window.onload=function(){
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLink = document.querySelectorAll(".nav-link");
    
    hamburger.addEventListener("click", mobileMenu);
    navLink.forEach(n => n.addEventListener("click", closeMenu));
    
    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }
    
    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
}