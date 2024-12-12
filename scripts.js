

addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".card")
    console.log(card)
    
    let current = 0;
    const colors = ["gold","dodgerblue", "rebeccapurple", "red"]
    setInterval(()=> card.style.setProperty("--start", colors[current++ % colors.length]), 1000);

})













