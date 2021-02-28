//arrays-> they are reference type, hence 
//we write datatype as const and still be able to edit the array
const hobbies = ['Sports', 'Cooking'];

for (let hobby of hobbies) {
    console.log(hobby);
}

//maps do not modify original arrays
console.log(hobbies.map( hobby => {
    return 'Hobby: ' + hobby;
}));
hobbies.push('Programming');
console.log(hobbies);

//copying an array->using slice method and spread operator
const copiedArray1 = hobbies.slice();
console.log(copiedArray1);
const copiedArray2 = [...hobbies];
console.log(copiedArray2);
//if we dont use ... in array2, we create an array of arrays
//(more like array of vectors when compared to c++)

//now using the rest operator:
const toArray = (...args) => {
    return args;
};
console.log(toArray(1 , 2 , 3 , 4));

//1. called spread when properties or elements pulled out of arrays or objects

//2. called rest when used to merge multiple arguements into an array
//while using it in arguement list of a function


//showing example for Array Destructuring
let [hobby1,hobby2] = hobbies; //let or const depending on the requirement
console.log(hobby1,hobby2);