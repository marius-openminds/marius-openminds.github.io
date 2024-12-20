

addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".card")
    console.log(card)



    const colors = ["gold","#fff", "dodgerblue","#0f12d2", "rebeccapurple", "red","tomato", "purple"];
    const colorInterval = 780;
    const rotationInterval = 20;

    let currentStart = 0;
    let currentMiddle = colors.length-2;
    let currentEnd = colors.length / 2;


    let angle = 45;
    let hueOffset = 0;

    rotate();

    function rotate(){
        angle = (angle + 1) % 360;
        hueOffset = (hueOffset + 1) % 360;
        card.style.setProperty("--rotation", `${angle}deg`)
        card.style.setProperty("--hueoffset", `${hueOffset}`)
        requestAnimationFrame(rotate)
    }

    // setInterval(
    //     () => { 
    //         card.style.setProperty("--start", colors[currentStart++ % colors.length]);
    //         card.style.setProperty("--middle", colors[currentMiddle++ % colors.length]) ;
    //         card.style.setProperty("--end", colors[currentEnd++ % colors.length]);

    //     },
    //     colorInterval);
})













