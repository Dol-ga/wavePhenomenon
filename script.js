let currentIndex = 1

function forward() {
   if (currentIndex > 4) {return;}
   currentIndex += 1;
   changeToPage(currentIndex)
}

function backward() {
   if (currentIndex < 2) {return;}
   currentIndex -= 1;
   changeToPage(currentIndex)
}

function changeToPage(index) {
    document.getElementById("mainIMG").src = "00" + index +".png";
    window.scrollTo(0,0);
    document.body.classList.remove("transitionBG");
    document.body.classList.remove("white");
    if (currentIndex == 5) {
       document.body.classList.add("white");
}
    else if (currentIndex == 4) {
       document.body.classList.add("transitionBG");
}

    
}