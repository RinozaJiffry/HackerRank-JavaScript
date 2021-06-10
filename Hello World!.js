/*
Print the following two lines of output:
On the first line, print Hello, World! (this is provided for you in the editor).
On the second line, print the contents of parameter variable.

Sample Input 0
Welcome to 10 Days of JavaScript!

Sample Output 0
Hello, World!
Welcome to 10 Days of JavaScript!
*/

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   A line of code that prints "Hello, World!" on a new line is provided in the editor. 
*   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
*
*	Parameter:
*   parameterVariable - A string of text.
**/
function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
    console.log('Welcome to 10 Days of JavaScript!');
    
}


function main() {
    const parameterVariable = readLine();
    
    greeting(parameterVariable);
}
