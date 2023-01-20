import {whitelist_select, raffle_select} from "./raffle.js";

// just a simple landing page to test the functions out with a simple 'node landing.js'
var c = whitelist_select(4);
console.log(c);

var c2 = raffle_select(3);
console.log(c2);