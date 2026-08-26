import { BASE_URL, formatUpperCaseString } from './BaseFile_Export_testutil.js';

console.log(BASE_URL);                                   //https://app.vwo.com

let result = formatUpperCaseString("Pramod");
console.log(result);                                  //PRAMOD

// console.log(fname);               // if try to call fname from the basefile it wont accept bcoz there export not specified for this