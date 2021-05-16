const blue = document.getElementById("blue");
let bluey = 0;
let bluex = 0;

window.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'ArrowUp':
            bluey += 10;
            blue.style.bottom = `${bluey}px`;
            break;
        case 'ArrowDown':
            bluey -= 10;
            blue.style.bottom = `${bluey}px`;
            break;
        case 'ArrowLeft':
            bluex -= 10;
            blue.style.left = `${bluex}px`;
            break;
        case 'ArrowRight':
            bluex += 10;
            blue.style.left = `${bluex}px`;
            break;
    }
});