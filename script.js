/*alert("hello");
[1, 2].forEach(alert);
var result = prompt("вопрос", 100);
alert(result);
var isAdmin = confirm("Вы - администратор?");

alert(isAdmin);

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

checkAge(105)*/

//var canvas = document.getElementById("myCanvas");
//var ctx = canvas.getContext("2d");
var canvas = document.createElement("canvas");
var body = document.getElementsByTagName("body")[0];
canvas.setAttribute("width", 600);
canvas.setAttribute("height", 400);
canvas.setAttribute("id", "canvas")
body.appendChild(canvas);
var br = document.createElement("br");
body.appendChild(br);
var btn = document.createElement("button");
btn.innerText = "press me";
btn.setAttribute("onclick", "downloadImage()");
body.appendChild(btn);


function draw(callback) {
    var ctx = document.getElementById('canvas').getContext("2d");
    var img = new Image();
    var counter = 0;
    img.onload = function () {
        ctx.drawImage(img, 0, 0);
        counter++;
        if (counter === 4) {
            callback();
        }
    };

    var img2 = new Image();
    img2.onload = function () {
        ctx.drawImage(img2, 300, 200);
        counter++;
        if (counter === 4) {
            callback();
        }
    }

    var img3 = new Image();
    img3.onload = function () {
        ctx.drawImage(img3, 0, 200);
        counter++;
        if (counter === 4) {
            callback();
        }
    }

    var img4 = new Image();
    img4.onload = function () {
        ctx.drawImage(img4, 300, 0);
        counter++;
        if (counter === 4) {
            callback();
        }
    }
    img.src = 'https://source.unsplash.com/collection/1127163/300x200';
    img2.src = 'https://source.unsplash.com/collection/1127177/300x200?=1';
    img3.src = 'https://source.unsplash.com/collection/1147624/300x200?=2';
    img4.src = 'https://source.unsplash.com/collection/1065412/300x200?=3';

}


function drawBlack() {
    var ctx = document.getElementById('canvas').getContext("2d");
    ctx.rect(0, 0, 600, 400);
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.fill();
}

function parseQuote(data) {
    //alert(data.quoteText);
    console.log("gettext");
    splitText(data.quoteText);
    return data.quoteText; // server response

}

function getText() {
    console.log("gettext");
    $.ajax({
        url: "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=parseQuote",
        // The name of the callback parameter, as specified by the YQL service
        jsonp: "callback",
        // Tell jQuery we're expecting JSONP
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
    console.log(len);
    for (var i = 0; i < rows.length; i++) {
        ctx.fillText(rows[i], 300, 200 - len * dy);
        len--;
    }
    //ctx.fillText("Hello world Hello world Hello world", 300, 200);
}

function splitText(text) {
    console.log("gettext");
    var words = text.split(' ');
    console.log(words);
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
    // for (var i = 0; i < words.length; i++) {
    //     a += words[i].length;
    //     str += " ";
    //     str += words[i];
    //     words.slice[0, 1];
    //     if (a > 30) {
    //         a = 0;
    //         rows.push(str);
    //         str = "";
    //     }
    // }
    console.log(rows);
    drawText(rows);
}

function downloadImage() {
    var canvas = document.getElementById('canvas');
    console.log(canvas);
    var dataURL = canvas.toDataURL("image/jpeg");
    var link = document.createElement("a");
    link.href = dataURL;
    link.download = "my-image-name.jpg";
    link.click();
}

/*
function getText() {
    var ctx = document.getElementById('canvas').getContext("2d");
    // 1. Создаём новый объект XMLHttpRequest
    var xhr = new XMLHttpRequest();
    // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
    xhr.open('GET', 'phones.json', false)
    // 3. Отсылаем запрос
    xhr.send();
    // 4. Если код ответа сервера не 200, то это ошибка
    if (xhr.status != 200) {
        // обработать ошибку
        alert(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
    } else {
        // вывести результат
        alert(xhr.responseText); // responseText -- текст ответа.
    }
}
*/


// https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=parseQuote
draw(drawBlack);

//getText();
//drawBlack();
setTimeout(function () { getText() }, 7000);


// input = document.createElement("input");
// input.type = "button";
// input.value = "Remove";
// input.setAttribute("onclick", "remove_market_meta('MarkeID9')");
// input.
//fragment.appendChild("input");

//setTimeout(function () { downloadImage() }, 10000)
