var css = document.querySelector("h3");
var body = document.body;
var button = document.querySelector(".button");

color1 = document.querySelector(".color1");
color2 = document.querySelector(".color2");

// body.classList.add("gradient");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

function setRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = ["#", "#"];

    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 2; j++)
            color[j] += letters[Math.floor(Math.random() * 16)];
    }
    color1.value = color[0];
    color2.value = color[1];

    setGradient();
};

setGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setRandomColor);