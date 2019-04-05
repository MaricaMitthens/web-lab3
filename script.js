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
    alert(data.quoteText);
}

function getText() {
    // $.get("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=parseQuote", function (data, status) {
    //     alert("Data: " + data + "\nStatus: " + status);
    // });
    $.ajax({
        url: "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=parseQuote",
        // The name of the callback parameter, as specified by the YQL service
        jsonp: "callback",

        // Tell jQuery we're expecting JSONP
        dataType: "jsonp",

        // Work with the response
        success: function (response) {
            alert(response); // server response
        }
    });
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
getText();
//drawBlack();

