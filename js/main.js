$(function(){
    $('.firstslider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.firstslidernav',
    });
    $('.firstslidernav').slick({
        slidesToShow: 4,
        asNavFor: '.firstslider',
        focusOnSelect: true,
        vertical: true,
        responsive:[
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    asNavFor: '.firstslider',
                    focusOnSelect: true,
                    vertical: false,             
                }
            }
        ]
    });
    $('.secondslider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        swipe:false,
        responsive:[
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                    centerMode: true,  
                    variableWidth: true, 
                    swipe:false,              
                }
            }
        ]
            
        
    });
});

let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let counter = document.querySelector(".counter");

plus.onclick= function() {
    let boofer = +counter.value + 1;
    counter.value=boofer.toString();
}
minus.onclick= function() {
    if(+counter.value==1){
        
    }
    else{
        let boofer = +counter.value - 1;
        counter.value=boofer.toString();
    }
    
}
let currentSlide = document.querySelector(".currentSlide");
function count(){
    let next=document.querySelector(".slick-next");
    let prev=document.querySelector(".slick-prev");
    next.onclick= function(){
        function plus(){
            
            if (+currentSlide.innerHTML==20){
                currentSlide.innerHTML="1"
            }
            else{
                let numslide=+currentSlide.innerHTML+1;
                currentSlide.innerHTML=numslide;
            }
        }
        setTimeout(plus, 500);
        

    }
    prev.onclick=function(){
        function minus(){
            if (+currentSlide.innerHTML==1){
                currentSlide.innerHTML="20"
            }
            else{
                let numslide=+currentSlide.innerHTML-1;
                currentSlide.innerHTML=numslide;
            }
        }
        setTimeout(minus, 500);
        
    }
}

setTimeout(count, 1000);


let gotoheader = document.querySelector(".gotoheader");
gotoheader.onclick=function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior: 'smooth',
    })
}
let burgermenu = document.querySelector(".burgermenu");
let headerbottomflex = document.querySelector(".headerbottomflex");
burgermenu.onclick = function(){
    burgermenu.classList.toggle("___active");
    headerbottomflex.classList.toggle("__active");
}