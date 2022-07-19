function newLine() {
    console.log("****************************************************************\n");
}

/* print odd numbers 1-20 */
newLine();
console.log("loading odds 1-20 loop...");

for (let i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(`odd number found: ${i}`);
    }
}

console.log("exiting odds 1-20 loop...\n");
newLine();

/* print values that are evenly divisible by 3 */
newLine();
console.log("loading divisible by 3 loop...");

for (let i = 100; i >= 0 ; i--) {
    if (i % 3 == 0) {
        console.log(`divisibly by 3: ${i}`);
    }
}
console.log("exiting divisible by 3 loop...\n");
newLine();

/* print the sequence */ 
newLine();
console.log("loading sequence loop...");

let sequence = [4, 2.5, 1, -0.5, -2, -3.5];

for (let i = 0; i < sequence.length; i++) {
    console.log(`sequence value at index ${i}: ${sequence[i]}`);
}

console.log("exiting sequence loop...\n");
newLine();

/* sigma loop */
newLine();
console.log("loading sigma loop...\n");

let num = 100;
let sum = 0;

function sigmaNums(num) {

    for (let i = 1; i <= num; i++){
        sum += i;
        console.log(sum);
    }
    return sum;
}

sigmaNums(num);

console.log(`\nsum is: ${sum}\n`);
console.log("exiting sigma loop...\n");
newLine();

/* factorial loop */
console.log("loading factorial loop...");
newLine();

let factor = 12;
let product = 1;

function multiplyNumRange(factor) {
    for (let i = 1; i <= factor; i++) {
        product *= i;
    }
    return product;
}

multiplyNumRange(factor);

console.log(`\nproduct is: ${product}\n`);
console.log("exiting factorial loop...\n");
newLine();