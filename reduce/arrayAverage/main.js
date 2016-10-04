function reducer(accumulator,value,index,array){
    var intermediaryValue = accumulator + value;
    if( index === array.length-1 ){
        return intermediaryValue / array.length;
    }
    return intermediaryValue;
}

var data = [1,2,3,3,4,5,3,1]
var average = data.reduce(reducer,0);
console.log(average)