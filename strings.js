console.log("Hello strings.js");
/*
INSTRUCTIONS:
1. Copy the code below into the JavaScript file
2. In your HTML, create an text input and a button.
3. The text input should only accept letters. No numbers.
4. Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.
5. Implement the logic in the alphabits function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.
6. Implement the logic in the palindrome function that determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
7. When the user presses the enter key in the text input, or clicks the button, set the value of the testString variable (see below) to the value of the input.
8. The output of each of the functions should immediately appear as well.*/

// **Variables**


function reversal(string) {
    var reversed = string.split("").reverse().join("");
    document.getElementById("output-1").innerHTML = `<p>Reversed String: ${reversed}</p>`;
}

function alphabits(string) {
    var srt = string.split("").sort().join("");
    document.getElementById("output-2").innerHTML = `<p>Alpha String: ${srt}</p>`;
}

function palindrome(string) {
    if(string === string.split("").reverse().join("")){
        console.log("string if is TRUE", "string", string, "stringrev: ", string.split("").sort().join(""));
        document.getElementById("output-3").innerHTML = `<p>Your string is a palindrome</p>`;
        }else{
            console.log("Else is in effect", string.split("").sort().join(""))
            document.getElementById("output-3").innerHTML = `<p>Your string is NOT a palindrome</p>`;
    }
}


var testString = "";
testString = document.getElementById("text-input");
console.log("testString", testString);
document.getElementById("button").addEventListener("click", function(){
    testString = document.getElementById("text-input").value;
    reversal(testString);
    alphabits(testString);
    palindrome(testString);
});
testString.addEventListener("keyup", function(event){
    if(event.keyCode === 13) {
        testString = document.getElementById("text-input").value;
        reversal(testString);
        alphabits(testString);
        palindrome(testString);
    }
})

// EXERCISE COMPLETE