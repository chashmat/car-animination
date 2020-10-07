let car = document.getElementById('car');

document.addEventListener('keypress', (e) => {
    if (e.keyCode == 13 || e.keyCode == 32) {
        if (car.getAttribute("src") == "./images/Img_06.png") {
            car.setAttribute("src", "./images/Img_05.png");
        } else {
            car.setAttribute("src", "./images/Img_06.png");
        }
    }
})