// // get students name
// let students = [
//     {id:10, name:'Sumon'},
//     {id:95, name: 'Rahat'},
//     {id:71, name:'Tanjid'},
//     {id:26, name:'kawser'},
//     {id:25, name:'Omar'},
// ];
// let addName = [];
// for(let i = 0; i < students.length; i++){
//     let element = students[i];
//     let findName = element.name;
//     addName.push(findName);
// }
// console.log(addName);

// get name and id by using map , filter and find property
let students = [
    {id:10, name:'Sumon'},
    {id:95, name: 'Rahat'},
    {id:71, name:'Tanjid'},
    {id:26, name:'kawser'},
    {id:25, name:'Omar'},
];

let name = students.map(students => students.name);
let nameByFilter = students.filter(students => students.id>10 );
let nameByFind = students.find(students => students.id > 26);
console.log(nameByFind);