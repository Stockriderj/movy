const blue = document.getElementById("blue");
let y = 0;
let x = 0;
let width = 100;
let height = 100;

window.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'KeyW':
            y += 10;
            blue.style.bottom = `${y}px`;
            break;
        case 'KeyS':
            y -= 10;
            blue.style.bottom = `${y}px`;
            break;
        case 'KeyA':
            x -= 10;
            blue.style.left = `${x}px`;
            break;
        case 'KeyD':
            x += 10;
            blue.style.left = `${x}px`;
            break;
        case 'ArrowDown':
            height += 10;
            blue.style.height = `${height}px`;
            break;
        case 'ArrowUp':
            height -= 10;
            blue.style.height = `${height}px`;
            break;
        case 'ArrowRight':
            width += 10;
            blue.style.width = `${width}px`;
            break;
        case 'ArrowLeft':
            width -= 10;
            blue.style.width = `${width}px`;
            break;
    }
});