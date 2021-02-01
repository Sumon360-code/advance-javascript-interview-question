// closure maneh akta function er vitore onno akta function return kore variable add kore oitar man baranor jai r closely bahir theke call kora jai joto iccha

function closure(){
    let value = 0;
    return function(){
        value++
        return value;
    }
}
let add = closure();
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
let add2 = closure();
console.log(add2());
console.log(add2());
console.log(add2());
console.log(add2());