let pluseIcon = document.querySelector(".plus");
let minusIcon = document.querySelector(".minus");
let currvalue = document.querySelector(".value");

pluseIcon.addEventListener("click", () => {
    let currentvalue = parseInt(currvalue.textContent);
    currentvalue++;
    currvalue.textContent = currentvalue;
});
minusIcon.addEventListener("click", () => {
    let currentvalue = parseInt(currvalue.textContent);
    currentvalue--;
    currvalue.textContent = currentvalue;
});

function reset(){
    let currentvalue = parseInt(currvalue.textContent);
    currentvalue=0;
    currvalue.textContent=currentvalue;
}