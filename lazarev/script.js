function navAnimation(){
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter",function(){
        let tl = gsap.timeline()
        tl.to(".list-item p span",{
            y:0,
            stagger:{
                amount:0.6
            }
        })
    })

    nav.addEventListener("mouseleave",function(){
        let tl = gsap.timeline()
        tl.to(".list-item p span",{
            y:25,
            stagger:{
                amount:0.2
            }
        })

    })
}

function PG2RightAnimation(){
    var box = document.querySelectorAll(".box")
    box.forEach(function(boxItem){
    boxItem.addEventListener("mouseenter",function(){
        gsap.to(boxItem.childNodes[3],{
            opacity : 1,
            scale:1
        })
    })
    boxItem.addEventListener("mouseleave",function(){
        gsap.to(boxItem.childNodes[3],{
            opacity : 0,
            scale:0
        })
    })
    boxItem.addEventListener("mousemove",function(dets){
        gsap.to(boxItem.childNodes[3],{
            x:dets.x - boxItem.getBoundingClientRect().x - 60,
            y:dets.y - boxItem.getBoundingClientRect().y - 95
        })
    })
})
}

navAnimation();
PG2RightAnimation();
