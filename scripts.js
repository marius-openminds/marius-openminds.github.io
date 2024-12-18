

addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".card")
    console.log(card)



    const colors = ["gold","#fff", "dodgerblue","#0f12d2", "rebeccapurple", "red","tomato", "purple"];
    const interval = 780;

    let currentStart = 0;
    let currentMiddle = colors.length-2;
    let currentEnd = colors.length / 2;


    setInterval(
        () => { 
            card.style.setProperty("--start", colors[currentStart++ % colors.length]) 
            card.style.setProperty("--middle", colors[currentMiddle++ % colors.length]) 
            card.style.setProperty("--end", colors[currentEnd++ % colors.length]) 
        },
        interval);
})













