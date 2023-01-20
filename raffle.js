import {getListees, getRate, getSlots, updateRate} from "./Data.js";
// The Data.js file is responsible for fetching and updating the user data
// and is not required to understand the whitelisting and raffle algorithms

export function raffle_select(code){
    var listees = getListees(code, 2);
    // 2 is the code for raffles
    var i = 0;
    var prev_rate;
    var w = 0.00;
    var weights = [];
    while (i < listees.length){
        prev_rate = getRate(listees[i]);
        w =  w + 1.00 - prev_rate;
        weights.push(w);
        i += 1;
    }
    let reqd_winners = getSlots(code, 2);
    var winners_found = 0;
    var winners = [];
    i = 0;
    while (winners_found < reqd_winners){
        var rand = Math.random() * weights[weights.length - 1];
        while (i < listees.length) {
            if (weights[i] > rand) {
                if (!winners.includes(listees[i])){
                    winners_found += 1;
                    winners.push(listees[i]);
                }
                
                
                break;
            }
            i += 1;

        }
        i = 0; 

    }
    i = 0;
    while (i < listees.length){
        if (winners.includes(listees[i])){
            updateRate(listees[i], 2, true);
        }
        else {
            updateRate(listees[i], 2, false);
        }
        i += 1;
    }
    return winners;
}

export function whitelist_select(code){
    var listees = getListees(code, 1);
    // 1 is the code for whitelists
    var i = 0;
    var prev_rate;
    var w = 0.00;
    var weights = [];
    while (i < listees.length){
        prev_rate = getRate(listees[i], 1);
        w =  w + 1.00 - 0.67*prev_rate;
        weights.push(w);
        i += 1;
    }
    
    let reqd_winners = getSlots(code, 1);
    var winners_found = 0;
    var winners = [];
    i = 0;
    while (winners_found < reqd_winners){
        var rand = Math.random();
        rand = rand * weights[weights.length - 1];
        //console.log(weights[weights.length - 1]);
        while (i < listees.length) {
            if (weights[i] > rand) {
                if (!winners.includes(listees[i])){
                    winners_found += 1;
                    winners.push(listees[i]);
                }
                
                
                break;
            }
            i += 1;
            
        }
        i = 0; 

    }
    
    i = 0;
    while (i < listees.length){
        if (winners.includes(listees[i])){
            updateRate(listees[i], 1, true);
        }
        else {
            updateRate(listees[i], 1, false);
        }
        i += 1;
    }
    
    return winners;
}