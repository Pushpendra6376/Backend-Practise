// note:-   setTiomeout me return nhi kra sakte kuki return function ke lie krate hai isiconsole.log ka use krna hota hai jissse jo valuse print krani hai bo print ho jae 

/***
The Object should contain:
-Attribute: 
     -count
 -Method:
     -increment 
     -incrementWithDelay 
***/
const Counter = {
    // your implementation here
    count: 0,
    increment: function() {
        this.count += 1;
        return this.count;
    },
    incrementWithDelay: function (delay) {
        setTimeout(() => {
            this.count += 1;
            console.log(this.count);
        }, delay)
    }
};


console.log(Counter.increment());    
console.log(Counter.increment());    
Counter.incrementWithDelay(2000);
