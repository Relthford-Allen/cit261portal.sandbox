// This function will hide <div id=manipulate></div>
function hide(){
    var divElement = document.querySelector('#manipulate');
    if (divElement.classList.contains('unhide') === true) {
        divElement.classList.add('hide');
        divElement.classList.remove('unhide');
    }
}

// This function will unhide <div id=manipulate></div>
function unhide(){
    var divElement = document.querySelector("#manipulate");
    if (divElement.classList.contains('hide') === true) {
        divElement.classList.replace('hide', 'unhide');
    }
}

// This function will change the text color to red
function redText(){
    var divElement = document.querySelector("#manipulate");
    divElement.classList.add('redText');
}
// This function returns the texp color to black
function blackText(){
    var divElement = document.querySelector("#manipulate");
    divElement.classList.remove('redText');
}

// this funtion will toggle between shrink and original size
function shrink(){
    var divElement = document.querySelector("#manipulate");
    divElement.classList.toggle('shrink');
}
