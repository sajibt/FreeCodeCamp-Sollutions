import { uppercaseString, useexport } from "./useexport.js";
import { getPrimes } from "./modules/getPrimes.js";

console.log(getPrimes(1));

const uPPer = uppercaseString("sajib");
console.log(uPPer);

const rs = useexport(3, 4);
console.log(rs);
