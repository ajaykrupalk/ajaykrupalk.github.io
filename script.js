// btn = document.getElementById("top_scroll");
window.onscroll = function() {scrollFunction()};
function scrollFunction(){
    if(document.body.scrollTop > 70 || document.documentElement.scrollTop > 70){
        document.body.style.backgroundColor = "#171C28";
        document.querySelector("#home").style.color = "#ffff";
        document.querySelector(".fill").style.color = "#ffff";
        document.querySelector(".edu_details").style.color = "#ffff";
        document.querySelector(".col-flex").style.color = "#ffff";
        document.querySelector(".credits").style.color = "#ffff";
        document.querySelector('#color').style.color="white";
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            document.getElementById("education").className = "slideUp";
            document.getElementById("education").style.visibility = "visible";
        }
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
                document.getElementById("skills").className = "slideUp";
                document.getElementById("skills").style.visibility = "visible";
                document.getElementById("top_scroll").style.display = "block";
        } 
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            document.getElementById("projects").className = "slideUp";
            document.getElementById("projects").style.visibility = "visible";
        }
    }
    else {
        document.getElementById("top_scroll").style.display = "none";
        document.body.style.backgroundColor = "white";
        document.querySelector(".edu_details").style.color = "black";
        document.querySelector(".col-flex").style.color = "black";
        document.querySelector(".credits").style.color = "black";
        document.querySelector('#color').style.color="black";
        document.querySelector(".fill").style.color = "black";
        document.querySelector("#home").style.color = "black";
    }
}
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function mobileDevices(x){
    if(x.matches){
        if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
            document.getElementById("projects").className = "slideUp";
            document.getElementById("projects").style.visibility = "visible";
        }
    }
}
var x = window.matchMedia("(max-width: 427px)")
mobileDevices(x)
x.addEventListener(mobileDevices)