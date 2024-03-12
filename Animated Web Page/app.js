const tl = gsap.timeline();

/*GSAP Animation*/
window.onload = function(e){
    if (window.location.href.match('Index.html') != null){
        playIndex();
    }
    else if (window.location.href.match('charPage.html') != null){
        playCharPage();
    }
};

function playIndex(){
    tl.from(
        ".bg", {y:300, opacity: 0, duration: 1.5});

    tl.from(".start-btn",  {y: 150, duration: 2},"1")
    .from(".text h1", {y: -150, opacity: 0, duration: 1.5},"1");
    hideStuff();
};

function playCharPage(){
    tl.from(".bg", {x:500, opacity:0, duration: 1.5});
    hideStuff();
};

function hideStuff(){
    tl.from(".hide", {opacity: 0, duration: 1.5}, "0.6")
};

function goAway(page){
    tl.to(".bg", {
        y: -200,
        opacity: 0,
        duration: 1.5,
        }
    ).to(".text", 
        {
            y: -150,
            opacity: 0,
            duration: 1
        }, "<"
    );

    setTimeout(function() {
        window.location = page
    }, 1501);
};