// Get the display element
let display = document.getElementById("display");


// Add number or operator to display
function addToDisplay(value) {
    display.value = display.value + value;
}


// Clear the display
function clearDisplay() {
    display.value = "";
}


// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}


// Calculate the result
function calculate() {

    try {

        // Check if display is empty
        if (display.value === "") {
            return;
        }

        // Calculate the expression
        display.value = eval(display.value);

    } catch (error) {

        // Show error for invalid input
        display.value = "Error";
    }
}
