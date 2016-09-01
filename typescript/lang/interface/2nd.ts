interface LabelObj {
    label : string
}

function printLabel(obj:LabelObj){
    console.log(obj.label)
}

var myObj = {size:10,label: "Hello Figo,How r u"}
printLabel(myObj);