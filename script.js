var canvas = document.createElement("canvas");
var body = document.getElementsByTagName("body")[0];
canvas.setAttribute("width", 600);
canvas.setAttribute("height", 400);
canvas.setAttribute("id", "canvas")
body.appendChild(canvas);
var br = document.createElement("br");
body.appendChild(br);
var genButton = document.createElement("button");
genButton.innerText = "Generate new collage";
genButton.setAttribute("onclick", "draw()");
body.appendChild(genButton);
var saveButton = document.createElement("button");
saveButton.innerText = "Download image";
saveButton.setAttribute("onclick", "downloadImage()");
body.appendChild(saveButton);


function draw() {
    var ctx = document.getElementById('canvas').getContext("2d");
    var img = new Image();
    var counter = 0;
    img.onload = function () {
        ctx.drawImage(img, 0, 0);
        counter++;
        if (counter === 4) {
            drawBlack();
        }
    };

    var img2 = new Image();
    img2.onload = function () {
        ctx.drawImage(img2, 300, 200);
        counter++;
        if (counter === 4) {
            drawBlack();
        }
    }

    var img3 = new Image();
    img3.onload = function () {
        ctx.drawImage(img3, 0, 200);
        counter++;
        if (counter === 4) {
            drawBlack();
        }
    }

    var img4 = new Image();
    img4.onload = function () {
        ctx.drawImage(img4, 300, 0);
        counter++;
        if (counter === 4) {
            drawBlack();
        }
    }
    img.crossOrigin = "Anonymous";
    img2.crossOrigin = "Anonymous";
    img3.crossOrigin = "Anonymous";
    img4.crossOrigin = "Anonymous";
    img.src = 'https://source.unsplash.com/collection/1127163/300x200?id=' + Math.random();
    img2.src = 'https://source.unsplash.com/collection/1127177/300x200?id=' + Math.random();
    img3.src = 'https://source.unsplash.com/collection/1147624/300x200?id=' + Math.random();
    img4.src = 'https://source.unsplash.com/collection/1065412/300x200?id=' + Math.random();
}


function drawBlack() {
    var ctx = document.getElementById('canvas').getContext("2d");
    ctx.rect(0, 0, 600, 400);
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.fill();
    getText();
}

function parseQuote(data) {
    splitText(data.quoteText);
}

function getText() {
    $.ajax({
        url: "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=parseQuote",
        jsonp: "callback",
        dataType: "jsonp",
    });

}


function drawText(rows) {
    var ctx = document.getElementById('canvas').getContext('2d');
    ctx.font = "24px serif";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    var dy = 30;
    var len = rows.length / 2 - 0.5;
    for (var i = 0; i < rows.length; i++) {
        ctx.fillText(rows[i], 300, 200 - len * dy);
        len--;
    }
}

function splitText(text) {
    var words = text.split(' ');
    var a = 0;
    var rows = [];
    var str = "";
    while (words.length != 0) {
        if (a > 30) {
            a = 0;
            rows.push(str);
            str = "";
        }
        a += words[0].length;
        str += " ";
        str += words[0];
        words.splice(0, 1);
    }
    rows.push(str);
    drawText(rows);
}

function downloadImage() {
    var canvas = document.getElementById('canvas');
    var dataURL = canvas.toDataURL("image/jpeg");
    var link = document.createElement("a");
    link.href = dataURL;
    link.download = "my-image-name.jpg";
    link.click();
}


draw();

