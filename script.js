// function trailingZeros(n) {
//   //your JS code here. If required.
// }

// const input = prompt("Enter a number");
// alert(trailingZeros(input));

function trailingZeros(n) {
    let count = 0;
    
    // Count factors of 5 in all numbers from 1 to n
    while (n >= 5) {
        n = Math.floor(n / 5);
        count += n;
    }
    
    return count;
}

// Get input via prompt and show result via alert
const input = parseInt(prompt("Enter a non-negative integer:"), 10);
if (!isNaN(input) && input >= 0) {
    alert(`The number of trailing zeros in ${input}! is: ${trailingZeros(input)}`);
} else {
    alert("Please enter a valid non-negative integer.");
}
