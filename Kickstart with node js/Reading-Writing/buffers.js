let arr = [1,2,3,4]

let bufferValue = Buffer.from(arr);
console.log(bufferValue);

let strr = "ABC"
let bufferValue1 = Buffer.from(strr);
console.log(bufferValue1);

let str = "ABC";
let arr2 = " XYZ";

// convert both to Buffer
let buffer1 = Buffer.from(str);
let buffer2 = Buffer.from(arr2);

// concat both Buffers
let combinedBuffer = Buffer.concat([buffer1, buffer2]);

console.log(combinedBuffer);         // raw Buffer
console.log(combinedBuffer.toString()); // human-readable output
