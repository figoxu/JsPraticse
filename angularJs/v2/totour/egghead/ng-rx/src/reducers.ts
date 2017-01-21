export const HOUR='HOUR';
export const SECOND='SECOND';

export const clock = (state:Date = new Date(),{type}) => {
  const date = new Date(state.getTime());
  console.log("@type:",type," @state:",state)
  switch (type){
    case HOUR:
      date.setSeconds(date.getSeconds()+1);
          return date;
    case SECOND:
      date.setHours(date.getHours()+1);
          return date;
  }
  return state;
};
