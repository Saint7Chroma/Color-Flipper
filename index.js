const body = document.getElementsByTagName("body")[0]

//needed to add a comment to see if the changes are being pushed to the repo

function setColor(name) {
    body.style.backgroundColor = name;
}

function randomColor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
}