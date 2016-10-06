numbers = [1,2,3,4,5];

console.log(
    "Total Sum",
    numbers.reduce(function(previous,current,index,array){
        return previous + current;
    })
);

console.log("Total Sum",
    numbers.reduce((prev,cur)=>prev+cur)
);

people = [
    {
        name: 'Joe Schmoe',
        yearsExperience: 1,
        department: 'IT'
    },
    {
        name: 'Sally Sallerson',
        yearsExperience: 15,
        department: 'Engineering'
    },
    {
        name: 'Bill Billson',
        yearsExperience: 5,
        department: 'Engineering'
    },
    {
        name: 'Jane Janet',
        yearsExperience: 11,
        department: 'Management'
    },
    {
        name: 'Bob Hope',
        yearsExperience: 9,
        department: 'IT'
    }
];

function classifyExperience(employee) {
    years = employee.yearsExperience;

    if (years <= 1)  return 'NEWBIE';
    if (years <= 5)  return 'AMATEUR';
    if (years <= 10) return 'PRO';

    return 'EXPERT';
}

console.log("All experience sum",
    people.reduce((sum,current)=>sum+current.yearsExperience,0)
);

departmentExperienceSums = people.reduce((accumulator,current)=>{
    department = current.department;
    if(!accumulator[department]){
        accumulator[department]=0
    }
    accumulator[department] += current.yearsExperience;
    return accumulator;
},{});
console.log("Sum each department's collective experience",departmentExperienceSums);

groupByExperience = people.reduce((accumulator,current)=>{
    xpClass = classifyExperience(current);
    if( !accumulator[xpClass] ){
        accumulator[xpClass] = [];
    }
    accumulator[xpClass].push(current.name);
    return accumulator;
},{});
console.log("Group employees by experience",groupByExperience);

numEmployeesByDept = people.reduce((accumulator,current)=>{
    if(!accumulator[current.department]){
        accumulator[current.department] = 0;
    }
    accumulator[current.department]++;
    return accumulator;
},{});
console.log("Count the number of employees in each department",numEmployeesByDept);

