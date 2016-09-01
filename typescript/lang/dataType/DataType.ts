//Bool
var flag: boolean = false;
//Êý×Ö
var height: number = 171;
//String
var name : string = "figo";
name = "figo.xu";
//Array
var nameArray:string[] = ["dios","figo","david","vash","shine","shane"];
var salaryArray:Array<number> = [10000,20000,30000,40000,50000,30000];
//Ã¶¾Ù
enum Color{Red,Green,Blue};
var c:Color = Color.Red;

enum IncomeLevel{Lower=1,Common=2,High=3}
var myIncome = IncomeLevel.Common
console.log(myIncome)

//Any
var notSure:any = 4;
notSure = "maybe string"
notSure = false
notSure = 100
notSure = [19,20,18]

//Void
function warmMsg():void{
    console.log("this is warnMsg do not return any data")
}


