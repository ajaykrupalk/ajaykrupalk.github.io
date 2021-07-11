// btn = document.getElementById("top_scroll");
window.onscroll = function() {scrollFunction()};
function scrollFunction(){
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
        else {
            document.getElementById("top_scroll").style.display = "none";
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
