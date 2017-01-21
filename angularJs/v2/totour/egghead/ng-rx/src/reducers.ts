export const HOUR='HOUR';
export const SECOND='SECOND';

export const clock = (state:Date = new Date(),{type,payload}) => {
  const date = new Date(state.getTime());
  console.log("@type:",type," @state:",state)
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
