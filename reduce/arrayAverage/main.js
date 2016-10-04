function reducer(accumulator,value,index,array){
    console.log("Value From Left:",value)
    var intermediaryValue = accumulator + value;
    if( index === array.length-1 ){
        return intermediaryValue / array.length;
    }
    return intermediaryValue;
}

var data = [1,2,3,3,4,5,3,1]
var average = data.reduce(reducer,0);
console.log(average);


var average = data.reduceRight(function(accumulator,value,index,array){
    console.log("Value From Right:",value)
    var intermediaryValue = accumulator + value;
    if( index === 0 ){
        return intermediaryValue / array.length;
    }
    return intermediaryValue;
},0);
console.log(average);