const mytext = document.querySelector(".two");
const textLoad = () => {
    setTimeout(() => {
        mytext.textContent = "Isaac Hu.";
    }, 0);
    setTimeout(() => {
        mytext.textContent = "Dedicated.";
    }, 3000);
    setTimeout(() => {
        mytext.textContent = "Analytical.";
    }, 6000);
    setTimeout(() => {
        mytext.textContent = "a Coder.";
    }, 9000);
} 
    
textLoad();
setInterval(textLoad, 12000);