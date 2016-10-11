"use strict";
function* greet() {
    console.log(`Generators are "Lazy"`);
    yield "How";
    console.log(`Called Second Times`);
    yield "Are";
    console.log(`Called before "You?"`);
    yield "You";
    console.log(`Called when "done"`);
}

var greeter = greet();
console.log(greeter.next());
console.log(greeter.next());
console.log(greeter.next());
console.log(greeter.next());

console.log("==============")

var greeter2 = greet();
for(let word of greeter2){
    console.log(word)
}