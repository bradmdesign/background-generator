var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.getElementById("gradient");
var direction = document.querySelector("#direction");
var cssCode = document.querySelector("#cssCode")

function setGradient() {
    body.style.background = "linear-gradient( to " + direction.value + ", " + color1.value + ", " + color2.value + ")";
    cssCode.textContent = "background: " + body.style.background + ";";

}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
direction.addEventListener("keypress", setGradientEnter)

function setGradientEnter(event){
    if (event.which===13) {
        setGradient()
    }
}

setGradient();