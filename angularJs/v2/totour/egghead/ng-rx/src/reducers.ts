export const HOUR='HOUR';
export const SECOND='SECOND';

export const clock = (state:Date = new Date(),{type,payload}) => {
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
  {name:"Figo",time:""},
  {name:"John",time:""},
  {name:"Nancy",time:""},
  {name:"Drew",time:""},
  {name:"Andy",time:""}
];

export const people = (state = defaultPeople,{type,payload})=>{
    switch (type){
      default:
        return state;
    }
};

