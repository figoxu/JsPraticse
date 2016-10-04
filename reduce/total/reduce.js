var data=[15,3,20];
var reducer = function(accumulator,item){
    return accumulator + item;
};
var initialValue = 0;
var total = data.reduce(reducer,initialValue);
console.log("The sum is ",total);