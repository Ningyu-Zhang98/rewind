//Get the string from the page

//Controller function
function getValues(){

    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayString(revString);
}


//Reverse the string
//Logic functions
function reverseString(uString){
    let revString = [];
    
    for(let index = uString.length-1; index>-1; index--){
        revString+=uString[index]
    }
    return revString
}


//Display the reversed string
//View functions
function displayString(revString){
    //Write to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}` 
    //Show the alert box
    document.getElementById("alert").classList.remove("invisible");

}