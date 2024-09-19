// const el = $("p")
// const el1 = document.getElementsByTagName("p")
// const el2 = document.querySelectorAll("p")

// const el = $("#hello")
// const el = $(".world")

// console.log(el)

// .html
// const el = $("#text")
// el.html("<h1>Hello World</h1>")

// // .attr()
// const inp = $("input")
// //inp.attr("type","checkbox")

// // add & remove class
// el.addClass("red")  // for 2 class : el.addClass("red,blue") 
// el.addClass("blue")
// el.removeClass()

// // .css
// // inp.css("border","1px solid red")
// inp.css({
//     border: "1px solid red",  
//     marginleft:"100px"
// })

// Dom event
// const el = document.getElementById("text")
// el.addEventListener("mouseenter", function(){
//     el.style.border = "1px solid red"
// })

// const el = $("#text")
// el.mouseenter(function(){
//  el.css({
//     border: "1px solid red"
//  })
// })

// const inp = $("input")
// inp.focus(function(){
//     inp.css("border","1px solid blue")
// })

// animation
const btnShow = $("#show")
const btnHide = $("#hide")

const div = $("div")

btnShow.click(function(){
    div.show("slow")
})

btnHide.click(function(){
    div.hide("slow")
})

 const btnFadeIn = $("#fadeIn")
 const btnFadeOut = $("#fadeOut")
 
 btnFadeIn.click(function(){
    div.fadeOut("slow")
 })

 btnFadeOut.clik(function(){
    div.fadeIn("slow")
 })