// This is just a sample file to see what the outputs look like for each function called
// in raffle.js: the actual file is more detailed and involves realtime data retrieval
export function getListees(code, x){
    var arr = [];
    var i = 0;
    while (i < 10){
        arr.push(i.toString());
        i += 1;
    }
    return arr;
}

export function getRate(x){
    return Math.random()*0.100;

}

export function getSlots(code, x){
    return 3;
}

export function updateRate(add, code, res){
    return;
}

