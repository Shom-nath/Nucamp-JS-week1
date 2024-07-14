document.getElementById("buttonCToF").onclick = function() {
    // Define the values to populate
    const formData = {
        farenheit: 0
    };

    // Get the form element
    const tempFarenheitOutput = document.getElementById("farenheit1");
    const tempCelciusInput = document.getElementById("celcius1");

    //Convert to Farenheit
    let inputTempVal = tempCelciusInput.value;
    farenheit = convertCelciusToFarenheit(inputTempVal);
    console.log(farenheit);


    

    // Set the values of the form elements
    tempFarenheitOutput.value = farenheit;
};

function convertCelciusToFarenheit(inputTempVal){
    return(1.8 *inputTempVal + 32);
}


document.getElementById("buttonFToC").onclick = function() {
    // Define the values to populate
    const formData = {
        celcius: 0
    };
    // console.log("Inside buttonFToC");

    // Get the form element
    const tempFarenheitInput = document.getElementById("farenheit2");    
    const tempCelciusOutput = document.getElementById("celcius2");

    //Convert to Farenheit
    let inputTempVal = tempFarenheitInput.value;
    // console.log(inputTempVal);
    celcius = convertFarenheitToCelcius(inputTempVal);
    // console.log(celcius);


    

    // Set the values of the form elements
    tempCelciusOutput.value = celcius;
};

function convertFarenheitToCelcius(inputTempVal){
    return((inputTempVal-32)*5/9);
}