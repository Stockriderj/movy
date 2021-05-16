const blue = document.getElementById("blue");
let y = 0;
let x = 0;
let width = 100;
let height = 100;
const changeYBy = 50;
const changeXBy = 50;
const changeWidthBy = 10;
const changeHeightBy = 10;

function changeMovyProperty(type, property, changeBy) {
    switch (type) {
        case "position":

            switch (property) {
                case "x":
                    x += changeBy;
                    blue.style.right = `${x}px`;
                    break;
                case "y":
                    y += changeBy;
                    blue.style.bottom = `${y}px`;
            }

            break;
        case "size":

            switch (property) {
                case "width":
                    width += changeBy;
                    blue.style.width = `${width}px`;
                    break;
                case "height":
                    height += changeBy;
                    blue.style.height = `${height}px`;
            }

            break;

    }

}

window.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'KeyW':
            changeMovyProperty("position", "y", changeYBy);
            break;
        case 'KeyS':
            changeMovyProperty("position", "y", changeYBy - changeYBy * 2);
            break;
        case 'KeyA':
            changeMovyProperty("position", "x", changeXBy);
            break;
        case 'KeyD':
            changeMovyProperty("position", "x", changeXBy - changeXBy * 2);
            break;
        case 'ArrowDown':
            changeMovyProperty("size", "height", changeHeightBy);
            break;
        case 'ArrowUp':
            changeMovyProperty("size", "height", changeHeightBy - changeHeightBy * 2);
            break;
        case 'ArrowRight':
            changeMovyProperty("size", "width", changeWidthBy);
            break;
        case 'ArrowLeft':
            changeMovyProperty("size", "width", changeWidthBy - changeWidthBy * 2);
            break;
    }
});