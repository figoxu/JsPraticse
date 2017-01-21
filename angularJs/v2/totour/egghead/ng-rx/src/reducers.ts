export const HOUR='HOUR';
export const SECOND='SECOND';
export const ADVANCE='ADVANCE';

export const clock = (state:Date = new Date(),{type,payload} = {type:"",payload:0}) => {
  const date = new Date(state.getTime());
  switch (type){
    case HOUR:
      date.setHours(date.getHours()+payload);
          return date;
    case SECOND:
      date.setSeconds(date.getSeconds()+payload);
          return date;
  }
  return state;
};

const defaultPeople = [
  {name:"Figo",time:clock()},
  {name:"John",time:clock()},
  {name:"Nancy",time:clock()},
  {name:"Drew",time:clock()},
  {name:"Andy",time:clock()}
];

export const people = (state = defaultPeople,{type,payload})=>{
    switch (type){
      case ADVANCE:
        return state.map((person)=>{
          if(payload===person){
            return {
              name:person.name,
              time:clock(person.time,{type:HOUR,payload:5})
            }
          }
          return person;
        });

      default:
        return state;
    }
};

