const redButton = document.querySelectorAll('.btn')[0];
const blueButton = document.querySelectorAll('.btn')[1];
const greenButton = document.querySelectorAll('.btn')[2];

const firstDiv = document.querySelectorAll('.color-area')[0];
const secondDiv = document.querySelectorAll('.color-area')[1];
const thirdDiv = document.querySelectorAll('.color-area')[2];


redButton.addEventListener('click', function() {
    if(firstDiv.className.includes("bg-dark")) {
        firstDiv.classList.remove("bg-dark");
        firstDiv.classList.add("bg-danger");
        if(secondDiv.className.includes("bg-primary")) {
            secondDiv.classList.remove("bg-primary");
            secondDiv.classList.add("bg-dark");
        }
        if(thirdDiv.className.includes("bg-success")) {
            thirdDiv.classList.remove("bg-success");
            thirdDiv.classList.add("bg-dark");
        }
    } else {
        firstDiv.classList.remove("bg-danger");
        firstDiv.classList.add("bg-dark");
    }
});


blueButton.addEventListener('click', function() {
    if(secondDiv.className.includes("bg-dark")) {
        secondDiv.classList.remove("bg-dark");
        secondDiv.classList.add("bg-primary");
        if(firstDiv.className.includes("bg-danger")) {
            firstDiv.classList.remove("bg-danger");
            firstDiv.classList.add("bg-dark");
        }
        if(thirdDiv.className.includes("bg-success")) {
            thirdDiv.classList.remove("bg-success");
            thirdDiv.classList.add("bg-dark");
        }
    } else {
        secondDiv.classList.remove("bg-primary");
        secondDiv.classList.add("bg-dark");
    }
});


greenButton.addEventListener('click', function() {
    if(thirdDiv.className.includes("bg-dark")) {
        thirdDiv.classList.remove("bg-dark");
        thirdDiv.classList.add("bg-success");
        if(firstDiv.className.includes("bg-danger")) {
            firstDiv.classList.remove("bg-danger");
            firstDiv.classList.add("bg-dark");
        }
        if(secondDiv.className.includes("bg-primary")) {
            secondDiv.classList.remove("bg-primary");
            secondDiv.classList.add("bg-dark");
        }
    } else {
        thirdDiv.classList.remove("bg-success");
        thirdDiv.classList.add("bg-dark");
    }
});
