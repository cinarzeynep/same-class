const button = [document.querySelectorAll('.btn')];
const colorBox = [document.querySelectorAll('.color-area')];


/* To use a single i(index) value for the three arrays, the elements of the color array must be in a specific order. For example, the color that should appear when the first button is clicked should be first. */
const color = ["bg-danger", "bg-primary", "bg-success"];

const length = button[0].length = colorBox[0].length = color.length;
/* When we try to print the length of the button to the console, the result is 1. Because button array returns one NodeList. Three buttons are sorted inside index 0 of this NodeList. The same is true for colorBox. */



for (let i = 0; i < length; i++) {
    button[0][i].addEventListener('click', function() {
        if(colorBox[0][i].className.includes("bg-dark")) {
            colorBox[0][i].classList.remove("bg-dark");
            colorBox[0][i].classList.add(color[i]);
            //I wrote two separate for loops so that when a button is clicked, if the other buttons are colored, they turn black.

            /* The first loop will check for indexes with value greater than i. To do this, it will add to i, starting from 1 and incrementing by 1 each time. It will check if colorBox is colored at the new index value obtained in this way. */
            for (let j = 1; i + j <= length - 1; j++) {
                if(colorBox[0][i+j].className.includes(color[i+j])) {
                    colorBox[0][i+j].classList.remove(color[i+j]);
                    colorBox[0][i+j].classList.add("bg-dark");
                }
            }
            /* The second loop will check for indexes with values smaller than i. To do this, it will subtract from i, starting at 1 and incrementing by 1 each time. Thus, there will be a regular check for all indexes except i. */
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

