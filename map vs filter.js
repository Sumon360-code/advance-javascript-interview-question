get square number by using for loop
const arrayNumbers = [2, 3, 4, 5, 6, 7, 8, 9];
const output = [];
for(let i = 0; i < arrayNumbers.length; i++){
    let element = arrayNumbers[i];
    let result = element * element;
    output.push(result);
}
console.log(output);


using map amra er vitore 3 ta perametar nite pari 1. element, 2.index, 3.array
 const arrayNumbers = [2, 3, 4, 5, 6, 7, 8, 9];
arrayNumbers.map(function(element, index, array){
    console.log(element, index,array);
});


find out squar number from an array by using map
 const arrayNumbers = [2, 3, 4, 5, 6, 7, 8, 9];
 const result = arrayNumbers.map(function(element){
    return element * element;
});
console.log(result);


get square result es6 verion
const arrayNumbers = [2, 3, 4, 5, 6, 7, 8, 9];
const numbers /* function name */ = element/*function er parameter */ => element * element;
const number = x => x * x;


short way to get square result
const arrayNumbers = [2, 3, 4, 5, 6, 7, 8, 9];
const result = arrayNumbers.map(x=>x*x) ;
console.log(result)


filter maneh holo conditionally kono kichu k khuje ber kore
for example
const arrayNumbers = [2, 3, 4, 5, 6, 7, 8, 9];
const result = arrayNumbers.filter(x => x > 5);
console.log(result);


find mane holo age ba porer jekono akta k dekhabe
const arrayNumbers = [2, 3, 4, 5, 6, 7, 8, 9];
const result = arrayNumbers.find(x => x > 5);
console.log(result);