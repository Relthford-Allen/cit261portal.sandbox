//method example
var hello = document.getElementById("greeting");
var btn = document.getElementById("btn01");
btn.addEventListener("click", function () {
    var x = "Cincinnati Bengals Superbowl Champs 2019!!";
    var capitals = x.toUpperCase(); // method
    hello.insertAdjacentHTML('beforeend', capitals);
    btn01.classList.add("hide-btn");
});
