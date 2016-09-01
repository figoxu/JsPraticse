interface ClockInterface{
    currentTime:Date;
}

class Clock implements ClockInterface {
    currentTime:Date;
    setTime(d:Date){
        this.currentTime=d;
    }
    constructor(h:number,m:number){}
}
