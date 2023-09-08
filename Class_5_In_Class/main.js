/* /* // Exercise 1

function outerFunction() {
    let outerVar = "I'm Outside!";

    function innerFunction() {
        let innerVar = "I'm Inside!";
        console.log(outerVar);
        console.log(innerVar);
    }

    innerFunction();
}

outerFunction();

// outerVar and innerVar only exist within the context of the function
// If I tried to console.log them outside of the context of the function it wouldn't work
// Therefore they are within the local scope of the function



// Exercise 2

function mainFunction() {
    // Call the hoistedFunction here
    hoistedFunction();
    // Now, declare the hoistedFunction below
    function hoistedFunction () {
        console.log('hi')
    }
}

mainFunction(); */

// This works because all the mainFunction really DOES ON ITS OWN is call the hoistedFunction.
// The hoistedFunction hasn't been declared yet line by line on the code before it is called
// But JavaScript will compile all of this code before it runs even a single line
// When it compiles the code, it hoists all declarations to the top of their respective scope
// Therefore it moves the declaration of hoistedFunction to the top of its scope above where it is called and thus the function runs





// Exercise 3
/* 
function outerFunc() {
    let outerVar = 'Outer Function Scoped Var';

    return function innerFunc() {
        return(outerVar);
    }

    innerFunc();
}

    const res = outerFunc();

    console.log(res());
 */
// So what this is doing is first creating the function "outerFunc"
// Then within that function we are declaring the variable "outerVar"
// Then we are returning the new function "innerFunc"
// All the innerFunc does is return whatever the value of the variable "outerVar" is
// Then we call the innerFunc within the outerFunc so that the value of outerVar actually gets returned
// Then we have to turn outerFunc into a variable for some reason?
// Then we console log the new variable that essentially just contains the value of the outerFunc




// Exercise 4

let myVar = 654864;

function modifyGlobal() {
    // Try to modify the global variable here
    myVar = '2838';
    console.log(myVar);
}

function localScopeTest() {
    // Declare a local variable with the same name as the global variable
    let myVar ='228283838388';
    console.log(myVar);
}

modifyGlobal();
localScopeTest();
// Call bothfuncitons here

// This work is incomplete, I'll get to it later


