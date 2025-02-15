// // const display = document.getElementById("display");
// const display = document.getElementById("display");

// function appendToDisplay(input){
// display.value += input;
// }

// function clearDisplay(){
//     display.value="";

// }

// function calculate(){
// try {
//     display.value= eval(display.value);
// } catch (error) {
//     display.value=`ERROR!!!`;
// }

// }


// const display = document.getElementById("display");

// function appendToDisplay(input) {
//     if (display) {
//         display.value += input;
//     } else {
//         console.error("Display element not found");
//     }
// }

// function clearDisplay() {
//     if (display) {
//         display.value = "";
//     } else {
//         console.error("Display element not found");
//     }
// }

// function calculate() {
//     if (display) {
//         try {
//             display.value = eval(display.value); // Consider replacing eval with a safer alternative
//         } catch (error) {
//             display.value = "ERROR!!!";
//         }
//     } else {
//         console.error("Display element not found");
//     }
// }

document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");

    window.appendToDisplay = function(input) {
        if (display) {
            display.value += input;
        } else {
            console.error("Display element not found");
        }
    }

    window.clearDisplay = function() {
        if (display) {
            display.value = "";
        } else {
            console.error("Display element not found");
        }
    }

    window.calculate = function() {
        if (display) {
            try {
                display.value = eval(display.value); // Consider replacing eval with a safer alternative
            } catch (error) {
                display.value = "ERROR!!!";
            }
        } else {
            console.error("Display element not found");
        }
    }
});