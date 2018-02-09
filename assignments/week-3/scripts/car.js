// This div is where we will display our car information
var carInfo = document.getElementById("carDiv");
var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    var car = {
        make: "Ram",
        model: 1500,
        year: 2012,
        color: "Black"
    };
    writeInfo(car);
    btn.classList.add("hide-btn");
});

function writeInfo(car){
    var htmlString = "";
    var value = car[key];
    for (var key in car) {
        htmlString +="<p>" + car[key];
    }
    carInfo.insertAdjacentHTML('beforeend', htmlString);
};
