'use strict'
var sliderWidth = document.querySelector(".slider").clientWidth
var sliderLength = document.querySelectorAll(".slider li").length
var mySlideWidth = sliderWidth * sliderLength
var sliderUl = document.querySelector(".slider ul")
sliderUl.style.width = mySlideWidth + "px"
var c = 0
var next = document.querySelector(".next")
var prev = document.querySelector(".prev")

next.onclick = myNextSlider
prev.onclick = myPrevSlider

function myNextSlider() {
    c++
    if (c == sliderLength) {
        c = 0
    }
    sliderUl.style.left = -(c * sliderWidth) + "px"
}

function myPrevSlider() {
    c--
clearInterval(mySlider)

    if (c == -1) {
        c = sliderLength
    }
    sliderUl.style.left = -(c * sliderWidth) + "px"
}
var mySlider=setInterval(myNextSlider,4000);
