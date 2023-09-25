// WEB303 Assignment 2

document.getElementById('prospect').addEventListener('click', () => load("prospect.html"))

document.getElementById('convert').addEventListener('click', () => load("convert.html"))

document.getElementById('retain').addEventListener('click', () => load("retain.html"))

function load(file) {

    $('#content').empty();

    var xhr = new XMLHttpRequest();
    xhr.open('GET', file, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            let el = document.getElementById("content");
            el.innerHTML = xhr.responseText;
            $('#content').fadeIn();
        }

    };

    xhr.send();

}
