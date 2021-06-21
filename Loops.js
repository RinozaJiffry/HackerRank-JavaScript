/**
Sample Input 0
javascriptloops

Sample Output 0
a
a
i
o
o
j
v
s
c
r
p
t
l
p
s
**/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

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

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    var consonant = '';
    for (var i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
        console.log(s[i]);
    }else {
        consonant += s[i] + '\n';
    }
    
    }
    console.log(consonant.trim());
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}
