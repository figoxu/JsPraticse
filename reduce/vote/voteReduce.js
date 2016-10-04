var votes=[
    "angular",
    "angular",
    "react",
    "react",
    "react",
    "angular",
    "ember",
    "react",
    "vanillac"
];
var initialValue={};
var reducer = function(tally,vote){
    if(!tally[vote]){
        tally[vote]=1
    }else{
        tally[vote]=tally[vote]+1;
    }
    return tally;
};
var result = votes.reduce(reducer,initialValue);
console.log(result)


