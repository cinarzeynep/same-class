const button = [document.querySelectorAll('.btn')];
const colorBox = [document.querySelectorAll('.color-area')];

const color = ["bg-danger", "bg-primary", "bg-success"];

const length = button[0].length = colorBox[0].length = color.length;



for (let i = 0; i < length; i++) {
    button[0][i].addEventListener('click', function() {
        if(colorBox[0][i].className.includes("bg-dark")) {
            colorBox[0][i].classList.remove("bg-dark");
            colorBox[0][i].classList.add(color[i]);
            for (let j = 1; i + j <= length - 1; j++) {
                if(colorBox[0][i+j].className.includes(color[i+j])) {
                    colorBox[0][i+j].classList.remove(color[i+j]);
                    colorBox[0][i+j].classList.add("bg-dark");
                }
            }
            for (let c = 1; i - c >= 0; c++) {
                if(colorBox[0][i-c].className.includes(color[i-c])) {
                    colorBox[0][i-c].classList.remove(color[i-c]);
                    colorBox[0][i-c].classList.add("bg-dark");
                }
                
            }
        } else {
            colorBox[0][i].classList.remove(color[i]);
            colorBox[0][i].classList.add("bg-dark");
        }
    });
};
