//output div variable
let printDiv = document.querySelector("#output-target");
let guineaPig = document.querySelector("#guinea-pig");

//print to output div (all functions)
function printDOM (e) {
    printDiv.innerHTML = e;
};

//target article w/ sections
let sectionListen = document.querySelector("article");
// click event listener for article's sections innerHTML to print
sectionListen.addEventListener("click", function () {
    printDOM(`You clicked on the ${event.target.innerHTML} section`)
});


//target h1
let h1Listen = document.querySelector("h1");
//listener with function to print when hovering over h1
h1Listen.addEventListener("mouseover", function () {
    printDOM("You moved your mouse over the header");
});
//listener with function to print when mouse leaves h1
h1Listen.addEventListener("mouseout", function () {
    printDOM("You left me!!");
});

//target input
let inputListen = document.querySelector("#keypress-input");
//listener for input value
inputListen.addEventListener("input", function () {
    printDOM(event.target.value);
});


//target buttons
let colorButton = document.querySelector("#add-color");
let hulkButton = document.querySelector("#make-large");
let borderButton = document.querySelector("#add-border");
let radiusButton = document.querySelector("#add-rounding");

//toggle class to guinea pig when buttons clicked
colorButton.addEventListener("click", function () {
    guineaPig.classList.toggle("blueBack");
});

hulkButton.addEventListener("click", function () {
    guineaPig.classList.toggle("hulkify");
});

borderButton.addEventListener("click", function () {
    guineaPig.classList.toggle("addBorder");
});

radiusButton.addEventListener("click", function () {
    guineaPig.classList.toggle("borderRadius");
});


//add class to all sections in article
sectionListen.querySelectorAll(".article-section").forEach(function (x) {x.classList.add("sectionText")});


//add class to all buttons
let buttons = document.querySelectorAll("button");
buttons.forEach(function (y) {y.classList.add("blockStyle")});
