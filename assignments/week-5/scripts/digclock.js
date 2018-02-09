var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

function drawClock() {
    // clear the background
    c.fillStyle = 'pink';
    c.fillRect(0, 0, canvas.width, canvas.height);

    // Get the current time
    var now = new Date(),
        h = now.getHours(),
        m = now.getMinutes(),
        s = now.getSeconds(),
        ampm = (h < 12 ? 'AM' : 'PM');

    // use 12 hour not 24
    h = (h % 12);

    //  turn values 6 into 06
    h = addLeadingZeroWhenNecessary(h);
    m = addLeadingZeroWhenNecessary(m);
    s = addLeadingZeroWhenNecessary(s);

    var clockText = h + ':' + m + ':' + s + ' ' + ampm,
        x = 10,
        y = 60;


    c.fillStyle = '#00BFFF';
    c.font = '45pt comical';
    c.strokeStyle = 'black';
    c.fillText(clockText, x, y);
    c.strokeText(clockText, x, y);
}

function addLeadingZeroWhenNecessary(s){
    return (s < 10 ? '0' : '') + s;
}


drawClock();

setInterval(drawClock, 1000);
