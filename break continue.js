// break 
const number = [1,2,3,4,5,6,7,8,9];
for(i = 0; i < number.length; i++){  
    if(number[i] > 3){
        break;
    }
    console.log(number[i]); // if i dont want to see 4 of the output
}

// continue mane nagative kichu k run korbena remove kore dibe
const number = [1,-2,3,-4,5,-6,7,-8,9];
for(i = 0; i < number.length; i++){  
    if(number[i] <0){
       continue;
    }
    console.log(number[i]);
}
