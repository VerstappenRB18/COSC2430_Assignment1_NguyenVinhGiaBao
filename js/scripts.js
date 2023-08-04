/*  
    RMIT University Vietnam
    Course: COSC2430 Web Programming
    Semester: 2023B
    Assessment: Assignment 1
    Author: Nguyen Vinh Gia Bao
    ID: s3986287
    Acknowledgement: 
    https://www.amazon.com/s?bbn=283155&rh=n%3A283155&dc&qid=1689659947&ref=lp_10898_ex_n_1
    https://www.canva.com/
    https://www.youtube.com/watch?v=bk3Y4heVdFs&ab_channel=Mr.WebDesigner
    https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
    https://www.30secondsofcode.org/css/s/hover-underline-animation/
    https://www.bookswagon.com
    https://www.thriftbooks.com
    https://unsplash.com/photos/xY55bL5mZAM
*/


let mybutton = document.getElementById("top-button");
let footer = document.querySelector("footer");

let bigImg = document.getElementById("big-img");
let smallImg = document.getElementsByClassName("small-img");

for (let i = 0; i < smallImg.length; i++) {
    smallImg[i].onclick = function() {
        bigImg.src = smallImg[i].src;
    }
}

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "flex";
    } else {
        mybutton.style.display = "none";
    }

    let footerRect = footer.getBoundingClientRect();

    if (footerRect.top < window.innerHeight) {
        mybutton.style.bottom = (window.innerHeight - footerRect.top + 10) + 'px';
    } else {
        mybutton.style.bottom = '10px';
    }
}

scrollFunction();
