interface StringArray{
    [index:number]:string;
}

//var myArray:StringArray;
var myArray=["Figo","Andy"];
console.log(myArray[0]);

interface Dictionary {
    [index: string]: string;
    length: number;
}