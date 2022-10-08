
//get the values from the page
//starts or controller function
function getValues() {
    //get values from the page
    let startValue = document.getElementById("startValue").value
    let endValue = document.getElementById("endValue").value 
    

    //We need to validate our input
    //parse into Integers
    startValue = parseInt(startValue); 
    endValue = parseInt(endValue); 
    
    if(Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //we call generateNumbers
        let numbers = generateNumbers(startValue, endValue)
        //we call displayNumbers
        displayNumbers(numbers);
    }else {
        alert("You must enter integers"); 
    }
    
}

//generate numbers from the startvalue to the endvalue
//logic function(s)
function generateNumbers(startValue, endValue) {

    let numbers = [];

    //we want to get all numbers from start to end

    for(let i = startValue; i <= endValue; i++) {

        //this will execute in a loop until i = endValue
        numbers.push(i); 
    }

    return numbers; 
}

//display the numbers and mark even numbers bold
//display or view functions
function displayNumbers(numbers) {

    let templateRows = ""

    let className = "even"; 

    for(let i = 0; i < numbers.length; i++) {

        let number = numbers[i]
        if(number % 2 == 0) {
            className = "even"
        }
        else {
            className = "odd"
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;

    }
    document.getElementById("results").innerHTML = templateRows
}