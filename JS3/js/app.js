var sliderWidth = document.querySelector(".slider").clientWidth
var sliderLength = document.querySelectorAll(".slider li").length
var sliderUl = document.querySelector(".slider ul")
sliderUl.style.width = sliderWidth * sliderLength + "px"
var next = document.querySelector(".next")
var prev = document.querySelector(".prev")
 var c=0;
 prev.onclick=function(){
    clearInterval(myinterval)
    c--;
    if(c==-1){
        c=sliderLength-1;
    }
   
 
 sliderUl.style.left=-(c*sliderWidth)+"px"
 }
next.onclick=function(){
    clearInterval(myinterval)
    NextSlider();
}
function NextSlider(){
    c++;
    if(c>=sliderLength){
        c=0;
    }
    sliderUl.style.left=-(c* sliderWidth)+"px"
}

var myinterval=setInterval(function(){
    NextSlider();
},4000)