

/***
 * 
 * question:-Counter Object
Attribute:
count: A number that starts at 0.
Methods:
increment: A regular function that adds 1 to count and returns the new count.
reset: A regular function that resets count back to 0 and returns the updated count.
Note:

The code executes:
Calling increment() twice, which prints the new count each time.
Calling reset(), which prints 0 after resetting the count.

The Object should contain:
-Attribute: 
     -count
 -Method:
     -increment
     -reset
***/

const Counter = {
    // your implementation here

    count: 0,
    increment:  function(){
        this.count += 1;
        return this.count;
    },
    reset: function() {
    this.count = 0;
    return this.count;
    }
};



console.log(Counter.increment()); 
console.log(Counter.increment()); 
console.log(Counter.reset()); 

