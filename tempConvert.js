function getTemperatureValue(){
    const inputTemp = document.getElementById("celcius");
    const inputTempVal = inputTemp.value;
    console.log(inputTempVal);
    let tempFarenheit = convertCelciusToFarenheit(inputTempVal)
    console.log(tempFarenheit);
    farenheitOutput(tempFarenheit);
}

function convertCelciusToFarenheit(inputTempVal){
    return(1.8 *inputTempVal + 32);
}

// function farenheitOutput(tempFarenheit){
function farenheitOutput(){
    // console.log(tempFarenheit);
    document.addEventListener("DOMContentLoaded", function() {
        // Define the values to populate
        const formData = {
            farenheit: 10
        };

        // Get the form elements by their IDs
        const tempFarenheitOutput = document.getElementById("farenheit");

        // Set the values of the form elements
        tempFarenheitOutput.value = formData.farenheit;

    });
}